---
title: "Anthropic が Agent Skills を Agentic AI Foundation に寄贈 — 70以上のプラットフォームが対応する標準が中立の組織へ"
tool: "claude"
toolLabel: "Claude"
date: 2026-10-22
sourceUrl: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation"
summary: "Anthropic は 2026-10-22、AI エージェントに専門知識や手順を教えるオープン標準 Agent Skills を、Linux Foundation 傘下の Agentic AI Foundation（AAIF）に寄贈すると発表した。寄贈の対象は標準の名称とロゴ、GitHub 組織、agentskills.io ドメインである。2025 年 12 月の標準公開以降、ChatGPT、Cursor、GitHub Copilot、VS Code など 70 以上のプラットフォームが対応し、公開されたスキルは 100 万件、インストールは約 2.8 億件に達したという。今後は Anthropic、Google、OpenAI などのエンジニアが個人として保守し、Lead Maintainer は David Soria Parra と Mahesh Murag が務める。ロードマップの案は、バージョン付きリリース、正式な提案プロセス、スキルを書く人と入れる人向けのセキュリティ指針である。"
description: "Agent Skills が AAIF に寄贈され、ベンダー中立の標準になる。バージョン管理と提案プロセスの整備が予定される。"
impact: "スキルを社内資産として整備する企業にとって、特定ベンダーに依存しにくい標準になる。一方、スキルを外部から導入する際のセキュリティ指針は今後の整備段階で、当面は自社での審査が前提。"
tags: ["claude", "agent-skills", "AAIF", "オープン標準", "セキュリティ"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic は 2026-10-22、**Agent Skills** を **Agentic AI Foundation（AAIF）** に寄贈すると発表しました。Agent Skills は、`SKILL.md` を含むフォルダでエージェントに特定の作業や分野の手順を教えるオープン標準です。AAIF は Linux Foundation の傘下にあり、Anthropic が Block、OpenAI と共同で設立し、MCP も寄贈されています。

## 何が変わったか

- **寄贈の範囲**: 標準の名称とロゴ、GitHub 組織、agentskills.io ドメイン。標準の利用や貢献に AAIF への加入は不要
- **普及の規模（公式の数字）**: 70 以上のエージェントプラットフォームが対応。公開スキルは 100 万件、インストールは約 2.8 億件
- **保守体制**: Anthropic、Google、OpenAI などのエンジニアが個人として保守。Lead Maintainer は David Soria Parra と Mahesh Murag
- **ロードマップ案**: バージョン付きリリース、正式な提案プロセス、スキルの作成者と導入者向けのセキュリティ指針
- **意思決定**: MCP と同様に、コミュニティの意見と透明な決定を重視する。仕様変更の提案への意見は Discord で受け付ける

## 業務インパクト（一般企業向け）

**社内のスキル資産を、ベンダーを選ばない形で育てやすくなります。** 標準が中立の組織に移ることで、特定の1社の方針転換に左右されにくくなります。複数のエージェントツールを併用している組織では、1つのスキルを使い回す前提で整備できます。

注意点は**セキュリティ指針がこれから作られる段階**であることです。外部で公開されたスキルは、スクリプトを含み得ます。導入前の審査手順（出所、含まれるスクリプト、アクセスする範囲）は、当面は自社で決める必要があります。

## 副業・個人活用視点

**自分の定型作業をスキルにしておけば、使うツールが変わっても持ち運べます。** 議事録の整形、請求書の下書き、提案書の構成など、繰り返す作業が向いています。

公開スキルを入れる場合は、中身のスクリプトを読んでから使ってください。インストール数が多いことは、安全性の保証になりません。

## 情報源の制約

本記事は Anthropic 公式の発表ページを根拠にしています。ロードマップは「提案」の段階で、時期は示されていません。AAIF 側の公式発表は確認できていません。
