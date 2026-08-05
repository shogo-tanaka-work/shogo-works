---
date: 2026-08-04
title: "Cloudflare Wallets — AIエージェントがステーブルコインで支払えるプログラマブルウォレット"
service: "Cloudflare Wallets"
product: "Wallets, Workers, Agents"
source: https://blog.cloudflare.com/wallets/
official_url: https://blog.cloudflare.com/wallets/
fetched_at: 2026-08-05T11:35:00+09:00
published_at: 2026-08-04
date_precision: date-only
category: release
---

# 2026-08-04 Cloudflare Wallets

## 公式内容の日本語要約

Cloudflare が「Cloudflare Wallets」を発表しました。AI エージェントがステーブルコインを保有し、API やコンテンツを購入したり、資金を受け取ったりできるプログラマブルウォレットです。x402 プロトコルに対応し、HTTP リクエストに支払いを直接組み込めます。

背景として挙げられているのは、現在の API 登録プロセスが人間向けに作られているという問題です。ログインページの操作、支払い方法の登録、API キーの生成といった手順はエージェントが自律的に踏めません。ウォレットによってエージェントが独立した識別子と支払い手段を持てば、複数の API を自分で試して比較する動きが可能になります。

構成は 2 層です。**アカウントウォレット**は人間が管理する側で、資金の保有とバーチャルウォレットへの委譲を制御します。**バーチャルウォレット**はエージェント側が API キーで操作するもので、支出上限を設定して権限を絞れます。

対象は Cloudflare アカウント保有者とそのエージェントで、`cloudflare.pay` でハンドルを無料申請できます。記事中に個別の価格提示はありません。

## できるようになったこと

- エージェントがステーブルコインで API / コンテンツを購入し、資金を受け取れる
- x402 プロトコル経由で HTTP リクエストに支払いを組み込める
- アカウントウォレット（人間管理）とバーチャルウォレット（エージェント運用）を分離し、支出上限で統制できる
- `cloudflare.pay` のハンドルを無料で取得できる

## 影響範囲

- 対象ユーザー: Cloudflare アカウント保有者、およびその配下で動くエージェント
- 対象プラン: 記事中に価格提示なし（ハンドル申請は無料）
- API / UI / 管理者機能: ウォレット API キー、支出上限設定、x402 対応の HTTP 支払い

教材化メモ: src/content/ai-news-notes/cloudflare/cloudflare-wallets.mdx

## 原文確認

- 公式見出し: Announcing Cloudflare Wallets: the programmable wallet for the agentic Internet
- 公式URL: https://blog.cloudflare.com/wallets/
- 原文全文は公式ページで確認してください。
