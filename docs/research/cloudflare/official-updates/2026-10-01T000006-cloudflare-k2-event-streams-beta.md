---
date: 2026-10-01
title: "Cloudflare K2（パブリックベータ）。R2 上のサーバーレスなイベントストリーム"
service: "K2"
product: "K2, R2, Workers"
source: https://blog.cloudflare.com/cloudflare-k2-streams/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: release
---

# 2026-10-01 Cloudflare K2

## 公式内容の日本語要約

**Cloudflare K2** は、イベントを**永続かつ順序付きのログ**として保持し、プロデューサーとコンシューマーを分離するサーバーレスのイベントストリーミング基盤である。**R2 オブジェクトストレージ上に構築**され、Kafka のようなブローカー運用なしで「大規模なデータ移動と長期保持」を行えるとしている。

公式が挙げる特徴。**produce レイテンシは p99 で約1秒**。コンシューマーはバッチ単位で読む。**subscription により複数コンシューマーへ処理を分割**でき、fan-out・負荷分散・その併用に対応する。データはバイト列として扱うため形式を問わない。

**Apache Kafka クライアントのドロップイン対応はロードマップ段階**で、現時点のベータでは未提供である。

**パブリックベータで、Workers Paid サブスクリプションのアカウントが対象。** ベータ期間中は**無料**。ベータの上限は**アカウントあたり 10GB のストレージ**、**ストリームあたり 30 MB/s の produce スループット**で、Discord または上限引き上げフォームから緩和を依頼できる。

ベータ後の想定価格として、**produce $0.04/GB、consume $0.04/GB、保持 $0.02/GB・月**が示されている。

## できるようになったこと

- ブローカー運用なしでイベントログを保持し、複数コンシューマーへ配信
- subscription による読み取り並列化（fan-out / 負荷分散）
- ベータ期間中は無料で検証できる

## 影響範囲

- 対象ユーザー: Workers Paid のアカウント
- 対象プラン: **ベータ期間中は無料**。上限は 10GB / 30 MB/s
- API / UI / 管理者機能: K2 の API。Kafka クライアント互換は未提供

教材化メモ: src/content/ai-news-notes/cloudflare/cloudflare-k2-event-streams.mdx

## 原文確認

- 公式見出し: Announcing Cloudflare K2: serverless event streams
- 公式URL: https://blog.cloudflare.com/cloudflare-k2-streams/
- 原文全文は公式ページで確認してください。
