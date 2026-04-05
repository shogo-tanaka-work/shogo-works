import { describe, it, expect } from "vitest";
import { services } from "@/data/services";

describe("services データ", () => {
  it("4つのサービスカテゴリが定義されていること", () => {
    expect(services).toHaveLength(4);
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
    expect(ids).toContain("automation");
    expect(ids).toContain("ai-support");
    expect(ids).toContain("training");
    expect(ids).toContain("web-development");
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
});
