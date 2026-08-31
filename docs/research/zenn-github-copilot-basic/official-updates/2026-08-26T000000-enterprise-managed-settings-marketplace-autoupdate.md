---
date: 2026-08-26
title: "Enterprise managed settings がプラグインマーケットプレースの autoUpdate に対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-26-enterprise-managed-settings-now-support-autoupdate-for-plugin-marketplaces/
fetched_at: 2026-08-31T09:40:00+09:00
published_at: 2026-08-26T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-08-26 Enterprise managed settings の autoUpdate 対応

## 公式内容の日本語要約

Enterprise 管理者が `managed-settings.json` で **`"autoUpdate": true`** を指定すると、対応クライアントが**マーケットプレースを自動確認し、そこ由来のインストール済みプラグインを自動更新**するようになった。組織独自のカスタマイズを維持するための手作業を減らす目的である。

対応クライアントは **GitHub Copilot アプリ / Copilot CLI / Visual Studio Code** の3つ。

**制約**: 自動更新の対象になるには、マーケットプレースが組織の **`strictKnownMarketplaces` 許可リストに適合している**必要がある。

2026-08-26 に一般提供。設定以外の管理者作業は不要。

## できるようになったこと

- 管理設定でプラグインの自動更新を有効化できる（Copilot アプリ / CLI / VS Code）

## 影響範囲

- 対象ユーザー: Enterprise managed settings を配布している管理者
- 対象プラン: Copilot Business / Copilot Enterprise
- API / UI / 管理者機能: `managed-settings.json`

## 教材化メモ

- **自動更新と許可リストの組み合わせ**が、拡張機能ガバナンスの現実的な落としどころとして参考になる。全部手動だと更新が止まり、全部自動だと供給側リスクを丸呑みする。**許可リストで供給元を絞ったうえで自動更新する**という2段構えは、社内のガードレール設計にそのまま転用できる。
- 記事化はしない（週次確認ソースの通常更新）。

## 原文確認

- 公式見出し: Enterprise-managed settings now support autoUpdate for plugin marketplaces（2026-08-26）
- 公式URL: https://github.blog/changelog/2026-08-26-enterprise-managed-settings-now-support-autoupdate-for-plugin-marketplaces/
- 原文全文は公式ページで確認してください。
