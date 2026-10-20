---
date: 2026-10-13
title: "Cursor の incident 4件（10-13〜10-16）。うち3件が Grok 系で、全サービス劣化が1件"
service: "Cursor"
source: https://status.cursor.com/
fetched_at: 2026-10-19T09:55:00+09:00
published_at: 2026-10-13
date_precision: date-only
category: incident
---

# 2026-10-13〜10-16 Cursor の incident

## 公式内容の日本語要約

**窓内（2026-10-12〜10-19）の incident は4件で、いずれも解決済みである。** 継続中の incident と、メンテナンス告知は無い。

| 発生 | 件名 | 影響コンポーネント | 解決 |
| --- | --- | --- | --- |
| 10-13 | Degraded performance and errors across Cursor services | **IDE / Cloud Agents / Automations / Grok Bot / Origin** | 10-13 03:07 UTC |
| 10-13 | Grok Bot routines not triggering | Grok Bot の routine（webhook / Slack / git / email / Linear トリガー） | 10-13 20:29 UTC |
| 10-14 | Investigating service degradation — Grok Bot | Grok Bot | 10-14 21:04 UTC |
| 10-15〜10-16 | Elevated errors affecting Grok models | Grok モデル | 10-16 05:20 UTC（開始 10-15 22:25 UTC） |

10-12、10-17、10-18、10-19 に incident は無い。

**4件のうち3件が Grok 系である。** 前週（10-06〜10-09）は窓内9件のうち3件が Grok 系だったため、**2週連続で Grok 系の incident が続いている。** とくに「Grok Bot routines not triggering」は**トリガーが発火しない**種類の障害で、**失敗ではなく無反応として現れる**ため気付きにくい。

10-13 の全サービス劣化（IDE / Cloud Agents / Automations / Grok Bot / Origin の5コンポーネント）は、途中の更新で「一部の Cloud Agents がまだ復旧中」とされていた。

## できるようになったこと

- 該当なし（障害記録）

## 影響範囲

- 対象ユーザー: Cursor の IDE / Cloud Agents / Automations / Origin / Grok Bot 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: サービス全般

## 教材化メモ

- **「トリガーが発火しない」障害は、エラーログに残らない。** Grok Bot の routine が動かなかった 10-13 の incident が実例である。**定期実行・webhook に依存した自動化は、動かなかったことを検知する仕組みを別に持つ必要がある**という論点に使える。
- **Cursor の status ページに `Grok Bot` が監視コンポーネントとして載っている**（前週も記録）。Cursor と xAI の製品境界が status ページ上で混ざっており、**どちらのツールの更新・障害として記録すべきか迷う**。今週も Cursor 側へ記録した。
- 2週連続で Grok 系に incident が集中している点は、**特定モデル・特定連携に依存した自動化のリスク**として扱える。

## 原文確認

- 公式見出し: Cursor Status（incident history）
- 公式URL: https://status.cursor.com/
- 原文全文は公式ページで確認してください。
