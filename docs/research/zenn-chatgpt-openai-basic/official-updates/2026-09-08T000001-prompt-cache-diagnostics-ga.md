---
date: 2026-09-08
title: "Prompt Cache Diagnostics が Responses API で GA（GPT-5.6 以降）"
service: "OpenAI API（Responses API）"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-09-09T09:02:00+09:00
published_at: 2026-09-08T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-08 Prompt Cache Diagnostics GA

## 公式内容の日本語要約

OpenAI は 2026-09-08 の API changelog で、**Prompt Cache Diagnostics が Responses API で一般提供（GA）になった**ことを公表した。対象は **GPT-5.6 以降のサポート対象モデル**である。

この機能は、**あるレスポンスのキャッシュ再利用状況を、直前のレスポンスと比較**できるようにするものである。キャッシュミスが起きたときに、その**理由**を提示し、再利用率を上げるためのトラブルシューティング手順を案内する。

プロンプトキャッシュは入力トークンの課金を大きく下げる仕組みだが、**ミスが起きても従来はアプリケーション側から原因が見えなかった**。プレフィックスのどこが変わったのか、モデルが変わったのか、TTL が切れたのかを切り分ける公式手段が API 上に用意された、というのが本エントリの位置づけである。

## できるようになったこと

- **キャッシュ再利用状況を直前レスポンスと比較**して差分を確認できる
- **キャッシュミスの理由**が提示される
- 再利用率を上げるための**トラブルシューティング手順**が示される
- 対象は **Responses API / GPT-5.6 以降**（GA。プレビューではない）

## 影響範囲

- 対象ユーザー: Responses API を使う開発者、特にエージェント・長文脈アプリのコスト管理担当
- 対象プラン: API 利用者
- API / UI / 管理者機能: API 側の診断機能

教材化メモ: src/content/ai-news-notes/chatgpt-openai/prompt-cache-diagnostics-ga.mdx

## 原文確認

- 公式見出し: Prompt Cache Diagnostics（2026-09-08 エントリ）
- 公式URL: https://developers.openai.com/api/docs/changelog
- 原文全文は公式ページで確認してください。
