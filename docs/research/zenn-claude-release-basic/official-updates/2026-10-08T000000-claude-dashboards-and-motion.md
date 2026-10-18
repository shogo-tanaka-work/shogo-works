---
date: 2026-10-08
title: "Claude Dashboards と Claude Motion が beta で公開"
service: "Claude（Artifacts）"
source: https://claude.com/resources/articles/dashboards-and-motion
fetched_at: 2026-10-09T09:20:00+09:00
published_at: 2026-10-08
date_precision: date-only
---

# 2026-10-08 Claude Dashboards と Claude Motion が beta で公開

## 公式内容の日本語要約

Anthropic が Artifacts の新種として **Claude Dashboards** と **Claude Motion** を beta で公開した。いずれも Claude の会話から成果物を作り、作成後も使い続ける前提の機能である。

**Dashboards** は社内データに接続してダッシュボードを生成し、鮮度を保つ。接続先として BigQuery / Databricks / Snowflake / Redshift / ClickHouse といったデータ基盤と Salesforce が挙げられている。自然言語で質問し、**各数値から元クエリへ辿れる**。グラフごとに最終更新時刻が表示される。作成したダッシュボードは Amplitude / Grafana / Hex / Mixpanel / Perplexity / PostHog / Sigma へ送れる（Looker / monday.com / Tableau は coming soon）。公式は「素早い探索的な質問向けで、踏み込んだ分析は BI ツールが必要」と位置づけている。

**Motion** はプロンプトからアニメーション解説動画を作る。全社向けの短尺、取締役会資料用のアニメーショングラフ、製品ウォークスルーが用途として挙がる。エディタでの編集と Claude への修正指示の両方に対応し、MP4 で書き出せる。重要な点として、公式は **動画生成モデルを使っていない**と明言している。テキスト・グラフ・図形・画像をコードでアニメーションさせる方式のため、生成映像や AI 生成人物は出てこない。書き出し先として Adobe / Descript / HeyGen / Higgsfield / invideo / Luma AI / Runway（Canva / Captions は coming soon）が挙がる。

## できるようになったこと

- 社内データ基盤に接続したダッシュボードを会話から生成し、数値から元クエリへ辿れる
- グラフ単位でデータの最終更新時刻を確認できる
- ダッシュボードを外部 BI / 分析ツールへ送れる
- プロンプトからアニメーション解説動画を作り、MP4 で書き出せる
- 動画は生成モデルではなくコードによるアニメーションで作られる

## 影響範囲

- 対象ユーザー: Dashboards は有料プラン全般、Motion は Team / Enterprise
- 対象プラン: いずれも beta
- API / UI / 管理者機能: Enterprise では **既定で無効**。`Organization settings > Artifacts` で管理者が有効化する

教材化メモ: src/content/ai-news-notes/claude/claude-dashboards-and-motion.mdx

## 原文確認

- 公式見出し: Build live dashboards and animate explainers with Claude
- 公式URL: https://claude.com/resources/articles/dashboards-and-motion
- 原文全文は公式ページで確認してください。
