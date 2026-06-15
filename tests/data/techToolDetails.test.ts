import { describe, it, expect } from "vitest";
import { techToolDetails } from "@/data/techToolDetails";
import { techStack } from "@/data/techStack";
import { services } from "@/data/services";

describe("techToolDetails データ整合性", () => {
  it("slug が一意であること", () => {
    const slugs = techToolDetails.map((tool) => tool.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("slug が URL に使える形式（小文字英数とハイフン）であること", () => {
    techToolDetails.forEach((tool) => {
      expect(tool.slug, `不正な slug: ${tool.slug}`).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it("各ツールに概要・強み・活用例が揃っていること", () => {
    techToolDetails.forEach((tool) => {
      expect(tool.overview, `${tool.slug}: overview`).toBeTruthy();
      expect(tool.strengths.length, `${tool.slug}: strengths`).toBeGreaterThan(0);
      expect(tool.useCases.length, `${tool.slug}: useCases`).toBeGreaterThan(0);
    });
  });

  it("techStack の detailSlug がすべて techToolDetails に解決できること", () => {
    const detailSlugs = new Set(techToolDetails.map((tool) => tool.slug));
    techStack
      .flatMap((category) => category.items)
      .filter((item) => item.detailSlug)
      .forEach((item) => {
        expect(
          detailSlugs.has(item.detailSlug!),
          `techStack の detailSlug が未定義: ${item.detailSlug}`,
        ).toBe(true);
      });
  });

  it("relatedServiceHref が実在するサービスLPを指していること", () => {
    const serviceHrefs = new Set(services.map((s) => s.href));
    techToolDetails
      .filter((tool) => tool.relatedServiceHref)
      .forEach((tool) => {
        expect(
          serviceHrefs.has(tool.relatedServiceHref!),
          `存在しないサービスLP: ${tool.relatedServiceHref}`,
        ).toBe(true);
      });
  });

  it("relatedKnowledgeHref が /knowledge/ 配下を指していること", () => {
    techToolDetails
      .filter((tool) => tool.relatedKnowledgeHref)
      .forEach((tool) => {
        expect(tool.relatedKnowledgeHref, tool.slug).toMatch(/^\/knowledge\//);
      });
  });
});
