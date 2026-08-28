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

/**
 * パスの深さ。同じ分野でも「はじめて触る人」と「すでに使っている人」では
 * 読む順序も分量も変わるため、2段階で分けて並べる。
 */
export type RoadmapLevel = "beginner" | "practical";

export interface RoadmapGroup {
  /** RoadmapPath.group から参照される識別子 */
  id: string;
  label: string;
  description: string;
}

/**
 * パスの並びを決めるグループ。AI ツールの習熟と Web サービス構築のように
 * 目的の異なるパスが混ざると選べないため、この単位で見出しを立てる。
 */
export const roadmapGroups: RoadmapGroup[] = [
  {
    id: "ai-tools",
    label: "AIツールを使いこなす",
    description:
      "Claude Code / Codex を業務で動かせるようにする。手を動かす順に並べたコースと、使い込む段階のリファレンス。",
  },
  {
    id: "agent-design",
    label: "AIに任せる仕組みを設計する",
    description:
      "指示の出し方から、エージェントを繰り返し安定して動かすための設計まで。ツールを問わず効く考え方を扱う。",
  },
  {
    id: "web-service",
    label: "Webサービスを作る",
    description:
      "Cloudflare / Vercel / Supabase で、作ったものを公開して運用に乗せる。",
  },
  {
    id: "security",
    label: "安全に使う・守る",
    description:
      "AIに入力してよいかの判断から、AIが書いたコードと動かす基盤を守るところまで。",
  },
];

export interface RoadmapPath {
  /** ページ内アンカー兼識別子（kebab-case） */
  id: string;
  /** 所属する RoadmapGroup の id */
  group: RoadmapGroup["id"];
  level: RoadmapLevel;
  title: string;
  description: string;
  steps: RoadmapStep[];
}

