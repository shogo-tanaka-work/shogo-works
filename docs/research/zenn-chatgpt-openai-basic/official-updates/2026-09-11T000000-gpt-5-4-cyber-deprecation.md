---
date: 2026-09-14
title: "gpt-5.4-cyber が 2026-10-01 に API から退役、後継は gpt-5.6-cyber — Upcoming deprecations へ追加"
service: "OpenAI API"
source: https://developers.openai.com/api/docs/deprecations
fetched_at: 2026-09-15T09:05:00+09:00
published_at: 2026-09-11T00:00:00Z
date_precision: date-only
rollout_date: 2026-10-01
category: policy
---

# 2026-09-14 gpt-5.4-cyber の退役（2026-10-01）

## 公式内容の日本語要約

OpenAI の Deprecations ページの **Upcoming deprecations 最上段に `gpt-5.4-cyber` が追加された。** announcement date は **2026-09-11**、shutdown date は **2026-10-01**、推奨移行先は **`gpt-5.6-cyber`** である。

**窓の扱いについて注記が必要である。** announcement date は 09-11 で本日の窓（09-14T09:02 → 09-15T09:02 JST）の外だが、**前日 09-14 の巡回時点では Upcoming deprecations の最上段は 2026-08-26 の Transcription models であり、この行は存在しなかった**（`docs/research/daily-ai-updates/2026-09-14.md` に記録済み）。**公式ページ上に現れたのが本日の窓の中である**ため、追補として本日の更新に含める。announcement date と掲載日がずれている可能性がある点は、ページ側の記載を尊重して `published_at` は 09-11 のまま残す。

`gpt-5.4-cyber` は OpenAI のセキュリティ特化モデル系列で、後継の `gpt-5.6-cyber` は 2026-08-10 に提供開始されている。**提供経路が Daybreak 防御プログラムの審査制ティア（Daybreak Red）に限られるため、対象となる利用者は広くない。** ただし退役までの残日数は本日時点で **16日**しかなく、対象組織には期限が切られた作業が発生する。

Upcoming deprecations の他の行（08-26 の Transcription 4モデル → 2027-02-26、07-20 の audio / realtime / transcription 群 → 2027-01-20、06-11 の GPT-5 / o3 snapshots → 2026-12-11 など）には、本日時点で変更は見られない。

## できるようになったこと

- （退役告知のため該当なし）**`gpt-5.4-cyber` を使っている場合、2026-10-01 までに `gpt-5.6-cyber` へ移行する必要がある**ことが公式ページで確定した

## 影響範囲

- 対象ユーザー: `gpt-5.4-cyber` を API 経由で利用している組織。**Daybreak Red（審査制）の参加者に限られる**
- 対象プラン: API（Daybreak 防御プログラム経由）
- API / UI / 管理者機能: API のモデル指定。期限（2026-10-01）までのモデル ID 差し替えが必要

教材化メモ: src/content/ai-news-notes/chatgpt-openai/gpt-5-4-cyber-retirement.mdx

## 原文確認

- 公式見出し: Deprecations — Upcoming deprecations（`2026-09-11` / `gpt-5.4-cyber` / `2026-10-01` / `gpt-5.6-cyber`）
- 公式URL: https://developers.openai.com/api/docs/deprecations
- 原文全文は公式ページで確認してください。
