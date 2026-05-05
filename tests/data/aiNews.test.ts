import { describe, expect, it } from "vitest";
import { aiNewsStatuses, aiNewsTools } from "@/data/aiNews";

describe("aiNews データ", () => {
  it("ツールslugが重複していないこと", () => {
    const slugs = aiNewsTools.map((tool) => tool.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("ツールにlabelとdescriptionが存在すること", () => {
    for (const tool of aiNewsTools) {
      expect(tool.label).toBeTruthy();
      expect(tool.description).toBeTruthy();
    }
  });

  it("3つのステータスが定義されていること", () => {
    expect(aiNewsStatuses.map((item) => item.status)).toEqual([
      "captured",
      "candidate",
      "promoted",
    ]);
  });
});
