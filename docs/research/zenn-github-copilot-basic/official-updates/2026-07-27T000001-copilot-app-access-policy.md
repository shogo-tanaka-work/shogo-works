---
date: 2026-07-27
title: "GitHub Copilot app 専用アクセスポリシーを追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-07-28T21:44:59+09:00
published_at: 2026-07-27
date_precision: date-only
category: policy
---

# 2026-07-27 GitHub Copilot app 専用アクセスポリシー

## 公式内容の日本語要約

これまでCopilot CLIと同一ポリシーで管理されていたGitHub Copilot appについて、独立した専用ポリシーが追加された。エンタープライズ/組織管理者は次の3段階でアプリへのアクセスを制御できる。

- **Enabled everywhere**: 全体で利用可能（デフォルト設定、管理操作不要で即利用可）
- **Disabled everywhere**: 全体でブロック
- **Let organizations decide**: 各組織の管理者に判断を委任

プルリクエストレビューや監査ログなど既存のセキュリティガードレールは維持したまま、クライアント別（app / CLI）に独立した管理を求める顧客フィードバックに応える変更。

## できるようになったこと

- Copilot appへのアクセスを、CLIとは独立してエンタープライズ/組織レベルで制御できる
- 組織ごとに個別のアクセス方針を委任できる

## 影響範囲

- 対象ユーザー: エンタープライズ/組織管理者
- 対象プラン: Copilot Business / Enterprise
- API / UI / 管理者機能: 管理者ポリシー設定画面（Copilot app用ポリシー新設）

## 教材化メモ

- Copilotのクライアント別ガバナンス強化の流れとして、次項目（Enterprise managed settings拡張）とあわせて企業導入教材に反映候補。

## 原文確認

- 公式見出し: Manage GitHub Copilot app access with a dedicated policy
- 公式URL: https://github.blog/changelog/2026-07-27-manage-github-copilot-app-access-with-a-dedicated-policy/
- 原文全文は公式ページで確認してください。
