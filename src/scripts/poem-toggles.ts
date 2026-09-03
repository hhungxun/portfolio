/**
 * Client-side toggles for poem pages.
 *  - script: Traditional (canonical, stored in the repo) ⇄ Simplified via OpenCC
 *  - direction: vertical right-to-left (直排) ⇄ horizontal (橫排)
 * Choices persist in localStorage. Default direction is vertical on screens
 * wider than 640px and horizontal on phones.
 */
import { Converter } from 'opencc-js/t2cn';

type Script = 'tw' | 'cn';
type Dir = 'vertical' | 'horizontal';

const toCN = Converter({ from: 'tw', to: 'cn' });
const originals = new WeakMap<Text, string>();

const get = (k: string): string | null => {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
};
const set = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v);
  } catch {}
};

function convertTextNodes(root: Element, script: Script) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node as Text;
    if (!originals.has(text)) originals.set(text, text.data);
    const orig = originals.get(text)!;
    const next = script === 'cn' ? toCN(orig) : orig;
    if (text.data !== next) text.data = next;
  }
}

export function applyScript(script: Script) {
  document.querySelectorAll<HTMLElement>('[data-cc]').forEach((el) => {
    convertTextNodes(el, script);
    el.setAttribute('lang', script === 'cn' ? 'zh-Hans' : 'zh-Hant');
  });
  document.querySelectorAll<HTMLElement>('[data-script-btn]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.scriptBtn === script));
  });
  document.documentElement.dataset.script = script;
}

export function applyDir(dir: Dir) {
  document.querySelectorAll<HTMLElement>('[data-poem]').forEach((el) => {
    el.dataset.dir = dir;
    // vertical text starts at the right edge; make sure we are scrolled there
    if (dir === 'vertical') el.scrollLeft = 0;
  });
  document.querySelectorAll<HTMLElement>('[data-dir-btn]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.dirBtn === dir));
  });
}

let initialised = false;
export function init() {
  if (initialised) return;
  initialised = true;

  const storedScript = get('poem-script') as Script | null;
  applyScript(storedScript === 'cn' ? 'cn' : 'tw');

  const storedDir = get('poem-dir') as Dir | null;
  const wide = window.matchMedia('(min-width: 640px)').matches;
  applyDir(storedDir === 'vertical' || storedDir === 'horizontal' ? storedDir : wide ? 'vertical' : 'horizontal');

  document.querySelectorAll<HTMLElement>('[data-script-btn]').forEach((b) =>
    b.addEventListener('click', () => {
      const s = (b.dataset.scriptBtn as Script) ?? 'tw';
      set('poem-script', s);
      applyScript(s);
    }),
  );
  document.querySelectorAll<HTMLElement>('[data-dir-btn]').forEach((b) =>
    b.addEventListener('click', () => {
      const d = (b.dataset.dirBtn as Dir) ?? 'horizontal';
      set('poem-dir', d);
      applyDir(d);
    }),
  );
}
