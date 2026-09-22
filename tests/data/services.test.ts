import { describe, it, expect } from "vitest";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { platformHosts, platformLinks } from "@/data/platforms";

describe("services データ", () => {
  it("3つのサービスカテゴリが定義されていること", () => {
    expect(services).toHaveLength(3);
  });

  it("すべてのサービスに必須フィールドが存在すること", () => {
    for (const service of services) {
      expect(service.id).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(service.icon).toBeTruthy();
      expect(service.longDescription).toBeTruthy();
      expect(service.targetAudience).toBeTruthy();
      expect(service.painPoints.length).toBeGreaterThan(0);
      expect(service.details.length).toBeGreaterThan(0);
      expect(service.pricing.length).toBeGreaterThan(0);
    }
  });

  it("各サービスのidがユニークであること", () => {
    const ids = services.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("期待されるカテゴリIDが含まれていること", () => {
    const ids = services.map((s) => s.id);
    expect(ids).toContain("personal-support");
    expect(ids).toContain("app-development");
    expect(ids).toContain("lecture");
  });

  it("料金プランにプラン名と価格が設定されていること", () => {
    for (const service of services) {
      for (const plan of service.pricing) {
        expect(plan.name).toBeTruthy();
        expect(plan.price).toBeTruthy();
      }
    }
  });

  it("painPointsが文字列の配列であること", () => {
    for (const service of services) {
      for (const point of service.painPoints) {
        expect(typeof point).toBe("string");
        expect(point.length).toBeGreaterThan(0);
      }
    }
  });

  it("detailsにheadingとbodyが含まれていること", () => {
    for (const service of services) {
      for (const detail of service.details) {
        expect(detail.heading).toBeTruthy();
        expect(detail.body).toBeTruthy();
      }
    }
  });

  it("既存のServicesセクション互換: title, description, iconが使えること", () => {
    for (const service of services) {
      expect(typeof service.title).toBe("string");
      expect(typeof service.description).toBe("string");
      expect(typeof service.icon).toBe("string");
    }
  });

  it("testimonialIdsが指定される場合は実在するレビューを指すこと", () => {
    const testimonialIds = new Set(testimonials.map((t) => t.id));
    for (const service of services) {
      for (const id of service.testimonialIds ?? []) {
        expect(testimonialIds.has(id)).toBe(true);
      }
    }
  });

  it("faqが指定される場合はquestionとanswerを持つこと", () => {
    for (const service of services) {
      for (const item of service.faq ?? []) {
        expect(item.question).toBeTruthy();
        expect(item.answer).toBeTruthy();
      }
    }
  });
});

describe("アプリ開発: ストック型運用保守の反映", () => {
  const dev = services.find((s) => s.id === "app-development");

  it("app-development が存在すること", () => {
    expect(dev).toBeDefined();
  });

  it("月額のストック型（運用保守）プランを持ち、先頭で前面に出すこと", () => {
    const firstPlan = dev?.pricing[0];
    expect(firstPlan).toBeDefined();
    // 「初期圧縮＋月額保守を前面」のため、月額プランを先頭に置く
    expect(/月/.test(firstPlan?.price ?? "")).toBe(true);
  });

  it("AI・ノーコードの保守不能（ブラックボックス化）の悩みを扱うこと", () => {
    const joined = (dev?.painPoints ?? []).join("");
    expect(/保守|ブラックボックス|内製/.test(joined)).toBe(true);
  });

  it("運用保守・改善を details に含むこと", () => {
    const headings = (dev?.details ?? []).map((d) => d.heading).join("");
    expect(/保守|運用|改善/.test(headings)).toBe(true);
  });
});

describe("マンツーマンAIサポート: MENTA への直結", () => {
  const support = services.find((s) => s.id === "personal-support");

  it("正常系: 料金が MENTA 掲載額と一致し、Claude Code プランを先頭に置くこと", () => {
    expect(support?.pricing.map((p) => p.price)).toEqual([
      "12,000円/月",
      "19,800円（買い切り）",
      "30,000円/月",
      "12,000円/月",
      "30,000円/月",
    ]);
  });

  it("正常系: Claude Code プランは MENTA の Claude Code プランページ、業務活用プランは業務活用プランページを指すこと", () => {
    const hrefs = (support?.pricing ?? []).map((p) => p.links);
    expect(hrefs).toEqual([
      [platformLinks.mentaClaudeCode],
      [platformLinks.mentaClaudeCode],
      [platformLinks.mentaClaudeCode],
      [platformLinks.mentaAiSupport],
      [platformLinks.mentaAiSupport],
    ]);
  });

  it("正常系: 主CTAが MENTA の Claude Code プランを指すこと", () => {
    expect(support?.primaryPlatform).toEqual(platformLinks.mentaClaudeCode);
  });

  it("正常系: 概要と最初の提供内容で Claude Code を第一に見せること", () => {
    expect(support?.description).toContain("Claude Code");
    expect(support?.details[0]?.heading).toContain("Claude Code");
  });

  it("正常系: 実績に MENTA の件数と評価が載っていること", () => {
    const joined = (support?.achievements ?? []).join("");
    expect(joined).toContain("MENTA");
    expect(joined).toContain("16件");
    expect(joined).toContain("★5.0");
  });
});

describe("アプリ開発: 小口パッケージの販売サイト導線", () => {
  const dev = services.find((s) => s.id === "app-development");
  const planOf = (prefix: string) =>
    dev?.pricing.find((p) => p.name.startsWith(prefix));

  it("正常系: 業務自動化パッケージがランサーズとココナラへ飛ぶこと", () => {
    expect(planOf("業務自動化")?.links).toEqual([
      platformLinks.lancersAutomation,
      platformLinks.coconalaAutomation,
    ]);
  });

  it("正常系: AIアプリ本番化パッケージがランサーズへ飛ぶこと", () => {
    expect(planOf("AIアプリ本番化")?.links).toEqual([
      platformLinks.lancersAppProduction,
    ]);
  });

  it("正常系: 準委任・大型開発は /contact（リンク未設定）のまま、主CTAも /contact であること", () => {
    expect(dev?.primaryPlatform).toBeUndefined();
    for (const prefix of ["準委任", "スモールスタート", "本格Webアプリ"]) {
      expect(planOf(prefix)).toBeDefined();
      expect(planOf(prefix)?.links).toBeUndefined();
    }
  });
});

describe("アプリ開発: 使用技術の絞り込み", () => {
  const dev = services.find((s) => s.id === "app-development");

  it("正常系: 使用技術を主要4つに絞ること", () => {
    expect(dev?.technologies).toEqual(["Python", "TypeScript", "Cloudflare", "AWS"]);
  });

  it("正常系: 技術の詳細はスキルページへ案内すること", () => {
    expect(dev?.technologiesMore?.href).toBe("/skills");
    expect(dev?.technologiesMore?.note).toBeTruthy();
    expect(dev?.technologiesMore?.label).toBeTruthy();
  });
});

describe("講師・セミナー登壇: 直接契約", () => {
  it("正常系: 販売サイトへのリンクを持たず /contact で受けること", () => {
    const lecture = services.find((s) => s.id === "lecture");
    expect(lecture?.primaryPlatform).toBeUndefined();
    expect(lecture?.pricing.every((p) => p.links === undefined)).toBe(true);
  });
});

describe("料金プランのリンク整合性", () => {
  it("異常系: プラットフォーム種別とURLのドメインが食い違うリンクが無いこと", () => {
    for (const service of services) {
      const links = [
        ...(service.primaryPlatform ? [service.primaryPlatform] : []),
        ...service.pricing.flatMap((p) => p.links ?? []),
      ];
      for (const link of links) {
        expect(new URL(link.href).hostname).toBe(platformHosts[link.platform]);
      }
    }
  });
});
