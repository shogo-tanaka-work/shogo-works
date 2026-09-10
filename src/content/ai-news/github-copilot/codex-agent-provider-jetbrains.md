---
title: "GitHub Copilot：JetBrains IDEでCodexをエージェントプロバイダーとして選択可能に"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-07
sourceUrl: "https://github.blog/changelog/2026-07-07-codex-as-agent-provider-and-agentic-enhancements-in-jetbrains-ides"
summary: "JetBrains版GitHub Copilot ChatでOpenAI Codexをエージェントプロバイダーとして選択できるようになった（パブリックプレビュー）。同時にフック管理・MCPサーバー管理・3段階の承認レベル・Claudeエージェントの権限モード対応も追加され、JetBrains向けのエージェント運用機能がまとめて強化された。"
description: "JetBrains IDEのCopilot ChatでCodexをエージェントとして選択可能に。フック管理・MCPサーバー管理・3段階承認レベルなどエージェント運用機能も同時強化。"
impact: "JetBrains利用者はCopilot Chat内でOpenAI Codexをエージェントとして呼び出せるようになり、モデル・エージェント選択の幅が広がる。フック管理・MCPサーバー管理・3段階承認レベルはエンタープライズのガバナンス要件に対応しやすくする。"
tags: ["github-copilot", "jetbrains", "codex", "agent", "mcp"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHubは、**JetBrains版GitHub Copilot ChatでOpenAI Codexをエージェントプロバイダーとして選択できる機能**をパブリックプレビューとして公開しました。IntelliJ IDEA・PyCharm・WebStormなどのJetBrains系IDEで、Copilot標準のエージェントに加えてCodexを呼び出せるようになります。

同時に、JetBrains向けのエージェント運用機能もまとめて強化されました。**フック管理**、**MCPサーバー管理**、**3段階の承認レベル**、そして**Claudeエージェントの権限モード対応**が追加されており、JetBrains環境でのエージェント運用がVS Code版に近づく内容です。

## 何が変わったか

- JetBrains版Copilot Chatで**OpenAI Codexをエージェントプロバイダーとして選択可能**（パブリックプレビュー）
- **フック管理**機能を追加
- **MCPサーバー管理**機能を追加
- エージェントの**承認レベルを3段階**で設定可能に
- **Claudeエージェントの権限モード**にも対応

## 業務インパクト（一般企業向け）

JetBrains系IDE（IntelliJ IDEA・PyCharm・WebStormなど）を主に使っている開発チームは、これまでVS Code版に比べてエージェント関連機能で後れを取っていましたが、今回の更新でその差が縮まります。Copilot ChatとCodexを使い分けられるようになったことで、タスクの性質に応じてエージェントを選ぶ運用が可能になります。

フック管理・MCPサーバー管理・3段階承認レベルは、いずれもエンタープライズのガバナンス要件に応えるための機能です。特に承認レベルの3段階設定は、エージェントにどこまで自律的な操作を許すかを組織のポリシーに合わせて調整できるため、情シス・セキュリティ部門がエージェント運用ルールを策定する際の実装手段として使えます。

## 副業・個人活用視点

JetBrains系IDEでの開発案件が多い人にとっては、Copilot ChatとCodexの使い分けを試せるようになったことが直接のメリットです。案件によって得意なモデル・エージェントが異なる場合、切り替えのコストが下がります。

承認レベルを調整できるようになったことで、自動化の度合いを案件ごとに変えられます。信頼関係ができているクライアント案件では承認レベルを緩め、初めての案件では慎重な設定にする、といった使い分けが可能です。
