import { useId, useMemo, useState } from 'react';
import data from '../data/lollipop-strategy.json';

/* Every number here comes from code/optimal_strategy.py in the companion repository:
   ring colatitudes, licks per ring, per-lick strengths, the achieved meridional
   profile, and the relative shape error. Nothing is fitted by eye. */

type Ring = { colatitude: number; licks: number; strength: number; mass: number; kept: boolean };
type Plan = { rings: number; licks: number; shapeError: number; ringList: Ring[]; profile: number[] };

const PLANS = data.plans as Plan[];
const TARGET = data.target as number[];
const THETA = data.thetaDeg as number[];
const K2 = data.k2_iso as number;

const copy = {
  en: {
    eyebrow: 'The recipe',
    title: 'What the optimal strategy actually tells you to do',
    prompt:
      'Lick in rings. Each ring of latitude gets a total amount of removal proportional to cos² of its colatitude, split evenly around the circle. Drag the slider to add rings; watch the solid curve settle onto the dashed one.',
    ringCount: 'rings of latitude',
    coarse: 'a few',
    fine: 'enough',
    licks: 'licks in total',
    error: 'shape error',
    overshoot: 'candy removed vs. the minimum',
    offset: 'uniform extra removal',
    profileTitle: 'removal along a meridian',
    achieved: 'this recipe',
    want: 'the target, cos²θ',
    mapTitle: 'where the licks go',
    north: 'north pole',
    south: 'south pole',
    colat: 'colatitude',
    lon: 'longitude',
    note: (p: Plan) =>
      `${p.rings} rings, ${p.licks} licks, shape error ${p.shapeError.toExponential(1)}. The solid curve sits above the dashed one by a constant, and a constant is the one thing that does not matter: it shaves the lollipop down evenly without touching its shape. That offset is why the recipe removes ${(1 / K2).toFixed(3)}× the bare volume difference.`,
    equator: 'The equatorial ring gets nothing, so it is not drawn.',
  },
  zh: {
    eyebrow: '配方',
    title: '最佳策略到頭來叫你做什麼',
    prompt:
      '沿著一圈圈緯線舔。每一圈的總移除量正比於該緯線餘緯的 cos²，再平均分給圈上每一口。拉動滑桿加上更多圈，看實線怎麼貼上虛線。',
    ringCount: '緯線圈數',
    coarse: '幾圈',
    fine: '夠了',
    licks: '總共幾口',
    error: '形狀誤差',
    overshoot: '相對於最少量的移除量',
    offset: '額外均勻移除',
    profileTitle: '沿一條經線的移除量',
    achieved: '這個配方',
    want: '目標 cos²θ',
    mapTitle: '每一口落在哪裡',
    north: '北極',
    south: '南極',
    colat: '餘緯',
    lon: '經度',
    note: (p: Plan) =>
      `${p.rings} 圈、${p.licks} 口，形狀誤差 ${p.shapeError.toExponential(1)}。實線比虛線高出一個常數，而常數恰好是唯一不要緊的東西：它只把棒棒糖整體削小，不動形狀。也正因為這段常數，配方的總移除量是體積差的 ${(1 / K2).toFixed(3)} 倍。`,
    equator: '赤道那一圈分到零，所以沒有畫出來。',
  },
} as const;

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
/* Rounded so server and client markup agree to the last digit. */
const px = (value: number) => Math.round(value * 100) / 100;

