import { describe, expect, it } from "vitest";
import { readFileSync, globSync } from "node:fs";
import { join } from "node:path";

/**
 * docs/DESIGN.md の方針を機械的に守らせるためのテスト。
 * 装飾を戻す変更が入ったら、レビューを待たずにここで落ちる。
 */

const SRC_ROOT = join(process.cwd(), "src");

interface SourceFile {
  path: string;
  content: string;
}

function loadSourceFiles(): SourceFile[] {
  return globSync("**/*.{astro,tsx,ts,css}", { cwd: SRC_ROOT })
    // 記事本文のスタイルは docs/DESIGN.md が例外として許可している
    .filter((relativePath) => relativePath !== "styles/global.css")
    .map((relativePath) => ({
      path: `src/${relativePath}`,
      content: readFileSync(join(SRC_ROOT, relativePath), "utf-8"),
    }));
}

const files = loadSourceFiles();

/** 前面へ浮くため影を許可する要素を持つファイル */
const SHADOW_ALLOWED = new Set([
  "src/components/sections/Navbar.astro", // ドロップダウンパネル
  "src/components/islands/MobileMenu.tsx", // ドロワーとバックドロップ
]);

function findViolations(pattern: RegExp, allowed = new Set<string>()): string[] {
  const violations: string[] = [];

  for (const file of files) {
    if (allowed.has(file.path)) continue;

    for (const [index, line] of file.content.split("\n").entries()) {
      if (pattern.test(line)) {
        violations.push(`${file.path}:${index + 1}: ${line.trim()}`);
      }
      pattern.lastIndex = 0;
    }
  }

  return violations;
}

describe("角丸", () => {
  it("通常領域に大きな角丸（rounded-2xl / rounded-3xl）を使わないこと", () => {
    const violations = findViolations(/\brounded-(2xl|3xl|full-\w+)\b/);
    expect(violations, violations.join("\n")).toEqual([]);
  });
});

describe("影", () => {
  it("前面へ浮く要素以外に影を使わないこと", () => {
    // shadow-none は打ち消し用途なので許可する
    const violations = findViolations(
      /\bshadow-(sm|md|lg|xl|2xl|inner|teal|black|gray)\b/,
      SHADOW_ALLOWED,
    );
    expect(violations, violations.join("\n")).toEqual([]);
  });

  it("色指定のない ring を残さないこと", () => {
    // ring は box-shadow で描かれる。色を伴わない ring-N は
    // 枠線置き換えの取りこぼしで、意図しない影として残る
    const violations: string[] = [];

    for (const file of files) {
      for (const [index, line] of file.content.split("\n").entries()) {
        if (/\bring-(1|2|4|8)\b/.test(line) && !/\bring-[a-z]/.test(line)) {
          violations.push(`${file.path}:${index + 1}: ${line.trim()}`);
        }
      }
    }

    expect(violations, violations.join("\n")).toEqual([]);
  });
});

describe("グラデーションと質感表現", () => {
  it("グラデーション背景を使わないこと", () => {
    const violations = findViolations(/\bbg-gradient-to-\w+\b/);
    expect(violations, violations.join("\n")).toEqual([]);
  });

  it("gradient-text / gradient-border / glass を使わないこと", () => {
    const violations = findViolations(/\b(gradient-text|gradient-border|glass(-strong)?)\b/);
    expect(violations, violations.join("\n")).toEqual([]);
  });

  it("teal から emerald への2色グラデーションを使わないこと", () => {
    const violations = findViolations(/\b(from|via|to)-(teal|emerald)-\d{2,3}\b/);
    expect(violations, violations.join("\n")).toEqual([]);
  });
});

describe("カラートークン", () => {
  it("アクセント色（teal）を生の Tailwind 色で指定しないこと", () => {
    // アクセントは global.css の @theme トークン（primary / accent）を参照する。
    // emerald / red などの状態色は docs/DESIGN.md が例外として許可している
    const violations = findViolations(/\bteal-\d{2,3}\b/);
    expect(violations, violations.join("\n")).toEqual([]);
  });
});

describe("見出し", () => {
  it("SectionHeader が中央寄せを持たないこと", () => {
    const header = files.find(
      (file) => file.path === "src/components/ui/SectionHeader.astro",
    );
    expect(header).toBeDefined();
    expect(header!.content).not.toMatch(/text-center|mx-auto/);
  });
});

describe("無効化済みアニメーション", () => {
  it("CSS 定義のないアニメーションクラスを残さないこと", () => {
    const violations = findViolations(
      /\b(animate-on-scroll|stagger-|animate-fade-in-up|animate-scale-in)\b/,
    );
    expect(violations, violations.join("\n")).toEqual([]);
  });
});

describe("走査対象", () => {
  it("src 配下のファイルを読み込めていること", () => {
    // グロブが壊れて0件になると全テストが素通りするため保険を置く
    expect(files.length).toBeGreaterThan(40);
  });
});
