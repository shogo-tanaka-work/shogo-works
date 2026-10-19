---
date: 2026-10-13
title: "Cursor の Origin App Marketplace が20以上のアプリを掲載し、公開投稿を開放"
service: "Cursor"
source: https://cursor.com/changelog/origin-app-marketplace
fetched_at: 2026-10-19T09:55:00+09:00
published_at: 2026-10-13
date_precision: date-only
category: release
---

# 2026-10-13 Cursor Origin App Marketplace

## 公式内容の日本語要約

**Origin が20以上のアプリと統合した。** 領域はデプロイ、CI、コードレビュー、セキュリティ、モニタリング、プロジェクト管理で、パートナーには Cloudflare、Linear、Sentry、Socket Security が含まれる。

掲載内訳は、**デプロイ**（Cloudflare、Netlify、Render、Spacelift、Vercel）、**CI**（Buildkite、CircleCI、CloudBees、Depot、EngFlow、Namespace、RWX）、**コードレビュー**（CodeRabbit、Greptile、Tenki）、**セキュリティ**（Artemis Security、Semgrep、Socket Security、Upwind）、**モニタリング**（Sentry）、**プロジェクト管理**（Linear）である。

**同日から marketplace が公開投稿へ開放された。** 開発者ツールを作っているチームは誰でも Origin 向けアプリを公開できる。手順は4段。(1) 自分の namespace にアプリを作る（作成中は namespace 内で非公開）。(2) Origin API に対して実装する — **アプリは app JWT と installation access token で認証し、webhook イベントを受け取り、check run・pull request コメント・レビューを書き戻す。** (3) アプリを public にし、slug・推奨タグ・デモ動画を添えてアプリのページから申請する（**動画はインストール・アンインストールと主要な製品フローを示すこと**）。(4) Cursor が審査し、承認後に掲載する。

Origin Apps プラグインは、ライブの Origin API ドキュメントから質問に答え、既存アプリの Origin への移植計画を立てられるとされる。

## できるようになったこと

- Origin へデプロイ / CI / レビュー / セキュリティ / 監視 / PM の20以上のアプリを導入できる
- 誰でも Origin 向けアプリを作り、審査を経て marketplace へ掲載できる

## 影響範囲

- 対象ユーザー: Origin 利用者、開発者ツールのベンダー
- 対象プラン: 記載なし
- API / UI / 管理者機能: Origin API、webhook、marketplace

## 教材化メモ

- **認証モデルが GitHub App とほぼ同型である**（app JWT + installation access token、webhook、check run / PR コメントの書き戻し）。**GitHub 以外のコードホスティングが同じ拡張モデルを採る**流れで、既存の GitHub App の知識がそのまま移植できる、という読み方ができる。
- **「デモ動画にインストールとアンインストールを含めること」という審査要件**が明文化されている点が珍しい。**抜け道のない撤退手段を見せることを審査条件にしている**例として、プラットフォーム設計の題材になる。
- セキュリティ領域に4社（Semgrep、Socket Security、Artemis、Upwind）が並ぶ点は、**エージェントが書くコードの検査需要が marketplace の構成に出ている**と読める。

## 原文確認

- 公式見出し: Origin App Marketplace
- 公式URL: https://cursor.com/changelog/origin-app-marketplace
- 原文全文は公式ページで確認してください。
