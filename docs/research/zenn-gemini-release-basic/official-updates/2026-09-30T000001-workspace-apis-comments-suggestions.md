---
date: 2026-09-30
title: "Docs / Sheets / Slides API がコメントに対応、Docs API は提案（suggested edits）もプログラムから作れる"
service: "Google Workspace APIs"
source: https://workspaceupdates.googleblog.com/2026/09/programmatic-comment-and-suggestion.html
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-30 Workspace API のコメント・提案対応

## 公式内容の日本語要約

Google は **Docs / Sheets / Slides の API からコメントを作成・読み取り・管理できる**ようにした。さらに **Docs API では「提案（suggested edits）」をプログラムから作成できる**。公式は「自動化ツールやサードパーティのシステムが、本文を直接書き換えるのではなく、ユーザーのレビューに向けて改訂を提案できる」と説明している。

対象は **Google Docs API / Google Sheets API / Google Slides API** の3つ。利用者は**全 Workspace 顧客と個人の Google アカウント**で、専用の管理者設定やエンドユーザー設定は不要（ただし管理者はアプリの Workspace データへのアクセスを制限できる）。

ロールアウトは **2026-09-30 から段階的**に開始され、Rapid Release / Scheduled Release の両ドメインで**15日以内**に見えるようになる見込み。

公式は用途として「社内のレビューツール、自動化されたコンテンツパイプライン、プロジェクト追跡システムを Workspace のエディタへ直接つなぐ」ことを挙げている。**手作業の介入ではなくプログラムによるワークフローを支え、特に suggested edits は人間のレビュー工程を保ったまま自動化できる**点が強調されている。

## できるようになったこと

- Docs / Sheets / Slides のコメントを API から作成・読み取り・管理
- **Docs API から提案（suggested edits）を作成**できる
- 外部システムとエディタの直接連携（レビューツール、コンテンツパイプライン、進捗管理）

## 影響範囲

- 対象ユーザー: 全 Workspace 顧客 + 個人 Google アカウント
- 対象プラン: 制限の明記なし。管理者設定は不要
- API / UI / 管理者機能: Docs / Sheets / Slides API。管理者はアプリのデータアクセスを制限可能
- ロールアウト: 2026-09-30 開始、15日以内に反映

教材化メモ: src/content/ai-news-notes/gemini/workspace-apis-comments-and-suggestions.mdx

## 原文確認

- 公式見出し: Programmatic comment and suggestion support now available in the Google Docs, Sheets, and Slides APIs
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/programmatic-comment-and-suggestion.html
- 原文全文は公式ページで確認してください。
