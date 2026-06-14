import type { TechToolDetail } from "@/types";

/**
 * 「取り扱い技術」の主要ツール詳細ページ（/tech/[slug]）のデータ。
 * 全ツールではなく、サービス・Knowledge と紐づく主要ツールのみ深掘りする。
 * techStack.ts の detailSlug と整合させること（テストで検証）。
 */
export const techToolDetails: TechToolDetail[] = [
  {
    slug: "claude",
    name: "Claude / Claude Code",
    iconSlug: "anthropic",
    tagline: "業務の中核に据えるAIアシスタントとAIコーディングエージェント",
    overview:
      "Anthropic 社の生成AI「Claude」と、ターミナルから開発・業務自動化を進められるエージェント「Claude Code」。長文の読解力と指示への忠実さに優れ、文書作成からコード生成、エージェント的な自動処理まで幅広く使えます。",
    strengths: [
      "Claude Code を日常業務・開発の中心に据えて運用しており、CLAUDE.md 設計やスキル・フック活用などの実践ノウハウを蓄積",
      "公式ドキュメントの更新を日次でウォッチし、Knowledge Base・AIニュースとして体系化",
      "非エンジニア向けに Claude 活用をやさしく教えてきた指導経験",
    ],
    useCases: [
      {
        title: "業務自動化",
        description:
          "定型レポート作成、メール下書き、データ整理などの繰り返し業務を Claude Code で自動化します。",
      },
      {
        title: "開発の高速化",
        description:
          "要件整理からコード生成・テスト・リファクタリングまで、AI駆動の開発フローを構築します。",
      },
      {
        title: "社内AI活用の標準化",
        description:
          "プロンプト雛形や CLAUDE.md の整備により、チーム全体で再現性のある AI 活用を実現します。",
      },
    ],
    relatedServiceHref: "/services/hayawaza-automation",
    relatedKnowledgeHref: "/knowledge/ai-tools/claude-code",
  },
  {
    slug: "dify",
    name: "Dify",
    iconSlug: "dify",
    tagline: "ノーコードで社内AIアプリを構築できるLLMアプリ開発基盤",
    overview:
      "チャットボットやワークフロー型のAIアプリを GUI で組み立てられるオープンソースの LLM アプリ開発プラットフォーム。社内ナレッジを組み込んだ QA ボットや、複数ステップの業務フロー自動化を素早く形にできます。",
    strengths: [
      "社内向けAIチャットボット・ワークフローの構築支援経験",
      "RAG（社内文書検索）構成の設計と精度改善の知見",
      "ノーコードツールとAPIを組み合わせた現実的な業務設計が得意",
    ],
    useCases: [
      {
        title: "社内QAボット",
        description:
          "マニュアル・規程類を取り込み、社員の質問に即答する社内ヘルプデスクを構築します。",
      },
      {
        title: "定型業務のワークフロー化",
        description:
          "問い合わせ分類→下書き生成→承認のような多段フローを GUI で構築・運用します。",
      },
    ],
    relatedServiceHref: "/services/hayawaza-automation",
  },
  {
    slug: "n8n",
    name: "n8n",
    iconSlug: "n8n",
    tagline: "AIと数百のサービスをつなぐワークフロー自動化ツール",
    overview:
      "Slack・Gmail・スプレッドシートなど数百のサービスを GUI で接続し、AI ノードも組み込めるワークフロー自動化ツール。セルフホストも可能で、社内システムと外部サービスをまたぐ自動化に向いています。",
    strengths: [
      "通知・集計・データ連携など、業務システム間の自動化フロー構築経験",
      "AIノードを組み込んだ「判断を伴う自動化」の設計ノウハウ",
      "運用後の保守を見据えたエラーハンドリング・通知設計",
    ],
    useCases: [
      {
        title: "サービス間のデータ連携",
        description:
          "フォーム回答→スプレッドシート記録→Slack通知のような連携を数時間で構築します。",
      },
      {
        title: "AIを組み込んだ業務フロー",
        description:
          "受信メールの自動分類・要約・担当者振り分けなど、AI判断を含む自動化を実現します。",
      },
    ],
    relatedServiceHref: "/services/hayawaza-automation",
  },
  {
    slug: "cloudflare",
    name: "Cloudflare",
    iconSlug: "cloudflare",
    tagline: "高速・低コストでWebサイトとAPIを動かすクラウド基盤",
    overview:
      "CDN・セキュリティから、Workers（サーバーレス）、Pages（静的ホスティング）、D1/R2（データベース・ストレージ）まで揃うクラウドプラットフォーム。小規模サイトから業務アプリまで、低コストかつ高速に運用できます。",
    strengths: [
      "本サイトを含む Cloudflare 構成での Web サイト構築・運用経験",
      "公式ドキュメント50本超を読み込み Knowledge Base として体系化",
      "無料枠を活かしたスモールスタート構成の設計が得意",
    ],
    useCases: [
      {
        title: "コーポレートサイト・LP構築",
        description:
          "Astro + Cloudflare で高速・低コストなサイトを構築し、運用まで伴走します。",
      },
      {
        title: "業務アプリのバックエンド",
        description:
          "Workers + D1 を使った軽量なAPI・業務ツールをスピーディに開発します。",
      },
    ],
    relatedServiceHref: "/services/hayawaza-dev",
    relatedKnowledgeHref: "/knowledge/web-development/cloudflare-docs",
  },
  {
    slug: "astro",
    name: "Astro",
    iconSlug: "astro",
    tagline: "表示速度に強いコンテンツ重視のWebフレームワーク",
    overview:
      "デフォルトでJavaScriptを最小化する「Islands アーキテクチャ」を採用したWebフレームワーク。コーポレートサイト・LP・ドキュメントサイトのような、表示速度とSEOが重要なサイトに最適です。",
    strengths: [
      "本サイト自体を Astro + TailwindCSS で設計・構築・運用",
      "コンテンツコレクションを使った記事・ドキュメント基盤の設計経験",
      "Lighthouse スコアを意識したパフォーマンス最適化",
    ],
    useCases: [
      {
        title: "高速なコーポレートサイト",
        description:
          "表示速度・SEO・更新しやすさを両立したサイトを構築します。",
      },
      {
        title: "ブログ・ドキュメントサイト",
        description:
          "Markdown ベースで記事を管理できる、運用負荷の低い情報発信基盤を作ります。",
      },
    ],
    relatedServiceHref: "/services/hayawaza-dev",
  },
  {
    slug: "google-apps-script",
    name: "Google Apps Script",
    iconSlug: "google",
    tagline: "Google Workspace をそのまま自動化できるスクリプト環境",
    overview:
      "スプレッドシート・Gmail・カレンダー・ドライブなど Google Workspace の各サービスを JavaScript で自動化できる実行環境。追加コストなしで始められ、中小企業の業務自動化の第一歩として最適です。",
    strengths: [
      "スプレッドシート集計・メール自動送信・帳票生成など多数の自動化実装経験",
      "非エンジニアへの GAS 指導経験が豊富で、引き継ぎやすいコード設計が得意",
      "AI（Claude / Gemini）と GAS を組み合わせた文書処理の自動化ノウハウ",
    ],
    useCases: [
      {
        title: "スプレッドシート業務の自動化",
        description:
          "手作業の集計・転記・レポート作成を自動化し、毎月の作業時間を削減します。",
      },
      {
        title: "メール・通知の自動化",
        description:
          "条件に応じたメール自動送信やリマインド通知を仕組み化します。",
      },
    ],
    relatedServiceHref: "/services/hayawaza-automation",
    relatedKnowledgeHref: "/knowledge/web-development/gas-best-practices",
  },
];
