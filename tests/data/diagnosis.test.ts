import { describe, it, expect } from "vitest";
import {
  diagnosisCheckItems,
  diagnosisSteps,
  diagnosisNextOptions,
  diagnosisFaq,
} from "@/data/diagnosis";
import { services } from "@/data/services";

describe("diagnosis（AI無料診断 LP）", () => {
  it("正常系: 診断で分かること が1件以上の非空文字列であること", () => {
    expect(diagnosisCheckItems.length).toBeGreaterThan(0);
    for (const item of diagnosisCheckItems) {
      expect(typeof item).toBe("string");
      expect(item.trim().length).toBeGreaterThan(0);
    }
  });

  it("正常系: 各ステップが title と body を持つこと", () => {
    expect(diagnosisSteps.length).toBeGreaterThan(0);
    for (const step of diagnosisSteps) {
      expect(step.title.trim().length).toBeGreaterThan(0);
      expect(step.body.trim().length).toBeGreaterThan(0);
    }
  });

  it("異常系: 診断後の選択肢が、存在しないサービスへ紐付かないこと", () => {
    const serviceHrefs = new Set(services.map((s) => s.href));
    expect(diagnosisNextOptions.length).toBeGreaterThan(0);
    for (const option of diagnosisNextOptions) {
      expect(option.label.trim().length).toBeGreaterThan(0);
      expect(serviceHrefs.has(option.href)).toBe(true);
    }
  });

  it("正常系: FAQ が question と answer を持つこと", () => {
    expect(diagnosisFaq.length).toBeGreaterThan(0);
    for (const item of diagnosisFaq) {
      expect(item.question.trim().length).toBeGreaterThan(0);
      expect(item.answer.trim().length).toBeGreaterThan(0);
    }
  });
});
