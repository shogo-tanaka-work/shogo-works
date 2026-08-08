---
date: 2026-08-06
title: "Building an open Agentic Internet — エージェント向けWebの4本柱"
service: "Cloudflare"
source: https://blog.cloudflare.com/the-agentic-internet/
fetched_at: 2026-08-07T10:00:00+09:00
published_at: 2026-08-06T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-08-06 Building an open Agentic Internet

## 公式内容の日本語要約

Cloudflare が「Agentic Internet」という枠組みを提示し、同日公開の複数発表を束ねる親記事として公開した。主張は「エージェントは新しい種類のソフトウェアではなく、新しい種類の訪問者である」というもので、従来のボット対策の延長でエージェントを一律ブロックすると顧客そのものを締め出すことになる、という立て付けになっている。

サイト側が備えるべき性質を4本柱に整理している。**Readable**（エージェントが読める形で配信する。Markdown for Agents、Kitesurf ブラウザ）、**Discoverable**（見つけてもらう。AI Search、AEO）、**Callable**（ツールとして呼び出せる。WebMCP、Code Mode）、**Payable**（支払いを受け取れる。Wallets、Monetization Gateway）。

支える標準として Web Bot Auth（暗号的なボット識別）、PACT（Private Access Control Tokens）、x402（直接決済）、MCP を挙げる。Cloudflare は中立なインフラ層として、囲い込みではなくオープン標準による publisher とエージェントの協調を目指す、という位置づけを取っている。

同日には Kitesurf、次世代 MCP、AI Search 刷新、WebMCP、Agent Readiness / AEO が個別記事として公開されており、本記事はそれらの索引兼ビジョン提示にあたる。単体の新機能発表ではない。

## できるようになったこと

- 個別発表（Kitesurf / MCP v2 / AI Search / WebMCP / AEO）を4本柱の枠組みで位置づけて読める
- Cloudflare が推す標準セット（Web Bot Auth / PACT / x402 / MCP）が一覧で確認できる

## 影響範囲

- 対象ユーザー: サイト運営者、エージェント開発者
- 対象プラン: 記載なし（ビジョン記事）
- API / UI / 管理者機能: 該当なし

## 教材化メモ

- 「エージェント＝新種の訪問者」というフレーミングは、ボット対策とエージェント対応を混同しがちな読者の整理に使える。ただし Cloudflare のポジショントークでもあるため、教材では「1社の主張」として相対化して扱う。
- Readable / Discoverable / Callable / Payable の4分類は、自社サイトのエージェント対応度を点検するチェックリストとして流用しやすい。ベンダー中立な形に言い換えれば汎用教材になる。
- 個別プロトコル（x402 / PACT / Web Bot Auth）は普及度が未知数。教材本文に仕様を書き込むと陳腐化するため、名前と目的だけに留める。

## 原文確認

- 公式見出し: Building an open Agentic Internet: readable, discoverable, callable, and payable
- 公式URL: https://blog.cloudflare.com/the-agentic-internet/
- 原文全文は公式ページで確認してください。
