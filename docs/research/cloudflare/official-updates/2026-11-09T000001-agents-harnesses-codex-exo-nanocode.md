---
date: 2026-11-09
title: "Agents SDK 上で Codex / Exo / Nanocode のエージェントハーネスを実行"
service: "Cloudflare"
product: "Workers, Agents"
source: https://developers.cloudflare.com/changelog/post/2026-11-09-codex-harness/
official_url: https://developers.cloudflare.com/changelog/post/2026-11-09-codex-harness/
fetched_at: 2026-11-10T09:20:00+09:00
published_at: 2026-11-09
date_precision: date-only
category: enhancement
---

# 2026-11-09 Agents ハーネス3件

## 公式内容の日本語要約

Codex のエージェントループ（Rust のターン処理を WebAssembly 化）を Durable Object 上で動かす実験的サンプル。Tasks / Sessions / Streams / Workspace で再起動後の復旧を実現。同日、Exo エージェント（Durable Objects + Sandboxes）と Nanocode コーディングエージェントも Cloudflare 上で動かせるようになった。

## 判定

実験的サンプル中心でスコア5点。記事化せず見送り（スコア不足）。

教材化メモ: 見送りのため、要点のみ。Durable Object による耐久実行（journal 化された再実行）が共通パターン。

## 原文確認

- 公式URL: 上記、Exo / Nanocode は同 changelog 内の個別ポスト
- 原文全文は公式ページで確認してください。
