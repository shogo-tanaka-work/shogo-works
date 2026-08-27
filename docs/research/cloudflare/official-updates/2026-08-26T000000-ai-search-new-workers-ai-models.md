---
date: 2026-08-26
title: "AI Search がテキスト生成に Workers AI モデル6種を追加対応"
service: "Cloudflare"
product: "AI Search"
source: https://developers.cloudflare.com/changelog/post/2026-08-26-new-workers-ai-models/
fetched_at: 2026-08-27T09:05:00+09:00
published_at: 2026-08-26T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-08-26 AI Search のテキスト生成モデル追加

## 公式内容の日本語要約

Cloudflare の AI Search が、テキスト生成で使える Workers AI モデルを6種追加した。

| モデル | コンテキスト窓（トークン） |
| --- | --- |
| `@cf/deepseek-ai/deepseek-v4-flash-0731` | 1,048,576 |
| `@cf/deepseek-ai/deepseek-v4-pro-0813` | 1,048,576 |
| `@cf/openai/gpt-oss-120b` | 128,000 |
| `@cf/openai/gpt-oss-20b` | 128,000 |
| `@cf/qwen/qwen3.8-27b` | 262,144 |
| `@cf/moonshotai/kimi-k2.7-code` | 262,144 |

いずれも Workers AI 上で動くため、**外部プロバイダーの API キーが不要**。AI Search インスタンスの作成・更新時に、ダッシュボードまたは API からモデルを選択する。

## できるようになったこと

- AI Search の生成モデルを、追加のプロバイダーキーなしで6種から選べる
- 100万トークン超のコンテキスト窓を持つモデル（DeepSeek V4 系）を AI Search で利用できる

## 影響範囲

- 対象ユーザー: Cloudflare AI Search 利用者
- 対象プラン: AI Search 利用者（Workers AI の課金に従う）
- API / UI / 管理者機能: ダッシュボード + API

## 教材化メモ

- **「プロバイダーキーが不要」という点が実務上の差**。RAG 基盤の構築でボトルネックになりやすいのは性能ではなく、鍵の管理と請求先の分散である。同一プラットフォーム内で完結する構成の利点として説明できる。
- コンテキスト窓が 128K〜1M と幅広い。**RAG では窓の大きさが常に正義ではない**（コストとレイテンシが上がる）という話に接続すると、モデル選定の教材になる。
- 記事化は見送った（本数上限・スコア5）。AI Search 利用者に限定される機能追加で、同日の他更新より読者影響が小さい。

## 原文確認

- 公式見出し: New Workers AI text generation models in AI Search
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-26-new-workers-ai-models/
- 原文全文は公式ページで確認してください。
