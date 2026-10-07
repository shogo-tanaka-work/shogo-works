---
date: 2026-10-06
title: "Decisions API が public beta で公開（gpt-6-luna、POST /v1/decisions）"
service: "OpenAI API"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-10-07T09:20:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: release
---

# 2026-10-06 Decisions API が public beta で公開

## 公式内容の日本語要約

OpenAI が 2026-10-06 付の API changelog で **Decisions API** を public beta として公開した。専用エンドポイントは `POST /v1/decisions`、対応モデルは現時点で `gpt-6-luna` のみである。changelog の表現は「Turn text and images into typed answers 10x faster than the Responses API」で、**Responses API より約10倍速く「型のついた答え」を返す**ことを売りにしている。

リクエストは3つのフィールドで構成される。`model`（評価するモデル）、`input`（質問が共有する根拠。テキスト文字列、またはテキストと画像を含む user メッセージ）、`questions`（評価内容の配列。各要素に type、name、instructions、型ごとのパラメータを持つ）。

出力は3種類である。**Predicates** は「その記述が真である確率」を `probability`（0〜1）で返す。**Choices** はあらかじめ定義した選択肢から1つを選び、全選択肢の `probabilities` と `confidence` を返す。**Scores** は順序のある水準に対して評価し、水準インデックスの確率加重平均を `score` として返す（水準ごとの確率と `confidence` も付く）。

価格は **入力 $0.10 / 1M トークン**で、キャッシュ料金と出力料金はかからない。地域プレミアムと long-context の乗数は適用される。米国と欧州でのリージョン処理・データレジデンシーに対応する。画像は base64 のインライン入力のみで、**ホストされた HTTP/HTTPS の画像 URL と `file_id` 入力は非対応**である。公式は「public beta であり、数週間のうちに GA を予定」と書いている。

## できるようになったこと

- 分類・ルーティング・エージェントの次アクション選択などを、**1回の API 呼び出しで型のついた答えとして取得**できる
- 確率と `confidence` が返るため、**閾値を決めて自動処理と人手確認を切り分ける**設計が書ける
- テキストと画像の両方を根拠にできる（画像は base64 インラインのみ）

## 影響範囲

- 対象ユーザー: OpenAI API を使う開発者
- 対象プラン: API（usage tier の制約は rate limits ドキュメント側）
- API / UI / 管理者機能: API（新エンドポイント `POST /v1/decisions`）

教材化メモ: src/content/ai-news-notes/chatgpt-openai/decisions-api-public-beta.mdx

## 原文確認

- 公式見出し: 「Released the Decisions API in beta with gpt-6-luna.」（2026-10-06 エントリ）
- 公式URL: https://developers.openai.com/api/docs/changelog 、https://developers.openai.com/api/docs/guides/decisions
- 原文全文は公式ページで確認してください。
