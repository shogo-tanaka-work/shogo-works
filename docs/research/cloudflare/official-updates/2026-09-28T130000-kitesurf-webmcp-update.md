---
date: 2026-09-28
title: "Kitesurf 更新。WebMCP でサイトの関数を直接呼べるようになり、Web Platform Tests 通過数が73万超へ"
service: "Cloudflare（Browser Run / Kitesurf）"
product: "Browser Run, Workers"
source: https://blog.cloudflare.com/kitesurf-update/
official_url: https://blog.cloudflare.com/kitesurf-update/
fetched_at: 2026-09-29T10:53:00+09:00
published_at: 2026-09-28T13:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-09-28 Kitesurf アップデート

## 公式内容の日本語要約

Cloudflare が、Workers 上で完全に動作するエージェント向けブラウザ **Kitesurf**（2026-08-06 ベータ公開）の更新を公開した。**今回の中心は WebMCP 対応である。**

**WebMCP により、エージェントはクリックを模倣する代わりに、サイトが公開した関数（例: `searchFlights()`）を直接呼べる。** 公式はこれを「より速く、より確実」と説明している。DOM を読んでボタンの座標を推定し、クリックし、遷移を待つという従来の操作列が、関数呼び出し1回に畳まれる。

**Web 標準のカバー範囲が大きく広がった。** CSS Layout、CSS Object Model、Custom Elements、URL ベースのモジュール解決、JSON モジュール、import maps、iframe の挙動改善に対応し、**Web Platform Tests の通過サブテスト数が約230,000件から730,000件超へ増えた。** 8月のベータ公開時点が「215,000件以上」だったため、**約1か月半で3倍以上**である。

**性能面**は DOM 操作・タイマー・フォント読み込みを最適化し、エージェントループ内のレイテンシを削減した。壁時計時間と CPU 使用量は「ローンチ時のベンチマークとおおむね同水準」に保たれている。

**ターミナル描画が加わった。** Kitty graphics protocol または ANSI テキストモードで、ページをターミナル上に描画できる。**「エージェントが Web ページをどう見ているか」を開発者が目視できる**ようにするためのもので、Homebrew でインストールできる。

**アクセス手段**は3つ。刷新された `kitesurf.dev` プレイグラウンド、Browser Run API、ターミナル（Homebrew）。**Browser Run API の全面対応**により CDP / Playwright / Puppeteer / MCP から利用でき、Quick Actions もサポートする。

**料金はベータ期間中は無料**で、アカウント単位の上限が設けられている。

## できるようになったこと

- WebMCP 経由でサイトが公開した関数をエージェントが直接呼び出し
- CSS Layout / CSSOM / Custom Elements / import maps などの標準対応（WPT 730,000超サブテスト）
- Kitty graphics protocol / ANSI テキストモードでのターミナル描画
- CDP / Playwright / Puppeteer / MCP からの利用と Quick Actions

## 影響範囲

- 対象ユーザー: ブラウザ操作エージェントを作る開発者、スクレイピング・自動化基盤の運用者
- 対象プラン: ベータ期間中は無料（アカウント単位の上限あり）
- API / UI / 管理者機能: Browser Run API、kitesurf.dev プレイグラウンド、ターミナル CLI

教材化メモ: src/content/ai-news-notes/cloudflare/kitesurf-webmcp-agentic-browser-update.mdx

## 原文確認

- 公式見出し: The road to the agentic browser: A Kitesurf update
- 公式URL: https://blog.cloudflare.com/kitesurf-update/
- 関連 changelog: https://developers.cloudflare.com/changelog/post/2026-09-28-webmcp-api/
- 前回記事: src/content/ai-news/cloudflare/kitesurf-agent-first-browser.md（2026-08-06 ベータ公開）
- 原文全文は公式ページで確認してください。
