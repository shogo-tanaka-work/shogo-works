---
date: 2026-09-14
title: "Codex と ChatGPT Work でエラー率上昇（復旧済み）"
service: "OpenAI Status"
source: https://status.openai.com/history
fetched_at: 2026-09-15T09:05:00+09:00
published_at: 2026-09-14T03:57:00Z
date_precision: date-only
category: incident
---

# 2026-09-14 Codex / ChatGPT Work のエラー率上昇

## 公式内容の日本語要約

OpenAI Status に **「Elevated error rates for Codex and ChatGPT Work」** が記録された。開始はステータスページ表示で **09-14 3:57**、影響範囲は **Codex と ChatGPT Work**。最終更新は「All impacted services have now fully recovered」で、**完全復旧済み**である。

**ステータスページの表示時刻にタイムゾーンの明記がないため、`published_at` は日付精度で扱う**（`date_precision: date-only`）。09-14 中の事象であることは確定しており、本日の窓（09-14T09:02 → 09-15T09:02 JST）に含まれる。

**本日の窓では OpenAI の status に3件の incident が並んだ**（本件、Work Mode のエラー増、Agents API の性能低下）。**このうち Codex と ChatGPT Work は本件と3件目でいずれも影響を受けている。**

## できるようになったこと

- 該当なし（障害）

## 影響範囲

- 対象ユーザー: Codex および ChatGPT Work の利用者
- 対象プラン: ステータスページに記載なし
- API / UI / 管理者機能: サービス稼働。恒久的な仕様変更を伴わない

## 教材化メモ

**単独記事にはしない（短時間 incident）。** ただし、**09-14 だけで OpenAI 側に3件の incident が集中し、そのうち2件が Codex / ChatGPT Work を巻き込んでいる**点は、可用性の説明材料として残す価値がある。「エージェント実行環境は、チャット UI より広い面で落ちる」という一般則の実例。

**業務で Codex を使う前提の教材では、「落ちたときにどう続けるか」を必ず1節置く。** ローカル実行への切り替え、作業の退避、レビュー待ちキューの扱い。復旧を待つ以外の手が用意されているかどうかで、業務影響が変わる。

## 原文確認

- 公式見出し: Elevated error rates for Codex and ChatGPT Work
- 公式URL: https://status.openai.com/history
- 原文全文は公式ページで確認してください。
