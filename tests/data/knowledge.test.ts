import { describe, it, expect } from "vitest";
import {
  categories,
  contentTypes,
  difficulties,
  getContentTypeMeta,
  getDifficultyMeta,
  subcategories,
} from "@/data/knowledge";

describe("knowledge カテゴリデータ", () => {
  it("11個のカテゴリが定義されていること", () => {
    expect(categories).toHaveLength(11);
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

  it("loop-engineeringカテゴリが含まれていること", () => {
    const loopEngineering = categories.find(
      (category) => category.slug === "loop-engineering",
    );
    expect(loopEngineering).toBeDefined();
    expect(loopEngineering?.label).toBe("Loop Engineering");
  });

  it("securityカテゴリが含まれていること", () => {
    const security = categories.find(
      (category) => category.slug === "security",
    );
    expect(security).toBeDefined();
    expect(security?.label).toBe("Security");
  });

  it("graph-engineeringカテゴリが含まれていること", () => {
    const graphEngineering = categories.find(
      (category) => category.slug === "graph-engineering",
    );
    expect(graphEngineering).toBeDefined();
    expect(graphEngineering?.label).toBe("Graph Engineering");
  });
});

describe("knowledge サブカテゴリデータ", () => {
  it("サブカテゴリを持つカテゴリが定義されていること", () => {
    expect(Object.keys(subcategories).sort()).toEqual([
      "ai-governance",
      "ai-tools",
      "security",
      "web-development",
    ]);
  });

  it("web-development サブカテゴリに選定ガイド・入門コース・リファレンスが揃っていること", () => {
    const webDev = subcategories["web-development"];
    expect(webDev).toBeDefined();
    const slugs = webDev?.map((s) => s.slug).sort();
    expect(slugs).toEqual([
      "cloudflare",
      "cloudflare-curriculum",
      "gas",
      "platform-choice",
      "supabase",
      "supabase-curriculum",
      "vercel",
      "vercel-curriculum",
    ]);
  });

  it("入門コースがリファレンスより前に並んでいること", () => {
    const slugs = subcategories["web-development"]?.map((s) => s.slug) ?? [];
    for (const service of ["cloudflare", "vercel", "supabase"]) {
      expect(slugs.indexOf(`${service}-curriculum`)).toBeLessThan(
        slugs.indexOf(service),
      );
    }
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

describe("getDifficultyMeta", () => {
  it("正常系: 難易度に対応する表示メタを返すこと", () => {
    const meta = getDifficultyMeta("beginner");

    expect(meta?.label).toBe("入門");
    expect(meta?.stars).toBe(1);
    expect(meta?.note).toContain("前提知識ゼロ");
  });

  it("正常系: 難易度が上がるほど星の数が増えること", () => {
    const stars = difficulties.map((d) => d.stars);

    expect(stars).toEqual([...stars].sort((a, b) => a - b));
    expect(new Set(stars).size).toBe(stars.length);
  });

  it("正常系: 星の数が5段階に収まること", () => {
    for (const difficulty of difficulties) {
      expect(difficulty.stars).toBeGreaterThanOrEqual(1);
      expect(difficulty.stars).toBeLessThanOrEqual(5);
    }
  });

  it("異常系: 未設定のとき null を返すこと", () => {
    expect(getDifficultyMeta(undefined)).toBeNull();
  });
});

describe("getContentTypeMeta", () => {
  it("正常系: 記事種別に対応する表示メタを返すこと", () => {
    expect(getContentTypeMeta("course")?.label).toBe("学習コース");
    expect(getContentTypeMeta("docs-digest")?.label).toBe("ドキュメント要約");
  });

  it("正常系: すべての種別に label と description があること", () => {
    for (const contentType of contentTypes) {
      expect(contentType.label).not.toBe("");
      expect(contentType.description).not.toBe("");
    }
  });

  it("異常系: 未設定のとき null を返すこと", () => {
    expect(getContentTypeMeta(undefined)).toBeNull();
  });
});
