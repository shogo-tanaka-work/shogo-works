---
date: 2026-08-14
title: "Cloudflare Access for Workers — アカウント単位で全 Worker を社内ログインの背後へ"
service: "Cloudflare"
product: "Cloudflare Access, Workers"
source: https://blog.cloudflare.com/workers-protected-by-access/
official_url: https://blog.cloudflare.com/workers-protected-by-access/
fetched_at: 2026-08-16T08:37:00+09:00
published_at: 2026-08-14
date_precision: date-only
category: release
---

# 2026-08-14 Cloudflare Access for Workers

## 公式内容の日本語要約

Cloudflare が **Cloudflare Access for Workers** を提供開始した。Worker に対して直接 Cloudflare Access を適用できるようにする機能で、社内向けアプリケーションを既定で会社ログインの背後に置けるようにする。想定されている課題は、AI に書かせて素早く公開した内部アプリ（vibe-coded application）が、認証を付けないまま公開状態になることである。

ポリシーは2つの粒度で設定できる。

- **アカウント単位**: アカウント内の全 Worker に適用する。既存分だけでなく、以後に作られる Worker も対象になる。プレビューと本番の両方のデプロイを既定で会社ログインの背後に置ける
- **アプリケーション単位**: 特定のアプリケーションに設定し、そのアプリに紐づく全ドメインで、デプロイ方法を問わず認証を強制する

保護対象は **routes、カスタムドメイン、`workers.dev`、プレビュー URL** に及ぶ。適用範囲はプレビュー URL のみ、または全ホスト名から選べる。複数のポリシーが重なる場合は**具体的なものが優先**され、ホスト名単位 > Worker 単位 > アカウント単位の順になる。どのポリシーがそのアプリケーションに効いているかはダッシュボードで確認できる。

ローカル開発では `wrangler.jsonc` に `access` ブロックを追加することで、認証済みユーザーをシミュレートして動作確認できる。

公式は「available to everyone」と記載しており、**プラン要件は明示されていない**。

## できるようになったこと

- Worker 単位・アカウント単位で Cloudflare Access を適用できる
- 開発者が個別に設定しなくても、新規作成分を含めて既定で認証を強制できる
- プレビュー URL だけを保護するか、全ホスト名を保護するかを選べる
- `wrangler.jsonc` の `access` ブロックでローカル開発中も認証済み状態を再現できる

## 影響範囲

- 対象ユーザー: Workers を使う開発チーム、Cloudflare Access の管理者
- 対象プラン: 「available to everyone」とのみ記載。具体的なプラン要件の明示なし
- API / UI / 管理者機能: Cloudflare ダッシュボード、`wrangler.jsonc`
- 注意: アカウント単位ポリシーは以後作られる Worker にも自動適用されるため、意図せず公開 API に認証がかかる可能性がある。適用範囲の設計が要る

教材化メモ: src/content/ai-news-notes/cloudflare/workers-protected-by-access.mdx

## 原文確認

- 公式見出し: Secure all your internal vibe-coded applications — in one click
- 公式URL: https://blog.cloudflare.com/workers-protected-by-access/
- 原文全文は公式ページで確認してください。
