import { describe, it, expect } from "vitest";
import { careerExperiences } from "@/data/career";

describe("career データ", () => {
  it("必須フィールドがすべて埋まっていること", () => {
    for (const experience of careerExperiences) {
      expect(experience.period).toBeTruthy();
      expect(experience.company).toBeTruthy();
      expect(experience.role).toBeTruthy();
      expect(experience.employment).toBeTruthy();
      expect(experience.summary).toBeTruthy();
    }
  });

  it("異常系: current と upcoming を同時に立てないこと（バッジが二重表示になる）", () => {
    for (const experience of careerExperiences) {
      expect(experience.current && experience.upcoming).toBeFalsy();
    }
  });

  /**
   * 客先は業種表記にとどめる方針（career.ts 冒頭のコメント）。
   * 実名が入ると「株式会社」「Inc.」などの法人格が company 以外にも現れるため、
   * summary と highlights に法人格つきの固有名詞が混ざっていないことを見る。
   */
  it("summary と highlights に法人格つきの社名が含まれないこと", () => {
    const corporateSuffix = /(株式会社|有限会社|合同会社|Inc\.|Corp\.|Ltd\.)/;

    for (const experience of careerExperiences) {
      expect(experience.summary).not.toMatch(corporateSuffix);

      for (const highlight of experience.highlights) {
        expect(highlight).not.toMatch(corporateSuffix);
      }
    }
  });

  it("現職として扱う経歴の period が「現在」で終わること", () => {
    for (const experience of careerExperiences) {
      if (!experience.current) continue;
      expect(experience.period).toMatch(/現在$/);
    }
  });
});
