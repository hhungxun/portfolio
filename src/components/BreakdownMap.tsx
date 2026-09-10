import { useId, useState } from 'react';

function exactDrms(epsilon: number) {
  const n = 800;
  const hi = 10;
  const h = hi / n;
  let numerator = 0;
  let denominator = 0;
  for (let i = 0; i <= n; i += 1) {
    const w = i * h;
    const weight = i === 0 || i === n ? 1 : i % 2 === 0 ? 2 : 4;
    const gaussian = Math.exp(-(w * w));
    const common = gaussian / (1 + epsilon * epsilon * w * w);
    numerator += weight * epsilon ** 4 * w ** 4 * common;
    denominator += weight * common;
  }
  return Math.sqrt(numerator / denominator);
}

export default function BreakdownMap() {
  const [logEpsilon, setLogEpsilon] = useState(-6);
  const [logChi, setLogChi] = useState(-2);
  const epsilonId = useId();
  const chiId = useId();
  const epsilon = 10 ** logEpsilon;
  const chi = 10 ** logChi;
  const classicalAccurate = exactDrms(epsilon) < 0.01;
  const quantumImportant = chi >= 0.1;
  const verdict = quantumImportant
    ? classicalAccurate
      ? 'LL tracks the selected classical branch, but quantum emission may matter.'
      : 'Both classical reduction error and quantum emission deserve scrutiny.'
    : classicalAccurate
      ? 'This benchmark predicts an accurate classical reduction in a classically safe regime.'
      : 'Quantum recoil is small here, but the classical reduction itself is stressed.';

  return (
    <section className="interactive" aria-labelledby={`${epsilonId}-title`}>
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">Two-axis diagnosis</span>
          <h3 id={`${epsilonId}-title`}>“Breakdown” of which approximation?</h3>
        </div>
      </div>
      <div className="regime-map" aria-label="Diagnostic plane with epsilon horizontally and chi-e vertically">
        <div className="regime-map__quadrant regime-map__quadrant--tl">quantum caution<br />LL accurate</div>
        <div className="regime-map__quadrant regime-map__quadrant--tr">two warnings</div>
        <div className="regime-map__quadrant regime-map__quadrant--bl">classical safe<br />LL accurate</div>
        <div className="regime-map__quadrant regime-map__quadrant--br">classical reduction stressed</div>
        <span className="regime-map__point" style={{ left: `${((logEpsilon + 10) / 10) * 100}%`, bottom: `${((logChi + 4) / 4) * 100}%` }} />
        <span className="regime-map__x">epsilon: slow pulse → fast pulse</span>
        <span className="regime-map__y">chi-e: classical → quantum</span>
      </div>
      <div className="interactive__controls--two">
        <label className="interactive__control" htmlFor={epsilonId}>
          log10 epsilon: <output>{logEpsilon.toFixed(1)}</output>
          <input id={epsilonId} type="range" min="-10" max="0" step="0.1" value={logEpsilon} onChange={(event) => setLogEpsilon(Number(event.target.value))} />
        </label>
        <label className="interactive__control" htmlFor={chiId}>
          log10 chi-e: <output>{logChi.toFixed(1)}</output>
          <input id={chiId} type="range" min="-4" max="0" step="0.1" value={logChi} onChange={(event) => setLogChi(Number(event.target.value))} />
        </label>
      </div>
      <div className="interactive__verdict"><strong>Diagnosis:</strong> {verdict}</div>
      <p className="interactive__note">The one-percent boundary is a pedagogical threshold, not a universal law. The map keeps two logically independent tests visible; it does not replace a full relativistic or quantum calculation.</p>
    </section>
  );
}
