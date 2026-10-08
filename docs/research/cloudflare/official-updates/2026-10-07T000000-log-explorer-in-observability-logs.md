---
date: 2026-10-07
title: "Log Explorer のデータセットを Observability の Logs ページから照会（単独メニューは廃止）"
service: "Cloudflare"
product: "Log Explorer, Workers Observability"
source: https://developers.cloudflare.com/changelog/post/2026-10-07-log-search-in-observability-logs/
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: enhancement
---

# 2026-10-07 Log Explorer が Observability の Logs ページへ統合

## 公式内容の日本語要約

Cloudflare ダッシュボードで、**Log Explorer のデータセットが Observability 配下の Logs ページから照会できるようになった。** Logs ページは Log Explorer と Workers Observability の両方のデータセットを、共通のフィルタビルダー・SQL エディタ・可視化の上にまとめて扱う。

**単独の Log Explorer メニューはダッシュボードから消えた。** 有効化済みのデータセット、保存済みクエリ、SQL クエリはそのまま Logs ページで動作するとされている。データセットの管理は Logs ページのデータセットセレクタから「Configure」を選ぶ。従来の Log Search ページは直接 URL でまだ到達できる。

プラン要件、ティア、ロールアウト時期についての記載はない。

## できるようになったこと

- Workers のログと Log Explorer のデータセットを1つの画面・1つの SQL エディタで横断できる

## 影響範囲

- 対象ユーザー: Log Explorer または Workers Observability でログを調査している利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: ダッシュボード UI（メニュー構成の変更）

## 教材化メモ

- **「メニューが消える UI 変更」は手順書の保守コストとして教えられる。** 機能自体は残っているが入口が変わった。**社内手順書やスクリーンショット付きマニュアルを持っている組織は、この種の変更で必ず陳腐化する。** 画面名ではなく目的（「ログを SQL で調べる」）で手順書を書く、という作法の実例になる。
- **ログの横断は原因切り分けの速度に直結する**ので、Workers でアプリを動かしている読者には実利がある。ただし UI 統合そのものは記事1本にするほどの判断変更を生まない。
- 記事化は見送った（スコア5）。重要度1 / 持続性1 / 実務影響1 / 既存教材影響0 / 公式情報の十分性2。ダッシュボードのメニュー再編であり、業務フローや技術判断が変わる粒度ではない。

## 原文確認

- 公式見出し: "Query Log Explorer datasets from Observability Logs"
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-07-log-search-in-observability-logs/
- 原文全文は公式ページで確認してください。
