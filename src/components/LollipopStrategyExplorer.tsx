import { useId, useMemo, useState } from 'react';

type Language = 'en' | 'zh';
type Mode = 'one' | 'four';

const centres = [
  [0.9166666667, 0], [0.75, 2.3999632297], [0.5833333333, 4.7999264595],
  [0.4166666667, 7.1998896892], [0.25, 9.5998529189], [0.0833333333, 11.9998161486],
  [-0.0833333333, 14.3997793784], [-0.25, 16.7997426081], [-0.4166666667, 19.1997058378],
  [-0.5833333333, 21.5996690676], [-0.75, 23.9996322973], [-0.9166666667, 26.399595527],
] as const;

const oneStrengths = [
  0.7445720286, 0.5131726243, 0.3419342314, 0.1683285553, 0.1146180824, 0.027941431,
  0.0279414312, 0.1146180823, 0.1683285552, 0.3419342314, 0.5131726242, 0.7445720286,
];

const fourStrengths = [
  0.3100006304, 0.2423659273, 0.0554154685, 0.2101795708,
  0, 0.0762292388, 0.0080122716, 0.4632086446,
  0, 0.3423825421, 0, 0,
  0, 0, 0, 0.1408012254,
  0.1045434503, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0.1045434549, 0, 0, 0,
  0, 0, 0, 0.1408012249,
  0, 0.3423825416, 0, 0,
  0, 0.0762292844, 0.0080121782, 0.4632086917,
  0.3100006138, 0.2423659387, 0.0554154689, 0.2101795734,
];

const copy = {
  en: {
    eyebrow: 'Finite-dictionary strategy explorer',
    title: 'Where does the best available recipe place its effort?',
    prompt: 'The background is darker where the Earth-like target asks for more removal. Each ellipse is one selected contact: size and opacity show strength; its tilt shows the chosen local orientation.',
    one: '12 contacts · one direction',
    four: '48 candidates · four directions',
    threshold: 'hide strengths below',
    all: 'show all active contacts',
    strong: 'show only stronger contacts',
    active: 'active contacts',
    error: 'relative fitting error',
    candidate: 'candidate contacts',
    total: 'total fitted strength',
    note: 'This is the non-negative least-squares optimum for the paper’s fixed centres, kernel width, and candidate orientations. It is a spatial recipe, not an ordered travel route, and it is not a global optimum for shaping a real lollipop.',
    target: 'target removal: high at poles, low at equator',
    north: 'north pole',
    south: 'south pole',
  },
  zh: {
    eyebrow: '有限候選集策略互動圖',
    title: '在既定選項裡，最佳配方把力氣放在哪裡？',
    prompt: '背景越深，代表類地球目標要求移除得越多。每個橢圓是一個被選中的接觸：大小與透明度表示強度，傾斜角表示局部方向。',
    one: '12 個接觸 · 單一方向',
    four: '48 個候選 · 四種方向',
    threshold: '隱藏低於此強度者',
    all: '顯示所有有效接觸',
    strong: '只顯示較強接觸',
    active: '顯示中的接觸',
    error: '相對擬合誤差',
    candidate: '候選接觸數',
    total: '總擬合強度',
    note: '這只是論文在固定中心、核寬與候選方向下的非負最小平方最佳解。它是一張空間配方，不是有先後次序的行走路線，也不是塑造真實棒棒糖的全域最佳方案。',
    target: '目標移除量：兩極多，赤道少',
    north: '北極',
    south: '南極',
  },
} as const;

