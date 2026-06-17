---
date: 2026-06-16
title: "Gemini app — 一時チャット・会話削除の管理者制御追加"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/06/temporary-chats-and-conversation-deletion-control-for-gemini.html
fetched_at: 2026-06-17T10:00:00+09:00
published_at: 2026-06-16T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-06-16 Gemini app 一時チャット・会話削除の管理者制御

## 公式内容の日本語要約

管理者が Gemini app における「一時チャット（履歴に保存されない）」の利用可否と、ユーザーによる個別または全会話履歴の削除可否を制御できる新しい管理コントロールが追加された。コンプライアンス・データ管理用途を想定。Google Vault の保持ルールが設定されている場合は常に Vault の設定が優先される。管理者側のコントロールは 2026-06-15 から展開開始（5〜7 日で完了）、エンドユーザー向けの一時チャット機能自体は 2026-06-21 以降に展開予定。

## できるようになったこと

- 管理者がドメイン・OU・グループ単位で一時チャット機能を無効化可能
- 管理者がユーザーによる会話履歴の削除（個別・全件）を無効化可能
- Google Vault 保持ルールとの整合性を確保（Vault 優先）

## 影響範囲

- 対象ユーザー: 全 Google Workspace プラン
- 対象プラン: 全プラン
- API / UI / 管理者機能: 管理コンソールで OU・グループ単位の制御あり。エンドユーザー向け機能自体は 2026-06-21 以降展開

## 教材化メモ

Gemini app のコンプライアンス・データガバナンス管理の実例。企業向け Gemini 導入時の情シス・法務チェックリストに追記候補。

## 原文確認

- 公式見出し: Control whether your users can have temporary chats and delete conversations in the Gemini app
- 公式URL: https://workspaceupdates.googleblog.com/2026/06/temporary-chats-and-conversation-deletion-control-for-gemini.html
- 原文全文は公式ページで確認してください。
