import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Hadamard quantum walk on a line vs. a classical random walk.
 * Quantum: coin (|0⟩ + i|1⟩)/√2 at x = 0, Hadamard coin, shift 0→x−1, 1→x+1.
 * Classical: unbiased ±1 steps (binomial). Both drawn as probability profiles.
 */

type Props = {
  /** number of steps to animate to */
  steps?: number;
  /** show slider + play/pause controls */
  interactive?: boolean;
  /** canvas height in CSS px */
  height?: number;
  /** ms between steps while animating */
  speed?: number;
  caption?: string;
};

const SQ = Math.SQRT1_2;

function computeWalks(steps: number) {
  const N = 2 * steps + 1;
  const off = steps;
  // quantum amplitudes for coin 0 / coin 1 as (re, im)
  let r0 = new Float64Array(N), i0 = new Float64Array(N);
  let r1 = new Float64Array(N), i1 = new Float64Array(N);
  r0[off] = SQ; // |0⟩ component
  i1[off] = SQ; // i|1⟩ component
  let c = new Float64Array(N);
  c[off] = 1;

  const quantum: Float64Array[] = [];
  const classical: Float64Array[] = [];
  const snapshot = () => {
    const q = new Float64Array(N);
    for (let x = 0; x < N; x++) q[x] = r0[x] * r0[x] + i0[x] * i0[x] + r1[x] * r1[x] + i1[x] * i1[x];
    quantum.push(q);
    classical.push(Float64Array.from(c));
  };
  snapshot();

  for (let t = 1; t <= steps; t++) {
    const nr0 = new Float64Array(N), ni0 = new Float64Array(N);
    const nr1 = new Float64Array(N), ni1 = new Float64Array(N);
    for (let x = 0; x < N; x++) {
      // Hadamard coin
      const aRe = SQ * (r0[x] + r1[x]), aIm = SQ * (i0[x] + i1[x]); // new coin 0
      const bRe = SQ * (r0[x] - r1[x]), bIm = SQ * (i0[x] - i1[x]); // new coin 1
      if (x > 0) { nr0[x - 1] += aRe; ni0[x - 1] += aIm; }
      if (x < N - 1) { nr1[x + 1] += bRe; ni1[x + 1] += bIm; }
    }
    r0 = nr0; i0 = ni0; r1 = nr1; i1 = ni1;

    const nc = new Float64Array(N);
    for (let x = 0; x < N; x++) {
      if (c[x] === 0) continue;
      if (x > 0) nc[x - 1] += c[x] / 2;
      if (x < N - 1) nc[x + 1] += c[x] / 2;
    }
    c = nc;
    snapshot();
  }
  return { quantum, classical, N, off };
}

function sigma(p: Float64Array, off: number) {
  let m2 = 0;
  for (let x = 0; x < p.length; x++) m2 += p[x] * (x - off) * (x - off);
  return Math.sqrt(m2);
}

