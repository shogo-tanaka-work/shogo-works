# Claude Code / Codex 記事量産ロードマップ

目的: 公式ドキュメントを一次ソースに、`ai-tools/claude-code/` と `ai-tools/codex/` サブカテゴリ配下の記事を量産する。
本ドキュメントは見出し（h2）レベルの構成案。本文執筆は別フェーズ。

作成日: 2026-04-14
ソース: `web-researcher` × 2並列で公式ドキュメント網羅調査済み（生レポートは会話履歴を参照）

---

## 0. 前提

- 既存記事: `claude-code/overview.mdx`（sortOrder: 0）/ `codex/overview.mdx`（sortOrder: 0）
- 各サブカテゴリは「overview = 全体像入口」「以降の記事は機能別の深掘り」という棲み分け
- 文体・トーンは既存 overview.mdx に揃える（です・ます調、10セクション構成は必須ではない）
- 一次情報URLは記事末尾「参考リンク」に必ず記載
- 料金・バージョンは執筆時点の日付を必ず明記

## 1. 推奨第1バッチ（Claude Code 5本 + Codex 5本）

最初に書く価値が高い10本。既存 overview の周辺で「overview から自然に飛べる深掘り記事」になる構成。

---

### CC-01: CLAUDE.md 完全ガイド — チームの知識をAIに継承する

- **ファイル**: `claude-code/claude-md-guide.mdx`
- **sortOrder**: 1
- **対象読者**: 初〜中級
- **想定文字数**: 中（~5,000字）
- **一次ソース**:
  - https://code.claude.com/docs/en/memory
  - https://code.claude.com/docs/en/claude-directory

**見出し構成**:

1. ## CLAUDE.md とは何か
2. ## 3つのスコープ（project / user / enterprise）の使い分け
3. ## 最小構成のサンプル
4. ## 実用的なセクション設計（コーディング規約 / 禁止事項 / 基本コマンド）
5. ## path-specific rules — ディレクトリ別ルールの書き方
6. ## Auto Memory の仕組みと挙動
7. ## CLAUDE.md が読み込まれない時のトラブルシュート
8. ## チームで運用する際のレビュー・更新フロー
9. ## まとめ
10. ## 参考リンク

---

### CC-02: Claude Code Hooks 完全リファレンス — 28イベントと4タイプを使いこなす

- **ファイル**: `claude-code/hooks-reference.mdx`
- **sortOrder**: 2
- **対象読者**: 中〜上級
- **想定文字数**: 長（~10,000字）
- **一次ソース**:
  - https://code.claude.com/docs/en/hooks
  - https://code.claude.com/docs/en/hooks-guide

**見出し構成**:

1. ## Hooks とは何か（コードを書かずにClaude Codeを賢くする）
2. ## 4つのHookタイプ（command / http / prompt / agent）
3. ## 28イベント全リスト（PreToolUse / PostToolUse / SessionStart / ...）
4. ## 設定ファイルの書き方（`.claude/settings.json` の例）
5. ## exit code による制御フロー
6. ## Conditional Hooks（`if` フィールド）で発火条件を絞る
7. ## 実用例1: Bash 実行前の auto-format
8. ## 実用例2: コミット前 lint 自動化
9. ## 実用例3: Prompt Hook で LLM がレスポンスを審査
10. ## 落とし穴と運用のコツ
11. ## 参考リンク

---

### CC-03: Claude Code Skills 入門 — SKILL.md でチーム共有マクロを作る

- **ファイル**: `claude-code/skills-introduction.mdx`
- **sortOrder**: 3
- **対象読者**: 初〜中級
- **想定文字数**: 中（~5,000字）
- **一次ソース**:
  - https://code.claude.com/docs/en/skills
  - https://code.claude.com/docs/en/commands

**見出し構成**:

1. ## Skills とは（slash commandsとの違い）
2. ## SKILL.md の基本構造
3. ## フロントマター全フィールド一覧
4. ## 最初のスキル「commit-helper」を作る
5. ## `$ARGUMENTS` で引数を受け取る
6. ## `` !`command` `` による動的コンテキスト注入
7. ## スコープ管理（project / user）
8. ## チーム配布の方法（git管理 / プラグイン化）
9. ## まとめ
10. ## 参考リンク

---

### CC-04: Claude Code サブエージェント完全ガイド — タスクを並列化する

