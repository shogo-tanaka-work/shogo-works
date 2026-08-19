---
date: 2026-08-17
title: "Cursor Origin — コードホスティングを提供開始"
service: "Cursor"
source: https://cursor.com/changelog/origin-code-hosting
fetched_at: 2026-08-18T08:12:00+09:00
published_at: 2026-08-17
date_precision: date-only
category: release
---

# 2026-08-17 Cursor Origin（コードホスティング）

## 公式内容の日本語要約

**Cursor がコードのホスティングを始めた。**「Origin」という名前で、同日から全有料プランに early beta としてロールアウトされる（Enterprise 組織は管理者がオプトアウト可能）。公式は「エージェントのスケールに合わせて設計した」と位置づけ、初期スコープをリポジトリ、プルリクエスト、コードブラウジング、GitHub 同期の4点に絞っている。エージェントネイティブな機能は今後追加予定。

新設の **Codebase タブ**が Origin リポジトリの入口になる。`+New` でリポジトリを作ると CLI のインストール手順が表示され、clone または既存プロジェクトの push で Origin 上にコードが載る。最初のリポジトリ作成時に codebase 名を決め、それが全リポジトリの URL に入る（`cursor.com/codebase/<name>`）。

**GitHub リポジトリは併存できる。**GitHub を接続して org を選ぶと同期可能なリポジトリが一覧され、選んだものが取り込まれる。同期は双方向ではなく非対称で、**push は GitHub に向かい、GitHub が source of truth のまま**。Origin 側のコピーは real time で更新され、browse / search / pull に使える。リポジトリ名の横のアイコンで Cursor ホストか GitHub 由来かを判別する。同期はいつでも解除できる。

**プルリクエストは各リポジトリに付く。**タイムライン、コミット、チェック、変更ファイルが見え、diff レビュー・コメント・マージができる。同期リポジトリの PR は**コメントが双方向に同期**し（Cursor で書けば GitHub に反映、GitHub 側の返信も数秒で Cursor に出る）、GitHub でアサインされたレビューを Cursor 側で完了・マージできる。

アプリ連携も同時提供で、**Vercel / Depot / Buildkite** が利用可能。Vercel を接続すると PR ごとにプレビューデプロイが付く。Depot と Buildkite は既存の GitHub Actions ワークフローを実行でき、Buildkite はネイティブパイプラインも動く。

## できるようになったこと

- Cursor 上でのリポジトリホスティング（CLI 経由の clone / push）
- GitHub リポジトリの取り込みと real time 同期（GitHub が source of truth）
- PR のレビュー・コメント・マージ（同期リポジトリはコメント双方向同期）
- 閲覧中のコードに対するエージェントへの質問・変更・PR 更新・ブランチ push
- Vercel / Depot / Buildkite 連携（PR プレビューデプロイ、CI 実行）

## 影響範囲

- 対象ユーザー: 全有料プラン（Enterprise は管理者オプトアウト可）
- 対象プラン: 有料プラン。early beta
- API / UI / 管理者機能: 新規 Codebase タブ、リポジトリ単位の access 管理・同期状態・接続アプリ設定

教材化メモ: src/content/ai-news-notes/cursor/origin-code-hosting.mdx

## 原文確認

- 公式見出し: Origin Code Hosting — "Cursor can now host your code."
- 公式URL: https://cursor.com/changelog/origin-code-hosting
- 原文全文は公式ページで確認してください。
