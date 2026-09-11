---
date: 2026-09-10
title: "GPT-Live 1 が一般提供（GA）開始、$0.05/分で API 提供"
service: "OpenAI API"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-09-11T09:02:00+09:00
published_at: 2026-09-10
date_precision: date-only
---

# 2026-09-10 GPT-Live 1 が一般提供（GA）開始

## 公式内容の日本語要約

**GPT-Live 1 が `v1/live/sessions` エンドポイントで一般提供（GA）**になった。2026-07-08 に ChatGPT Voice 向けに発表されたモデルで、その時点で API は「サインアップ受付のみ、提供は今後」という状態だった。今回それが GA として確定した。

特徴は**双方向（全二重）の音声会話が、バックエンドの推論・ツール実行と並行して進む**点である。従来の音声 API は「聞く → 考える → 話す」が直列になりやすく、考えている間の無音が体験を損なっていた。GPT-Live 1 は会話を止めずに裏で処理を進める構成になっている。

バックエンドの選び方は2通りある。**responses delegation** は OpenAI のモデルへ処理を委譲する方式、**client delegation** は自前のバックエンドへ接続する方式である。

料金は**セッション $0.05/分（秒単位課金）**で、**モデル利用料とツール利用料は別建て**になる。つまりセッション単価だけで見積もると実コストを外す。

## できるようになったこと

- `v1/live/sessions` エンドポイントで GPT-Live 1 を GA として利用できる
- 推論・ツール実行と並行した全二重の音声会話を実装できる
- responses delegation（OpenAI モデルへ委譲）と client delegation（自前バックエンド接続）を選べる
- 移行用ドキュメント・プロンプト指針が提供される

## 影響範囲

- 対象ユーザー: 音声エージェントを実装する開発者
- 対象プラン: API（GA）
- API / UI / 管理者機能: API

## 原文確認

- 公式見出し: GPT-Live 1 General Availability
- 公式URL: https://developers.openai.com/api/docs/changelog
- 原文全文は公式ページで確認してください。

教材化メモ: src/content/ai-news-notes/chatgpt-openai/gpt-live-1-general-availability.mdx
