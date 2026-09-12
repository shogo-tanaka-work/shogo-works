---
date: 2026-09-10
title: "Data プラグインが ChatGPT Work と Codex で利用可能に"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-09-12T09:20:00+09:00
published_date: 2026-09-10
date_precision: date-only
category: release
---

# 2026-09-10 Data プラグインが ChatGPT Work と Codex で利用可能に

教材化メモ: src/content/ai-news-notes/chatgpt-openai/data-plugin-work-codex.mdx

## 公式内容の日本語要約

ChatGPT Release Notes に **Data プラグイン** が追加されました。ChatGPT Work と Codex から、接続済みの業務データを分析するためのプラグインです。

使い方は、プラグインディレクトリから Data をインストールし、会話で **`@Data`** を指定して始めます。ビジネス上の問いを投げる、変化の原因を調べる、インタラクティブなダッシュボードやレポートを作らせる、といった用途が想定されています。フォローアップの質問で分析を絞り込めます。

チーム固有の **メトリクス定義やビジネスコンテキストを持ち込める** 点が特徴です。「売上」「アクティブユーザー」といった指標の定義が組織ごとに違う問題に、プラグイン側で対応する設計になっています。

権限については、**接続したアカウントの既存権限でクエリが実行される** と明記されています。プラグインが独自に権限を広げるのではなく、接続元のアクセス制御がそのまま効きます。接続先によっては別途セットアップや認可が必要です。

## できるようになったこと

- ChatGPT Work / Codex から `@Data` で接続済み業務データを分析
- ビジネス上の問いかけ、変化の原因調査、インタラクティブなダッシュボード・レポートの生成
- フォローアップ質問による分析の絞り込み
- チームのメトリクス定義・ビジネスコンテキストの持ち込み

## 影響範囲

- 対象ユーザー: ChatGPT Work / Codex 利用者（プラグインディレクトリからインストール）
- 対象プラン: Work アクセスを持つプラン
- API / UI / 管理者機能: UI（プラグイン）。権限は接続アカウントの既存権限に従う

## 原文確認

- 公式見出し: Data plugin in ChatGPT Work and Codex（September 10, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 原文全文は公式ページで確認してください。
