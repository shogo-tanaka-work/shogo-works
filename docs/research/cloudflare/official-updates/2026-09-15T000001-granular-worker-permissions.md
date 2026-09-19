---
date: 2026-09-15
title: "Workers 単位の権限ロールが4種類に — エージェントと CI/CD へ最小権限を割り当てられる"
service: "Cloudflare"
product: "Workers, Developer Platform"
source: https://blog.cloudflare.com/workers-granular-authorization/
fetched_at: 2026-09-16T09:02:00+09:00
published_at: 2026-09-15
date_precision: date-only
category: release
---

# 2026-09-15 Workers の細粒度パーミッション

## 公式内容の日本語要約

Cloudflare は 2026-09-15、**個々の Worker 単位でアクセス権を絞れるロール**を公開した。従来は開発者プラットフォーム全体か Workers 全体かという粒度しかなく、**特定の Worker だけを読ませる・更新させるという指定ができなかった。**

ロールは4種類。**Metadata Read-Only**（設定・メトリクス・ログ・トレースを閲覧できるが、Worker のコードへはアクセスできず変更もできない）、**Content Read-Only**（コード・設定・可観測性データを読めるが、変更もデプロイもできない）、**Editor**（更新とデプロイができるが削除はできない）、**Admin**（Editor に加えて削除ができる）。

適用範囲は3段階で指定できる。**開発者プラットフォーム製品全体 / すべての Worker / 個別の Worker**。設定はダッシュボード（Members または Account API Tokens）、API、Terraform の3経路で行える。

公式が挙げるユースケースが、そのままエージェント運用を前提にしている。**デバッグ用エージェントには Metadata Read-Only を渡して可観測性データだけを見せる。コードレビュー用エージェントには Content Read-Only を渡して読ませるが変更はさせない。CI/CD ワークフローには Editor を渡して自動デプロイを許しつつ、誤削除を防ぐ。** 人間のチームメンバーには Admin を渡す。

**提供は「available today for all customers」**で、プランによる制限は明記されていない。

## できるようになったこと

- 個別の Worker 単位でアクセス権を4段階に分けて付与できる
- エージェントや CI/CD トークンへ、削除権限を含まない最小権限を渡せる
- ダッシュボード / API / Terraform のいずれからも設定できる

## 影響範囲

- 対象ユーザー: Workers を運用するチーム、CI/CD 管理者、エージェント運用者
- 対象プラン: 全顧客（プラン制限の明記なし）
- API / UI / 管理者機能: ダッシュボードの Members / Account API Tokens、API、Terraform

教材化メモ: src/content/ai-news-notes/cloudflare/granular-worker-permissions.mdx

## 原文確認

- 公式見出し: Give every teammate and agent the right level of access to your Workers
- 公式URL: https://blog.cloudflare.com/workers-granular-authorization/
- changelog: https://developers.cloudflare.com/changelog/post/2026-09-15-granular-worker-permissions/
- 原文全文は公式ページで確認してください。
