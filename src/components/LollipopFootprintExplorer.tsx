import { useId, useState } from 'react';
import data from '../data/lollipop-strategy.json';

/* Four ways to spend a fixed budget of eleven rings, differing only in what the
   tongue is allowed to do with its long axis. Errors from code/optimal_strategy.py,
   each one a non-negative least-squares optimum over the ring masses. */

type Choice = {
  id: 'singleMeridian' | 'fourTilt' | 'eightTilt' | 'round';
  tilts: number[];
  error: number;
  licks: number;
  order: string;
};

const RAW = data.footprints as Record<string, { licks: number; shape_error: number }>;

const CHOICES: Choice[] = [
  { id: 'singleMeridian', tilts: [0], error: RAW.singleMeridian.shape_error, licks: RAW.singleMeridian.licks, order: 'm = 2' },
  { id: 'fourTilt', tilts: [0, 45, 90, 135], error: RAW.fourTilt.shape_error, licks: RAW.fourTilt.licks, order: 'm = 8' },
  { id: 'eightTilt', tilts: [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5], error: RAW.eightTilt.shape_error, licks: RAW.eightTilt.licks, order: 'm = 16' },
  { id: 'round', tilts: [], error: RAW.round.shape_error, licks: RAW.round.licks, order: '—' },
];

const copy = {
  en: {
    eyebrow: 'What to do with a long axis',
    title: 'The best thing anisotropy can do here is cancel itself',
    prompt:
      'Same eleven rings, same target, same non-negative fit. The only difference is how many tilts the tongue is allowed to use at each site. More tilts is worse value per lick and better value per answer.',
    labels: {
      singleMeridian: 'one tilt, along the meridian',
      fourTilt: 'four tilts',
      eightTilt: 'eight tilts',
      round: 'a round tongue',
    },
    error: 'shape error',
    licks: 'licks',
    order: 'lowest surviving azimuthal order',
    cost: 'error vs. the round tongue',
    notes: {
      singleMeridian:
        'A fixed tilt leaves m = 2 content in every footprint. The target has none, and eleven ring strengths cannot cancel it. This is the floor: adding rings barely moves it.',
      fourTilt:
        'Tilts at 0°, 45°, 90° and 135° in equal measure annihilate azimuthal orders 2, 4 and 6 exactly. The first survivor is m = 8, and that residue is precisely what sets the error here.',
      eightTilt:
        'Eight tilts push the first survivor out to m = 16. The error drops by a further factor of twenty-five, and the ring spacing — not the anisotropy — becomes the limit again.',
      round:
        'With no long axis there is nothing to cancel, and the recipe reaches the closed-form optimum. Every tilt scheme above is an attempt to buy this back.',
    },
    caption: 'the footprints being averaged at one site',
  },
  zh: {
    eyebrow: '長軸該拿來做什麼',
    title: '在這裡，方向性最好的用途是把自己抵銷掉',
    prompt:
      '同樣十一圈、同樣的目標、同樣的非負擬合。唯一的差別，是每個位置允許用幾種傾角。傾角越多，每一口越不划算，但答案越好。',
    labels: {
      singleMeridian: '只用一種：沿經線',
      fourTilt: '四種傾角',
      eightTilt: '八種傾角',
      round: '正圓的舌頭',
    },
    error: '形狀誤差',
    licks: '口數',
    order: '殘存的最低角向階',
    cost: '相對於正圓的誤差',
    notes: {
      singleMeridian:
        '固定傾角會在每一口裡留下 m = 2 的成分。目標裡沒有這種成分，十一個圈的強度也抵銷不掉。這就是地板：再加圈數幾乎沒用。',
      fourTilt:
        '0°、45°、90°、135° 等量混合，恰好消掉第 2、4、6 角向階。第一個倖存者是 m = 8，而這裡的誤差就正好由那點殘留決定。',
      eightTilt:
        '八種傾角把第一個倖存者推到 m = 16。誤差再降二十五倍，重新變成圈距、而不是方向性，在拖後腿。',
      round: '沒有長軸，就沒有東西需要抵銷，配方直接達到解析最佳解。上面每一種傾角方案，都是在試著把它買回來。',
    },
    caption: '同一個位置上被平均掉的那些舔痕',
  },
} as const;

