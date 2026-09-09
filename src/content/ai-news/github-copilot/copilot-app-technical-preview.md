---
title: "GitHub Copilot App：GitHub文脈からagentic開発・team metrics・Auto model選択"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-05-14
sourceUrl: "https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview/"
summary: "GitHub Copilot appがtechnical previewになった。issue、pull request、prompt、previous sessionからagentic development sessionを開始し、branch、files、conversation、task stateを分けて作業できる。"
description: "GitHub Copilot AppのTechnical Previewで、issueやPRを起点にsessionを開始しbranch・task stateを分離したまま開発できるようになった。team利用状況の集計やAuto model selectionも同時追加され、チーム導入の運用設計ポイントを解説。"
impact: "GitHub CopilotがIDE補完やcloud agentを超えて、GitHub文脈を起点にしたdesktop agentic development環境へ広がる。チームはpreview policy、CLI有効化、session運用を整理する必要がある。"
tags: ["github-copilot", "copilot-app", "agentic-development", "desktop", "technical-preview"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHubは2026年5月14日、GitHub Copilot appをtechnical previewとして公開しました。これはGitHub-nativeなdesktop experienceで、issue、pull request、prompt、previous sessionを起点にagentic development sessionを開始し、変更をpull request reviewまで持っていくためのアプリです。

同日に、Team-level Copilot usage metrics APIと、Copilot cloud agentのauto model selection対応も発表されています。つまりGitHub Copilotは、個人のエディタ補助だけでなく、desktop app、cloud agent、usage governance、model routingをまとめて強化している流れです。

## 何が変わったか

- GitHub Copilot appがtechnical previewに
- issue、pull request、prompt、previous sessionからsessionを開始できる
- sessionごとにbranch、files、conversation、task stateを分離
- integrated terminal / browserで検証し、pull requestへつなげられる
- Agent Mergeでreview commentsやfailing checksへの対応を継続できる
- Business / Enterpriseではpreviews有効化とCopilot CLI policy設定が必要
- Team-level metrics APIでteam別の利用状況を集計可能に
- Copilot cloud agentでAuto model selectionが利用可能に

## 業務インパクト（一般企業向け）

今回のCopilot appは、GitHub上の実作業を起点にAI agentを動かすためのアプリです。issueやPRの文脈、review comments、checksを維持したままsessionを始められるため、「AIに依頼するために文脈を貼り直す」手間が減ります。

チーム導入では、previewを誰に開放するか、Copilot CLI policyをどう扱うか、sessionからPRへ移るときのreview責任をどう分けるかが論点になります。Team-level metrics APIも同日に出ているため、導入後はチーム別にactive users、chat、CLI、code review、cloud agent利用を見て、enablement施策を回しやすくなります。

Auto model selectionは、cloud agent運用のコストとrate limitにも関わります。固定モデルで品質を制御するのか、Autoでsystem healthとmodel performanceに任せるのか、組織ごとに判断が必要です。

## 副業・個人活用視点

個人開発者にとっては、GitHub issueやPRを起点にした作業sessionが作りやすくなるのが魅力です。複数案件を持つ副業エンジニアほど、session単位でbranchや作業状態が分かれるのは助かります。

受託開発では、GitHub上のissueをそのまま作業起点にし、途中経過をdiffとPRで確認する流れが作れます。クライアントへの説明も「チャットでAIが直しました」より、「issueからsessionを作り、PRでレビューできる状態にしました」の方が通しやすいです。
