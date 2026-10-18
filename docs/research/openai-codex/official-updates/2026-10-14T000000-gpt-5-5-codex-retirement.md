---
date: 2026-10-14
title: "GPT-5.5 が Codex から退役 — ChatGPT サインインのセッションのみ対象、2026-10-14 正午 PDT に発効"
service: "OpenAI Codex"
source: https://learn.chatgpt.com/docs/changelog
fetched_at: 2026-10-15T09:20:00+09:00
published_date: 2026-10-14
date_precision: date-only
category: policy
---

# 2026-10-14 Codex: GPT-5.5 の退役が発効

## 公式内容の日本語要約

Codex の changelog に **2026-10-14 付けのエントリ**が出た。**2026年10月14日正午 PDT（19:00 UTC）に、ChatGPT でサインインしているユーザーの Codex から GPT-5.5 が退役する**という内容である。

**退役の予告は 2026-09-14 に出ていた。** 本日のエントリは発効の告知にあたる。予告から発効まで30日である。

**影響範囲が認証方式で分かれる。** **ChatGPT アカウントでサインインした Codex セッションが対象**で、**OpenAI API および API キーで認証した Codex セッションは影響を受けない。** 同じ Codex でも入り方によって挙動が変わる。

**推奨移行先は `gpt-6.1-sol`（GPT-6.1 Sol）**で、プランとクライアントで利用可能な場合に限る。エントリはプラン別の移行先詳細と、ワークスペースのモデル利用可否に関する管理者向けガイダンスへリンクしている。

**棚卸し対象が広い。** エントリは `gpt-5.5` を選択している箇所として、**ワークスペースの既定値、保存済みモデル設定、managed configuration、カスタムエージェント、スケジュール済みタスク、スクリプト**を挙げている。**人が手で選ぶ場所だけでなく、無人で走る構成に埋まっている指定も対象になる。**

## できるようになったこと

- 該当しない（退役告知である）

## 影響範囲

- 対象ユーザー: ChatGPT アカウントでサインインしている Codex 利用者
- 対象外: OpenAI API、および API キーで認証した Codex セッション
- 対象プラン: プラン別の移行先はリンク先の公式ガイド参照。GPT-6.1 Sol の利用可否はプランとクライアントに依存する
- API / UI / 管理者機能: Codex の UI・設定・managed configuration。管理者はワークスペースのモデル利用可否を確認する必要がある
- 期限: **2026-10-14 正午 PDT（19:00 UTC）に発効済み**

教材化メモ: src/content/ai-news-notes/codex/gpt-5-5-codex-retirement.mdx

## 原文確認

- 公式見出し: GPT-5.5 retirement in Codex（2026-10-14）
- 公式URL: https://learn.chatgpt.com/docs/changelog
- 原文全文は公式ページで確認してください。
