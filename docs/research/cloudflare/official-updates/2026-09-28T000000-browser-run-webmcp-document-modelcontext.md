---
date: 2026-09-28
title: "Browser Run の WebMCP が Kitesurf セッションへ拡大し、document.modelContext へ移行。navigator.modelContextTesting は廃止"
service: "Cloudflare（Browser Run）"
product: "Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-09-28-webmcp-api/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-28-webmcp-api/
fetched_at: 2026-09-29T10:53:00+09:00
published_at: 2026-09-28
date_precision: date-only
category: enhancement
---

# 2026-09-28 Browser Run WebMCP / document.modelContext

## 公式内容の日本語要約

Browser Run の **WebMCP 対応が Kitesurf セッションへ拡大**した（従来は Lab セッションのみ）。あわせて **WebMCP Community Group ドラフトの標準インターフェース `document.modelContext` へ移行**した。

**破壊的変更がある。** 「Lab sessions no longer expose `navigator.modelContextTesting`」——**Lab セッションで実験用 API `navigator.modelContextTesting` を使っていたコードは `document.modelContext` へ移行する必要がある。**

WebMCP は、AI エージェントやブラウザクライアントが**ページ側で定義されたツールを発見して実行できる**仕組みである。アクセス手段は3つ: Chrome DevTools（Application > WebMCP パネル）、AI エージェント（`--category-experimental-webmcp` フラグ）、Chrome DevTools Protocol クライアント（WebMCP CDP ドメイン経由）。Kitesurf ではプレイグラウンドから WebMCP ツールを触れる。

## 影響範囲

- 対象ユーザー: Browser Run の Lab セッションで WebMCP の実験 API を使っていた開発者
- 対象プラン: Browser Run
- API / UI / 管理者機能: `navigator.modelContextTesting` 廃止 → `document.modelContext`

## 教材化メモ

- **実験 API から標準 API への移行の典型例**。`navigator.modelContextTesting` という名前自体が「テスト用」と自己申告しており、**名前に実験である旨が入っている API に依存するリスク**の教材になる。
- 影響範囲が狭い（Lab セッション + 実験 API の利用者のみ）ため単独記事化は見送り、**Kitesurf 記事の中で WebMCP の文脈として言及した**。

## 原文確認

- 公式見出し: Browser Run - Browser Run adds WebMCP to Kitesurf and moves to document.modelContext
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-28-webmcp-api/
- 関連 blog: https://blog.cloudflare.com/kitesurf-update/
- 原文全文は公式ページで確認してください。
