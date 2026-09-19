---
date: 2026-09-17
title: "Workspace Studio に custom starters / custom steps / 3P連携（ベータ）/ webhooks が追加。いずれも既定 OFF で管理者が有効化"
service: "Gemini / Workspace"
source: https://workspaceupdates.googleblog.com/2026/09/automate-workflows-with-custom-starters-and-steps-third-party-integrations-and-webhooks-in-Workspace-Studio.html
fetched_at: 2026-09-18T09:02:00+09:00
published_date: 2026-09-17
date_precision: date-only
category: release
---

# 2026-09-17 Workspace Studio の自動化4機能

教材化メモ: src/content/ai-news-notes/gemini/workspace-studio-custom-steps-integrations-webhooks.mdx

## 公式内容の日本語要約

Google は 2026-09-17、Workspace Studio の flows に**4つの新機能**を追加した。Apps Script の独自関数、外部サービス、外部エンドポイントを flow の中から直接つなげられるようになる。

- **Custom starters**: 他アプリのイベントで flow を起動するリアルタイムトリガーを自作・公開できる
- **Custom steps**: Apps Script などで独自ロジックを書き、flow に組み込める
- **Third-party integrations（ベータ）**: **Asana / Confluence / HubSpot / Jira / Mailchimp / QuickBooks / Salesforce / Slack** の8サービスと双方向にデータを受け渡しできる
- **Webhooks**: 外部エンドポイントへ HTTP リクエストを送り、外部側のアクションを起動できる

**4機能とも「granular enterprise security controls」で裏打ちされている**と公式は明記している。**すべて既定 OFF** で、管理者が Admin Console の `Apps > Google Workspace > Workspace Studio` 配下（Custom steps settings / Integration settings / Webhook settings）で有効化する。

**人間の承認要件も管理者が設定する。** Custom steps と Integration はそれぞれ独自の承認設定を持ち、**Webhooks は Sensitive Steps の承認設定に従う**。対応エディションでは、管理者が **webhook のアクセス先 URL 許可リスト**を設定できる。

## できるようになったこと

- Workspace Studio が「Google 内で完結する自動化」から「外部サービスを含む業務自動化基盤」へ拡張された
- 管理者が、外部連携ごとに有効化・承認要件・URL 許可リストを個別に制御できる

## 影響範囲

- 対象ユーザー: Workspace Studio を使う全ユーザー（実行には管理者の有効化が必要）
- 対象プラン: Admin console 設定は Rapid / Scheduled Release 両方へ。3P連携はベータ
- API / UI / 管理者機能: **管理者作業が発生する**。既定 OFF のため、有効化しない限り機能は現れない

## 原文確認

- 公式見出し: Automate workflows with custom starters and steps, third-party integrations, and webhooks in Workspace Studio
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/automate-workflows-with-custom-starters-and-steps-third-party-integrations-and-webhooks-in-Workspace-Studio.html
- 原文全文は公式ページで確認してください。
