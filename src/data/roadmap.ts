/**
 * ロードマップ（目的別学習パス）のデータ定義。
 *
 * 編集容易性を最優先し、各 step は `ref` 文字列だけを持つ。
 * `ref` は Astro Content Collection の id（拡張子なし）と一致させる。
 * 例: "prompt-engineering/few-shot-prompting" / "web-development/cloudflare-docs/00-overview"
 *
 * 未解決 ref / draft 記事への ref は `resolveRoadmap` が throw するため、
 * ビルド時 (`astro build`) に検出される。
 */

export interface RoadmapStep {
  /** Astro Content Collection の id（拡張子なし） */
  ref: string;
  /** 1 行コメント（その記事を勧める理由） */
  note: string;
}

export interface RoadmapPath {
  /** ページ内アンカー兼識別子（kebab-case） */
  id: string;
  title: string;
  description: string;
  steps: RoadmapStep[];
}

export const roadmapPaths: RoadmapPath[] = [
  {
    id: "prompt-context-mastery",
    title: "プロンプト & コンテキスト設計を体系で学ぶ",
    description:
      "AI に意図通りの出力をさせるためのプロンプト工学と、長い対話・大規模ドキュメントを破綻させないコンテキスト工学を、入門から実装まで一気通貫で押さえる学習パスです。",
    steps: [
      {
        ref: "prompt-engineering/prompt-engineering-complete-guide",
        note: "プロンプト工学の全体マップ。まずここで地図を持つ。",
      },
      {
        ref: "prompt-engineering/zero-shot-prompting",
        note: "最も基本のゼロショット。前提と限界を押さえる。",
      },
      {
        ref: "prompt-engineering/few-shot-prompting",
        note: "事例を渡して精度を上げる、実務で最頻出のテクニック。",
      },
      {
        ref: "prompt-engineering/chain-of-thought",
        note: "推論ステップを明示させる CoT。複雑なタスクで効く。",
      },
      {
        ref: "context-engineering/context-engineering-complete-guide",
        note: "コンテキスト工学の全体像。プロンプトの「外側」を設計する視点。",
      },
      {
        ref: "context-engineering/context-window-management",
        note: "ウィンドウ制約と圧縮戦略。長い対話を成立させる土台。",
      },
      {
        ref: "context-engineering/rag-architecture",
        note: "RAG の基本構造。社内ドキュメントを LLM に食わせる定番。",
      },
      {
        ref: "context-engineering/memory-systems",
        note: "短期・長期メモリの設計。エージェント時代の必須トピック。",
      },
    ],
  },
  {
    id: "harness-engineering",
    title: "AI エージェントを現場運用に乗せる（Harness Engineering）",
    description:
      "個人利用の Claude Code / Codex を、チームや本番運用に耐える「ハーネス」として整える方法を、設計原則から CI/CD まで段階的に学ぶパスです。",
    steps: [
      {
        ref: "harness-engineering/harness-engineering-complete-guide",
        note: "ハーネス工学の全体像。なぜ「単なるプロンプト集」では足りないか。",
      },
      {
        ref: "harness-engineering/agents-md-design",
        note: "AGENTS.md / CLAUDE.md の設計。エージェントの行動規範を文書化する。",
      },
      {
        ref: "harness-engineering/hooks-feedback-loops",
        note: "フックでフィードバックループを閉じる。自動検証の土台。",
      },
      {
        ref: "harness-engineering/sub-agent-patterns",
        note: "サブエージェント分割。責務の切り出しと並列化のパターン。",
      },
      {
        ref: "harness-engineering/tdd-with-agents",
        note: "エージェントと TDD。失敗するテストを先に書かせるワークフロー。",
      },
      {
        ref: "harness-engineering/ci-cd-guardrails",
        note: "CI/CD ガードレール。本番マージ前の自動検証を組む。",
      },
      {
        ref: "harness-engineering/team-harness-sharing",
        note: "チームでのハーネス共有。スキル・コマンドを資産化する。",
      },
    ],
  },
  {
    id: "cloudflare-supabase-launch",
    title: "Web サービスを Cloudflare + Supabase で立ち上げる",
    description:
      "個人開発でフロント／バックエンド／DB／ストレージを最短で公開するための、Cloudflare Pages・Workers と Supabase の組み合わせを学ぶパスです。",
    steps: [
      {
        ref: "web-development/cloudflare-docs/00-overview",
        note: "Cloudflare 製品群の俯瞰。どこに何を置くかの判断材料。",
      },
      {
        ref: "web-development/cloudflare-docs/17-pages",
        note: "Pages で静的・SSR を素早く公開する基本。",
      },
      {
        ref: "web-development/cloudflare-docs/24-workers",
        note: "Workers でエッジ実行する API・ミドルウェアの作り方。",
      },
      {
        ref: "web-development/cloudflare-docs/12-d1",
        note: "D1 のサーバレス SQLite。小〜中規模なら主役を張れる。",
      },
      {
        ref: "web-development/cloudflare-docs/19-r2",
        note: "R2 のオブジェクトストレージ。エグレス無料が効く。",
      },
      {
        ref: "web-development/supabase-docs/10-overview-landscape",
        note: "Supabase の全体像。Postgres ベースの BaaS をどう使い分けるか。",
      },
      {
        ref: "web-development/supabase-docs/21-auth",
        note: "Supabase Auth。認証・認可を最短で乗せる方法。",
      },
    ],
  },
];
