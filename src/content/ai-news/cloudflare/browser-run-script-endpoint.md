---
title: "Browser Run に /script エンドポイント：Playwright・Puppeteer・CDP のスクリプトを Worker をデプロイせず API 1回で実行"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-11-20
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-11-20-script-endpoint/"
summary: "Cloudflare が、Browser Run で Playwright、Puppeteer、生の Chrome DevTools Protocol（CDP）で書いたブラウザ自動化を、API 1回で実行できる /script エンドポイントを追加した。JavaScript の関数を送ると、ブラウザセッションに接続された隔離 Worker 内で実行され、利用者が Worker をデプロイする必要はない。結果は JSON で返り、セッション ID とページ ID はレスポンスヘッダーで受け取れる。続けて同じセッションでスクリプトを実行する /script/ 系のエンドポイント、Worker からの env.BROWSER.script()、ダッシュボードの Script Studio も用意された。"
description: "Browser Run の /script エンドポイントの使い方、既存セッションでの追加実行、Worker バインディングとダッシュボードからの利用、注意点（セッションは自動で閉じない）を整理する。"
impact: "ブラウザ自動化を試す際に、Worker のデプロイや実行環境の用意が不要になる。ただしセッションはスクリプト実行後も閉じないため、閉じ忘れによる課金や上限の消費に注意が必要。"
tags: ["cloudflare", "browser-run", "playwright", "puppeteer", "cdp", "エージェント"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-11-20、Browser Run に **`/script` エンドポイント**を追加しました。Playwright、Puppeteer、または生の Chrome DevTools Protocol（CDP）で書いたブラウザ自動化を、**API リクエスト1回**で実行できます。JavaScript の関数を送ると、Browser Run がブラウザセッションに接続した隔離 Worker の中で実行するため、**利用者が Worker をデプロイする必要はありません**。

公式の例では、`POST` で `code` と `library`（例: `playwright`）を送り、ページを開いてタイトルを返す関数を実行します。レスポンスは `{ "success": true, "result": ... }` の形です。

## 何が変わったか

- **単発の実行**: `POST /script` がブラウザを確保し、関数を実行して結果を返す。セッション ID とページ（ターゲット）ID は、`cf-browser-session-id` と `cf-browser-target-id` のレスポンスヘッダーで返る（Kitesurf での実行を除く）
- **続けて実行**: `/script/` 系のエンドポイントで、すでに持っているセッションに対して追加のスクリプトを実行できる。`/script` で得たセッションにも、`POST /devtools/browser` で作ったセッションにも使える。`targetId` で特定のページに接続し、同じセッション内で複数ページを並行して扱うこともできる
- **起動オプション**: `keep_alive`、`recording`、`lab` はクエリ文字列で指定する。`browser=kitesurf` を付けると、Kitesurf で CDP スクリプトを実行する
- **Worker から**: ブラウザバインディングの `env.BROWSER.script()` で同じ機能を呼べ、API トークンは不要
- **ダッシュボード**: Script Studio で、API トークンなしにライブのブラウザへスクリプトを書いて実行できる
- **注意**: どちらのエンドポイントも、スクリプト実行後にセッションを閉じない。`DELETE /devtools/browser/` か `browser.close()` で閉じないと、アイドルタイムアウトまで残る

## 業務インパクト（一般企業向け）

画面の巡回確認、スクリーンショット取得、定型フォームの検証などを、**自前のサーバーや Worker の配備なしに API から呼べる**ため、小さな自動化の試作が速くなります。社内のテストや監視の補助として、既存の Playwright スクリプトを移して試す入口になります。

導入前に確認したい点は次のとおりです。

- **セッションの閉じ忘れ**: 自動で閉じないため、利用上限や課金に影響しないかを、料金ページと利用量の管理方法で確認する
- **認証情報の扱い**: スクリプトに渡す資格情報の保管と、ログに残る内容を決めておく
- **対象サイトの規約**: 自動アクセスが許されているかを、対象サイトごとに確認する

## 副業・個人活用視点

Playwright の経験があれば、**スクレイピングや定点観測の小さな案件を、サーバーを持たずに試せる**可能性があります。Script Studio でその場で書いて動かせるため、デモや見積もり前の検証に使いやすい構成です。

納品物として継続運用する場合は、セッションの終了処理と、公式ドキュメントに載る最新の制限・料金を必ず確認してください。
