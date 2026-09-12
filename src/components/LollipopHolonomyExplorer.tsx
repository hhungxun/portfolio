import { useId, useMemo, useState } from 'react';

const radiansToDegrees = (radians: number) => (radians * 180) / Math.PI;

const copy = {
  en: {
    eyebrow: 'Carry an elliptical lick around the sphere',
    title: 'A loop can rotate the contact without twisting your hand',
    prompt: "The route is a circle of latitude, measured down from the north pole. The large angle is the frame's rotation after one lap. An ellipse repeats after 180°, so the visible footprint may change less—or not at all.",
    route: 'route colatitude', elongation: 'elongation contrast', pole: 'near the pole', equator: 'equator', circular: 'circular', elliptical: 'strongly elliptical',
    loop: 'one latitude loop', before: 'before', after: 'after', frame: 'frame rotation', orientation: 'ellipse orientation modulo 180°', response: 'weak-anisotropy response proxy', footprint: 'footprint', unchanged: 'unchanged', changed: 'changed',
    note: 'The response proxy shows the leading dependence |ε sin ψ|, not the full kernel norm. At 60° colatitude the frame turns by 180°, but an ellipse looks unchanged because both of its axes reverse.',
  },
  zh: {
    eyebrow: '把橢圓形舔痕沿球面繞一圈',
    title: '手沒有故意扭轉，接觸方向卻會旋轉',
    prompt: '路徑是一條緯線，角度從北極向下量。右上角顯示標架繞行一圈後的旋轉角；橢圓每轉 180° 就重複，因此實際舔痕可能改變較少，甚至完全不變。',
    route: '路徑餘緯', elongation: '橢圓伸長對比', pole: '靠近北極', equator: '赤道', circular: '正圓', elliptical: '明顯橢圓',
    loop: '沿緯線繞一圈', before: '出發前', after: '回來後', frame: '標架旋轉角', orientation: '橢圓方向（以 180° 為週期）', response: '弱各向異性反應指標', footprint: '舔痕', unchanged: '不變', changed: '已改變',
    note: '反應指標只顯示領先階的 |ε sin ψ|，不是完整的核函數距離。餘緯 60° 時標架旋轉 180°，但橢圓兩軸同時反向，留下的舔痕仍然相同。',
  },
} as const;

export default function LollipopHolonomyExplorer({ lang = 'en' }: { lang?: 'en' | 'zh' }) {
  const [colatitude, setColatitude] = useState(45);
  const [anisotropy, setAnisotropy] = useState(0.35);
  const colatitudeId = useId();
  const anisotropyId = useId();
  const t = copy[lang];

  const result = useMemo(() => {
    const theta = (colatitude * Math.PI) / 180;
    const holonomy = 2 * Math.PI * (1 - Math.cos(theta));
    const rawFootprintRotation = ((radiansToDegrees(holonomy) % 180) + 180) % 180;
    const footprintRotation = rawFootprintRotation < 1e-9 || 180 - rawFootprintRotation < 1e-9 ? 0 : rawFootprintRotation;
    const response = Math.abs(anisotropy * Math.sin(holonomy));
    return {
      holonomy,
      holonomyDegrees: radiansToDegrees(holonomy),
      footprintRotation,
      response,
    };
  }, [colatitude, anisotropy]);

  return (
    <section className="interactive" lang={lang === 'zh' ? 'zh-Hant' : 'en'} aria-labelledby={`${colatitudeId}-title`}>
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">{t.eyebrow}</span>
          <h3 id={`${colatitudeId}-title`}>{t.title}</h3>
        </div>
        <output className="interactive__readout">{result.holonomyDegrees.toFixed(1)}°</output>
      </div>

      <p className="interactive__prompt">
        {t.prompt}
      </p>

      <div className="interactive__controls--two">
        <label className="interactive__control" htmlFor={colatitudeId}>
          {t.route}: {colatitude}°
          <input id={colatitudeId} type="range" min="0" max="90" step="1" value={colatitude} onChange={(event) => setColatitude(Number(event.target.value))} />
          <span className="interactive__range"><span>{t.pole}</span><span>{t.equator}</span></span>
        </label>
        <label className="interactive__control" htmlFor={anisotropyId}>
          {t.elongation}: {anisotropy.toFixed(2)}
          <input id={anisotropyId} type="range" min="0" max="0.8" step="0.01" value={anisotropy} onChange={(event) => setAnisotropy(Number(event.target.value))} />
          <span className="interactive__range"><span>{t.circular}</span><span>{t.elliptical}</span></span>
        </label>
      </div>

      <div className="interactive__plot">
        <svg viewBox="0 0 640 230" role="img" aria-label={lang === 'zh' ? `初始橢圓舔痕，以及平行移動後旋轉 ${result.footprintRotation.toFixed(1)} 度的舔痕` : `Initial elliptical footprint and transported footprint rotated by ${result.footprintRotation.toFixed(1)} degrees`}>
          <circle cx="150" cy="115" r="76" fill="none" stroke="var(--line)" strokeWidth="2" />
          <path d="M74 115 A76 76 0 0 0 226 115" fill="none" stroke="var(--pencil)" strokeDasharray="5 5" strokeWidth="2" />
          <circle cx="226" cy="115" r="5" fill="var(--accent)" />
          <text x="150" y="211" textAnchor="middle" className="plot__label">{t.loop}</text>
          <path d="M270 115 H345" stroke="var(--line)" strokeWidth="2" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pencil)" />
            </marker>
          </defs>
          <ellipse cx="430" cy="115" rx={54 + 28 * anisotropy} ry={54 - 28 * anisotropy} fill="none" stroke="var(--pencil)" strokeWidth="3" strokeDasharray="6 5" />
          <ellipse cx="550" cy="115" rx={54 + 28 * anisotropy} ry={54 - 28 * anisotropy} fill="none" stroke="var(--accent)" strokeWidth="3" transform={`rotate(${result.footprintRotation} 550 115)`} />
          <text x="430" y="205" textAnchor="middle" className="plot__label">{t.before}</text>
          <text x="550" y="205" textAnchor="middle" className="plot__label">{t.after}</text>
        </svg>
      </div>

      <div className="interactive__metrics">
        <div><span>{t.frame}</span><strong>{result.holonomyDegrees.toFixed(2)}°</strong></div>
        <div><span>{t.orientation}</span><strong>{result.footprintRotation.toFixed(2)}°</strong></div>
        <div><span>{t.response}</span><strong>{result.response.toFixed(3)}</strong></div>
        <div><span>{t.footprint}</span><strong>{anisotropy === 0 || result.response < 0.001 ? t.unchanged : t.changed}</strong></div>
      </div>

      <p className="interactive__note">
        {t.note}
      </p>
    </section>
  );
}
