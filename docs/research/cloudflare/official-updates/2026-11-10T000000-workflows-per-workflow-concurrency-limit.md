---
date: 2026-11-10
title: "Workflows: Workflow ごとの同時実行数上限"
service: "Cloudflare"
product: "Workflows, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-11-10-per-workflow-concurrency-limits/
fetched_at: 2026-11-11T09:35:00+09:00
published_at: 2026-11-10T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-11-10 Workflows 同時実行上限

## 公式内容の日本語要約

個々の Workflow に `concurrency.limit` を設定し、同時に動くインスタンス数を制限できる。上限超過分は拒否されずキューされる。アカウント上限（Free 100 / Paid 50,000）を超える値は不可。デプロイごとに設定を書かないと上限が外れる。Wrangler 4.127.0 以上が必要。

## 教材化メモ

スコア5で見送り。外部 API・DB 保護の小さな運用機能。同日の Flagship Rust SDK（https://developers.cloudflare.com/changelog/post/2026-11-10-rust-sdk/）はスコア3で見送り。

## 原文確認

- 公式URL: 上記
