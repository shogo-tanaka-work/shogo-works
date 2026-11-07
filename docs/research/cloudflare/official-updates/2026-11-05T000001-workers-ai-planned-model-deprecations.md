---
date: 2026-11-05
title: "Workers AI: モデル廃止予告（期限を 11-20 へ延期）"
service: "Cloudflare / Workers AI"
source: https://developers.cloudflare.com/changelog/post/2026-11-05-planned-model-deprecations/
fetched_at: 2026-11-07T09:10:00+09:00
published_at: 2026-11-05
date_precision: date-only
category: policy
---

# 2026-11-05 Workers AI: モデル廃止予告（期限を 11-20 へ延期）

## 公式内容の日本語要約

Workers AI のカタログ刷新に伴い、LLM 16 件（deepseek-r1-distill-qwen-32b、kimi-k2.6、glm-5.2 など）と画像・音声・視覚・埋め込みモデル 8 件を廃止する。当初の廃止日 2026-11-15 を 2026-11-20 へ延期した。2026-11-20 以降、対象モデルへのリクエストは HTTP 410 Gone（エラーコード 5028）で失敗する。TTS・画像生成・音声認識・視覚・埋め込みモデルには推奨の後継が示されている（例: stable-diffusion-xl 系 → flux-2-klein-9b、whisper-tiny-en → nova-3）。

教材化メモ: src/content/ai-news-notes/cloudflare/workers-ai-planned-model-deprecations.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-05-planned-model-deprecations/
- 取得経路: Exa（web_fetch_exa）。原文全文は公式ページで確認してください。
