import { describe, expect, it } from "vitest";
import {
  getAiNewsArchive,
  getAiNewsByMonth,
  getAiNewsByTool,
  getAiNewsMonthKey,
  getAiNewsMonthLabel,
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

// アーカイブ用の月キーは JST 基準で切る。UTC のままだと日本時間の月初・月末が
// 前後の月に吸われるため、境界のテストを明示的に置く。
const archiveEntries: AiNewsEntry[] = [
  ...mockEntries,
  {
    id: "codex/codex-boundary-jst-month-end",
    data: {
      title: "Codex 月末深夜リリース",
      tool: "codex",
      toolLabel: "OpenAI Codex",
      // JST 2026-07-31 23:00 = UTC 2026-07-31 14:00
      date: new Date("2026-07-31T23:00:00+09:00"),
      sourceUrl: "https://example.com/codex-month-end",
      summary: "Codex update",
      tags: [],
      status: "candidate",
      relatedKnowledge: [],
      draft: false,
    },
  },
  {
    id: "cursor/cursor-boundary-jst-month-start",
    data: {
      title: "Cursor 月初未明リリース",
      tool: "cursor",
      toolLabel: "Cursor",
      // JST 2026-08-01 01:00 = UTC 2026-07-31 16:00
      date: new Date("2026-08-01T01:00:00+09:00"),
      sourceUrl: "https://example.com/cursor-month-start",
      summary: "Cursor update",
      tags: [],
      status: "candidate",
      relatedKnowledge: [],
      draft: false,
    },
  },
];

describe("getAiNewsMonthKey", () => {
  it("JST基準で YYYY-MM を返すこと", () => {
    expect(getAiNewsMonthKey(new Date("2026-08-03T12:00:00+09:00"))).toBe(
      "2026-08",
    );
  });

  it("JSTの月末深夜がその月に含まれること（UTCで翌月にずれない）", () => {
    expect(getAiNewsMonthKey(new Date("2026-07-31T23:00:00+09:00"))).toBe(
      "2026-07",
    );
  });

  it("JSTの月初未明がその月に含まれること（UTCで前月にずれない）", () => {
    expect(getAiNewsMonthKey(new Date("2026-08-01T01:00:00+09:00"))).toBe(
      "2026-08",
    );
  });
});

describe("getAiNewsMonthLabel", () => {
  it("月キーを日本語表記に変換すること", () => {
    expect(getAiNewsMonthLabel("2026-08")).toBe("2026年8月");
  });
});

describe("getAiNewsArchive", () => {
  it("draftを除外して月別件数を新しい順に返すこと", () => {
    const result = getAiNewsArchive(archiveEntries);
    expect(result).toEqual([
      { key: "2026-08", label: "2026年8月", count: 1 },
      { key: "2026-07", label: "2026年7月", count: 1 },
      { key: "2026-05", label: "2026年5月", count: 2 },
    ]);
  });

  it("記事がない場合は空配列を返すこと", () => {
    expect(getAiNewsArchive([])).toEqual([]);
  });
});

describe("getAiNewsByMonth", () => {
  it("該当月の公開ニュースのみを日付降順で返すこと", () => {
    const result = getAiNewsByMonth(archiveEntries, "2026-05");
    expect(result.map((entry) => entry.id)).toEqual([
      "claude-code/claude-code-v2-1-128",
      "n8n/n8n-2-18-7",
    ]);
  });

  it("該当月がない場合は空配列を返すこと", () => {
    expect(getAiNewsByMonth(archiveEntries, "2026-01")).toEqual([]);
  });
});
