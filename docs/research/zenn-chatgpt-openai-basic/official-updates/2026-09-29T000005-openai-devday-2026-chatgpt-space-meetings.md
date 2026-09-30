---
date: 2026-09-29
title: "DevDay 2026: ChatGPT Space（共有ワークスペース）と Meetings プラグインの議事録機能"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/devday-2026-recap/
fetched_at: 2026-09-30T09:40:00+09:00
published_at: 2026-09-29
date_precision: date-only
category: release
---

# 2026-09-29 DevDay 2026: ChatGPT Space と Meetings

## 公式内容の日本語要約

**ChatGPT Space** は、**チームと ChatGPT が同じ場所でページ・スライド・タスクを共同で作る共有ワークスペース**である。個人のチャット履歴ではなく、複数メンバーと**それぞれの dots** が入る場として設計されている。提供は **Pro / Business / Enterprise** の各プランで、**デスクトップアプリと Web**。

**Meetings プラグイン**は会議の議事録を取り、**行動項目つきの要約を ChatGPT Space へ保存**する。提供は **macOS のデスクトップアプリでベータ**、**Pro と Business の全利用者**が対象で、Enterprise は近日。

運用上の条件が明記されている点が重要である。**会議参加者全員へ伝え、同意を得たうえで使う必要がある**。**音声は要約の生成が終わった時点で OpenAI 側が削除する**。

Space 内の dots は **Slack や Microsoft Teams などのアプリを利用できる**。経路を跨いでも文脈が維持されるため、Slack 側で続きを進められる。

## できるようになったこと

- チームで共有するワークスペース上でページ・スライド・タスクを作る
- 会議の議事録と行動項目を自動生成し Space に残す
- Slack / Teams と ChatGPT を跨いで同じ文脈を保つ

## 影響範囲

- 対象ユーザー: Pro / Business / Enterprise（Meetings は Pro / Business、macOS ベータ）
- 対象プラン: 上記
- API / UI / 管理者機能: **録音同意の運用ルール整備が前提になる**

教材化メモ: src/content/ai-news-notes/chatgpt-openai/chatgpt-space-and-meetings-notetaker.mdx

## 原文確認

- 公式見出し: DevDay 2026 Recap
- 公式URL: https://openai.com/index/devday-2026-recap/
- **制約**: `openai.com` 403。内容は検索経由の報道（Engadget、runtimewire、pasqualepillitteri）で突き合わせた。
