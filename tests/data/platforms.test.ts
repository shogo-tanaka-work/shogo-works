import { describe, expect, it } from "vitest";
import { platformHosts, platformLabels, platformLinks, platformRoutes } from "@/data/platforms";
import { services } from "@/data/services";
import type { SalesPlatform } from "@/types";

describe("販売プラットフォームのリンク", () => {
  it("正常系: すべてのリンクが https で、プラットフォームの正規ドメインを指すこと", () => {
    for (const link of Object.values(platformLinks)) {
      const url = new URL(link.href);
      expect(url.protocol).toBe("https:");
      expect(url.hostname).toBe(platformHosts[link.platform]);
    }
  });

  it("正常系: すべてのプラットフォームに表示名があること", () => {
    const platforms: SalesPlatform[] = ["lancers", "coconala", "menta"];
    for (const platform of platforms) {
      expect(platformLabels[platform]).toBeTruthy();
    }
  });

  it("正常系: お問い合わせで案内する申込先が、サービスの料金プランのどれかと一致すること", () => {
    const planHrefs = new Set(
      services.flatMap((s) => s.pricing.flatMap((p) => p.links ?? [])).map((l) => l.href),
    );
    for (const route of platformRoutes) {
      expect(route.links.length).toBeGreaterThan(0);
      for (const link of route.links) {
        expect(planHrefs.has(link.href)).toBe(true);
      }
    }
  });
});
