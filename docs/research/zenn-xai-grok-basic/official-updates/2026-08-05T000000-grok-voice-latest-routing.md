---
date: 2026-08-05
title: "grok-voice-latest が Grok Voice Think Fast 2.0 へルーティング開始"
service: "xAI / Grok"
source: https://docs.x.ai/docs/release-notes
fetched_at: 2026-08-06T18:30:00+09:00
published_date: 2026-07
date_precision: date-only
rollout_date: 2026-08-05
category: rollout
---

# 2026-08-05 grok-voice-latest のルーティング切り替え

## 公式内容の日本語要約

xAI の release notes に記載のとおり、エイリアスモデル `grok-voice-latest` が 2026-08-05 から新音声モデル「Grok Voice Think Fast 2.0」へルーティングされる。Think Fast 2.0 自体の発表は 7 月中で、Speech to Speech に対応する。

発表日は窓外だが、切り替え日が窓内に明記されているためロールアウトとして記録する。`grok-voice-latest` を固定せずに使っているアプリケーションは、この日を境に実際に呼ばれるモデルが変わる。

## できるようになったこと

- `grok-voice-latest` の指す実体が Grok Voice Think Fast 2.0 になった（2026-08-05 から）

## 影響範囲

- 対象ユーザー: xAI API で `grok-voice-latest` を指定している開発者
- 対象プラン: xAI API
- API / UI / 管理者機能: API のモデルエイリアス

## 教材化メモ

- `*-latest` エイリアスは便利だが、切り替え日に挙動が変わる。バージョン固定とエイリアス利用のトレードオフを説明する実例として、API 教材の「モデル指定」節で使える。
- 速報記事化はしない（影響範囲が限定的で、機能追加ではなくエイリアスの向き先変更のため）。

## 原文確認

- 公式見出し: Grok Voice Think Fast 2.0
- 公式URL: https://docs.x.ai/docs/release-notes
- 原文全文は公式ページで確認してください。
