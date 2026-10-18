---
date: 2026-09-30
title: "AI Gateway の Machine Payments（ベータ） — ステーブルコインウォレットから推論代を直接支払う"
service: "AI Gateway"
product: "AI Gateway"
source: https://developers.cloudflare.com/changelog/post/2026-09-30-machine-payments/
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-30 AI Gateway Machine Payments

## 公式内容の日本語要約

AI Gateway に **Machine Payments** がベータで追加された。プリペイドのクレジットを使わず、**ステーブルコインのウォレットから対象の推論リクエスト代を直接支払える**。

仕組みは **x402 プロトコル**である。Cloudflare の API トークンで認証し、`/ai/run` エンドポイントへのリクエストに **`Payment-Method: x402` ヘッダー**を付ける。x402 互換クライアントが支払いチャレンジとウォレット署名の承認を処理する。

**対象は一部のオープンソースモデルに限られ、米国の顧客のみ**、かつクレジットカードの登録が必要である。

## できるようになったこと

- `Payment-Method: x402` ヘッダーによる推論代のウォレット直接支払い
- 対象は select open-source models

## 影響範囲

- 対象ユーザー: **米国の AI Gateway 顧客のみ**、クレジットカード登録必須
- 対象プラン: ベータ
- 判定: **記事化は見送り（スコア不足 5点）**。同日の Monetization Gateway 記事内で「Cloudflare 自身が x402 の本番利用者である」事例として言及する

## 教材化メモ

- **自社の決済基盤を自社製品の課金に使う（dogfooding）という形**が、x402 の実用性の証拠として提示されている。新しい決済プロトコルの評価軸として「提供元自身が本番で使っているか」を問う型になる。
- **「プリペイド残高」から「リクエストごとの支払い」への移行**は、エージェントが自律的にリソースを買う前提では自然な方向。一方で**上限管理の責任が利用者側へ移る**ため、予算統制の設計が必要になる点を押さえる。

## 原文確認

- 公式見出し: Pay for AI inference with Machine Payments
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-30-machine-payments/
- 原文全文は公式ページで確認してください。
