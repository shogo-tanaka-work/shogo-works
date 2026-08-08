import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { globSync } from "node:fs";
import { subcategories } from "@/data/knowledge";
import type { KnowledgeCategory } from "@/types";

const CONTENT_ROOT = join(process.cwd(), "src/content/knowledge");

interface KnowledgeFile {
  /** repo からの相対パス（エラーメッセージ用） */
  path: string;
  category: string;
  subcategory?: string;
  slug: string;
  sortOrder: number;
  draft: boolean;
  body: string;
  /** 記事が到達可能な URL */
  href: string;
}

/** frontmatter の 1 行から `key: value` を取り出す（値のクォートは剥がす） */
function readField(frontmatter: string, key: string): string | undefined {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  if (!match) return undefined;
  return match[1].trim().replace(/^["']|["']$/g, "");
}

function loadKnowledgeFiles(): KnowledgeFile[] {
  const paths = globSync("**/*.mdx", { cwd: CONTENT_ROOT });

  return paths.map((relativePath) => {
    const absolutePath = join(CONTENT_ROOT, relativePath);
    const raw = readFileSync(absolutePath, "utf-8");
    const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---/);

    if (!frontmatterMatch) {
      throw new Error(`frontmatter がありません: ${relativePath}`);
    }

    const frontmatter = frontmatterMatch[1];
    const category = readField(frontmatter, "category");
    if (!category) {
      throw new Error(`category が未設定です: ${relativePath}`);
    }

    const subcategory = readField(frontmatter, "subcategory");
    // Astro の glob loader は `foo/index.mdx` の id を `foo` に畳むため、
    // slug は末尾が index の場合ひとつ上のディレクトリ名になる
    const segments = relativePath.replace(/\.mdx$/, "").split("/");
    if (segments[segments.length - 1] === "index") segments.pop();
    const slug = segments[segments.length - 1];

    return {
      path: `src/content/knowledge/${relativePath}`,
      category,
      subcategory,
      slug,
      sortOrder: Number(readField(frontmatter, "sortOrder") ?? 0),
      draft: readField(frontmatter, "draft") === "true",
      body: raw.slice(frontmatterMatch[0].length),
      // src/utils/knowledge.ts の toUnifiedFromInternal と同じ規則
      href: subcategory
        ? `/knowledge/${category}/${subcategory}/${slug}`
        : `/knowledge/${category}/${slug}`,
    };
  });
}

const files = loadKnowledgeFiles();
const published = files.filter((file) => !file.draft);

describe("knowledge 記事の到達可能性", () => {
  it("frontmatter の subcategory が data/knowledge.ts に登録されていること", () => {
    // 未登録だとサブカテゴリのハブページが生成されず、記事が孤児になる
    for (const file of files) {
      if (!file.subcategory) continue;

      const registered = subcategories[file.category as KnowledgeCategory] ?? [];
      const slugs = registered.map((meta) => meta.slug);

      expect(
        slugs,
        `${file.path}: subcategory "${file.subcategory}" が data/knowledge.ts に未登録`,
      ).toContain(file.subcategory);
    }
  });
});

describe("knowledge 記事の内部リンク", () => {
  const hrefs = new Set(published.map((file) => file.href));
  const categorySlugs = new Set(files.map((file) => file.category));
  const subcategoryHrefs = new Set(
    files
      .filter((file) => file.subcategory)
      .map((file) => `/knowledge/${file.category}/${file.subcategory}`),
  );

  it("本文中の /knowledge/ リンクが実在する記事・一覧を指すこと", () => {
    const broken: string[] = [];

    for (const file of published) {
      const links = file.body.match(/\]\(\/knowledge\/[^)]+\)/g) ?? [];

      for (const raw of links) {
        // ハッシュとクエリを落として比較する
        const href = raw
          .slice(2, -1)
          .split("#")[0]
          .split("?")[0]
          .replace(/\/$/, "");

        const isArticle = hrefs.has(href);
        const isSubcategoryIndex = subcategoryHrefs.has(href);
        const isCategoryIndex = categorySlugs.has(
          href.replace("/knowledge/", ""),
        );
        const isKnowledgeTop = href === "/knowledge";
        const isTagPage = href.startsWith("/knowledge/tags");
        const isRoadmap = href === "/knowledge/roadmap";

        if (
          !isArticle &&
          !isSubcategoryIndex &&
          !isCategoryIndex &&
          !isKnowledgeTop &&
          !isTagPage &&
          !isRoadmap
        ) {
          broken.push(`${file.path}: ${href}`);
        }
      }
    }

    expect(broken, `リンク切れ:\n${broken.join("\n")}`).toEqual([]);
  });
});

describe("knowledge 記事の表示順", () => {
  it("同じサブカテゴリ内で sortOrder が重複しないこと", () => {
    // 重複すると createdAt 依存になり、表示順が不安定になる
    const groups = new Map<string, Map<number, string[]>>();

    for (const file of published) {
      const groupKey = `${file.category}/${file.subcategory ?? "-"}`;
      const byOrder = groups.get(groupKey) ?? new Map<number, string[]>();
      byOrder.set(file.sortOrder, [
        ...(byOrder.get(file.sortOrder) ?? []),
        file.slug,
      ]);
      groups.set(groupKey, byOrder);
    }

    const duplicates: string[] = [];
    for (const [groupKey, byOrder] of groups) {
      for (const [sortOrder, slugs] of byOrder) {
        if (slugs.length > 1) {
          duplicates.push(`${groupKey} sortOrder=${sortOrder}: ${slugs.join(", ")}`);
        }
      }
    }

    expect(duplicates, `sortOrder 重複:\n${duplicates.join("\n")}`).toEqual([]);
  });
});
