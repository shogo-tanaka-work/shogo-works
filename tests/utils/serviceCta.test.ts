import { describe, expect, it } from "vitest";
import { planCtas, serviceCta } from "@/utils/serviceCta";
import type { PricingPlan, ServiceItem } from "@/types";

const baseService: ServiceItem = {
  id: "sample",
  href: "/services/sample",
  title: "サンプル",
  description: "説明",
  icon: "code",
  longDescription: "詳細",
  targetAudience: "対象",
  painPoints: ["悩み"],
  details: [{ heading: "見出し", body: "本文" }],
  pricing: [{ name: "プラン", price: "1万円" }],
};

describe("serviceCta", () => {
  it("正常系: primaryPlatform が未設定のとき、/contact を内部リンクとして返すこと", () => {
    expect(serviceCta(baseService)).toEqual({
      href: "/contact",
      label: "サンプルについて問い合わせる",
      external: false,
    });
  });

  it("正常系: primaryPlatform が設定されているとき、そのプラットフォームへの外部リンクを返すこと", () => {
    const service: ServiceItem = {
      ...baseService,
      primaryPlatform: { platform: "menta", href: "https://menta.work/plan/1" },
    };
    expect(serviceCta(service)).toEqual({
      href: "https://menta.work/plan/1",
      label: "MENTAで申し込む",
      external: true,
    });
  });
});

describe("planCtas", () => {
  it("正常系: links が未設定のプランは、/contact を1件返すこと", () => {
    const plan: PricingPlan = { name: "準委任", price: "30万円〜/月" };
    expect(planCtas(plan)).toEqual([
      { href: "/contact", label: "お問い合わせ", external: false },
    ]);
  });

  it("正常系: links が複数あるとき、定義順にプラットフォームの外部リンクを返すこと", () => {
    const plan: PricingPlan = {
      name: "業務自動化",
      price: "1万円〜",
      links: [
        { platform: "lancers", href: "https://www.lancers.jp/menu/detail/1" },
        { platform: "coconala", href: "https://coconala.com/services/1" },
      ],
    };
    expect(planCtas(plan).map((cta) => cta.label)).toEqual([
      "ランサーズで見る",
      "ココナラで見る",
    ]);
    expect(planCtas(plan).every((cta) => cta.external)).toBe(true);
  });

  it("境界値: links が空配列のとき、/contact にフォールバックすること", () => {
    const plan: PricingPlan = { name: "空", price: "1万円", links: [] };
    expect(planCtas(plan)[0]?.href).toBe("/contact");
  });
});
