import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { resources } from "@/data/resources";

describe("resources データ整合性", () => {
  it("slug が一意であること", () => {
    const slugs = resources.map((res) => res.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("slug が URL に使える形式（小文字英数とハイフン）であること", () => {
    resources.forEach((res) => {
      expect(res.slug, `不正な slug: ${res.slug}`).toMatch(/^[a-z0-9-]+$/);
    });
  });

  it("公開中（comingSoon: false）の資料は詳細ページ用フィールドが揃っていること", () => {
    resources
      .filter((res) => !res.comingSoon)
      .forEach((res) => {
        expect(res.longDescription, `${res.slug}: longDescription`).toBeTruthy();
        expect(res.highlights?.length, `${res.slug}: highlights`).toBeGreaterThan(0);
        expect(res.targetAudience, `${res.slug}: targetAudience`).toBeTruthy();
        expect(res.fileUrl, `${res.slug}: fileUrl`).toBeTruthy();
      });
  });

  it("fileUrl が /downloads/ 配下を指していること", () => {
    resources
      .filter((res) => res.fileUrl)
      .forEach((res) => {
        expect(res.fileUrl, res.slug).toMatch(/^\/downloads\/.+\.pdf$/);
      });
  });

  it("fileUrl の実ファイルが public/ 配下に存在すること", () => {
    resources
      .filter((res) => res.fileUrl)
      .forEach((res) => {
        const filePath = join(process.cwd(), "public", res.fileUrl!);
        expect(existsSync(filePath), `ファイルが存在しない: ${res.fileUrl}`).toBe(
          true,
        );
      });
  });
});
