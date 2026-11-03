---
date: 2026-11-02
title: "Flagship: ローカル開発でフラグをローカルストアに対して評価"
service: "Cloudflare / Flagship"
source: https://developers.cloudflare.com/changelog/post/2026-11-02-local-flag-store/
fetched_at: 2026-11-03T09:10:00+09:00
published_at: 2026-11-02
date_precision: date-only
category: enhancement
---

# 2026-11-02 Flagship: ローカル開発でフラグをローカルストアに対して評価

## 公式内容の日本語要約

Flagship バインディングが、ローカル開発時にリモートアプリではなくローカルのフラグストアを評価するようになった。wrangler dev・Vite プラグイン・Vitest・cf dev が対象。ストアは空で始まり、wrangler flagship flags の --local、pull、Local Explorer で管理する。`remote: true` で従来動作に戻せる。Wrangler v4.135.0 以降が必要。

## 影響範囲

- 対象: Flagship 利用の開発者

教材化メモ: 見送り（スコア5）のため作成しない。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-02-local-flag-store/
- 取得経路: Exa（web_fetch_exa）。原文全文は公式ページで確認してください。
