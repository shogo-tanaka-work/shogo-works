---
date: 2026-10-13
title: "Agents SDK に persistent browser tool — ターンをまたいでタブとログインが残るブラウザ"
service: "Agents SDK"
product: "Agents"
source: https://developers.cloudflare.com/changelog/post/2026-10-13-persistent-browser/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-13-persistent-browser/
fetched_at: 2026-10-14T09:30:00+09:00
published_date: 2026-10-13
date_precision: date-only
category: release
---

# 2026-10-13 Agents SDK の persistent browser tool

## 公式内容の日本語要約

Cloudflare Agents SDK に **`browserTool`** が入った。エージェントへ Browser Run のブラウザを渡し、**後続のターンでも同じブラウザへ戻れる**。サイトを開いて内容を読み、あとで戻ってきたときに**タブ・Cookie・ログインセッションがそのまま残っている**（ブラウザセッションが生きている限り）。

**モデルがブラウザを操作する方法はコード生成**である。モデルは Chrome DevTools Protocol（CDP）を使うコードを書いて実行し、スクリーンショットは画像として返るため、画像対応モデルと UI でそのまま扱える。

**必要バージョンは Agents SDK v0.28.0 以降。**

**組み込み方。** `agents/browser` から `Browser` と `browserRun` を、`agents/browser/pi` から `browserTool` を import する。`provider: browserRun(this.env.BROWSER)` で `Browser` を作り、Pi Durable harness の中で `Harness.open` の前に `this.registry.install({ name: "browser", tools: [browserTool({ ctx, browser, loader: this.env.LOADER })] })` を呼ぶ。`Lifecycle.install(this).use(this.browser).use(this.harness)` でブラウザと harness を登録する。

**挙動。** Pi の会話ごとに既定でアクティブなタブが1つ割り当てられる。ログインと Cookie はブラウザ内で共有される。**Durable Object が hibernate してもブラウザは生き続ける。**

**制約。** 既定のアイドルタイムアウトは **10分**。セッションが期限切れまたはクラッシュした場合、ツールは新しいブラウザを作って **`restarted: true`** を返す。**それまでのタブとログイン状態は失われる。** 料金・プラン別の差は changelog に記載がない。

AI SDK と TanStack AI 向けのアダプタがあり、他の harness も公開された Browser / CDP API 経由で接続できる。

教材化メモ: src/content/ai-news-notes/cloudflare/agents-sdk-persistent-browser-tool.mdx

## できるようになったこと

- ログイン済みの状態を保ったまま、複数ターンにわたってブラウザ操作をエージェントへ任せられる
- Durable Object の hibernate をまたいでブラウザセッションを維持できる
- セッションが落ちた場合に `restarted: true` で検知し、再ログインの分岐を書ける

## 影響範囲

- 対象ユーザー: Cloudflare Agents SDK（v0.28.0 以降）でブラウザ操作エージェントを作る開発者
- 対象プラン: 記載なし（Browser Run の料金体系に依存）
- API / UI / 管理者機能: SDK API（`browserTool` / `Browser` / `browserRun`）、バインディング（`BROWSER` / `LOADER`）

## 原文確認

- 公式見出し: 「Agents - New persistent browser tool in the Agents SDK, with tabs and logins that last between turns」
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-13-persistent-browser/
- 原文全文は公式ページで確認してください。
