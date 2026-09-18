---
date: 2026-09-17
title: "Workers AI に rejectIfBusy。容量待ちのキューに入らず即失敗させる選択肢が同期推論に追加"
service: "Cloudflare"
product: "Workers AI"
source: https://developers.cloudflare.com/changelog/post/2026-09-17-reject-if-busy/
fetched_at: 2026-09-18T09:02:00+09:00
published_date: 2026-09-17
date_precision: date-only
category: enhancement
---

# 2026-09-17 Workers AI の rejectIfBusy

教材化メモ: src/content/ai-news-notes/cloudflare/workers-ai-reject-if-busy.mdx

## 公式内容の日本語要約

Cloudflare は 2026-09-17、Workers AI の**同期推論リクエストに `rejectIfBusy` オプション**を追加した。容量が空いていないときに**キューで待たず、その場で失敗させる**ための設定である。公式の説明は「アプリケーションが容量キューで待つべきでない場合に使う」。

Workers AI バインディング経由では、**`env.AI.run()` の第3引数**としてオプションを渡す。

```js
const response = await env.AI.run(
  "@cf/google/gemma-4-26b-a4b-it",
  { messages: [{ role: "user", content: "..." }] },
  { rejectIfBusy: true },
);
```

ネイティブ REST API では、リクエストボディの `options` に含める。OpenAI 互換エンドポイントでの使い方とエラー挙動は、公式ドキュメントの「Reject busy requests」に記載されている。

**既定は従来どおり（キュー待ち）** で、オプトインの追加である。

## できるようになったこと

- 容量逼迫時の挙動を「待つ」「即失敗」から選べるようになった
- レイテンシ上限が決まっている経路（対話UI・同期API）で、待ち時間の上振れを構造的に抑えられる

## 影響範囲

- 対象ユーザー: Workers AI を同期呼び出ししている開発者
- 対象プラン: 記載なし（Workers AI 利用者一般）
- API / UI / 管理者機能: バインディングと REST API の両方。**呼び出し側にフォールバック実装が必要になる**

## 原文確認

- 公式見出し: Reject busy synchronous inference requests
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-17-reject-if-busy/
- 原文全文は公式ページで確認してください。
