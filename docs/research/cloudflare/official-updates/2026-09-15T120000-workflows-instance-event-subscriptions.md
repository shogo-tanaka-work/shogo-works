---
date: 2026-09-15
title: "Workflows に .subscribe() が追加 — インスタンスのイベントをポーリングなしで受け取れる"
service: "Cloudflare"
product: "Workflows, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-09-15-instance-event-subscriptions/
fetched_at: 2026-09-16T09:02:00+09:00
published_at: 2026-09-15T12:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-09-15 Workflows のインスタンスイベント購読

## 公式内容の日本語要約

Cloudflare は 2026-09-15、Workflows のインスタンスイベントを**ポーリングなしでストリーム受信できる** `WorkflowInstance.subscribe()` を追加した。Worker の中から呼ぶ方法と、`GET /subscribe` の API エンドポイント経由の両方が用意されている。

受け取れるのは **workflow レベルと step レベルの両方のイベント**で、公式は attempts（試行）、sleeps（待機）、waits、rollbacks を挙げている。`filter` パラメータで特定のイベント種別だけを購読できる。

購読の挙動に特徴がある。**購読を開始すると、まずそのインスタンスのイベント履歴を最初から流し切り、そのあと実行の進行に合わせて新しいイベントを待つ。** `cursor` パラメータを使えば、先頭からではなく特定のイベントから受信を始められる。

公式のコード例は、`env.MY_WORKFLOW.get("report-123")` でインスタンスを取得し、`using subscription = await instance.subscribe()` で購読して `subscription.next()` を回す形になっている。`using` 宣言を使っている点から、購読の後始末が明示的に扱われる設計であることが読み取れる。

想定ユースケースとして公式が挙げているのは、ユーザー向けダッシュボードでの Workflow 状態の更新、ステップ完了時の通知送信、特定イベントを契機にした後続処理のトリガーである。

## できるようになったこと

- Workflow インスタンスの進行状況をポーリングせずにストリームで受け取れる
- 履歴のリプレイと、その後のライブ受信を同一の購読で扱える
- `filter` でイベント種別を、`cursor` で開始位置を絞り込める

## 影響範囲

- 対象ユーザー: Workflows を使う開発者
- 対象プラン: 明記なし（Workflows 利用者）
- API / UI / 管理者機能: `WorkflowInstance.subscribe()`（Workers ランタイム API）、`GET /subscribe`（HTTP API）

教材化メモ: src/content/ai-news-notes/cloudflare/workflows-instance-event-subscriptions.mdx

## 原文確認

- 公式見出し: Stream Workflow instance events in your Worker or via the API with .subscribe()
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-15-instance-event-subscriptions/
- 原文全文は公式ページで確認してください。
