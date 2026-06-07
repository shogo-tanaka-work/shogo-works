---
date: 2026-06-05
title: "Cursor — Design Mode に複数要素マルチセレクトと音声入力を追加"
service: "Cursor"
source: https://cursor.com/changelog/design-mode-improvements
fetched_at: 2026-06-07T13:00:00+09:00
published_at: 2026-06-05
date_precision: date-only
category: enhancement
---

# 2026-06-05 Cursor Design Mode の改善（マルチセレクト / 音声入力）

## 公式内容の日本語要約

Cursor 3.7 で導入されたブラウザ内 Design Mode に2つの改善が追加された。1つ目は複数要素のマルチセレクトで、2つ以上の要素を選ぶとエージェントが各要素のコード・周囲のレイアウト・視覚的関係をまとめて認識し、一括調整やレイアウト合わせを指示できる。2つ目は音声入力で、エージェント実行中でもマイクで次の変更をキューイングできる。

## できるようになったこと

- **マルチセレクト**: 2つ以上の要素を同時選択。Cursor が選択要素・そのコード・周囲レイアウト・視覚的関係を横断認識し、要素の一致・重複削除・複数コンポーネントの一括調整を依頼可能。
- **音声入力**: Design Mode オーバーレイから変更を音声で指示。エージェント実行中もマイクが使え、前処理の完了を待たずに次の指示を入力できる。

## 影響範囲

- 対象ユーザー: Cursor 3.7 以上で Design Mode を使うユーザー（フロントエンド / UI 調整用途）
- 対象プラン: 記載なし（Design Mode 利用者）
- API / UI / 管理者機能: ブラウザ内 Design Mode の UI 機能

## 教材化メモ

「Design Mode」章（Cursor 3.7 の解説に続く形）に、マルチセレクトで複数要素をまとめて編集する手順と、音声入力で実行中に次タスクをキューイングする使い方を追記。前日記事化した Cursor 3.7 Design Mode の派生改善として位置づける。

## 原文確認

- 公式見出し: Design Mode Improvements
- 公式URL: https://cursor.com/changelog/design-mode-improvements
- 補助: https://cursor.com/blog/design-mode
- 原文全文は公式ページで確認してください。
