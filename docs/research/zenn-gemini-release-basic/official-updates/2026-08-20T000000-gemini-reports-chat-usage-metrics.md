---
date: 2026-08-20
title: "Google Chat の利用状況が Gemini reports ダッシュボードで確認可能に"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/08/view-google-chat-usage-metrics-in-Gemini-reports-dashboard.html
fetched_at: 2026-08-21T09:20:00+09:00
published_at: 2026-08-20
date_precision: date-only
category: enhancement
---

# 2026-08-20 Gemini reports ダッシュボードに Google Chat 利用指標

## 公式内容の日本語要約

Google Workspace の管理者が、**Gemini reports ダッシュボードで Google Chat の利用指標を組織単位・ユーザー単位で確認できる**ようになった。エンドユーザー側の操作・影響はない。

公式は「Google Chat のアクティブな Gemini ユーザーを追跡し、利用傾向を分析し、Gemini 機能から最も恩恵を受けているのが誰かを特定できる」と説明している。要約・生成といった AI 機能が実際に使われているかを、部署やユーザー単位で見られる。

**指標の定義変更を伴う点が重要**である。Chat における一部の Gemini 要約操作が、ユーザー起点であることを理由に「アクティブ」として再分類された。この結果、**アクティブユーザー数と Chat 全体の利用レポートの数値が更新される**。過去との単純比較ができなくなる可能性がある。

ロールアウトは Rapid Release / Scheduled Release とも即時提供。対象は Business Starter / Standard / Plus、Enterprise Starter / Standard / Plus、および Education の Google AI Pro for Education アドオン。管理者は Help Center の Gemini reports ドキュメント（https://support.google.com/a/answer/14564320 ）を参照する。

同日の Workspace Updates には Google Vids による Slides 録画（AI 音声生成・文字起こしベース編集を含む）、Allowlisted Domains API の GA、Google Chat のスペース作成制限の粒度追加も掲載されたが、Gemini / AI 機能の変更として扱えるのは本件と Vids 録画のみである。

## できるようになったこと

- Gemini reports ダッシュボードで Google Chat の利用指標を組織単位・ユーザー単位で確認
- Chat のアクティブ Gemini ユーザー数と利用傾向の把握
- Gemini 要約操作の「アクティブ」再分類（指標の定義変更）

## 影響範囲

- 対象ユーザー: Google Workspace 管理者（エンドユーザーの操作は不要）
- 対象プラン: Business Starter / Standard / Plus、Enterprise Starter / Standard / Plus、Education（Google AI Pro for Education アドオン）
- API / UI / 管理者機能: 管理コンソールの Gemini reports ダッシュボード

教材化メモ: src/content/ai-news-notes/gemini/gemini-reports-chat-usage-metrics.mdx

## 原文確認

- 公式見出し: View Google Chat usage metrics in Gemini reports dashboard
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/view-google-chat-usage-metrics-in-Gemini-reports-dashboard.html
- 原文全文は公式ページで確認してください。
