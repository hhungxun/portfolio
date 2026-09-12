import { useId, useMemo, useState } from 'react';

/* The exact orientation response, evaluated in the browser rather than looked up.
   D_psi^2 = (4 pi / Z^2) \int_0^{rc} chi^2 e^{-a r^2} [I_0(b r^2) - I_0(b r^2 cos psi)] sin r dr
   The 4 pi / Z^2 prefactor cancels in the relative mismatch D_psi / ||K||_2, so the
   whole curve reduces to two radial quadratures of the same integrand. */

const A = 16;
const RC = 1.2;

const besselI0 = (x: number) => {
  const quarter = (x * x) / 4;
  let term = 1;
  let sum = 1;
  for (let k = 1; k < 60; k += 1) {
    term *= quarter / (k * k);
    sum += term;
    if (term < 1e-18 * sum) break;
  }
  return sum;
};

const STEPS = 400;
const NODES = Array.from({ length: STEPS + 1 }, (_, i) => {
  const r = (RC * i) / STEPS;
  // Simpson weight, times the smooth cutoff squared, the Gaussian, and the spherical area element.
  const weight = i === 0 || i === STEPS ? 1 : i % 2 ? 4 : 2;
  const chi = r < RC ? Math.exp(-(r * r) / (RC * RC - r * r)) : 0;
  return { r2: r * r, w: ((weight * RC) / (3 * STEPS)) * chi * chi * Math.exp(-A * r * r) * Math.sin(r) };
});

const overlap = (b: number, cosPsi: number) =>
  NODES.reduce((sum, node) => sum + node.w * besselI0(b * node.r2 * cosPsi), 0);

/** Relative L2 mismatch between a footprint and the same footprint rotated by psi. */
const mismatch = (contrast: number, psi: number) => {
  if (contrast === 0) return 0;
  const b = A * contrast;
  const self = overlap(b, 1);
  return Math.sqrt(Math.max(0, 2 * (1 - overlap(b, Math.cos(psi)) / self)));
};

const TAU = 2 * Math.PI;
const deg = (radians: number) => (radians * 180) / Math.PI;
/* Node and V8 disagree in the last bit or two on the Bessel sum, which is enough
   for React to call the SSR markup a hydration mismatch. Round every geometric
   attribute before it reaches an SVG attribute. */
const px = (value: number) => Math.round(value * 100) / 100;

const copy = {
  en: {
    eyebrow: 'One lap around a circle of latitude',
    title: 'Carry a lick around the sphere and it comes back turned',
    prompt:
      'Walk the contact once around a parallel without ever twisting your hand. It returns to the same spot pointing somewhere else. The curve on the right is the exact mismatch between the footprint you left and the footprint you would now leave.',
    route: 'route colatitude',
    elongation: 'elongation',
    pole: 'tight around the pole',
    equator: 'the equator',
    circular: 'round',
    elliptical: 'long and thin',
    start: 'start',
    frame: 'frame rotation',
    visible: 'visible turn (mod 180°)',
    response: 'relative mismatch',
    twist: 'twist needed to hold it',
    axisPsi: 'frame rotation ψ (degrees)',
    axisD: 'mismatch',
    hereLabel: 'this route',
    special: 'jump to the 60° coincidence',
    fortyfive: 'back to 45°',
    note60:
      'At 60° the frame comes back rotated by a full half-turn. Both axes of the ellipse reverse, so the footprint is identical and the mismatch is exactly zero. Geometry moved; nothing measurable did.',
    note:
      'A round footprint (elongation 0) is indifferent to all of this. Everything on this panel is the price of having a long axis.',
  },
  zh: {
    eyebrow: '沿一條緯線走一圈',
    title: '把舔痕帶著繞球一圈，回來就轉了',
    prompt:
      '手不刻意扭轉，讓接觸沿緯線走一整圈。回到原地，它卻指向別的方向。右邊那條曲線，是你原先留下的痕與現在會留下的痕之間的精確差距。',
    route: '路徑餘緯',
    elongation: '伸長程度',
    pole: '貼著北極',
    equator: '赤道',
    circular: '正圓',
    elliptical: '又長又扁',
    start: '起點',
    frame: '標架轉角',
    visible: '看得見的轉角（模 180°）',
    response: '相對差距',
    twist: '要壓住方向得扭多少',
    axisPsi: '標架轉角 ψ（度）',
    axisD: '差距',
    hereLabel: '這條路徑',
    special: '跳到 60° 那個巧合',
    fortyfive: '回到 45°',
    note60:
      '餘緯 60°，標架整整轉了半圈。橢圓的兩條軸同時反向，於是舔痕一模一樣，差距恰好是零。幾何動了，能量得到的東西沒動。',
    note: '正圓的舔痕（伸長程度 0）對這一切無感。這一頁上的每件事，都是「有長軸」的代價。',
  },
} as const;

