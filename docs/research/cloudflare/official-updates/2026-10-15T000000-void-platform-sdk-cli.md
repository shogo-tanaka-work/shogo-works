---
date: 2026-10-15
title: "VoidZero の Void Platform / SDK / CLI が公開 — Vite アプリを Workers へ、組織が自社アカウントで自己ホストする配布環境"
service: "Cloudflare Workers"
product: "Workers, Workers for Platforms, D1, AI Gateway"
source: https://blog.cloudflare.com/deploy-with-void/
fetched_at: 2026-10-16T09:20:00+09:00
published_date: 2026-10-15
date_precision: date-only
category: release
---

# 2026-10-15 Void Platform / SDK / CLI が公開

## 公式内容の日本語要約

**VoidZero から3つのオープンソース製品が公開された。** **Void Platform / Void SDK / Void CLI** の3点で、**単一の JavaScript パッケージと Vite プラグインとして配布される**（`npm install void`）。

**公式が置いている問題設定が重要である。** 「企業は社員に AI コーディングツールで社内アプリを作らせたいが、**セキュリティを懸念して全社員にクラウドのアクセスを渡したくない**」。Void はここを埋める。

**3製品の役割は分かれている。**

- **Void Platform**: **自己ホスト可能な共有デプロイ環境。** 組織が**自社の Cloudflare アカウント内**で動かす。**Workers for Platforms** 上に構築されている。管理者がアクセスを制御し、リソース上限を設定し、デプロイと使用量を監視する。オープンソースなのでフォーク・改変や他プラットフォームでの運用もできる。
- **Void SDK**: フルスタック開発向けの JavaScript SDK。サーバールート、型付きデータベースアクセス、フレームワークアダプタを提供する。
- **Void CLI**: プロビジョニングとデプロイ、プラットフォームのユーザー・デプロイ・ログ・ロールバック・ヘルスの管理を担う。

**Cloudflare の各サービスとの接続が暗黙に行われる。** Vite アプリをフルスタックの Workers アプリへ変換し、**デプロイ時にリソースバインディングを推論する。** `void/db` を import すると**開発中はローカル DB、本番では D1 を自動プロビジョニング**する。`void/ai` を import すると**手動設定なしで AI Gateway へ接続**する（例では `ai.run` で Cloudflare のモデルを呼ぶ）。

**CLI は新しい cf CLI 上に構築され、コーディングエージェントと併用する前提で設計されている。** エージェントがリクエストのデバッグ、ログの読み取り、パフォーマンス分析、デプロイを行える。

**技術的な構成は次のとおり。** Vite プラグイン（`voidPlugin()`）とフレームワークアダプタ（`voidReact()` など）、**Hono 上のファイルベース API ルーティング**、プリレンダリング・キャッシュ・islands、`defineHandler` と `InferProps` による**DB クエリから UI までの型の通し**、**Better Auth** による認証、マイグレーション。既存フレームワーク（Vinext / React Router / SvelteKit / Nuxt / TanStack Start / **Astro**）と併用でき、その場合 Void はリソース API・マイグレーション・デプロイ・認証を担う。

**自己ホストの前提条件がある。** Void Platform を自己ホストするには、**Workers for Platforms と R2 が有効な Cloudflare アカウント、PostgreSQL データベース、ログインプロバイダのアカウント、アプリ用のドメイン**が必要である。**個人開発者は Platform なしで自分の Cloudflare アカウントへ直接デプロイできる。**

**価格の記載はない。** コストは下地になる Cloudflare サービスに依存する。

## できるようになったこと

- Vite アプリをフルスタック Workers アプリとしてデプロイでき、バインディングがデプロイ時に推論される
- `void/db` で開発はローカル DB、本番は D1 が自動プロビジョニングされる
- `void/ai` で AI Gateway へ設定なしで接続できる
- 組織が自社 Cloudflare アカウント内に共有デプロイ環境を自己ホストし、アクセスとリソース上限を管理できる
- 既存フレームワーク（Astro を含む）に乗せたままリソース・認証・デプロイを Void に任せられる

## 影響範囲

- 対象ユーザー: Cloudflare 上でフルスタックアプリを作る開発者、社内アプリの配布環境を整えたい組織の管理者
- 対象プラン: Platform の自己ホストには Workers for Platforms と R2 が必要。個人は通常の Cloudflare アカウントで可
- API / UI / 管理者機能: Vite プラグイン、JavaScript SDK、CLI、自己ホスト型の管理画面

教材化メモ: src/content/ai-news-notes/cloudflare/void-platform-sdk-cli.mdx

## 原文確認

- 公式見出し: Deploy with Void
- 公式URL: https://blog.cloudflare.com/deploy-with-void/
- 原文全文は公式ページで確認してください。