- **ファイル**: `claude-code/sub-agents-guide.mdx`
- **sortOrder**: 4
- **対象読者**: 中〜上級
- **想定文字数**: 中（~5,000字）
- **一次ソース**:
  - https://code.claude.com/docs/en/sub-agents
  - https://code.claude.com/docs/en/agent-teams

**見出し構成**:

1. ## サブエージェントとは
2. ## ユースケース（並列リサーチ / 独立した品質チェック / コンテキスト隔離）
3. ## エージェント定義ファイルの書き方（`.claude/agents/*.md`）
4. ## フロントマター詳解（`isolation` / `permissionMode` / `mcpServers` / `hooks`）
5. ## メインClaudeからの呼び出し方
6. ## 並列で複数エージェントを起動するコツ
7. ## サブエージェント vs Agent Teams の違い
8. ## 実例: fact-checker と technical-editor を並列で動かす
9. ## トークンコスト試算と最適化
10. ## 参考リンク

---

### CC-05: Claude Code × MCP 入門 — 外部ツールを接続する最短ルート

- **ファイル**: `claude-code/mcp-introduction.mdx`
- **sortOrder**: 5
- **対象読者**: 中級
- **想定文字数**: 中（~5,000字）
- **一次ソース**:
  - https://code.claude.com/docs/en/mcp
  - https://code.claude.com/docs/en/agent-sdk/mcp

**見出し構成**:

1. ## MCP（Model Context Protocol）とは
2. ## なぜ Claude Code は MCP を採用したか
3. ## MCPサーバーの追加方法（CLI / 設定ファイル）
4. ## 公式・サードパーティ MCP サーバー一覧
5. ## 実例1: GitHub MCP で Issue を読み書きする
6. ## 実例2: Playwright MCP でブラウザを操作する
7. ## セキュリティ設定（allowlist / scope）
8. ## トラブルシュート（接続エラー / トークン枯渇）
9. ## まとめ
10. ## 参考リンク

---

### CX-01: Codex CLI Quickstart — インストールから初回タスクまで

- **ファイル**: `codex/cli-quickstart.mdx`
- **sortOrder**: 1
- **対象読者**: 初心者
- **想定文字数**: 短（~2,000字）
- **一次ソース**:
  - https://developers.openai.com/codex/quickstart
  - https://github.com/openai/codex

**見出し構成**:

1. ## Codex CLI とは（5秒で説明）
2. ## 必要要件（Node.js / OS / アカウント）
3. ## インストール（npm / Homebrew / 直接ダウンロード）
4. ## 初回起動と認証
5. ## 最初のタスクを投げる
6. ## TUI の基本操作
7. ## トラブルシュート（よくあるエラー）
8. ## 参考リンク

---

### CX-02: Codex CLI 全機能解説 — TUI・セッション管理・画像添付・Webサーチ

- **ファイル**: `codex/cli-features.mdx`
- **sortOrder**: 2
- **対象読者**: 中級
- **想定文字数**: 中（~5,000字）
- **一次ソース**:
  - https://developers.openai.com/codex/cli/features
  - https://developers.openai.com/codex/cli/reference

**見出し構成**:

1. ## CLI の全体像
2. ## TUI モード vs 非インタラクティブモード
3. ## セッション管理（再開・履歴）
4. ## 画像添付の使い方
5. ## Webサーチ機能（cached / live モード）
6. ## `/model` でモデルを切り替える
7. ## スラッシュコマンド全リスト
8. ## CLIフラグ早見表
9. ## まとめ
10. ## 参考リンク

---

### CX-03: Codex 設定ファイル（config.toml）完全リファレンス

- **ファイル**: `codex/config-toml-reference.mdx`
- **sortOrder**: 3
- **対象読者**: 中級
- **想定文字数**: 中（~5,000字）
- **一次ソース**:
  - https://developers.openai.com/codex/config-basic
  - https://developers.openai.com/codex/config-advanced
  - https://developers.openai.com/codex/config-reference
  - https://developers.openai.com/codex/config-sample

**見出し構成**:

1. ## config.toml の役割
2. ## ファイルの場所（global / project）
3. ## 基本セクション（model / approval_policy / sandbox_mode）
4. ## `[mcp_servers]` セクション
5. ## `[shell_environment_policy]` で環境変数を制御する
6. ## `[history]` `[tui]` `[otel]` セクション
7. ## サンプル設定（個人開発用 / チーム用 / Enterprise用）
8. ## トラブルシュート（設定が反映されない時）
9. ## 参考リンク

---

### CX-04: Codex MCP サーバー連携 — Figma・Playwright を接続する

