---
date: 2026-08-19
title: "Google Chat に Ask Gemini を導入 — Gemini サイドパネルは英語で提供終了、2026-08-26 から段階展開"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/08/ask-gemini-in-chat.html
fetched_at: 2026-08-20T09:20:00+09:00
published_at: 2026-08-19
date_precision: date-only
rollout_date: 2026-08-26
category: release
---

# 2026-08-19 Ask Gemini in Chat

## 公式内容の日本語要約

Google Workspace が、Google Chat に **Ask Gemini** を導入すると発表しました。Workspace Intelligence を基盤とする統合コマンドラインで、Chat の会話から離れずに Workspace 全体のデータを扱えるようにするものです。

できることは、Gmail / Drive / カレンダーなど Workspace データの横断検索、コンテンツ生成、会話の要約とキャッチアップ、タスクと予定の作成・管理、トピックごとのセッション構成です。これまで「Chat を離れて別アプリを開く」必要があった操作を、Chat 内のコマンド入力に集約する設計になっています。

**重要な移行点として、Chat の Gemini サイドパネルは英語ユーザー向けに提供終了します。** 会話履歴は自動では移行されず、必要な場合は管理者が Data Export ツールでエクスポートする必要があります。またプロモーション期間の利用上限は 2026-10-01 まで適用され、それ以降は恒久的な上限に切り替わります。

対象エディションは Business Standard / Business Plus、Enterprise Standard / Enterprise Plus、および Education 向けの Google AI Pro for Education アドオンです。

展開は **2026-08-26 開始の段階的ロールアウト**で、Rapid Release ドメインと Scheduled Release ドメインの双方に適用されます。機能が見えるようになるまで最大15日かかるとされています。

## できるようになったこと

- Google Chat 内から Workspace データ（Gmail / Drive / カレンダー）を横断検索
- Chat を離れずにコンテンツ生成、会話の要約・キャッチアップ、タスクと予定の作成
- トピック単位のセッションで会話を整理

## 影響範囲

- 対象ユーザー: Business Standard / Plus、Enterprise Standard / Plus、Education（Google AI Pro for Education アドオン）
- 対象プラン: 上記エディション。プロモーション上限は 2026-10-01 まで、以降は恒久上限
- API / UI / 管理者機能: Chat の Gemini サイドパネルが英語で提供終了。履歴は自動移行されず、Data Export ツールでの退避は管理者作業。ロールアウトは 2026-08-26 開始、可視化まで最大15日

教材化メモ: src/content/ai-news-notes/gemini/ask-gemini-in-chat.mdx

## 原文確認

- 公式見出し: Introducing Ask Gemini in Chat: your new partner in productivity
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/ask-gemini-in-chat.html
- 原文全文は公式ページで確認してください。
