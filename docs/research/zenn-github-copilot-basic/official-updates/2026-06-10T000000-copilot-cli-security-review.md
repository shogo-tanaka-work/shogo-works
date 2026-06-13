---
date: 2026-06-10
title: "Copilot CLI に専用セキュリティレビューコマンド `/security-review`（実験的パブリックプレビュー）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-10-dedicated-security-review-command-now-available-in-copilot-cli
fetched_at: 2026-06-11T10:18:34+09:00
published_at: 2026-06-10
date_precision: date-only
category: enhancement
---

# 2026-06-10 Copilot CLI にセキュリティレビューコマンド

## 公式内容の日本語要約

GitHub Copilot CLI に専用のセキュリティレビューコマンド `/security-review` が追加された（実験的パブリックプレビュー）。ローカルのコード変更を分析し、信頼度・重大度でスコアリングされたセキュリティ検出結果と実行可能な改善提案をターミナル内で得られる。

## できるようになったこと

- **`/security-review` コマンド**: ローカルコード変更をターミナルを離れずにセキュリティ分析できる。
- 検出対象: インジェクション、XSS、不安全なデータ処理、パストラバーサル、弱い暗号化など。
- 信頼度・重大度でスコア付けされた検出結果と実行可能な改善提案を提供。
- GitHub Code Scanning・Dependabot・Secret Scanning の補完ツール（置き換えではない）。

## 影響範囲

- 対象ユーザー: Copilot CLI ユーザー
- ステータス: 実験的パブリックプレビュー（Copilot CLI の実験モード有効化が必要）
- 詳細プラン制限: 記載なし（公式ページ参照）

## 教材化メモ

「Copilot CLI 活用」章に追記。PR 前のローカルセキュリティチェックの習慣化ツールとして紹介する。Code Scanning との併用が前提であることも明示する。

## 原文確認

- 公式見出し: Dedicated security review command now available in Copilot CLI
- 公式URL: https://github.blog/changelog/2026-06-10-dedicated-security-review-command-now-available-in-copilot-cli
- 原文全文は公式ページで確認してください。
