---
date: 2026-09-17
title: "Copilot impact dashboard に機能別エンゲージメントを追加（28日集計）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement/
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-17T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-17 impact dashboard の機能別エンゲージメント

## 公式内容の日本語要約

impact dashboard が、**28日間のうち2日以上その機能を使ったアクティブユーザー数**を機能ごとに表示するようになった。API には **`copilot_feature_engagement` と `totals_by_feature`** が追加され、**code completion / agent edit / passive code review / active code review / cloud agent / CLI / app の7カテゴリ**に分解される。あわせて **`users_in_phase_28d`**（導入フェーズごとの28日ローリング母数）が追加された。

**機能別エンゲージメントは28日集計レポートにのみ出て、ユーザー単位レポートには出ない。** 個人を特定しない設計である。

閲覧できるのは enterprise owner、billing manager、organization owner、**「View Copilot Metrics」権限を持つカスタムロール**で、**Copilot usage metrics ポリシーが有効である必要がある。**

## できるようになったこと

- 機能ごとの定着（28日中2日以上の利用）を人数で見る
- 導入フェーズごとの母数（`users_in_phase_28d`）を取る
- API から機能別内訳を取得する

## 影響範囲

- 対象ユーザー: enterprise / organization の管理者、メトリクス閲覧権限保有者
- 対象プラン: Copilot Business / Enterprise（usage metrics ポリシー有効時）
- API / UI / 管理者機能: impact dashboard、usage metrics API

## 教材化メモ

**「2日以上使った人数」という定義が、この機能の要点である。** 1回触れただけの人を定着に数えないという設計で、**AI ツールの導入効果測定でありがちな「一度でも使った率」の水増しを避けている。** 社内で導入 KPI を設計するときの**しきい値の置き方の実例**として使える。

**もう1つは「機能別は集計のみ、個人別には出さない」という線の引き方。** 同じ週に Claude Code 側ではテレメトリへ `enduser.sub`（IdP subject）が入っており（2.1.274）、**業界全体として粒度を上げる方向**にある。その中で GitHub が**機能別だけは個人に紐づけない**と明示しているのは、観測設計の落としどころの例になる。**「測れること」と「個人に紐づけてよいこと」を分ける**という原則の具体形である。

## 原文確認

- 公式見出し: Copilot impact dashboard now shows feature engagement
- 公式URL: https://github.blog/changelog/2026-09-17-copilot-impact-dashboard-now-shows-feature-engagement/
- 原文全文は公式ページで確認してください。
