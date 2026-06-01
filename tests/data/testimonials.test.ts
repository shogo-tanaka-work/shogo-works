import { describe, it, expect } from "vitest";
import { testimonials } from "@/data/testimonials";
import { services } from "@/data/services";

describe("testimonials データ", () => {
  it("正常系: 属性別に3件以上のレビューが定義されていること", () => {
    expect(testimonials.length).toBeGreaterThanOrEqual(3);
  });

  it("正常系: すべてのレビューに必須フィールドが存在すること", () => {
    for (const t of testimonials) {
      expect(t.id).toBeTruthy();
      expect(t.quote).toBeTruthy();
      expect(t.authorAttribute).toBeTruthy();
      expect(t.audience).toBeTruthy();
    }
  });

  it("正常系: ratingが1〜5の範囲に収まっていること", () => {
    for (const t of testimonials) {
      expect(t.rating).toBeGreaterThanOrEqual(1);
      expect(t.rating).toBeLessThanOrEqual(5);
    }
  });

  it("正常系: idがユニークであること", () => {
    const ids = testimonials.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("正常系: audienceが既定の3区分のいずれかであること", () => {
    const allowed = ["beginner", "individual", "developer"];
    for (const t of testimonials) {
      expect(allowed).toContain(t.audience);
    }
  });

  it("正常系: serviceIdが指定される場合は実在するサービスを指すこと", () => {
    const serviceIds = new Set(services.map((s) => s.id));
    for (const t of testimonials) {
      if (t.serviceId) {
        expect(serviceIds.has(t.serviceId)).toBe(true);
      }
    }
  });

  it("正常系: 初心者・個人事業主・開発者の3属性が網羅されていること", () => {
    const audiences = new Set(testimonials.map((t) => t.audience));
    expect(audiences.has("beginner")).toBe(true);
    expect(audiences.has("individual")).toBe(true);
    expect(audiences.has("developer")).toBe(true);
  });
});