export default function LollipopStrategyExplorer({ lang = 'en' }: { lang?: 'en' | 'zh' }) {
  const [index, setIndex] = useState(PLANS.length - 2);
  const sliderId = useId();
  const t = copy[lang];
  const plan = PLANS[index];

  const view = useMemo(() => {
    const peak = Math.max(...plan.profile, ...TARGET);
    const ax = (theta: number) => px(52 + (theta / 180) * 250);
    const ay = (value: number) => px(150 - (value / peak) * 116);
    const line = (series: number[]) =>
      series.map((v, i) => `${i ? 'L' : 'M'}${ax(THETA[i]).toFixed(2)} ${ay(v).toFixed(2)}`).join(' ');
    const drawn = plan.ringList.filter((ring) => ring.kept);
    const maxStrength = Math.max(...drawn.map((ring) => ring.strength));
    const dots = drawn.flatMap((ring) =>
      Array.from({ length: ring.licks }, (_, j) => {
        const stagger = ring.colatitude > 90 ? 0.5 : 0;
        return {
          key: `${ring.colatitude}-${j}`,
          x: px(362 + ((j + stagger) / ring.licks) * 244),
          y: px(34 + (ring.colatitude / 180) * 116),
          r: px(1.4 + 2.9 * Math.sqrt(clamp01(ring.strength / maxStrength))),
          strength: ring.strength,
          colatitude: ring.colatitude,
        };
      }),
    );
    return { ax, achieved: line(plan.profile), want: line(TARGET), dots, drawn };
  }, [plan]);

  return (
    <section
      className="interactive strategy"
      lang={lang === 'zh' ? 'zh-Hant' : 'en'}
      aria-labelledby={`${sliderId}-title`}
    >
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">{t.eyebrow}</span>
          <h3 id={`${sliderId}-title`}>{t.title}</h3>
        </div>
        <output className="interactive__readout">{plan.shapeError.toExponential(1)}</output>
      </div>

      <p className="interactive__prompt">{t.prompt}</p>

      <label className="interactive__control" htmlFor={sliderId}>
        {t.ringCount}: {plan.rings}
        <input
          id={sliderId}
          type="range"
          min="0"
          max={PLANS.length - 1}
          step="1"
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
        />
        <span className="interactive__range">
          <span>{t.coarse}</span>
          <span>{t.fine}</span>
        </span>
      </label>

      <div className="interactive__plot strategy__map">
        <svg
          viewBox="0 0 640 210"
          role="img"
          aria-label={
            lang === 'zh'
              ? `${plan.rings} 圈緯線、${plan.licks} 口的配方，形狀誤差 ${plan.shapeError.toExponential(1)}`
              : `A recipe of ${plan.rings} latitude rings and ${plan.licks} licks, with shape error ${plan.shapeError.toExponential(1)}`
          }
        >
          {/* left: the meridional profile, target against achieved */}
          <text x="52" y="22" className="plot__label">
            {t.profileTitle}
          </text>
          <line x1="52" x2="302" y1="150" y2="150" className="plot__axis" />
          <line x1="52" x2="52" y1="34" y2="150" className="plot__axis" />
          {[0, 45, 90, 135, 180].map((tick) => (
            <g key={tick}>
              <line
                x1={view.ax(tick)}
                x2={view.ax(tick)}
                y1="150"
                y2="154"
                className="plot__axis"
              />
              <text x={view.ax(tick)} y="167" textAnchor="middle" className="plot__tick">
                {tick}
              </text>
            </g>
          ))}
          <text x="177" y="184" textAnchor="middle" className="plot__label">
            {t.colat}
          </text>
          <path d={view.want} className="plot__line plot__line--force" />
          <path d={view.achieved} className="plot__line plot__line--ll" />

          {/* right: an equirectangular chart of the lick positions */}
          <text x="362" y="22" className="plot__label">
            {t.mapTitle}
          </text>
          <rect
            x="362"
            y="34"
            width="244"
            height="116"
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.2"
          />
          {view.drawn.map((ring) => (
            <line
              key={`guide-${ring.colatitude}`}
              x1="362"
              x2="606"
              y1={px(34 + (ring.colatitude / 180) * 116)}
              y2={px(34 + (ring.colatitude / 180) * 116)}
              stroke="var(--line)"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
          ))}
          {view.dots.map((dot) => (
            <circle
              key={dot.key}
              cx={dot.x}
              cy={dot.y}
              r={dot.r}
              fill="var(--accent)"
              opacity="0.78"
            >
              <title>
                {`${lang === 'zh' ? '餘緯' : 'colatitude'} ${dot.colatitude.toFixed(1)}° · ${
                  lang === 'zh' ? '強度' : 'strength'
                } ${dot.strength.toFixed(4)}`}
              </title>
            </circle>
          ))}
          <text x="366" y="30" className="plot__tick">
            {t.north}
          </text>
          <text x="366" y="164" className="plot__tick">
            {t.south}
          </text>
          <text x="484" y="184" textAnchor="middle" className="plot__label">
            {t.lon}
          </text>
        </svg>
      </div>

      <div className="interactive__legend">
        <span>
          <i className="legend--ll" />
          {t.achieved}
        </span>
        <span>
          <i className="legend--force" />
          {t.want}
        </span>
      </div>

      <div className="interactive__metrics">
        <div>
          <span>{t.licks}</span>
          <strong>{plan.licks}</strong>
        </div>
        <div>
          <span>{t.error}</span>
          <strong>{plan.shapeError.toExponential(2)}</strong>
        </div>
        <div>
          <span>{t.overshoot}</span>
          <strong>{(1 / K2).toFixed(3)}×</strong>
        </div>
        <div>
          <span>{t.offset}</span>
          <strong>{((1 / K2 - 1) / 3).toFixed(4)}</strong>
        </div>
      </div>

      <p className="interactive__note">
        {t.note(plan)} {t.equator}
      </p>
    </section>
  );
}
