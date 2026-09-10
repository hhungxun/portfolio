import { useId, useMemo, useState } from 'react';

const NX = 64;
const NP = 44;

export default function WignerSmoothing() {
  const [smoothing, setSmoothing] = useState(0);
  const sliderId = useId();
  const cells = useMemo(() => {
    const width = 1 + 1.4 * smoothing;
    const fringe = Math.exp(-6 * smoothing * smoothing);
    const values: Array<{ x: number; y: number; value: number }> = [];
    let scale = 0;
    let negativity = 0;
    let total = 0;
    for (let row = 0; row < NP; row += 1) {
      const p = -3.4 + (6.8 * row) / (NP - 1);
      for (let col = 0; col < NX; col += 1) {
        const q = -4.2 + (8.4 * col) / (NX - 1);
        const left = Math.exp(-((q + 1.7) ** 2 + p ** 2) / width);
        const right = Math.exp(-((q - 1.7) ** 2 + p ** 2) / width);
        const interference = 1.35 * fringe * Math.exp(-(q * q + p * p) / width) * Math.cos(4.5 * p);
        const value = left + right + interference;
        values.push({ x: col, y: NP - row - 1, value });
        scale = Math.max(scale, Math.abs(value));
        total += Math.abs(value);
        if (value < 0) negativity += -value;
      }
    }
    return { values, scale, negativeFraction: negativity / Math.max(total, 1e-12) };
  }, [smoothing]);

  return (
    <section className="interactive" aria-labelledby={`${sliderId}-title`}>
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">Phase-space microscope</span>
          <h3 id={`${sliderId}-title`}>Blur the fringes, not the normalization</h3>
        </div>
        <output className="interactive__readout">resolution loss = {smoothing.toFixed(2)}</output>
      </div>
      <label className="interactive__control" htmlFor={sliderId}>
        Gaussian coarse-graining strength
        <input id={sliderId} type="range" min="0" max="1" step="0.01" value={smoothing} onChange={(event) => setSmoothing(Number(event.target.value))} />
        <span className="interactive__range"><span>fine Wigner structure</span><span>coarse positive picture</span></span>
      </label>
      <div className="wigner-map" role="img" aria-label={`Illustrative Wigner interference pattern at smoothing ${smoothing.toFixed(2)}`}>
        <svg viewBox={`0 0 ${NX} ${NP}`} preserveAspectRatio="none">
          {cells.values.map((cell) => {
            const strength = Math.min(1, Math.abs(cell.value) / cells.scale);
            const color = cell.value >= 0
              ? `rgba(40,114,113,${0.08 + 0.92 * strength})`
              : `rgba(184,58,42,${0.08 + 0.92 * strength})`;
            return <rect key={`${cell.x}-${cell.y}`} x={cell.x} y={cell.y} width="1.05" height="1.05" fill={color} />;
          })}
        </svg>
        <span className="wigner-map__q">position q →</span>
        <span className="wigner-map__p">momentum p →</span>
      </div>
      <div className="interactive__legend">
        <span><i className="legend--exact" />positive</span>
        <span><i className="legend--ll" />negative</span>
      </div>
      <div className="interactive__metrics">
        <div><span>illustrative negative weight fraction</span><strong>{(100 * cells.negativeFraction).toFixed(2)}%</strong></div>
        <div><span>fringe visibility factor</span><strong>{Math.exp(-6 * smoothing * smoothing).toFixed(3)}</strong></div>
      </div>
      <p className="interactive__note">This is a dimensionless two-lobe model designed to expose the filtering mechanism, not a state-tomography dataset. Gaussian convolution damps the high-frequency interference term first. The Husimi Q-function is a specific physically normalized smoothing with guaranteed positivity.</p>
    </section>
  );
}
