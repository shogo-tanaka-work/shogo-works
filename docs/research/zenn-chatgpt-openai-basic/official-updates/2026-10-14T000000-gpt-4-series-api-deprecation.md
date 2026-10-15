---
date: 2026-10-14
title: "OpenAI が GPT-4 系4モデルの API 退役を通知 — gpt-4o / gpt-4o-mini / gpt-4.1 / gpt-4.1-mini が 2027-01-14 に停止"
service: "OpenAI API"
source: https://developers.openai.com/api/docs/deprecations
fetched_at: 2026-10-15T09:20:00+09:00
published_date: 2026-10-14
date_precision: date-only
category: policy
---

# 2026-10-14 OpenAI API: GPT-4 系モデルの退役通知

## 公式内容の日本語要約

OpenAI が公式の deprecations ページへ **2026-10-14 付けのエントリ**を追加した。該当モデルを使っている開発者へ通知を行い、**2027-01-14 に API から削除する**という内容である。

**対象は特定スナップショット4系統である。** GPT-4o（`gpt-4o-2024-08-06`、`gpt-4o-2024-11-20`）、GPT-4o mini（`gpt-4o-mini-2024-07-18`）、GPT-4.1（`gpt-4.1-2025-04-14`）、GPT-4.1 mini（`gpt-4.1-mini-2025-04-14`）。**推奨移行先はいずれも `gpt-6-luna`** で、モデル別に異なる移行先は示されていない。

**GPT-4-turbo はこのエントリに含まれない。** 同ページの別エントリで、別の停止日が設定されている。**ファインチューニング済みモデルは、ベースモデルと同じ停止スケジュールに従う。**

**日付の読み方に注意が必要である。** エントリは「2026年10月14日に、対象モデルを使う開発者へ、2027年1月14日の退役と API からの削除を通知した」という構造で、**告知日が窓内、停止日が約3か月後**である。

**退役通知が重なっている局面である。** 同ページの直近エントリは 2026-10-01 に3件（GPT-5.3-Codex / GPT-5.1 / GPT-5.4-Nano、停止 2027-04-01）と text-to-speech 系（停止 2027-01-06）、2026-08-26 に transcription 系（停止 2027-02-26）、2026-07-20 にレガシー audio / realtime / transcription 系（停止 2027-01-20）。**2027年1月だけで3系統の停止日が並ぶ。**

## できるようになったこと

- 該当しない（退役告知である）

## 影響範囲

- 対象ユーザー: OpenAI API で GPT-4o / GPT-4o mini / GPT-4.1 / GPT-4.1 mini の該当スナップショットを指定している開発者
- 対象プラン: API 全般
- API / UI / 管理者機能: API。モデル ID をコード・設定・プロンプトテンプレートで固定している箇所が対象
- 期限: **2027-01-14**（停止日）。告知は 2026-10-14
- ファインチューニング済みモデルはベースモデルと同じ日に停止する

教材化メモ: src/content/ai-news-notes/chatgpt-openai/gpt-4-series-api-deprecation.mdx

## 原文確認

- 公式見出し: 2026-10-14: GPT-4 series model deprecations
- 公式URL: https://developers.openai.com/api/docs/deprecations
- 原文全文は公式ページで確認してください。
