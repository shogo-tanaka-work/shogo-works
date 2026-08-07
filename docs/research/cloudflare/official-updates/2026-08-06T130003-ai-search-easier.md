---
date: 2026-08-06
title: "Cloudflare AI Search — 単一コマンドでの索引化と従量課金の価格公開"
service: "Cloudflare"
product: "AI Search"
source: https://blog.cloudflare.com/ai-search-easier/
fetched_at: 2026-08-07T10:00:00+09:00
published_at: 2026-08-06T13:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-08-06 Cloudflare AI Search

## 公式内容の日本語要約

Cloudflare が AI Search を刷新し、これまで複数のプリミティブ（R2、Vectorize、Workers AI 等）を自前で組み合わせる必要があった構成を、クロール・取り込み・埋め込み・検索まで自動で行う形に簡素化した。

新機能は次の通り。ファイルと Cloudflare 管理下のサイトから構造化／非構造化データを単一コマンドで索引化できる。サイトマップが無いサイトも「Discover」パースオプションでクロールできる。複数インスタンスを `/search` と `/mcp` の統合エンドポイント経由で横断検索できる。公開エンドポイントに独自ドメインを割り当てられる（例 `search.example.com/mcp`）。EmDash CMS には AI Search プラグインでセマンティック検索を追加できる。検索はセマンティックとキーワードのハイブリッドを1クエリで実行する。

価格が preview として提示された（変更の可能性ありと明記）。取り込みは 100万トークンあたり $0.75、月 500万トークン無料。ストレージは $2.00/GB・月、10GB 無料。クエリはセマンティック 1,000 件あたり $0.75、全文検索 1,000 件あたり $0.10、月 2,000 クエリ無料。埋め込みとリランキングは対象 Workers AI モデルで無料。試算例として、2万文書の索引化と月3万回のセマンティック検索でおよそ $35/月 が示されている。

AI Search 自体は現時点で利用可能だが、課金はまだ有効化されておらず、開始前に事前告知するとしている。

## できるようになったこと

- ファイル・サイトの索引化を単一コマンドで実行できる（クロールから埋め込みまで自動）
- サイトマップの無いサイトを「Discover」でクロールできる
- 複数インスタンスを `/search` / `/mcp` の統合エンドポイントで横断検索できる
- 公開エンドポイントに独自ドメインと名前空間を割り当てられる
- セマンティック検索とキーワード検索をハイブリッドで1クエリ実行できる
- 従量課金の価格レンジと無料枠が事前に確認できる（課金開始は未定・事前告知あり）

## 影響範囲

- 対象ユーザー: RAG / 社内検索を構築する開発者、Cloudflare でサイトを運用している事業者
- 対象プラン: 無料枠あり。課金は現時点で無効（開始前に告知）
- API / UI / 管理者機能: API（`/search`、`/mcp`）、ダッシュボード

教材化メモ: src/content/ai-news-notes/cloudflare/ai-search-simplified-pricing.mdx

## 原文確認

- 公式見出し: Cloudflare AI Search: give your agents a search engine for your data
- 公式URL: https://blog.cloudflare.com/ai-search-easier/
- changelog: https://developers.cloudflare.com/changelog/post/2026-08-06-public-endpoint-custom-domains-and-namespaces/
- 原文全文は公式ページで確認してください。
