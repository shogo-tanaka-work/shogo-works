---
date: 2026-10-19
title: "Cursor の status ページが status.x.ai へ移行（2026-10-19 15:00 UTC 〜 10-27 01:00 UTC）"
service: "Cursor"
source: https://status.cursor.com/
fetched_at: 2026-10-26T09:55:00+09:00
published_at: 2026-10-19T15:00:00Z
date_precision: timestamp
category: policy
---

# 2026-10-19 Cursor の status 更新が status.x.ai へ移る

## 公式内容の日本語要約

**`status.cursor.com` に「Cursor status updates moving to status.x.ai」という予定メンテナンスが掲載されている。** 期間は **2026-10-19 15:00 UTC 〜 2026-10-27 01:00 UTC**（= 2026-10-28 00:00 JST、JST では 10-20 00:00 〜 10-27 10:00）で、本記録時点のステータスは `Scheduled`。影響コンポーネントの明記はない。

**Cursor の稼働情報の掲載先が xAI 側の status ページへ移る**という告知である。

この移行は、`status.cursor.com` に `Grok Bot` と `grok.com` が監視コンポーネントとして載っている状態（本 Skill で3週連続して記録してきた）の説明にあたる。Cursor は 2026-08-14 に SpaceX の一部になったことを公式ブログで発表し、`Introducing Grok 4.6`（2026-08-12）、`Introducing Grok 4.7`（2026-09-21）を自社ブログで出している。**稼働情報の掲載先が xAI 側へ統合されるのは、その延長である。**

## できるようになったこと

- （移行告知のため該当なし）

## 影響範囲

- 対象ユーザー: Cursor の稼働状況を監視している利用者・運用者
- 対象プラン: 全プラン
- API / UI / 管理者機能: status ページ（`status.cursor.com` → `status.x.ai`）

## 教材化メモ

- **監視対象の URL が変わる種類の変更で、気付かないと「障害が起きていないこと」を誤って確認し続ける。** status ページを RSS や外部監視に登録している場合、移行後も旧 URL が 200 を返し続けると、更新が止まったページを見て「正常」と判断してしまう。**「情報源が移動したことを検知する仕組み」が必要**という話の実例になる。
- 本 Skill の運用に直接影響する。`source-catalog.md` の Cursor 補助ソースは `https://status.cursor.com/` を指しているため、**移行完了後に `status.x.ai` へ差し替えるかの判断が必要**である（xAI の主ソースと重複する可能性もある）。カタログの変更は本 Skill の判断範囲を超えるため、週次サマリーでユーザーの判断を仰ぐ事項として挙げる。
- **「製品の境界が企業買収で動く」ことが、一次情報の構造に現れる例である。** Cursor と xAI の製品境界が status ページ上で混ざっていた3週間は、移行の過渡期だったと後から分かる。巡回で「このコンポーネントはなぜここにあるのか」と引っかかった点が、後の構造変化の前兆だった。

## 原文確認

- 公式見出し: Cursor status updates moving to status.x.ai
- 公式URL: https://status.cursor.com/
- 関連: https://cursor.com/blog （`Cursor is now a part of SpaceX`、2026-08-14）
- 原文全文は公式ページで確認してください。
