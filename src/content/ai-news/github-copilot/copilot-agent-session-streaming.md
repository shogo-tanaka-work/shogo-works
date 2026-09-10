---
title: "GitHub Copilot：エージェントセッションのストリーミングがパブリックプレビュー（Enterprise Cloud/EMU向け）"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-02
sourceUrl: "https://github.blog/changelog/2026-07-02-copilot-agent-session-streaming-is-now-in-public-preview"
summary: "GitHub Enterprise Cloud（EMU）顧客向けに、Copilotのエージェントセッションデータ（プロンプト・応答・ツール呼び出し）をストリーミングエンドポイントまたはREST APIで取得できるパブリックプレビューが開始。CLI/VS Code/Visual Studio/パートナーIDEを含む全クライアントが対象で、SIEMやMicrosoft Purviewとの連携、直近48時間分のオンデマンド取得に対応する。"
description: "Copilotエージェントセッションのプロンプト・応答・ツール呼び出しをストリーミングやREST APIで取得可能に。SIEM連携やMicrosoft Purview連携に対応し、AI Controlsで有効化が必要。"
impact: "Enterprise Cloud（EMU）管理者は、エージェントが何を実行したかを外部の監査・監視基盤へ取り込めるようになり、AI利用のガバナンス・コンプライアンス対応が強化される。"
tags: ["github-copilot", "enterprise", "audit", "governance", "preview"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHubは2026-07-02、**Copilotエージェントセッションのストリーミング機能**をパブリックプレビューとして公開しました。対象はGitHub Enterprise Cloud（EMU: Enterprise Managed Users）の顧客です。

この機能により、Copilotエージェントが実行したプロンプト・応答・ツール呼び出しのデータを、ストリーミングエンドポイント経由、またはREST API（`GET /enterprises/{enterprise}/copilot/usage-records`）経由で取得できるようになります。REST API経由の場合は直近48時間分をオンデマンドで取得可能です。対象クライアントはCLI、VS Code、Visual Studio、パートナーIDEを含むすべてのCopilotクライアントです。

取得したデータはSIEM（Security Information and Event Management）ツールや**Microsoft Purview**との連携に使うことを想定しており、企業のセキュリティ監視・コンプライアンス基盤にCopilotの利用実態を統合できます。利用には管理コンソールのAI Controls配下で「Enable everywhere」を有効化する必要があります。

## 何が変わったか

- Copilotエージェントセッションの**プロンプト・応答・ツール呼び出し**をストリーミング/REST APIで取得可能に（パブリックプレビュー）
- 対象は**Enterprise Cloud（EMU）**顧客
- CLI / VS Code / Visual Studio / パートナーIDEを含む**全クライアント**が対象
- REST API `GET /enterprises/{enterprise}/copilot/usage-records` で直近48時間分をオンデマンド取得
- **SIEMツール・Microsoft Purview**との連携を想定
- 利用には**AI Controls配下で「Enable everywhere」の有効化**が必要

## 業務インパクト（一般企業向け）

金融・医療・公共機関など、AIツールの利用ログを監査要件として保持する必要がある組織にとって、この機能はCopilotの企業導入における重要な後押しになります。これまで「エージェントが何をしたか」を外部の監視基盤で追跡する手段が限られていた企業も、既存のSIEM運用にCopilotのログを統合できるようになります。

導入する際は、まずAI Controlsで「Enable everywhere」を有効化した上で、SIEM側の取り込み設定（ストリーミングエンドポイントかREST APIポーリングか）を選ぶ必要があります。EMU顧客限定のプレビューのため、通常のEnterpriseプランでは現時点で利用できない点に注意してください。

## 副業・個人活用視点

この機能は主にEnterprise Cloud（EMU）契約企業のセキュリティ・コンプライアンス担当者向けのため、個人利用者への直接的な影響はありません。ただし、企業向けにCopilot導入支援やAIガバナンスコンサルティングを行っている副業・フリーランスの方は、監査要件が厳しい顧客への提案材料として押さえておく価値があります。