export default function LollipopStrategyExplorer({ lang = 'en' }: { lang?: Language }) {
  const [mode, setMode] = useState<Mode>('four');
  const [threshold, setThreshold] = useState(0);
  const thresholdId = useId();
  const t = copy[lang];

  const contacts = useMemo(() => {
    if (mode === 'one') {
      return centres.map(([z, phi], centre) => ({ centre, z, phi, angle: 0, strength: oneStrengths[centre] }));
    }
    return centres.flatMap(([z, phi], centre) => [0, 45, 90, 135].map((angle, orientation) => ({
      centre, z, phi, angle, strength: fourStrengths[centre * 4 + orientation],
    })));
  }, [mode]);

  const active = contacts.filter((contact) => contact.strength > Math.max(1e-9, threshold));
  const totalStrength = contacts.reduce((sum, contact) => sum + contact.strength, 0);
  const error = mode === 'one' ? 0.471593 : 0.436528;
  const maxStrength = Math.max(...contacts.map((contact) => contact.strength));

  const project = (z: number, phi: number) => {
    const longitude = ((phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const latitude = Math.asin(z);
    return {
      x: 36 + (longitude / (2 * Math.PI)) * 568,
      y: 28 + ((Math.PI / 2 - latitude) / Math.PI) * 244,
    };
  };

  return (
    <section className="interactive strategy" lang={lang === 'zh' ? 'zh-Hant' : 'en'} aria-labelledby={`${thresholdId}-title`}>
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">{t.eyebrow}</span>
          <h3 id={`${thresholdId}-title`}>{t.title}</h3>
        </div>
        <output className="interactive__readout">{(100 * error).toFixed(1)}%</output>
      </div>

      <p className="interactive__prompt">{t.prompt}</p>

      <div className="strategy__modes" role="group" aria-label={lang === 'zh' ? '候選方向模式' : 'Candidate orientation mode'}>
        <button type="button" aria-pressed={mode === 'one'} onClick={() => setMode('one')}>{t.one}</button>
        <button type="button" aria-pressed={mode === 'four'} onClick={() => setMode('four')}>{t.four}</button>
      </div>

      <label className="interactive__control" htmlFor={thresholdId}>
        {t.threshold}: {threshold.toFixed(2)}
        <input id={thresholdId} type="range" min="0" max="0.3" step="0.01" value={threshold} onChange={(event) => setThreshold(Number(event.target.value))} />
        <span className="interactive__range"><span>{t.all}</span><span>{t.strong}</span></span>
      </label>

      <div className="interactive__plot strategy__map">
        <svg viewBox="0 0 640 320" role="img" aria-label={t.target}>
          <defs>
            <linearGradient id={`${thresholdId}-target`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="0.5" stopColor="var(--paper)" stopOpacity="0" />
              <stop offset="1" stopColor="var(--accent)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect x="26" y="18" width="588" height="264" rx="128" fill={`url(#${thresholdId}-target)`} stroke="var(--line)" strokeWidth="1.5" />
          {[0.25, 0.5, 0.75].map((fraction) => <line key={`v-${fraction}`} x1={26 + 588 * fraction} x2={26 + 588 * fraction} y1="28" y2="272" className="plot__axis" strokeDasharray="3 6" />)}
          {[0.25, 0.5, 0.75].map((fraction) => <line key={`h-${fraction}`} x1="38" x2="602" y1={18 + 264 * fraction} y2={18 + 264 * fraction} className="plot__axis" strokeDasharray="3 6" />)}
          {active.map((contact) => {
            const point = project(contact.z, contact.phi);
            const relative = contact.strength / maxStrength;
            return (
              <g key={`${contact.centre}-${contact.angle}`} transform={`translate(${point.x} ${point.y}) rotate(${contact.angle})`}>
                <ellipse rx={7 + 15 * relative} ry={3.5 + 6 * relative} fill="color-mix(in srgb, var(--accent) 24%, transparent)" stroke="var(--accent)" strokeWidth={1 + 2 * relative} opacity={0.42 + 0.58 * relative}>
                  <title>{`${lang === 'zh' ? '強度' : 'strength'} ${contact.strength.toFixed(3)} · ${contact.angle}°`}</title>
                </ellipse>
              </g>
            );
          })}
          <text x="320" y="13" textAnchor="middle" className="plot__label">{t.north}</text>
          <text x="320" y="306" textAnchor="middle" className="plot__label">{t.south}</text>
        </svg>
      </div>

      <div className="interactive__metrics">
        <div><span>{t.active}</span><strong>{active.length}</strong></div>
        <div><span>{t.error}</span><strong>{error.toFixed(6)}</strong></div>
        <div><span>{t.candidate}</span><strong>{contacts.length}</strong></div>
        <div><span>{t.total}</span><strong>{totalStrength.toFixed(3)}</strong></div>
      </div>

      <p className="interactive__note">{t.note}</p>
    </section>
  );
}
