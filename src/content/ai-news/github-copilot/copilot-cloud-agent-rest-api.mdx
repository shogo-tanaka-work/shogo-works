---
title: "GitHub Copilot：cloud agentをREST APIから起動・自動化が可能に"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-05-13
sourceUrl: "https://github.blog/changelog/2026-05-13-start-copilot-cloud-agent-tasks-via-the-rest-api/"
summary: "GitHubがCopilot Business / Enterprise向けに、Copilot cloud agentタスクをREST APIから開始できるAgent tasks REST APIをpublic previewとして公開した。社内ポータルやスクリプトから、リファクタリング、移行、リリース準備などをcloud agentへ渡せる。"
description: "Copilot cloud agentがREST API（public preview）に対応。社内ポータルや運用スクリプトからPOSTリクエスト一本でリファクタリング・移行・リリース準備タスクを起動し、進捗追跡まで自動化できる。Copilot Business/Enterprise向け。"
impact: "Copilot cloud agentをGitHub画面内の手動依頼ではなく、社内開発基盤や運用自動化の一部として組み込めるようになる。"
tags: ["github-copilot", "cloud-agent", "rest-api", "automation", "enterprise"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHubは2026年5月13日、Copilot cloud agentのタスクをREST APIから開始できるAgent tasks REST APIをpublic previewとして公開しました。対象はCopilot BusinessとCopilot Enterpriseのユーザーです。

Copilot cloud agentは、バックグラウンドの開発環境でコード変更や検証を行い、必要に応じてpull requestを作成する機能です。これまではGitHub上のUIや既存導線から使うイメージが強かったのですが、今回のAPI公開により、社内ポータル、運用スクリプト、リリース管理フローから直接タスクを起動できるようになります。

公式発表では、複数リポジトリへのリファクタリングや移行の展開、社内開発者ポータルからの新規リポジトリ初期化、週次リリース準備とリリースノート作成などが例として挙げられています。

## 何が変わったか

- Copilot cloud agentタスクをREST APIから開始できるようになった
- タスク開始後の進捗もAPIで追跡できる
- `POST /agents/repos/{owner}/{repo}/tasks` にpromptを渡して開始する
- 任意でbase branch、model、pull request作成有無を指定できる
- 認証はpersonal access token、OAuth token、GitHub App user-to-server tokenに対応
- GitHub App installation access tokenとCopilot Pro / Pro+向け提供は今後対応予定

## 業務インパクト（一般企業向け）

この更新で、Copilot cloud agentは「開発者が必要なときに呼ぶAI」から「社内の開発運用に組み込めるAIワーカー」へ一段進みました。たとえば、依存ライブラリの移行、設定ファイルの一括更新、テンプレートリポジトリの初期セットアップ、定期的なリリース準備を、社内ツールのボタンや定期ジョブから起動できます。

一方で、API化されるほどガバナンス設計は重要になります。誰がタスクを起動できるのか、どのリポジトリに対して実行できるのか、PRを自動作成するのか、レビュー責任を誰が持つのかを決める必要があります。特に複数リポジトリへfan-outする用途では、便利さと同じだけ変更範囲も広がります。

Enterprise利用では、Copilot cloud agent専用のSecrets / Variablesやリポジトリ許可設定と合わせて、API経由の起動権限を整理するのが現実的です。

## 副業・個人活用視点

個人開発や受託案件では、まだ対象プランがBusiness / Enterprise中心なので、すぐに全員が使える機能ではありません。ただ、方向性としては重要です。今後、AIエージェントはチャット画面で依頼するだけでなく、GitHub APIや社内ツールから起動するのが普通になっていきます。

副業エンジニアなら、複数リポジトリの保守、テンプレート適用、依存更新、ドキュメント更新PRの下書きなどを「APIでエージェントに依頼する」設計にしておくと、企業向け案件で提案しやすくなります。単発のコード生成ではなく、保守運用フローにAIを組み込む視点が差別化になります。
