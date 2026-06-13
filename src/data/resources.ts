import type { ResourceItem } from "@/types";

/**
 * 「お役立ち資料」のリソース一覧。
 * トップページのセクションと /resources 配下の詳細ページの両方で使用する。
 * NOTE: 現在の PDF はダミー版。正式版ができ次第 public/downloads/ のファイルを差し替える。
 */
export const resources: ResourceItem[] = [
  {
    slug: "service-guide",
    title: "サービス紹介資料",
    description: "ご提供しているサービスの概要・料金体系をまとめた資料です。",
    comingSoon: false,
    longDescription:
      "shogoworks が提供する5つの「はやわざ」サービス（業務自動化・AI顧問・AI研修・アプリ開発・システム刷新)の支援内容、進め方、料金体系をまとめた資料です。お問い合わせ前の社内検討や、上長への共有資料としてご活用ください。",
    highlights: [
      "各サービスの支援範囲と成果物",
      "ご相談から納品までの標準的な流れ",
      "料金体系とモニター価格のご案内",
      "よくいただくご質問への回答",
    ],
    targetAudience:
      "AI活用や業務自動化の外部パートナーを探している経営者・事業責任者の方",
    fileUrl: "/downloads/service-guide.pdf",
    fileSize: "約 400 KB",
    updatedAt: "2026-06",
  },
  {
    slug: "ai-adoption-whitepaper",
    title: "AI 導入の進め方（ホワイトペーパー）",
    description:
      "中小企業向けの AI 導入ステップとよくある落とし穴を整理した資料です。",
    comingSoon: false,
    longDescription:
      "「AIを導入したいが何から始めればいいかわからない」という中小企業向けに、課題整理から PoC、本格運用までの進め方を5つのステップで解説したホワイトペーパーです。先行企業がつまずきやすいポイントと回避策もあわせて整理しています。",
    highlights: [
      "AI導入を5ステップで進めるロードマップ",
      "費用対効果の見積もり方と社内説得のポイント",
      "よくある失敗パターン7選と回避策",
      "スモールスタートに向くユースケース集",
    ],
    targetAudience:
      "AI導入の検討を任されている担当者・情報システム部門・経営企画の方",
    fileUrl: "/downloads/ai-adoption-whitepaper.pdf",
    fileSize: "約 350 KB",
    updatedAt: "2026-06",
  },
  {
    slug: "templates-pack",
    title: "無料テンプレート集",
    description:
      "プロンプト雛形・AGENTS.md テンプレなど、現場ですぐ使える素材をまとめた配布物です。",
    comingSoon: false,
    longDescription:
      "日々の業務でそのまま使えるプロンプト雛形、Claude Code / Codex 向けの CLAUDE.md・AGENTS.md テンプレート、AI活用ルールのひな形などをまとめた配布物です。コピー&ペーストしてすぐに使える形で収録しています。",
    highlights: [
      "用途別プロンプト雛形（要約・企画・分析・文書作成）",
      "CLAUDE.md / AGENTS.md のテンプレートと記入例",
      "社内AI利用ガイドラインのひな形",
      "導入後すぐ使えるチェックリスト",
    ],
    targetAudience: "生成AIを業務で使い始めた個人・チームの方",
    fileUrl: "/downloads/templates-pack.pdf",
    fileSize: "約 1.6 MB",
    updatedAt: "2026-06",
  },
];
