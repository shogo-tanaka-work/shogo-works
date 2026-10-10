---
date: 2026-10-08
title: "Google Cloud が Gemini agent を発表（Gemini at Work 2026）"
service: "Google Cloud / Gemini"
source: https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/
fetched_at: 2026-10-09T09:20:00+09:00
published_at: 2026-10-08T12:05:00Z
date_precision: timestamp
---

# 2026-10-08 Google Cloud が Gemini agent を発表

## 公式内容の日本語要約

Google Cloud が **Gemini agent** を発表した（Gemini at Work 2026 の Thomas Kurian 基調講演に基づく）。位置づけは「仕事のための単一の汎用エージェント」で、質問への回答・ナレッジワーク・画像やメディアの生成・コードの記述と実行を、**1つのプロンプトボックスと1つの API** から扱う。利用者は手順ではなく目的を与え、エージェントが計画し、スキルとツールを使い、社内システムへ接続し、**普段使っているアプリの中へ完成物を返す**。

設計の柱として公式が挙げるのは次である。**単一エージェント**（チャット・自律的なタスク実行・コード生成を1つの UI に統合。スケジュール実行とイベント起動に対応）。**どこからでも使える**（Web / iOS / Android / Windows / Mac / CLI / Google Workspace / Microsoft 365 / Slack。サードパーティアプリへ headless agent として組み込みも可能）。**実行の永続化**（クラウドで動き、記憶とパーソナライズは1セットを共有。長時間の作業は PC を閉じても続く）。**マルチエージェント編成**（独自の identity を持つ一時的なサブエージェントを並列・逐次で作る。`@agents.company.com` のメールと自前のストレージを持つ常設の coworker agent も作れる）。**モデル選択**（現時点で Gemini と **Anthropic の Claude モデル**へジョブを振り分け、他の private / open モデルも予定）。記憶は session / semantic / procedural（自分でスキルを書く）/ episodic の4種類。

統制面では、エージェントごとに暗号的に裏付けられた identity と最小権限、セキュリティ管理者が承認するロールベースの細粒度認可、外部システムへの OAuth 伝播、全アクションのエージェント単位の監査ログ、独立したネットワーク境界を持つ **Agent Sandbox**、組織全体のポリシーをリアルタイム適用する **Agent Gateway** が挙がる。コスト面では複数モデルの振り分けと Smart Routing、**Cloud Billing Console でのプロジェクト単位のリアルタイム上限**（到達するとそのプロジェクトのエージェントが停止し、再開操作が必要）。

接続先は Workspace（Gmail / Drive / Docs / Slides / Sheets / Chat / Calendar）、Confluence / Microsoft Office / Teams / Slack、Git / Jira、Salesforce / ServiceNow、BigQuery / Databricks / Postgres / Snowflake、S3 / Azure Data Lake / SAP / Workday、Iceberg テーブル、ローカルファイル、**任意の MCP サーバー**（社内ネットワークの内外とも）。

**提供状況・価格・必要エディション・ロールアウト日は、この記事では明示されていない。** 明記されているのは業界特化版の段階だけで、**Financial Services と Legal が preview、Government / Healthcare / Retail が coming soon** である。

## 影響範囲

- 対象ユーザー: Google Cloud / Workspace を使う企業
- 対象プラン: **公式未記載**（業界特化版のみ preview / coming soon が明示）
- API / UI / 管理者機能: 1つの API、Agent Sandbox / Agent Gateway、Cloud Billing Console の上限設定

教材化メモ: src/content/ai-news-notes/gemini/google-cloud-gemini-agent.mdx

## 原文確認

- 公式見出し: Google Cloud introduces the Gemini agent / Welcome to Gemini at Work 2026
- 公式URL: https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/ 、https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026
- 原文全文は公式ページで確認してください。
