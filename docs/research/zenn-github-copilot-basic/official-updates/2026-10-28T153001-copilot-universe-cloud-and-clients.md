---
date: 2026-10-28
title: "GitHub Universe 2026: Copilot のクラウド体験が GA、Projects と各クライアント更新"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience
fetched_at: 2026-11-02T09:40:00+09:00
published_at: 2026-10-28T15:30:00Z
date_precision: timestamp
category: release
---

# 2026-10-28 GitHub Universe 2026: Copilot のクラウド体験が GA、Projects と各クライアント更新

## 公式内容の日本語要約

**接続されたクラウド体験が有料プランで GA。** github.com、GitHub Mobile、Copilot CLI、Copilot app、VS Code、Slack / Microsoft Teams の会話のどこからでもクラウドタスクを開始し、別の場所で続けられる。**既定で全セッションがクラウドサンドボックス（GitHub 管理インフラ上の隔離環境）で動く。合計実行時間の1時間上限は無い。** 背後の計算資源は **Actions の entitlement から引ける**ようになり、ビルド・クラウドサンドボックス・（Team / Enterprise Cloud では）大型ホストランナーを1つの柔軟なプールで使う形になった。

**Copilot app に Projects（public preview）。** 複数リポジトリや、リポジトリに触らない作業（仕様・デザイン・アセット）をひとつの場所にまとめる。目的を伝え、必要な文脈（リポジトリ、デザインモック、Slack スレッド、メモ）を加えると、Copilot が必要な数のエージェントを走らせて PR 等を返す。project automations で反復作業も組める。

**VS Code**: クラウドエージェントセッションを Agents window から開始し、Copilot app / GitHub Mobile / github.com / Copilot CLI で同じセッションを継続できる（Slack / Teams の DM 発のセッションも継続可）。**新しい Agent Host が Copilot セッションを個々の VS Code ウィンドウから分離する。**

**JetBrains**: Copilot Fusion が利用可能に（Standard / High / Max）。**ローカルサンドボックスが GA**（Copilot が起動したツール・コマンドがファイルシステム・ネットワーク・資格情報へ制限付きアクセスになる）。next edit suggestions（NES）も追加。

## 影響範囲

- 対象ユーザー: 有料 Copilot プラン全般
- 課金・容量: Actions entitlement がサンドボックス計算資源と共用プールになる

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**Actions の entitlement をエージェント実行の計算資源と共用プールにした**のは課金設計として重い変更である。CI の予算とエージェントの予算が同じ財布になるため、エージェント利用が増えるとビルドが詰まる、あるいは逆が起きうる。社内導入時の見積もりモデルを作り直す必要がある箇所。

## 原文確認

- 公式URL: https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience 、https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases 、https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases 、https://github.blog/changelog/2026-10-28-github-copilot-in-jetbrains-universe-releases
- 原文全文は公式ページで確認してください。
