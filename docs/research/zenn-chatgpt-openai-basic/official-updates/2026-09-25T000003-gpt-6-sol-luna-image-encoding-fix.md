---
date: 2026-09-25
title: "OpenAI、GPT-6 Sol / Luna の画像エンコーディング不具合を修正。画像入力を使う評価の再実行を推奨"
service: "ChatGPT / OpenAI"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-09-27T09:10:00+09:00
published_date: 2026-09-25
date_precision: date-only
category: enhancement
---

# 2026-09-25 GPT-6 Sol / Luna の画像エンコーディング不具合を修正

## 公式内容の日本語要約

OpenAI API の changelog に **2026-09-25 付**で1件が追加された。エントリのタグは **`Fix · Model: gpt-6-sol · Model: gpt-6-luna`** である。

公式本文は次の2段落だけである。**「Fixed a bug in image encoding that degraded image understanding in GPT-6 Sol and GPT-6 Luna. This update improves results on visual tasks in the API and Codex, including computer use.」**、そして **「If your use cases involve image inputs, we recommend rerunning your evaluations and retrying workflows affected by the issue.」**

**短いが、時系列を重ねると意味が変わる。** GPT-6 Sol と GPT-6 Luna は **2026-09-22 に公開**されたモデルである（Responses / Chat Completions 経由、テキストと画像入力に対応）。つまり**公開から3日間、画像理解が本来より劣化した状態で提供されていた**ことになる。影響は API だけでなく **Codex 側にも及び、computer use を含む**と明記されている。

**公式が明示的に求めているのは、利用者側での再実行である。** 「画像入力を使うユースケースなら、評価を再実行し、この問題の影響を受けたワークフローを再試行することを推奨する」という書き方であり、**修正の適用だけで完結しない**。公開直後に Sol / Luna を画像タスクで評価し、期待を下回ったので採用を見送った——という判断は、**その根拠が不具合側にあった可能性がある**。

**なお、不具合の内容・影響の程度・対象期間の正確な範囲について、公式は数値を出していない。** 「degraded image understanding」という定性的な記述だけである。したがって「どれだけ改善したか」を公式値で語ることはできず、**各自の再評価で確かめるしかない**構造になっている。

教材化メモ: src/content/ai-news-notes/chatgpt-openai/gpt-6-sol-luna-image-encoding-fix.mdx

## できるようになったこと

- **GPT-6 Sol / GPT-6 Luna の画像理解が、エンコーディング不具合の修正により本来の水準へ戻った**
- 改善は **API と Codex の両方**の visual task に及び、**computer use を含む**
- 公式は**画像入力を使うユースケースでの評価再実行とワークフロー再試行を推奨**している

## 影響範囲

- 対象ユーザー: GPT-6 Sol / GPT-6 Luna に画像入力を渡している API 利用者、および Codex で画面・画像を扱う利用者
- 対象プラン: API（Responses / Chat Completions）と Codex。プラン別の限定は公式に記述なし
- API / UI / 管理者機能: API 側のモデル挙動の修正。呼び出し方の変更は不要

## 原文確認

- 公式見出し: （changelog の 2026-09-25 エントリ）Fix · Model: gpt-6-sol · Model: gpt-6-luna
- 公式URL: https://developers.openai.com/api/docs/changelog
- 補足: `openai.com` / `help.openai.com` は本実行時も WebFetch で 403 だったため、API changelog を一次情報として使った。原文全文は公式ページで確認すること。
