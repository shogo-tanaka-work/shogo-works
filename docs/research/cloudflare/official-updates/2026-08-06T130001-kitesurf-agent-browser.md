---
date: 2026-08-06
title: "Kitesurf — Workers の V8 isolate 上で動くエージェント専用ブラウザ（ベータ）"
service: "Cloudflare"
product: "Browser Run"
source: https://blog.cloudflare.com/kitesurf/
fetched_at: 2026-08-07T10:00:00+09:00
published_at: 2026-08-06T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-08-06 Kitesurf

## 公式内容の日本語要約

Cloudflare が、AI エージェント向けに設計したブラウザエンジン「Kitesurf」を Browser Run 上でベータ公開した。人間向けブラウザが最適化してきた指標（描画品質・操作性）ではなく、エージェントにとって効く指標 — トークン数、コンテキストウィンドウ、スケーラビリティ、コスト — を優先して作られている点が主張の中心。

構成は Cloudflare Workers 上の3コンポーネント。**Engine** が Chrome DevTools Protocol（CDP）の通信とセッション状態を扱い、**PageScript** が動的に起動する isolate で HTML/CSS のパースと JavaScript 実行を担い（Rust から WebAssembly にコンパイルしたモジュールを使用）、**PageRenderer** が Blitz のレンダリング部品でページオブジェクトを画像化する。

性能面では、スクリーンショット取得時に Chromium 比で CPU 3.1 倍削減、メモリ 4.7 倍削減と説明されている。ステートレス設計のため、バースト的なエージェント負荷に対して水平スケールできる。標準準拠については Web Platform Tests を 215,000 件以上パスし、CSS / DOM / HTML / XHR というエージェントが実際に使う API を中心にカバーしていると述べている。

利用方法は3経路。既存の Puppeteer / Playwright / chrome-remote-interface に `browser=kitesurf` パラメータを付けて切り替える、スクリーンショットや PDF 用の Quick Actions REST エンドポイントを叩く、公開プレイグラウンド `kitesurf.cloudflare.app` で Chrome DevTools 込みで試す。ベータ期間中は無料（アカウント単位の上限あり）。

## できるようになったこと

- Browser Run で Chromium ではなく Kitesurf をブラウザエンジンとして選択できる
- 既存の Puppeteer / Playwright コードに `browser=kitesurf` を追加するだけで切り替えられる
- スクリーンショット・PDF 生成を Quick Actions の REST エンドポイントで直接呼べる
- 公開プレイグラウンドで DevTools 付きの動作確認ができる

## 影響範囲

- 対象ユーザー: Browser Run 利用者、ブラウザ操作エージェントの開発者
- 対象プラン: ベータ期間中は無料（アカウント単位の上限あり）
- API / UI / 管理者機能: API（Browser Run / Quick Actions）

教材化メモ: src/content/ai-news-notes/cloudflare/kitesurf-agent-first-browser.mdx

## 原文確認

- 公式見出し: Introducing Kitesurf: The agent-first browser that runs in V8 isolates on Cloudflare Workers
- 公式URL: https://blog.cloudflare.com/kitesurf/
- changelog: https://developers.cloudflare.com/changelog/post/2026-08-06-kitesurf/
- 原文全文は公式ページで確認してください。
