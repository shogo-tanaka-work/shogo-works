---
title: "GitHub Copilot: ユーザー別 AI クレジット消費量がメトリクス API で取得可能に"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-06-19
sourceUrl: "https://github.blog/changelog/2026-06-19-ai-credits-consumed-per-user-now-in-the-copilot-usage-metrics-api"
summary: "Copilot 使用状況メトリクス API に `ai_credits_used` フィールドが追加された。ユーザー単位の AI クレジット消費量を1日・28日スパンで追跡でき、組織・エンタープライズ単位の AI コスト把握と採用状況分析が可能になった。"
description: "GitHub Copilot Usage Metrics APIにai_credits_usedフィールドが追加。ユーザー単位のAIクレジット消費量をAPIで取得でき、組織・エンタープライズの管理者がコスト管理と採用状況の可視化を行えるようになった。"
impact: "CopilotのAIクレジット消費量をプログラムで取得できるようになり、社内のAI利用コスト管理や部署別レポートの自動化が可能になった。Business / Enterprise管理者はこのAPIを使って、AIクレジット消費の多いユーザーの特定や月次レポートの作成ができる。"
tags: ["github-copilot", "api", "enterprise", "usage-metrics", "ai-credits"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub は Copilot 使用状況メトリクス API に `ai_credits_used` フィールドを追加しました。これにより、組織・エンタープライズの管理者はユーザー単位の AI クレジット消費量を API から直接取得できるようになります。

GitHub Copilot Business・Enterprise では、チャット・コード補完・Copilot Agent など各機能の利用が「AI クレジット」として集計されます。これまでは管理コンソールの画面から確認する必要がありましたが、今回の追加でプログラム的な集計・分析が可能になりました。

レポートの粒度は**単日**と**28日間**の2種類で、エンドポイントは既存の Usage Metrics API と同じです。なお、機能別・モデル別の内訳ではなく総計のみとなっており、請求データではなく分析用シグナルとして提供されています。

## 何が変わったか

- Copilot Usage Metrics API のレスポンスに `ai_credits_used` フィールドが追加
- ユーザー単位で1日分・28日間分の AI クレジット消費量を取得可能
- エンタープライズおよび組織レベルの双方に対応
- 既存エンドポイントへの追加フィールドのため、既存の API 連携を壊さない設計

## 業務インパクト（一般企業向け）

Copilot を導入済みの企業にとって、AI ツールのコスト管理は情シス・管理部門の共通課題です。これまでは画面から手動で確認する必要があったクレジット消費量を API 経由で取得できるようになったことで、次のような運用が可能になります。

- **月次コストレポートの自動化**: AI クレジット消費量を社内の経費管理ツールに自動連携
- **部署別・プロジェクト別の集計**: 組織階層に合わせたコスト配賦レポートの作成
- **採用状況のモニタリング**: クレジット消費が少ないユーザーの特定と研修・活用支援の判断材料に

注意点として、現時点では「総クレジット消費量」のみで機能別・モデル別の内訳は提供されていません。より詳細な分析には今後の機能拡張を待つ必要があります。

## 副業・個人活用視点

個人プランの Copilot ユーザーにはこの API は適用されませんが、**副業でエンジニアリングチームの効率化支援や AI ツール導入コンサルを行うフリーランス**にとっては有用な提案材料になります。

「Copilot の ROI を示すためのメトリクス体制を整える」というサービスの付加価値として、このAPIを活用した可視化ダッシュボード構築を提案できます。コスト管理と採用状況の可視化は、Copilot Business・Enterprise を検討している企業が気にする典型的な懸念事項です。