function cssVar(name: string, fallback: string) {
  if (typeof window === 'undefined') return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

export default function QuantumWalk({
  steps: initialSteps = 40,
  interactive = false,
  height = 220,
  speed = 90,
  caption,
}: Props) {
  const [steps, setSteps] = useState(initialSteps);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const data = useMemo(() => computeWalks(steps), [steps]);

  // reduced motion: jump to the end and stay
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // animation loop
  useEffect(() => {
    if (reduced) { setT(steps); return; }
    if (!playing) return;
    let cancelled = false;
    let timer: number;
    const tick = () => {
      if (cancelled) return;
      setT((prev) => {
        if (prev >= steps) {
          // hold at the end, then restart
          timer = window.setTimeout(tick, 1600);
          return 0;
        }
        timer = window.setTimeout(tick, speed);
        return prev + 1;
      });
    };
    timer = window.setTimeout(tick, speed);
    const onVis = () => { if (document.hidden) { clearTimeout(timer); } else { clearTimeout(timer); timer = window.setTimeout(tick, speed); } };
    document.addEventListener('visibilitychange', onVis);
    return () => { cancelled = true; clearTimeout(timer); document.removeEventListener('visibilitychange', onVis); };
  }, [playing, steps, speed, reduced]);

  // clamp t when steps changes
  useEffect(() => { setT((prev) => Math.min(prev, steps)); }, [steps]);

  // draw
  useEffect(() => {
    const canvas = canvasRef.current, wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const W = wrap.clientWidth, H = height;
      if (canvas.width !== W * dpr || canvas.height !== H * dpr) {
        canvas.width = W * dpr; canvas.height = H * dpr;
        canvas.style.width = `${W}px`; canvas.style.height = `${H}px`;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const accent = cssVar('--accent', '#b83a2a');
      const muted = cssVar('--muted', '#7a766d');
      const ink = cssVar('--ink-2', '#4a4741');
      const line = cssVar('--line', '#e4e0d5');

      const q = data.quantum[t], c = data.classical[t];
      const { N, off } = data;
      const padX = 8, padTop = 26, padBot = 22;
      const plotH = H - padTop - padBot;
      const xOf = (x: number) => padX + (x / (N - 1)) * (W - 2 * padX);
      let maxP = 1e-9;
      for (let x = 0; x < N; x++) maxP = Math.max(maxP, q[x], c[x]);
      const yOf = (p: number) => padTop + plotH - (p / maxP) * plotH;

      // baseline
      ctx.strokeStyle = line; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(padX, padTop + plotH + 0.5); ctx.lineTo(W - padX, padTop + plotH + 0.5); ctx.stroke();

      // only sites with the right parity are reachable at step t
      const pts = (p: Float64Array) => {
        const out: [number, number][] = [];
        for (let x = 0; x < N; x++) if ((x - off + t) % 2 === 0) out.push([xOf(x), yOf(p[x])]);
        return out;
      };
      const area = (p: Float64Array, stroke: string, fill: string, width: number) => {
        const P = pts(p);
        if (P.length === 0) return;
        ctx.beginPath();
        ctx.moveTo(P[0][0], padTop + plotH);
        for (const [x, y] of P) ctx.lineTo(x, y);
        ctx.lineTo(P[P.length - 1][0], padTop + plotH);
        ctx.closePath();
        ctx.fillStyle = fill; ctx.fill();
        ctx.beginPath();
        P.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.strokeStyle = stroke; ctx.lineWidth = width; ctx.lineJoin = 'round'; ctx.stroke();
      };
      ctx.globalAlpha = 1;
      area(c, muted, 'rgba(128,128,128,0.16)', 1.25);
      area(q, accent, 'rgba(184,58,42,0.14)', 1.75);

      // labels
      ctx.font = '11px "JetBrains Mono", ui-monospace, monospace';
      ctx.textBaseline = 'top';
      ctx.fillStyle = accent; ctx.textAlign = 'left';
      ctx.fillText('■ Hadamard quantum walk', padX, 4);
      ctx.fillStyle = muted;
      ctx.fillText('■ classical random walk', padX + 176, 4);
      ctx.textAlign = 'right'; ctx.fillStyle = ink;
      const sq = sigma(q, off).toFixed(1), sc = sigma(c, off).toFixed(1);
      ctx.fillText(`t = ${String(t).padStart(String(steps).length, ' ')}   σq = ${sq}   σc = ${sc}`, W - padX, 4);
      // axis ticks
      ctx.fillStyle = muted; ctx.textAlign = 'center';
      for (const x of [-steps, -steps / 2, 0, steps / 2, steps]) {
        const xi = Math.round(x) + off;
        ctx.fillText(String(Math.round(x)), xOf(xi), padTop + plotH + 6);
      }
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(wrap);
    const mo = new MutationObserver(draw);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => { ro.disconnect(); mo.disconnect(); };
  }, [data, t, height, steps]);

  return (
    <figure className="my-2">
      <div ref={wrapRef} className="w-full">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={`Probability distribution of a Hadamard quantum walk and a classical random walk after ${t} steps. The quantum walk spreads linearly in time; the classical one as the square root.`}
        />
      </div>
      {interactive && (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-2 font-mono">
          <label className="flex items-center gap-2">
            <span>steps</span>
            <input
              type="range" min={10} max={100} step={2} value={steps}
              onChange={(e) => { setSteps(Number(e.target.value)); setT(0); }}
              className="accent-[var(--accent)]"
              aria-label="Number of steps"
            />
            <span className="tabular-nums w-8">{steps}</span>
          </label>
          <button type="button" className="toggle-btn" onClick={() => setPlaying((p) => !p)} aria-pressed={playing}>
            {playing ? 'pause' : 'play'}
          </button>
          <button type="button" className="toggle-btn" onClick={() => { setT(0); setPlaying(true); }}>
            restart
          </button>
        </div>
      )}
      {caption && <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
