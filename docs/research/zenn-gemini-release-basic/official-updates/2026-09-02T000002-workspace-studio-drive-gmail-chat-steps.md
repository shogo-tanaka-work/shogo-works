---
date: 2026-09-02
title: "Workspace Studio に Drive / Gmail / Chat の新ステップ4種を追加"
service: "Gemini / Workspace"
source: https://workspaceupdates.googleblog.com/2026/09/automate-drive-gmail-and-google-chat-actions-with-new-steps-in-Workspace-Studio.html
fetched_at: 2026-09-03T09:29:00+09:00
published_at: 2026-09-02
date_precision: date-only
rollout_date: 2026-09-08
category: enhancement
---

# 2026-09-02 Workspace Studio の新ステップ4種

## 公式内容の日本語要約

Workspace Studio の Flows に、**4つの自動化ステップ**が追加された。いずれも Drive / Gmail / Chat の操作を Flow の中から直接行うためのもので、これまで手作業に残っていた部分をつなぐ位置づけである。

追加されたのは次の4つ。**Drive のファイル / フォルダのコピー**（テンプレート作成や受付フローの定型化に使う）、**Drive のファイル / フォルダの移動**（手作業なしでの整理）、**メールへの返信**（既存スレッド内で文脈を保ったまま自動応答する）、**Chat への返信**（スペースやスレッドへ投稿、**Markdown 対応**）である。

ロールアウトは Drive / Chat 系と Gmail 系で分かれている。**Drive / Chat ステップは管理者制御が 2026-09-01〜09-05、機能本体が 2026-09-08〜09-11**。**Gmail ステップは管理者制御が 2026-09-08〜09-12、機能本体が 2026-09-14〜09-17** である。

対象エディションは **Business Starter / Standard / Plus、Enterprise Standard / Plus、Education Fundamentals / Standard / Plus**、およびアドオン（Google AI Pro for Education、Teaching and Learning、AI Expanded Access）。

管理者は**ステップごとに個別に無効化でき、外部へデータが共有されうる操作についてはユーザー承認を必須にできる**。

## できるようになったこと

- Flow から **Drive ファイル / フォルダのコピーと移動**
- Flow から **メールスレッドへの返信**と **Chat スペース / スレッドへの返信**（Markdown 対応）
- 管理者による**ステップ単位の無効化**と**外部共有時のユーザー承認要求**

## 影響範囲

- 対象ユーザー: 上記エディションの Workspace 利用者
- 対象プラン: Business / Enterprise Standard 以上 / Education 各種 + AI アドオン
- API / UI / 管理者機能: **ステップ単位の管理者制御あり**。承認要求の設定あり

教材化メモ: src/content/ai-news-notes/gemini/workspace-studio-drive-gmail-chat-steps.mdx

## 原文確認

- 公式見出し: Automate Drive, Gmail and Google Chat actions with new steps in Workspace Studio
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/automate-drive-gmail-and-google-chat-actions-with-new-steps-in-Workspace-Studio.html
- 原文全文は公式ページで確認してください。
