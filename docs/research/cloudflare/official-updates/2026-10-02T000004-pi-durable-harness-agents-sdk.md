---
date: 2026-10-02
title: "Agents SDK に PiHarness。Pi Durable を Durable Objects 上で動かし、再起動やクラッシュをまたいでエージェントを継続"
service: "Agents SDK"
product: "Agents, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-02-pi-harness/
fetched_at: 2026-10-03T09:10:00+09:00
published_date: 2026-10-02
date_precision: date-only
category: enhancement
---

# 2026-10-02 Agents SDK の PiHarness

## 公式内容の日本語要約

Cloudflare Agents SDK に **`PiHarness` クラス**が追加された。**Pi 1.0 と Pi Durable**（Earendil 製のエージェントフレームワーク）**を Durable Objects 上で動かす**ためのものである。長時間動き続けるエージェントを構築する用途を想定している。

中核は Agents SDK の **Lifecycle capability** という概念で、**再起動・クラッシュ・ネットワーク切断をまたいでエージェントの実行状態を保持**する。エージェントの途中経過が落ちないため、数分〜数時間単位で走るタスクを任せられる。

使い方は、harness に **AI モデル、skills、tools** を設定してから Agent クラスへ登録する。モデルは **Workers AI と AI Gateway 経由の Cloudflare モデル**でも、**独自プロバイダー**でも指定できる。

**`PiHarness` は 2026-10-02 時点でベータ**である。公式ドキュメントに「**Pi Durable の成熟にあわせて `PiHarness` の API は変わる可能性が高い**」と明記されている。導入にはオプションの peer dependency として `@earendil-works/pi-durable` と `@earendil-works/pi-ai` が必要である。

## できるようになったこと

- Pi Durable ベースのエージェントを Durable Objects 上でホストできる
- 再起動・クラッシュをまたいでエージェントの作業が永続する
- skills / tools でエージェントの能力を拡張できる
- Workers AI / AI Gateway と独自プロバイダーの両方をモデルに使える

## 影響範囲

- 対象ユーザー: Cloudflare Agents SDK で長時間稼働エージェントを作る開発者
- 対象プラン: Workers / Durable Objects 利用者。**ベータ、API 変更の可能性あり**
- API / UI / 管理者機能: `PiHarness` クラス、Lifecycle capability

教材化メモ: src/content/ai-news-notes/cloudflare/agents-sdk-pi-durable-harness.mdx

## 原文確認

- 公式見出し: Run the Pi Durable harness on Cloudflare with the Agents SDK
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-02-pi-harness/
- 原文全文は公式ページで確認してください。
