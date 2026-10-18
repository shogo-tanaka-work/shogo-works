---
date: 2026-10-17
title: "Local Explorer から Cron Trigger を単発実行できるようになった（エージェント向け HTTP API も同時に用意）"
service: "Workers"
product: "Workers, Cloudflare CLI"
source: https://developers.cloudflare.com/changelog/post/2026-10-17-local-explorer-cron-triggers/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-17-local-explorer-cron-triggers/
fetched_at: 2026-10-18T09:10:00+09:00
published_date: 2026-10-17
date_precision: date-only
category: enhancement
---

# 2026-10-17 Local Explorer の Cron Triggers

## 公式内容の日本語要約

ローカル開発ツール **Local Explorer** から、Worker の **`scheduled()` ハンドラへ Cron Trigger を単発で投げられるようになった。** 従来はスケジュール実行の挙動を試すために、**自分でリクエストURLを組み立てる**必要があった。

使い方は、`cf dev` / `wrangler dev` / Cloudflare Vite プラグインでローカル開発サーバーを起動し、そのURLの **`/cdn-cgi/local/explorer`** を開いて **Cron Triggers** を選ぶ。要件は **Wrangler 4.139.0 以降、または Vite プラグイン 1.60.0 以降**で、Worker が `scheduled()` を export していること。

できることは4つ。**(1)** 設定済みの cron 式の実行（`Configured Crons`。実行時刻は既定 `Now`、UTC 日時または epoch ミリ秒でプリセット追加可）、**(2)** アドホックな cron 式の実行（式を直接入力、または5フィールドUTCスケジュールのビルダー。間隔・日次・平日・月次に加え Quartz 系の `L` / `W` / `LW` / `#` に対応）、**(3)** 実行時刻のプリセット保存、**(4)** 実行結果と **`noRetry()` が適用されたか**の確認。結果には outcome、`noRetry()` の状態、投げられた cron 式、実行時刻が出る。

**エージェント・ツール向けに同じ操作の HTTP エンドポイントが用意されている。** `POST /cdn-cgi/local/explorer/api/local/scheduled?worker=<WORKER_NAME>` に `{"cron":"0 * * * *","scheduled_time":1745856238000}` のような body を渡す（cron 式は必須、`scheduled_time` は任意の Unix ミリ秒）。Local Explorer の API 全体は **`/cdn-cgi/local/explorer/api` で OpenAPI 記述**されており、**AI エージェントを検出すると開発サーバーがこのエンドポイントを案内する出力を出す。**

注意点が3つ明記されている。**アドホック実行と保存したプリセットはブラウザ内に留まり**、`cloudflare.config.ts`・Wrangler 設定・デプロイ済み Cron Trigger を変更しない。**ローカル開発では cron が自動実行されない**（投入は手動のみ）。完全なログとトレースは、その開発セッションで **Observability を有効にしている場合**に見られる。

教材化メモ: src/content/ai-news-notes/cloudflare/local-explorer-cron-triggers.mdx

## できるようになったこと

- Local Explorer の UI から `scheduled()` ハンドラへ Cron Trigger を単発投入できる（リクエストURLの自作が不要）
- 設定済み cron 式・アドホック cron 式の両方を実行でき、実行時刻を指定・プリセット保存できる
- 実行結果と `noRetry()` の適用状況を確認できる
- `POST /cdn-cgi/local/explorer/api/local/scheduled?worker=<名前>` で同じ操作をツール・エージェントから叩ける

## 影響範囲

- 対象ユーザー: Workers で `scheduled()`（Cron Triggers）を使う開発者、ローカル開発にエージェントを入れている開発者
- 対象プラン: changelog・ドキュメントにプラン条件の記載なし。ローカル開発機能
- API / UI / 管理者機能: Wrangler 4.139.0 以降 / Vite プラグイン 1.60.0 以降。設定ファイルとデプロイ済み Cron Trigger は変更されない

## 原文確認

- 公式見出し: `Workers, Cloudflare CLI - Test Cron Triggers with Local Explorer`
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-17-local-explorer-cron-triggers/
- ドキュメント: https://developers.cloudflare.com/workers/development-testing/local-explorer/
- 原文全文は公式ページで確認してください。
