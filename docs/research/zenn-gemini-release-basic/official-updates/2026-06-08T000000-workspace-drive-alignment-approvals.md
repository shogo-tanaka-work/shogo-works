---
date: 2026-06-08
title: "Google Drive — 承認ワークフローに「軽量アライメント承認」オプションを追加"
service: "Google Workspace / Drive"
source: https://workspaceupdates.googleblog.com/2026/06/request-lightweight-document-alignment-with%20approvals%20in%20Google%20Drive.html
fetched_at: 2026-06-09T10:37:42+09:00
published_at: 2026-06-08
date_precision: date-only
rollout_date: 2026-06-02
category: enhancement
---

# 2026-06-08 Google Drive 軽量アライメント承認

## 公式内容の日本語要約

Google Drive の承認ワークフローに「アライメント承認」オプションが追加された。承認リクエスト時に「Require all approvers to review the same content（全承認者が同一内容をレビューする必要がある）」チェックボックスをオフにすると、ドキュメント内容が変更されても承認がリセットされない軽量モードになる。チェックをオンにすると従来どおり、内容変更で承認がリセットされる。合意形成（アライメント）目的の軽い承認に向く。

## できるようになったこと

- 承認リクエストに **「全承認者が同一内容をレビューする必要がある」チェックボックス** を追加。
- **オフ（軽量モード）**: ドキュメント変更後も承認がリセットされない。合意形成・アライメント用途向け。
- **オン（従来動作）**: 内容変更で承認がリセットされる。

## 影響範囲

- 対象ユーザー: Drive で承認ワークフローを使うビジネス／教育ユーザー
- 対象プラン: Business Standard / Plus、Enterprise 各種、Education Plus、Nonprofits ほか
- 展開: Rapid Release は 2026-06-02 から段階展開済み、Scheduled Release は 2026-06-15 から全面展開予定
- API / UI / 管理者機能: Drive の承認 UI

## 教材化メモ

Workspace の「ドキュメント承認ワークフロー」章に、アライメント承認（軽量モード）の使い分けを追記。「厳密承認（内容変更で再承認）」と「軽量承認（合意形成目的・変更で再承認しない）」の使い分け基準を表で示す。ロールアウト日（Rapid 06-02 / Scheduled 06-15）に触れ、対象プランを明記する。

## 原文確認

- 公式見出し: Request lightweight document alignment with approvals in Google Drive
- 公式URL: https://workspaceupdates.googleblog.com/2026/06/request-lightweight-document-alignment-with%20approvals%20in%20Google%20Drive.html
- 原文全文は公式ページで確認してください。
