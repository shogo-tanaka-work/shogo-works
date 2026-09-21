import { describe, it, expect } from "vitest";
import { approachPoints } from "@/data/approach";

describe("approach データ", () => {
  it("必須フィールドがすべて埋まっていること", () => {
    for (const point of approachPoints) {
      expect(point.title).toBeTruthy();
      expect(point.description).toBeTruthy();
    }
  });

  it("タイトルが一意であること", () => {
    const titles = approachPoints.map((point) => point.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
