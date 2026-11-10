---
title: "Cloudflare の Markdown for Agents が GA — 変換結果の分析・ログ・トレースが見られるようになった"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-11-09
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-11-09-markdown-for-agents-observability/"
summary: "Cloudflare の Markdown for Agents が一般提供になり、変換の状況を確認する手段が追加された。ダッシュボードの Agent Readiness に Analytics（変換結果、推定トークン削減、上位ページと User-Agent、失敗理由）、Logs（サンプルされた変換イベント）、Playground（HTML との比較）が入る。GraphQL Analytics API の markdownForAgentsAdaptiveGroups でも同じ集計が取れ、Traces には markdown_conversion スパンが出る。件数はサンプル重み付きの推定値で、トークン削減もバイト数ベースの推定である。"
description: "Markdown for Agents が GA。分析・ログ・Playground・GraphQL・トレースで変換の成否と節約量を確認できる。"
impact: "AI エージェントが自社サイトを読む際の Markdown 変換が、実際にどのページで部分的・失敗しているかを追えるようになった。効果は推定値なので、絶対値ではなく傾向の確認に使う。"
tags: ["cloudflare", "markdown-for-agents", "observability", "ai-agents", "graphql"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare が2026年11月9日、**Markdown for Agents を一般提供（GA）**とし、変換の状況を観測する機能を追加しました。Markdown for Agents は、AI エージェントがサイトを読むときに HTML を Markdown に変換して返す機能です。

ダッシュボードでは、対象ゾーンを選び **Agent Readiness > Markdown for Agents** を開きます。

- **Analytics**: 変換結果、推定トークン削減、変換されたページの上位、上位の User-Agent、失敗理由、コンテンツ上限、部分的または失敗した変換のあるページ
- **Logs**: サンプルされた変換イベント。結果・失敗理由・コンテンツ上限で絞り込める
- **Playground**: 自分のゾーンのページの Markdown を取得し、HTML と並べて比較できる。Markdown、プレビュー、レスポンスヘッダー、推定トークン削減を確認できる

**GraphQL Analytics API** では、`markdownForAgentsAdaptiveGroups` がゾーンとアカウントの両方のスコープで使え、直近7日間の変換総数、結果、推定トークン節約量、ページ別の診断を取れます。**Cloudflare Traces** には、サンプルされたストリーミング変換に `markdown_conversion` スパンが付き、入出力バイト数、変換の CPU 時間、コンテンツ上限のフラグをリクエスト全体のタイムラインと並べて見られます。

**数字の読み方には注意が必要です。** 件数はサンプル重み付きの推定値、トークン削減はバイト数に基づく推定で、トークナイザーによる実測ではありません。

## 何が変わったか

- **Markdown for Agents が GA**
- ダッシュボードに **Analytics / Logs / Playground** を追加
- **GraphQL Analytics API**（`markdownForAgentsAdaptiveGroups`）で同じ集計を取得可能。直近7日間、ゾーン・アカウント両スコープ
- **Traces** に `markdown_conversion` スパン（サンプルされたストリーミング変換）
- 件数はサンプル重み付き推定、トークン削減はバイト数ベースの推定

## 業務インパクト（一般企業向け）

**「エージェントに読まれるサイト」を数字で管理できるようになりました。** これまでは Markdown 変換を有効にしても、どのページで失敗しているか、どの User-Agent が読んでいるかが見えませんでした。Analytics と Logs で、**失敗や部分変換が多いページ**を洗い出せます。

**対応の優先順位をつけやすくなります。** 変換に失敗するページは、エージェントから見ると内容が欠けたサイトです。自社の製品情報やヘルプが AI 経由で参照される機会が増えている組織では、**失敗しているページを直すことが、AI 経由の案内の正確さに直結**します。

**効果の見積もりは傾向として扱ってください。** トークン削減は推定値のため、コスト削減額の根拠として経営に出すより、「変換しない場合と比べてどのくらい軽くなっているかの目安」として使うのが安全です。

## 副業・個人活用視点

**自社サイトや受託サイトを AI に読ませたい場合に使えます。** Playground で HTML と Markdown を並べて確認できるため、制作したサイトの納品前チェックに追加できます。「AI エージェントが読んだときの見え方」を示せると、サイト制作の付加価値として提案しやすくなります。

**エージェントのアクセスの実態も見えます。** 上位の User-Agent を見ると、どのエージェントが自分のサイトを読んでいるかの目安が得られます。コンテンツ発信をしている個人事業主にとって、読者の何割が AI 経由かを知る手がかりになります。
