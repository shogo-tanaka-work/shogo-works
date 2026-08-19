---
date: 2026-08-18
title: "Pika が音声系モデル3種を同日公開 — Soundtrack / Music / SFX"
service: "Pika"
source: https://experiment.pika.art/blog
fetched_at: 2026-08-19T10:14:00+09:00
published_at: 2026-08-18
date_precision: date-only
---

# 2026-08-18 Pika Soundtrack / Music / SFX

## 公式内容の日本語要約

Pika が同日に音声系モデル3件を公開した。

**Pika Soundtrack** は、映像を入力として全編分の音響を生成するモデル。動きに追従する効果音、声、音楽、環境音を含み、シーン全体で同期した音響空間を作る。

**Pika Music** は音楽生成モデル。テキスト、歌詞、リファレンス音声、既存トラック、またはそれらの組み合わせから完成トラックを生成する。

**Pika SFX** は、文章による記述から効果音をリアルタイムに生成するモデル。単一のイベント音から一連の音響シーケンスまで対応する。

2026-08-14 の「Everything You Want to Hear」で予告された音声基盤モデル群の実体にあたる。

## できるようになったこと

- 映像からシーン同期の音響を生成（Soundtrack）
- テキスト・歌詞・リファレンスからの楽曲生成（Music）
- 記述からのリアルタイム効果音生成（SFX）

## 影響範囲

- 対象ユーザー: 映像制作者、コンテンツ制作者
- 対象プラン: 記載を確認できていない
- API / UI / 管理者機能: 記載を確認できていない

## 教材化メモ

- **映像生成ツールが音まで一気通貫で持つ流れ**の一例。ByteDance Seed Audio 1.0（2026-07-20）、Runway の Seed Audio 1.0 対応（2026-06-29）と並べると、2026年後半の動画生成領域における音声統合の潮流として説明できる。
- **記事化は不可**。`src/content.config.ts` の `aiNews.tool` enum に `pika` が無いため、現状のスキーマでは速報記事を作れない。enum 追加を行う場合は `src/content.config.ts` / `src/types/index.ts` / `src/data/aiNews.ts` の3ファイルをまとめて更新する必要がある。
- Pika 公式 blog は `pika.art/blog` から `experiment.pika.art/blog` へ 307 リダイレクトする。`source-catalog.md` の Pika 節は未更新のまま（2026-08-18 レポートの補足メモ参照）。

## 原文確認

- 公式見出し: Introducing Pika Soundtrack / Introducing Pika Music / Now Hear This: Pika SFX
- 公式URL: https://experiment.pika.art/blog
- 原文全文は公式ページで確認してください。
