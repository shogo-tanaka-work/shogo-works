---
date: 2026-09-09
title: "AI Gateway のカスタムコストがキャッシュトークン単価に対応"
service: "Cloudflare AI Gateway"
product: "AI Gateway"
source: https://developers.cloudflare.com/changelog/post/2026-09-09-custom-cache-token-costs/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-09-custom-cache-token-costs/
fetched_at: 2026-09-10T09:16:00+09:00
published_at: 2026-09-09T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-09 AI Gateway のカスタムコストがキャッシュトークン単価に対応

## 公式内容の日本語要約

Cloudflare は 2026-09-09、AI Gateway のカスタムコスト機能で **キャッシュ読み取り（cache-read）とキャッシュ書き込み（cache-write）のトークン単価を個別指定できる**ようにした。`cf-aig-custom-cost` ヘッダーへ `per_cache_read_token` / `per_cache_write_token` を追加する。

従来のカスタムコストは入力・出力トークンの単価（`per_token_in` / `per_token_out`）だけを扱っていた。プロンプトキャッシュを使うと**キャッシュヒット分は通常入力より大幅に安い**ため、実際の課金額とゲートウェイ上の集計値がずれる。今回の対応で、**プロバイダーと交渉した個別のキャッシュ単価をそのままコスト計測へ反映できる**ようになった。

挙動の要点は3つ。**(1)** いずれかのキャッシュ単価を指定した時点で、キャッシュトークンの価格計算が有効になる。**(2)** 片方を省略した場合は `per_token_in` の単価が使われる。**(3)** プロバイダーによって「キャッシュトークンを入力トークンに含めて報告する」ものと「別建てで報告する」ものがあるが、**AI Gateway 側が二重計上を回避する**。

ヘッダー例:

```json
{
  "per_token_in": 0.000001,
  "per_token_out": 0.000002,
  "per_cache_read_token": 0.0000001,
  "per_cache_write_token": 0.0000005
}
```

## できるようになったこと

- `cf-aig-custom-cost` に `per_cache_read_token` / `per_cache_write_token` を指定できる
- 交渉済みのキャッシュ単価をゲートウェイのコスト集計へ反映できる
- 片方省略時は `per_token_in` にフォールバックする
- プロバイダーの報告方式の差による二重計上を AI Gateway が吸収する

## 影響範囲

- 対象ユーザー: AI Gateway 経由で複数プロバイダーの LLM を呼んでいる開発者・運用者
- 対象プラン: 公式に記載なし（AI Gateway のカスタムコスト機能利用者）
- API / UI / 管理者機能: リクエストヘッダー（`cf-aig-custom-cost`）とコスト集計

教材化メモ: src/content/ai-news-notes/cloudflare/ai-gateway-cache-token-costs.mdx

## 原文確認

- 公式見出し: AI Gateway custom costs support cache tokens
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-09-custom-cache-token-costs/
- 原文全文は公式ページで確認してください。
