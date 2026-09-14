---
date: 2026-09-11
title: "Copilot 利用状況メトリクスに VS Code Agents ウィンドウを追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics
fetched_at: 2026-09-14T09:50:00+09:00
published_at: 2026-09-11T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-11 Copilot 利用状況メトリクスへ VS Code Agents を追加

## 公式内容の日本語要約

Copilot の利用状況メトリクス API が、**専用の VS Code Agents ウィンドウ**の利用データを含むよう拡張された。組織がこの機能の採用状況とエンゲージメントを測れるようになる。

**Enterprise / Organization の集計レポート**に追加されたフィールドは `daily_active_vscode_agent_users`（日次のユニーク利用者）と `totals_by_vscode_agent`（セッション数とユーザーメッセージ数）。**ユーザー単位のレポート**には `used_vscode_agent`（当該利用者がウィンドウを使ったか）と、利用者ごとのセッション数・メッセージ数が入る。

参照できるのは Enterprise オーナー、支払い管理者、Organization オーナー、および `View Copilot Metrics` を含むカスタムロールの保持者である。

**スコープに注意がある。** このメトリクスは**専用の VS Code Agents ウィンドウのみ**が対象で、エディタウィンドウの Agent Mode や一般の利用データとは分離されている。データが無い場合はオプショナルフィールドが `null` のまま返り、後方互換は保たれる。

## できるようになったこと

- VS Code Agents ウィンドウの日次アクティブ利用者数・セッション数・メッセージ数を取得できる
- ユーザー単位で当該ウィンドウの利用有無を確認できる

## 影響範囲

- 対象ユーザー: Enterprise オーナー、支払い管理者、Organization オーナー、`View Copilot Metrics` 権限保持者
- 対象プラン: Business / Enterprise（メトリクス API）
- API / UI / 管理者機能: 利用状況メトリクス API

## 教材化メモ

- **「Agent Mode」と「Agents ウィンドウ」が別カウントである**点は、導入効果を測るときに必ず引っかかる。同じ製品内に似た名前の面が2つあり、片方しか数えていないレポートで「使われていない」と結論づける事故が起きうる。**メトリクスを読む前にスコープ定義を読む**という、当たり前だが省略されがちな手順の実例。
- 同じ週に Claude Code 2.1.269 が `OTEL_METRICS_INCLUDE_REPOSITORY` でリポジトリ属性付きメトリクスを追加している。**両社とも「導入したが効果が説明できない」という顧客側の課題に、計測の粒度を細かくする方向で応えている。**
- 記事化はしない（週次確認ソースの通常更新）。

## 原文確認

- 公式見出し: Add VS Code Agents to Copilot usage metrics
- 公式URL: https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics
- 原文全文は公式ページで確認してください。
