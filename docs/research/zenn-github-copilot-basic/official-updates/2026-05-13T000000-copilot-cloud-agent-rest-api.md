---
date: 2026-05-13
title: "Copilot cloud agent tasks REST API public preview"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-05-13-start-copilot-cloud-agent-tasks-via-the-rest-api/
fetched_at: 2026-05-14T09:55:57+09:00
published_date: 2026-05-13
date_precision: date-only
category: enhancement
---

# 2026-05-13 Copilot cloud agent tasks REST API public preview

## 公式内容の日本語要約

GitHubは、Copilot Business / Copilot Enterpriseユーザー向けに、Copilot cloud agentタスクをREST APIから開始できるAgent tasks REST APIのpublic previewを発表した。Cloud agentはバックグラウンドの開発環境で変更と検証を行い、必要に応じてpull requestを作成する。

新APIにより、リファクタリングや移行を複数リポジトリへ展開する、社内開発者ポータルから新規リポジトリ初期化を行う、週次リリース準備を自動化するといった使い方が想定されている。

## できるようになったこと

- REST APIからCopilot cloud agentのタスクを開始できる。
- 作成後のタスク進捗をAPIで追跡できる。
- 認証はpersonal access token、OAuth token、GitHub App user-to-server tokenに対応する。
- GitHub App installation access tokenとCopilot Pro / Pro+向け提供は今後対応予定。

## 影響範囲

- 対象ユーザー: Copilot Business / Copilot Enterpriseの組織・企業
- 対象プラン: Copilot Business / Copilot Enterprise
- API / UI / 管理者機能: REST API / cloud agent / automation

## 教材化メモ

Copilot cloud agentは、GitHub画面からの手動依頼だけでなく、社内ポータルや保守スクリプトから起動する「開発運用API」になりつつある。教材では、秘密情報、対象リポジトリ、PR作成有無、レビュー責任の4点をセットで説明するとよい。

## 原文確認

- 公式見出し: Start Copilot cloud agent tasks via the REST API
- 公式URL: https://github.blog/changelog/2026-05-13-start-copilot-cloud-agent-tasks-via-the-rest-api/
- 公式Docs: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-via-the-api
- 原文全文は公式ページで確認してください。
