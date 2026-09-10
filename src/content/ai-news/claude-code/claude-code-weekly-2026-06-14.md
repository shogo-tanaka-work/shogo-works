---
title: "Claude Code 週次まとめ（6/8〜6/14） — 組織のモデル統制がサブエージェントまで効くようになった週"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-06-14
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-06-08 から 06-14 の Claude Code（v2.1.169 / 172 / 173〜175 / 176）をまとめる。この週の軸は組織のモデル利用統制で、`availableModels` の制限がサブエージェント・エージェントディスパッチ・アドバイザーモデルへ適用されていなかった問題が修正され、`enforceAvailableModels` を経て managed 環境で統制が完全に機能するようになった。切り分け用の `--safe-mode`（CLAUDE.md・プラグイン・スキル・フック・MCP を全無効化して起動）と、プロンプトキャッシュを壊さずに作業ディレクトリを移す `/cd` も追加されている。サブエージェントは最大5階層までネストできるようになった。"
description: "2026-06-08〜06-14 の Claude Code のパッチをまとめて振り返る。モデル統制のサブエージェントへの適用、--safe-mode と /cd の追加、5階層ネストが中心。"
impact: "モデルを allowlist で統制している Enterprise / Team 環境は、これまでサブエージェント経由で制限を回避できていた可能性があるため更新が必要。Remote Control 利用時にモデルが予期せず変わる問題も解消された。"
tags: ["claude-code", "weekly-rollup", "ai-governance", "モデル選択", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**モデルを allowlist で統制している組織は更新してください。** `availableModels` の制限が、サブエージェント・エージェントディスパッチ・アドバイザーモデルに適用されていませんでした (2.1.172)。統制を敷いていたつもりでも、サブエージェント経由では別のモデルが使われていた可能性があります。`enforceAvailableModels` を経て、managed 環境で統制が完全に機能するようになったのが 2.1.176 です。Remote Control を使ったときにモデルが予期せず変わる問題も同版で解消しました。

**トラブル時の切り分けが一段楽になりました。** `--safe-mode`（`CLAUDE_CODE_SAFE_MODE`）で CLAUDE.md・プラグイン・スキル・フック・MCP サーバーを全無効化して起動できます (2.1.169)。「設定のどれかが悪さをしている」という状況を一発で切り分けられます。

## 変更一覧

**モデル統制** — サブエージェント等への `availableModels` 適用漏れの修正 (2.1.172)、`enforceAvailableModels` (2.1.173〜175)、managed 環境での統制の完全化と Remote Control でのモデル変化の解消 (2.1.176)。Bedrock は `AWS_REGION` 未設定時に `~/.aws/config` を参照するようになり、`/status` で取得元が見えます (2.1.172)。Bedrock GovCloud の修正も同週です (2.1.173〜175)。

**切り分けと運用** — `--safe-mode`、プロンプトキャッシュを壊さずに作業ディレクトリを移す `/cd`、バンドル済みスキルをモデルから隠す `disableBundledSkills` (2.1.169)。「CLAUDE.md が長すぎる」警告の閾値がモデルのコンテキストウィンドウに応じてスケールするようになりました。

**サブエージェント** — `Agent` ツールを持つサブエージェントが自分のサブエージェントを生成でき、ネストは最大5階層まで (2.1.172)。`claude agents --json` は blocked 状態や直後 dispatch のセッションを含むようになり、`--all` と `id` / `state` フィールドが増えました (2.1.169)。

**権限と MCP** — エンタープライズ管理 MCP ポリシーの適用漏れ（再接続時、`--mcp-config` 指定時、初回セッション、リモート設定読込前）を修正 (2.1.169)。`WebFetch(domain:*.example.com)` のワイルドカードがサブドメインにマッチしない問題、バックグラウンドエージェントが別ディレクトリのプロジェクト設定を誤読する問題も直りました (2.1.172)。hook の `if` 条件がドキュメントどおりに動作するようになったのは 2.1.176 で、セキュリティ用途の hook を設定している場合は影響します。

**可観測性とパフォーマンス** — OTEL の `claude_code.lines_of_code.count` に `model` 属性が付き、モデル別に計測できます (2.1.172)。長い会話でのメッセージ正規化の削減、`/goal` アイドル時の再レンダリング廃止も同版です。1M コンテキストを超えたセッションが永久に詰まる問題も修正されました。

## 拾わなかったもの

セッションタイトルの多言語化、agents ビューのスピナー残り、複数画像を含む会話でのエラー繰り返し、VSCode の PowerShell ツール表示など、表示まわりの修正が多数あります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
