---
title: "Claude Code 週次まとめ（5/4〜5/10） — MCP の取りこぼしを塞いだ週。自動モードに絶対ブロックルールが入った"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-05-10
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-05-04 から 05-10 の Claude Code（v2.1.128 / 132 / 136 / 137 / 138）をまとめる。この週の中心は MCP まわりの取りこぼし修正で、`/clear` のあとに MCP サーバー定義が黙って消える問題、複数サーバーを同時にリフレッシュすると OAuth トークンが失われる問題が直った。設定として効くのは `settings.autoMode.hard_deny` で、自動モードの分類器の判断を上書きする絶対ブロックルールを定義できる。ほかはターミナル操作、Windows / WSL、プラグイン配布まわりの安定化が中心で、手元の設定を変える必要はない。"
description: "2026-05-04〜05-10 の Claude Code のパッチをまとめて振り返る。MCP 定義の消失と OAuth トークン喪失の修正、autoMode.hard_deny の追加が中心。"
impact: "MCP サーバーを常用しているチームは、`/clear` 後に定義が消えるという再現性のある不具合が直っているため更新の価値がある。自動モードを運用している組織は hard_deny で「分類器が何と言おうと止める」操作を明示できるようになった。"
tags: ["claude-code", "weekly-rollup", "mcp", "権限管理", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

対応が必要なものは2つです。**MCP サーバーを使っているなら更新してください。** `/clear` のあとに `.mcp.json`・プラグイン・claude.ai コネクタの MCP サーバー定義がサイレントに消える不具合と、複数サーバーを同時にリフレッシュしたときに OAuth トークンが失われる不具合が直りました（2.1.136）。どちらも「気づかないうちに接続が減っている」タイプなので、更新するまで自分では検知しにくい種類の問題です。

もう1つは設定の追加です。**自動モードを組織で運用しているなら `settings.autoMode.hard_deny` を検討してください**（2.1.136）。分類器の判断を上書きして絶対にブロックする操作を定義できます。

それ以外は安定化で、手元の設定を変える必要はありません。

## 変更一覧

**MCP** — `/mcp` で接続サーバーのツール数と 0 ツール状態を確認できるようになりました (2.1.128)。`tools/list` の失敗時に状態が読める表示へ変わり、サーバーの stdout 異常出力でメモリが肥大する問題も直っています (2.1.132)。上記の定義消失・OAuth トークン喪失の修正が 2.1.136 です。

**権限と自動モード** — `autoMode.hard_deny` による絶対ブロックルール (2.1.136)。OTel のセッション品質調査をエンタープライズで再有効化する `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL` も同時に入りました。

**プラグインと worktree** — `.zip` 形式のプラグインアーカイブを `--plugin-dir` で扱えるようになりました (2.1.128)。worktree 作成時の失敗も同版で修正されています。

**ターミナルと環境** — Bash tool のサブプロセスから `CLAUDE_CODE_SESSION_ID` を参照できるようになり、`CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` でフルスクリーン描画を止められるようになりました (2.1.132)。SSH 切断・ターミナル終了時の例外、`--resume` の文字列破損、IME やスクロール操作まわりも同版です。拡張思考でツール呼び出しの後に redacted thinking が続くと API 400 になる問題、プロジェクトパスにアンダースコアを含むと `--resume` がセッションを見つけられない問題、WSL2 での画像ペースト、`@` ファイルピッカーが100件超のディレクトリを扱えない問題は 2.1.136 で直りました。Windows の VSCode 拡張が `activate` に失敗する問題は 2.1.137 です。

## 拾わなかったもの

2.1.138 は公開情報上は内部修正のみで、変更点の記載がありません。ほかにも表示の統一やスペーシング調整など、運用に影響しない修正が各版に含まれています。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
