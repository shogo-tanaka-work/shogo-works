---
date: 2026-09-28
title: "Forge: API 定義から SDK / CLI / ドキュメントを生成する Apache 2.0 のパイプライン"
service: "Cloudflare（Developer Platform）"
product: "Cloudflare API"
source: https://blog.cloudflare.com/forge-open-source-generation-pipeline/
official_url: https://blog.cloudflare.com/forge-open-source-generation-pipeline/
fetched_at: 2026-09-29T10:53:00+09:00
published_at: 2026-09-28T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-09-28 Forge

## 公式内容の日本語要約

**Forge は「CI 上で動き、API 定義から SDK / CLI / ドキュメントを直接生成する、プラグイン式のオープンソースパイプライン」**である。OpenAPI 仕様を入力に SDK・CLI・API ドキュメントを生成し、Cap'n Web や **MCP サーバー**のような追加の出力形式へも拡張できる。**ライセンスは Apache 2.0。** サードパーティの SaaS に依存せず、自社で生成系を持てるようにする狙いが示されている。

**既に同日発表の `cf` CLI を生成しており**、今後 Cloudflare の TypeScript / Rust / Python / Go / PHP / Terraform SDK も Forge 生成へ移す予定。特徴は**変換の連鎖**で、ある出力を次の入力に送れる。手書きの CLI コマンドと自動生成された API オペレーションを1つのドキュメントへまとめる、といった実務的な要求に対応する。

## 影響範囲

- 対象ユーザー: 自社 API から SDK / CLI / ドキュメントを生成したい開発チーム
- 対象プラン: オープンソース（Apache 2.0）
- API / UI / 管理者機能: 開発基盤・CI

## 教材化メモ

- **単独記事は見送り（スコア5）。** `cf` CLI 記事の中で「3,000オペレーションを覆えた理由」として言及した。生成器の話単体では読者の実務判断が変わりにくい。
- ただし **MCP サーバーを出力形式として挙げている**点は、「社内 API を MCP で AI に開放する」文脈で後から参照価値が出る可能性がある。週次・月次で MCP 関連をまとめる際の材料。

## 原文確認

- 公式見出し: Introducing Forge: the open source pipeline for generating SDKs, CLIs, docs, and more
- 公式URL: https://blog.cloudflare.com/forge-open-source-generation-pipeline/
- 原文全文は公式ページで確認してください。
