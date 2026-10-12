---
date: 2026-10-06
title: "Cursor Status の incident 9件（10-06〜10-09）— Cloud Agents / Grok Bot / Opus 5.5 の劣化。すべて resolved"
service: "Cursor"
source: https://status.cursor.com/
fetched_at: 2026-10-12T10:00:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: incident
---

# 2026-10-06〜10-09 Cursor Status の incident

## 公式内容の日本語要約

窓内（2026-10-05〜10-12）に **9件の incident** が記録され、**すべて Resolved** である。時刻は UTC。監視対象のコンポーネントは **Automations / Review Agents / CLI / Cloud Agents / cursor.com / IDE / Origin / Grok Bot** の8つである。

| 日付 | タイトル | 対象 | 復旧 |
| --- | --- | --- | --- |
| 10-06 | Elevated errors affecting Anthropic models | Opus 5.5 | 10-06 16:00 |
| 10-06 | Investigating service degradation — Security Reviewer Agents | Security Reviewer agents | 10-06 18:56 |
| 10-06 | Investigating service degradation — Cloud Agents and Grok Bot | Cloud Agents / Grok Bot | 10-06 22:06 |
| 10-06 | Investigating service degradation — Cloud Agents | Cloud Agents | 10-06 23:04 |
| 10-07 | Investigating service degradation — Grok Bot | Grok Bot（一部リージョンの computer） | 10-07 17:25 |
| 10-08 | Opus 5.5 is Experiencing 429s | Opus 5.5（全コンポーネント横断） | 10-08 15:31 |
| 10-08 | Elevated errors affecting Opus 5.5 | Opus 5.5 | 10-08 20:51 |
| 10-09 | Investigating service degradation — Cloud Agents | Cloud Agents | 10-09 21:42 |
| 10-09 | Investigating service degradation — Cloud Agents and Grok Bot | Cloud Agents / Grok Bot | 10-09 23:09 |

**10-05、10-10、10-11、10-12 の incident は無い。**

**分布に偏りがある。** 9件のうち **Cloud Agents 系が4件、Opus 5.5 系が3件、Grok Bot 系が3件**（重複含む）であり、**IDE 本体と cursor.com の incident は無い。**

## 影響範囲

- 対象ユーザー: Cursor の Cloud Agents / Grok Bot / Opus 5.5 を使う利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Cloud Agents、Grok Bot、モデル供給

## 教材化メモ

- **「エディタは落ちていないが、エージェントだけ落ちる」という障害の形が定着している。** 編集作業そのものは続けられるのに、**委譲していた作業だけが止まる。** エージェントに工程を預ける運用では、**提供側の障害が自分の進捗に直結する**という前提を手順書へ書く必要がある。
- **モデル単位の incident（Opus 5.5 の 429 と elevated errors が3件）が、特定モデルへの依存リスクを示している。** 同一モデルを複数製品が同時に使う構造（前週に記録）では、**1モデルの劣化が複数ツールに同時に出る。** フォールバックの設計が可用性要件になる。
- **自社の障害か提供側の障害かの切り分け**という観点で、status ページの購読を手順に入れる価値がある。

## 原文確認

- 公式見出し: 各 incident のタイトル（上表）
- 公式URL: https://status.cursor.com/
- 原文全文は公式ページで確認してください。
