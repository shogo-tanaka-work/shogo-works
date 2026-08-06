---
date: 2026-08-05
title: "AI Gateway User Insights — AI支出の可視化と異常利用の検知（GA）"
service: "Cloudflare"
product: "AI Gateway"
source: https://blog.cloudflare.com/identity-aware-ai-gateway/
fetched_at: 2026-08-06T18:30:00+09:00
published_at: 2026-08-05T20:00:00Z
date_precision: timestamp
category: release
---

# 2026-08-05 AI Gateway User Insights

## 公式内容の日本語要約

Cloudflare が AI Gateway に「User Insights」を追加し、全 AI Gateway 顧客に追加費用なしで一般提供を開始した。既存のゲートウェイトラフィックの上で動くため、追加セットアップは不要。

User Insights は 2 つの役割を持つ。1 つは支出の可視化で、組織全体のコスト・リクエスト数・トークン数・利用者数を表示し、個々のユーザー単位までドリルダウンできる。もう 1 つは異常利用の検知で、利用のベースラインを作り、そこから大きく外れたセッションをフラグする。認証情報の漏洩や、暴走したエージェントの早期発見を想定している。

合わせて、AI Gateway を Cloudflare Access と統合し、匿名の API キー単位ではなく**認証済みのユーザー ID 単位**で AI 利用を追跡できるようにした（オープンベータ）。SAML プロバイダ（Okta、Entra）と連携し、個人ごとに直近 30 日の 95 パーセンタイル支出をベースラインとして、その 2 倍を超えたセッションをフラグする。ユーザー単位の支出上限、ID / IdP グループ単位でのアクセス・モデル制限もかけられる。

つまり「誰がどのモデルにいくら使ったか」がキー単位ではなく人単位で見えるようになり、その上に予算とポリシーを載せられる構成になった。

## できるようになったこと

- 組織全体のコスト / リクエスト / トークン / 利用者数をダッシュボードで確認できる
- ユーザー単位までドリルダウンして支出内訳を見られる
- ベースラインから外れたセッションを異常としてフラグできる（30日95パーセンタイルの2倍が閾値）
- Cloudflare Access 経由で SAML(Okta / Entra) の ID と AI 利用を紐づけられる（オープンベータ）
- ユーザー単位の支出上限を設定できる
- ID / IdP グループ単位でモデル利用やアクセスを制限できる

## 影響範囲

- 対象ユーザー: すべての AI Gateway 顧客
- 対象プラン: User Insights は追加費用なしで GA。ID 連携（Access 統合）はオープンベータ
- API / UI / 管理者機能: ダッシュボード + 管理者向けポリシー / 支出上限

教材化メモ: src/content/ai-news-notes/cloudflare/ai-gateway-user-insights.mdx

## 原文確認

- 公式見出し: Catching rogue AI behavior with identity-aware analytics
- 公式URL: https://blog.cloudflare.com/identity-aware-ai-gateway/
- changelog: https://developers.cloudflare.com/changelog/post/2026-08-05-user-insights/
- 原文全文は公式ページで確認してください。
