---
date: 2026-11-20
title: "Workers for Platforms - Dispatch namespace の名前変更を不可に"
service: "Workers for Platforms"
source: https://developers.cloudflare.com/changelog/post/2026-11-20-dispatch-namespace-rename-removed/
fetched_at: 2026-11-21T09:20:00+09:00
published_at: 2026-11-20
date_precision: date-only
category: enhancement
---

# Workers for Platforms - Dispatch namespace の名前変更を不可に

## 公式内容の日本語要約

作成後の dispatch namespace の名前変更が不可に。API の PUT・PATCH で name を変えると 400（コード 100413）、wrangler の rename と Terraform の変更も失敗する。移行は新規作成→デプロイ→バインディング更新→旧削除。スコア5で見送り。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-20-dispatch-namespace-rename-removed/
- 原文全文は公式ページで確認してください。

