---
date: 2026-06-22
title: "Gemini in Google Sheets: 数式エラーの原因説明と修正案を自動提示"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/06/troubleshoot-formula-errors-in-sheets.html
fetched_at: 2026-06-23T07:44:10+09:00
published_at: 2026-06-22T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-06-22 Gemini in Google Sheets: 数式エラー自動診断

## 公式内容の日本語要約

Google Sheets で `#DIV/0!`・`#REF!` 等の数式エラーが発生したセルにカーソルを合わせると、Gemini がエラーの原因をわかりやすく説明し、修正済み数式を自動提案する機能が追加された。周辺セルのデータ構造も分析して具体的な原因（「参照先列が日付ではなくテキスト形式」等）を示す。

## できるようになったこと

- 数式エラーセルで Gemini がエラー原因を自然言語で説明
- 修正済み数式をワンクリックで提案・適用
- 基本的な四則演算から複雑な入れ子関数まで対応
- ロールアウト開始: 2026-06-22（Rapid/Scheduled 両ドメイン、最大15日で全体展開）

## 影響範囲

- 対象ユーザー: Google Workspace Business Standard/Plus・Enterprise Standard/Plus・Google AI Pro/Ultra・Education・AI Expanded Access
- 対象プラン: 上記プランのユーザー
- API / UI / 管理者機能: Sheets 内 UI（管理コンソールで Gemini for Workspace in Sheets 有効化が必要）

## 教材化メモ

「AI がエラーメッセージを人間の言葉で説明する」という使い方の具体例として初心者向け教材に最適。「なぜこのエラーが出るのか調べる前に Gemini に聞く」という AI 活用ハビットを定着させる入り口になる。Excel/Sheets ユーザーが最初に AI 活用を体験するユースケースとして普及しやすい。

## 原文確認

- 公式見出し: Troubleshoot formula errors with Gemini in Google Sheets
- 公式URL: https://workspaceupdates.googleblog.com/2026/06/troubleshoot-formula-errors-in-sheets.html
- 原文全文は公式ページで確認してください。
