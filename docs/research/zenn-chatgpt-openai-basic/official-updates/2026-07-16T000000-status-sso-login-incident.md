---
date: 2026-07-16
title: "OpenAI Status — SSOログインのエラー率上昇（短時間障害、解消済み）"
service: "ChatGPT / OpenAI"
source: https://status.openai.com/history
fetched_at: 2026-07-17T08:50:00+09:00
published_at: 2026-07-16T15:23:00Z
date_precision: date-only
category: incident
---

# 2026-07-16 OpenAI Status — SSOログインのエラー率上昇

## 公式内容の日本語要約

OpenAI Statusに「Elevated Error Rates For SSO Login」というインシデントが記録された。SSOログイン時のエラー率が一時的に上昇したが、短時間で解消（Resolved）した。開始時刻の表記は環境によって取得結果が揺れ、正確なタイムゾーンをWebFetch経由では特定しきれなかった（`status.openai.com`本体はWebFetchで403になることがあり、履歴ページのスニペット経由で確認）。

## できるようになったこと

該当なし（障害インシデントのため機能追加はなし）。

## 影響範囲

- 対象ユーザー: SSOでログインするChatGPT/OpenAIユーザー
- 対象プラン: 全プラン
- API / UI / 管理者機能: 認証（SSOログイン）

## 教材化メモ

短時間で解消したインシデントのため記事化は見送り。研究ログとしてのみ記録。

## 原文確認

- 公式見出し: Elevated Error Rates For SSO Login
- 公式URL: https://status.openai.com/history （個別インシデントページのURLは検索結果からは直接特定できず、履歴一覧からの確認に留まる）
- 原文全文は公式ページで確認してください。
