---
date: 2026-08-13
title: "Sheets canvas — 自然言語で読み書き可能なミニアプリを作る"
service: "Gemini / Workspace"
source: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html
fetched_at: 2026-08-14T08:56:00+09:00
published_at: 2026-08-13
date_precision: date-only
rollout_date: 2026-08-10
category: release
---

# 2026-08-13 Sheets canvas

## 公式内容の日本語要約

Google スプレッドシートに **Sheets canvas** が入った。Gemini を使い、自然言語のプロンプトからスプレッドシートを「カスタムの対話的な読み書き可能アプリケーション」に変える機能である。かんばんボード、ダッシュボード、ホワイトボードといった形をコーディングなしで作れる。

重要なのは**読み書きが双方向**である点。canvas 上での変更は元のシートへリアルタイムに反映され、シート側の変更も canvas に反映される。表示専用のダッシュボードではなく、入力面としても使える。

対象エディションは Business Standard / Plus、Enterprise Standard / Plus、消費者向けの Google AI Pro / Ultra、教育向け、アドオンの AI Expanded Access。

ロールアウトは **Rapid Release ドメインが 2026-08-10 開始**（15 日以上かかる可能性）、**Scheduled Release ドメインが 2026-08-31 開始**（最大 15 日）。

管理者は Gemini in Sheets の設定からアクセスを管理する。Workspace のスマート機能が有効になっていることが前提で、ユーザーごとの利用上限が適用される。

## できるようになったこと

- 自然言語のプロンプトからかんばん・ダッシュボード・ホワイトボードをコーディングなしで作れる
- canvas とシートの変更が双方向にリアルタイム同期する
- 管理者は Gemini in Sheets の設定でアクセスを制御できる

## 影響範囲

- 対象ユーザー: Google スプレッドシート利用者
- 対象プラン: Business Standard / Plus、Enterprise Standard / Plus、Google AI Pro / Ultra、教育向け、AI Expanded Access アドオン
- API / UI / 管理者機能: スプレッドシートの canvas UI、Gemini in Sheets 設定（管理者）、Workspace スマート機能が前提

教材化メモ: src/content/ai-news-notes/gemini/workspace-gemini-meetings-and-sheets-canvas.mdx

## 原文確認

- 公式見出し: Use Sheets canvas to visualize data in custom, interactive mini-apps
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/use-google-sheets-canvas-to-visualize-data.html
- 原文全文は公式ページで確認してください。
