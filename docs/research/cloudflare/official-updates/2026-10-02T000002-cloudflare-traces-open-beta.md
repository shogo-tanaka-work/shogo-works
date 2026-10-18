---
date: 2026-10-02
title: "Cloudflare Traces がオープンベータ。計装なしでリクエストの通過経路をスパン分解、OTLP でエクスポート可"
service: "Cloudflare Traces"
product: "Observability, Workers"
source: https://blog.cloudflare.com/cloudflare-tracing/
fetched_at: 2026-10-03T09:10:00+09:00
published_date: 2026-10-02
date_precision: date-only
category: release
---

# 2026-10-02 Cloudflare Traces オープンベータ

## 公式内容の日本語要約

**Cloudflare Traces** がオープンベータに入った。リクエストが Cloudflare のプラットフォームをどう通過したかを、**セキュリティルール、Transform Rules、キャッシュ、ルーティング、Workers 実行、オリジン処理**にまたがる1本のタイムラインとして出す。

**計装（instrumentation）が要らない。** Cloudflare 側で自動的に**スパン**（処理1ステップの記録。所要時間・結果・属性を持つ）が生成される。答えられる問いの例として、「**どのセキュリティルールがブロック / チャレンジしたか**」「**Transform Rules が URL を書き換えたか**」「**レスポンスはキャッシュとオリジンのどちらから返ったか**」「**どの Page Rules / Snippets / Workers が処理したか**」が挙げられている。

**サンプリングは2段構え**である。まず**ベースラインのサンプリング率**を設定する（通常時は1%など）。そのうえで **Trace Rules** により、Cloudflare の Rules 言語で**特定のトラフィックだけベースラインを上書き**できる。ホスト名、IPアドレス、ヘッダーなどを条件に、**ドメイン全体のトレース量を上げずに特定の調査だけ掘れる**。

**OpenTelemetry 対応**として、**OTLP で任意のオブザーバビリティ基盤へエクスポート**できる。**W3C の `traceparent` ヘッダーを受け取り**、新しいヘッダーをオリジンへ転送するため、Cloudflare の前後を含めた分散トレースがつながる。

**料金は Observability 全体の新体系に従い、2026-12-01 発効**である。Free は 1日 0.5 GB 取り込み・保持7日（エクスポート不可）、有料 / Enterprise は 50 GB 取り込み + 10 GB・月 込みで**保持は最長1年**、超過は取り込み $0.25/GB、保存 $0.10/GB・月。

## できるようになったこと

- 計装コードを書かずに、Cloudflare 内部の処理経路をスパン単位で見られる
- Trace Rules で「この IP だけ 100% トレース」のような一時的な深掘りができる
- OTLP で Datadog / Grafana などの既存基盤へ流せる
- W3C trace context でオリジン側のトレースと接続できる

## 影響範囲

- 対象ユーザー: Cloudflare を本番前段に置く運用者、Workers の障害調査担当
- 対象プラン: 全プラン（Free はエクスポート不可）。**2026-12-01 から容量課金**
- API / UI / 管理者機能: Traces UI、Trace Rules、OTLP エクスポート設定

教材化メモ: src/content/ai-news-notes/cloudflare/cloudflare-traces-open-beta.mdx

## 原文確認

- 公式見出し: Introducing Cloudflare Traces: follow requests through our entire platform
- 公式URL: https://blog.cloudflare.com/cloudflare-tracing/
- 関連: https://blog.cloudflare.com/one-observability-platform/
- 原文全文は公式ページで確認してください。
