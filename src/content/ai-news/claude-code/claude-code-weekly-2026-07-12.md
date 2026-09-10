---
title: "Claude Code 週次まとめ（7/6〜7/12） — Bedrock / Vertex / Foundry の既定モデルが Opus 4.8 へ。`/doctor` が診断から修復まで担うように"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-07-12
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-07-06 から 07-12 の Claude Code（v2.1.202 / 203 / 205 / 206 / 207）をまとめる。クラウドプロバイダー経由の利用に大きな変更があり、Bedrock / Vertex AI / Claude Platform on AWS の既定モデルが Claude Opus 4.8 になった。Auto mode は同プロバイダー上で opt-in なしに使えるようになり（`disableAutoMode` で無効化可）、設定の読み込み元もプロジェクト単位からユーザー単位へ移った。プラグインの hooks では `${user_config.*}` の直接展開が拒否されるようになり、これは破壊的変更にあたる。`/doctor` は診断と修復まで行う総合セットアップチェックへ強化された。"
description: "2026-07-06〜07-12 の Claude Code のパッチをまとめて振り返る。Bedrock / Vertex / Foundry の既定モデル変更、Auto mode の opt-in 撤廃、/doctor の強化が中心。"
impact: "Bedrock / Vertex / Foundry 経由で使っている組織は、既定モデルと Auto mode の前提が変わるため方針の確認が必要。プラグインを配布している開発者は `${user_config.*}` の直接展開が拒否されるため、破壊的変更への追従が要る。"
tags: ["claude-code", "weekly-rollup", "モデル選択", "権限管理", "plugin"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**Bedrock / Vertex AI / Foundry 経由で使っているなら、前提が2つ変わりました** (2.1.207)。既定モデルが **Claude Opus 4.8** になり、**Auto mode が opt-in なしで使える**ようになりました。Auto mode を使わせたくない場合は `disableAutoMode` を設定します。あわせて Auto mode 設定の読み込み元が、プロジェクト単位からユーザー単位（`~/.claude/settings.json`）へ移りました。プロジェクトごとに配っていた場合は効かなくなります。

**プラグインを配布しているなら破壊的変更があります。** hooks 等での `${user_config.*}` の直接展開が拒否されるようになりました (2.1.207)。シェルインジェクション対策です。

**MCP サーバー名に「Claude Browser」を使っている場合は予約名になりました** (2.1.205)。ユーザー設定では使えません。

## 変更一覧

**モデルと Auto mode** — 既定モデルの Opus 4.8 化、Auto mode の opt-in 撤廃、設定読み込み元のユーザー単位化 (2.1.207)。Auto mode はセッション文書の改ざんをブロックし、`rm -rf` の変数が解決できないときは確認を挟むようになりました (2.1.205)。

**`/doctor`** — 診断だけでなく修復まで行う総合セットアップチェックへ (2.1.205)。チェックイン済みの CLAUDE.md に対して削減提案も出します (2.1.206)。外部管理のランチャーも検知します (2.1.207)。

**ワークフローと可観測性** — `/config` に Dynamic workflow size（small / medium / large）が入り、ワークフローが使うエージェント数の目安を指定できます。OTel には `workflow.run_id` / `workflow.name` 属性が付きました (2.1.202-203)。ログイン期限切れ前の警告と、手動権限モード時のフッターバッジも同版です。

**Gateway と worktree** — Gateway が Anthropic 運営の公開エンドポイントへの `/login` に対応しました。`/cd` にディレクトリパス補完、`/commit-push-pr` は設定済みリモートへの `git push` を自動許可、`EnterWorktree` はプロジェクト外の worktree に入るとき確認を求めます (2.1.206)。

**バックグラウンドエージェント** — 応答不能、PATH の継承、`ANTHROPIC_BASE_URL` の消失、デーモン自動アップグレード時に全セッションが止まる問題を修正 (2.1.202-203)。Claude Code 本体の更新後に自動アップグレードされるようになりました (2.1.206)。

**MCP** — `roots/list` が追加の作業ディレクトリを反映し、変更通知を送るようになりました (2.1.202-203)。

## 拾わなかったもの

`/review <pr>` の挙動の差し戻し、Remote Control の添付消失、オートアップデータのメモリ削減（約400MB）など、細かな改善が多数あります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
