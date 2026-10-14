---
date: 2026-10-12
title: "Agents SDK に実験的な OpenCodeHarness。OpenCode 2.0 を素の Durable Object 内で動かし、セッションを SQLite に永続化"
service: "Cloudflare Agents SDK"
product: "Agents, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-12-opencode-harness/
fetched_at: 2026-10-13T09:20:00+09:00
published_at: 2026-10-12
date_precision: date-only
category: release
---

# 2026-10-12 OpenCode 2.0 の Cloudflare harness

## 公式内容の日本語要約

Agents SDK に **実験的な `OpenCodeHarness`** が追加された。コーディングエージェント **OpenCode 2.0 を素の Durable Object の中で動かす**ためのハーネスである。

セッション状態は Durable Object の SQLite ストレージに永続化される。例では `storage` を `OpenCodeWorkerd.create(...)` へ渡し、`harness.prompt(...)` が `status` / `text` / `reason` を返す。`Lifecycle.install(this).use(this.harness)` で Lifecycle ジョブを取り付けると、**eviction 後に中断した処理を再開**する。

モデル接続は `agents/models/opencode` の `createAI({ binding: this.env.AI })` で Workers AI の `AI` binding を使う。例では既定モデルを `@cf/moonshotai/kimi-k2.7-code`、`reasoningEffort: "low"` に設定し、OpenCode 側へ `models: { fetch: false }` を指定して `this.ai.plugin` を登録している。

プラグインでカスタムツール（例の `workerTools`）、リモート MCP サーバー、スキルを足せる。必要バージョンは `agents` 0.28.0 以降、`@opencode/sdk@2`、`@opencode/plugin@2`。ブラウザ UI・WebSocket ストリーミング・永続ノートツール付きの動作例が Agents リポジトリにあり、Deploy to Cloudflare ボタンも用意されている。

**実験的（experimental）と明記されており、安定性保証や GA への道筋は示されていない。**

## できるようになったこと

- OSS のコーディングエージェントを、サーバーを立てずに Durable Object 上でホストできる
- セッションが SQLite に残り、eviction をまたいで中断処理を再開できる
- Workers AI のモデル（例: kimi-k2.7-code）をそのまま OpenCode のバックエンドにできる
- MCP サーバー・スキル・独自ツールをプラグインで足せる

## 影響範囲

- 対象ユーザー: Agents SDK 利用者で OpenCode を自前ホストしたい開発者
- 対象プラン: 記載なし（Durable Objects と Workers AI の課金に従う想定）
- API / UI / 管理者機能: SDK API のみ。実験的機能

## 教材化メモ

- **「コーディングエージェントをどこで走らせるか」という問いの選択肢が増えた**題材として使える。ローカル CLI・CI ランナー・コンテナに続いて Durable Object が並ぶ。素の Durable Object で動く点（コンテナ不要）が技術的な要点である。
- **eviction と再開の扱いが実務の核心**である。サーバーレス上の長時間エージェントは「落ちる前提で設計する」ことが避けられず、Lifecycle ジョブはその型を公式が示したものとして読める。
- **実験的である点を外して紹介しない。** API が変わる前提で触る技術と、業務に載せる技術の線引きを教える材料になる。

## 原文確認

- 公式見出し: Run OpenCode 2.0 on Cloudflare with the Agents SDK
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-12-opencode-harness/
- 原文全文は公式ページで確認してください。
