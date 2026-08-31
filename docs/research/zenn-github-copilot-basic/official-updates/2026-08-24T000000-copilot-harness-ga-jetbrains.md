---
date: 2026-08-24
title: "Copilot harness が Copilot for JetBrains で一般提供"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-24-copilot-harness-generally-available-in-copilot-for-jetbrains/
fetched_at: 2026-08-31T09:40:00+09:00
published_at: 2026-08-24T00:00:00Z
date_precision: date-only
category: release
---

# 2026-08-24 Copilot harness が JetBrains で一般提供

## 公式内容の日本語要約

JetBrains IDE 向け GitHub Copilot のエージェント基盤である **Copilot harness が、プレビューから一般提供へ移行**した。公式は「より速い機能提供とコード品質の向上」を理由に挙げている。

あわせて、**JetBrains 内から `/review` によるコードレビューを実行**できるようになった。**組み込み MCP サーバーのサポートがパブリックプレビュー**として入り、IDE の機能をエージェントのワークフローへ公開できる。プラグイン更新後に「What's New」タブが自動で開く導線も追加された。

管理者側の必須作業はない。利用者は JetBrains マーケットプレースから最新のプラグインへ更新する。

## できるようになったこと

- JetBrains IDE で Copilot harness を既定で利用できる
- JetBrains 内で `/review` によるコードレビューを実行できる
- 組み込み MCP サーバー経由で IDE 機能をエージェントへ公開できる（パブリックプレビュー）

## 影響範囲

- 対象ユーザー: JetBrains IDE（IntelliJ / PyCharm 等）で Copilot を使う開発者
- 対象プラン: Copilot 利用者全般
- API / UI / 管理者機能: IDE プラグイン

## 教材化メモ

- **IDE 側が MCP サーバーになる**という方向は、MCP を「外部サービスを AI へ繋ぐもの」と説明してきた教材の前提を広げる。IDE が持つ参照・編集・実行の機能をエージェントへ公開する側に回る形で、クライアントとサーバーの役割が固定でないことを示す実例になる。
- 記事化はしない（週次確認ソースの通常更新）。

## 原文確認

- 公式見出し: Copilot harness generally available in Copilot for JetBrains（2026-08-24）
- 公式URL: https://github.blog/changelog/2026-08-24-copilot-harness-generally-available-in-copilot-for-jetbrains/
- 原文全文は公式ページで確認してください。
