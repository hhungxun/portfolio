import { useId, useMemo, useState } from 'react';

function factorial(n: number) {
  let value = 1;
  for (let k = 2; k <= n; k += 1) value *= k;
  return value;
}

function laguerre(order: number, alpha: number, x: number) {
  if (order === 0) return 1;
  if (order === 1) return 1 + alpha - x;
  let previous = 1;
  let current = 1 + alpha - x;
  for (let k = 1; k < order; k += 1) {
    const next = ((2 * k + 1 + alpha - x) * current - (k + alpha) * previous) / (k + 1);
    previous = current;
    current = next;
  }
  return current;
}

function radialDensity(n: number, ell: number, r: number) {
  const rho = (2 * r) / n;
  const norm = Math.sqrt((2 / n) ** 3 * factorial(n - ell - 1) / (2 * n * factorial(n + ell)));
  const radial = norm * Math.exp(-rho / 2) * rho ** ell * laguerre(n - ell - 1, 2 * ell + 1, rho);
  return r * r * radial * radial;
}

export default function AngularMomentumExplorer() {
  const [j, setJ] = useState(1.5);
  const [m, setM] = useState(-0.5);
  const [n, setN] = useState(2);
  const [ell, setEll] = useState(1);
  const jId = useId();
  const mId = useId();
  const nId = useId();
  const ellId = useId();

  const ladder = Array.from({ length: Math.round(2 * j) + 1 }, (_, index) => -j + index);
  const raise = Math.sqrt(Math.max(0, j * (j + 1) - m * (m + 1)));
  const lower = Math.sqrt(Math.max(0, j * (j + 1) - m * (m - 1)));
  const radial = useMemo(() => {
    const maxR = Math.max(18, 3.2 * n * n);
    const points = Array.from({ length: 241 }, (_, index) => {
      const r = (maxR * index) / 240;
      return [r, radialDensity(n, ell, r)] as const;
    });
    const peak = Math.max(...points.map(([, value]) => value), 1e-12);
    return { points, maxR, peak };
  }, [n, ell]);

  const radialPath = radial.points.map(([r, value], index) => {
    const x = 38 + (r / radial.maxR) * 602;
    const y = 170 - (value / radial.peak) * 142;
    return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');

  function updateJ(value: number) {
    setJ(value);
    setM(-value);
  }

  function updateN(value: number) {
    setN(value);
    setEll((current) => Math.min(current, value - 1));
  }

  return (
    <section className="interactive angular-explorer" aria-labelledby={`${jId}-title`}>
      <div className="interactive__heading">
        <div>
          <span className="interactive__eyebrow">Representation explorer</span>
          <h3 id={`${jId}-title`}>One algebra, two physical realizations</h3>
        </div>
      </div>

      <div className="angular-explorer__panel">
        <div className="interactive__controls--two">
          <label className="interactive__control" htmlFor={jId}>
            representation j = <output>{j}</output>
            <input id={jId} type="range" min="0" max="3" step="0.5" value={j} onChange={(event) => updateJ(Number(event.target.value))} />
          </label>
          <label className="interactive__control" htmlFor={mId}>
            selected m = <output>{m}</output>
            <input id={mId} type="range" min={-j} max={j} step="1" value={m} onChange={(event) => setM(Number(event.target.value))} />
          </label>
        </div>
        <div className="angular-ladder" role="img" aria-label={`Angular momentum ladder for j equals ${j}, with m equals ${m} selected`}>
          {ladder.map((value) => (
            <span key={value} className={value === m ? 'is-selected' : ''}>
              <i />m = {value}
            </span>
          ))}
        </div>
        <div className="interactive__metrics">
          <div><span>J squared / hbar squared</span><strong>{(j * (j + 1)).toFixed(2)}</strong></div>
          <div><span>raising coefficient / hbar</span><strong>{raise.toFixed(3)}</strong></div>
          <div><span>lowering coefficient / hbar</span><strong>{lower.toFixed(3)}</strong></div>
          <div><span>multiplet dimension</span><strong>{Math.round(2 * j + 1)}</strong></div>
        </div>
      </div>

      <div className="angular-explorer__panel">
        <div className="interactive__controls--two">
          <label className="interactive__control" htmlFor={nId}>
            hydrogen n = <output>{n}</output>
            <input id={nId} type="range" min="1" max="6" step="1" value={n} onChange={(event) => updateN(Number(event.target.value))} />
          </label>
          <label className="interactive__control" htmlFor={ellId}>
            orbital ell = <output>{ell}</output>
            <input id={ellId} type="range" min="0" max={n - 1} step="1" value={ell} onChange={(event) => setEll(Number(event.target.value))} />
          </label>
        </div>
        <div className="hydrogen-plot" role="img" aria-label={`Radial probability density for hydrogen state n equals ${n}, ell equals ${ell}`}>
          <svg viewBox="0 0 680 190">
            <line className="plot__axis" x1="38" x2="640" y1="170" y2="170" />
            <path className="plot__area" d={`${radialPath} L640,170 L38,170 Z`} />
            <path className="plot__line plot__line--exact" d={radialPath} />
            <text className="plot__label" x="640" y="187" textAnchor="end">r / a0</text>
            <text className="plot__tick" x="38" y="187">0</text>
            <text className="plot__tick" x="640" y="187" textAnchor="end">{radial.maxR.toFixed(0)}</text>
          </svg>
        </div>
        <div className="interactive__metrics">
          <div><span>energy</span><strong>{(-13.6 / (n * n)).toFixed(3)} eV</strong></div>
          <div><span>radial nodes</span><strong>{n - ell - 1}</strong></div>
          <div><span>allowed m values</span><strong>{2 * ell + 1}</strong></div>
          <div><span>orbital states at this n</span><strong>{n * n}</strong></div>
        </div>
      </div>
      <p className="interactive__note">The upper panel uses only the rotation algebra. The lower panel adds the Coulomb Hamiltonian, boundary conditions, and normalizability. Energy depends only on n in the nonrelativistic Coulomb problem; fine structure, Lamb shifts, and spin are not included.</p>
    </section>
  );
}
