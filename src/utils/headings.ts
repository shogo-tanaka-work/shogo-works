import type { MarkdownHeading } from "astro";

export interface TocItem {
  depth: number;
  slug: string;
  text: string;
  children: TocItem[];
}

const MIN_DEPTH = 2;
const MAX_DEPTH = 3;

/**
 * Astro の `render()` が返す MarkdownHeading[] から右TOC用の階層構造を作る。
 * h2 を親、直後の h3 を子として束ねる。h1 と h4 以下は除外する。
 */
export function getTocHeadings(
  headings: readonly MarkdownHeading[],
): TocItem[] {
  const filtered = headings.filter(
    (h) => h.depth >= MIN_DEPTH && h.depth <= MAX_DEPTH,
  );
  const root: TocItem[] = [];
  let lastH2: TocItem | null = null;

  for (const h of filtered) {
    const item: TocItem = {
      depth: h.depth,
      slug: h.slug,
      text: h.text,
      children: [],
    };
    if (h.depth === 2) {
      root.push(item);
      lastH2 = item;
    } else if (lastH2) {
      lastH2.children.push(item);
    } else {
      root.push(item);
    }
  }

  return root;
}
