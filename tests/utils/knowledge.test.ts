import { describe, it, expect } from "vitest";
import {
  getPublishedArticles,
  getArticlesByCategory,
  getCategoryArticleCount,
  getRelatedArticles,
} from "@/utils/knowledge";

interface MockEntry {
  id: string;
  data: {
    title: string;
    description: string;
    category: string;
    tags: string[];
    publishedAt: Date;
    draft: boolean;
    author: string;
  };
}

const mockEntries: MockEntry[] = [
  {
    id: "ai-tools/claude-code",
    data: {
      title: "Claude Code入門",
      description: "Claude Codeの基本的な使い方",
      category: "ai-tools",
      tags: ["claude", "ai", "cli"],
      publishedAt: new Date("2026-04-01"),
      draft: false,
      author: "田中省伍",
    },
  },
  {
    id: "ai-tools/cursor-tips",
    data: {
      title: "Cursor活用テクニック",
      description: "Cursorを使った効率的な開発",
      category: "ai-tools",
      tags: ["cursor", "ai", "ide"],
      publishedAt: new Date("2026-04-03"),
      draft: false,
      author: "田中省伍",
    },
  },
  {
    id: "web-development/astro-intro",
    data: {
      title: "Astro入門",
      description: "Astroの基本を学ぶ",
      category: "web-development",
      tags: ["astro", "frontend"],
      publishedAt: new Date("2026-04-02"),
      draft: false,
      author: "田中省伍",
    },
  },
  {
    id: "ai-tools/draft-article",
    data: {
      title: "下書き記事",
      description: "まだ公開しない記事",
      category: "ai-tools",
      tags: ["draft"],
      publishedAt: new Date("2026-04-04"),
      draft: true,
      author: "田中省伍",
    },
  },
];

describe("getPublishedArticles", () => {
  it("draft記事を除外すること", () => {
    const result = getPublishedArticles(mockEntries);
    expect(result.every((e) => !e.data.draft)).toBe(true);
    expect(result).toHaveLength(3);
  });

  it("publishedAtの降順でソートされること", () => {
    const result = getPublishedArticles(mockEntries);
    for (let i = 1; i < result.length; i++) {
      expect(result[i - 1].data.publishedAt.getTime()).toBeGreaterThanOrEqual(
        result[i].data.publishedAt.getTime(),
      );
    }
  });

  it("空配列を渡した場合、空配列を返すこと", () => {
    expect(getPublishedArticles([])).toEqual([]);
  });
});

describe("getArticlesByCategory", () => {
  it("指定カテゴリの公開記事のみ返すこと", () => {
    const result = getArticlesByCategory(mockEntries, "ai-tools");
    expect(result).toHaveLength(2);
    expect(result.every((e) => e.data.category === "ai-tools")).toBe(true);
  });

  it("draft記事を除外すること", () => {
    const result = getArticlesByCategory(mockEntries, "ai-tools");
    expect(result.every((e) => !e.data.draft)).toBe(true);
  });

  it("該当カテゴリの記事がない場合、空配列を返すこと", () => {
    const result = getArticlesByCategory(mockEntries, "career");
    expect(result).toEqual([]);
  });
});

describe("getCategoryArticleCount", () => {
  it("カテゴリ別の公開記事数を返すこと", () => {
    const counts = getCategoryArticleCount(mockEntries);
    expect(counts["ai-tools"]).toBe(2);
    expect(counts["web-development"]).toBe(1);
  });

  it("記事がないカテゴリは0を返すこと", () => {
    const counts = getCategoryArticleCount(mockEntries);
    expect(counts["devops"]).toBe(0);
    expect(counts["career"]).toBe(0);
  });
});

describe("getRelatedArticles", () => {
  it("自身を除外すること", () => {
    const result = getRelatedArticles(
      mockEntries,
      "ai-tools/claude-code",
      "ai-tools",
      ["claude", "ai"],
    );
    expect(result.find((e) => e.id === "ai-tools/claude-code")).toBeUndefined();
  });

  it("同カテゴリ・同タグの記事を優先すること", () => {
    const result = getRelatedArticles(
      mockEntries,
      "ai-tools/claude-code",
      "ai-tools",
      ["ai"],
    );
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].data.category).toBe("ai-tools");
  });

  it("limitで件数を制限できること", () => {
    const result = getRelatedArticles(
      mockEntries,
      "ai-tools/claude-code",
      "ai-tools",
      ["ai"],
      1,
    );
    expect(result).toHaveLength(1);
  });

  it("draft記事を除外すること", () => {
    const result = getRelatedArticles(
      mockEntries,
      "ai-tools/claude-code",
      "ai-tools",
      ["draft"],
    );
    expect(result.every((e) => !e.data.draft)).toBe(true);
  });
});
