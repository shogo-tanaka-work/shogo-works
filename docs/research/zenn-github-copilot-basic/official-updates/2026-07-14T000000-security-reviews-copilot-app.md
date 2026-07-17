---
date: 2026-07-14
title: "GitHub Copilotアプリにセキュリティレビュー機能（/security-review）がパブリックプレビュー追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-14-security-reviews-now-available-in-the-github-copilot-app
fetched_at: 2026-07-16T13:43:23+09:00
published_at: 2026-07-14
date_precision: date-only
category: enhancement
---

# 2026-07-14 Security reviews now available in the GitHub Copilot app

## 公式内容の日本語要約

GitHub Copilotアプリに`/security-review`スラッシュコマンドがパブリックプレビューで追加された。進行中のコード変更を対象に脆弱性スキャンを実行し、インジェクション、XSS、安全でないデータ処理、パストラバーサル、脆弱な暗号化などを検出する。重大度・確信度でスコアリングされた高確度の指摘とその場で適用可能な修正提案を提供する。Copilot Free/Pro/Business/Enterpriseの全プランで利用可能。

## できるようになったこと

- `/security-review`コマンドで進行中のコード変更に対する脆弱性スキャンを実行可能
- インジェクション・XSS・安全でないデータ処理・パストラバーサル・脆弱な暗号化の検出
- 重大度・確信度スコア付きの指摘とその場で適用可能な修正提案

## 影響範囲

- 対象ユーザー: GitHub Copilotアプリ利用者全般
- 対象プラン: Free / Pro / Business / Enterprise（全プラン）
- API / UI / 管理者機能: Copilotアプリのスラッシュコマンド

## 教材化メモ

- 既存のCode Scanning・Dependabotに加え、PR前段階でのAI駆動インライン脆弱性レビューが追加された形。セキュリティ教材で「開発フローのどの段階でAIレビューを挟むか」の実例として紹介できる。

## 原文確認

- 公式見出し: "Security reviews now available in the GitHub Copilot app"
- 公式URL: https://github.blog/changelog/2026-07-14-security-reviews-now-available-in-the-github-copilot-app
- 原文全文は公式ページで確認してください。
