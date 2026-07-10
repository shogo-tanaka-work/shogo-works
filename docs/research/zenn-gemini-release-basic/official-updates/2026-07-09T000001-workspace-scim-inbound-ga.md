---
date: 2026-07-09
title: "Google Workspace: 受信SCIM対応がGA（ID/アクセスライフサイクル自動化）"
service: "Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/07/streamline-identity-lifecycle-management-in-Google-Workspace-with-new-inbound-SCIM-support.html
fetched_at: 2026-07-10T09:30:00+09:00
published_at: 2026-07-09T00:00:00Z
date_precision: date-only
category: release
---

# 2026-07-09 Google Workspace: 受信SCIM対応がGA

## 公式内容の日本語要約

Google Workspaceが受信（inbound）SCIM（System for Cross-domain Identity Management）APIをGA化した。IT管理者は外部のIDプロバイダー・HRシステム・カスタムアプリとGoogle Workspaceのユーザー/グループ情報をリアルタイム同期できるようになる。IDプロバイダー側で権限が変更されると、WorkspaceデータおよびGemini Enterpriseのような下流アプリへのアクセスも自動的に更新される。ワンクリックのトークン生成による初期設定にも対応。

## できるようになったこと

- ユーザー・グループのプロビジョニング/デプロビジョニングの自動化。
- IDプロバイダー側の権限変更をWorkspace・Gemini Enterprise等の下流アプリに即時反映。
- ドメイン単位で機能の有効/無効を切り替え可能。

## 影響範囲

- 対象ユーザー: Google Workspace管理者
- 対象プラン: Business Starter/Standard/Plus、Enterprise Starter/Standard/Plus
- API / UI / 管理者機能: 管理コンソール経由のドメイン単位設定、Rapid Release/Scheduled Releaseの両ドメインで2026-07-09から段階的ロールアウト開始（可視化まで最大15日）

## 教材化メモ

Gemini本体の機能追加ではなく、Workspace管理者向けのID管理・セキュリティ機能。企業のID基盤（IdP）連携やオフボーディング自動化の文脈で、Gemini Enterpriseとの連携例として触れる程度の位置づけ。単独記事化の優先度は低い。

## 原文確認

- 公式見出し: Streamline identity lifecycle management in Google Workspace with new inbound SCIM support
- 公式URL: https://workspaceupdates.googleblog.com/2026/07/streamline-identity-lifecycle-management-in-Google-Workspace-with-new-inbound-SCIM-support.html
- 原文全文は公式ページで確認してください。
