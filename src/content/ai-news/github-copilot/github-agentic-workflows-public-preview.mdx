---
title: "GitHub Copilot：Agentic Workflows公開プレビュー・自然言語でCI自動化"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-06-11
sourceUrl: "https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/"
summary: "GitHub Agentic Workflows がパブリックプレビューに移行した（2026-02-13 のテクニカルプレビューから拡大）。自然言語の Markdown ファイルでリポジトリの自動化ロジックを記述し、標準的な GitHub Actions YAML にコンパイルする機能。Issue トリアージ・CI 失敗分析・ドキュメント更新などの推論ベースのタスクを、コーディングエージェントを使って Actions パイプライン上で自動化できる。デフォルト読み取り専用・Agent Workflow Firewall・脅威検出ジョブなど多層のセキュリティ制御を備える。"
description: "GitHub Agentic Workflowsがパブリックプレビューへ移行。Markdownで自然言語の自動化ロジックを書くとGitHub Actions YAMLにコンパイルされ、IssueトリアージやCI失敗分析を既存のActionsガバナンスを維持しながらエージェントに委ねられる。"
impact: "これまで Copilot エージェントは PR 作業・チャット補助が主な用途だったが、Agentic Workflows により GitHub Actions の CI/CD パイプライン上でエージェントを直接動かす構成が可能になる。既存の Actions のランナーグループ・ポリシーをそのまま流用できるため、Enterprise 向けガバナンスを維持しながらエージェント自動化を導入できる。"
tags: ["github-copilot", "github-actions", "agentic-workflows", "automation", "public-preview"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

**GitHub Agentic Workflows がパブリックプレビュー**に移行しました（2026-02-13 のテクニカルプレビューから公開範囲を拡大）。

この機能は、**自然言語の Markdown ファイルで GitHub リポジトリの自動化ロジックを記述し、標準的な GitHub Actions YAML にコンパイル**するものです。Issue のトリアージ、CI 失敗の分析、ドキュメントの更新といった「人が判断して手を動かしているタスク」をエージェントに委ねる、という設計です。

既存の Actions とのアーキテクチャ的な親和性が高く、現在使っているランナーグループ・ポリシー制約・シークレット管理をそのまま引き継いで使える点が大きな特徴です。Enterprise でのエージェント活用を検討する際、「どこまでエージェントに権限を与えるか」という問いに対して、Actions の既存ガバナンス基盤を活かしながら段階的に導入できる構成になっています。

## 何が変わったか

- **Agentic Workflows がパブリックプレビューに**: テクニカルプレビューから公開範囲が拡大。CLI 拡張機能のインストールで利用開始できる。
- **自然言語 → Actions YAML コンパイル**: Markdown ファイルで記述した自動化ロジックが標準の GitHub Actions YAML として動作する。
- **推論ベースのタスクを自動化**: Issue トリアージ・CI 失敗分析・ドキュメント更新など、人の判断が必要だったタスクをエージェントが担う。
- **既存 Actions 基盤を流用**: ランナーグループ・ポリシー制約・シークレット管理を再利用できる。
- **多層セキュリティ制御**:
  - エージェントは integrity filter ルールに従ってリポジトリコンテンツにアクセス
  - デフォルトは読み取り専用権限で実行
  - Agent Workflow Firewall 配下のサンドボックスコンテナで動作
  - 全出力を Safe outputs プロセスで検証
  - 提案された変更は適用前に専用の脅威検出ジョブがスキャン
- **プリビルドワークフロー**: GitHub Next の agentics リポジトリにトリアージ・レポート・コンプライアンス等の例あり。

## 業務インパクト（一般企業向け）

「CI が落ちたときの原因調査」「Issue が来たときの担当者振り分け」「リリースノートの下書き更新」——これらは毎日発生するが、人が手を動かすほどではないタスクです。Agentic Workflows はこうした**定型的な推論タスクを CI/CD パイプラインの中に組み込む**手段を提供します。

セキュリティ面では、デフォルトの読み取り専用権限と Agent Workflow Firewall により、エージェントが意図しない変更を加えるリスクを抑えた設計になっています。既存の Actions ポリシーを引き継ぐ設計は、情シス・コンプライアンスチームへの説明コストを下げる効果があります。

ただし現段階はパブリックプレビューです。本番クリティカルな自動化への適用は、GA 後に判断することを推奨します。

## 副業・個人活用視点

個人リポジトリや副業プロジェクトでは、**「Issue をトリアージしてラベルを貼る」「PR の説明が薄いときに補足コメントを付ける」**といった運用タスクを Agentic Workflows で自動化する使い道があります。

プリビルドワークフローを GitHub Next の agentics リポジトリから引用すれば、Markdown を書くだけで動かし始めることができます。既存の GitHub Actions 知識があれば、コンパイルされた YAML の中身を確認・調整することもできます。
