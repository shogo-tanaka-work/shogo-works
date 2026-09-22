import type { PlatformLink, PlatformRoute, SalesPlatform } from "@/types";

// 販売プラットフォームの表示名。サイト → プラットフォームへのリンクは各規約上問題ない
// （逆方向＝プラットフォーム本文への外部URL掲載は禁止なので、導線はサイト側だけに置く）。
export const platformLabels: Record<SalesPlatform, string> = {
  lancers: "ランサーズ",
  coconala: "ココナラ",
  menta: "MENTA",
};

// リンク先の正規ドメイン。データの打ち間違いをテストで検出するために使う。
export const platformHosts: Record<SalesPlatform, string> = {
  lancers: "www.lancers.jp",
  coconala: "coconala.com",
  menta: "menta.work",
};

// 出品ページの正本は ai-business-os の 20_共通機能/05_営業戦略/（coconala/・lancers/）。
// 価格はサイトとプラットフォームで揃える。出品側を改定したらここと services.ts を追従させる。
export const platformLinks = {
  lancersAutomation: {
    platform: "lancers",
    href: "https://www.lancers.jp/menu/detail/1343450",
  },
  coconalaAutomation: {
    platform: "coconala",
    href: "https://coconala.com/services/4399466",
  },
  lancersAppProduction: {
    platform: "lancers",
    href: "https://www.lancers.jp/menu/detail/1343452",
  },
  // 「ChatGPT・Gemini・Claude・Copilotを仕事で使い分ける」プラン。月1面談ライト／実践学習プランを掲載
  mentaAiSupport: {
    platform: "menta",
    href: "https://menta.work/plan/17477",
  },
} as const satisfies Record<string, PlatformLink>;

// お問い合わせページの「プラットフォーム経由」の案内。services.ts の料金プランと同じ申込先を並べる
export const platformRoutes: PlatformRoute[] = [
  {
    serviceName: "業務自動化パッケージ",
    links: [platformLinks.lancersAutomation, platformLinks.coconalaAutomation],
  },
  {
    serviceName: "AIアプリ本番化パッケージ",
    links: [platformLinks.lancersAppProduction],
  },
  {
    serviceName: "マンツーマンAIサポート",
    links: [platformLinks.mentaAiSupport],
  },
];
