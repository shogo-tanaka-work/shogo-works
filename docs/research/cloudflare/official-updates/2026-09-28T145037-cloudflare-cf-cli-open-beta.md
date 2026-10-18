---
date: 2026-09-28
title: "cf: Cloudflare API 全体を覆うエージェント前提の CLI がオープンベータ。wrangler は最終メジャーへ"
service: "Cloudflare（Developer Platform / CLI）"
product: "Cloudflare API, Workers"
source: https://blog.cloudflare.com/cloudflare-cf-cli-launch/
official_url: https://blog.cloudflare.com/cloudflare-cf-cli-launch/
fetched_at: 2026-09-29T10:53:00+09:00
published_at: 2026-09-28T14:50:37Z
date_precision: timestamp
category: release
---

# 2026-09-28 cf CLI オープンベータ

## 公式内容の日本語要約

Cloudflare が **`cf`** という新しい CLI を**オープンベータ**で公開した。`npm i -g cf` で導入する。**最大の違いは網羅範囲で、wrangler の約280コマンドに対し、`cf` は Cloudflare API の 3,000 以上のオペレーション全体を覆う。** OpenAPI スキーマから、同日発表された SDK ジェネレーター **Forge** で生成している。

**設計の主眼が「エージェント / LLM に使わせること」に置かれている。** 具体的には次の4点。

1. **`cf cli search`** — 3,000超のオペレーションを自然言語で検索してコマンドを見つける。
2. **JSON が既定の出力インターフェース** — 「人間向けには pretty print、エージェント向けには圧縮」という設計。
3. **`cloudflare.config.ts`** — TypeScript の型付き設定で、LSP による補完と型検査が効く。
4. **入力フォーム** — 引数を延々と並べる代わりに、検証付きのフォームで複雑な操作を組み立てられる。

**wrangler の置き換えではなく別ツールとして出した**、という位置づけである。レガシーな設計を引き継がずに作り直すためで、**wrangler には「`cf` へ誘導する最終メジャーバージョン」が出され、ベータ終了後18か月の保守が約束されている**。

移行は **`cf migrate`** で既存の wrangler プロジェクトを変換できる。静的サイトは設定不要、新規プロジェクトは `cf init` / `cf deploy`。オープンソースで、GitHub リポジトリで issue を受け付けている。

## できるようになったこと

- Cloudflare API の 3,000超オペレーションを1つの CLI から操作
- `cf cli search` による自然言語でのコマンド探索
- JSON 既定出力によるエージェントからの機械的な利用
- `cloudflare.config.ts` での型安全な設定管理
- `cf migrate` による wrangler プロジェクトの変換

## 影響範囲

- 対象ユーザー: Cloudflare を使う開発者・運用者全般、CLI をエージェントに叩かせている利用者
- 対象プラン: 記載なし（CLI 自体は無償、操作対象の課金は各製品に従う）
- API / UI / 管理者機能: CLI。wrangler は最終メジャー後18か月保守で段階的に役目を終える

教材化メモ: src/content/ai-news-notes/cloudflare/cf-cli-open-beta-wrangler-successor.mdx

## 原文確認

- 公式見出し: Introducing cf: the agentic CLI for the entire Cloudflare API
- 公式URL: https://blog.cloudflare.com/cloudflare-cf-cli-launch/
- 関連（同日）: https://blog.cloudflare.com/forge-open-source-generation-pipeline/
- 原文全文は公式ページで確認してください。
