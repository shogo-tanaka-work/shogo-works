---
date: 2026-09-28
title: "Cursor: Grok Bot / Review Agents の短時間障害2件（09-28、10-03。いずれも解決）"
service: "Cursor"
source: https://status.cursor.com/
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-09-28T20:23:00Z
date_precision: timestamp
category: incident
---

# 2026-09-28 / 10-03 Cursor の短時間障害2件

## 公式内容の日本語要約

Cursor Status に、本窓内（2026-09-28〜10-05）の incident が**2件**記録されている。**いずれも解決済み**で、巡回時点の全体ステータスは「All Systems Operational」である。

| 発生 | 対象 | 継続 | 状態 |
| --- | --- | --- | --- |
| 2026-09-28T20:23Z | **Grok Bot** のサービス劣化 | 約13分（〜20:36Z） | Resolved |
| 2026-10-03T06:50Z | **Grok Bot と Review Agents** のサービス劣化 | 約36分（〜07:26Z） | Resolved |

いずれも公式の記述は「サービス劣化を調査中」の形で、原因・影響範囲の詳細は公開されていない。2026-10-04 と 10-05 には incident の記録がない。

**本窓では Cursor の changelog（`cursor.com/changelog`）と blog（`cursor.com/blog`）に新規エントリがない**（いずれも最新は 2026-09-23）。Cursor の窓内の更新は、この incident 2件のみである。

短時間 incident は記事化せず、詳細メモと週次サマリーに留める規約に従う。

## できるようになったこと

- （障害記録のため該当なし）

## 影響範囲

- 対象ユーザー: Cursor の Grok Bot / Review Agents 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: いずれも解決済み。恒久的な変更はない

## 教材化メモ

- **2件とも Grok Bot が共通して含まれる**点だけ記録に値する。**13分と36分で、6日の間隔**。単発ではなく同一コンポーネントの反復であり、**特定のモデル提供経路に寄せた機能は、その経路の可用性をそのまま引き継ぐ**という当たり前の帰結を示している。社内で「どのモデルのどの経路に依存しているか」を把握していないと、障害時に影響範囲を即答できない。
- **changelog / blog が2週間沈黙しているあいだに、status には動きがある。** 「更新なし」と判定したソースでも status 側は別に確認する必要がある、という巡回手順の裏づけになる。

## 原文確認

- 公式見出し: Cursor Status — Incident history
- 公式URL: https://status.cursor.com/
- 原文全文は公式ページで確認してください。
