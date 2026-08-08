---
date: 2026-08-06
title: "Agent Readiness 診断と Answer Engine Optimization（早期アクセス）"
service: "Cloudflare"
product: "Agent Readiness"
source: https://blog.cloudflare.com/aeo/
fetched_at: 2026-08-07T10:00:00+09:00
published_at: 2026-08-06T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-08-06 From ranking to recommended

## 公式内容の日本語要約

Cloudflare が、サイトのエージェント対応度を測る2つの機能を発表した。

**Agent Readiness 診断**はダッシュボードに統合されたスキャン機能で、4カテゴリで対応状況を評価する。Quick wins（robots.txt、XML サイトマップ、Markdown 配信）、Technical groundwork（Content Signals、API カタログ、認証）、Advanced integration（OAuth、MCP、Agent2Agent カード）、Commerce standards（x402、ACP、UCP、AP2）。

**Answer Engine Optimization（AEO）**は、Claude と GPT にカテゴリ別の顧客質問を投げて、自社サイトが回答内でどう扱われているかを測る可視化ツール。指標は Citation Rate（自カテゴリの回答のうち自サイトが引用された割合）、Prominence（引用の位置と本文中の占有割合）、Mention Rate（引用を伴わないブランド名の言及頻度）、Share of Voice（競合との引用比較）、AI Operator Activity（オペレーター別のクロール量と参照トラフィック）。

Agent Readiness はダッシュボードに統合済み。AEO は早期アクセス申請が必要で、段階的な提供と読み取れる。価格の記載はない。

## できるようになったこと

- ダッシュボードから自サイトのエージェント対応度を4カテゴリで診断できる
- AI の回答内での引用率・言及率・競合比較を指標として測れる（早期アクセス）
- AI オペレーター別のクロール量と参照トラフィックを確認できる

## 影響範囲

- 対象ユーザー: サイト運営者、マーケティング担当
- 対象プラン: Agent Readiness はダッシュボード統合済み。AEO は早期アクセス申請制。価格記載なし
- API / UI / 管理者機能: ダッシュボード

## 教材化メモ

- 「検索順位（ranking）から推薦（recommended）へ」という指標の置き換えは、SEO 教材の更新論点そのもの。既存の SEO 説明に「AI の回答内での引用」という軸を足す形で最小追記できる。
- Citation Rate / Prominence / Mention Rate / Share of Voice は、ベンダー固有の指標名ではあるが概念は汎用。指標の定義だけ教材に置き、計測手段は各社ツールに委ねる書き方が持続的。
- 測定対象が Claude / GPT の回答である以上、モデル更新で数値が動く。「継続的に測る前提の指標であり、単発のスコアに意味はない」という注意を添える。
- Agent Readiness の4カテゴリ（robots.txt / Content Signals / MCP / 決済標準）は、エージェント対応のロードマップとしてそのままチェックリスト化できる。

## 原文確認

- 公式見出し: From ranking to recommended: get your site ready to thrive in the age of AI agents
- 公式URL: https://blog.cloudflare.com/aeo/
- 原文全文は公式ページで確認してください。
