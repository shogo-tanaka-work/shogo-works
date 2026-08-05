---
date: 2026-08-04
title: "GitHub Spark の廃止予告（新規停止・8/31 までにエクスポート）と Copilot Billing Preview アプリの廃止"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com
official_url: https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com
fetched_at: 2026-08-05T11:35:00+09:00
published_at: 2026-08-04
date_precision: date-only
category: incident
---

# 2026-08-04 GitHub Spark / Copilot Billing Preview の廃止

## 公式内容の日本語要約

github.com 上の **GitHub Spark** の廃止が予告されました。2026-08-04 以降、新規ユーザーの受け入れと新規アプリの作成が停止されます。既存ユーザーは **2026-08-31 まで**アプリをリポジトリとしてエクスポートできます。

デプロイ済みのアプリは廃止後も動作を続けますが、注意点があります。GitHub Models が 2026-07-30 に既に廃止されているため、`llm()` 関数を使っているアプリは動作しません。AI 機能が必要な場合は OpenAI などの別プロバイダーへ切り替え、API キーの管理と課金を利用者自身で持つ必要があります。

廃止理由として、AI モデルとエージェント開発ツールの進化により、Spark が担っていた「短時間でアイデアを形にする」用途が VS Code や Copilot CLI 側の開発体験に統合された、と説明されています。

同日、**Copilot Billing Preview アプリ**の廃止も告知されました。

## できるようになったこと

- （廃止告知のため該当なし）2026-08-31 までは Spark アプリをリポジトリとしてエクスポート可能

## 影響範囲

- 対象ユーザー: GitHub Spark でアプリを作成・運用しているユーザー、Copilot Billing Preview アプリ利用者
- 対象プラン: github.com 上の Spark 利用者全般
- API / UI / 管理者機能: Spark アプリのエクスポート、`llm()` 関数の代替実装、課金プレビュー機能

## 教材化メモ

- 「ベンダーのAI機能は数か月単位で消える」ことの実例として使える。Spark → VS Code / Copilot CLI への統合という説明は、AIツール選定教材で「ツール単体ではなく既存ワークフローに統合されるものを選ぶ」という判断軸の裏づけになる。
- `llm()` 関数が GitHub Models 廃止で動かなくなる点は、プラットフォーム提供のモデルアクセスに依存するリスクの具体例。教材で「モデルは自前のAPIキーで抽象化しておく」という設計指針を書くときの事例として引用できる。
- エクスポート期限（2026-08-31）は期限つきタスクなので、教材ではなく運用チェックリスト側に置く種類の情報。

## 原文確認

- 公式見出し: Upcoming deprecation of GitHub Spark on github.com / Retiring the Copilot Billing Preview app
- 公式URL: https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com
- 併せて: https://github.blog/changelog/2026-08-04-retiring-the-copilot-billing-preview-app
- 原文全文は公式ページで確認してください。
