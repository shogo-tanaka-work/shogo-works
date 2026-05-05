import { describe, expect, it } from "vitest";
import {
  getAiNewsByTool,
  getAiNewsSlug,
  getAiNewsStatusMeta,
  getAiNewsToolCount,
  getAiNewsToolLabel,
  getPublishedAiNews,
  type AiNewsEntry,
} from "@/utils/aiNews";

const mockEntries: AiNewsEntry[] = [
  {
    id: "claude-code/claude-code-v2-1-128",
    data: {
      title: "Claude Code v2.1.128",
      tool: "claude-code",
      toolLabel: "Claude Code",
      date: new Date("2026-05-04"),
      sourceUrl: "https://example.com/claude-code",
      summary: "Claude Code update",
      tags: ["claude-code"],
      status: "candidate",
      relatedKnowledge: [],
      draft: false,
    },
  },
  {
    id: "n8n/n8n-2-18-7",
    data: {
      title: "n8n 2.18.7",
      tool: "n8n",
      toolLabel: "n8n",
      date: new Date("2026-05-03"),
      sourceUrl: "https://example.com/n8n",
      summary: "n8n update",
      tags: ["n8n"],
      status: "captured",
      relatedKnowledge: [],
      draft: false,
    },
  },
  {
    id: "gemini/draft-update",
    data: {
      title: "Gemini draft",
      tool: "gemini",
      toolLabel: "Gemini",
      date: new Date("2026-05-05"),
      sourceUrl: "https://example.com/gemini",
      summary: "Gemini draft",
      tags: ["gemini"],
      status: "captured",
      relatedKnowledge: [],
      draft: true,
    },
  },
];

describe("getPublishedAiNews", () => {
  it("draftを除外し、日付降順で返すこと", () => {
    const result = getPublishedAiNews(mockEntries);
    expect(result.map((entry) => entry.id)).toEqual([
      "claude-code/claude-code-v2-1-128",
      "n8n/n8n-2-18-7",
    ]);
  });
});

describe("getAiNewsByTool", () => {
  it("指定ツールの公開ニュースのみ返すこと", () => {
    const result = getAiNewsByTool(mockEntries, "n8n");
    expect(result).toHaveLength(1);
    expect(result[0].data.tool).toBe("n8n");
  });
});

describe("getAiNewsToolCount", () => {
  it("draftを除外してツール別件数を返すこと", () => {
    const result = getAiNewsToolCount(mockEntries);
    expect(result["claude-code"]).toBe(1);
    expect(result.n8n).toBe(1);
    expect(result.gemini).toBe(0);
  });
});

describe("AI News helper", () => {
  it("ツールラベルを返すこと", () => {
    expect(getAiNewsToolLabel("claude-code")).toBe("Claude Code");
  });

  it("ステータスメタ情報を返すこと", () => {
    expect(getAiNewsStatusMeta("candidate").label).toBe("教材化候補");
  });

  it("idからslugを返すこと", () => {
    expect(getAiNewsSlug("n8n/n8n-2-18-7")).toBe("n8n-2-18-7");
  });
});
