---
date: 2026-10-01
title: "Cloudflare Basin が一般提供。Pipelines / Catalog / SQL を Iceberg + R2 で統合"
service: "Basin"
product: "Basin, Basin Pipelines, Basin Catalog, Basin SQL"
source: https://blog.cloudflare.com/cloudflare-basin/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: release
---

# 2026-10-01 Cloudflare Basin 一般提供（GA）

## 公式内容の日本語要約

Cloudflare は、**Apache Iceberg** と **R2 Object Storage** の上に構築したサーバーレスのデータ基盤 **Cloudflare Basin** を一般提供した。2025年の Birthday Week に「Cloudflare Data Platform」として発表されたものの改称・GA である。**データ egress 課金が無い**点を一貫した差別化として挙げている。

構成は3つ。**Basin Pipelines**（旧 Cloudflare Pipelines）は Workers / HTTP / Logpush からイベントを受け、SQL で変換して Iceberg テーブルまたは R2 のファイル（JSON / Parquet）へ書き込む。**Basin Catalog**（旧 R2 Data Catalog）はマネージドな Iceberg REST カタログで、**コンパクション・スナップショット失効・メタデータ最適化**を自動化し、**テーブルごとのコンパクションポリシー**でアクセスパターンに応じた目標ファイルサイズを選べる。**Basin SQL**（旧 R2 SQL）は Iceberg テーブルに対するサーバーレスの分散クエリエンジンで、**集約・JOIN・ウィンドウ関数・JSON 操作など190超の関数**に対応し、Wrangler CLI / API / ダッシュボードのエディタから使える。

課金は従量制で、取り込み・処理・クエリの実行時にのみ発生する。時間課金やインフラ費用は無い。

エージェント文脈については、公式が「プロンプトからコーディングエージェントまで、データアプリケーションが増えており、そうしたものは本来リソースやデータをポーリングして待つ必要がある」と述べ、**書き込み直後にクエリできること**がエージェントの反復を支えるとしている。

## できるようになったこと

- Iceberg テーブルへの取り込み・管理・クエリをマネージドで完結できる
- テーブル単位のコンパクションポリシー設定
- 190超の SQL 関数（JOIN / ウィンドウ関数 / JSON）でのクエリ
- egress 課金なしで他のエンジンからも同じテーブルを読める

## 影響範囲

- 対象ユーザー: Workers / R2 上でログ・イベント・分析データを扱う開発者
- 対象プラン: 従量課金（取り込み・処理・クエリ時のみ）
- API / UI / 管理者機能: Wrangler CLI、API、ダッシュボードの SQL エディタ

教材化メモ: src/content/ai-news-notes/cloudflare/cloudflare-basin-ga.mdx

## 原文確認

- 公式見出し: Introducing Cloudflare Basin: an open, serverless data platform, now generally available
- 公式URL: https://blog.cloudflare.com/cloudflare-basin/
- changelog: https://developers.cloudflare.com/changelog/post/2026-10-01-basin-ga/
- 原文全文は公式ページで確認してください。
