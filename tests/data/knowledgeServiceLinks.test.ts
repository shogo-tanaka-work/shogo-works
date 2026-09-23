import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { knowledgeServiceLinks } from "@/data/knowledgeServiceLinks";
import { services } from "@/data/services";

const KNOWLEDGE_DIR = resolve(__dirname, "../../src/content/knowledge");

describe("knowledgeServiceLinks データ整合性", () => {
  const entries = Object.entries(knowledgeServiceLinks);

  it("対象記事が1本以上あること", () => {
    expect(entries.length).toBeGreaterThan(0);
  });

  it("キーの記事ID が src/content/knowledge に実在すること", () => {
    entries.forEach(([entryId]) => {
      expect(
        existsSync(resolve(KNOWLEDGE_DIR, `${entryId}.mdx`)),
        `記事が存在しない: ${entryId}`,
      ).toBe(true);
    });
  });

  it("serviceId が services.ts に実在すること", () => {
    const serviceIds = new Set(services.map((s) => s.id));
    entries.forEach(([entryId, links]) => {
      links.forEach((link) => {
        expect(
          serviceIds.has(link.serviceId),
          `${entryId}: 未知の serviceId ${link.serviceId}`,
        ).toBe(true);
      });
    });
  });

  it("各記事に1件以上の導線があり、同じサービスを重複させないこと", () => {
    entries.forEach(([entryId, links]) => {
      expect(links.length, `${entryId}: 導線なし`).toBeGreaterThan(0);
      const ids = links.map((l) => l.serviceId);
      expect(new Set(ids).size, `${entryId}: serviceId 重複`).toBe(ids.length);
    });
  });

  it("各導線に記事との関係を示す一文があること", () => {
    entries.forEach(([entryId, links]) => {
      links.forEach((link) => {
        expect(link.reason.trim(), `${entryId}: reason が空`).not.toBe("");
      });
    });
  });
});
