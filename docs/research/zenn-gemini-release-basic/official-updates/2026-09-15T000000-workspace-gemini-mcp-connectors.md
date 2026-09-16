---
date: 2026-09-15
title: "Gemini in Google Workspace が MCP で外部7サービスへ接続 — 既定で有効、管理者は OU / グループ単位で制御"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/09/connect-to-more-tools-with-gemini-in-Google-Workspace.html
fetched_at: 2026-09-16T09:02:00+09:00
published_at: 2026-09-15
date_precision: date-only
category: release
---

# 2026-09-15 Gemini in Workspace の MCP コネクタ

## 公式内容の日本語要約

Google は 2026-09-15、Workspace 内の Gemini から外部業務ツールへ直接接続できるようにしたと発表した。接続方式として **Model Context Protocol（MCP）連携**を明示している。

対象は7サービス。**Asana、Atlassian Rovo、HubSpot、Intuit Mailchimp、Intuit QuickBooks、Monday、Salesforce**。利用者は Sheets / Gmail / Drive / Docs / Chat など Workspace 各アプリの中から、アプリを切り替えたり手作業でデータを移したりせずに、これらのデータを扱える。エンドユーザーの入口は **Docs / Sheets / Slides / Google Chat の Gemini サイドパネル**。

管理面では、**管理コンソールからドメイン / 組織部門（OU）/ グループ単位でコネクタを管理**できる。**対象ユーザーに対しては既定で有効**であり、管理者が無効化する形になる。

ロールアウトは **Rapid Release / Scheduled Release の両ドメインで即日利用可能**。対象エディションは Business（Business / Standard / Plus）、Enterprise（Enterprise / Standard / Plus）、Enterprise Essentials Plus、消費者向けの Google AI Pro / Ultra、教育向けアドオン（Google AI Pro for Education、Teaching and Learning、Endpoint Education）。

## できるようになったこと

- Workspace の Gemini サイドパネルから Asana / Atlassian Rovo / HubSpot / Mailchimp / QuickBooks / Monday / Salesforce のデータを参照できる
- アプリ切り替えやファイルのダウンロードなしに外部業務データを取得できる
- 管理者がドメイン / OU / グループ単位でコネクタの可否を制御できる

## 影響範囲

- 対象ユーザー: Workspace 利用者全般、Workspace 管理者
- 対象プラン: Business / Enterprise / Enterprise Essentials Plus / Google AI Pro / Ultra / 教育向けアドオン
- API / UI / 管理者機能: Gemini サイドパネル（UI）、管理コンソール（管理者）、MCP 連携

教材化メモ: src/content/ai-news-notes/gemini/workspace-gemini-mcp-connectors.mdx

## 原文確認

- 公式見出し: Connect to more tools with Gemini in Google Workspace
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/connect-to-more-tools-with-gemini-in-Google-Workspace.html
- 原文全文は公式ページで確認してください。
