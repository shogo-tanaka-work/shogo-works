---
date: 2026-08-12
title: "Claude in Chrome のサイドパネルが Claude Cowork セッションに"
service: "Claude"
source: https://claude.com/blog/cowork-chrome-side-panel
fetched_at: 2026-08-13T10:45:00+09:00
published_at: 2026-08-12
date_precision: date-only
category: enhancement
---

# 2026-08-12 Claude in Chrome サイドパネルの Claude Cowork 化

## 公式内容の日本語要約

Anthropic が Claude in Chrome のサイドパネルを Claude Cowork セッションとして統合した。これまでサイドパネルの会話はデスクトップ / Web / モバイルの Claude アプリとは切り離されていたが、統合により全プラットフォーム間で会話が同期する。公式は「ブラウザで始めた作業を、後で別の場所から続けられる」と説明している。

サイドパネルからは Claude がブラウザ操作を行える。リンクのクリック、テキスト入力、ページ間の移動、フォーム入力に対応する。狙いは「Claude と直接の連携を持たないアプリケーション」への到達で、レガシーシステムや社内ダッシュボードが例として挙げられている。Skills と connectors もブラウザ環境の中で機能する。

安全面では、結果に影響のある操作の前に自動承認の仕組みが働く。当初の依頼内容と実行しようとしている操作を照合し、一致しないものをブロックする設計である。

提供範囲は Max / Team が即日、Pro は数週間かけて順次展開。Enterprise は既定でオフで、管理者が有効化したうえで承認済みドメインにアクセスを限定できる。

## できるようになったこと

- ブラウザのサイドパネルで始めた会話が、デスクトップ / Web / モバイルと同期する
- API 連携のない社内システムやレガシー画面を、ブラウザ操作経由で Claude に触らせられる
- Skills と connectors をブラウザ環境の中で使える
- Enterprise 管理者がアクセス可能ドメインをホワイトリストで制限できる

## 影響範囲

- 対象ユーザー: Chrome で Claude を使うユーザー
- 対象プラン: Max / Team は即日、Pro は数週間かけて順次、Enterprise は既定オフ（管理者が有効化）
- API / UI / 管理者機能: Chrome 拡張のサイドパネル UI、Enterprise 管理コンソール（有効化とドメイン制限）

教材化メモ: src/content/ai-news-notes/claude/cowork-chrome-side-panel.mdx

## 原文確認

- 公式見出し: The Claude in Chrome side panel is now Claude Cowork
- 公式URL: https://claude.com/blog/cowork-chrome-side-panel
- 補足: 旧 Claude in Chrome 拡張が廃止されるかどうかは、公式発表では明示されていない。
- 原文全文は公式ページで確認してください。
