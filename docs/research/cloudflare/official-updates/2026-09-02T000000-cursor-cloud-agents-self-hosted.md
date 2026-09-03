---
date: 2026-09-02
title: "Cursor Cloud Agents を self-hosted machines で Cloudflare 上に動かせるように"
service: "Sandbox SDK"
product: "Sandbox SDK, Containers, Workers, Durable Objects, R2"
source: https://developers.cloudflare.com/changelog/post/2026-09-02-cursor-cloud-agents/
fetched_at: 2026-09-03T09:35:00+09:00
published_at: 2026-09-02
date_precision: date-only
category: release
---

# 2026-09-02 Cursor Cloud Agents を Cloudflare 上で動かす

## 公式内容の日本語要約

Cloudflare が、**Cursor Cloud Agents を「self-hosted machines」として Cloudflare 上で実行**できるようになったと発表した。セッションごとに隔離された実行環境が割り当てられる。

責務の分担が明確に書かれている。**Cursor 側がエージェントループ、推論、計画を担う。Cloudflare 側は、コマンドの実行、ファイル編集、リポジトリ操作、その他のツール実行を「自分が管理するインフラの内側で」動かす。** 各セッションは **Cloudflare Containers** による独立した環境で動く。

この統合を担うのが **Sandbox SDK** で、セットアップ用に **オープンソースの Cloudflare Workers テンプレート**が用意されている。テンプレートをデプロイすると、**Worker、Durable Object の namespace、コンテナアプリケーション、R2 バケットのバインディング、cron トリガー**が構成される。手順は公式チュートリアル「Run Cursor Cloud Agents on Cloudflare via self-hosted machines」に記載されている。

**価格や一般提供の時期は、この発表には記載がない。**

## できるようになったこと

- **Cursor Cloud Agents の実行基盤を自社管理の Cloudflare 環境に置ける**（推論と計画は Cursor 側に残る）
- セッションごとに **Containers による隔離環境**
- **Workers テンプレート**（Worker / Durable Object / コンテナアプリ / R2 / cron）で構成一式をデプロイ

## 影響範囲

- 対象ユーザー: Cursor の Cloud Agents を使う開発チーム、特に**コード実行環境を自社管理下に置きたい組織**
- 対象プラン: Cloudflare Workers / Containers / R2 の利用が前提。価格の明示なし
- API / UI / 管理者機能: Sandbox SDK とテンプレートによるセルフホスト構成

教材化メモ: src/content/ai-news-notes/cloudflare/cursor-cloud-agents-self-hosted.mdx

## 原文確認

- 公式見出し: Sandbox SDK - Run Cursor Cloud Agents on Cloudflare via self-hosted machines
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-02-cursor-cloud-agents/
- 原文全文は公式ページで確認してください。
