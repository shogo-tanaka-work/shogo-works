---
date: 2026-07-22
title: "Claude Platform — Managed Agents に effortレベル・環境/メモリストアWebhook・セッション初期イベント投入を追加"
service: "Claude Platform (Managed Agents)"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-07-23T20:50:00+09:00
published_at: 2026-07-22T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-22 Claude Platform release notes（Managed Agents）

## 公式内容の日本語要約

Claude Platform release notesの2026-07-22付見出しで、Claude Managed Agents向けに5件の機能追加が発表された。エージェントのモデル設定に `effort` レベルを指定可能になったほか、Webhookが環境（`environment.*`）とメモリストア（`memory_store.*`）のライフサイクルイベントに対応し、ポーリングなしで状態変化を検知できるようになった。セッション作成時には最大50件の `user.message` / `user.define_outcome` イベントを `initial_events` として投入し、同一リクエストでエージェントループを開始できる。エージェント更新時の `version` フィールドが省略可能になり（省略時は無条件更新、指定時は楽観的並行制御で不一致なら409）、セッションスレッドのイベントストリームでも `event_deltas` によるプレビュー表示に対応した。

## できるようになったこと

- エージェント作成時に `model.effort` でeffortレベルを指定
- 環境/メモリストアのライフサイクルWebhook（7イベントタイプ）
- セッション作成時に `initial_events` で最大50件のイベントを事前投入し、同一コールでループ開始
- エージェント更新の `version` フィールドを省略して無条件更新可能に
- セッションスレッドの `stream` エンドポイントで `event_deltas[]` によるサブエージェントのテキストプレビュー

## 影響範囲

- 対象ユーザー: Claude Managed Agents を利用する開発者
- 対象プラン: Claude API / Claude Platform on AWS を含む Managed Agents 利用者
- API / UI / 管理者機能: Managed Agents API（agent-setup、webhooks、sessions、events-and-streaming）

## 教材化メモ

Managed Agentsの運用性向上（ポーリング不要のWebhook、初期イベント投入によるセッション起動の1コール化）は、エージェント運用のベストプラクティス教材で扱う価値がある。特に `initial_events` は「セッション作成→即エージェント開始」を1リクエストにまとめられる点が実装効率化として有用。

## 原文確認

- 公式見出し: July 22, 2026（Claude Platform release notes）
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 原文全文は公式ページで確認してください。
