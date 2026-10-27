---
date: 2026-10-26
title: "Cloudflare Computer が中断からの再開と承認待ちに対応"
service: "Agents"
product: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-26-computer-durable-javascript/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-26-computer-durable-javascript/
fetched_at: 2026-10-27T09:09:00+09:00
published_date: 2026-10-26
date_precision: date-only
category: enhancement
---

# 2026-10-26 Cloudflare Computer の再開・承認待ち

## 公式内容の日本語要約

`@cloudflare/computer` v0.7.0 から、エージェントが実行するコードがデプロイやクラッシュの後に再開でき、外部アクションで一時停止できる。`WorkerJavaScriptBackend` に `onInterrupt: "replay"` を指定すると、再開時にコードを先頭から再実行し、完了済みの呼び出しは記録済みの結果を再利用する（出力は再表示しない）。結果が記録される前に中断された呼び出しは、成功済みでも繰り返される可能性があり、`unsafeToRepeat()` で再実行できない操作を扱う。

カスタムモジュールの関数から `ctx.interrupt()` を呼ぶと、アプリが承認結果を返すまで実行を止められる（例: コメント投稿前の承認）。再開は `workspace.runtime` の次の呼び出しで始まり、Durable Object のアラームから `recover()` を呼べば待たずに復旧できる。

記事化判断: 見送り（スコア不足・5点）。1 / 1 / 1 / 0 / 2。2026-10-20 の Think / Computer 記事の機能拡張で、開発者向けの限定的な更新。

教材化メモ: 記事化しないため省略。承認待ち（human-in-the-loop）と再実行の冪等性の題材にはなる。

## 原文確認

- 公式見出し: Cloudflare Computer now helps agents recover from interruptions and wait for approval
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-26-computer-durable-javascript/
- 原文全文は公式ページで確認してください。
