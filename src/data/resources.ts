import type { ResourceItem } from "@/types";

/**
 * トップページ「お役立ち資料」セクションのリソース一覧。
 * 現状は全て準備中。コンテンツが用意でき次第 href を埋め、comingSoon を false に。
 */
export const resources: ResourceItem[] = [
  {
    title: "サービス紹介資料",
    description: "ご提供しているサービスの概要・料金体系をまとめた資料です。",
    href: "#",
    comingSoon: true,
  },
  {
    title: "AI 導入の進め方（ホワイトペーパー）",
    description:
      "中小企業向けの AI 導入ステップとよくある落とし穴を整理した資料です。",
    href: "#",
    comingSoon: true,
  },
  {
    title: "無料テンプレート集",
    description:
      "プロンプト雛形・AGENTS.md テンプレなど、現場ですぐ使える素材をまとめた配布物です。",
    href: "#",
    comingSoon: true,
  },
];
