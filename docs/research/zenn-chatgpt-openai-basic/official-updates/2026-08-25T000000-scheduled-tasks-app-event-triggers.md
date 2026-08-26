---
date: 2026-08-25
title: "ChatGPT の定期タスクが Gmail / Slack / GitHub のイベントで起動可能に。タスクの共有と Free 枠（3件）も追加"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-08-26T09:05:00+09:00
published_at: 2026-08-25
date_precision: date-only
category: release
---

# 2026-08-25 ChatGPT 定期タスクのイベント起動と共有

## 公式内容の日本語要約

ChatGPT Work の定期タスク（Scheduled tasks）が、**時刻起動に加えてアプリ側のイベントで起動できる**ようになった。対応する webhook は、Gmail の新着メッセージ、Slack チャンネルへの投稿、GitHub のプルリクエスト関連の動きの3つ。Gmail は送信者や件名でフィルタでき、Slack は監視するチャンネルを選択、GitHub はレビュー・コメント・コミット更新・マージといった PR の活動に反応する。

作成できるのは **Plus / Pro** ユーザーで、web・iOS・Android から利用する。前提として、対象アプリを接続してアクセスを承認しておく必要があり、**Slack は監視する各チャンネルに ChatGPT アプリ（`@ChatGPT`）をメンバーとして追加**、GitHub は接続アプリが対象リポジトリへアクセスできる状態にしておく必要がある。承認が必要なアクションは、利用者が確認するまで停止する。

制約も明示されている。**イベント起動タスクは時刻ベースのスケジュールと併用できない。**該当イベントが短時間に連続した場合、ChatGPT が1回の実行にまとめることがある。保留中のイベントは Scheduled 画面で確認でき、`Run now` で即時実行もできる。

**タスクの共有**は Free / Go / Plus / Pro のすべてで可能になった。受け取った側は指示内容と（該当する場合は）スケジュールを確認・変更し、自分のアプリを接続して**独立したコピー**を作れる。ただし共有された webhook 起動タスクを実行するには、受け取った側にも Work へのアクセスと自分の接続アプリが必要。

**Free ユーザーは定期タスクを最大3件まで**作成できる。単発または1日1回までの繰り返しで、柔軟なスケジュールウィンドウを使う。**Free / Go はイベント起動タスクを作成できない。**

## できるようになったこと

- Gmail の新着 / Slack チャンネル投稿 / GitHub PR 活動をトリガーに定期タスクを起動（Plus / Pro）
- Gmail は送信者・件名でフィルタ、GitHub はレビュー・コメント・コミット更新・マージに反応
- 定期タスクの共有（Free / Go / Plus / Pro）と、受け取り側での独立コピー作成
- Free ユーザーが定期タスクを最大3件まで作成（単発または1日1回まで）

## 影響範囲

- 対象ユーザー: イベント起動の作成は Plus / Pro。共有は Free / Go / Plus / Pro。Free / Go はイベント起動を作成不可
- 対象プラン: ChatGPT Work（web / iOS / Android）
- API / UI / 管理者機能: UI。接続アプリ側の承認、Slack のチャンネルメンバー追加、GitHub のリポジトリアクセス設定が前提

教材化メモ: src/content/ai-news-notes/chatgpt-openai/scheduled-tasks-app-event-triggers.mdx

## 原文確認

- 公式見出し: 「Scheduled tasks can respond to app updates and be shared」（ChatGPT Release Notes, August 25, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 併記: 「Trigger scheduled tasks from Gmail, Slack, and GitHub events」（ChatGPT & Codex changelog, 2026-08-25） https://learn.chatgpt.com/docs/changelog
- 原文全文は公式ページで確認してください。