export default function LollipopFootprintExplorer({ lang = 'en' }: { lang?: 'en' | 'zh' }) {
  const [active, setActive] = useState<Choice['id']>('fourTilt');
  const baseId = useId();
  const t = copy[lang];
  const choice = CHOICES.find((c) => c.id === active)!;
  const round = CHOICES[CHOICES.length - 1];

  const worst = Math.max(...CHOICES.map((c) => Math.log10(c.error)));
  const best = Math.min(...CHOICES.map((c) => Math.log10(c.error)));
  const barWidth = (error: number) =>
    Math.round((28 + ((Math.log10(error) - best) / (worst - best)) * 330) * 100) / 100;

  return (
    <section
      className="interactive"
      lang={lang === 'zh' ? 'zh-Hant' : 'en'}
      aria-labelledby={`${baseId}-title`}
    >
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">{t.eyebrow}</span>
          <h3 id={`${baseId}-title`}>{t.title}</h3>
        </div>
        <output className="interactive__readout">{choice.error.toExponential(1)}</output>
      </div>

      <p className="interactive__prompt">{t.prompt}</p>

      <div className="strategy__modes footprint__modes" role="group">
        {CHOICES.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={c.id === active}
            onClick={() => setActive(c.id)}
          >
            {t.labels[c.id]}
          </button>
        ))}
      </div>

      <div className="interactive__plot">
        <svg viewBox="0 0 640 250" role="img" aria-label={`${t.error}: ${choice.error.toExponential(2)}`}>
          {CHOICES.map((c, i) => {
            const y = 30 + i * 46;
            const on = c.id === active;
            return (
              <g key={c.id} opacity={on ? 1 : 0.42}>
                <rect
                  x="180"
                  y={y}
                  width={barWidth(c.error)}
                  height="20"
                  rx="3"
                  fill={on ? 'var(--accent)' : 'var(--pencil)'}
                  opacity={on ? 0.85 : 0.35}
                />
                <text x="172" y={y + 15} textAnchor="end" className="plot__tick">
                  {t.labels[c.id]}
                </text>
                <text x={188 + barWidth(c.error)} y={y + 15} className="plot__tick">
                  {c.error.toExponential(1)}
                </text>
              </g>
            );
          })}

          <text x="180" y="232" className="plot__label">
            {t.caption}
          </text>
          <g transform="translate(470 196)">
            {(choice.tilts.length ? choice.tilts : [null]).map((tilt, i) =>
              tilt === null ? (
                <circle key="round" r="21" fill="none" stroke="var(--accent)" strokeWidth="2.2" />
              ) : (
                <ellipse
                  key={tilt}
                  rx="10"
                  ry="24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.8"
                  opacity={0.45 + 0.5 / (i + 1)}
                  transform={`rotate(${tilt})`}
                />
              ),
            )}
          </g>
        </svg>
      </div>

      <div className="interactive__metrics">
        <div>
          <span>{t.error}</span>
          <strong>{choice.error.toExponential(2)}</strong>
        </div>
        <div>
          <span>{t.licks}</span>
          <strong>{choice.licks}</strong>
        </div>
        <div>
          <span>{t.order}</span>
          <strong>{choice.order}</strong>
        </div>
        <div>
          <span>{t.cost}</span>
          <strong>
            {choice.id === 'round' ? '1×' : `${Math.round(choice.error / round.error)}×`}
          </strong>
        </div>
      </div>

      <p className="interactive__note">{t.notes[active]}</p>
    </section>
  );
}
