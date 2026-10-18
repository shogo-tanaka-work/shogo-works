---
date: 2026-10-07
title: "Managed Agents の web_fetch が「セッションに既出の URL」だけを取得する仕様へ【追補】"
service: "Claude Managed Agents"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-09T09:20:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: policy
---

# 2026-10-07 Managed Agents の web_fetch が事前文脈の URL 限定に【追補】

## 公式内容の日本語要約

**本件は 2026-10-08 の日次チェックで取りこぼしたもので、追補として記録する。** 前回は同じ 10-07 の節から6件を記録したが、`web_fetch` の事前文脈制限の1件が漏れていた（`allowed_hosts` の web ツール適用は別エントリとして記録済み）。

Claude Managed Agents の **`web_fetch` ツールが、セッション中に既に出現した URL だけを取得する**仕様になった。公式が挙げる「既出」の例は、ユーザーメッセージの本文、`web_search` の結果、`web_fetch` が以前返したページの中である。目的は**データ持ち出し（exfiltration）のリスク低減**と明記されている。

**該当しない経路が明示されている点が重要である。** Claude 自身の出力、エージェントのシステムプロンプト、添付文書、`bash` / `read` / MCP ツールの出力にだけ現れた URL は「既出」に数えない。これらに対する `web_fetch` 呼び出しは、エージェントへ **`url_not_in_prior_context`** エラー結果を返す。

エージェントに特定の URL を取得させたい場合は、**`user.message` イベントの本文として URL を送る**必要がある。

同じ 10-07 の節には、`limited` ネットワークで `allowed_hosts` が `web_search` / `web_fetch` にも適用される変更（別エントリとして記録済み）も含まれており、**web ツールの到達範囲が1日で2方向から絞られた**ことになる。ホスト単位の制限と、URL の出自による制限は独立に効く。

## できるようになったこと / できなくなったこと

- `web_fetch` は、ユーザーメッセージ本文・`web_search` 結果・過去の `web_fetch` 結果に出た URL のみ取得する
- Claude の出力・システムプロンプト・添付文書・`bash` / `read` / MCP 出力の URL は対象外（`url_not_in_prior_context`）
- 取得させたい URL は `user.message` の本文で渡す

## 影響範囲

- 対象ユーザー: Claude Managed Agents の利用者
- 対象プラン: Managed Agents が使えるプラン
- API / UI / 管理者機能: API。**既存エージェントが動かなくなる可能性がある破壊的変更**

教材化メモ: src/content/ai-news-notes/claude/managed-agents-web-fetch-prior-context.mdx

## 原文確認

- 公式見出し: October 7, 2026（Claude API release notes）
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 原文全文は公式ページで確認してください。
