import { describe, it, expect } from "vitest";
import { builds } from "@/data/builds";

describe("builds データ", () => {
  it("必須フィールドがすべて埋まっていること", () => {
    for (const build of builds) {
      expect(build.title).toBeTruthy();
      expect(build.summary).toBeTruthy();
      expect(build.technologies.length).toBeGreaterThan(0);
    }
  });

  it("タイトルが一意であること", () => {
    const titles = builds.map((build) => build.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("異常系: href を持つ項目は hrefLabel も持つこと（リンク文言が空にならない）", () => {
    for (const build of builds) {
      if (build.href) {
        expect(build.hrefLabel).toBeTruthy();
      }
    }
  });

  it("href は https の外部URLであること", () => {
    for (const build of builds) {
      if (build.href) {
        expect(build.href.startsWith("https://")).toBe(true);
      }
    }
  });
});
