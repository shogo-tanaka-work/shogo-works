---
date: 2026-09-17
title: "Cloudflare: アジア太平洋で Durable Objects と下流サービスのエラー率上昇（調査中）"
service: "Cloudflare"
product: "Durable Objects, Workers Assets, Workflows, AI Search, Artifacts, Containers, D1"
source: https://www.cloudflarestatus.com/
fetched_at: 2026-09-18T09:02:00+09:00
published_at: 2026-09-17T23:37:00Z
date_precision: timestamp
category: incident
---

# 2026-09-17 Durable Objects の APAC incident

## 公式内容の日本語要約

Cloudflare Status は 2026-09-17T23:37Z に、**アジア太平洋リージョンで Durable Objects と下流サービスのエラー率が上昇**している incident を掲示した。本日の巡回時点（2026-09-18T09:02 JST ＝ 2026-09-18T00:02Z）で **status は `Investigating` のまま継続中**である。

公式の記載は「Cloudflare is investigating an issue causing elevated error rates for Durable Objects and downstream services in the Asia Pacific region」。

**影響対象として挙がっているサービス**: Durable Objects、Workers Assets、Workflows、**AI Search**、Artifacts、Containers、D1。**本 Skill の対象製品（AI / エージェント / 開発者プラットフォーム）に複数該当する。**

あわせて、**Hyperdrive のオリジン接続失敗率上昇（2026-09-16T22:45Z 〜 2026-09-17T00:45Z、解決済み）**も掲示されている。原因は誤設定のリリースで、Workers VPC と Cloudflare Access トンネル経由の接続は影響を受けなかったと明記されている。**この Hyperdrive incident の発生時刻は前日の窓の末尾にかかるが、前日サマリーには記載がない。**

## 影響範囲

- 対象ユーザー: アジア太平洋リージョンで Durable Objects および下流サービスを使う利用者（**日本を含む**）
- 対象プラン: 全般
- API / UI / 管理者機能: 該当なし（障害）

## 教材化メモ

- **AI Search と Containers が Durable Objects の下流にある**という依存構造が、incident の影響範囲一覧から読み取れる。**「AI 機能の可用性は、その下のステートフル基盤に律速される」**という設計上の事実を、公式の障害告知から読む例として使える。
- リージョン単位の障害である点は、**「単一クラウドの単一リージョンに寄せた AI ワークロードは、そのリージョンの障害をそのまま受ける」**という当たり前の話を、具体的な日付つきで説明できる素材。
- 記事化はしない。短時間 incident は日次サマリーと本メモに留める運用（`daily-ai-update-monitor` SKILL の規約）に従う。**ただし継続中のため、翌日の巡回で解決を確認する。**

## 原文確認

- 公式見出し: Increased Errors for Durable Objects and Downstream Services in Asia Pacific
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
