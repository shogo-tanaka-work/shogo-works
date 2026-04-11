import { describe, it, expect } from "vitest";
import { categories } from "@/data/knowledge";

describe("knowledge カテゴリデータ", () => {
  it("7つのカテゴリが定義されていること", () => {
    expect(categories).toHaveLength(7);
  });

  it("すべてのカテゴリにslug, label, description, iconが存在すること", () => {
    for (const category of categories) {
      expect(category.slug).toBeTruthy();
      expect(category.label).toBeTruthy();
      expect(category.description).toBeTruthy();
      expect(category.icon).toBeTruthy();
    }
  });

  it("slugが重複していないこと", () => {
    const slugs = categories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("slugがkebab-case形式であること", () => {
    const kebabCasePattern = /^[a-z]+(-[a-z]+)*$/;
    for (const category of categories) {
      expect(category.slug).toMatch(kebabCasePattern);
    }
  });

  it("ai-toolsカテゴリが含まれていること", () => {
    const aiTools = categories.find((c) => c.slug === "ai-tools");
    expect(aiTools).toBeDefined();
    expect(aiTools?.label).toBe("AI Tools");
  });
});
