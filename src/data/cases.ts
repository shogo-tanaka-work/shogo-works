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
    period: "2025年〜2026年（約1年）",
    summary:
      "AI活用の検証（PoC）を現場で伴走。ユースケースの選定から検証・本格活用への橋渡しまでを約1年にわたり支援しました。",
    challenge:
      "AI活用のアイデアは多数あるものの、どのユースケースから検証すべきか優先順位が定まらず、PoC が単発で終わってしまうことが課題でした。",
    support: [
      "業務ヒアリングによるユースケースの棚卸しと優先順位付け",
      "Claude / Dify / n8n などを組み合わせた検証環境の構築",
      "PoC の効果測定と本格導入への移行判断の支援",
      "社内メンバーへのナレッジ共有・運用引き継ぎ",
    ],
    outcomes: [
      "約1年にわたる PoC 伴走を担当",
      "検証済みユースケースの社内展開フローを整備",
      "現場メンバーが自走できる運用ドキュメントを整備",
    ],
    technologies: ["Claude", "Dify", "n8n", "Python"],
    serviceHref: "/services/app-development",
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
      "MENTA レビューは受け取った評価がすべて満点（★5.0）",
      "受講者が業務でAIを使い始めるまでの定着率を重視した指導を確立",
    ],
    technologies: ["ChatGPT", "Claude", "Python", "Google Apps Script"],
    serviceHref: "/services/lecture",
  },
  {
    slug: "menta-mentoring",
    title: "MENTA でのマンツーマン指導（評価はすべて★5.0）",
    category: "研修・指導",
    clientType: "個人（大学生・会社員・経営者・エンジニア）",
    period: "2025年〜継続中",
    summary:
      "スキルシェアサービス MENTA を通じ、学習方法の相談から開発・AI活用の実践まで、一人ひとりの目的に合わせて伴走しています。",
    challenge:
      "相談者の立場も目的もばらばらで、「何から手を付ければよいか」「今の学び方で合っているか」が判断できず、独学のまま止まってしまう状態が共通の課題でした。",
    support: [
      "作りたいものの相談から、実装方法・手順への具体的な落とし込み",
      "フルスタック開発のレクチャーと、AI活用を組み合わせた進め方の提示",
      "相談者のレベルに合わせた助言・提案（AI初心者から現役エンジニアまで）",
      "チャットでの継続的な質問対応",
    ],
    outcomes: [
      "受け取った評価はすべて満点（★5.0）",
      "検討中だったアプリを実用化に向けて具体的に進められる状態まで整理",
      "学習方法の相談から実装手順の設計までを一連で支援",
    ],
    technologies: ["ChatGPT", "Claude", "Claude Code", "Dify", "n8n"],
    serviceHref: "/services/personal-support",
  },
];
