---
date: 2026-08-04
title: "Agent Development Lifecycle 提唱 — wrangler dev のローカルOTelトレースと @cloudflare/ci"
service: "Cloudflare Workers"
product: "Workers, Workflows, Artifacts"
source: https://blog.cloudflare.com/agent-development-lifecycle/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-04-local-tracing/
fetched_at: 2026-08-05T11:35:00+09:00
published_at: 2026-08-04
date_precision: date-only
category: release
---

# 2026-08-04 Agent Development Lifecycle（ローカルトレーシング / CI）

## 公式内容の日本語要約

Cloudflare が従来の SDLC に代わる概念として **ADLC（Agent Development Lifecycle）** を提唱しました。AI エージェントによる実装速度にレビュー・デプロイ・保守が追いつかない、という問題設定です。同日に複数の実装が併せて発表されています。

開発者にとって直接効くのが **`wrangler dev` / `vite dev` のローカル OpenTelemetry トレース**です。ローカルでの Worker 呼び出し時に、構造化された OTel トレースと対応するコンソールログが自動でキャプチャされます。ハンドラ呼び出し、`fetch()` 呼び出し、バインディング呼び出しが自動的に対象になります。

特徴は AI エージェント向けの導線です。ツールがエージェントセッションを検出すると、ターミナルに `/cdn-cgi/explorer/api` へのヒントを表示します。この **Local Explorer API** は OpenAPI スキーマを提供し、テレメトリ検出、トレース・ログのクエリ、バインディング状態の検査ができます。エージェントは「失敗箇所を特定 → コード修正 → リクエスト再実行 → 結果検証」をデプロイなしでループできます。人間側は Local Explorer のブラウザ UI で同じトレースを確認できます。

もう 1 つが **`@cloudflare/ci`** です。Workflows 上に構築された CI/CD ツールで、Artifacts リポジトリに対して push をトリガーにパイプラインを実行します。ビルド・テスト・lint・デプロイと依存関係キャッシュに対応し、数百万リポジトリ規模を想定しています。

このほか、エンジニアリング標準の自動適用、Astro の GitHub issue 自動トリアージ（ソフトウェアファクトリ）が同日に公開されています。

## できるようになったこと

- `wrangler dev` / `vite dev` がローカル実行の OTel トレースとログを自動キャプチャ
- Local Explorer API（`/cdn-cgi/explorer/api`）経由で、AI エージェントがトレース・ログ・バインディング状態を機械的に読める
- エージェントがデプロイせずに修正 → 再実行 → 検証のループを回せる
- `@cloudflare/ci` で Artifacts リポジトリの push 起点 CI/CD を Workflows 上に定義できる

## 影響範囲

- 対象ユーザー: Workers 開発者、コーディングエージェント（Claude Code / Codex 等）を使う開発チーム
- 対象プラン: 記事中に個別価格の提示なし（Workers / Workflows の既存料金体系）
- API / UI / 管理者機能: Wrangler CLI、Vite、Local Explorer API / ブラウザ UI、CI SDK

教材化メモ: src/content/ai-news-notes/cloudflare/agent-development-lifecycle-local-tracing.mdx

## 原文確認

- 公式見出し: The Agent Development Lifecycle has arrived on Cloudflare / Workers - AI agents can debug Workers with local tracing
- 公式URL: https://blog.cloudflare.com/agent-development-lifecycle/
- changelog: https://developers.cloudflare.com/changelog/post/2026-08-04-local-tracing/
- CI 詳細: https://blog.cloudflare.com/ci-workflows/
- 原文全文は公式ページで確認してください。
