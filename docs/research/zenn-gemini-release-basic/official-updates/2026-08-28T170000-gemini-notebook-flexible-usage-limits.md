---
date: 2026-08-28
title: "Gemini Notebook の利用上限が「1日1回リセット」から「5時間ごと・計算量ベース」へ"
service: "Gemini"
source: https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/
official_url: https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/
fetched_at: 2026-08-29T09:05:00+09:00
published_at: 2026-08-28T17:00:00Z
date_precision: timestamp
rollout_date: 2026-09-02
category: policy
---

# 2026-08-28 Gemini Notebook の柔軟な利用上限

## 公式内容の日本語要約

Google が Gemini Notebook の利用上限を**計算量に応じた柔軟な方式へ変更**すると発表した。**2026-09-02 から**、web とモバイルの一般（consumer）アカウントへ順次適用される。

変更点は3つある。

**1つめ、上限のリフレッシュ間隔が1日単位から5時間ごとへ短くなる。** 上限に当たっても最長5時間で回復するため、日中の作業が翌日まで止まらない。

**2つめ、上限の消費が「回数」ではなく「計算量」で決まるようになる。** 公式は算入要素として、**プロンプトの複雑さ、チャットの長さ、ソースの数、使った機能**を挙げている。軽い操作を多く行う使い方と、重い生成を少数行う使い方で、消費の仕方が変わる。

**3つめ、上限に当たった場合の出力の遅延実行。** Video Overview やスライドデッキのような生成物は**後回しにでき、上限が回復した時点で自動生成され、完了時に通知**される。作業を中断せずに投げておける。

**プラン別の具体的な上限値、変更前の数値、価格に関する記載はない。** 対象は一般アカウントの web / モバイルで、地域の限定には言及がない。

## できるようになったこと

- 上限が **5時間ごとにリフレッシュ**される（従来は1日単位）
- 上限の消費が **プロンプトの複雑さ・チャットの長さ・ソース数・使用機能** に応じて決まる
- 上限超過時に **Video Overview やスライドデッキの生成を予約**でき、回復後に自動実行・通知される

## 影響範囲

- 対象ユーザー: Gemini Notebook の一般アカウント利用者（web / モバイル）
- 対象プラン: 公式に明記なし（consumer アカウント全般）
- API / UI / 管理者機能: UI（利用上限の表示と遅延実行）
- 適用開始: **2026-09-02**（順次ロールアウト）

## 原文確認

- 公式見出し: We're introducing flexible usage limits for Gemini Notebook.
- 公式URL: https://blog.google/innovation-and-ai/products/gemini-notebook/new-flexible-usage-limits/
- 教材化メモ: src/content/ai-news-notes/gemini/gemini-notebook-flexible-usage-limits.mdx
- 原文全文は公式ページで確認してください。
