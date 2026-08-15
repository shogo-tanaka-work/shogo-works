---
date: 2026-08-14
title: "DeepSeek V4 Pro / Flash が Workers AI に — プラットフォーム初の 1M コンテキスト"
service: "Cloudflare"
product: "Workers AI"
source: https://developers.cloudflare.com/changelog/post/2026-08-14-deepseek-v4-workers-ai/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-14-deepseek-v4-workers-ai/
fetched_at: 2026-08-15T11:48:00+09:00
published_at: 2026-08-14
date_precision: date-only
category: release
---

# 2026-08-14 DeepSeek V4 on Workers AI

## 公式内容の日本語要約

Workers AI に DeepSeek V4 の2モデルが加わった。

- **DeepSeek V4 Pro**: `@cf/deepseek-ai/deepseek-v4-pro-0813`
- **DeepSeek V4 Flash**: `@cf/deepseek-ai/deepseek-v4-flash-0731`

どちらも **1,048,576 トークン（100万トークン）のコンテキストウィンドウ**を持つ。公式は、Workers AI プラットフォーム上でこの容量に達した最初のモデルだとしている。

機能面では、複雑な問題向けの reasoning モード、多ターンのエージェントワークフロー向けの function calling、大規模なコードベースを扱うための拡張コンテキストに対応する。

利用には **Workers Paid プラン、または AI Gateway のプリペイドクレジット**が必要である。個別の価格はドキュメント側に記載されている。

V4 Flash は Pro の「より速く、より低コストな兄弟」と位置づけられており、性能面のトレードオフがあることが示唆されている。具体的な指標は本告知には含まれていない。

## できるようになったこと

- Workers AI 上で 100万トークンのコンテキストを持つモデルを使える
- reasoning モードと function calling を Workers AI 経由で利用できる
- 用途に応じて Pro（品質重視）と Flash（速度・コスト重視）を選べる

## 影響範囲

- 対象ユーザー: Workers AI 利用者
- 対象プラン: Workers Paid プラン、または AI Gateway のプリペイドクレジットが必要
- API / UI / 管理者機能: Workers AI のモデル ID 指定

## 教材化メモ

- **エッジで 100万トークンを扱えることの意味**を考える教材になる。コンテキストが広いこと自体より、「どこで動くモデルがどれだけの文脈を持てるか」が設計を変える。エッジ実行とコンテキスト長を組み合わせた設計の題材として使える。
- ただし「1M 使えるから全部入れる」設計はコストと品質の両面で不利になる。既存の context-engineering 系教材（context-window-management、context-compression）へ接続し、**容量と使い方は別の問題**であることを示す実例として扱う。
- Workers Paid か AI Gateway プリペイドクレジットが必要である点は、Cloudflare の AI 機能を試す際の前提条件として整理する。無料枠で始められない機能がどれかを一覧にしておくと、読者が詰まらない。
- Pro / Flash の使い分けは、他ベンダーの同種の階層（Gemini Flash / Pro、Claude Haiku / Sonnet / Opus）と並べて説明できる。**モデル階層は業界共通のパターン**であり、個別ベンダーの話にしない方が応用が効く。

## 原文確認

- 公式見出し: Workers AI - DeepSeek V4 Flash and Pro now available on Workers AI
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-14-deepseek-v4-workers-ai/
- 原文全文は公式ページで確認してください。
