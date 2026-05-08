import { describe, it, expect } from "vitest";
import { categories, subcategories } from "@/data/knowledge";

describe("knowledge カテゴリデータ", () => {
  it("8つのカテゴリが定義されていること", () => {
    expect(categories).toHaveLength(8);
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

  it("ai-governanceカテゴリが含まれていること", () => {
    const aiGovernance = categories.find((c) => c.slug === "ai-governance");
    expect(aiGovernance).toBeDefined();
    expect(aiGovernance?.label).toBe("AI Governance");
  });
});

describe("knowledge サブカテゴリデータ", () => {
  it("ai-tools / web-development の 2 カテゴリにサブカテゴリが定義されていること", () => {
    expect(Object.keys(subcategories).sort()).toEqual([
      "ai-tools",
      "web-development",
    ]);
  });

  it("web-development サブカテゴリに supabase / vercel / gas が含まれていること", () => {
    const webDev = subcategories["web-development"];
    expect(webDev).toBeDefined();
    const slugs = webDev?.map((s) => s.slug).sort();
    expect(slugs).toEqual(["gas", "supabase", "vercel"]);
  });

  it("すべてのサブカテゴリに slug / label / description が存在すること", () => {
    for (const list of Object.values(subcategories)) {
      for (const sub of list ?? []) {
        expect(sub.slug).toBeTruthy();
        expect(sub.label).toBeTruthy();
        expect(sub.description).toBeTruthy();
      }
    }
  });

  it("サブカテゴリの slug が kebab-case 形式であること", () => {
    const kebabCasePattern = /^[a-z]+(-[a-z]+)*$/;
    for (const list of Object.values(subcategories)) {
      for (const sub of list ?? []) {
        expect(sub.slug).toMatch(kebabCasePattern);
      }
    }
  });
});