- **ファイル**: `codex/mcp-integration.mdx`
- **sortOrder**: 4
- **対象読者**: 上級
- **想定文字数**: 中（~5,000字）
- **一次ソース**:
  - https://developers.openai.com/codex/mcp
  - https://developers.openai.com/codex/config-advanced

**見出し構成**:

1. ## Codex における MCP の位置付け
2. ## MCPサーバーを追加する2つの方法（`codex mcp add` / config.toml）
3. ## STDIO トランスポート vs HTTP トランスポート
4. ## allowlist で権限を絞る
5. ## 実例1: Figma MCP でデザイン情報を読む
6. ## 実例2: Playwright MCP でブラウザ操作
7. ## Enterprise 環境でのMCP制限
8. ## トラブルシュート
9. ## 参考リンク

---

### CX-05: Codex Sandbox の仕組みと設定 — ファイルシステム・ネットワーク隔離

- **ファイル**: `codex/sandboxing-deep-dive.mdx`
- **sortOrder**: 5
- **対象読者**: 上級
- **想定文字数**: 中（~5,000字）
- **一次ソース**:
  - https://developers.openai.com/codex/concepts/sandboxing
  - https://developers.openai.com/codex/agent-approvals-security

**見出し構成**:

1. ## Sandbox がなぜ必要か
2. ## OS別の実装の違い（macOS / Linux / Windows）
3. ## `sandbox_mode` の3レベル（read-only / workspace-write / danger-full-access）
4. ## ネットワーク許可リストの設定
5. ## `approval_policy` との関係
6. ## 落とし穴: サンドボックスで通ったテストが本番で落ちるケース
7. ## セキュリティ運用のベストプラクティス
8. ## 参考リンク

---

## 2. 第2バッチ以降のバックログ

詳細な見出し構成は執筆フェーズで作成。第1バッチ完了後、必要に応じて優先順位を再評価する。

### Claude Code バックログ

| # | タイトル | 優先度 | 一次ソース |
|---|---|---|---|
| CC-06 | Claude Code Plugins 開発入門 | 高 | `/plugins`, `/plugins-reference` |
| CC-07 | Plan Mode と Ultraplan の使い分け | 高 | `/ultraplan` |
| CC-08 | Headless モード — CI/スクリプト統合 | 高 | `/headless`, `/cli-reference` |
| CC-09 | Claude Code × GitHub Actions 完全実装 | 高 | `/github-actions`, `/code-review` |
| CC-10 | Claude Agent SDK 入門（Python / TypeScript） | 中 | `/agent-sdk/overview` |
| CC-11 | Agent Teams 実践 — マルチClaude協調 | 中 | `/agent-teams` |
| CC-12 | パーミッションモード完全解説 | 中 | `/permission-modes` |
| CC-13 | スケジュールタスク完全解説（Web/Desktop/loop） | 中 | `/web-scheduled-tasks`, `/scheduled-tasks` |
| CC-14 | コスト最適化（Effort Level / キャッシュ / Plan Mode） | 中 | `/costs`, `/model-config` |
| CC-15 | Channels — Slack/Telegram/Webhook連携 | 中 | `/channels` |
| CC-16 | Computer Use 実践（Desktop / CLI） | 中 | `/computer-use` |
| CC-17 | Managed Agents 公開ベータ徹底解説 | 中 | Anthropic公式アナウンス |
| CC-18 | Bedrock / Vertex AI / Foundry 経由の利用 | 低 | `/amazon-bedrock`, `/google-vertex-ai` |
| CC-19 | Enterprise Managed Settings | 低 | `/server-managed-settings` |
| CC-20 | Agent SDK × OpenTelemetry でのObservability | 低 | `/agent-sdk/observability` |

### Codex バックログ

