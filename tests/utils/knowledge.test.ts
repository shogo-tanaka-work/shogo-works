import { describe, it, expect } from "vitest";
import {
  getPublishedArticles,
  getArticlesByCategory,
  getAdjacentArticles,
  getAllTags,
  getArticlesByTag,
  getCategoryArticleCount,
  getRelatedArticles,
  mergeArticles,
  mergeArticlesByCategory,
  getUnifiedCategoryCount,
  toUnifiedFromExternal,
  toUnifiedFromInternal,
} from "@/utils/knowledge";
import type { ExternalArticle } from "@/types";

interface MockEntry {
  id: string;
  data: {
    title: string;
    description: string;
    category: string;
    tags: string[];
    sortOrder: number;
    createdAt: Date;
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
      sortOrder: 0,
      createdAt: new Date("2026-04-01"),
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
      sortOrder: 1,
      createdAt: new Date("2026-04-03"),
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
      sortOrder: 0,
      createdAt: new Date("2026-04-02"),
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
      sortOrder: 2,
      createdAt: new Date("2026-04-04"),
      draft: true,
      author: "田中省伍",
    },
  },
];

const mockExternalArticles: ExternalArticle[] = [
  {
    id: "zenn-claude-code",
    title: "Claude Codeの実践ガイド",
    description: "Zennに公開したClaude Code解説",
    category: "ai-tools",
    tags: ["claude", "zenn"],
    sortOrder: 2,
    createdAt: new Date("2026-04-05"),
    platform: "zenn",
    url: "https://zenn.dev/user/articles/claude-code",
  },
  {
    id: "qiita-astro-tips",
    title: "Astro開発のTips",
    description: "Qiitaに公開したAstro記事",
    category: "web-development",
    tags: ["astro", "qiita"],
    sortOrder: 1,
    createdAt: new Date("2026-04-04"),
    platform: "qiita",
    url: "https://qiita.com/user/items/astro-tips",
  },
];

// --- MDX記事専用ユーティリティのテスト ---

