import { describe, expect, it } from "vitest";
import { services } from "@/data/services";

describe("サービスLP導線", () => {
  it("各サービスが個別LPへのURLを持つこと", () => {
    for (const service of services) {
      expect(service.href).toBe(`/services/${service.id}`);
    }
  });

  it("5つの個別LP URLが重複しないこと", () => {
    const hrefs = services.map((service) => service.href);

    expect(new Set(hrefs).size).toBe(5);
  });

  it("はやわざシステム刷新のLP URLが定義されていること", () => {
    const modernization = services.find(
      (service) => service.id === "hayawaza-renewal",
    );

    expect(modernization?.href).toBe("/services/hayawaza-renewal");
  });
});
