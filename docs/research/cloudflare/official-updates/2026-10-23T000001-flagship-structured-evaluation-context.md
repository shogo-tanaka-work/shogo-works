---
date: 2026-10-23
title: "Flagship が構造化された評価コンテキストでのターゲティングに対応"
service: "Flagship"
source: https://developers.cloudflare.com/changelog/post/2026-10-23-structured-evaluation-context/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-23-structured-evaluation-context/
fetched_at: 2026-10-24T09:10:00+09:00
published_date: 2026-10-23
date_precision: date-only
category: enhancement
---

# 2026-10-23 Flagship の構造化評価コンテキスト

## 公式内容の日本語要約

Flagship のフィーチャーフラグが、評価コンテキストでネストしたオブジェクト・配列・`null` を扱えるようになった。ユーザープロファイルやタグ一覧をそのまま渡し、`profile.plan equals "enterprise"` のようなドット区切りパスや、配列用の `has` / `not_has` 演算子でターゲティングできる。パーセンテージロールアウトも `profile.id` のようなネストした識別子で行える。

Workers バインディング、JSON POST の評価 REST API、OpenFeature SDK（TypeScript / Python / Go、0.6.0 以降）で動く。

記事化判断: 見送り（スコア不足・5点）。1 / 1 / 1 / 0 / 2。開発者向けの小さな機能拡張。

## 原文確認

- 公式見出し: Flagship - Target Flagship feature flags with structured evaluation context
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-23-structured-evaluation-context/
- 原文全文は公式ページで確認してください。