describe("getPublishedArticles", () => {
  it("draft記事を除外すること", () => {
    const result = getPublishedArticles(mockEntries);
    expect(result.every((e) => !e.data.draft)).toBe(true);
    expect(result).toHaveLength(3);
  });

  it("sortOrderの昇順でソートされること", () => {
    const result = getPublishedArticles(mockEntries);
    for (let i = 1; i < result.length; i++) {
      expect(result[i - 1].data.sortOrder).toBeLessThanOrEqual(
        result[i].data.sortOrder,
      );
    }
  });

  it("同じsortOrderの場合、createdAtの降順でソートされること", () => {
    const entriesWithSameOrder: MockEntry[] = [
      {
        id: "a",
        data: {
          title: "A",
          description: "",
          category: "ai-tools",
          tags: [],
          sortOrder: 0,
          createdAt: new Date("2026-04-01"),
          draft: false,
          author: "田中省伍",
        },
      },
      {
        id: "b",
        data: {
          title: "B",
          description: "",
          category: "ai-tools",
          tags: [],
          sortOrder: 0,
          createdAt: new Date("2026-04-03"),
          draft: false,
          author: "田中省伍",
        },
      },
    ];
    const result = getPublishedArticles(entriesWithSameOrder);
    expect(result[0].id).toBe("b");
    expect(result[1].id).toBe("a");
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

describe("getAdjacentArticles", () => {
  it("中間の記事の前後を返すこと", () => {
    const result = getAdjacentArticles(
      mockEntries,
      "ai-tools/cursor-tips",
      "ai-tools",
    );
    expect(result.previous?.id).toBe("ai-tools/claude-code");
    expect(result.next).toBeNull();
  });

  it("先頭記事はpreviousがnullになること", () => {
    const result = getAdjacentArticles(
      mockEntries,
      "ai-tools/claude-code",
      "ai-tools",
    );
    expect(result.previous).toBeNull();
    expect(result.next?.id).toBe("ai-tools/cursor-tips");
  });

  it("該当記事がない場合、両方nullになること", () => {
    const result = getAdjacentArticles(
      mockEntries,
      "non-existent",
      "ai-tools",
    );
    expect(result.previous).toBeNull();
    expect(result.next).toBeNull();
  });

  it("draft記事は対象から除外されること", () => {
    const result = getAdjacentArticles(
      mockEntries,
      "ai-tools/cursor-tips",
      "ai-tools",
    );
    // draft-articleは含まれないのでnextはnull
    expect(result.next).toBeNull();
  });
});

describe("getAllTags", () => {
  it("公開記事に含まれる全タグと出現回数を返すこと", () => {
    const result = getAllTags(mockEntries);
    const tags = result.map((t) => t.tag);
    // ai タグは claude-code(1) + cursor-tips(1) = 2件
    const aiTag = result.find((t) => t.tag === "ai");
    expect(aiTag?.count).toBe(2);
    // draft 記事のタグは含まれない
    expect(tags).not.toContain("draft");
  });

  it("件数降順、同件数ならタグ名昇順でソートされること", () => {
    const result = getAllTags(mockEntries);
    for (let i = 1; i < result.length; i++) {
      const prev = result[i - 1];
      const curr = result[i];
      if (prev.count === curr.count) {
        expect(prev.tag.localeCompare(curr.tag)).toBeLessThanOrEqual(0);
      } else {
        expect(prev.count).toBeGreaterThan(curr.count);
      }
    }
  });

  it("空配列を渡した場合、空配列を返すこと", () => {
    expect(getAllTags([])).toEqual([]);
  });
});

describe("getArticlesByTag", () => {
  it("指定タグを含む公開記事のみ返すこと", () => {
    const result = getArticlesByTag(mockEntries, "ai");
    expect(result).toHaveLength(2);
    expect(result.every((e) => e.data.tags.includes("ai"))).toBe(true);
  });

  it("draft記事を除外すること", () => {
    const result = getArticlesByTag(mockEntries, "draft");
    expect(result).toHaveLength(0);
  });

  it("該当タグの記事がない場合、空配列を返すこと", () => {
    const result = getArticlesByTag(mockEntries, "non-existent-tag");
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

// --- 統合記事（ハイブリッド）のテスト ---

describe("toUnifiedFromExternal", () => {
  it("外部記事をUnifiedArticleに変換すること", () => {
    const result = toUnifiedFromExternal(mockExternalArticles[0]);
    expect(result.source).toBe("external");
    expect(result.isExternal).toBe(true);
    expect(result.platform).toBe("zenn");
    expect(result.href).toBe("https://zenn.dev/user/articles/claude-code");
  });
});

describe("toUnifiedFromInternal", () => {
  it("MDX記事をUnifiedArticleに変換すること", () => {
    const result = toUnifiedFromInternal(mockEntries[0]);
    expect(result.source).toBe("internal");
    expect(result.isExternal).toBe(false);
    expect(result.platform).toBeUndefined();
    expect(result.href).toBe("/knowledge/ai-tools/claude-code");
  });
});

describe("mergeArticles", () => {
  it("外部記事とMDX記事を統合してsortOrder昇順でソートすること", () => {
    const result = mergeArticles(mockExternalArticles, mockEntries);
    // 外部2 + 内部公開3 = 5件
    expect(result).toHaveLength(5);
    // sortOrder昇順ソート確認
    for (let i = 1; i < result.length; i++) {
      expect(result[i - 1].sortOrder).toBeLessThanOrEqual(
        result[i].sortOrder,
      );
    }
  });

  it("MDXのdraft記事を除外すること", () => {
    const result = mergeArticles(mockExternalArticles, mockEntries);
    expect(result.find((a) => a.title === "下書き記事")).toBeUndefined();
  });

  it("外部記事のみの場合も動作すること", () => {
    const result = mergeArticles(mockExternalArticles, []);
    expect(result).toHaveLength(2);
  });

  it("MDX記事のみの場合も動作すること", () => {
    const result = mergeArticles([], mockEntries);
    expect(result).toHaveLength(3);
  });
});

describe("mergeArticlesByCategory", () => {
  it("指定カテゴリの統合記事のみ返すこと", () => {
    const result = mergeArticlesByCategory(
      mockExternalArticles,
      mockEntries,
      "ai-tools",
    );
    // 外部1(zenn) + 内部2(claude-code, cursor-tips) = 3件
    expect(result).toHaveLength(3);
    expect(result.every((a) => a.category === "ai-tools")).toBe(true);
  });
});

describe("getUnifiedCategoryCount", () => {
  it("外部+内部を含むカテゴリ別件数を返すこと", () => {
    const counts = getUnifiedCategoryCount(mockExternalArticles, mockEntries);
    expect(counts["ai-tools"]).toBe(3); // 外部1 + 内部2
    expect(counts["web-development"]).toBe(2); // 外部1 + 内部1
    expect(counts["devops"]).toBe(0);
    expect(counts["career"]).toBe(0);
  });
});
