const CJK_CHARS_PER_MINUTE = 600;
const ENGLISH_WORDS_PER_MINUTE = 200;
const MIN_MINUTES = 1;

const CJK_REGEX = /[぀-ヿ㐀-䶿一-鿿豈-﫿]/g;
const ENGLISH_WORD_REGEX = /[A-Za-z][A-Za-z0-9'-]*/g;

/**
 * 本文テキストから推定読了時間（分）を返す。
 *
 * 日本語（CJK 文字）は文字数を 600 字/分、英単語は 200 語/分で換算し、
 * 両者を合算して切り上げる。最小 1 分。
 */
export function estimateReadingMinutes(text: string): number {
  const cjkCount = (text.match(CJK_REGEX) ?? []).length;
  const wordCount = (text.match(ENGLISH_WORD_REGEX) ?? []).length;

  const minutes =
    cjkCount / CJK_CHARS_PER_MINUTE + wordCount / ENGLISH_WORDS_PER_MINUTE;

  return Math.max(MIN_MINUTES, Math.ceil(minutes));
}
