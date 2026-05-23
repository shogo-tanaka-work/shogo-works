import { describe, it, expect } from "vitest";
import { estimateReadingMinutes } from "@/utils/readingTime";

describe("estimateReadingMinutes", () => {
  it("正常系: 空文字のとき、最小値の1分を返すこと", () => {
    expect(estimateReadingMinutes("")).toBe(1);
  });

  it("正常系: 短い日本語のとき、最小値の1分を返すこと", () => {
    expect(estimateReadingMinutes("これは短い文章です。")).toBe(1);
  });

  it("正常系: 日本語のみのとき、CJK文字数を600で割った値（切り上げ）を返すこと", () => {
    // 1200 CJK chars / 600 = 2 min
    const text = "あ".repeat(1200);
    expect(estimateReadingMinutes(text)).toBe(2);
  });

  it("正常系: 英語のみのとき、単語数を200で割った値（切り上げ）を返すこと", () => {
    // 600 words / 200 = 3 min
    const text = Array.from({ length: 600 }, () => "word").join(" ");
    expect(estimateReadingMinutes(text)).toBe(3);
  });

  it("正常系: 日本語と英語が混在するとき、両者を合算して切り上げで返すこと", () => {
    // 600 CJK (= 1 min) + 200 英単語 (= 1 min) = 2 min
    const text = "あ".repeat(600) + " " + Array.from({ length: 200 }, () => "word").join(" ");
    expect(estimateReadingMinutes(text)).toBe(2);
  });

  it("異常系: 1分未満になる量のとき、最小値の1分を返すこと", () => {
    expect(estimateReadingMinutes("hello world")).toBe(1);
  });
});
