import { describe, it, expect } from "vitest";
import { problemCategories } from "@/data/problems";
import { services } from "@/data/services";

describe("problemCategories（解決できるお悩み）", () => {
  const serviceHrefs = new Set(services.map((s) => s.href));

  it("正常系: カテゴリが1件以上定義されていること", () => {
    expect(problemCategories.length).toBeGreaterThan(0);
  });

  it("正常系: カテゴリの key が一意であること", () => {
    const keys = problemCategories.map((c) => c.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("正常系: 各カテゴリが label と1件以上の悩みを持つこと", () => {
    for (const category of problemCategories) {
      expect(category.label.length).toBeGreaterThan(0);
      expect(category.problems.length).toBeGreaterThan(0);
    }
  });

  it("正常系: 各悩みの text が空でないこと", () => {
    for (const category of problemCategories) {
      for (const problem of category.problems) {
        expect(problem.text.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("異常系: 存在しないサービスへ紐付く悩みがないこと（serviceHref整合）", () => {
    for (const category of problemCategories) {
      for (const problem of category.problems) {
        expect(serviceHrefs.has(problem.serviceHref)).toBe(true);
      }
    }
  });
});
