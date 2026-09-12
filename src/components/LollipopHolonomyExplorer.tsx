import { useId, useMemo, useState } from 'react';

const radiansToDegrees = (radians: number) => (radians * 180) / Math.PI;

export default function LollipopHolonomyExplorer() {
  const [colatitude, setColatitude] = useState(45);
  const [anisotropy, setAnisotropy] = useState(0.35);
  const colatitudeId = useId();
  const anisotropyId = useId();

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
    <section className="interactive" aria-labelledby={`${colatitudeId}-title`}>
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">Carry an elliptical lick around the sphere</span>
          <h3 id={`${colatitudeId}-title`}>A loop can rotate the contact without twisting your hand</h3>
        </div>
        <output className="interactive__readout">{result.holonomyDegrees.toFixed(1)}°</output>
      </div>

      <p className="interactive__prompt">
        The route is a circle of latitude, measured down from the north pole. The large angle is the frame's rotation after one lap. An ellipse repeats after 180°, so the visible footprint may change less—or not at all.
      </p>

      <div className="interactive__controls--two">
        <label className="interactive__control" htmlFor={colatitudeId}>
          route colatitude: {colatitude}°
          <input id={colatitudeId} type="range" min="0" max="90" step="1" value={colatitude} onChange={(event) => setColatitude(Number(event.target.value))} />
          <span className="interactive__range"><span>near the pole</span><span>equator</span></span>
        </label>
        <label className="interactive__control" htmlFor={anisotropyId}>
          elongation contrast: {anisotropy.toFixed(2)}
          <input id={anisotropyId} type="range" min="0" max="0.8" step="0.01" value={anisotropy} onChange={(event) => setAnisotropy(Number(event.target.value))} />
          <span className="interactive__range"><span>circular</span><span>strongly elliptical</span></span>
        </label>
      </div>

      <div className="interactive__plot">
        <svg viewBox="0 0 640 230" role="img" aria-label={`Initial elliptical footprint and transported footprint rotated by ${result.footprintRotation.toFixed(1)} degrees`}>
          <circle cx="150" cy="115" r="76" fill="none" stroke="var(--line)" strokeWidth="2" />
          <path d="M74 115 A76 76 0 0 0 226 115" fill="none" stroke="var(--pencil)" strokeDasharray="5 5" strokeWidth="2" />
          <circle cx="226" cy="115" r="5" fill="var(--accent)" />
          <text x="150" y="211" textAnchor="middle" className="plot__label">one latitude loop</text>
          <path d="M270 115 H345" stroke="var(--line)" strokeWidth="2" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--pencil)" />
            </marker>
          </defs>
          <ellipse cx="430" cy="115" rx={54 + 28 * anisotropy} ry={54 - 28 * anisotropy} fill="none" stroke="var(--pencil)" strokeWidth="3" strokeDasharray="6 5" />
          <ellipse cx="550" cy="115" rx={54 + 28 * anisotropy} ry={54 - 28 * anisotropy} fill="none" stroke="var(--accent)" strokeWidth="3" transform={`rotate(${result.footprintRotation} 550 115)`} />
          <text x="430" y="205" textAnchor="middle" className="plot__label">before</text>
          <text x="550" y="205" textAnchor="middle" className="plot__label">after</text>
        </svg>
      </div>

      <div className="interactive__metrics">
        <div><span>frame rotation</span><strong>{result.holonomyDegrees.toFixed(2)}°</strong></div>
        <div><span>ellipse orientation modulo 180°</span><strong>{result.footprintRotation.toFixed(2)}°</strong></div>
        <div><span>weak-anisotropy response proxy</span><strong>{result.response.toFixed(3)}</strong></div>
        <div><span>footprint</span><strong>{anisotropy === 0 || result.response < 0.001 ? 'unchanged' : 'changed'}</strong></div>
      </div>

      <p className="interactive__note">
        The response proxy shows the leading dependence |ε sin ψ|, not the full kernel norm. At 60° colatitude the frame turns by 180°, but an ellipse looks unchanged because both of its axes reverse.
      </p>
    </section>
  );
}
