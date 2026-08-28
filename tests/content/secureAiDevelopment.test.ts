import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { subcategories } from "@/data/knowledge";
import { getTiersFor } from "@/data/knowledgeTiers";

const SERIES_DIR = join(
  process.cwd(),
  "src/content/knowledge/security/secure-ai-development",
);
const CATEGORY = "security";
const SUBCATEGORY = "secure-ai-development";
/** index を除いた本編の記事数 */
const ARTICLE_COUNT = 12;

interface ArticleMeta {
  file: string;
  title: string;
  category: string;
  subcategory: string;
  sortOrder: number;
  draft: boolean;
  body: string;
}

function parseArticle(file: string): ArticleMeta {
  const raw = readFileSync(join(SERIES_DIR, file), "utf-8");
  const fm = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) throw new Error(`frontmatter がない: ${file}`);
  const get = (key: string) =>
    fm[1].match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim() ?? "";
  const unquote = (value: string) => value.replace(/^"|"$/g, "");

  return {
    file,
    title: unquote(get("title")),
    category: unquote(get("category")),
    subcategory: unquote(get("subcategory")),
    sortOrder: Number(get("sortOrder")),
    draft: get("draft") === "true",
    body: raw.slice(fm[0].length),
  };
}

const articles = readdirSync(SERIES_DIR)
  .filter((file) => file.endsWith(".mdx"))
  .map(parseArticle);

const body = articles.filter((article) => article.file !== "index.mdx");

describe("AI開発セキュリティ実践シリーズの整合性", () => {
  it(`index と本編${ARTICLE_COUNT}本で構成されていること`, () => {
    expect(articles.some((article) => article.file === "index.mdx")).toBe(true);
    expect(body.length).toBe(ARTICLE_COUNT);
  });

  it("category と subcategory が揃っていること", () => {
    articles.forEach((article) => {
      expect(article.category, article.file).toBe(CATEGORY);
      expect(article.subcategory, article.file).toBe(SUBCATEGORY);
    });
  });

  it("subcategory が data/knowledge.ts に登録されていること", () => {
    const slugs = (subcategories[CATEGORY] ?? []).map((meta) => meta.slug);
    expect(slugs).toContain(SUBCATEGORY);
  });

  it("index の sortOrder が 0 であること", () => {
    const index = articles.find((article) => article.file === "index.mdx");
    expect(index?.sortOrder).toBe(0);
  });

  it("sortOrder がファイル名の連番と一致すること", () => {
    body.forEach((article) => {
      const m = article.file.match(/^(\d{2})-/);
      expect(m, `${article.file}: ファイル名が「連番-」形式でない`).not.toBeNull();
      expect(article.sortOrder, article.file).toBe(Number(m?.[1]));
    });
  });

  it("sortOrder が 1 から連続していること", () => {
    const orders = body
      .map((article) => article.sortOrder)
      .sort((a, b) => a - b);
    expect(orders).toEqual(
      Array.from({ length: ARTICLE_COUNT }, (_, i) => i + 1),
    );
  });

  it("公開状態であること", () => {
    articles.forEach((article) => {
      expect(article.draft, article.file).toBe(false);
    });
  });

  it("すべての記事がいずれかの tier に属すること", () => {
    const tiers = getTiersFor(CATEGORY, SUBCATEGORY);
    expect(tiers, "tier が knowledgeTiers.ts に未登録").toBeDefined();
    const starts = (tiers ?? []).map((tier) => tier.sortOrderStart);
    const max = Math.max(...starts);
    articles.forEach((article) => {
      expect(
        article.sortOrder >= Math.min(...starts) || article.sortOrder >= max,
        `${article.file}: どの tier にも入らない sortOrder`,
      ).toBe(true);
    });
  });

  it("本編の各記事が index から参照されていること", () => {
    const index = articles.find((article) => article.file === "index.mdx");
    const missing = body
      .map((article) => article.file.replace(/\.mdx$/, ""))
      .filter((slug) => !index?.body.includes(`/${SUBCATEGORY}/${slug}/`));
    expect(missing, `index に未掲載:\n${missing.join("\n")}`).toEqual([]);
  });
});
