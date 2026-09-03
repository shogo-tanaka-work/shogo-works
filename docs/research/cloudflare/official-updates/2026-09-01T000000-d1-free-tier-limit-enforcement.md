---
date: 2026-09-01
title: "D1 が Workers Free プランの1日あたりクエリ上限を強制適用開始"
service: "Cloudflare"
product: "D1"
source: https://developers.cloudflare.com/changelog/post/2026-09-01-d1-free-tier-limit-enforcement/
fetched_at: 2026-09-02T09:05:00+09:00
published_at: 2026-09-01
rollout_date: 2026-09-01
date_precision: date-only
category: policy
---

# 2026-09-01 D1 の無料枠上限の強制適用

教材化メモ: src/content/ai-news-notes/cloudflare/d1-free-tier-limit-enforcement.mdx

## 公式内容の日本語要約

**2026-09-01 から、Workers Free プランの D1 クエリは、1日あたりの行読み取り / 行書き込み上限を超えた時点で失敗する。** これまでは上限を超えても動作していた（または警告に留まっていた）が、**本日から実際にエラーが返る強制適用へ切り替わった。**

対象は **Workers Binding API と REST API の両方**。上限に達すると、次のいずれかのエラーが返る。

- `Your account has exceeded D1's free tier daily row read limit. Upgrade to a paid plan or wait until tomorrow (midnight UTC) to continue.`
- `Your account has exceeded D1's free tier daily row write limit. Upgrade to a paid plan or wait until tomorrow (midnight UTC) to continue.`

**リセットは UTC 深夜0時**（日本時間 09:00）。**保存済みデータは影響を受けない**——読み書きが止まるだけで、データが消えるわけではない。上限到達時にはメールアラートが送られる。

公式が推奨する対処は2段階である。まず**強制適用の前にクエリ活動を点検し、上限を超えうるクエリを特定する。** 行読み取りを減らすには、**テーブルへのインデックス追加**と、**フルテーブルスキャンを行うクエリの見直し**。最適化しても上限が足りない場合は Workers Paid プランへ移行する。

**この告知は 2026-09-01 付で、同日から適用開始である。** 事前の点検を促す文面になっているが、公開日と発効日が同じであるため、**読んだ時点ですでに適用されている。**

## できるようになったこと

- （制限の強制適用のため、機能追加ではない）
- 上限到達時にメールアラートが届く
- エラーメッセージから、読み取り上限と書き込み上限のどちらに達したかを判別できる

## 影響範囲

- 対象ユーザー: **Workers Free プランで D1 を使っている全アカウント**
- 対象プラン: Workers Free のみ。Workers Paid は対象外
- API / UI / 管理者機能: Workers Binding API と REST API の両方でエラーが返る。**保存データは無影響、UTC 0時にリセット**
- **発効日: 2026-09-01（告知と同日）**

## 原文確認

- 公式見出し: D1 enforces free tier daily query limits
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-01-d1-free-tier-limit-enforcement/
- 原文全文は公式ページで確認してください。
