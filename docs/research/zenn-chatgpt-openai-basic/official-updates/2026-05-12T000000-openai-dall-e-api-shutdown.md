---
date: 2026-05-12
title: "OpenAI API — DALL-E 2 / DALL-E 3 API モデルの停止日"
service: "OpenAI API"
source: https://platform.openai.com/docs/deprecations
fetched_at: 2026-05-13T10:01:58+09:00
published_date: 2025-11-14
date_precision: date-only
rollout_date: 2026-05-12
category: policy
---

# 2026-05-12 DALL-E 2 / DALL-E 3 API モデル停止

## 公式内容の日本語要約

OpenAI API の deprecations ページでは、2025年11月14日に DALL-E model snapshots の非推奨化が通知され、2026年5月12日に `dall-e-2` と `dall-e-3` が API から削除されると案内されている。推奨移行先は `gpt-image-1` または `gpt-image-1-mini`。

## できるようになったこと

- 旧 DALL-E API から GPT Image 系モデルへ移行する必要が明確化
- 2026-05-12 以降、対象モデルを呼ぶ実装は失敗する前提で棚卸しが必要

## 影響範囲

- 対象ユーザー: DALL-E 2 / DALL-E 3 を API で利用している開発者
- 対象プラン: OpenAI API
- API / UI / 管理者機能: Images API のモデル指定

## 教材化メモ

画像生成 API のモデル移行教材で、モデル名だけでなく品質・プロンプト適性・料金・レスポンス形式を検証する演習に向く。

## 原文確認

- 公式見出し: 2025-11-14: DALL-E model snapshots
- 公式URL: https://platform.openai.com/docs/deprecations
- 原文全文は公式ページで確認してください。
