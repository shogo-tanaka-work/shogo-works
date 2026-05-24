/**
 * note (note.com) の個人ページ RSS 2.0 フィードを取得・パースするユーティリティ。
 * 外部ライブラリ依存を避けるため、文字列ベースの軽量パーサで実装する。
 * note の RSS は固定構造（<item> 単位、CDATA セクション、<media:thumbnail>）のため
 * 正規表現で十分実用に足る。汎用 RSS パーサが必要になったら xml2js 等への置換を検討する。
 */

export interface NoteArticle {
  title: string;
  link: string;
  pubDate: Date;
  thumbnail: string | undefined;
  description: string;
}

const ITEM_RE = /<item\b[^>]*>([\s\S]*?)<\/item>/g;

function extractTag(block: string, tag: string): string | undefined {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`);
  const m = block.match(re);
  if (!m) return undefined;
  return stripCdata(m[1]).trim();
}

function stripCdata(value: string): string {
  const cdataMatch = value.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return cdataMatch ? cdataMatch[1] : value;
}

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
}

export function parseNoteFeed(xml: string): NoteArticle[] {
  if (!xml || !xml.includes("<item")) return [];

  try {
    const articles: NoteArticle[] = [];
    const matches = xml.matchAll(ITEM_RE);

    for (const match of matches) {
      const block = match[1];
      const title = extractTag(block, "title");
      const link = extractTag(block, "link");
      const pubDateStr = extractTag(block, "pubDate");
      const descriptionRaw = extractTag(block, "description") ?? "";
      const thumbnail = extractTag(block, "media:thumbnail");

      if (!title || !link || !pubDateStr) continue;
      const pubDate = new Date(pubDateStr);
      if (Number.isNaN(pubDate.getTime())) continue;

      articles.push({
        title,
        link,
        pubDate,
        thumbnail: thumbnail || undefined,
        description: stripHtml(descriptionRaw),
      });
    }

    return articles;
  } catch (error) {
    console.error("[noteFeed] parse failed:", error);
    return [];
  }
}

export async function fetchNoteFeed(
  rssUrl: string,
  limit: number,
): Promise<NoteArticle[]> {
  try {
    const response = await fetch(rssUrl, {
      headers: { "User-Agent": "shogo-works-site/1.0 (+https://shogoworks.com)" },
    });
    if (!response.ok) {
      console.error(`[noteFeed] fetch failed: ${response.status} ${rssUrl}`);
      return [];
    }
    const xml = await response.text();
    return parseNoteFeed(xml).slice(0, limit);
  } catch (error) {
    console.error("[noteFeed] fetch threw:", error);
    return [];
  }
}
