---
date: 2026-09-30
title: "Monetization Gateway クローズドベータ — HTTP 402 と x402 で AI エージェントへ従量課金する"
service: "Monetization Gateway"
product: "Monetization Gateway, AI Gateway"
source: https://blog.cloudflare.com/monetization-gateway-beta/
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-09-30 Monetization Gateway クローズドベータ

## 公式内容の日本語要約

Cloudflare は Birthday Week 2026 の一環として、**AI エージェントに対して Web サイト・API・MCP ツール・データセットへのアクセスを有償化できる Monetization Gateway** をクローズドベータで公開した。

仕組みの中心は **HTTP 402 Payment Required** である。従来のようにリダイレクト型のチェックアウト画面や別建ての決済 API を挟まず、**リソース要求に対する応答として支払い指示をインラインで返す**。買い手（エージェント側）が支払いを承認し、決済が確定した時点でリソースが返る。

決済レールは **Base チェーン上の USDC（ステーブルコイン）**で、精算は **Coinbase の x402 Facilitator** が担う。売り手は固定価格と変動価格（リクエスト単位 / トークン単位 / クエリ単位）を選べ、**URL・ヘッダー・クエリパラメータへのマッチで課金ルールを定義**できる。

本番で既に使っている事例として、**Cloudflare 自身の AI Gateway（推論1回ごとの支払い）**、Ceramic.ai（Web 検索 API）、Stocktwits（株式センチメントのシグナル）、API2PDF（PDF 生成）が挙げられている。

## できるようになったこと

- HTTP 402 を使い、エージェントからのリクエストに対してインラインで支払いを要求できる
- リクエスト / トークン / クエリ単位の変動課金、および固定価格の設定
- URL・ヘッダー・クエリパラメータへのマッチによる課金ルール定義
- オープン標準 **x402** に準拠（Cloudflare 独自プロトコルではない）

## 影響範囲

- 対象ユーザー: **米国内の売り手・買い手に限定**（クローズドベータ）。他地域へは拡大予定
- 対象プラン: Cloudflare Dashboard から `Request access` で申請
- API / UI / 管理者機能: Dashboard のオンボーディングフォーム、x402 互換クライアント

教材化メモ: src/content/ai-news-notes/cloudflare/monetization-gateway-beta-http-402.mdx

## 原文確認

- 公式見出し: Monetization Gateway beta: charge AI agents for consumption with HTTP 402
- 公式URL: https://blog.cloudflare.com/monetization-gateway-beta/
- changelog: https://developers.cloudflare.com/changelog/post/2026-09-30-closed-beta/
- 原文全文は公式ページで確認してください。
