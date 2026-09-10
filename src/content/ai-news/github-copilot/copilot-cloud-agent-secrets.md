---
title: "GitHub Copilot Cloud Agent：組織Secrets/Variables独立管理が可能に"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-05-08
sourceUrl: "https://github.blog/changelog/2026-05-08-more-flexible-secrets-and-variables-for-copilot-cloud-agent"
summary: "GitHub Copilot Cloud Agent 向けに、Actions とは独立した組織レベル Secrets / Variables セクションが追加された。複数リポジトリへの共有設定が可能になり、Actions のシークレット運用と切り離して権限スコープを設計できる。"
description: "GitHub Copilot Cloud Agent専用の組織レベルSecretsセクションが追加。ActionsのシークレットとCloud Agentの権限を分離することで、複数リポジトリへの安全な共有設定とエンタープライズ向けAIガバナンス設計が実現できる。"
impact: "Copilot Cloud Agent を全社展開しているチームは、Actions のシークレットと混在していた権限分離をやり直せる。組織の AI ガバナンス設計に直結する。"
tags: ["github-copilot", "cloud-agent", "secrets", "enterprise", "release-note"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/github-copilot/cloud-agent"
  - "/knowledge/ai-tools/github-copilot/enterprise-policy"
draft: false
---

## 要約

GitHub Copilot の Cloud Agent 向けに、組織レベルの Secrets / Variables を管理する専用セクションが追加されました。これまで Actions のシークレット領域と区別が曖昧だった部分が、Cloud Agent 専用として明示的に切り出されています。

## 何が変わったか

- 組織設定の Copilot 領域に Cloud Agent 専用 Secrets / Variables セクションが追加
- 複数リポジトリにまたがって共有する設定が可能
- Actions の Secrets / Variables と独立した権限管理

## 業務インパクト

これまで Cloud Agent から API キーや外部サービス資格情報を扱う場合、運用上は Actions のシークレットを流用するか、リポ単位で個別管理するかの選択になりがちでした。Actions と Cloud Agent では「いつ・どのコンテキストで・誰の権限で」動くかが違うので、本来は分けて管理した方が安全です。

今回の更新で組織レベルの Cloud Agent 専用シークレット領域ができたことで、たとえば「Cloud Agent からは本番 API を叩けるが、Actions ワークフローからはステージング API しか叩けない」といった、エージェント向けの権限スコープ設計を独立して組めるようになります。

Enterprise で AI エージェントを横断利用するチームは、この分離を前提にしたガバナンス設計を組むタイミングです。

## 教材化メモ

- Copilot Cloud Agent 運用教材に「Actions と Cloud Agent のシークレット分離設計」の章を追加
- Enterprise の権限スコープ最小化の章で実例として扱える
- AI エージェント全般の「秘密情報の扱い方」教材で、組織レベル × エージェント専用の二段構成を紹介
