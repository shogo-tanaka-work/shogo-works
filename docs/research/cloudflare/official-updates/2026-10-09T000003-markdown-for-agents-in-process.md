---
date: 2026-10-09
title: "Markdown for Agents の HTML 変換がエッジ内ストリーミング処理へ — 上限 2MiB → 6MiB、x-markdown-tokens と Content-Length を削除"
service: "Markdown for Agents"
product: "Cloudflare Fundamentals"
source: https://developers.cloudflare.com/changelog/post/2026-10-09-markdown-for-agents-in-process-conversion/
fetched_at: 2026-10-10T09:33:00+09:00
published_date: 2026-10-09
date_precision: date-only
category: enhancement
---

# 2026-10-09 Markdown for Agents のエッジ内変換化

## 公式内容の日本語要約

Cloudflare が **Markdown for Agents** の HTML → Markdown 変換を、**エッジ内のストリーミングエンジンによる処理へ切り替えた**。従来は HTML レスポンスを全量バッファしてから別の変換サービスへ送っていたが、到着しながら逐次処理するようになった。公式は変換のオーバーヘッドとメモリ使用量が下がると説明している。

**入力サイズ上限は 2MiB（2,097,152 バイト）から 6MiB（6,291,456 バイト）へ拡大**した。この上限は**解凍後**の HTML に対して適用され、圧縮後のサイズではない。

**破壊的変更が2つある。**

1. **変換後レスポンスから `x-markdown-tokens` と `x-original-tokens` ヘッダが無くなった。** これらに依存してトークン数を把握していたクライアントは、自分で数える必要がある。
2. **`Content-Length` が再計算されず、削除された。** Markdown 本文がストリーミングされるためである。

**対象の API 名・バインディング名、入力形式（HTML 以外）、性能の具体数値は changelog に記載が無い。** 公式は Markdown for Agents のドキュメントを参照するよう案内している。

## できるようになったこと

- 最大 6MiB（解凍後）の HTML を変換対象にできる
- 変換のレイテンシとメモリ使用量が下がる

## 影響範囲

- 対象ユーザー: Markdown for Agents を使っているエージェント実装
- 対象プラン: 記載なし
- API / UI / 管理者機能: API（レスポンスヘッダの変更）
- **破壊的変更**: `x-markdown-tokens` / `x-original-tokens` の消失、`Content-Length` の消失

教材化メモ: src/content/ai-news-notes/cloudflare/markdown-for-agents-in-process-conversion.mdx

## 原文確認

- 公式見出し: More efficient Markdown for Agents conversion（Cloudflare Changelog, 2026-10-09）
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-09-markdown-for-agents-in-process-conversion/
- 原文全文は公式ページで確認してください。
