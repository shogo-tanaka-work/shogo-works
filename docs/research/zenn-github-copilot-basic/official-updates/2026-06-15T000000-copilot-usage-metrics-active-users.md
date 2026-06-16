---
date: 2026-06-15
title: "GitHub Copilot — 使用状況メトリクスがサーバー側テレメトリを統合、アクティブユーザーのカバレッジ向上"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-15-copilot-usage-metrics-now-include-more-of-your-active-users
fetched_at: 2026-06-16T10:05:55+09:00
published_at: 2026-06-15
date_precision: date-only
category: enhancement
---

# 2026-06-15 GitHub Copilot 使用状況メトリクス改善

## 公式内容の日本語要約

GitHub Copilot の使用状況レポートにサーバー側テレメトリデータが統合された。従来はクライアント側のシグナル（IDE 等）のみに依存していたため、ネットワーク障害・プロキシ設定・一部のクライアント構成でアクティブユーザーがレポートから漏れていた。

新しい仕組みでは、サーバー側で確認されたアクティブユーザーがクライアント側データに含まれていない場合も、企業向けレポートに反映される。これにより日次アクティブユーザー（DAU）のカバレッジが向上する。

例: 従来 1,000 人だった DAU が 1,050 人に増加する可能性がある。新たに追加されたユーザーの IDE 別・機能別内訳は段階的に充実予定。

## できるようになったこと

- ネットワーク障害・プロキシ環境などでクライアント側計測が届かない場合でも、実際のアクティブユーザーがレポートに反映される
- 企業のライセンス活用状況がより正確に把握できる

## 影響範囲

- 対象ユーザー: GitHub Copilot Business / Enterprise の管理者
- 対象プラン: Enterprise 向け使用状況レポートが対象
- API / UI / 管理者機能: 管理コンソールの使用状況ダッシュボード

## 教材化メモ

- 管理者向けの計測精度改善。エンドユーザーの操作体験には影響なし。
- ライセンス管理の観点で「実際に使っているのに未カウント」ユーザーを正確に計上できるようになる。

## 原文確認

- 公式見出し: Copilot usage metrics now include more of your active users
- 公式URL: https://github.blog/changelog/2026-06-15-copilot-usage-metrics-now-include-more-of-your-active-users
- 原文全文は公式ページで確認してください。
