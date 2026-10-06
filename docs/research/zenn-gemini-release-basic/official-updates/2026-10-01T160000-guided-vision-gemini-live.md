---
date: 2026-10-01
title: "Gemini Live に Guided Vision。カメラ映像をリアルタイムで音声説明する視覚支援機能、Android 9 以上で提供開始"
service: "Gemini / Gemini Live"
source: https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/
fetched_at: 2026-10-03T09:10:00+09:00
published_at: 2026-10-01T16:00:00Z
date_precision: timestamp
category: release
---

# 2026-10-01 Gemini Live の Guided Vision

> 本エントリは 2026-10-02 の窓（`2026-10-01T00:10:56Z → 2026-10-02T00:11:05Z`）に入るべきものだったが、前日実行で取りこぼしていた。追補として 2026-10-03 の実行で記録する。

## 公式内容の日本語要約

Google が **Gemini Live に Guided Vision** を追加した。**カメラを共有すると、リアルタイムで動的な音声説明が返る**視覚支援機能である。会話形式で動作し、周囲を探索するための**フレーミング（カメラの向け直し）の音声指示**も出す。

想定用途として、**細かい文字を読む、物を探す、細部を説明する、不慣れな場所を把握する**が挙げられている。

**開発はアクセシビリティ当事者コミュニティとの協働**で行われた。視覚情報の通訳サービス **Aira** と提携し、**数万時間ぶんの視覚データ**でモデルを学習させている。**1,000人以上の Aira Trusted Testers** が精度の調整に参加した。

**提供は 2026-10-01 開始、対象は Android 9 以上の対応端末**である。**複数言語**に対応し、**インド、ブラジル、シンガポール、インドネシア、日本**などで記述と応答の自然さを検証したとしている。

**起動経路は3つ**ある。Gemini アプリの設定、Android のユーザー補助ショートカット、**Google TalkBack との統合**である。

**制約が明示されている。Google は「医療機器、移動補助具、白杖の代替ではない」**とし、**ナビゲーションや障害物検知には使えない**と述べている。

## できるようになったこと

- カメラ越しの光景を、会話しながらリアルタイムで音声説明させられる
- TalkBack やユーザー補助ショートカットから直接呼び出せる
- 日本語を含む複数言語で利用できる

## 影響範囲

- 対象ユーザー: 視覚に困難のある利用者、アクセシビリティ担当、障害者雇用の現場
- 対象プラン: Gemini アプリ（Android 9 以上の対応端末）
- API / UI / 管理者機能: Gemini アプリ設定、Android ユーザー補助ショートカット、TalkBack

教材化メモ: src/content/ai-news-notes/gemini/guided-vision-gemini-live.mdx

## 原文確認

- 公式見出し: Guided Vision in Gemini Live: built for accessibility
- 公式URL: https://blog.google/innovation-and-ai/products/gemini-app/guided-vision-gemini-live/
- 原文全文は公式ページで確認してください。
