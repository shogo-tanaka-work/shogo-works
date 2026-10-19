---
date: 2026-10-19
title: "grok-voice-2.0 が非推奨化。移行先は grok-voice-3.0 / grok-voice-latest（発効日の明示なし）"
service: "xAI / Grok"
source: https://docs.x.ai/docs/release-notes
fetched_at: 2026-10-19T09:58:00+09:00
published_at: 2026-10
date_precision: date-only
category: incident
---

# 2026-10 grok-voice-2.0 の非推奨化

※ **日付の精度に注意。** `docs.x.ai/docs/release-notes` は月単位の見出しのみで日付が無い。前週（2026-10-12）の週次確認では October 節にこのエントリは無かったため、**2026-10-12〜10-19 の窓内に追加された**と判断した。`date` は検出日である。

## 公式内容の日本語要約

**`grok-voice-2.0` が非推奨（deprecated）になった。** 移行は `model` を **`grok-voice-3.0` または `grok-voice-latest`** に設定するだけで、**価格は同じ**である。

**end of life の日付は示されていない。** 同じ October 節の `grok-voice-transcribe-1.0` には「reaches end of life on October 2, 2026」と明示の期日があるが、`grok-voice-2.0` には無い。**非推奨のまま期日未定の状態**である。

比較として、xAI の退役告知で期日が明示されているものは次のとおり（いずれも既記録）。

- `grok-voice-transcribe-1.0`: **2026-10-02 に EOL**（発効済み。`grok-voice-transcribe-2.0` へ同価格でルーティング）
- `grok-imagine-image-quality`: **2026-11-02 に退役**（本サマリー時点で**残14日**。`grok-imagine-image-2.0` の `quality: low` が同じ slug で応答）

## できるようになったこと

- 該当なし（非推奨告知）

## 影響範囲

- 対象ユーザー: `grok-voice-2.0` を明示指定している xAI API 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: API（モデル指定）

## 教材化メモ

- **「非推奨だが期日未定」は、棚卸しの優先度付けが難しい状態である。** 期日があるものは逆算でき、無いものは放置されやすい。**非推奨の時点で移行を済ませておく運用**の必要性を説明する素材になる。
- 同時期の xAI には**期日明示の退役が2件（10-02 発効済み、11-02 残14日）**あり、**同じベンダー内で告知の粒度が揃っていない**。一次情報の読み方として、期日の有無を毎回確認する必要がある。
- **価格が同じで移行先が1行で済む**ため、移行コストは低い。**コストが低い移行は先に済ませる**という優先順位付けの例として扱える。

## 原文確認

- 公式見出し: Grok Voice 2.0 deprecation
- 公式URL: https://docs.x.ai/docs/release-notes
- 原文全文は公式ページで確認してください。
