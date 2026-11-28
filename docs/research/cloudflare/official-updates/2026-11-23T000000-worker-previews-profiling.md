---
date: 2026-11-23
title: "Worker Previews で CPU・ヒーププロファイル"
service: "Cloudflare"
source: https://developers.cloudflare.com/changelog/post/2026-11-23-previews-profiling/
fetched_at: 2026-11-24T09:20:00+09:00
published_at: 2026-11-23
date_precision: date-only
category: enhancement
---

# Worker Previews で CPU・ヒーププロファイル

## 公式内容の日本語要約

Workers / Durable Objects 向けのオンデマンド CPU・メモリプロファイルを Worker Previews にも拡張。cf previews deployments profile または API で Preview デプロイのプロファイル（pprof）を取得し、マージ前に PR の CPU・メモリ消費を確認できる。各デプロイが ID を持つため、エージェントが『デプロイ→負荷→プロファイル→修正』を繰り返せる。product: Workers, Durable Objects。スコア5で見送り。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-23-previews-profiling/
- 原文全文は公式ページで確認してください。
## 教材化メモ

プロファイル取得をエージェントの反復ループに組み込む例として使える。単独記事にするほどの新規性はない。
