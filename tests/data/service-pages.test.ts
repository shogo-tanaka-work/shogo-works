import { describe, expect, it } from "vitest";
import { services } from "@/data/services";

describe("サービスLP導線", () => {
  it("各サービスが個別LPへのURLを持つこと", () => {
    for (const service of services) {
      expect(service.href).toBe(`/services/${service.id}`);
    }
  });

  it("3つの個別LP URLが重複しないこと", () => {
    const hrefs = services.map((service) => service.href);

    expect(new Set(hrefs).size).toBe(3);
  });

  it("講師・セミナー登壇のLP URLが定義されていること", () => {
    const lecture = services.find((service) => service.id === "lecture");

    expect(lecture?.href).toBe("/services/lecture");
  });
});
