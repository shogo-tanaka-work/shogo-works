---
date: 2026-10-16
title: "Cloudflare CLI に `cf docs search` が追加、同時にコマンド名が kebab-case へ変更"
service: "Cloudflare CLI"
product: "Workers, Cloudflare CLI"
source: https://developers.cloudflare.com/changelog/post/2026-10-16-docs-search/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-16-docs-search/
fetched_at: 2026-10-17T09:15:00+09:00
published_date: 2026-10-16
date_precision: date-only
category: enhancement
---

# 2026-10-16 Cloudflare CLI に `cf docs search`

## 公式内容の日本語要約

Cloudflare CLI（`cf`）の **1.0.0-beta.16** で、**`cf docs search "<クエリ>"` が追加された。** 公式ドキュメント・チュートリアル・サンプルを、ターミナルから、あるいは**コーディングエージェントから**検索できる。

**検索対象は live のドキュメントで、結果は最大5件のランク付き JSON** として返る。各件に title / description / ドキュメントURL が入る。インターネット接続が必要である。公式が挙げている例は `proxy a DNS record`、`rate limit requests with WAF`、`schedule a worker`。

**エージェント利用が明示されている。** 公式の例は、`jq` で先頭結果の URL を取り出し、`curl` に `Accept: text/markdown` を付けて本文を Markdown で取得する、という流れである。**つまり「検索結果の URL」と「Markdown 本文」の2段で、エージェントがドキュメントを読む経路が用意された。** MCP には触れていない。

**同じリリースに破壊的変更が入っている。** 生成されるコマンド名が **kebab-case になった。** 例として `cf accounts billing getCredits` が `cf accounts billing get-credits` になる。コマンド・フラグの変更一覧は CLI の GitHub changelog 側にある。

インストール・更新は `npm install --global cf@latest`（Yarn / pnpm / Bun も記載あり）。

教材化メモ: src/content/ai-news-notes/cloudflare/cf-cli-docs-search.mdx

## できるようになったこと

- `cf docs search "<クエリ>"` で公式ドキュメントをターミナルから検索できる（最大5件の JSON）
- 結果 URL に `Accept: text/markdown` を付けて本文を Markdown で取得でき、コーディングエージェントから使える
- （破壊的変更）生成コマンド名が kebab-case に統一された

## 影響範囲

- 対象ユーザー: Cloudflare CLI（`cf`）利用者、CLI をエージェントから叩く開発者
- 対象プラン: changelog にプラン条件の記載なし
- API / UI / 管理者機能: CLI 1.0.0-beta.16。**既存のスクリプト・CI・エージェント定義に camelCase のコマンド名が残っていると動かなくなる**

## 原文確認

- 公式見出し: `Workers, Cloudflare CLI - Search Cloudflare documentation with the Cloudflare CLI`
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-16-docs-search/
- 原文全文は公式ページで確認してください。
