---
date: 2026-09-04
title: "GitHub Copilot weekly releases（August 31）— JetBrains harness GA、VS Code 1.136"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-04-github-copilot-weekly-releases-august-31
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-09-04
date_precision: date-only
category: release
---

# 2026-09-04 GitHub Copilot weekly releases（August 31 週）

## 公式内容の日本語要約

8月31日週ぶんの週次まとめ。個別の changelog として出ている項目の再掲を含む。

**モデル**: Claude Fable 5.1 が Copilot Pro+ / Max / Business / Enterprise で利用可能に。Gemini 3.8 Flash が Copilot Pro / Pro+ / Max / Business / Enterprise へロールアウト中。

**Copilot アプリ / CLI**: content exclusions がエージェント的ワークフロー全体で機能するようになり、機密コードがコンテキストに入らなくなった（個別 changelog 2026-09-02 と同件）。

**JetBrains**: **GitHub Copilot harness が Copilot for JetBrains で一般提供**。公式は「機能提供の高速化とコード品質の向上」を理由に挙げている。

**VS Code 1.136**:

- **Agent Merge が public preview**。レビュー指摘とマージ衝突の処理を担う
- **マルチルートワークスペースが experimental**。Claude のエージェントセッションをワークスペースのフォルダ横断で動かせる
- チャット背景が experimental になりカスタマイズ可能に
- チャットセッションが関連する会話を階層化して表示し、注意が必要なものを示すように

## できるようになったこと

- JetBrains で Copilot harness を一般提供として使う
- VS Code 1.136 で Agent Merge（public preview）を試す
- VS Code でワークスペース横断のエージェントセッションを動かす（experimental）

## 影響範囲

- 対象ユーザー: JetBrains / VS Code で Copilot を使う開発者
- 対象プラン: モデル提供はプランごとに異なる（上記）
- API / UI / 管理者機能: IDE 拡張

## 教材化メモ

- **Agent Merge（レビュー指摘とマージ衝突の処理）**は、エージェントの担当範囲が「コードを書く」から「取り込みまで面倒を見る」へ広がる動きである。PR の後工程は待ち時間が長く人の手が細切れに取られるため、実務上の効果は書く工程より大きいことがある。**エージェント導入の投資対効果を「生成速度」で測る癖に対する反例**として使える。
- **マルチルートワークスペース対応**は、モノレポや複数リポジトリを跨ぐ作業での制約が外れる話。エージェントの作業範囲は**リポジトリ境界ではなく、人間が実際に触る範囲**で切るべき、という設計論に接続できる。

## 原文確認

- 公式見出し: GitHub Copilot weekly releases — August 31
- 公式URL: https://github.blog/changelog/2026-09-04-github-copilot-weekly-releases-august-31
- 原文全文は公式ページで確認してください。
