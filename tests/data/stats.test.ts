import { describe, it, expect } from "vitest";
import { stats } from "@/data/stats";

describe("stats データ", () => {
  it("必須フィールドがすべて埋まっていること", () => {
    for (const stat of stats) {
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    }
  });

  it("ラベルが一意であること", () => {
    const labels = stats.map((stat) => stat.label);
    expect(new Set(labels).size).toBe(labels.length);
  });

  /**
   * 実績は年数ではなく中身で示す方針（2026-09-21 決定）。
   * 「5年+」のような経験年数を value に戻したらここで落とす。
   */
  it("value に経験年数の表記が含まれないこと", () => {
    for (const stat of stats) {
      expect(stat.value).not.toMatch(/\d+\s*年/);
    }
  });

  it("MENTA の評価が実数つきで説明されていること", () => {
    const menta = stats.find((stat) => stat.label.includes("MENTA"));

    expect(menta).toBeDefined();
    expect(menta?.description).toMatch(/16件/);
    expect(menta?.description).toMatch(/5件/);
  });
});
