---
title: "GitHub Copilot CLI：GitHub Actions内で個人アクセストークンが不要に"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-02
sourceUrl: "https://github.blog/changelog/2026-07-02-copilot-cli-no-longer-needs-a-personal-access-token-in-github-actions"
summary: "Copilot CLIがGitHub Actions内で組み込みの`GITHUB_TOKEN`を使って認証できるようになり、長期間有効なPAT（個人アクセストークン）の管理が不要になった。組織所有リポジトリで使う場合、AIクレジットは個人でなく組織に課金される。"
description: "GitHub Actions上のCopilot CLIがGITHUB_TOKENで認証可能に。PAT管理が不要になりセキュリティリスクが下がる。組織所有リポジトリではAIクレジットが組織課金になる。"
impact: "CI/CDパイプラインでCopilot CLIを使う際のPAT漏洩リスクがなくなり、認証設定もシンプルになる。ワークフロー権限とCopilotポリシーの設定変更が必要。"
tags: ["github-copilot", "cli", "github-actions", "security", "ci-cd"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHubは2026-07-02、**Copilot CLIをGitHub Actions内で使う際の認証方法を簡素化**しました。これまでCI上でCopilot CLIを動かすには、有効期限を管理する必要がある個人アクセストークン（PAT）を発行してSecretsに登録する必要がありましたが、今回のアップデートでActionsに組み込みの `GITHUB_TOKEN` を使って認証できるようになりました。

組織所有のリポジトリでこの仕組みを使う場合、Copilotの**AIクレジットは実行した個人ではなく組織に課金**されます。また、有効化するには該当のCopilotポリシーに加えて、ワークフロー側で `copilot-requests: write` 権限を付与する必要があります。コスト管理は、既存のCost center・利用状況監視・セッション上限の仕組みで行います。

## 何が変わったか

- Copilot CLIがGitHub Actions内で**`GITHUB_TOKEN`による認証**に対応
- **長期間有効なPATの発行・管理が不要**に
- 組織所有リポジトリでは**AIクレジットが組織課金**になる
- 有効化には**Copilotポリシー**と、ワークフロー側の **`copilot-requests: write` 権限**が必要
- コスト管理は既存のCost center・利用状況監視・セッション上限で対応

## 業務インパクト（一般企業向け）

CI/CDパイプラインでCopilot CLIを組み込んでいる、またはこれから組み込もうとしている開発チームにとって、PAT管理からの解放は地味ながら確実なセキュリティ改善です。有効期限切れによるパイプライン停止や、Secretsに登録したPATの漏洩リスクという運用上の懸念が減ります。

導入する際は、既存のワークフローYAMLに `permissions: copilot-requests: write` を追加し、組織のCopilotポリシーで該当機能を有効化する作業が必要です。すでにPATを使ってCopilot CLIをCI上で運用している組織は、この機会に `GITHUB_TOKEN` ベースの認証へ移行し、不要になったPATを無効化しておくことをおすすめします。

## 副業・個人活用視点

個人開発・副業プロジェクトでGitHub ActionsとCopilot CLIを組み合わせてコードレビューや自動修正を回している場合も、この変更でPAT管理の手間が減ります。特に複数のリポジトリでCI連携を組んでいる人は、PATの期限切れによる「気づいたらCIが動いていなかった」というトラブルを避けられるようになります。
