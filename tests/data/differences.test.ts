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

  it("正常系: 比較相手が業態で明示されていること", () => {
    const allowed = ["システム開発会社", "研修会社"];
    for (const item of differences) {
      expect(allowed).toContain(item.counterpart);
    }
  });

  it("正常系: 開発を主軸とするため、システム開発会社との比較が過半を占めること", () => {
    const development = differences.filter(
      (d) => d.counterpart === "システム開発会社",
    );
    expect(development.length * 2).toBeGreaterThan(differences.length);
  });

  it("正常系: 研修会社との比較も1件以上あること", () => {
    const training = differences.filter((d) => d.counterpart === "研修会社");
    expect(training.length).toBeGreaterThan(0);
  });
});
