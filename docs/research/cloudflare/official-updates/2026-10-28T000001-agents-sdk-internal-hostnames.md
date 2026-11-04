---
date: 2026-10-28
title: "Agents SDK: 公開 URL なしで dev server をブラウザでプレビュー（internal hostnames）"
service: "Agents, Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-10-28-browser-internal-hostnames/
fetched_at: 2026-10-29T09:10:00+09:00
published_at: 2026-10-28
date_precision: date-only
category: enhancement
---

# 2026-10-28 Agents SDK: 公開 URL なしで dev server をブラウザでプレビュー（internal hostnames）

## 公式内容の日本語要約

Agents SDK の永続ブラウザが、`preview.internal` のような内部ホスト名で、コンテナ内の dev server や Worker を公開せずに開けるようになった。各ホストは Durable Object 内の `fetch` で処理され、service binding で別 Worker へ転送もできる。Agents SDK v0.31.0 以上が必要。

## 影響範囲

- 対象: Agents SDK でサイトを作るエージェントの開発者

教材化メモ: 記事化しない（スコア不足 5）。エージェントが自分の成果物を実ブラウザで確認する用途で、公開せずに検証できる点が要点。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-28-browser-internal-hostnames/
- 原文全文は公式ページで確認してください。
