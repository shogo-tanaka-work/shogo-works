---
date: 2026-07-31
title: "grok-imagine-video-1.5 が text/image/reference-to-video に対応、ネイティブ1080p"
service: "xAI / Grok"
source: https://docs.x.ai/developers/release-notes
fetched_at: 2026-08-01T15:10:00+09:00
published_at: 2026-07
date_precision: date-only
category: release
---

# 2026-07 grok-imagine-video-1.5 のモダリティ拡張

## 公式内容の日本語要約

xAI の開発者向け release notes に、`grok-imagine-video-1.5` のモダリティ対応が追加された。text-to-video、image-to-video、reference-to-video の3系統に対応し、ネイティブ 1080p をサポートする。

xAI の release notes は月単位の見出し（July / June / May）でのみ整理されており、日単位の公開日が取れない。2026-07-31 のチェック時点では July 項目が4件（Grok Voice Think Fast 2.0、Speech to Text の `vad_threshold`、Grok 4.5 の EU 提供、Grok 4.5）で本項目は含まれていなかったため、2026-07-31 11:55 JST 以降に追加されたと判断した。ただし公式側に日付表記がないため `date_precision: date-only`（月粒度）とする。

2026-06-17 の広範リリース時点では image-to-video が中心で解像度は 720p（Aurora-2 エンジン、約25秒で生成）だったため、バージョン番号は 1.5 のまま入力系統と出力解像度の両方が引き上げられたことになる。

## できるようになったこと

- `grok-imagine-video-1.5` で text-to-video を利用できる
- 同モデルで reference-to-video を利用できる（image-to-video は 2026-06-17 時点から対応）
- ネイティブ 1080p での出力に対応（従来は 720p）

## 影響範囲

- 対象ユーザー: xAI API の動画生成利用者
- 対象プラン: xAI API
- API / UI / 管理者機能: API（動画生成モデル）

## 教材化メモ

- text / image / reference の3入力に対応するのは、動画生成 API の標準的な機能セット。他社（Runway、Seedance 等）と横並びで比較する教材の材料になる
- reference-to-video は、既存素材のスタイルや被写体を引き継いだ生成。単発のクリップ生成から、一貫性のある連作の生成へ関心が移っていることを示す
- ネイティブ 1080p は、アップスケールなしでその解像度を出せるという意味。実務での使用可否を分ける条件として説明できる
- バージョン番号（1.5）が変わらないまま仕様が変わった例。「モデル名とバージョンだけで仕様を判断しない」という教訓に使える。既存記事 `src/content/ai-news/xai-grok/grok-imagine-video-1-5.mdx`（2026-06-17、720p）との差分がそのまま教材になる

## 原文確認

- 公式見出し: grok-imagine-video-1.5 modalities（July セクション）
- 公式URL: https://docs.x.ai/developers/release-notes
- 補足: 公式ページに日付表記がなく、前日チェック時点の掲載内容との差分から窓内追加と推定
- 原文全文は公式ページで確認してください。
