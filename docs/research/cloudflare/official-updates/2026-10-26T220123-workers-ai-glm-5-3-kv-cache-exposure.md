---
date: 2026-10-26T22:01:23Z
title: "Workers AI GLM-5.3 でリクエスト間の KV cache 露出（公開報告・追補）"
service: "Workers AI"
source: https://blog.cloudflare.com/kv-cache-exposure-remediation/
fetched_at: 2026-10-29T09:10:00+09:00
published_at: 2026-10-26T22:01:23Z
date_precision: timestamp
category: incident
---

# 2026-10-26T22:01:23Z Workers AI GLM-5.3 でリクエスト間の KV cache 露出（公開報告・追補）

## 公式内容の日本語要約

2026-08-27 から 2026-09-09 の間、Workers AI の `@cf/zai-org/glm-5.3` で、681,280 トークンを超える長いプロンプトへの応答に他顧客のリクエストのデータが混入した。影響は155応答。原因は、prefill GPU の KV cache プールが 681,280 トークンしかないのにコンテキスト長を 1,048,576 トークンで公開していた設定不一致と、SGLang の disaggregated モードで拒否リクエストが admission を通過するバグの重なり。研究者の報告（HackerOne、2026-09-08）を受け、2026-09-09 にモデルを停止し、設定修正とエンジンパッチ後に同日復旧。他モデルは影響なし、悪用の証拠なし。2026-10-26 に SGLang 側と協調開示。SGLang は v0.5.22 以降への更新を推奨している。

## 影響範囲

- 対象: GLM-5.3 を長文脈で使った Workers AI 利用者（影響155応答）。API 利用者側の対応は公式に記載なし

教材化メモ: src/content/ai-news-notes/cloudflare/workers-ai-glm-5-3-kv-cache-exposure.mdx

## 原文確認

- 公式URL: https://blog.cloudflare.com/kv-cache-exposure-remediation/
- 原文全文は公式ページで確認してください。
