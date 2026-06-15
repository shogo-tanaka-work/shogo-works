import type { CaseStudy } from "@/types";

/**
 * 導入事例 / 指導実績（トップページのセクションと /cases 配下で使用）。
 * クライアントは実名を出さず属性表記にする（実績のぼかし方針と整合）。
 * NOTE: 現在は仮内容。実データが確定し次第、各項目を差し替える。
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-venture-poc",
    title: "AIベンチャー企業でのAI活用PoC伴走支援",
    category: "導入支援",
    clientType: "AIベンチャー企業",
    period: "2025年〜継続中（1年以上）",
    summary:
      "AI活用の検証（PoC）を現場で伴走。ユースケースの選定から検証・本格活用への橋渡しまでを支援しています。",
    challenge:
      "AI活用のアイデアは多数あるものの、どのユースケースから検証すべきか優先順位が定まらず、PoC が単発で終わってしまうことが課題でした。",
    support: [
      "業務ヒアリングによるユースケースの棚卸しと優先順位付け",
      "Claude / Dify / n8n などを組み合わせた検証環境の構築",
      "PoC の効果測定と本格導入への移行判断の支援",
      "社内メンバーへのナレッジ共有・運用引き継ぎ",
    ],
    outcomes: [
      "1年以上にわたる継続的な PoC 伴走体制を確立",
      "検証済みユースケースの社内展開フローを整備",
      "現場メンバーが自走できる運用ドキュメントを整備",
    ],
    technologies: ["Claude", "Dify", "n8n", "Python"],
    serviceHref: "/services/hayawaza-automation",
  },
  {
    slug: "sme-ai-advisor",
    title: "中小企業・個人事業主へのAI顧問サービス",
    category: "導入支援",
    clientType: "中小企業 / 個人事業主",
    period: "2025年〜継続中（2契約）",
    summary:
      "月次の定例相談とチャットサポートで、AI導入の意思決定から日々の活用定着までを継続支援しています。",
    challenge:
      "「AIを使いたいが、何から手を付けるべきか分からない」「導入したツールが現場に定着しない」という、中小企業に典型的な課題を抱えていました。",
    support: [
      "月次定例での課題整理とAI活用ロードマップの策定",
      "業務に合わせたツール選定（ChatGPT / Claude / GAS 等）と初期設定",
      "プロンプト雛形・利用ルールの整備による社内定着支援",
      "チャットでの随時相談対応",
    ],
    outcomes: [
      "2件の顧問契約を継続中（中小企業・個人）",
      "定型業務の一部自動化により作業時間を削減",
      "経営判断の壁打ち相手としてAI活用が日常業務に定着",
    ],
    technologies: ["ChatGPT", "Claude", "Google Apps Script"],
    serviceHref: "/services/hayawaza-advisor",
  },
  {
    slug: "ai-training-100",
    title: "AI活用研修・プログラミング指導（延べ100名以上）",
    category: "研修・指導",
    clientType: "AIスクール受講生 / 個人",
    period: "2025年〜継続中",
    summary:
      "AIスクールでの講師活動と MENTA での個人指導で、非エンジニアからエンジニアまで延べ100名以上を指導してきました。",
    challenge:
      "受講者のレベルや目的（業務効率化・転職・開発スキル習得）がばらばらで、画一的なカリキュラムでは成果につながりにくい状況でした。",
    support: [
      "受講者の目的・レベルに合わせた個別カリキュラムの設計",
      "ChatGPT / Claude の業務活用からプログラミング基礎までの幅広い指導",
      "セミナー形式での ChatGPT 活用・MCP 入門などのテーマ別研修",
      "課題レビューとチャットでの質問対応",
    ],
    outcomes: [
      "延べ100名以上への研修・指導を実施",
      "MENTA レビューは累計3件すべて満点（★5.0）",
      "受講者が業務でAIを使い始めるまでの定着率を重視した指導を確立",
    ],
    technologies: ["ChatGPT", "Claude", "Python", "Google Apps Script"],
    serviceHref: "/services/hayawaza-training",
  },
];
