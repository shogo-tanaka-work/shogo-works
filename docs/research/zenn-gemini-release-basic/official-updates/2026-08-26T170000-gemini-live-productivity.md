---
date: 2026-08-26
title: "Gemini Live に Spark 連携・Daily Brief・受信箱の音声操作・Personal Intelligence"
service: "Gemini"
source: https://blog.google/innovation-and-ai/products/gemini-app/productivity-features-gemini-live/
fetched_at: 2026-08-27T09:05:00+09:00
published_at: 2026-08-26T17:00:00Z
date_precision: timestamp
category: release
---

# 2026-08-26 Gemini Live 生産性機能

## 公式内容の日本語要約

Gemini Live が「会話する相手」から「作業を代行するエージェント」側へ移った。公式は Gemini 利用者の **63% が音声で話しかけている**という数字を挙げ、音声起点のエージェント機能をまとめて出した。

**Spark 連携**: 音声で複数ステップの長時間タスクを設定でき、そのまま自走する。Google ドキュメント / スプレッドシート / ドライブ / Web を横断し、目標を保持したまま**数日〜数週間にわたるスケジュール実行**にも対応する（アプリを開いていなくてもよい）。例として、移動中に思いつきを口述するとドキュメントに構造化されたアウトラインが出来ている、保存済みレシピから週次の献立と買い物リストを作る、など。**Google AI Pro 以上**が必要。

**Daily Brief**: 「今日のブリーフは？」と聞くと、Gmail とカレンダーから当日の重要な更新を1つの音声要約にまとめる。**Google AI Plus 以上**が必要。

**受信箱の音声操作**: 「新しいメールある？」「学校から急ぎのメールは？」で検索・要約・スター・アーカイブ・削除をハンズフリーで実行。

**Personal Intelligence**: 過去の会話と Gmail / フォト / 検索 / YouTube を横断して文脈をつなぐ。「去年の夏にニューヨークで行ったレストランの名前は？」のような参照が通る。利用には Gemini の Personal Intelligence 設定でアプリ接続を有効にする必要がある。

公式が強調するのは「どの機能を使うか利用者が選ばなくてよい」という点で、1つの会話の中で Daily Brief → 受信箱検索 → Spark への引き渡しが連続する例を挙げている。

## できるようになったこと

- 音声から Spark の長時間・スケジュール実行タスクを起票（Pro 以上）
- Daily Brief の音声取得（Plus 以上）
- Gmail の検索・要約・スター・アーカイブ・削除の音声操作
- 過去会話と Google アプリを横断する Personal Intelligence

## 影響範囲

- 対象ユーザー: Gemini アプリ利用者（Google AI Plus / Pro 以上で機能差あり）
- 対象プラン: Daily Brief は Plus 以上、Spark は Pro 以上
- API / UI / 管理者機能: Gemini アプリ UI + Personal Intelligence 設定

教材化メモ: src/content/ai-news-notes/gemini/gemini-live-productivity-features.mdx

> 2026-08-28 更新: 2026-08-27 の日次実行では本数上限で見送っていたが（同日の Gemini 3.5 Transcribe を優先）、2026-08-28 の日次実行で引き継ぎ候補として記事化した。`output-format.md` の「教材化メモ節の扱い」に従い、本ファイルの `## 教材化メモ` 節は教材化メモ側（`src/content/ai-news-notes/`）へ移した。

## 原文確認

- 公式見出し: Turn your voice into action with new productivity features in Gemini Live
- 公式URL: https://blog.google/innovation-and-ai/products/gemini-app/productivity-features-gemini-live/
- 原文全文は公式ページで確認してください。
