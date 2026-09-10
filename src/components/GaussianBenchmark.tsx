import { useId, useMemo, useState } from 'react';

function simpsonIntegral(fn: (x: number) => number, lo: number, hi: number, panels = 400) {
  const n = panels % 2 === 0 ? panels : panels + 1;
  const h = (hi - lo) / n;
  let sum = fn(lo) + fn(hi);
  for (let i = 1; i < n; i += 1) sum += (i % 2 === 0 ? 2 : 4) * fn(lo + i * h);
  return (h / 3) * sum;
}

function exactAcceleration(x: number, epsilon: number) {
  return simpsonIntegral(
    (u) => Math.exp(-u - 0.5 * (x + epsilon * u) ** 2),
    0,
    32,
    320,
  );
}

function exactDrms(epsilon: number) {
  const numerator = simpsonIntegral(
    (w) => ((epsilon ** 4 * w ** 4) / (1 + epsilon ** 2 * w ** 2)) * Math.exp(-(w ** 2)),
    0,
    10,
    800,
  );
  const denominator = simpsonIntegral(
    (w) => (1 / (1 + epsilon ** 2 * w ** 2)) * Math.exp(-(w ** 2)),
    0,
    10,
    800,
  );
  return Math.sqrt(numerator / denominator);
}

const WIDTH = 680;
const HEIGHT = 300;
const PAD = { left: 48, right: 18, top: 20, bottom: 42 };

export default function GaussianBenchmark() {
  const [epsilon, setEpsilon] = useState(0.2);
  const sliderId = useId();
  const { exact, ll, force, drms } = useMemo(() => {
    const xs = Array.from({ length: 161 }, (_, i) => -4 + (8 * i) / 160);
    return {
      exact: xs.map((x) => [x, exactAcceleration(x, epsilon)] as const),
      ll: xs.map((x) => [x, Math.exp(-0.5 * x * x) * (1 - epsilon * x)] as const),
      force: xs.map((x) => [x, Math.exp(-0.5 * x * x)] as const),
      drms: exactDrms(epsilon),
    };
  }, [epsilon]);

  const xScale = (x: number) => PAD.left + ((x + 4) / 8) * (WIDTH - PAD.left - PAD.right);
  const yScale = (y: number) => PAD.top + ((1.3 - y) / 1.6) * (HEIGHT - PAD.top - PAD.bottom);
  const path = (points: ReadonlyArray<readonly [number, number]>) =>
    points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${xScale(x).toFixed(2)},${yScale(y).toFixed(2)}`).join(' ');
  const asymptotic = (Math.sqrt(3) / 2) * epsilon ** 2 * (1 - epsilon ** 2);

  return (
    <section className="interactive" aria-labelledby={`${sliderId}-title`}>
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">Interactive benchmark</span>
          <h3 id={`${sliderId}-title`}>Slow the pulse down; watch LL converge</h3>
        </div>
        <output className="interactive__readout">epsilon = {epsilon.toFixed(2)}</output>
      </div>
      <label className="interactive__control" htmlFor={sliderId}>
        Pulse-variation parameter
        <input
          id={sliderId}
          type="range"
          min="0.02"
          max="1"
          step="0.01"
          value={epsilon}
          onChange={(event) => setEpsilon(Number(event.target.value))}
        />
        <span className="interactive__range"><span>slow, 0.02</span><span>stress test, 1.00</span></span>
      </label>
      <div className="interactive__plot" role="img" aria-label={`Gaussian force, exact non-runaway acceleration, and Landau-Lifshitz approximation at epsilon ${epsilon.toFixed(2)}`}>
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
          <line className="plot__axis" x1={PAD.left} x2={WIDTH - PAD.right} y1={yScale(0)} y2={yScale(0)} />
          <line className="plot__axis" x1={xScale(0)} x2={xScale(0)} y1={PAD.top} y2={HEIGHT - PAD.bottom} />
          {[-4, -2, 0, 2, 4].map((tick) => <text className="plot__tick" key={tick} x={xScale(tick)} y={HEIGHT - 17} textAnchor="middle">{tick}</text>)}
          <text className="plot__label" x={WIDTH - PAD.right} y={HEIGHT - 5} textAnchor="end">x = t/T</text>
          <path className="plot__line plot__line--force" d={path(force)} />
          <path className="plot__line plot__line--exact" d={path(exact)} />
          <path className="plot__line plot__line--ll" d={path(ll)} />
        </svg>
      </div>
      <div className="interactive__legend" aria-hidden="true">
        <span><i className="legend--force" />force</span>
        <span><i className="legend--exact" />exact branch</span>
        <span><i className="legend--ll" />LL</span>
      </div>
      <div className="interactive__metrics">
        <div><span>Exact normalized RMS error</span><strong>{drms.toExponential(3)}</strong></div>
        <div><span>Small-epsilon approximation</span><strong>{Math.max(0, asymptotic).toExponential(3)}</strong></div>
      </div>
      <p className="interactive__note">At small epsilon the two acceleration curves become visually indistinguishable, while the reported error still resolves their difference. Near one, the truncated asymptotic expression is no longer a useful numerical estimate.</p>
    </section>
  );
}
