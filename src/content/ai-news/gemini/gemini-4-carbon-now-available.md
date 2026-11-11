---
title: "Gemini 4 Carbon が一般提供：長時間エージェント作業向けの最上位モデル、API価格はArgonと同額"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-11-10
sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/"
summary: "GoogleはGemini 4 Carbonを開発者・企業・一般ユーザー向けに公開した。サイバーセキュリティと長時間のエージェント作業で最上位とされ、API（Google AI StudioとGemini for business）では導入価格が入力$2・出力$10（100万トークンあたり）でGemini 4 Argonと同額。Google AI Ultra加入者にはAntigravity、Geminiアプリ、検索のAIモードで順次展開される。"
description: "Gemini 4 Carbonが公開。複雑な多段コーディング・科学研究向けでArgonより多くのトークンを使って深く検証する設計。API価格はArgonと同じ導入価格、Antigravityでは/swarmをプレビュー。"
impact: "難度の高い開発・調査タスクのモデル選定で、Argon（標準）とCarbon（高難度向け）の使い分けが必要になる。"
tags: ["gemini", "gemini-4", "carbon", "antigravity", "release"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Googleは2026年11月10日、最上位モデル「Gemini 4 Carbon」を開発者・企業・研究者・一般ユーザー向けに公開しました。Carbonはサイバーセキュリティと、ソフトウェア開発・科学的推論・複雑な知識業務にまたがる長時間のエージェント作業で最高水準とされています。2週間前にはサイバー防御担当者向けのFairwindプログラムで先行提供されていました。

位置づけは、先に公開された「Gemini 4 Argon」との役割分担です。公式はArgonを多くの開発・知識業務に最適な選択肢とし、Carbonはモデルの知能の限界を試す課題（複雑な多段コーディングやデバッグ、オープンエンドな科学研究）向けとしています。Carbonはより多くのトークンを使い、探索・深い推論・検証ループを回します。

## 何が変わったか

- **提供経路**: APIはGoogle AI Studio、Gemini for business、Android Studioで有料の開発者・企業が利用可能。Google AI Ultra加入者にはGoogle Antigravity、Geminiアプリ、検索のAIモードへ順次展開
- **価格**: API導入価格は100万トークンあたり入力$2・出力$10で、Argonと同額（導入価格の注記あり）
- **ベンチマーク**: 公式によれば、CursorBench 4.0、PerplexityのWANDR、ZapierのAutomationBenchで1位、次点の外部モデルよりタスクあたりコストが2倍以上低い。Artificial Analysisと共同で公開した新ベンチマーク「Multimodal Knowledge Agent」では2位
- **Antigravity**: 1つの指示から複数エージェントのチームを動かし進捗を追える`/swarm`をプレビュー。設計・調整・監査など深い推論が要る役割にCarbonを割り当て、軽量モデルと並列で組み合わせる使い方が示された
- **業務向け**: 法務・財務・オペレーション領域で、密な文書や図表から根拠付きの知見をまとめ、指定スキーマに沿った表計算・資料・レポートを生成する用途が挙げられている

数値は公式発表による自己申告で、独立した検証は別途必要です。

## 業務インパクト（一般企業向け）

モデル選定の基準が「最上位を選ぶ」から「タスクの難度で分ける」に変わります。公式の整理に従えば、日常的な開発や文書業務はArgon、複数パッケージにまたがる移行や原因調査の難しい障害解析、大量の文書を横断する調査など、失敗コストが高い作業だけをCarbonに回す運用が現実的です。Carbonはトークン消費が増える設計のため、単価が同じでも1タスクあたりの費用はArgonより増える可能性があります。小さな代表タスクで費用と品質を測ってから適用範囲を決めてください。

Google AI Ultra加入者向けの展開が先行するため、全社展開の前提は「APIで使えるか」と「利用者の契約プラン」を分けて確認する必要があります。サイバーセキュリティ性能を前面に出しているため、セキュリティ部門が脆弱性調査で評価する価値もあります。

## 副業・個人活用視点

個人開発者は、API経由でAI Studioの有料枠から試せます。コードの大規模な書き換えや長時間の自動調査のように、人間が張り付けない作業を任せるときにCarbonの価値が出ます。普段の相談や下書きはArgonで足りるので、使い分けるとコストを抑えられます。`/swarm`はプレビュー段階のため、成果物を必ずレビューする前提で、小さなプロジェクトから試すのが安全です。
