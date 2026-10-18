---
date: 2026-09-29
title: "Browser Run が1セッションへの複数同時接続に対応。複数の Worker が同じブラウザを共有できる"
service: "Cloudflare（Browser Run）"
product: "Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-09-29-concurrent-session-connections/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-29-concurrent-session-connections/
fetched_at: 2026-09-29T10:53:00+09:00
published_at: 2026-09-29
date_precision: date-only
category: enhancement
---

# 2026-09-29 Browser Run 複数同時接続

## 公式内容の日本語要約

Browser Run のセッションが**複数の同時接続に対応**した。**複数の Worker が同じブラウザインスタンスへ同時に接続できる。** 従来は1セッションあたり1接続のみだった。

実装は `puppeteer.connect()` で接続し、リクエストごとに `await browser.createBrowserContext()` で別コンテキストを作る。後片付けは `context.close()` と `browser.disconnect()` で行い、**共有ブラウザ自体は閉じない**。

**要件**: 「Concurrent connections require `@cloudflare/puppeteer` version 1.1.0 or later」。

**効果**は、新しいブラウザを起動する必要が減り、コールドスタートの遅延が縮み、同時ブラウザ数の上限に対する消費も減る。

## 影響範囲

- 対象ユーザー: Browser Run で並列処理をしている開発者
- 対象プラン: Browser Run（`@cloudflare/puppeteer` 1.1.0 以上が必要）
- API / UI / 管理者機能: Puppeteer API の使い方

## 教材化メモ

- **同時実行上限への当たり方が変わる**話。「ブラウザ1つ = 1リクエスト」から「ブラウザ1つを複数リクエストで共有」へ。上限に張り付いている運用では、**コードを変えずに上限を上げる交渉をする前に、共有へ寄せる選択肢がある**という判断材料。
- 単独記事化は見送り（スコア5）。影響は Browser Run の並列処理利用者に限られ、既存教材への影響もない。

## 原文確認

- 公式見出し: Browser Run - Connect multiple clients to one Browser Run session
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-29-concurrent-session-connections/
- 原文全文は公式ページで確認してください。
