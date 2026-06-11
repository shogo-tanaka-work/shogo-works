import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { knowledgeTiers } from "@/data/knowledgeTiers";
import { subcategories } from "@/data/knowledge";

const CURRICULUM_DIR = join(
  process.cwd(),
  "src/content/knowledge/ai-tools/claude-code-curriculum",
);
const LESSONS_PER_CHAPTER = 3;

interface LessonMeta {
  file: string;
  title: string;
  subcategory: string;
  sortOrder: number;
  draft: boolean;
}

// frontmatter から必要なフィールドだけを抽出する（MDX 全体のパースは build テストが担保）
function parseLesson(file: string): LessonMeta {
  const raw = readFileSync(join(CURRICULUM_DIR, file), "utf-8");
  const fm = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) throw new Error(`frontmatter がない: ${file}`);
  const get = (key: string) =>
    fm[1].match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim() ?? "";
  return {
    file,
    title: get("title").replace(/^"|"$/g, ""),
    subcategory: get("subcategory").replace(/^"|"$/g, ""),
    sortOrder: Number(get("sortOrder")),
    draft: get("draft") === "true",
  };
}

const lessons = readdirSync(CURRICULUM_DIR)
  .filter((file) => file.endsWith(".mdx"))
  .map(parseLesson);

describe("Claude Code カリキュラム整合性", () => {
  it("レッスンが1件以上存在すること", () => {
    expect(lessons.length).toBeGreaterThan(0);
  });

  it("全レッスンの subcategory が claude-code-curriculum であること", () => {
    lessons.forEach((lesson) => {
      expect(lesson.subcategory, lesson.file).toBe("claude-code-curriculum");
    });
  });

  it("sortOrder が一意であること", () => {
    const orders = lessons.map((lesson) => lesson.sortOrder);
    expect(new Set(orders).size).toBe(orders.length);
  });

  it("sortOrder が「章番号×10 + 0〜2」の規約に従っていること", () => {
    lessons.forEach((lesson) => {
      const chapter = Math.floor(lesson.sortOrder / 10);
      const index = lesson.sortOrder % 10;
      expect(chapter, `${lesson.file}: 章番号が範囲外`).toBeGreaterThanOrEqual(1);
      expect(chapter, `${lesson.file}: 章番号が範囲外`).toBeLessThanOrEqual(10);
      expect(index, `${lesson.file}: レッスン連番は0〜2`).toBeLessThan(
        LESSONS_PER_CHAPTER,
      );
    });
  });

  it("存在する章は3レッスン揃っていること（執筆途中の章を検出）", () => {
    const byChapter = new Map<number, LessonMeta[]>();
    lessons.forEach((lesson) => {
      const chapter = Math.floor(lesson.sortOrder / 10);
      byChapter.set(chapter, [...(byChapter.get(chapter) ?? []), lesson]);
    });
    byChapter.forEach((chapterLessons, chapter) => {
      expect(
        chapterLessons.length,
        `第${chapter}章のレッスン数が不正: ${chapterLessons.map((l) => l.file).join(", ")}`,
      ).toBe(LESSONS_PER_CHAPTER);
    });
  });

  it("draft のレッスンが残っていないこと", () => {
    lessons.forEach((lesson) => {
      expect(lesson.draft, lesson.file).toBe(false);
    });
  });

  it("各レッスンの sortOrder が対応する章の tier 範囲に収まっていること", () => {
    const tiers = knowledgeTiers["ai-tools/claude-code-curriculum"];
    expect(tiers).toBeDefined();
    expect(tiers).toHaveLength(10);

    lessons.forEach((lesson) => {
      const tier = [...tiers]
        .reverse()
        .find((t) => lesson.sortOrder >= t.sortOrderStart);
      const chapter = Math.floor(lesson.sortOrder / 10);
      expect(tier?.order, `${lesson.file}: tier 帰属が章とずれている`).toBe(
        chapter,
      );
    });
  });

  it("サブカテゴリが knowledge.ts に登録されていること", () => {
    const aiToolsSubs = subcategories["ai-tools"] ?? [];
    expect(
      aiToolsSubs.some((sub) => sub.slug === "claude-code-curriculum"),
    ).toBe(true);
  });

  it("タイトルが「章-連番 」の形式で始まっていること", () => {
    lessons.forEach((lesson) => {
      expect(lesson.title, lesson.file).toMatch(/^\d{1,2}-\d /);
    });
  });
});
