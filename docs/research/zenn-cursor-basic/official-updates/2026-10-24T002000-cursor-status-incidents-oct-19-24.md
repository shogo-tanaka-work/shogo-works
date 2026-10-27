---
date: 2026-10-24
title: "Cursor status の窓内 incident 7件（Grok 系4件、Anthropic 系2件、Bitbucket 連携1件）"
service: "Cursor"
source: https://status.cursor.com/
fetched_at: 2026-10-26T09:55:00+09:00
published_at: 2026-10-24T00:20:00Z
date_precision: timestamp
category: incident
---

# 2026-10-19〜24 Cursor status の incident

## 公式内容の日本語要約

窓内（2026-10-19 00:30Z 〜 2026-10-26 00:30Z）の `status.cursor.com` の incident は**7件で、いずれも Resolved**。

| 日付 | 内容 | 影響 | 開始 | 終了 |
| --- | --- | --- | --- | --- |
| 10-19 | Service degradation（Anthropic Opus 5.5 のエラー） | Anthropic Opus 5.5 モデル | 13:24 UTC | 13:52 UTC |
| 10-19 | Service degradation（Grok Bot の routine 遅延） | Grok Bot | 16:15 UTC | 17:21 UTC |
| 10-19 | Service degradation（請求・プラン・使用量のエラー） | Grok Bot / grok.com | 18:09 UTC | 18:28 UTC |
| 10-21 | Service degradation（請求ダッシュボード） | 請求ダッシュボード | 15:46 UTC | 17:40 UTC |
| 10-21 | Bitbucket Cloud 連携のエラー増加 | Bitbucket Cloud 連携 | 17:40 UTC | 17:53 UTC |
| 10-21 | Service degradation（Anthropic モデル） | Anthropic モデル | 5:56 ET | 6:21 ET |
| 10-23〜24 | Service outage（Grok モデル利用不可） | Grok モデル | 10-23 23:39 UTC | 10-24 00:20 UTC |

10-20 / 10-22 / 10-25 / 10-26 の incident はなし。Bitbucket Cloud の件は Atlassian 側が解消を報告しつつ監視継続としていた。

**Grok 系が4件（10-19 の2件、10-23〜24 の outage を含む）で、3週連続して Grok 系に集中している。** Grok モデル利用不可の outage は約41分。

## できるようになったこと

- （障害記録のため該当なし）

## 影響範囲

- 対象ユーザー: Cursor 利用者（特に Grok 系モデル、Anthropic 系モデル、請求画面、Bitbucket Cloud 連携）
- 対象プラン: 全プラン
- API / UI / 管理者機能: モデル提供、請求ダッシュボード、Bitbucket Cloud 連携

## 教材化メモ

- **モデル単位の障害が status に出る時代になっている。** 「Anthropic Opus 5.5 のみエラー」「Grok モデルのみ利用不可」のように、**特定モデルだけが落ちる。** エージェント運用では、落ちたモデルから別モデルへ落とす経路（フォールバック）を持っているかどうかが可用性を決める。本 Skill の記録でも、Claude Code 側が同じ週に「subagent がフォールバックモデルへ切り替えた後のモデル名表示」の修正を入れている（v2.1.305）。
- **3週連続で Grok 系に障害が集中している。** 単発なら偶然だが、3週続くと「この経路は不安定」という運用判断の材料になる。**日次ではなく週次でまとめて見ることで初めて見える傾向**である。
- 10-19 の障害3件はすべて 13:24〜18:28 UTC に集中している。**同日の status 移行メンテナンス（10-19 15:00 UTC 開始）と時間帯が重なる。** 公式は関連付けていないため推測はしないが、記録上は併記しておく価値がある。

## 原文確認

- 公式見出し: （各 incident のタイトル）
- 公式URL: https://status.cursor.com/
- 原文全文は公式ページで確認してください。
