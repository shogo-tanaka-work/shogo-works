---
date: 2026-09-29
title: "Threat Signals が GA — OSINT 脅威情報を「エージェント的スキル」で構造化し WAF ルールへ接続（全アカウントに無料枠）"
service: "Cloudflare Threat Signals"
product: "Application Security, Threat Intelligence"
source: https://blog.cloudflare.com/threat-signals/
fetched_at: 2026-10-06T09:40:00+09:00
published_at: 2026-09-29T13:00:00Z
date_precision: timestamp
category: release
official_url: https://blog.cloudflare.com/threat-signals/
---

# 2026-09-29 Threat Signals が GA（追補）

## 公式内容の日本語要約

Cloudflare は Birthday Week 2026 の火曜（2026-09-29T13:00:00Z）に **Threat Signals** を発表し、**発表時点で GA（Generally Available）**とした。**本日（2026-10-06）の巡回で、Birthday Week のまとめ記事と既存メモを照合した際に未記録であることが判明したため、追補として記録する。**

Threat Signals は **公開されている脅威情報（OSINT）を RSS フィードから取り込み、自動で処理するプラットフォーム**である。公式の説明は「オープンソースの脅威レポートを自動で解析し、構造化された指標（indicators）を抽出し、脅威のコンテキストを WAF ルールへ直接つなぐ」である。

公式が **「agentic skills（エージェント的スキル）」** と呼んでいるのは、**従来は脅威アナリストが手作業で行っていた仕事を再現する自動ワークフロー**である。レポートの要約、IoC（侵害指標）の抽出、タグ付け、コンテキストの維持を担う。**MCP への言及は無く、アクセス経路はダッシュボードと API である。**

**提供形態に無料枠がある。** 全 Cloudflare アカウントが **API とダッシュボードのアクセス、RSS フィード1本の選択、30日間のデータ保持**を無料で得る。Enterprise 階層（Essentials / Advantage / Elite）では、フィード数の拡張、独自データセット、カスタムスキル、保持期間の延長が付く。

アクセス場所はダッシュボードの **Application Security → Threat Intelligence → Threat Signals**。

## できるようになったこと

- OSINT の RSS フィードを取り込み、要約・IoC 抽出・タグ付けを自動化できる
- 抽出した脅威コンテキストを WAF ルールへ接続できる
- 全アカウントで無料枠（フィード1本 / 30日保持 / API + ダッシュボード）
- Enterprise 階層でフィード拡張・独自データセット・カスタムスキル・保持延長

## 影響範囲

- 対象ユーザー: Cloudflare を使うセキュリティ運用担当者（無料枠は全アカウント）
- 対象プラン: 全プラン（無料枠）、Enterprise Essentials / Advantage / Elite（拡張）
- API / UI / 管理者機能: ダッシュボード（Application Security → Threat Intelligence → Threat Signals）、API

教材化メモ: src/content/ai-news-notes/cloudflare/threat-signals-ga.mdx

## 原文確認

- 公式見出し: Introducing Threat Signals: agentic skills for open-source threat intelligence, free for every Cloudflare account
- 公式URL: https://blog.cloudflare.com/threat-signals/
- 併記（取りこぼし検出に使ったまとめ記事）: https://blog.cloudflare.com/birthday-week-2026-wrap-up/
- 原文全文は公式ページで確認してください。
