---
date: 2026-09-14
title: "Browser Run に guardrails — ブラウザセッションの HTTP/HTTPS 通信を許可ホストだけに制限、Live View の読み取り専用モードも追加"
service: "Browser Run"
product: "Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-09-14-guardrails/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-14-guardrails/
fetched_at: 2026-09-15T09:05:00+09:00
published_date: 2026-09-14
date_precision: date-only
category: enhancement
---

# 2026-09-14 Browser Run の guardrails と Live View 読み取り専用モード

## 公式内容の日本語要約

Cloudflare は 2026-09-14、**Browser Run に guardrails を追加した。** ブラウザセッションからの HTTP / HTTPS リクエストを、**許可したホスト名だけに制限**する機能である。設定は Puppeteer / Playwright / REST API のいずれからも行える。

公式が挙げる用途は3つある。**(1) ブラウザのワークフローを特定サイトとそのサブドメインに閉じ込める。(2) 既知のサードパーティ API・スクリプト・画像・フォントだけを読み込ませる。(3) 渡した HTML からスクリーンショットや PDF を生成する際に、外部コンテンツの取得を止める。**

Puppeteer での指定は `puppeteer.launch(env.MYBROWSER, { guardrails: { allowedDomains: [...] } })` の形で、`allowedDomains` は `example.com` のような完全一致と `*.example.com` のようなワイルドカードの両方を受け付ける。

あわせて、**Live View に読み取り専用モードが入った。** Live View の URL を生成するときに `{ mode: "readonly" }` を指定すると、**閲覧者はクリック・入力・遷移・JavaScript 実行ができなくなる。** セッションに掛かっているホスト名の制限はそのまま維持される。

公式 changelog にはプラン別の提供条件・上限の記載はない。

## できるようになったこと

- ブラウザセッションの通信先を **許可ホスト名のリストで制限**する（完全一致 + ワイルドカード）
- Puppeteer / Playwright / REST API の**いずれからも guardrails を設定**する
- Live View を **読み取り専用**で共有する（`{ mode: "readonly" }`）

## 影響範囲

- 対象ユーザー: Browser Run（Cloudflare のブラウザ自動化・ブラウザレンダリング）を使う開発者
- 対象プラン: 公式 changelog に記載なし
- API / UI / 管理者機能: Puppeteer / Playwright のライブラリ設定、REST API、Live View の URL 生成

教材化メモ: src/content/ai-news-notes/cloudflare/browser-run-guardrails.mdx

## 原文確認

- 公式見出し: Browser Run - Control which hostnames Browser Run sessions can access
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-14-guardrails/
- changelog RSS: https://developers.cloudflare.com/changelog/rss/index.xml（`pubDate: Mon, 14 Sep 2026`、時刻は `00:00:00 GMT` 固定のため `date_precision: date-only`）
- 原文全文は公式ページで確認してください。
