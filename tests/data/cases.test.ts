import { describe, it, expect } from "vitest";
import { caseStudies } from "@/data/cases";
import { services } from "@/data/services";

describe("caseStudies データ整合性", () => {
  it("slug が一意であること", () => {
    const slugs = caseStudies.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("slug が URL に使える形式（小文字英数とハイフン）であること", () => {
    caseStudies.forEach((c) => {
      expect(c.slug, `不正な slug: ${c.slug}`).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it("各事例に課題・支援内容・成果が揃っていること", () => {
    caseStudies.forEach((c) => {
      expect(c.challenge, `${c.slug}: challenge`).toBeTruthy();
      expect(c.support.length, `${c.slug}: support`).toBeGreaterThan(0);
      expect(c.outcomes.length, `${c.slug}: outcomes`).toBeGreaterThan(0);
    });
  });

  it("クライアント表記に実名らしき固有名詞を含まないこと（属性表記の方針）", () => {
    // 「株式会社」「(株)」等の法人名表記が混入していないかを機械的に確認する
    caseStudies.forEach((c) => {
      expect(c.clientType, c.slug).not.toMatch(/株式会社|\(株\)|（株）|Inc\.|Corp\./);
    });
  });

  it("serviceHref が実在するサービスLPを指していること", () => {
    const serviceHrefs = new Set(services.map((s) => s.href));
    caseStudies
      .filter((c) => c.serviceHref)
      .forEach((c) => {
        expect(
          serviceHrefs.has(c.serviceHref!),
          `存在しないサービスLP: ${c.serviceHref}`,
        ).toBe(true);
      });
  });
});
