---
date: 2026-08-03
title: "Cursor に Google Workspace プラグインが追加、エージェントが Gmail / Drive / Calendar を直接操作可能に"
service: "Cursor"
source: https://cursor.com/changelog
fetched_at: 2026-08-04T10:02:00+09:00
published_date: 2026-08-03
date_precision: date-only
category: release
---

# 2026-08-03 Cursor Google Workspace Plugins

## 公式内容の日本語要約

Cursor のエージェントから Google Workspace の各サービスを直接操作できるプラグイン群が公開された。対象は Google Drive、Gmail、Google Calendar、Google Docs、Google Sheets、Google Chat の6サービス。

公式 changelog の表現では、エージェントは「Cursor を離れずにコンテキストを取得し、ファイルを起草・更新し、受信トレイとカレンダーを管理できる」。具体的には Drive のファイル検索・作成・整理、Gmail のメッセージ検索・作成・送信・スレッド管理、Calendar の予定閲覧・作成・更新、Docs の閲覧・編集・作成、Sheets のデータ読み取り・セル更新・スプレッドシート作成、Chat のスペース／メッセージ参照と送信が挙げられている。

提供経路は Cursor Marketplace、または Cursor 内の Customize ページ。changelog 本文ではプラン制限や管理者向けの制御についての明示的な記載はない。

## できるようになったこと

- Cursor のエージェントが Gmail のメール検索・作成・送信・スレッド管理を実行できる
- Drive のファイル検索・アクセス・作成・整理をエージェント経由で行える
- Calendar の予定確認・作成・更新をエディタから離れずに行える
- Docs / Sheets の読み書き（セル更新、スプレッドシート新規作成を含む）に対応
- Google Chat のスペース参照とメッセージ送信に対応
- Marketplace または Customize ページからプラグインを導入できる

## 影響範囲

- 対象ユーザー: Cursor 利用者全般。特に Google Workspace を業務基盤にしている組織
- 対象プラン: changelog 上でプラン制限の明示なし
- API / UI / 管理者機能: プラグイン（Marketplace / Customize）。管理者向け制御の記載は公式 changelog になし

教材化メモ: src/content/ai-news-notes/cursor/cursor-google-workspace-plugins.mdx

## 原文確認

- 公式見出し: Google Workspace Plugins（Aug 3, 2026）
- 公式URL: https://cursor.com/changelog
- 原文全文は公式ページで確認してください。
