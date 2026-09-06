---
date: 2026-09-04
title: "Workers の圧縮後サイズ上限を撤廃し、全プランで非圧縮 64 MiB に一本化"
service: "Cloudflare"
product: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-09-04-increased-worker-size-limit/
fetched_at: 2026-09-05T09:30:00+09:00
published_date: 2026-09-04
date_precision: date-only
category: policy
---

# 2026-09-04 Workers の圧縮後サイズ上限を撤廃し、全プランで非圧縮 64 MiB に一本化

## 公式内容の日本語要約

Cloudflare は Workers のデプロイ時サイズ制限を変更した。これまで Wrangler はコードをバンドルして圧縮したうえでアップロードし、Cloudflare は**圧縮後サイズ**が Free で 3 MB、Paid で 10 MB を超えるデプロイを拒否していた。この圧縮後の上限が撤廃された。

現在チェックされるのは**非圧縮のバンドルサイズのみ**で、上限は**全プラン共通で 64 MiB** である。Free プランでも Paid プランでも同じ枠になった点が実務上は大きい。

デプロイ前の確認方法も公式に示されている。`wrangler deploy --outdir bundled/ --dry-run` を実行すると `Total Upload: 259.61 KiB / gzip: 47.23 KiB` のような出力が得られ、このうち **`Total Upload`（非圧縮サイズ）が 64 MiB の判定対象**になる。`gzip` の値は参考表示として残るが、もはや上限ではない。

これにより、重いフレームワークや大きな依存関係を含む Worker をデプロイしやすくなる。従来は圧縮後 3 MB / 10 MB の壁に当たって依存を削るか分割するかの判断を迫られていたケースが、非圧縮 64 MiB の枠内なら通るようになる。

## できるようになったこと

- Free プランでも Paid プランと同じ 64 MiB（非圧縮）までの Worker をデプロイできる
- 圧縮後サイズ（3 MB / 10 MB）による拒否がなくなった
- `wrangler deploy --dry-run` の `Total Upload` を見れば、デプロイ前に上限判定と同じ値を確認できる

## 影響範囲

- 対象ユーザー: Cloudflare Workers の開発者・運用者
- 対象プラン: Free / Paid の全プラン（同一の 64 MiB）
- API / UI / 管理者機能: デプロイ時の制限。Wrangler の挙動と CI のサイズチェックに影響

教材化メモ: src/content/ai-news-notes/cloudflare/workers-size-limit-64mib.mdx

## 原文確認

- 公式見出し: Deploy larger Workers — up to 64 MiB for both free and paid plans
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-04-increased-worker-size-limit/
- 原文全文は公式ページで確認してください。
