---
date: 2026-10-01
title: "Basin Pipelines の取り込み上限が 5 MB/s → 1 GB/s（ストリームあたり）"
service: "Basin Pipelines"
product: "Basin Pipelines, Basin"
source: https://developers.cloudflare.com/changelog/post/2026-10-01-stream-ingest-limit-increase/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: enhancement
---

# 2026-10-01 Basin Pipelines 取り込み上限の引き上げ

## 公式内容の日本語要約

Basin Pipelines のストリーム取り込み上限が、**ストリームあたり 5 MB/s から 1 GB/s** へ引き上げられた。**アカウント単位ではなくストリーム単位**の上限である。

公式は引き上げの理由として、「大量のアプリケーションイベント・テレメトリ・ログについて、**旧上限に収めるためだけに取り込みを複数ストリームへ分割する必要がなくなる**」ことを挙げている。

**数値の不一致について記録しておく。** Basin GA のブログ本文では「ストリームあたり最大 3GB/s の取り込み」と読める記述があり、changelog の 1 GB/s と一致しない。**本メモでは changelog の値（1 GB/s）を採用し、ブログ側の数値は未確認として扱う。** 実装時は公式ドキュメントの Limits ページで確認すること。

## できるようになったこと

- 1ストリームで最大 1 GB/s の取り込み
- 上限回避のためのストリーム分割が不要

## 影響範囲

- 対象ユーザー: Basin Pipelines 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: 変更なし（上限値のみ）

## 教材化メモ

- **「上限を回避するための分割」という設計上の歪み**は、クラウドサービスの制約に合わせた実装で頻出する。上限が緩和されたときに**その歪みを戻す作業が発生しない設計**（分割数を設定値にしておく）が有効という一般則。
- **公式内で数値が食い違うケースの扱い**。changelog と blog で値が違うとき、どちらを採るかの規律（本件では changelog を採用し、もう一方を未確認として明記）が必要。

## 原文確認

- 公式見出し: Basin Pipelines ingest limit increased to 1 GB/s
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-01-stream-ingest-limit-increase/
- 原文全文は公式ページで確認してください。
