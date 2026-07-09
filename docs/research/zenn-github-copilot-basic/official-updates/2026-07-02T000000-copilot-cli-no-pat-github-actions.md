---
date: 2026-07-02
title: "Copilot CLIがGitHub Actionsで個人アクセストークン不要に"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-02-copilot-cli-no-longer-needs-a-personal-access-token-in-github-actions
fetched_at: 2026-07-05T16:43:00+09:00
published_at: 2026-07-02
date_precision: date-only
category: enhancement
---

# 2026-07-02 Copilot CLIがGitHub Actionsで個人アクセストークン不要に

## 公式内容の日本語要約

Copilot CLIがGitHub Actions内で組み込みの`GITHUB_TOKEN`を使って認証できるようになり、長期間有効な個人アクセストークン（PAT）の管理が不要になった。組織所有リポジトリで使用する場合、AIクレジットは個人ではなく組織に課金される。有効化には該当するCopilotポリシーと`copilot-requests: write`権限が必要。

## できるようになったこと

- GitHub Actions内でCopilot CLIが組み込み`GITHUB_TOKEN`により認証可能に
- 長期間有効なPATの発行・管理が不要に
- 組織所有リポジトリでの利用時はAIクレジットが組織に課金される
- ワークフロー権限に`copilot-requests: write`を付与し、Copilotポリシーを有効化することで利用可能

## 影響範囲

- 対象ユーザー: CI/CD運用者・DevOpsエンジニア
- 対象プラン: Copilot Business / Enterprise（組織所有リポジトリ）
- API / UI / 管理者機能: ワークフロー権限設定、Copilotポリシー

## 教材化メモ

- CI/CD内でのAIツール認証をトークン管理レスにする実例。GitHub Actions教材で「秘密情報管理の簡素化」パターンとして紹介できる。

## 原文確認

- 公式見出し: "Copilot CLI no longer needs a personal access token in GitHub Actions"
- 公式URL: https://github.blog/changelog/2026-07-02-copilot-cli-no-longer-needs-a-personal-access-token-in-github-actions
- 原文全文は公式ページで確認してください。
