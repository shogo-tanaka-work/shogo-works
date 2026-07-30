---
date: 2026-07-29
title: "Grok Voice Think Fast 2.0 が Speech to Speech で利用可能（ルーティング切替は2026-08-05）"
service: "xAI / Grok"
source: https://docs.x.ai/developers/release-notes
fetched_at: 2026-07-30T09:20:00+09:00
published_at: 2026-07
date_precision: date-only
category: enhancement
rollout_date: 2026-08-05
---

# 2026-07 Grok Voice Think Fast 2.0（Speech to Speech）

## 公式内容の日本語要約

xAI の開発者向け release notes に「Grok Voice Think Fast 2.0」が Speech to Speech で利用可能になった旨が追加された。あわせて、ルーティングの更新が 2026-08-05 に予定されていると記載されている。

xAI の release notes は月単位の見出し（July / June / May）でのみ整理されており、日単位の公開日が取れない。2026-07-29 時点のチェックでは July 項目として Grok 4.5、Grok 4.5 の EU 提供、Speech to Text の `vad_threshold` の3件を確認していたため、本項目は 2026-07-29 08:55 JST 以降に追加されたと判断した。ただし公式側に日付表記がないため `date_precision: date-only`（月粒度）とする。

## できるようになったこと

- Speech to Speech で Grok Voice Think Fast 2.0 を利用できる
- 2026-08-05 にルーティングの更新が予定されている

## 影響範囲

- 対象ユーザー: xAI API の Speech to Speech 利用者
- 対象プラン: xAI API
- API / UI / 管理者機能: API（音声モデル・ルーティング）

## 教材化メモ

- 音声対話モデルの世代交代がルーティング変更として降ってくる例。モデル名を固定してもルーティング側で挙動が変わりうる点は、API 運用の注意点として教材化できる

## 原文確認

- 公式見出し: Grok Voice Think Fast 2.0（July セクション）
- 公式URL: https://docs.x.ai/developers/release-notes
- 補足: 公式ページに日付表記がなく、前日チェック時点の掲載内容との差分から窓内追加と推定。`x.ai/news` は直接フェッチが403
- 原文全文は公式ページで確認してください。
