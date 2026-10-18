---
date: 2026-10-01
title: "Workers KV Instant（プライベートベータ）。Quicksilver による p99 2ms 未満の読み取りと 250ms の全世界複製"
service: "Workers KV"
product: "Workers KV"
source: https://blog.cloudflare.com/workers-kv-instant/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: release
---

# 2026-10-01 Workers KV Instant

## 公式内容の日本語要約

Workers KV に **instant モード**が追加された。Cloudflare 社内の設定配布基盤 **Quicksilver** を読み取り経路に使い、**Workers KV の API はそのまま**で大幅に高速化する。

公式の数値。**読み取りは p99 で 2ms 未満（実測 1.62ms）**で、classic モードの **287ms と比べて100倍以上**。p95 はマイクロ秒台。**書き込みの複製は 300以上のエッジ拠点へ 250ms**（中央値 107ms / p95 181ms / p99 256ms）。

**classic との差分（制約）**が4つある。**namespace 作成時に instant モードを明示する必要がある**。**メタデータ非対応**で `getWithMetadata` は null を返す。**list はページネーションなしで全一致キーを1回で返す**。**書き込みは namespace あたり毎秒1回まで**。

価格は読み取り中心・小容量のワークロード向けに設定されている。**Class B（読み取り）$0.20 / 100万回**で classic より60%安い。**Class A（put / delete / list）$0.10 /（公式表記のまま）**。**ストレージは $100 / MB・月**で、**namespace あたり最大 1MB・10,000 キー**。

**2026-10-01 からプライベートベータ**で、申込制である。

## できるようになったこと

- 既存の KV API のまま、p99 2ms 未満の読み取りを得る
- 設定値・フラグ・ルーティングテーブルのような小容量データの即時全世界反映（250ms）

## 影響範囲

- 対象ユーザー: Workers 利用者（**プライベートベータ・申込制**）
- 対象プラン: 上表の従量課金。**namespace 1MB / 10,000 キー / 毎秒1回書き込み**の制約あり
- API / UI / 管理者機能: namespace 作成時のモード指定。`getWithMetadata` は使えない

教材化メモ: src/content/ai-news-notes/cloudflare/workers-kv-instant.mdx

## 原文確認

- 公式見出し: Introducing Workers KV Instant — powered by Quicksilver
- 公式URL: https://blog.cloudflare.com/workers-kv-instant/
- 原文全文は公式ページで確認してください。
