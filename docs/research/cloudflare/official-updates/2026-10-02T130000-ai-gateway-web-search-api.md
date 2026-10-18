---
date: 2026-10-02
title: "AI Gateway に Web Search API。エージェントへリアルタイムのWeb検索を供給、上乗せマージンなし"
service: "AI Gateway"
product: "AI Gateway, Web Search API"
source: https://blog.cloudflare.com/introducing-web-search-api/
fetched_at: 2026-10-03T09:10:00+09:00
published_at: 2026-10-02T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-10-02 AI Gateway の Web Search API

## 公式内容の日本語要約

Cloudflare が **AI Gateway 経由の Web Search API** を公開した。学習データのカットオフに縛られず、**推論呼び出しへ最新のWebコンテキストを直接注入する**ための API である。Birthday Week 2026 の3日目の発表にあたる。

**呼び出し方は3経路**ある。**(1) REST API**（AI Gateway の認証トークンで直接HTTP）、**(2) Workers Bindings**（Workers から1行で統合）、**(3) Server Tools**（AI Gateway 内の組み込みツール。近日提供）。前2つは提供済みである。

**検索プロバイダーは Ceramic.ai / Exa / Linkup の3社**が初期パートナーとして参加する。Cloudflare は全パートナーに対し、**Verified bots の定義への準拠、robots.txt の尊重、検索結果でのソース帰属表示**を条件として課している。クロールされる側の立場を条件に組み込んだ点が、検索 API としては珍しい。

**課金は AI Gateway のクレジットを消費し、価格はパートナーのリスト価格そのまま**である。Cloudflare 自身の**上乗せマージンは無い**と明記している。既存契約がある組織向けに **BYOK（Bring-Your-Own-Key）**にも対応する。**Zero Data Retention（ZDR）のパートナーは識別表示**される。

AI Gateway 側の既存機能（統合ログ、オブザーバビリティ、プロバイダー単位のアクセス制御）がそのまま検索にも効く。モデル呼び出しと検索呼び出しが同じ管理面に乗る構成である。

## できるようになったこと

- AI Gateway の認証だけで、3社の検索プロバイダーをREST / Workers Bindings から呼べる
- 検索の利用ログとアクセス制御を、モデル呼び出しと同じ画面で扱える
- BYOK で既存の検索契約を持ち込める
- ZDR 対応パートナーを選んで、データ保持なしの構成を取れる

## 影響範囲

- 対象ユーザー: Cloudflare 上で RAG / エージェントを構築する開発者
- 対象プラン: AI Gateway クレジット従量。マージン無しのパススルー課金
- API / UI / 管理者機能: REST API、Workers Bindings、AI Gateway の管理画面（Server Tools は近日）

教材化メモ: src/content/ai-news-notes/cloudflare/ai-gateway-web-search-api.mdx

## 原文確認

- 公式見出し: Introducing Web Search API via AI Gateway
- 公式URL: https://blog.cloudflare.com/introducing-web-search-api/
- changelog: https://developers.cloudflare.com/changelog/post/2026-10-02-introducing-web-search-api/
- 原文全文は公式ページで確認してください。
