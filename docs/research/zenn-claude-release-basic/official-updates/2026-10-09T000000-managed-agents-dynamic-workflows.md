---
date: 2026-10-09
title: "Claude Managed Agents が dynamic workflows をベータ提供 — エージェント自身がワークフローを書いてフェーズ実行する"
service: "Claude Managed Agents"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-10T09:20:00+09:00
published_date: 2026-10-09
date_precision: date-only
category: release
---

# 2026-10-09 Claude Managed Agents: dynamic workflows（ベータ）

## 公式内容の日本語要約

Claude Managed Agents で **dynamic workflows** がベータ提供された。ベータヘッダは既存の `managed-agents-2026-04-01` で、専用ヘッダは追加されていない。

**ワークフローとは、エージェント自身が書くプログラム**である。多数のエージェントをフェーズに分けて走らせ、それぞれの戻り値を束ねる。「300件の契約書をレビューする」ような、1つの会話に収まらない規模の作業を1セッションの内側で扱えるようにする仕組みである。その1回の実行が **workflow run** にあたり、サーバーがバックグラウンドで走らせる。

有効化はエージェントの `multiagent` フィールドを `{"type": "multiagent_20261001", "workflows": {"type": "enabled"}}` に設定する。この type では dynamic workflows と subagents がどちらも既定で有効になる。`workflows.predefined_agents` に最大20件のエージェントを登録でき、そこに無いものはワークフロー側が inline agent として定義する。進行は session の event stream に流れる `workflow_run.*` イベントで追う。

**run を開始できるのは primary thread のエージェントだけ**で、run の中のエージェントは自分の run を開始できない。つまり run は入れ子にならない。

## できるようになったこと

- エージェントが自分でワークフローを書き、フェーズ単位で多数のエージェントを fan-out 実行できる
- `workflow_run.created` / `status_running` / `status_idle` / `phase_started` / `phase_ended` / `status_ended` / `error` で進行を追跡できる
- run のスレッドはセッションの sandbox を共有するため、全スレッドが同じファイルを見る
- run のスレッドはセッションの child-thread 上限の対象外になる

## 影響範囲

- 対象ユーザー: Claude Managed Agents の API 利用者（ベータ）
- 対象プラン: Claude Platform（ベータヘッダ `managed-agents-2026-04-01`）
- API / UI / 管理者機能: API。`multiagent` フィールドとイベントストリームの実装が対象
- 主な上限: 同時実行スレッド 64、run 全体で起動できるエージェント 1,000、run の寿命は既定24時間、セッションで同時に open できる run は既定10
- 課金: run 固有の料金は無い。run のモデルリクエストはセッションの budget に計上され、各モデルの通常レートで課金される

教材化メモ: src/content/ai-news-notes/claude/managed-agents-dynamic-workflows.mdx

## 原文確認

- 公式見出し: October 9, 2026 — dynamic workflows in beta（Claude Platform API release notes）
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 仕様の正本: https://platform.claude.com/docs/en/managed-agents/workflow-runs
- 原文全文は公式ページで確認してください。
