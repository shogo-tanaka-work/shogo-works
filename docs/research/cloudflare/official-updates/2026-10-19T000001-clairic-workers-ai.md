---
date: 2026-10-19
title: "Clairic: 型付きの値を返す抽出モデルが Workers AI に登場（プレビュー）"
service: "Workers AI"
product: "Workers AI"
source: https://developers.cloudflare.com/changelog/post/2026-10-19-clairic-workers-ai/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-19-clairic-workers-ai/
fetched_at: 2026-10-20T09:10:00+09:00
published_date: 2026-10-19
date_precision: date-only
category: release
---

# 2026-10-19 Workers AI の Clairic

## 公式内容の日本語要約

Cloudflare は、テキストではなく**型付きの値**を返す新クラス「System One」モデルの第1弾として、抽出モデル **Clairic** を Workers AI のプレビューとして公開した。入力を1パスで読み、抽出テキスト（文字オフセット付き）、数値、日付、時刻、期間、リスト、推定値（分布）、予測（ステップごとの推定）を返す。各スカラー回答に `p_null`（入力から値が決まらない確率）と `confidence` が付き、推定と予測は中央値と80%区間を返す。画像は最大4枚まで渡せる。重みは公開予定とされる。

モデル ID は `@cf/cloudflare/clairic`。価格は入力100万トークンあたり **$0.10**、トークン生成がないため出力課金はない。予測は最大64ステップ。プレビューの弱点として、依存する長い算術や多数行の集計は不安定（入力の抽出に使い計算はコードで行うこと）、根拠なしの推定は区間が広い、年のない日付は `reference_date` 指定が必要、と明記されている。利用は `env.AI.run()` または REST の `/ai/run`、AI Gateway 経由も可。

教材化メモ: src/content/ai-news-notes/cloudflare/clairic-workers-ai.mdx

## できるようになったこと

- フォームや文書から型指定で値を抽出し、確信度つきで受け取れる
- 「入力から決まらない」ことを `null` と `p_null` で表現できる

## 影響範囲

- 対象ユーザー: Workers AI を使う開発者
- 対象プラン: 記載なし（従量課金、入力 $0.10 / 100万トークン）
- API / UI / 管理者機能: Workers AI バインディング、REST `/ai/run`、AI Gateway

## 原文確認

- 公式見出し: `Workers AI - Introducing Clairic: an extraction model for typed values, now on Workers AI`
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-19-clairic-workers-ai/
- ブログ: https://blog.cloudflare.com/clairic-extraction-model/
- 原文全文は公式ページで確認してください。
