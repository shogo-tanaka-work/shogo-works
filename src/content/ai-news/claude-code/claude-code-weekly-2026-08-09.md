---
title: "Claude Code 週次まとめ（8/3〜8/9） — 承認ダイアログを欺く経路が3版続けて塞がれた週"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-08-09
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-08-03 から 08-09 の Claude Code（v2.1.221 / 222 / 223）をまとめる。3版すべてに権限チェックの回避経路の修正が入った週で、zsh の `[[ ]]` 正規表現条件文にコマンドを隠す経路、Windows PowerShell でクォートを含むパスが承認をスキップする問題、タブや不可視 Unicode による承認ダイアログの表示偽装、ワークフロースクリプトが動的 `import()` でサンドボックス外を実行できる問題が順に塞がれた。worktree 分離は全セッション種別のファイル編集と Bash に適用され、Remote Control の自動起動はリポジトリ設定から有効化できなくなった。`/review` は `/code-review` のエイリアスへ統合された。"
description: "2026-08-03〜08-09 の Claude Code のパッチをまとめて振り返る。権限チェック回避経路の連続修正、worktree 分離の適用拡大、/review の統合が中心。"
impact: "権限承認を運用の前提にしている組織は、3版にわたって回避経路が修正されているため 2.1.223 以降への更新を推奨する。Remote Control をリポジトリ設定で配布していた場合は有効化経路の作り直しが必要。ultraplan は削除された。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "権限管理", "ai-governance"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**この週は 2.1.223 以降まで上げてください。** 3版すべてに権限チェックの回避経路の修正が入っています。zsh の `[[ ]]` 正規表現条件文にコマンドを隠して Bash tool の権限チェックを迂回する経路 (2.1.221)、Windows PowerShell でクォート文字を含むパスが承認をスキップする問題 (2.1.221)、タブや不可視 Unicode で承認ダイアログの表示を偽装する経路、ワークフロースクリプトが動的 `import()` でサンドボックス外を実行できる問題、エージェント定義の `bypassPermissions` が組織の bypass 無効化ポリシーを無視する問題 (2.1.223) — いずれも**承認画面を信用できるかどうか**に関わります。

**設定の作り直しが要る変更が1つあります。** Remote Control の自動起動を repo-local 設定からオンにできなくなり、`/config` のユーザースコープのみになりました（オフにするのは repo-local でも可能）(2.1.222)。リポジトリ設定で配布していた場合は経路を変える必要があります。

**`ultraplan` は削除されました** (2.1.222)。`/review` は `/code-review` のエイリアスへ統合され、level を省略すると前回値が再利用されます (2.1.223)。

## 変更一覧

**権限とサンドボックス** — 上記の回避経路修正に加え、sandbox の認証情報ファイルに `mode: "mask"` が追加されました（Linux / WSL 向け。macOS は `deny` にフォールバック）(2.1.221)。worktree 分離が全セッション種別のファイル編集と Bash に適用され、隔離セッションやサブエージェントがメインチェックアウトへ破壊的な git コマンドを実行できた問題が直りました (2.1.222)。PreToolUse の auto-allow hook がバックグラウンドタスク（要約・compaction・リネーム）でツール制限を迂回していた問題も同版です。auto mode は `SendMessage` の内容を送信前に分類器で評価します。

**バックグラウンドセッション** — 既定でコミットとプッシュを行い、必要なときだけ draft PR を作成し、最後に成果物の所在を報告するようになりました (2.1.221)。`/fork` したセッションは自前の worktree を作ります。`/status` はセッション種別（`interactive` / `attached` / `unattended`）を表示します。

**コストと統制** — Stats パネルがキャッシュトークンを集計に含め、input / output / cache read / cache write の内訳を出します (2.1.221)。auto mode の権限チェックが会話プレフィックスのキャッシュを再利用してプロンプトキャッシュ費用を減らします。`/usage` の MCP サーバー按分は、実際にツール結果を消費したリクエストのみを対象とするよう修正されました (2.1.222)。`strictKnownMarketplaces` / `blockedMarketplaces` で `"owner/*"` のワイルドカード指定ができます (2.1.223)。

**モデル** — 組織制限下で `model: opus` 系のサブエージェント別名が親モデルへ落ちていた問題が、家族内で最新の許可モデルへ段階的に下がる挙動へ変わりました (2.1.222)。`CLAUDE_CODE_DISABLE_1M_CONTEXT` が 1M ネイティブ対応の全 Claude モデルに適用されます (2.1.223)。

## 拾わなかったもの

VSCode の Focus view、`claude-api` skill の `prompt-audit` サブコマンド、HTTPS プロキシ配下の起動チェックのハング、`/diff` が raw git blob を使う変更など、多数の個別改善があります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
