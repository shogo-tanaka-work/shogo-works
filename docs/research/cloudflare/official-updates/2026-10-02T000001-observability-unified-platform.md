---
date: 2026-10-02
title: "Cloudflare Observability を8件まとめて更新。新料金は 2026-12-01 発効、Logpush が全プランへ"
service: "Observability"
product: "Workers Observability, Log Explorer, Analytics, Logpush"
source: https://blog.cloudflare.com/one-observability-platform/
fetched_at: 2026-10-03T09:10:00+09:00
published_date: 2026-10-02
date_precision: date-only
category: release
---

# 2026-10-02 Cloudflare Observability の8更新

## 公式内容の日本語要約

Cloudflare がオブザーバビリティ関連を **8件まとめて更新**した。製品ごとにバラバラだったログ・メトリクス・トレースを1つの面へ統合する方向である。

1. **Unified Logs Home（GA）** — Workers Observability と Log Explorer を1画面へ統合。HTTP イベント、ファイアウォールイベント、Workers、Containers、R2、**AI Gateway** のログを同じクエリ体系で扱える。データセット横断クエリは近日。
2. **Cloudflare Traces（オープンベータ）** — リクエスト単位の可視化。別記事で詳述。
3. **Unified SQL API（ベータ）** — 製品横断のテレメトリを単一のSQLで引ける。**新しい `cf` CLI と Cloudflare の Observability MCP サーバー**に統合される。Workers には Analytics Engine を直接引く **SQL binding** が入る。
4. **新料金（2026-12-01 発効）** — イベント数課金から**容量課金**へ。Free は 1日 0.5 GB 取り込み・保持7日。有料 / Enterprise は **50 GB 取り込み + 10 GB・月 ストレージ込み**、超過は **取り込み $0.25/GB、保存 $0.10/GB・月**。
5. **Custom Alerts（ベータ）** — SQL API が対応する任意のデータセットに対して、閾値 / 異常検知 / SLO でアラートを定義。Webhook・チャット・インシデント管理ツールへ通知（全プラン）。
6. **Domain Analytics（GA）** — トラフィック、パフォーマンス、セキュリティ、キャッシュ、オリジン、DNS を統合表示。**全プランで30日保持**。
7. **Custom Dashboards（GA）** — 製品横断のダッシュボードを作ってチーム共有できる。
8. **Logpush（GA / セルフサーブ開放）** — 従来 Enterprise 限定。外部エクスポートは**月25 GB 無料、超過 $0.10/GB**、Transformers は超過 $0.04/GB。

**期限が明記された告知にあたる。2026-12-01 の料金切り替え前に、取り込み量ベースの見積もりが必要**である。

## できるようになったこと

- Workers / R2 / AI Gateway のログを1画面・1クエリ体系で追える
- SQL と MCP サーバー経由でテレメトリをプログラム的に引ける
- 全プランで Logpush とカスタムダッシュボードが使える
- SLO / 異常検知のアラートを自前のデータセットに対して組める

## 影響範囲

- 対象ユーザー: Cloudflare 上で本番運用する開発者、SRE、情シス
- 対象プラン: 全プラン。**2026-12-01 から容量課金へ移行**
- API / UI / 管理者機能: Logs Home、SQL API、`cf` CLI、Observability MCP サーバー、Logpush

教材化メモ: src/content/ai-news-notes/cloudflare/observability-unified-platform.mdx

## 原文確認

- 公式見出し: 8 major updates to Cloudflare Observability
- 公式URL: https://blog.cloudflare.com/one-observability-platform/
- 関連 changelog: https://developers.cloudflare.com/changelog/post/2026-10-02-30-days-analytics-on-every-plan/
- 原文全文は公式ページで確認してください。
