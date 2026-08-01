---
date: 2026-07-31
title: "GPT-Live の音声に SynthID 透かしを付与、検証ツールと検証 API を提供"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/advancing-content-provenance/
fetched_at: 2026-08-01T15:10:00+09:00
published_at: 2026-07-31
date_precision: date-only
category: release
---

# 2026-07-31 GPT-Live 音声への SynthID 透かしと検証 API

## 公式内容の日本語要約

ChatGPT Voice および OpenAI API を通じて GPT-Live で生成された対応音声に、SynthID の透かしが付与されるようになった。GPT-Live は listen と speak を同時に行う full-duplex アーキテクチャの音声モデル世代で、新しい ChatGPT Voice 体験の基盤となっている。

あわせて、公開の検証ツールが対応音声ファイルから OpenAI の provenance シグナルを検出できるようになった。さらに検証用の API アクセスが提供され、開発者や組織が自前のワークフローに provenance チェックを組み込めるようになった。

OpenAI はこれまで画像に対して C2PA と SynthID を適用してきたが、今回の対応で音声にも範囲が広がった。

## できるようになったこと

- GPT-Live で生成された対応音声に SynthID 透かしが付与される（ChatGPT Voice と API の双方）
- 公開の検証ツールで音声ファイルから OpenAI の provenance シグナルを検出できる
- 検証 API により、自前のワークフローへ provenance チェックを組み込める

## 影響範囲

- 対象ユーザー: ChatGPT Voice 利用者、OpenAI API で GPT-Live を使う開発者、音声コンテンツを受け取る側の組織
- 対象プラン: ChatGPT Voice および API
- API / UI / 管理者機能: 検証 API の追加。生成側の透かし付与は自動

## 教材化メモ

- 「AI 生成物であることを機械可読な形で残す」という provenance の考え方は、画像で先行し音声へ広がった。C2PA / SynthID の位置づけを教材で整理する好機
- 検証 API が提供されたことで、受け取る側の組織が自動チェックを組み込める。生成側の責務と受信側の責務を分けて説明できる
- なりすまし音声への対策という文脈で、検証をどこに組み込むか（受付時・公開前・監査時）という設計の話に接続できる
- 「透かしがない = AI 生成ではない」とは言えない点（対応音声のみ、他社モデルは対象外）は注意点として必ず添える

## 原文確認

- 公式見出し: Advancing content provenance for a safer, more transparent AI ecosystem
- 公式URL: https://openai.com/index/advancing-content-provenance/ 、https://openai.com/research/verify/
- 補足: `openai.com` は直接フェッチが403のため、公式URLの特定と内容確認はWeb検索経由で行った
- 原文全文は公式ページで確認してください。
