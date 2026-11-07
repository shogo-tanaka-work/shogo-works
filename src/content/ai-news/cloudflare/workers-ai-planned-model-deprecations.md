---
title: "Workers AI が 24 モデルを廃止予告 — 2026-11-20 以降は 410 Gone、廃止日は 11-15 から延期"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-11-05
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-11-05-planned-model-deprecations/"
summary: "Cloudflare は Workers AI のモデルカタログを刷新し、LLM 16 件と画像・音声・視覚・埋め込みモデル 8 件を廃止すると告知した。当初の廃止日は 2026-11-15 だったが、2026-11-20 へ延期された。この日以降、対象モデルへのリクエストは HTTP 410 Gone（エラーコード 5028）で失敗する。画像生成・音声・視覚・埋め込みのモデルには推奨の後継が示されている。"
description: "モデル ID を直接指定しているアプリは、11-20 までに参照を差し替える必要がある。"
impact: "対象モデルを呼んでいるアプリは 11-20 から止まる。LLM には公式の後継指定がなく、移行先の選定と品質確認が利用者側の作業になる。"
tags: ["cloudflare", "workers-ai", "モデル廃止", "移行", "運用"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は2026-11-05、**Workers AI のモデルカタログ刷新に伴う廃止予告**を更新しました。

- 廃止日は当初の **2026-11-15 から 2026-11-20 へ延期**された
- 2026-11-20 以降、対象モデルへのリクエストは **HTTP `410 Gone`（エラーコード `5028`）** で失敗する
- 対象は **LLM 16 件**と、音声合成・画像生成・音声認識・視覚・埋め込みの **8 件**
- 音声・画像・視覚・埋め込みのモデルには**推奨の後継**が示されている。LLM には後継の指定がない

## 何が変わったか

廃止対象に含まれる LLM の例は次のとおりです。

- `@cf/deepseek-ai/deepseek-r1-distill-qwen-32b`、`@cf/qwen/qwq-32b`
- `@cf/moonshotai/kimi-k2.6`、`@cf/moonshotai/kimi-k2.7-code`
- `@cf/zai-org/glm-5.2`、`@cf/zai-org/glm-5.3-flash`
- `@cf/meta/llama-3.1-8b-instruct-fp8`、`@cf/meta/llama-3.2-1b-instruct`、`@cf/meta/llama-3.2-3b-instruct`

LLM 以外は、公式が後継を示しています。

| 廃止 | 推奨の後継 |
| --- | --- |
| `@cf/myshell-ai/melotts` | `@cf/deepgram/aura-2-en` |
| Stable Diffusion 系 3 モデル、`dreamshaper-8-lcm` | `@cf/black-forest-labs/flux-2-klein-9b` |
| `@cf/openai/whisper-tiny-en` | `@cf/deepgram/nova-3` |
| `@cf/llava-hf/llava-1.5-7b-hf` | `@cf/moondream/moondream3.1-9B-A2B` |
| `@cf/google/embeddinggemma-300m` | `@cf/google/embeddinggemma-2`（近日提供） |

全 24 件の一覧は公式の changelog で確認してください。

## 業務インパクト（一般企業向け）

**止まるのは 11-20 からで、エラーで気づく前に棚卸しが必要です。** 廃止後は応答が返らず、404 ではなく 410 になります。社内アプリが Workers AI を使っているなら、コードと設定の中のモデル ID を検索して、対象と一致するものを洗い出してください。

確認する項目:

- **コードに直書きしたモデル ID** と、環境変数・設定ファイル側の指定の両方
- **LoRA 付きのモデル**（`llama-2-7b-chat-hf-lora`、`gemma-2b-it-lora`、`gemma-7b-it-lora`）は、アダプターごと移行先を決める必要がある
- **埋め込みモデルの入れ替え**は、ベクトルの次元や空間が変わるため、既存のインデックスの再作成が要る場合がある。後継の `embeddinggemma-2` は「近日提供」で、現時点では使えない
- 移行先の**応答品質・料金・スループット**。公式は新しいモデルほどトークン効率とスループットが良いとしている

**注意点**: LLM には公式の後継指定がありません。代替モデルの選定と評価は利用者側で行う必要があります。

## 副業・個人活用視点

**顧客に納品したアプリが止まるリスクがあります。** 保守契約のある案件では、使っているモデル ID を一覧にして、11-20 より前に差し替えと動作確認を済ませるのが安全です。

**モデルを設定で切り替えられる作りにしておくと、次回から楽になります。** モデル名をコードに埋め込まず、設定やゲートウェイ側のエイリアスで指す構成なら、今回のような廃止でも再デプロイの手間が減ります。

**情報源の制約**: 本記事は Cloudflare の changelog（2026-11-05）に基づく。後継モデルの品質や料金の比較は行っていない。
