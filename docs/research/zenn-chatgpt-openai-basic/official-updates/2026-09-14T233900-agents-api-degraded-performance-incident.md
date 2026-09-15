---
date: 2026-09-14
title: "Agents API の性能低下（復旧済み）"
service: "OpenAI Status"
source: https://status.openai.com/history
fetched_at: 2026-09-15T09:05:00+09:00
published_at: 2026-09-14T23:39:00Z
date_precision: date-only
category: incident
---

# 2026-09-14 Agents API の性能低下

## 公式内容の日本語要約

OpenAI Status に **「Degraded Performance affecting Agents API」** が記録された。開始はステータスページ表示で **09-14 23:39**、影響範囲は **Agents API**。最終更新は「Managed sessions are now processing turns normally」で、**復旧済み**である。

**Agents API は 2026-09-10 に public beta へ入ったばかりの面である**（managed Codex harness でエージェントを構築し、セッションのオーケストレーション・コンテキスト圧縮・リカバリを OpenAI 側が持つもの）。**public beta 開始から4日での性能低下**であり、影響したのは公式の表現では managed sessions のターン処理である。

**ステータスページの表示時刻にタイムゾーンの明記がないため `date_precision: date-only` とする。**

## できるようになったこと

- 該当なし（障害）

## 影響範囲

- 対象ユーザー: Agents API（public beta）の利用者
- 対象プラン: API
- API / UI / 管理者機能: managed sessions のターン処理

## 教材化メモ

**単独記事にはしない（短時間 incident）。** ただし、**public beta の面で起きた障害である**という事実は記録に残す価値がある。「beta の機能を業務の依存経路に置くかどうか」を判断する材料になる。

**managed 型のエージェント実行（セッション管理をベンダーに預ける形）は、自前でオーケストレーションを持つ構成とトレードオフの関係にある。** 運用負荷は下がるが、落ちたときに手が無い。**この対比は Agents API / Codex 系の教材で必ず扱う。**

## 原文確認

- 公式見出し: Degraded Performance affecting Agents API
- 公式URL: https://status.openai.com/history
- 原文全文は公式ページで確認してください。
