import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { parse } from "yaml";
import { z } from "zod";

/**
 * 教材化メモ（src/content/ai-news-notes/）はページを持たないため Content Collections から外している。
 * コレクションが担っていた frontmatter の検証と、参照先AIニュース記事の実在確認をここで行う。
 */

const NOTES_DIR = "src/content/ai-news-notes";
const NEWS_DIR = "src/content/ai-news";
const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---/;

const noteSchema = z.object({
  title: z.string().min(1),
  noteFor: z.string().min(1),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
});

interface NoteFile {
  path: string;
  frontmatter: unknown;
}

function readNoteFiles(): NoteFile[] {
  const notes: NoteFile[] = [];

  for (const toolDir of readdirSync(NOTES_DIR, { withFileTypes: true })) {
    if (!toolDir.isDirectory()) {
      continue;
    }
    const toolPath = join(NOTES_DIR, toolDir.name);

    for (const entry of readdirSync(toolPath, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith(".mdx")) {
        continue;
      }
      const path = join(toolPath, entry.name);
      const matched = FRONTMATTER_PATTERN.exec(readFileSync(path, "utf-8"));
      notes.push({ path, frontmatter: matched ? parse(matched[1]) : undefined });
    }
  }

  return notes;
}

const notes = readNoteFiles();

describe("教材化メモの frontmatter", () => {
  it("メモが1件以上あること", () => {
    expect(notes.length).toBeGreaterThan(0);
  });

  it("正常系: すべてのメモが title / noteFor / date を持つこと", () => {
    const invalid = notes.filter(
      (note) => !noteSchema.safeParse(note.frontmatter).success,
    );
    expect(invalid.map((note) => note.path)).toEqual([]);
  });

  it("異常系: noteFor が実在しないAIニュース記事を指していないこと", () => {
    const broken = notes.filter((note) => {
      const parsed = noteSchema.safeParse(note.frontmatter);
      if (!parsed.success) {
        return false; // 上のテストで検出する
      }
      return !existsSync(join(NEWS_DIR, `${parsed.data.noteFor}.md`));
    });
    expect(broken.map((note) => note.path)).toEqual([]);
  });
});
