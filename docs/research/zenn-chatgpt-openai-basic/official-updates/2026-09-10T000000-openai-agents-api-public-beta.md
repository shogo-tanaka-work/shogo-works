---
date: 2026-09-10
title: "Agents API がパブリックベータで公開"
service: "OpenAI API"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-09-11T09:02:00+09:00
published_at: 2026-09-10
date_precision: date-only
---

# 2026-09-10 Agents API がパブリックベータで公開

## 公式内容の日本語要約

OpenAI が **Agents API をパブリックベータ**として公開した。マネージドなコード実行環境上でエージェントを構築するための API で、**セッションのオーケストレーション、コンテキストの圧縮（context compaction）、復旧（recovery）を OpenAI 側が受け持つ**のが中核である。

提供される機能は、ターンをまたいで作業を継続できる**永続セッション（durable sessions）**、進捗の**ストリーミング**、開発者側のツール接続、**MCP サーバーとの接続**である。

実行環境は OpenAI ホストの環境で動かすほか、**自社インフラや対応ベンダーのサンドボックスへ接続**して動かすこともできる。同日 Cloudflare が Containers を実行環境として使うリファレンス実装を公開しており、この「外部サンドボックス接続」の最初の実例になっている。

エージェント基盤を自前で組む場合、セッション管理・文脈圧縮・中断復帰は毎回作り込みが必要になる部分である。それを API 側の責務へ移す構成が、公式に提供された形になる。

教材化メモ: src/content/ai-news-notes/chatgpt-openai/agents-api-public-beta.mdx

## できるようになったこと

- マネージドなコード実行環境上でエージェントを構築できる
- セッションのオーケストレーション・コンテキスト圧縮・復旧を OpenAI に任せられる
- 永続セッションでターンをまたいだ作業継続ができる
- 進捗をストリーミングで受け取れる
- 自前ツールと MCP サーバーを接続できる
- 実行環境を OpenAI ホスト / 自社インフラ / 対応ベンダーのサンドボックスから選べる

## 影響範囲

- 対象ユーザー: OpenAI API を使う開発者
- 対象プラン: API（パブリックベータ）
- API / UI / 管理者機能: API

## 原文確認

- 公式見出し: Agents API Public Beta
- 公式URL: https://developers.openai.com/api/docs/changelog
- 原文全文は公式ページで確認してください。
