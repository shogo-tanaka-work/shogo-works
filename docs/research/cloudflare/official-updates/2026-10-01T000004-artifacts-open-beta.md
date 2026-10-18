---
date: 2026-10-01
title: "Artifacts がオープンベータ。Git を話すバージョン管理ファイルシステムを Workers から操作できる"
service: "Artifacts"
product: "Artifacts, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-01-artifacts-open-beta/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: release
---

# 2026-10-01 Artifacts オープンベータ

## 公式内容の日本語要約

**Artifacts** は **Git 互換のバージョン管理ファイルシステム**で、**プロジェクト / ユーザー / セッション / タスク単位**にリポジトリを分けて持てる。数百万リポジトリ規模へのスケールを想定している。これがオープンベータになった。

オープンベータに含まれる機能は5つ。**(1) Workers 連携** — Workers Builds 経由で接続し、**本番ブランチへの push で Worker をデプロイ、他ブランチは preview 環境を作る**。**(2) プログラムからのリポジトリ管理** — Workers の Artifacts バインディングでリポジトリの作成・fork・検査、ファイル読み取り、Git トークンの発行ができる。**(3) イベント購読** — 作成・削除・push・clone といったライフサイクルイベントに反応できる。**(4) データのローカライゼーション** — リポジトリのデータを **US または EU** で保存・処理できる。**(5) 監視** — 操作数・pull・push・エラーのメトリクスをダッシュボードまたは Analytics API で追える。

**対象は Workers Paid プラン。課金開始は 2026-10-14**（同日発表の公募記事では 2026-10-15 と記載があり、**公式内で1日の差がある**。本メモでは changelog の 2026-10-14 を採用し、もう一方は未確認として扱う）。

## できるようになったこと

- エージェントごと・タスクごとにリポジトリを払い出す運用
- Worker からプログラム的に fork / 作成 / トークン発行
- push / clone をトリガーにした処理の実装
- US / EU でのデータ所在の指定

## 影響範囲

- 対象ユーザー: Workers Paid プランの利用者
- 対象プラン: **Workers Paid 限定。課金は 2026-10-14 から**
- API / UI / 管理者機能: Workers バインディング、Workers Builds、Analytics API

教材化メモ: src/content/ai-news-notes/cloudflare/artifacts-open-beta.mdx

## 原文確認

- 公式見出し: Artifacts is now in open beta
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-01-artifacts-open-beta/
- 関連: https://blog.cloudflare.com/next-git-platform-on-cloudflare/（Artifacts を使った公募、締切 2026-10-14）
- 原文全文は公式ページで確認してください。
