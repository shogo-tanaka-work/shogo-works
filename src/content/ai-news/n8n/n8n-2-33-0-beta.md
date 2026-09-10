---
title: "n8n 2.33.0（beta）：admin-managed instance credentialsとワークフローバージョン履歴APIを追加"
tool: "n8n"
toolLabel: "n8n"
date: 2026-07-28
sourceUrl: "https://github.com/n8n-io/n8n/releases/tag/n8n%402.33.0"
summary: "n8nのbetaチャンネルで2.33.0が公開された。インスタンス管理者がクレデンシャルを一元管理できるadmin-managed instance credentials、検証済みコミュニティノードをエージェントのツールとして利用できる機能、ワークフローのバージョン履歴取得API、OpenTelemetry設定用APIなどガバナンス・エージェント関連の機能追加が中心。"
description: "admin-managed instance credentials、検証済みコミュニティノードのエージェントツール化、GET /workflows/{id}/history エンドポイント追加、OpenTelemetry設定API追加、Azure/Google系クレデンシャルのカスタムOAuthスコープ対応。"
impact: "n8nを企業導入している組織にとって、クレデンシャル管理の一元化とワークフロー変更履歴の追跡がAPI経由で可能になる、ガバナンス強化の先行実装。"
tags: ["n8n", "governance", "credentials", "api", "beta", "enhancement"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

n8nのbetaチャンネルで`2.33.0`が公開されました。AI Builder/エージェント関連の機能追加とバグ修正が多数含まれる中、特に注目すべきはガバナンス関連の機能強化です。

インスタンス管理者がクレデンシャルを一元管理できる**admin-managed instance credentials**が追加され、検証済みコミュニティノードをエージェントのツールとして利用できるようになりました。API面では、ワークフローのバージョン履歴を取得するエンドポイント`GET /workflows/{id}/history`と、OpenTelemetry設定用の公開APIエンドポイントが新設されています。またMicrosoft Azure Monitor・Dynamics・Graph Security・Azure Storageや残りのGoogle系クレデンシャルでカスタムOAuthスコープが許可されるようになりました。

バグ修正では、AI Builderのエージェントプレビュー・トレース周りの不具合、MCP OAuth2トークン期限切れ・PKCE処理、5フィールドcron式のスケジュールトリガー対応など多数が含まれています。beta（pre-release）チャンネルでの先行提供のため、stable昇格時に改めて内容を確認する価値があります。

## 何が変わったか

- インスタンス管理者がクレデンシャルを一元管理できるadmin-managed instance credentialsを追加
- 検証済みコミュニティノードをエージェントのツールとして利用可能に
- ワークフローのバージョン履歴を取得するAPIエンドポイント`GET /workflows/{id}/history`を追加
- OpenTelemetry設定用の公開APIエンドポイントを追加
- Azure Monitor/Dynamics/Graph Security/Azure Storage、Google系クレデンシャルでカスタムOAuthスコープに対応
- コミュニティノードパッケージ向けESLintルール（require-files-array）を追加

## 業務インパクト（一般企業向け）

admin-managed instance credentialsは、複数チームでn8nインスタンスを共有運用している組織にとって、クレデンシャルの管理者集中管理という重要なガバナンス機能です。ワークフローバージョン履歴APIは、変更内容の追跡・監査対応・障害時のロールバック判断に活用でき、n8nを本番運用する組織のコンプライアンス対応を後押しします。OpenTelemetry設定APIの追加は、既存の可観測性基盤とn8nを統合したい組織にとって実装の選択肢を広げます。

beta段階のため、これらの機能を本番導入する前にstable昇格を待つか、開発・検証環境での先行評価から始めるのが妥当です。

## 副業・個人活用視点

個人でn8nを使う場合、admin-managed instance credentialsのような管理者向け機能の直接的な恩恵は少ないですが、複数のクライアント案件でn8nインスタンスを運用しているフリーランスにとっては、クレデンシャル管理の一元化や変更履歴の追跡は、クライアントへの説明責任を果たす上で参考になる機能です。
