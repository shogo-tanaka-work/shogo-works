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
/**
 * 標準の3本に収まらない章。
 * 第2章: CLI / GUI 分岐のため 2-0（環境の選び方）＋ CLI 3本 ＋ GUI 2本 の 6 本。
 * 第6章: Skills と Hooks の 2 本。カスタムスラッシュコマンドは公式で Skills へ
 *        統合されたため、独立したレッスンを置いていない。
 */
const CHAPTER_LESSON_COUNTS = new Map<number, number>([
  [2, 6],
  [6, 2],
]);
const MAX_LESSON_INDEX = 9;
const TOTAL_CHAPTERS = 11;

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

  it("sortOrder が「章番号×10 + レッスン番号」の規約に従っていること", () => {
    lessons.forEach((lesson) => {
      const m = lesson.file.match(/^(\d{2})-(\d)-/);
      expect(m, `${lesson.file}: ファイル名が「章-連番-」形式でない`).not.toBeNull();
      const chapter = Number(m?.[1]);
      const index = Number(m?.[2]);

      expect(chapter, `${lesson.file}: 章番号が範囲外`).toBeGreaterThanOrEqual(1);
      expect(chapter, `${lesson.file}: 章番号が範囲外`).toBeLessThanOrEqual(
        TOTAL_CHAPTERS,
      );
      expect(index, `${lesson.file}: レッスン番号は1桁`).toBeLessThanOrEqual(
        MAX_LESSON_INDEX,
      );
      // ファイル名・sortOrder・tier 帰属を一致させるための唯一の規約
      expect(
        lesson.sortOrder,
        `${lesson.file}: sortOrder がファイル名と一致しない`,
      ).toBe(chapter * 10 + index);
    });
  });

  it("各章のレッスンが規定数揃っていること（執筆途中の章を検出）", () => {
    const byChapter = new Map<number, LessonMeta[]>();
    lessons.forEach((lesson) => {
      const chapter = Number(lesson.file.slice(0, 2));
      byChapter.set(chapter, [...(byChapter.get(chapter) ?? []), lesson]);
    });
    byChapter.forEach((chapterLessons, chapter) => {
      const expected =
        CHAPTER_LESSON_COUNTS.get(chapter) ?? LESSONS_PER_CHAPTER;
      expect(
        chapterLessons.length,
        `第${chapter}章のレッスン数が不正: ${chapterLessons.map((l) => l.file).join(", ")}`,
      ).toBe(expected);
    });
  });

  it("第2章が CLI 版とデスクトップアプリ版の両方を持つこと", () => {
    const chapter2 = lessons
      .filter((lesson) => Math.floor(lesson.sortOrder / 10) === 2)
      .map((lesson) => lesson.file);

    // 分岐点、CLI 版（Windows / Mac / 初回起動）、GUI 版（導入 / 初回起動）
    expect(chapter2).toContain("02-0-choose-your-environment.mdx");
    expect(chapter2).toContain("02-1-install-windows.mdx");
    expect(chapter2).toContain("02-2-install-mac.mdx");
    expect(chapter2).toContain("02-3-first-launch-checklist.mdx");
    expect(chapter2).toContain("02-4-install-desktop-app.mdx");
    expect(chapter2).toContain("02-5-desktop-first-launch.mdx");
  });

  it("第6章がカスタムスラッシュコマンドの独立レッスンを持たないこと", () => {
    // 公式ドキュメントでカスタムコマンドは Skills へ統合済み。
    // 復活させる場合は、その根拠を確認してからこのテストを外すこと。
    const files = lessons.map((lesson) => lesson.file);

    expect(files).toContain("06-1-skills.mdx");
    expect(files).toContain("06-2-hooks-and-permissions.mdx");
    expect(files).not.toContain("06-1-slash-commands.mdx");
  });

  it("draft のレッスンが残っていないこと", () => {
    lessons.forEach((lesson) => {
      expect(lesson.draft, lesson.file).toBe(false);
    });
  });

  it("各レッスンの sortOrder が対応する章の tier 範囲に収まっていること", () => {
    const tiers = knowledgeTiers["ai-tools/claude-code-curriculum"];
    expect(tiers).toBeDefined();
    expect(tiers).toHaveLength(TOTAL_CHAPTERS);

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
