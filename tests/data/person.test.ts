import { describe, it, expect } from "vitest";
import { personProfile, schemaIds } from "@/data/person";
import { siteConfig } from "@/data/site";

describe("person データ", () => {
  it("sameAs がすべて https の絶対URLであること", () => {
    for (const url of personProfile.sameAs) {
      expect(url.startsWith("https://")).toBe(true);
    }
  });

  it("sameAs に重複したURLが無いこと", () => {
    const urls = [...personProfile.sameAs];
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("紐づけたい媒体のドメインがすべて含まれること", () => {
    const hosts = personProfile.sameAs.map((url) => new URL(url).hostname);

    for (const expected of [
      "www.linkedin.com",
      "github.com",
      "note.com",
      "www.threads.com",
      "x.com",
      "menta.work",
      "www.lancers.jp",
      "coconala.com",
    ]) {
      expect(hosts).toContain(expected);
    }
  });

  /**
   * sameAs は「その人物のページ」を指す。出品ページや個別記事を載せると、
   * 同一性の宣言ではなく単なる外部リンクになる。
   */
  it("異常系: 出品ページや個別記事のURLを含まないこと", () => {
    const notProfilePatterns = [
      /\/menu\/detail\//,
      /\/services\/\d/,
      /\/n\/[a-z0-9]/i,
      /\/post\//,
    ];

    for (const url of personProfile.sameAs) {
      for (const pattern of notProfilePatterns) {
        expect(url, `${url} がプロフィールURLでない`).not.toMatch(pattern);
      }
    }
  });

  it("schemaIds が siteConfig.url を基点にしていること", () => {
    expect(schemaIds.person.startsWith(siteConfig.url)).toBe(true);
    expect(schemaIds.organization.startsWith(siteConfig.url)).toBe(true);
    expect(schemaIds.person).not.toBe(schemaIds.organization);
  });

  it("画像パスがサイト内の絶対パスであること", () => {
    expect(personProfile.image.startsWith("/")).toBe(true);
  });
});
