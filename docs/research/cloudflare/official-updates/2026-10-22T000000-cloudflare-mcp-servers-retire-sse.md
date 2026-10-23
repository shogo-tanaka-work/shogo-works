---
date: 2026-10-22
title: "Cloudflare の MCP サーバーが /sse を廃止し /mcp のみに"
service: "Agents"
source: https://developers.cloudflare.com/changelog/post/2026-10-22-cloudflare-mcp-servers-retire-sse/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-22-cloudflare-mcp-servers-retire-sse/
fetched_at: 2026-10-23T09:10:00+09:00
published_date: 2026-10-22
date_precision: date-only
category: policy
---

# 2026-10-22 Cloudflare の MCP サーバーが /sse を廃止し /mcp のみに

## 公式内容の日本語要約

Cloudflare の製品別 MCP サーバーは /mcp のみで応答する。旧 /sse へのリクエストは 410 Gone と /mcp の URL を返す。/mcp を使うクライアントは影響なし。/sse を設定しているクライアントは URL 末尾を /mcp に変え、/sse でサインインしていた場合は再サインインする。

教材化メモ: src/content/ai-news-notes/cloudflare/cloudflare-mcp-servers-retire-sse.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-22-cloudflare-mcp-servers-retire-sse/
- 原文全文は公式ページで確認してください。
