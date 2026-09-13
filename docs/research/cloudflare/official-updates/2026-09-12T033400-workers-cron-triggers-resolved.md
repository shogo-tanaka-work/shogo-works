---
date: 2026-09-12
title: "Workers Cron Triggers の劣化が解消（2026-09-09 発生の継続障害）"
service: "Cloudflare Workers"
product: "Workers"
source: https://www.cloudflarestatus.com/
fetched_at: 2026-09-13T09:15:00+09:00
published_at: 2026-09-12T03:34:00Z
date_precision: timestamp
category: incident
---

# 2026-09-12 Workers Cron Triggers の劣化が解消

## 公式内容の日本語要約

2026-09-09T19:17Z に発生し、`Identified` のまま3日間継続していた **Workers Cron Triggers の劣化**が、**2026-09-12T03:34Z に解消**された。Cloudflare Status 上で当該インシデントは closed になっている。

この障害は 09-10 の日次チェックで初めて記録し（`2026-09-09T191700-workers-cron-triggers-incident.md`）、09-11 / 09-12 の日次サマリーでも「未解決のまま日をまたいでいる」として引き継いできた。**解消まで約56時間を要しており、Workers 系の incident としては長い。** Cron Triggers はスケジュール実行の基盤であるため、この期間に定期ジョブの遅延・欠落が起きていた可能性がある。

窓内（2026-09-12T00:02Z → 2026-09-13T00:02Z）の Cloudflare 系 incident は本件の解消のみで、新規発生はない。同日 08:06Z〜10:42Z に Cloud Connector Rules の作成・更新不具合、09-11T21:55Z〜09-12T08:57Z に Tunnel の可用性低下があったが、いずれも **AI / エージェント / MCP / 開発者プラットフォームに関わらないネットワーク製品**のため対象外とした。

**別件の「WARP ユーザーの geo location 誤り」（2026-08-27T18:46Z 発生）は `Identified` のまま継続中**で、17日目に入った。こちらは対象外製品だが、長期未解決のため引き継ぎとして記録を続ける。

## できるようになったこと

- Workers Cron Triggers のスケジュール実行が正常化した

## 影響範囲

- 対象ユーザー: Cron Triggers でスケジュール実行を構成している Workers 利用者
- 対象プラン: プラン差の告知なし
- API / UI / 管理者機能: 機能変更ではなく可用性の回復。**障害期間中（09-09T19:17Z〜09-12T03:34Z）に実行されるべきだったジョブの取りこぼしは、利用者側で確認が必要**

## 教材化メモ

- **記事化しないため、ここに残す。** 単体では速報価値がないが、**「マネージドなスケジューラも落ちる」**という前提を持たせる教材素材になる。56時間の劣化は、cron の実行を暗黙に信頼している設計では検知されないまま通過する長さである。
- 教材で扱う論点は**実行されたことの確認手段**。スケジュール実行の設計では、「実行されたら記録する」だけでなく**「実行されなかったことを検知する」**（前回実行時刻の監視、期待実行回数との突き合わせ）が必要になる、という一般則の実例。
- インシデント対応の教材としては、**`Identified` は「原因特定済み」であって「復旧見込みあり」ではない**点も使える。3日間 `Identified` のまま推移した実例として引ける。

## 原文確認

- 公式見出し: Degraded Cron Triggers（Workers）— resolved
- 公式URL: https://www.cloudflarestatus.com/
- 初報の詳細メモ: ./2026-09-09T191700-workers-cron-triggers-incident.md
- 原文全文は公式ページで確認してください。
