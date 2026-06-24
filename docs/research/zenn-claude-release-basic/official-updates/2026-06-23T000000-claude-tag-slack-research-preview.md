---
date: 2026-06-23
title: "Claude Tag — Slack チームメンバー型 AI の Research Preview 開始"
service: "Claude"
source: https://www.anthropic.com/news/introducing-claude-tag
fetched_at: 2026-06-24T12:00:00+09:00
published_at: 2026-06-23
date_precision: date-only
category: release
---

# 2026-06-23 Claude Tag — Slack チームメンバー型 AI の Research Preview

## 公式内容の日本語要約

Anthropic が「Claude Tag」の Research Preview を開始した。Slack チャンネルに Claude をチームメンバーとして招待し、`@Claude` でタスクを委任できる。チャンネルの会話履歴・接続ツール・データソースからコンテキストを蓄積し、誰かが説明した内容を毎回繰り返す必要がなくなる。「Ambient モード」を有効にすると Claude が自律的にフォローアップや進捗報告を行う非同期ワークも可能。Claude Opus 4.8 で動作。

関連技術詳細は claude.com/blog にも掲載: https://claude.com/blog/agent-identity-access-model

## できるようになったこと

- Slack チャンネルで `@Claude` をメンションしてタスクを委任できる
- チャンネルスコープでコンテキスト（会話・ツール・データ）を蓄積。毎回の説明が不要になる
- Ambient モードで Claude が自発的に進捗報告・フォローアップを実施
- 管理者がチャンネル単位でツール・データアクセスをスコープ制御（営業チャンネルとエンジニアリングチャンネルで異なる Claude アイデンティティを設定可能）
- 組織・チャンネルレベルで月次トークン消費上限を設定可能

## 影響範囲

- 対象ユーザー: Claude Enterprise / Team プランの組織
- 対象プラン: Enterprise・Team（ベータ開始時に導入クレジット付与）
- API / UI: Slack 連携。管理者がチャンネル単位で設定

## 教材化メモ

- Anthropic 社内では Claude Tag（社内版）を使ってプロダクトチームのコードの 65% を生成中という数字は実証事例として強い
- 「チームメンバー型 AI」というポジショニングは GPT Enterprise や Copilot Chat と差別化するコンセプト
- 「アンビエント AI」「エージェント型コラボレーション」の具体実装例として教材化できる

## 原文確認

- 公式見出し: "Introducing Claude Tag"
- 公式URL: https://www.anthropic.com/news/introducing-claude-tag
- 技術詳細: https://claude.com/blog/agent-identity-access-model
- 原文全文は公式ページで確認してください。
