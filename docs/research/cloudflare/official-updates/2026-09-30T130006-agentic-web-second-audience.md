---
date: 2026-09-30
title: "The Internet has a second audience — Birthday Week 2026 のエージェント向け発表群の総論"
service: "Cloudflare（総論）"
product: "AI Crawl Control, BotBase, Web Bot Auth, Pay Per Use, Monetization Gateway, WebMCP"
source: https://blog.cloudflare.com/agentic-web/
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-30 The Internet has a second audience

## 公式内容の日本語要約

Birthday Week 2026 のエージェント関連発表を束ねる総論記事である。**主張は「インターネットには第2の観客がいる」**。自動化されたトラフィック（主に AI エージェント）が**全リクエストの半分以上**を占めるようになり、従来のボットとは違って**エージェントは（ソフトウェアではあるが）支払い能力を持つ顧客**である、という整理をしている。

Cloudflare はこの変化に対して3つの能力を提供する立場を取る。**(1) 誰が来ているかの可視化**（AI Crawl Control、Business Insights、BotBase）、**(2) アクセス条件の制御**（Web Bot Auth による暗号的な身元検証、Search / Agent / Training の個別制御、Disallow AI Training）、**(3) 人間以外のトラフィックから支払いを得る仕組み**（Pay Per Use、Monetization Gateway）。加えて、エージェント向けにコンテンツと操作を露出する **Markdown for Agents** と **WebMCP** が挙げられている。

記事は、**x402 と Web Bot Auth というオープン標準に寄せている点**を強調し、Cloudflare を門番ではなくインフラとして位置づけている。

## できるようになったこと

- 本記事自体は製品更新ではなく、Birthday Week 2026 の発表群の索引として機能する

## 影響範囲

- 対象ユーザー: サイト運営者、API / ツール提供者、publisher
- 判定: **記事化は見送り（対象外: 論考・索引記事）**。個別製品の記事側で扱う

## 教材化メモ

- **「ボット対策」から「第2の顧客への商品設計」への転換**という枠組みそのものが教材になる。これまでボットは「弾くか通すか」の二値だったが、支払い能力があるなら**価格表を用意する対象**になる。顧客セグメントの定義が技術的制約で決まっていた状態から解放された、と説明できる。
- **「全リクエストの半分以上が自動化トラフィック」という数字は、サイト運営の KPI 設計を揺らす。** PV・セッション・直帰率はいずれも人間を前提とした指標である。エージェント経由の利用をどう計測するかは、まだ各社に答えがない。
- **オープン標準（x402 / Web Bot Auth）に寄せる姿勢を額面どおり受け取らない。** 標準に準拠していても、実装・精算・識別のレイヤーを握れば実質的な依存は生まれる。「ロックインしない」という主張の検証ポイントとして、移行可能性を具体的に問う型を教えられる。

## 原文確認

- 公式見出し: The Internet has a second audience
- 公式URL: https://blog.cloudflare.com/agentic-web/
- 原文全文は公式ページで確認してください。
