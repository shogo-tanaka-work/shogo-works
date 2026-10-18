---
date: 2026-09-29
title: "Containers のディスク/メモリ比率制約を撤廃、カスタムインスタンスで最大20GBのディスクを確保可能に"
service: "Cloudflare"
product: "Containers"
source: https://developers.cloudflare.com/changelog/post/2026-09-29-remove-disk-to-memory-ratio/
fetched_at: 2026-09-30T09:40:00+09:00
published_at: 2026-09-29
date_precision: date-only
category: enhancement
---

# 2026-09-29 Containers のディスク/メモリ比率制約の撤廃

## 公式内容の日本語要約

Cloudflare Containers のカスタムインスタンスタイプから、**ディスクとメモリの比率制約が撤廃**された。従来は**メモリ 1 GiB あたり最大 2 GB のディスク**という上限があり、メモリを増やさないとディスクを増やせなかった。今後は**メモリ構成にかかわらず最大 20 GB のディスク**を割り当てられる。

公式が挙げる例では、**1 vCPU / 3 GiB メモリのカスタムインスタンスが、従来の 6 GB 上限ではなく 20 GB を使える**。

**インスタンスのディスク割当がそのまま最大イメージサイズになる**ため、ディスク上限の緩和は**より大きなコンテナイメージをデプロイできる**ことも意味する。大きなイメージ、データセット、ビルドキャッシュを抱えるワークロードが対象である。

その他のカスタムインスタンスの制約（**1 vCPU あたり最低 3 GiB メモリ**など）は変更なし。

## できるようになったこと

- メモリを増やさずにディスクを最大 20 GB まで確保する
- より大きなコンテナイメージをデプロイする

## 影響範囲

- 対象ユーザー: Cloudflare Containers 利用者
- 対象プラン: カスタムインスタンスタイプ
- API / UI / 管理者機能: インスタンス構成の見直しでコスト削減余地

## 教材化メモ

- **「リソースの抱き合わせ制約が外れると、無駄に払っていた分が見える」**という一般論の実例。ディスクが欲しいだけなのにメモリを買わされる構成は、クラウド一般でよくある。既存構成の棚卸し観点として説明できる。
- AI / エージェント文脈からはやや遠く、**Containers を実運用している読者に限られる**ため、単独記事ではなく Cloudflare の運用 Tips をまとめる回の素材とするのが妥当。

## 原文確認

- 公式見出し: Containers - Disk-to-Memory Ratio Removed
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-29-remove-disk-to-memory-ratio/
