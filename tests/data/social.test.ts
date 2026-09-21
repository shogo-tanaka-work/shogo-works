import { describe, it, expect } from "vitest";
import { socialLinks } from "@/data/social";

describe("social データ", () => {
  it("公開済みのリンクは実URLを持つこと（プレースホルダを残さない）", () => {
    for (const link of socialLinks) {
      if (link.comingSoon) continue;
      expect(link.url).not.toBe("#");
      expect(link.url.startsWith("https://")).toBe(true);
    }
  });

  it("異常系: comingSoon のリンクは遷移先を持たないこと", () => {
    for (const link of socialLinks) {
      if (!link.comingSoon) continue;
      expect(link.url).toBe("#");
    }
  });

  /** note は公開済み。Coming Soon 表示に戻ったらここで落とす */
  it("note が公開済みリンクとして登録されていること", () => {
    const note = socialLinks.find((link) => link.icon === "note");

    expect(note).toBeDefined();
    expect(note?.comingSoon).toBeUndefined();
    expect(note?.url).toContain("note.com/");
  });

  it("名前が一意であること", () => {
    const names = socialLinks.map((link) => link.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
