---
title: "Claude に Sheets・Whiteboards・Data が追加：チームで共同編集できる新アーティファクトと、アプリを埋め込める対話型コネクタ"
tool: "claude"
toolLabel: "Claude"
date: 2026-11-10
sourceUrl: "https://claude.com/blog/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors"
summary: "Anthropicは、チームとClaudeが共同で作る新しいアーティファクトとして Claude Sheets（表計算）、Claude Whiteboards（ホワイトボード）、Claude Data（旧Dashboards）を発表した。あわせて、パートナーのアプリをClaudeの画面内に埋め込める対話型コネクタを開始。会議にClaudeを参加させるClaude Meetingsは近日提供予定。"
description: "Sheets・Whiteboards・Dataの新アーティファクトと、Adobe・Atlassianなどをタブ移動なしで使える対話型コネクタ。Salesforce（ベータ）・NetSuite・Workday（ベータ）のプラグインも紹介。"
impact: "Claudeがコード以外の業務（集計、会議の発想整理、ダッシュボード）まで共同作業の場になり、非エンジニアの業務ツール選定に影響する。"
tags: ["claude", "artifacts", "connectors", "mcp", "release"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropicは2026年11月10日、Claudeの用途をコード中心の作業から一般的なチーム業務へ広げる発表をしました。柱は2つです。1つは、既存の文書・スライド・デザインに加わる新しいアーティファクト種別（Sheets、Whiteboards、Data）。もう1つは、パートナーのアプリをClaudeの画面内に埋め込める「対話型コネクタ」です。

## 何が変わったか

- **Claude Sheets**: チームとClaudeが一緒に表計算を作る。データの整理、数式の作成・編集、複数タブにまたがる作業に対応
- **Claude Whiteboards**: 会議でアイデアを配置・整理し、そのあとClaudeに要点を要約させられるデジタルホワイトボード
- **Claude Data（旧Dashboards）**: SnowflakeやSalesforceなどに接続し、データチームが認定した定義（ベータ）を使ってダッシュボード、ビジュアルなデータストーリー、ナレーション付き短尺動画を作成
- **対話型コネクタ**: パートナーがアプリをClaudeに直接埋め込み、Adobe、Atlassianなどをタブ切り替えなしで操作。Salesforce（ベータ）、NetSuite、Workday（ベータ）のプラグインには、営業の商談準備、経理のデータ分析、人事の休暇・経費処理向けの組み込みスキルが付く
- **Claude Meetings**: 通話にClaudeを追加し、メモ作成や共同文書の更新を行う機能は「近日提供予定」で、今回は未提供
- 同じ文脈が引き継がれるため、ホワイトボードから表計算、ダッシュボードへ内容を作り直さず展開できるとされる

提供プランや地域の詳細は公式記事で確認してください。

## 業務インパクト（一般企業向け）

Claudeが「質問に答える道具」から、チームで共有する作業面へ寄ります。経理・FP&Aの定型集計、営業の商談準備、会議後の整理など、これまで個別ツールで分かれていた作業を1つの会話文脈でつなげられる可能性があります。公式の顧客事例では、予算サイクルの資料作成が約10時間から30分未満になったと紹介されていますが、これは顧客の自己申告で、自社で同じ効果が出る保証はありません。

導入判断では、データ接続の権限設計が論点です。Claude DataはSnowflakeやSalesforceに接続するため、閲覧範囲、認定済みの指標定義、共有範囲を情シスと事前に決めてください。ベータ表記の機能（認定定義、Salesforce・Workdayのプラグイン）は本番業務に載せる前に検証が必要です。

## 副業・個人活用視点

個人や小規模チームでも、アカウント・案件・日報のトラッカーをClaudeに作らせ、更新を続ける使い方が考えられます。公式も、アカウント管理表、日次ブリーフィング、プロジェクト状況ボード、契約レビュー表のような独自アーティファクトを例に挙げています。表計算ソフトやホワイトボードの契約を増やす前に、既存のClaudeの契約範囲で足りるかを確認すると、ツール費を抑えられます。