| # | タイトル | 優先度 | 一次ソース |
|---|---|---|---|
| CX-06 | Codex IDE拡張（VS Code/Cursor/Windsurf） | 高 | `/codex/ide`, `/codex/ide/features` |
| CX-07 | Codex Web クラウドエージェント入門 | 高 | `/codex/cloud`, `/codex/cloud/environments` |
| CX-08 | Codex app for macOS 完全ガイド | 高 | `/codex/app`, `/codex/app/features` |
| CX-09 | `codex exec` で CI/CD に組み込む | 高 | `/codex/noninteractive`, `/codex/github-action` |
| CX-10 | Codex GitHub Action — PR自動レビュー | 高 | `/codex/github-action`, `/codex/integrations/github` |
| CX-11 | Codex Agent Skills 入門 | 中 | `/codex/skills` |
| CX-12 | Codex Plugins — スキルをパッケージ化 | 中 | `/codex/plugins`, `/codex/plugins/build` |
| CX-13 | Codex Automations — スケジュール実行 | 中 | `/codex/app/automations` |
| CX-14 | Codex × Slack 連携 | 中 | `/codex/integrations/slack` |
| CX-15 | Codex × Linear 連携 | 中 | `/codex/integrations/linear` |
| CX-16 | Codex SDK（TypeScript）入門 | 中 | `/codex/sdk` |
| CX-17 | Codex Agents SDK 連携 | 中 | `/codex/guides/agents-sdk` |
| CX-18 | Codex モデル選択ガイド（5.3 / 5.3-Spark / 5.4） | 中 | `/codex/models` |
| CX-19 | Codex 料金体系完全解説（トークンベース移行後） | 中 | `/codex/pricing`, Help Center rate card |
| CX-20 | Codex Prompting Guide / PLANS.md 設計 | 低 | Cookbook記事群 |
| CX-21 | Codex Enterprise 導入ガイド | 低 | `/codex/enterprise/admin-setup` |
| CX-22 | Codex OpenTelemetry 設定 | 低 | `/codex/config-advanced` |
| CX-23 | Codex Windows 対応の実態 | 低 | `/codex/windows`, `/codex/app/windows` |

## 3. シリーズ化案

執筆が進んだら、関連記事をシリーズとしてまとめてindexページで導線を作る。

### Claude Code シリーズ

- **Hooks 完全マスター 全5回**: CC-02を起点に、`PreToolUse`実例、Prompt/Agent Hook、Conditional Hooks、Channels連携
- **Skills & Plugins 全4回**: CC-03 → 動的コンテキスト → プラグイン化 → マーケットプレイス
- **エージェント設計パターン 全5回**: CC-04 → CC-11 → CC-10 → CC-17 → コスト最適化
- **CI/CD 統合 全4回**: CC-08 → CC-09 → GitLab CI → `/autofix-pr`
- **エンタープライズ展開 全4回**: CC-19 → ネットワーク → セキュリティ → Analytics

### Codex シリーズ

- **Codex CLI 完全マスター 全5回**: CX-01 → CX-02 → CX-03 → CX-11 → CX-09
- **Codex クラウドエージェント実践 全4回**: CX-07 → CX-05 → CX-04 → CX-13
- **Codex × インテグレーション 全4回**: CX-10 → CX-14 → CX-15 → CX-09
- **Codex モデル進化史 全3回**: 5.0系の振り返り → CX-18 → 5.4統合の意味
- **Codex Enterprise 展開 全3回**: CX-21 → 承認ポリシー → CX-22

## 4. 執筆ポリシー（共通）

- 1記事 = 1テーマ。複数機能を詰め込まない
- 公式ドキュメントの英語をそのまま訳すのではなく、**実例 + ハマりポイント**を入れる
- コードブロックは必ず動作確認したものを載せる（仮説で書かない）
- 料金・モデル名・URL は執筆時点の日付を記事冒頭に明記
- 既存 `overview.mdx` から各記事への導線を後で追加する
- frontmatter の `subcategory` は親ディレクトリ名と一致させる（バリデーション対象）

## 5. 次のアクション

1. **このロードマップをレビュー**（タイトル / 優先度 / 抜け漏れ）
2. レビュー結果を踏まえて第1バッチの並びと内容を確定
3. 第1バッチを `web-researcher` 並列でリサーチ → 執筆 → fact-checker / technical-editor で品質チェック
4. PR作成・マージ
5. 第2バッチ以降を順次

## 6. 参考: 主要な公式エントリポイント

### Claude Code

- ドキュメント全体: https://code.claude.com/docs/en/overview
- llms.txt（全ページ一覧）: https://code.claude.com/docs/llms.txt
- 週次ダイジェスト: https://code.claude.com/docs/en/whats-new/index
- Changelog: https://code.claude.com/docs/en/changelog
- GitHub: https://github.com/anthropics/claude-code

### Codex

- ドキュメント全体: https://developers.openai.com/codex
- Cookbook（Codexトピック）: https://developers.openai.com/cookbook/topic/codex
- Changelog: https://developers.openai.com/codex/changelog
- 料金: https://developers.openai.com/codex/pricing
- GitHub: https://github.com/openai/codex
