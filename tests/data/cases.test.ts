import { describe, it, expect } from "vitest";
import { caseStudies } from "@/data/cases";
import { services } from "@/data/services";
import { platformLinks } from "@/data/platforms";

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

describe("caseStudies の外部導線", () => {
  it("fullStoryUrl は note の記事URLであること（事例の正本は note）", () => {
    caseStudies
      .filter((c) => c.fullStoryUrl)
      .forEach((c) => {
        const url = new URL(c.fullStoryUrl!);
        expect(url.protocol, c.slug).toBe("https:");
        expect(url.host, c.slug).toBe("note.com");
      });
  });

  it("platformLink は platforms.ts の出品ページを参照していること", () => {
    const known = new Set(Object.values(platformLinks).map((link) => link.href));
    caseStudies
      .filter((c) => c.platformLink)
      .forEach((c) => {
        expect(known.has(c.platformLink!.href), `${c.slug}: 未登録の出品ページ`).toBe(true);
      });
  });

  it("受託の事例（開発・導入支援）が研修・指導の事例より先に並ぶこと", () => {
    const categories = caseStudies.map((c) => c.category);
    const firstTraining = categories.indexOf("研修・指導");
    const lastContract = Math.max(
      categories.lastIndexOf("開発"),
      categories.lastIndexOf("導入支援"),
    );
    expect(firstTraining).toBeGreaterThan(lastContract);
  });

  it("ノーコードAIアプリの載せ替え事例が note とランサーズへの導線を持つこと", () => {
    const replatform = caseStudies.find((c) => c.slug === "nocode-ai-app-replatform");

    expect(replatform?.fullStoryUrl).toBe("https://note.com/shogo_works/n/nb08a3b2a21d5");
    expect(replatform?.platformLink).toEqual(platformLinks.lancersAppProduction);
  });
});
