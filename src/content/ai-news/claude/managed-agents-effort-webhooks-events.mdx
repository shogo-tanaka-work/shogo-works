---
title: "Claude Platform：Managed Agentsにeffortレベル・環境/メモリストアWebhook・セッション初期イベント投入を追加"
tool: "claude"
toolLabel: "Claude"
date: 2026-07-22
sourceUrl: "https://platform.claude.com/docs/en/release-notes/api"
summary: "Claude Managed Agents向けに5件の機能追加が発表された。エージェントのモデル設定にeffortレベルを指定可能になり、Webhookが環境・メモリストアのライフサイクルイベントに対応、セッション作成時に最大50件のイベントを事前投入して同一リクエストでエージェントループを開始できるようになった。エージェント更新のversionフィールドも省略可能に。"
description: "model.effortの指定、環境/メモリストアのライフサイクルWebhook、initial_eventsによるセッション起動の1コール化、エージェント更新のversion省略、event_deltasによるストリーミングプレビュー対応。"
impact: "Claude Managed Agentsを本番運用する開発者にとって、ポーリング不要の状態検知やセッション起動フローの簡素化に直結する。"
tags: ["claude", "managed-agents", "webhook", "api", "enhancement"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Claude Platform release notesの2026-07-22付見出しで、Claude Managed Agents向けに5件の機能追加が発表されました。

まず、エージェントのモデル設定に`effort`レベルを指定できるようになりました。加えてWebhookが環境（`environment.*`）とメモリストア（`memory_store.*`）のライフサイクルイベントに対応し、ポーリングを行わずに状態変化を検知できるようになっています。セッション作成時には最大50件の`user.message`／`user.define_outcome`イベントを`initial_events`として投入でき、セッション作成とエージェントループの開始を同一リクエストにまとめられるようになりました。このほか、エージェント更新時の`version`フィールドが省略可能になり（省略時は無条件更新、指定時は楽観的並行制御で不一致なら409エラー）、セッションスレッドのイベントストリームでも`event_deltas`によるサブエージェントのテキストプレビュー表示に対応しました。

## 何が変わったか

- エージェント作成時に`model.effort`でeffortレベルを指定可能に
- 環境/メモリストアのライフサイクルWebhook（7イベントタイプ）を追加
- セッション作成時に`initial_events`で最大50件のイベントを事前投入し、同一コールでループ開始
- エージェント更新の`version`フィールドを省略して無条件更新可能に（指定時は楽観的並行制御）
- セッションスレッドの`stream`エンドポイントで`event_deltas[]`によるサブエージェントのテキストプレビュー表示

## 業務インパクト（一般企業向け）

Managed Agentsをプロダクションで運用する組織にとって、環境・メモリストアの状態変化をWebhookで検知できるようになったことは、ポーリングベースの監視コードを削減し、運用の信頼性を高める変更です。`initial_events`によるセッション起動の1コール化は、エージェント呼び出しの実装をシンプルにし、レイテンシ削減にもつながります。バージョン管理の柔軟化（省略可能な`version`フィールド）は、更新頻度の高い運用フローで細かい競合制御の実装コストを下げます。

## 副業・個人活用視点

個人でClaude Managed Agentsを使ってプロダクトを構築している開発者にとって、Webhookベースの状態検知とセッション起動の1コール化は、実装をシンプルに保ちながら本番品質の運用フローを組みやすくする変更です。ポーリングの手間が減ることで、小規模なプロジェクトでも運用コストを抑えやすくなります。
