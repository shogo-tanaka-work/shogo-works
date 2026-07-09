---
date: 2026-07-02
title: "Claude Enterprise向け利用状況・コスト可視化と支出制御の強化"
service: "Claude"
source: https://claude.com/blog/giving-admins-more-visibility-and-control-over-claude-usage-and-spend
fetched_at: 2026-07-05T16:43:00+09:00
published_at: 2026-07-02T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-02 Claude Enterprise 利用状況可視化・支出制御強化

## 公式内容の日本語要約

Claude Enterprise向けに、管理コンソールの分析・コスト可視化機能と支出制御機能が拡充。グループ/個人単位での利用・コスト内訳、Claude Codeの「Usage」「Value」タブ新設、自然言語での分析クエリ（Analytics Chat）、Analytics APIによるプログラム的なデータ連携（Datadog Cloud Cost Management、CloudZero等）に対応。支出面では、モデルのデフォルト設定・ロールベースのモデル利用制限、組織レベルの支出閾値アラート（75%/90%）、ユーザー個人への利用状況可視化、Admin APIによる増額リクエスト対応の自動化を追加。

## できるようになったこと

- 管理コンソールでグループ（SCIMグループ）・個人単位の利用状況とコスト内訳を確認可能（作成したartifact数、編集ファイル数、利用skill/connectorも含む）
- Claude Code Insights: 「Usage」タブ（アクティブ開発者数、セッション数、よく使うコマンドを日次更新）と「Value」タブ（生産性向上見積もり、コミット単価、年間価値試算）を新設
- Analytics Chat: 「今月利用量が倍増したチームは？」のような自然言語質問にチャート回答（エクスポート・共有可能）
- Analytics API: 日付範囲・チーム・製品・モデルでフィルタ可能。Datadog Cloud Cost Management、CloudZeroなど既存コスト管理ツールとの連携が可能
- 管理者がチャット/Cowork/Claude Code横断でデフォルトモデルを指定し、ロールごとに利用可能モデルを制限可能
- 組織レベルの支出上限に対して75%/90%到達時にアラート。ユーザー個人にも75%/95%到達時にアプリ内アラートと管理者への増額リクエスト導線を提供
- Admin APIで増額リクエストの承認自動化、利用上限接近ユーザーの特定、急激な利用変化の検知が可能に

## 影響範囲

- 対象ユーザー: Claude Enterprise管理者、財務・IT部門
- 対象プラン: Claude Enterprise（Team適用は明記なし）
- API / UI / 管理者機能: 管理コンソールの分析ダッシュボード拡充、新設Admin API、Analytics API拡張

## 教材化メモ

- 「AI利用のコストガバナンス」教材（利用量の可視化→閾値アラート→ロールベース制御の3段構え）の実例として使える
- Analytics APIとDatadog/CloudZero連携は、AI利用コストをFinOpsツールに統合する事例として紹介できる

## 原文確認

- 公式見出し: Giving admins more visibility and control over Claude spend
- 公式URL: https://claude.com/blog/giving-admins-more-visibility-and-control-over-claude-usage-and-spend
- 原文全文は公式ページで確認してください。
