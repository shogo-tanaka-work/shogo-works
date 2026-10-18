---
date: 2026-09-24
title: "Gemini 3.8 Live with Live Avatar — 対話に合わせて動くアバターを低遅延で生成"
service: "Gemini / Gemini Enterprise"
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/
fetched_at: 2026-09-25T09:10:00+09:00
published_at: 2026-09-24T15:30:00Z
date_precision: timestamp
category: release
---

# 2026-09-24 Gemini 3.8 Live with Live Avatar

## 公式内容の日本語要約

Google は 2026-09-24、**Gemini 3.8 Live with Live Avatar** を公開した。2026-09-15 に出た Gemini 3.8 Live（リアルタイム音声対話）に**低遅延の動画生成を組み合わせ**、対話しながら動くアバターを画面に出せるようにしたもの。公式表現では「Gemini の対話 AI にほぼリアルタイムの視覚的な存在感を与える」。

特徴は4つ。**マルチモーダル入力**として視覚と音声を同時に処理し、自然な会話を成立させる。**精密なリップシンク、自然な表情、滑らかなターンテイキング**を備える。**非同期のツール実行**に対応し、バックグラウンドで処理を走らせている間も対話が途切れない。**97言語**に対応し、会話の途中で言語が切り替わってもリップシンクが追随する。

企業向けには、**参照画像からアバターを生成できるカスタムアバター**が用意される。ブランドのアイデンティティを保ったまま独自のアバターを作れるが、**現時点では enterprise allowlisting（個別許可）制**である。

安全面では、**出力すべてに SynthID の不可視ウォーターマーク**が入り、AI 生成物であることを識別できる。

提供先は **Gemini Enterprise**。API は **Gemini Enterprise Agent Platform** 経由で利用でき、ドキュメントが提供される。公式ポストに価格および段階的ロールアウトの記載はない。

## できるようになったこと

- 対話に同期して動くアバターを低遅延で生成（リップシンク・表情・ターンテイキング）
- 視覚と音声の同時入力に対応
- 非同期のツール実行中も対話が途切れない
- **97言語**に対応。会話途中の言語切替にリップシンクが追随
- 参照画像からのカスタムアバター生成（**enterprise allowlist 制**）
- 全出力に SynthID ウォーターマーク

## 影響範囲

- 対象ユーザー: Gemini Enterprise の利用企業、Agent Platform でエージェントを作る開発者
- 対象プラン: **Gemini Enterprise**（一般消費者向けの提供は記載なし）
- API / UI / 管理者機能: Gemini Enterprise Agent Platform の API
- 未記載事項: **価格、段階的ロールアウトの日程は公式ポストに記載がない**

教材化メモ: src/content/ai-news-notes/gemini/gemini-3-8-live-avatar.mdx

## 原文確認

- 公式見出し: Introducing Gemini 3.8 Live with Live Avatar
- 公式URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-with-live-avatar/
- 補助: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/（2026-09-15、土台となる 3.8 Live の発表）
- 原文全文は公式ページで確認してください。
