---
date: 2026-10-02
title: "Custom Dashboards が Workers Observability のログ・トレースに対応。ダッシュボード上限は100件へ"
service: "Analytics"
product: "Analytics, Workers Observability"
source: https://developers.cloudflare.com/changelog/post/2026-10-02-workers-observability-in-custom-dashboards/
fetched_at: 2026-10-03T09:10:00+09:00
published_date: 2026-10-02
date_precision: date-only
category: enhancement
---

# 2026-10-02 Custom Dashboards の Workers Observability 対応

## 公式内容の日本語要約

Custom Dashboards に **「Workers Observability — Logs」と「Workers Observability — Traces (OTel)」の2データセット**が追加された。Worker の呼び出し回数、ログレベル、エラー、CPU / wall time、スパンのメトリクスを、既存の HTTP トラフィックやセキュリティイベントと**同じダッシュボード上に並べられる**。

狙いは相関分析である。「エラーの急増がトラフィックの変化と一致しているか」といった問いに、画面を行き来せず答えられるようになる。

利用条件は、アカウント内の Worker で **Workers Logs または Workers Traces が有効**になっていることである。あわせて**アカウントあたりのカスタムダッシュボード上限が100件**へ引き上げられた。

## できるようになったこと

- Worker のログ・トレースをカスタムダッシュボードのウィジェットとして置ける
- ネットワーク層と Worker 層のデータを1枚で突き合わせられる
- ダッシュボードを100件まで作れる

## 影響範囲

- 対象ユーザー: Workers を本番運用する開発者、SRE
- 対象プラン: Custom Dashboards 利用者（2026-10-02 の Enterprise for all で全プランへ開放）
- API / UI / 管理者機能: Custom Dashboards のデータセット選択

## 教材化メモ

- **「2つの層のデータを1枚に置く」こと自体が分析の前提条件**という整理。別画面に分かれているだけで、人は相関を見ない。ダッシュボード設計の一般原則として使える。
- **ダッシュボード上限100件は「作りすぎると誰も見ない」側の問題**を生む。上限緩和のニュースは、運用ルール（命名、棚卸し）とセットで教材化しないと片手落ちになる。
- 本更新は 2026-10-02 の Observability 8更新（`2026-10-02T000001-observability-unified-platform.md`）の一部として扱い、単独記事化はしていない（スコア5）。

## 原文確認

- 公式見出し: Workers Observability logs and traces in Custom Dashboards
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-02-workers-observability-in-custom-dashboards/
- 原文全文は公式ページで確認してください。
