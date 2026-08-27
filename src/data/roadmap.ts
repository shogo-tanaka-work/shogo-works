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
    id: "agent-engineering-stack",
    title: "Context・Harness・Loop・Graphをつなげて学ぶ",
    description:
      "AIエージェントの品質を、入力情報、1回の実行環境、反復サイクル、複数経路の実行構造という4つの設計面に分けて理解する学習パスです。",
    steps: [
      {
        ref: "context-engineering/context-engineering-complete-guide",
        note: "モデルへ何を見せるか。有限な注意予算を管理する。",
      },
      {
        ref: "harness-engineering/harness-engineering-complete-guide",
        note: "1回のエージェント実行を支える環境・ツール・検証を設計する。",
      },
      {
        ref: "loop-engineering/loop-engineering-complete-guide",
        note: "実行・観測・評価・再試行・停止を反復可能なサイクルにする。",
      },
      {
        ref: "graph-engineering/graph-engineering-complete-guide",
        note: "分岐・並列・合流・承認を含むワークフロー全体を明示する。",
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
  {
    id: "claude-code-zero-to-master",
    title: "Claude Code をゼロから業務で使いこなす（カリキュラム）",
    description:
      "非エンジニアでも、インストールから業務自動化・チーム導入まで順番に身につく全11章・35レッスンの学習コースです。各章の入口となるレッスンを順に進めてください（章内の残りのレッスンはサイドバーから辿れます）。",
    steps: [
      {
        ref: "ai-tools/claude-code-curriculum/01-1-what-is-claude-code",
        note: "第1章。Claude Code とは何か、チャットAIとの違いから。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/02-3-first-launch-checklist",
        note: "第2章。使う環境を選び（2-0）、インストールを済ませて初回起動の確認まで。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/03-1-first-prompts",
        note: "第3章。最初に覚える指示の5つの型。ここから実践が始まる。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/04-1-sales-report",
        note: "第4章。レポート・Excel・メールの業務自動化に踏み込む。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/05-1-claude-md",
        note: "第5章。CLAUDE.md で「毎回同じ説明」から卒業する。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/06-1-skills",
        note: "第6章。よく使う指示を Skills として保存し、事故を防ぐ設定を入れる。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/07-1-landing-page",
        note: "第7章。LP・社内ツールを作って公開まで体験する。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/08-1-competitor-research",
        note: "第8章。調査・ダッシュボード・大量データ処理へ応用する。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/09-1-what-is-mcp",
        note: "第9章。MCP で Notion / Drive / GitHub / Slack とつなぐ。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/10-1-token-billing",
        note: "第10章。料金の仕組みを理解してコストを設計する。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/11-1-team-adoption",
        note: "第11章。個人の武器からチームの仕組みへ広げる。",
      },
    ],
  },
  {
    id: "claude-code-deep-dive",
    title: "Claude Code を拡張して使い倒す（実務者向け）",
    description:
      "基本操作を終えた人が、Hooks / Skills / サブエージェント / MCP でエージェントを自分の開発フローに合わせて拡張していくための学習パスです。カリキュラムより一段深い内容を扱います。",
    steps: [
      {
        ref: "ai-tools/claude-code/overview",
        note: "全体像。何ができて何ができないかの境界を先に押さえる。",
      },
      {
        ref: "ai-tools/claude-code/install-and-setup",
        note: "インストールと初期設定。ここで環境の躓きを潰しておく。",
      },
      {
        ref: "ai-tools/claude-code/daily-operations",
        note: "日常運用。セッションとコンテキストの扱いが効率を決める。",
      },
      {
        ref: "ai-tools/claude-code/claude-md-memory",
        note: "CLAUDE.md と Auto Memory。毎回同じ説明をしない仕組みを作る。",
      },
      {
        ref: "ai-tools/claude-code/plan-mode-worktrees",
        note: "Plan Mode と Worktrees。計画と実行を分けて事故を防ぐ。",
      },
      {
        ref: "ai-tools/claude-code/skills",
        note: "Skills。繰り返す作業を再利用できる形へ切り出す。",
      },
      {
        ref: "ai-tools/claude-code/hooks",
        note: "Hooks。ライフサイクルに介入して検証や整形を自動化する。",
      },
      {
        ref: "ai-tools/claude-code/subagents",
        note: "サブエージェント。並列化と専門化で長い作業を分担させる。",
      },
      {
        ref: "ai-tools/claude-code/mcp",
        note: "MCP。外部ツールとAPIを安全に接続する。",
      },
      {
        ref: "ai-tools/claude-code/agent-sdk",
        note: "Agent SDK。CLI の外からエージェントを組み込む段階へ。",
      },
    ],
  },
  {
    id: "codex-from-scratch",
    title: "OpenAI Codex を業務で使えるようにする",
    description:
      "Codex の全体像から、CLI の実行制御・設定・自動化までを順に押さえる学習パスです。Claude Code との比較も含め、どちらをどの場面で使うかの判断材料まで扱います。",
    steps: [
      {
        ref: "ai-tools/codex/overview",
        note: "全体像。CLI / IDE / Cloud / SDK の関係をここで掴む。",
      },
      {
        ref: "ai-tools/codex/quickstart",
        note: "インストールから初回タスク実行まで。まず動かす。",
      },
      {
        ref: "ai-tools/codex/pricing",
        note: "料金体系。サブスクとトークン課金の関係を先に理解する。",
      },
      {
        ref: "ai-tools/codex/vs-claude-code",
        note: "Claude Code との比較。使い分けの判断軸を持つ。",
      },
      {
        ref: "ai-tools/codex/prompting-guide",
        note: "プロンプト設計。thread と context の扱いが品質を決める。",
      },
      {
        ref: "ai-tools/codex/approval-modes-sandbox",
        note: "承認モードとサンドボックス。どこまで自動で走らせるかを決める。",
      },
      {
        ref: "ai-tools/codex/cli-features",
        note: "CLI 主要機能。resume や review で日常の運用が変わる。",
      },
      {
        ref: "ai-tools/codex/subagents",
        note: "サブエージェント。TOML 定義で並列スレッドを扱う。",
      },
      {
        ref: "ai-tools/codex/config-basics",
        note: "config.toml の基本。挙動を自分の環境に寄せる。",
      },
      {
        ref: "ai-tools/codex/best-practices",
        note: "ベストプラクティス。現場で効く運用の勘所をまとめて拾う。",
      },
    ],
  },
];
