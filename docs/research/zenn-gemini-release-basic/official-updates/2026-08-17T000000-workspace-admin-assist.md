---
date: 2026-08-17
title: "管理コンソールに Gemini ベースの Admin Assist を追加"
service: "Google Workspace / Admin Console"
source: https://workspaceupdates.googleblog.com/2026/08/use-gemini-to-help-manage-google-Workspace-for-your-organization.html
fetched_at: 2026-08-18T08:15:00+09:00
published_at: 2026-08-17
date_precision: date-only
category: release
---

# 2026-08-17 Workspace Admin Assist

## 公式内容の日本語要約

Google 管理コンソールに **Admin Assist** が入った。Gemini による支援機能を管理者の作業画面へ直接組み込むもので、2つの入口がある。

**Gemini ベースのサイドパネル**は、管理コンソールのほとんどのページで One Google Bar から開ける。複雑な作業の支援、管理のベストプラクティスの解説、対話的なステップバイステップの手順案内を受けられる。

**Gemini ベースの検索概要**は、管理コンソールのメイン検索バーで自動的に発動し、Google Workspace ヘルプセンターの記事を対話的な要約へ統合して返す。

**利用できるのは特権管理者（Super Admin）だけ**で、委任管理者（Delegated Admin）は対象外。対応エディションは **Business Starter / Standard / Plus のみ**である。エンドユーザーへの影響はなく、設定も不要。対象 SKU の特権管理者に対して**既定で有効**になっている。

ロールアウトは 2026-08-17 時点で Rapid Release / Scheduled Release の両ドメインで提供開始済み。

## できるようになったこと

- 管理コンソールのほぼ全ページで Gemini サイドパネルから手順案内を受ける
- 管理コンソール検索でヘルプセンター記事の対話的要約を得る

## 影響範囲

- 対象ユーザー: 特権管理者のみ（委任管理者は対象外）
- 対象プラン: Business Starter / Standard / Plus のみ。Enterprise / Education は対象外
- API / UI / 管理者機能: 管理コンソール UI。既定で有効、管理者の設定作業なし

教材化メモ: src/content/ai-news-notes/gemini/workspace-admin-assist.mdx

## 原文確認

- 公式見出し: Use Gemini to help manage Google Workspace for your organization
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/use-gemini-to-help-manage-google-Workspace-for-your-organization.html
- 原文全文は公式ページで確認してください。
