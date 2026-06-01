import { describe, it, expect } from "vitest";
import { differences } from "@/data/differences";

describe("differences（他社との違い）", () => {
  it("正常系: 比較項目が1件以上定義されていること", () => {
    expect(differences.length).toBeGreaterThan(0);
  });

  it("正常系: 各項目が aspect / others / mine をすべて持つこと", () => {
    for (const item of differences) {
      expect(item.aspect.trim().length).toBeGreaterThan(0);
      expect(item.others.trim().length).toBeGreaterThan(0);
      expect(item.mine.trim().length).toBeGreaterThan(0);
    }
  });

  it("正常系: aspect（観点）が重複しないこと", () => {
    const aspects = differences.map((d) => d.aspect);
    expect(new Set(aspects).size).toBe(aspects.length);
  });
});
