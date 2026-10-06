---
date: 2026-10-01
title: "GitHub Copilot がデスクトップアプリを操作できる computer use（public preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-10-01T00:00:00Z
date_precision: date-only
category: release
---

# 2026-10-01 GitHub Copilot の computer use

## 公式内容の日本語要約

**computer use** が **public preview** で公開された（2026-10-01）。Copilot が利用者の代わりにデスクトップアプリを操作する機能である。

公式が挙げる操作は、アクセシビリティ経由のアプリ内容と視覚的文脈の読み取り、コントロールのクリック、テキスト入力・編集、キー押下、スクロール、ドラッグ、**複数アプリをまたいだワークフローの操作**。

対象は **GitHub Copilot CLI** と **GitHub Copilot app** の macOS / Windows 版。対象プランは changelog に明記されていない。

**既定は無効（オプトイン）である。** CLI では `/computer on` で有効化、`/computer show` で状態確認、`/computer off` で無効化。app では Settings > Computer Use > Enable Computer Use。

安全側の作りとして、**アプリを操作する前に承認を求める**。macOS ではアクセシビリティと画面収録の権限付与へ OS が誘導する。利用者は「常に許可」に設定したアプリの一覧を確認できる。

**組織管理設定（organization-managed settings）でこの機能を無効化できる。**

## できるようになったこと

- Copilot がデスクトップアプリを直接操作（オプトイン）
- アプリ単位の「常に許可」の確認
- 組織管理設定による機能の無効化

## 影響範囲

- 対象ユーザー: Copilot CLI / app の macOS・Windows 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: **organization-managed settings で無効化可能**。macOS はアクセシビリティ・画面収録の OS 権限が必要

## 教材化メモ

- **権限の境界が「ファイルとコマンド」から「画面と入力デバイス」へ広がった。** アクセシビリティと画面収録の権限は、**そのアプリが画面上の全情報を読める**ことを意味する。Copilot に限らず、この2つの権限を要求するツールの審査基準を社内で決めておく必要がある。
- **既定オフ・アプリ単位の承認・管理設定での無効化**という3段構えは、エージェントに強い権限を渡すときの標準形になりつつある。Claude Code の auto mode や Codex のサンドボックスと並べると、**ベンダーが揃って同じ設計に収束している**ことが示せる。
- 「常に許可」の一覧を利用者が**確認できる**という点が実務的に重要。承認は一度与えると忘れるため、**棚卸しできる画面があるか**は審査項目にすべきである。

## 原文確認

- 公式見出し: GitHub Copilot can now interact with desktop apps with computer use
- 公式URL: https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps
- 原文全文は公式ページで確認してください。