export const roadmapPaths: RoadmapPath[] = [
  {
    id: "claude-code-zero-to-master",
    group: "ai-tools",
    level: "beginner",
    title: "Claude Code をゼロから業務で使いこなす（カリキュラム）",
    description:
      "非エンジニアでも、インストールから業務自動化・チーム導入まで順番に身につく全10章・30レッスンの学習コースです。各章の入口となるレッスンを順に進めてください（章内の残り2レッスンはサイドバーから辿れます）。",
    steps: [
      {
        ref: "ai-tools/claude-code-curriculum/01-1-what-is-claude-code",
        note: "第1章。Claude Code とは何か、チャットAIとの違いから。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/02-3-first-launch-checklist",
        note: "第2章。インストール（2-1/2-2）を済ませて初回起動の確認まで。",
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
        ref: "ai-tools/claude-code-curriculum/07-1-landing-page",
        note: "第6章。LP・社内ツールを作って公開まで体験する。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/08-1-competitor-research",
        note: "第7章。調査・ダッシュボード・大量データ処理へ応用する。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/09-1-what-is-mcp",
        note: "第8章。MCP で Notion / Drive / GitHub / Slack とつなぐ。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/10-1-token-billing",
        note: "第9章。料金の仕組みを理解してコストを設計する。",
      },
      {
        ref: "ai-tools/claude-code-curriculum/11-1-team-adoption",
        note: "第10章。個人の武器からチームの仕組みへ広げる。",
      },
    ],
  },
  {
    id: "codex-zero-to-master",
    group: "ai-tools",
    level: "beginner",
    title: "Codex をゼロから業務で使いこなす（カリキュラム）",
    description:
      "OpenAI Codex を業務で使えるようにする全7章・22レッスンの学習コースです。承認モードとサンドボックスの2層構造、GUI での並行作業、ブラウザ操作など Codex ならではの部分に絞っています。指示の出し方など各ツール共通の基礎は Claude Code 入門コース側で扱います。",
    steps: [
      {
        ref: "ai-tools/codex-curriculum/01-1-what-is-codex",
        note: "第1章。どこでも同じエージェントが動く、という設計から。",
      },
      {
        ref: "ai-tools/codex-curriculum/02-0-choose-your-surface",
        note: "第2章。App / CLI / Web / Chrome から自分の入口を選ぶ。",
      },
      {
        ref: "ai-tools/codex-curriculum/03-1-approval-modes",
        note: "第3章。このコースの中核。承認とサンドボックスの2層構造を理解する。",
      },
      {
        ref: "ai-tools/codex-curriculum/04-1-agents-md",
        note: "第4章。AGENTS.md で「毎回同じ説明」から卒業する。",
      },
      {
        ref: "ai-tools/codex-curriculum/05-1-parallel-work",
        note: "第5章。並行作業・クラウド・ブラウザ操作という Codex 固有の任せ方。",
      },
      {
        ref: "ai-tools/codex-curriculum/06-1-skills",
        note: "第6章。Skills・プラグイン・定期実行で仕組みにする。",
      },
      {
        ref: "ai-tools/codex-curriculum/07-1-cost",
        note: "第7章。コストを抑え、チームへ広げ、安全に使い続ける。",
      },
    ],
  },
  {
    id: "claude-code-deep-dive",
    group: "ai-tools",
    level: "practical",
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
    id: "codex-deep-dive",
    group: "ai-tools",
    level: "practical",
    title: "Codex を設定と自動化まで使い倒す（実務者向け）",
    description:
      "入門コースを終えた方向け。CLI の実行制御、config.toml、サブエージェント、自動化までをリファレンスで押さえます。Claude Code との比較も含め、どちらをどの場面で使うかの判断材料まで扱います。",
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
  {
    id: "chat-assistants-selection",
    group: "ai-tools",
    level: "practical",
    title: "ChatGPT / Claude / Gemini を選び分ける",
    description:
      "3つの汎用アシスタントは得意分野もモデル体系も違います。それぞれの現行モデルと料金を押さえ、どの作業をどれに振るかを判断できるようにする学習パスです。",
    steps: [
      {
        ref: "ai-tools/chatgpt/overview",
        note: "ChatGPT の全体像。プランと機能の対応をここで掴む。",
      },
      {
        ref: "ai-tools/chatgpt/models",
        note: "GPT-5.6 の3ティア。同じ世代でも能力と枠が桁で違う。",
      },
      {
        ref: "ai-tools/claude/overview",
        note: "Claude の全体像。Artifacts・Projects・Skills の位置づけ。",
      },
      {
        ref: "ai-tools/claude/model-lineup-2026",
        note: "4階層になったモデル体系。どれを日常使いにするかの判断軸。",
      },
      {
        ref: "ai-tools/gemini/overview",
        note: "Gemini の全体像。長コンテキストと Google 連携が強み。",
      },
      {
        ref: "ai-tools/gemini/model-lineup-2026",
        note: "Flash が3世代進み Pro が止まっている、という非対称を押さえる。",
      },
      {
        ref: "ai-tools/chatgpt/chat-work-codex",
        note: "ChatGPT が持つ3つの面。どこで何をするかが分かれる。",
      },
    ],
  },
  {
    id: "prompt-context-mastery",
    group: "agent-design",
    level: "beginner",
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
    group: "agent-design",
    level: "practical",
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
    group: "agent-design",
    level: "practical",
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
    id: "web-platform-basics",
    group: "web-service",
    level: "beginner",
    title: "Cloudflare / Vercel / Supabase をはじめて触る",
    description:
      "3つのサービスの守備範囲を見比べてから、それぞれの入門コースで実際に1つ公開するまでを扱います。どれか1つを選んでも、3つ並べて違いを掴んでもかまいません。",
    steps: [
      {
        ref: "web-development/platform-choice/choose-cloudflare-vercel-supabase",
        note: "まずここ。3つの役割の違いと、選ぶときの判断軸。",
      },
      {
        ref: "web-development/vercel-curriculum/vercel-01-what-we-build",
        note: "Vercel 入門コース。フロント公開の最短路を体験する。",
      },
      {
        ref: "web-development/supabase-curriculum/supabase-01-what-we-build",
        note: "Supabase 入門コース。データベースと認証を持たせる。",
      },
      {
        ref: "web-development/cloudflare-curriculum/cloudflare-01-what-we-build",
        note: "Cloudflare 入門コース。エッジで動かす構成を掴む。",
      },
      {
        ref: "web-development/supabase-curriculum/supabase-03-rls",
        note: "RLS。ポリシーを書かないテーブルは実質公開になる。ここは飛ばさない。",
      },
      {
        ref: "web-development/vercel-curriculum/vercel-06-protecting-admin",
        note: "Deployment Protection。プレビューURLは既定で公開されている。",
      },
    ],
  },
  {
    id: "cloudflare-supabase-launch",
    group: "web-service",
    level: "practical",
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
    id: "safe-ai-usage",
    group: "security",
    level: "beginner",
    title: "業務でAIを安全に使う（使う側の判断軸）",
    description:
      "ルールを作る側ではなく、日々AIを使う側のための連載です。入力してよいか、回答を信じてよいか、社外に出してよいかを、毎回自分で判断できる状態を目指します。",
    steps: [
      {
        ref: "ai-governance/safe-ai-usage/01-judgment-framework",
        note: "5つの確認点に分解する。ここがシリーズの骨格。",
      },
      {
        ref: "ai-governance/safe-ai-usage/02-copilot-data-handling",
        note: "入力したデータがどう扱われるか。契約形態で変わる。",
      },
      {
        ref: "ai-governance/safe-ai-usage/03-shadow-ai",
        note: "禁止しても使われる。実態から始める。",
      },
      {
        ref: "ai-governance/safe-ai-usage/04-hallucination",
        note: "回答を信じてよいかの見分け方。",
      },
      {
        ref: "ai-governance/safe-ai-usage/05-permissions-and-oversharing",
        note: "AIは権限を突破しない。見つけやすくするだけ。",
      },
      {
        ref: "ai-governance/safe-ai-usage/06-output-and-external-input",
        note: "生成物を使ってよいか、記録してよいかを分ける。",
      },
      {
        ref: "ai-governance/01-overview",
        note: "組織としてルールを作る側に回るなら、ここから統制の話へ。",
      },
    ],
  },
  {
    id: "secure-ai-development",
    group: "security",
    level: "practical",
    title: "AIで作ったものを守る（AI開発セキュリティ実践）",
    description:
      "AIに書かせる量が増えると、レビューを通らずに本番へ出るコードが増えます。エージェントに渡す権限、生成コードのレビュー観点、デプロイ基盤の点検までを扱う全12回の連載です。",
    steps: [
      {
        ref: "security/secure-ai-development/01-attack-surface",
        note: "攻撃面を3層に分ける。残り11回の地図になる。",
      },
      {
        ref: "security/secure-ai-development/02-claude-code-permissions",
        note: "Claude Code の権限設計。何を必ず deny に置くか。",
      },
      {
        ref: "security/secure-ai-development/04-hooks-guardrails",
        note: "Hooks で決定論的に止める。実際に貼って使えるスクリプト集。",
      },
      {
        ref: "security/secure-ai-development/05-mcp-and-prompt-injection",
        note: "MCP と外部連携。lethal trifecta を3つ揃えない設計。",
      },
      {
        ref: "security/secure-ai-development/07-code-review-checklist",
        note: "AI生成コードのレビュー観点と、レビュー依頼の出し方。",
      },
      {
        ref: "security/secure-ai-development/08-authn-authz-review",
        note: "認証・認可。AIに任せると最も壊れやすい場所。",
      },
      {
        ref: "security/secure-ai-development/10-platform-preflight",
        note: "公開直前の点検。3プラットフォーム横断のチェック表。",
      },
      {
        ref: "security/secure-ai-development/11-secrets-and-supply-chain",
        note: "秘密情報と依存パッケージ。漏らさない・拾わない仕組み。",
      },
      {
        ref: "security/secure-ai-development/12-operations-and-incident",
        note: "気づける状態を作り、起きたときに順番を間違えない。",
      },
    ],
  },
];
