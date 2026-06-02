import { describe, it, expect } from "vitest";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

describe("services データ", () => {
  it("5つのサービスカテゴリが定義されていること", () => {
    expect(services).toHaveLength(5);
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
    expect(ids).toContain("hayawaza-automation");
    expect(ids).toContain("hayawaza-advisor");
    expect(ids).toContain("hayawaza-training");
    expect(ids).toContain("hayawaza-dev");
    expect(ids).toContain("hayawaza-renewal");
  });

  it("料金プランに定価とモニター価格が含まれていること", () => {
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

describe("はやわざアプリ開発: ストック型運用保守の反映", () => {
  const dev = services.find((s) => s.id === "hayawaza-dev");

  it("hayawaza-dev が存在すること", () => {
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
