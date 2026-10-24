---
title: "Cloudflare の MCP サーバーが /sse を廃止 — 旧 URL は 410 Gone、/mcp への書き換えが必要に"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-22
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-22-cloudflare-mcp-servers-retire-sse/"
summary: "Cloudflare changelog の 2026-10-22 エントリによると、Cloudflare の製品別 MCP サーバーは /mcp のパスだけで応答するようになった。旧来の /sse へのリクエストには 410 Gone が返り、本文に /mcp の URL が含まれる。多くの MCP クライアントは、この内容を接続エラーとして表示する。すでに /mcp を設定しているクライアントは影響を受けない。/sse の URL を設定しているクライアントは、末尾を /mcp に変える必要がある。たとえば docs の MCP サーバーは https://docs.mcp.cloudflare.com/mcp になる。/sse でサインインしていた場合は、クライアントの求めに応じて再サインインする。"
description: "Cloudflare の MCP サーバーが /sse を廃止し /mcp のみに。旧 URL は 410 Gone を返すため、設定の書き換えが必要。"
impact: "Cloudflare の MCP を Claude Code や Cursor などに登録している場合、設定が /sse のままだと接続できなくなる。URL の末尾を直すだけで済むが、気づかないと「突然つながらない」状態になる。"
tags: ["cloudflare", "mcp", "agents", "廃止", "移行"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare の製品別 MCP サーバーは、**`/mcp` のパスだけ**で応答するようになりました（changelog 2026-10-22）。旧来の **`/sse`** は **410 Gone** を返し、レスポンスに `/mcp` の URL が入ります。

## 何が変わったか

- **応答するパス**: `/mcp` のみ。`/sse` は 410 Gone で、移行先の URL を返す
- **影響を受けるもの**: `/sse` の URL を設定しているクライアント。`/mcp` を使うクライアントは影響なし
- **見え方**: 多くの MCP クライアントは、この応答を接続エラーとして表示する
- **直し方**: 設定の URL 末尾を `/sse` から `/mcp` に変える（例: `https://docs.mcp.cloudflare.com/mcp`）。`/sse` でサインインしていた場合は、クライアントの求めに応じて再サインインする

## 業務インパクト（一般企業向け）

**開発者の端末ごとの設定に残っている旧 URL が、そのまま不具合の原因になります。** 社内で Cloudflare の MCP を共有設定ファイルやオンボーディング資料で配っている場合は、`/sse` を含む行を検索して更新してください。

確認の手順は単純です。設定ファイルを `/sse` で検索し、見つかった URL を `/mcp` に置き換え、接続とサインインを再確認します。エラーに `/mcp` の URL が含まれていれば、この変更が原因です。

## 副業・個人活用視点

**自分の MCP 設定を一度見直す良い機会です。** Cloudflare 以外の MCP でも、方式の更新で旧パスが使えなくなることはあります。エラーが出たら、まず公式の変更履歴で URL の変更を疑うと早く直せます。

クライアントに MCP 設定を納品している場合は、保守の連絡として「Cloudflare の MCP は URL を `/mcp` に変更が必要」と伝えておくと安心です。

## 情報源の制約

本記事は Cloudflare changelog の該当エントリを根拠にしています。廃止の発効時刻、対象となる MCP サーバーの完全な一覧は確認できていません。
