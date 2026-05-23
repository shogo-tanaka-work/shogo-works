import { describe, it, expect } from "vitest";
import { resolveRoadmap, resolveAllRoadmaps } from "@/utils/roadmap";
import type { RoadmapPath } from "@/data/roadmap";

interface MockEntry {
  id: string;
  body?: string;
  data: {
    title: string;
    description: string;
    category: string;
    subcategory?: string;
    tags: string[];
    sortOrder: number;
    createdAt: Date;
    updatedAt?: Date;
    draft: boolean;
    author: string;
  };
}

const baseData = {
  description: "desc",
  category: "prompt-engineering",
  tags: [],
  sortOrder: 0,
  createdAt: new Date("2026-04-01"),
  draft: false,
  author: "田中省伍",
};

const mockEntries: MockEntry[] = [
  {
    id: "prompt-engineering/few-shot-prompting",
    body: "あ".repeat(1200),
    data: { ...baseData, title: "Few-shot Prompting" },
  },
  {
    id: "prompt-engineering/chain-of-thought",
    body: "Chain of thought ".repeat(100),
    data: {
      ...baseData,
      title: "Chain of Thought",
      updatedAt: new Date("2026-05-10"),
    },
  },
  {
    id: "harness-engineering/agents-md-design",
    body: "harness body",
    data: { ...baseData, title: "AGENTS.md 設計", category: "harness-engineering" },
  },
  {
    id: "ai-tools/claude-code/draft-only",
    body: "",
    data: {
      ...baseData,
      title: "Draft",
      category: "ai-tools",
      subcategory: "claude-code",
      draft: true,
    },
  },
];

describe("resolveRoadmap", () => {
  it("正常系: 定義済みの ref をすべて解決できるとき、定義順で resolved steps を返すこと", () => {
    const path: RoadmapPath = {
      id: "prompt-mastery",
      title: "プロンプト習熟",
      description: "テスト",
      steps: [
        { ref: "prompt-engineering/few-shot-prompting", note: "事例で学ぶ" },
        { ref: "prompt-engineering/chain-of-thought", note: "推論を促す" },
      ],
    };

    const resolved = resolveRoadmap(path, mockEntries);

    expect(resolved.id).toBe("prompt-mastery");
    expect(resolved.steps).toHaveLength(2);
    expect(resolved.steps[0].title).toBe("Few-shot Prompting");
    expect(resolved.steps[0].note).toBe("事例で学ぶ");
    expect(resolved.steps[0].href).toBe(
      "/knowledge/prompt-engineering/few-shot-prompting",
    );
    expect(resolved.steps[0].readingMinutes).toBeGreaterThanOrEqual(1);
    expect(resolved.steps[1].title).toBe("Chain of Thought");
  });

  it("正常系: subcategory 付き ref のとき、3階層 href を組み立てること", () => {
    const path: RoadmapPath = {
      id: "harness",
      title: "Harness",
      description: "x",
      steps: [
        { ref: "harness-engineering/agents-md-design", note: "AGENTS.md" },
      ],
    };
    const resolved = resolveRoadmap(path, mockEntries);
    expect(resolved.steps[0].href).toBe(
      "/knowledge/harness-engineering/agents-md-design",
    );
  });

  it("異常系: 存在しない ref を含むとき、エラーを投げること", () => {
    const path: RoadmapPath = {
      id: "broken",
      title: "x",
      description: "x",
      steps: [{ ref: "prompt-engineering/does-not-exist", note: "n" }],
    };
    expect(() => resolveRoadmap(path, mockEntries)).toThrowError(
      /does-not-exist/,
    );
  });

  it("異常系: draft 記事を ref したとき、エラーを投げること", () => {
    const path: RoadmapPath = {
      id: "draft-ref",
      title: "x",
      description: "x",
      steps: [{ ref: "ai-tools/claude-code/draft-only", note: "n" }],
    };
    expect(() => resolveRoadmap(path, mockEntries)).toThrowError(/draft/i);
  });
});

describe("resolveAllRoadmaps", () => {
  it("正常系: 複数パスをまとめて解決できること", () => {
    const paths: RoadmapPath[] = [
      {
        id: "a",
        title: "A",
        description: "",
        steps: [{ ref: "prompt-engineering/few-shot-prompting", note: "" }],
      },
      {
        id: "b",
        title: "B",
        description: "",
        steps: [{ ref: "harness-engineering/agents-md-design", note: "" }],
      },
    ];
    const resolved = resolveAllRoadmaps(paths, mockEntries);
    expect(resolved).toHaveLength(2);
    expect(resolved[0].id).toBe("a");
    expect(resolved[1].id).toBe("b");
  });

  it("異常系: いずれかのパスに未解決 ref が含まれるとき、エラーを投げること", () => {
    const paths: RoadmapPath[] = [
      {
        id: "ok",
        title: "ok",
        description: "",
        steps: [{ ref: "prompt-engineering/few-shot-prompting", note: "" }],
      },
      {
        id: "ng",
        title: "ng",
        description: "",
        steps: [{ ref: "prompt-engineering/missing", note: "" }],
      },
    ];
    expect(() => resolveAllRoadmaps(paths, mockEntries)).toThrowError(/missing/);
  });
});