const VIEW_TILT = 0.42; // radians; how far the sphere is tipped towards the reader

export default function LollipopHolonomyExplorer({ lang = 'en' }: { lang?: 'en' | 'zh' }) {
  const [colatitude, setColatitude] = useState(45);
  const [contrast, setContrast] = useState(0.45);
  const routeId = useId();
  const contrastId = useId();
  const t = copy[lang];

  const state = useMemo(() => {
    const theta = (colatitude * Math.PI) / 180;
    const holonomy = TAU * (1 - Math.cos(theta));
    const wrapped = ((deg(holonomy) % 180) + 180) % 180;
    const visible = wrapped < 1e-9 || 180 - wrapped < 1e-9 ? 0 : wrapped;
    const curve = Array.from({ length: 61 }, (_, i) => {
      const psi = (Math.PI * i) / 60;
      return { psi: deg(psi), value: mismatch(contrast, psi) };
    });
    const peak = Math.max(1e-9, ...curve.map((point) => point.value));
    return {
      theta,
      holonomyDeg: deg(holonomy),
      visible,
      here: mismatch(contrast, holonomy),
      twistPerLap: deg(TAU * Math.cos(theta)),
      curve,
      peak,
    };
  }, [colatitude, contrast]);

  // Orthographic sphere: the parallel projects to an ellipse, the footprint to an ellipse.
  const R = 82;
  const cx = 112;
  const cy = 116;
  const ringY = px(cy - R * Math.cos(state.theta) * Math.cos(VIEW_TILT));
  const ringRx = px(R * Math.sin(state.theta));
  const ringRy = px(R * Math.sin(state.theta) * Math.sin(VIEW_TILT));
  const markX = px(cx + ringRx);
  const footRx = px(13 * Math.sqrt(1 / (1 - contrast * 0.95)));
  const footRy = px(13 * Math.sqrt(1 / (1 + contrast * 0.95)));
  const tilt = px(state.visible);

  const plotX = (psi: number) => px(268 + (psi / 180) * 336);
  const plotY = (value: number) => px(186 - (value / state.peak) * 138);
  const path = state.curve
    .map((point, i) => `${i ? 'L' : 'M'}${plotX(point.psi).toFixed(2)} ${plotY(point.value).toFixed(2)}`)
    .join(' ');

  return (
    <section
      className="interactive"
      lang={lang === 'zh' ? 'zh-Hant' : 'en'}
      aria-labelledby={`${routeId}-title`}
    >
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">{t.eyebrow}</span>
          <h3 id={`${routeId}-title`}>{t.title}</h3>
        </div>
        <output className="interactive__readout">{state.holonomyDeg.toFixed(1)}°</output>
      </div>

      <p className="interactive__prompt">{t.prompt}</p>

      <div className="interactive__controls--two">
        <label className="interactive__control" htmlFor={routeId}>
          {t.route}: {colatitude}°
          <input
            id={routeId}
            type="range"
            min="5"
            max="90"
            step="1"
            value={colatitude}
            onChange={(event) => setColatitude(Number(event.target.value))}
          />
          <span className="interactive__range">
            <span>{t.pole}</span>
            <span>{t.equator}</span>
          </span>
        </label>
        <label className="interactive__control" htmlFor={contrastId}>
          {t.elongation}: {contrast.toFixed(2)}
          <input
            id={contrastId}
            type="range"
            min="0"
            max="0.8"
            step="0.01"
            value={contrast}
            onChange={(event) => setContrast(Number(event.target.value))}
          />
          <span className="interactive__range">
            <span>{t.circular}</span>
            <span>{t.elliptical}</span>
          </span>
        </label>
      </div>

      <div className="interactive__plot holonomy__stage">
        <svg
          viewBox="0 0 640 230"
          role="img"
          aria-label={
            lang === 'zh'
              ? `餘緯 ${colatitude} 度的緯線路徑，標架轉 ${state.holonomyDeg.toFixed(1)} 度，相對差距 ${state.here.toFixed(3)}`
              : `A latitude route at colatitude ${colatitude} degrees rotates the frame by ${state.holonomyDeg.toFixed(1)} degrees, for a relative mismatch of ${state.here.toFixed(3)}`
          }
        >
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="var(--line)" strokeWidth="1.5" />
          <ellipse
            cx={cx}
            cy={cy}
            rx={R}
            ry={px(R * Math.sin(VIEW_TILT))}
            fill="none"
            stroke="var(--line)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          <ellipse
            cx={cx}
            cy={ringY}
            rx={ringRx}
            ry={ringRy}
            fill="none"
            stroke="var(--pencil)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          <ellipse
            cx={markX}
            cy={ringY}
            rx={footRx}
            ry={footRy}
            fill="none"
            stroke="var(--pencil)"
            strokeWidth="2"
            opacity="0.55"
          />
          <ellipse
            cx={markX}
            cy={ringY}
            rx={footRx}
            ry={footRy}
            fill="color-mix(in srgb, var(--accent) 14%, transparent)"
            stroke="var(--accent)"
            strokeWidth="2.5"
            transform={`rotate(${tilt} ${markX} ${ringY})`}
          />
          <text x={cx} y={221} textAnchor="middle" className="plot__label">
            {t.start} · {t.route} {colatitude}°
          </text>

          <line x1="268" x2="604" y1="186" y2="186" className="plot__axis" />
          <line x1="268" x2="268" y1="44" y2="186" className="plot__axis" />
          {[0, 45, 90, 135, 180].map((tick) => (
            <g key={tick}>
              <line x1={plotX(tick)} x2={plotX(tick)} y1="186" y2="190" className="plot__axis" />
              <text x={plotX(tick)} y="203" textAnchor="middle" className="plot__tick">
                {tick}
              </text>
            </g>
          ))}
          <path d={path} className="plot__line plot__line--ll" />
          <line
            x1={plotX(tilt)}
            x2={plotX(tilt)}
            y1="44"
            y2="186"
            stroke="var(--pencil)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx={plotX(tilt)} cy={plotY(state.here)} r="5" fill="var(--accent)" />
          <text x={plotX(tilt)} y="38" textAnchor="middle" className="plot__label">
            {t.hereLabel}
          </text>
          <text x="436" y="221" textAnchor="middle" className="plot__label">
            {t.axisPsi}
          </text>
        </svg>
      </div>

      <div className="interactive__metrics">
        <div>
          <span>{t.frame}</span>
          <strong>{state.holonomyDeg.toFixed(2)}°</strong>
        </div>
        <div>
          <span>{t.visible}</span>
          <strong>{state.visible.toFixed(2)}°</strong>
        </div>
        <div>
          <span>{t.response}</span>
          <strong>{state.here.toFixed(4)}</strong>
        </div>
        <div>
          <span>{t.twist}</span>
          <strong>{state.twistPerLap.toFixed(1)}°</strong>
        </div>
      </div>

      <div className="strategy__modes">
        <button type="button" aria-pressed={colatitude === 60} onClick={() => setColatitude(60)}>
          {t.special}
        </button>
        <button type="button" aria-pressed={colatitude === 45} onClick={() => setColatitude(45)}>
          {t.fortyfive}
        </button>
      </div>

      <p className="interactive__note">{colatitude === 60 ? t.note60 : t.note}</p>
    </section>
  );
}
