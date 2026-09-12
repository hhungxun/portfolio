import { useId, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';

const log2 = (value: number) => Math.log(value) / Math.log(2);

export default function GravityEntanglementExplorer() {
  const [kappa, setKappa] = useState(0.5);
  const [occupation, setOccupation] = useState(0.05);
  const kappaId = useId();
  const occupationId = useId();

  const result = useMemo(() => {
    const gamma = 1 / Math.sqrt(1 - kappa);
    const thermalWidth = 2 * occupation + 1;
    const gibbs = Math.max(0, 0.5 * log2(gamma / (thermalWidth * thermalWidth)));
    const quench = Math.max(0, log2(gamma / thermalWidth));
    const threshold = (gamma - 1) / 2;
    const quarterPeriod = gamma / 4;
    return { gamma, gibbs, quench, threshold, quarterPeriod };
  }, [kappa, occupation]);

  const maxBar = Math.max(0.55, result.gibbs, result.quench);

  return (
    <section className="interactive" aria-labelledby={`${kappaId}-title`}>
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">Gaussian quench calculator</span>
          <h3 id={`${kappaId}-title`}>How cold must the two local modes be?</h3>
        </div>
        <output className="interactive__readout">
          {result.quench > 0 ? `${result.quench.toFixed(3)} bits` : 'separable'}
        </output>
      </div>

      <p className="interactive__prompt">
        Hold the coupling fixed and raise the initial occupation. The quench does not fade gradually forever: it crosses a sharp Gaussian PPT threshold.
      </p>

      <div className="interactive__controls--two">
        <label className="interactive__control" htmlFor={kappaId}>
          curvature fraction κ = {kappa.toFixed(2)}
          <input id={kappaId} type="range" min="0.01" max="0.9" step="0.01" value={kappa} onChange={(event) => setKappa(Number(event.target.value))} />
          <span className="interactive__range"><span>weak</span><span>soft-mode wall</span></span>
        </label>
        <label className="interactive__control" htmlFor={occupationId}>
          initial occupation n̄ = {occupation.toFixed(2)}
          <input id={occupationId} type="range" min="0" max="0.5" step="0.01" value={occupation} onChange={(event) => setOccupation(Number(event.target.value))} />
          <span className="interactive__range"><span>ground state</span><span>thermal</span></span>
        </label>
      </div>

      <div className="entanglement-bars" aria-label={`Logarithmic negativity: Gibbs ${result.gibbs.toFixed(3)} bits, quench ${result.quench.toFixed(3)} bits`}>
        <div>
          <span>coupled Gibbs</span>
          <i style={{ '--bar-height': `${(100 * result.gibbs) / maxBar}%` } as CSSProperties} />
          <strong>{result.gibbs.toFixed(3)}</strong>
        </div>
        <div>
          <span>sudden quench</span>
          <i className="is-quench" style={{ '--bar-height': `${(100 * result.quench) / maxBar}%` } as CSSProperties} />
          <strong>{result.quench.toFixed(3)}</strong>
        </div>
      </div>

      <div className="interactive__metrics">
        <div><span>entanglement requires n̄ below</span><strong>{result.threshold.toFixed(3)}</strong></div>
        <div><span>readout time in trap periods</span><strong>{result.quarterPeriod.toFixed(3)}</strong></div>
        <div><span>frequency ratio γ = ωm/Ω</span><strong>{result.gamma.toFixed(3)}</strong></div>
        <div><span>current state</span><strong>{result.quench > 0 ? 'PPT-entangled' : 'PPT-separable'}</strong></div>
      </div>

      <p className="interactive__note">
        Equal local thermal occupations and collinear quadratic gravity are assumed. κ must remain below one for stability. This calculator tests the analytic two-mode model; it does not supply a cooling, switching, or readout protocol.
      </p>
    </section>
  );
}
