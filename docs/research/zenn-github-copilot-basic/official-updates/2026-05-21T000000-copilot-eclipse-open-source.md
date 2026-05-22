---
date: 2026-05-21
title: "GitHub Copilot for Eclipse を MIT ライセンスで OSS 化"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-05-21-github-copilot-for-eclipse-is-open-source/
fetched_at: 2026-05-22T11:53:55+09:00
published_date: 2026-05-21
date_precision: date-only
category: release
---

# 2026-05-21 GitHub Copilot for Eclipse を OSS 化

## 公式内容の日本語要約

GitHub は 2026-05-21、Eclipse IDE 向けの Copilot 拡張「GitHub Copilot for Eclipse」を **MIT ライセンスでオープンソース化**したと changelog で発表した。リポジトリは `github.com/microsoft/copilot-for-eclipse`。Eclipse の長年のオープンエコシステム文化に合わせ、コミュニティ主導の改善と透明性の向上を狙う。

## できるようになったこと

- Eclipse 版 Copilot 拡張のソースコードが MIT ライセンスで公開され、誰でも内部実装を確認・改変・コントリビュートできるようになった。
- 公開コードには、コード補完・チャット・エージェント的ワークフロー、および MCP（Model Context Protocol）連携などの実装詳細が含まれる。

## 影響範囲

- 対象ユーザー: Eclipse を開発環境とする開発者・組織。プラグインの挙動を監査したい情シス / セキュリティ部門。
- 対象プラン: 拡張自体の OSS 化であり、Copilot の利用には引き続き対応プランのサブスクリプションが必要。
- API / UI / 管理者機能: IDE 拡張。VS Code / JetBrains 版は対象外（今回は Eclipse 版のみ）。

## 教材化メモ

IDE 拡張の OSS 化は「Copilot 拡張がどう動いているか（補完・チャット・MCP 連携の実装）を検証できる」点が恒久的に効く。Copilot の Knowledge 教材は現状未整備のため、教材本体への反映は行わず、ニュース記事 + 教材化メモに留める。Eclipse 利用組織が拡張のセキュリティ監査をしたい場合の参照先として記録。

## 原文確認

- 公式見出し: GitHub Changelog "GitHub Copilot for Eclipse is open source"
- 公式URL: https://github.blog/changelog/2026-05-21-github-copilot-for-eclipse-is-open-source/ , https://github.com/microsoft/copilot-for-eclipse
- 原文全文は公式ページで確認してください。
