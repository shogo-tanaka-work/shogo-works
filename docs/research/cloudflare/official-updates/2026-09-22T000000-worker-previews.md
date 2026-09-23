---
date: 2026-09-22
title: "Worker Previews 公開。プルリクエストごとに本番同等の隔離環境を作る"
service: "Cloudflare"
product: "Workers"
source: https://blog.cloudflare.com/worker-previews/
fetched_at: 2026-09-23T09:10:00+09:00
published_at: 2026-09-22
date_precision: date-only
category: release
---

# 2026-09-22 Cloudflare Worker Previews

## 公式内容の日本語要約

Cloudflare は 2026-09-22、**Worker Previews** を公開した。変更ごとに、本番に近い隔離環境を立てて検証するための仕組みである。公式ブログの副題は「**エージェントが行うすべての変更に、隔離されたプレビュー環境を**」で、AI エージェントが大量の変更を投げてくる前提で設計されたことを明示している。

各 Preview は**同一の Worker の下で、独自のコード・設定・URL・可観測性を持ち**、本番からも他の Preview からも隔離される。数百の Preview を同時に走らせられる。

Preview の初期値は Wrangler 設定ファイルの `previews` ブロックで定義し、シークレットは Wrangler コマンドで設定する。**1つの Preview だけを上書きしても、本番と他の Preview には影響しない。**

Durable Objects と Containers については、**Cloudflare が Preview ごとに名前空間・ストレージ・アプリ・インスタンスを自動で切り出す。** 状態変更、セッション、メモリ、マイグレーション、並行テストがその Preview の中に閉じる。KV / D1 / R2 のようなアカウント単位のリソースを隔離したい場合は、別リソースをバインドする。

デプロイは Wrangler 4.135.0 以降で `npx wrangler preview`。リポジトリを Workers Builds へ接続すれば Preview を自動生成し、URL をプルリクエストへ投稿する。**Preview には安定URL（push のたびに更新）と不変URL（デプロイ単位）の2種類**が付き、レビュアーは常に最新を、比較時は特定版を見られる。

Preview URL は `workers.dev` でもカスタムドメインでも配信できる。**カスタムドメインを使うと、認証プロバイダ・Cookie・CORS・OAuth リダイレクトが本番と同じ挙動になる。** Preview URL を Cloudflare Access で保護することもできる。

可観測性は Preview 単位に分かれる。リクエストのライフサイクル全体（fetch 呼び出し、バインディング操作、ハンドラ実行）がウォーターフォールで追え、本番トラフィックや他の変更の信号と混ざらない。

## できるようになったこと

- ブランチ／プルリクエスト単位で、本番同等の URL・設定・状態を持つ環境を立てられる
- Durable Objects / Containers の状態が Preview ごとに自動で分離される
- Preview ごとのログ・エラー・メトリクス・トレースを個別に見られる
- Preview URL を Access で保護できる

## 影響範囲

- 対象ユーザー: Workers 開発者、Workers Builds 利用者
- 対象プラン: 公式changelog はプラン制限に言及していない。現行の制限は Worker Previews ドキュメントを参照
- API / UI / 管理者機能: Wrangler 4.135.0 以降が必要。Worker 名の横の環境ブレッドクラムで Production と各 Preview を切り替える

教材化メモ: src/content/ai-news-notes/cloudflare/worker-previews.mdx

## 原文確認

- 公式見出し: Introducing Worker Previews: isolated preview environments for every change your agent makes
- 公式URL: https://blog.cloudflare.com/worker-previews/
- changelog: https://developers.cloudflare.com/changelog/post/2026-09-22-worker-previews/
- 原文全文は公式ページで確認してください。
