---
title: "GitHub Copilot：app専用アクセスポリシー追加とEnterprise managed settingsのapp/cloud agentへの拡大"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-27
sourceUrl: "https://github.blog/changelog/2026-07-27-manage-github-copilot-app-access-with-a-dedicated-policy/"
summary: "GitHub Copilotのクライアント別ガバナンスが同日で2件強化された。従来Copilot CLIと同一ポリシーだったCopilot appに、Enabled everywhere/Disabled everywhere/Let organizations decideの3段階で制御できる専用アクセスポリシーが追加された。さらにCLI/VS Codeのみに適用されていたEnterprise managed settingsが、Copilot appとCopilot cloud agentにも適用されるようになった。"
description: "Copilot app専用アクセスポリシー（3段階の制御）追加。プラグイン利用可否・承認済みマーケットプレイス制限・承認プロンプトのバイパス・モデル自動選択デフォルトの管理設定が、app/cloud agentにも横断適用可能に。既存managed-settings.json利用組織は追加設定不要。"
impact: "エンタープライズ/組織管理者にとって、Copilotの各クライアント（app/CLI/VS Code/cloud agent）を横断した一貫したガバナンス管理が可能になる。"
tags: ["github-copilot", "governance", "enterprise", "policy"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub Copilotのクライアント別ガバナンスが、同日に2件まとめて強化されました。

一つは、これまでCopilot CLIと同一ポリシーで管理されていた**GitHub Copilot appの専用アクセスポリシー**です。エンタープライズ・組織管理者は、「Enabled everywhere（全体で利用可能、デフォルト）」「Disabled everywhere（全体でブロック）」「Let organizations decide（各組織の管理者に判断を委任）」の3段階でアプリへのアクセスを制御できるようになりました。プルリクエストレビューや監査ログなど既存のセキュリティガードレールは維持したまま、クライアント別（app／CLI）に独立した管理を求める顧客フィードバックに応えた変更です。

もう一つは、これまでCopilot CLIとVS Codeのみに適用されていた**エンタープライズ管理設定（enterprise managed settings）**が、Copilot appとCopilot cloud agentにも適用されるようになったことです。対象となる設定は、プラグインの利用可否、承認済みマーケットプレイスの制限、承認プロンプトのバイパス（app/CLI/VS Code対象、cloud agentは対象外）、新規会話でのモデル自動選択のデフォルトです。既存の`managed-settings.json`を使っている組織は追加設定不要で、Copilot appは次回サインイン・再起動時に、cloud agentはタスク割り当て時に設定が反映されます。

## 何が変わったか

- Copilot appに専用アクセスポリシーを追加（Enabled everywhere / Disabled everywhere / Let organizations decideの3段階）
- 既存のセキュリティガードレール（PRレビュー、監査ログ）は維持したまま、app/CLIを独立管理可能に
- Enterprise managed settingsがCopilot appとCopilot cloud agentにも適用範囲拡大
- プラグイン利用可否・承認済みマーケットプレイス制限・承認プロンプトのバイパス・モデル自動選択デフォルトが対象
- 既存の`managed-settings.json`利用組織は追加設定不要で自動適用

## 業務インパクト（一般企業向け）

Copilotの利用がCLI・VS Code・app・cloud agentと複数のクライアントに広がるにつれ、クライアントごとに個別にガバナンスを管理する負担が増えていました。今回の変更により、1つのポリシー定義を全クライアントで一貫して適用できるようになり、エンタープライズ管理者の運用負荷が軽減されます。特にCopilot appの独立ポリシー化は、「CLIは許可するがappは禁止したい」といった、これまで実現できなかった細かい制御を可能にします。

情シス・セキュリティ部門がCopilotの利用範囲を段階的に拡大している組織にとって、クライアント横断のガバナンス整備は、コンプライアンス対応やセキュリティ監査の説明のしやすさに直結します。既存の`managed-settings.json`をすでに運用している組織は追加作業なしで恩恵を受けられる点も導入のハードルを下げています。

## 副業・個人活用視点

個人利用ではこの種の管理者向け機能は直接関係しませんが、企業のCopilot導入支援やIT管理コンサルティングに関わるフリーランスにとっては、クライアント横断のガバナンス設計パターンとして提案資料や導入手順書の参考になります。
