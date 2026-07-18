---
date: 2026-07-17
title: "ChatGPT Enterprise/EDU — Global Admin Consoleにワークスペース単位のAdmin Keys追加"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
fetched_at: 2026-07-18T10:58:20+09:00
published_at: 2026-07-17T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-17 ChatGPT Enterprise/EDU — Admin Keys

## 公式内容の日本語要約

ChatGPT Enterprise/EDUのGlobal Admin Consoleに、ワークスペース単位で発行できるAdmin Keys機能が追加された。管理者は「Credentials > Admin keys」から、対応するChatGPT/Codex管理者APIで使えるAdmin keyを作成・管理できる。用途はグループ管理、Spend Controls API、コストレポート、分析（analytics）で、モデル推論には使用できない。利用可能な権限は管理者のワークスペースロールに依存する。あわせてGlobal Admin Consoleにクレジット・Codex分析の履歴が最大120日分表示されるようになった。なおSpend ControlsとUsage limitsタブは引き続きChatGPT側にあり、今回のGlobal Admin Console機能には含まれない。

## できるようになったこと

- ワークスペース単位のAdmin keyをGlobal Admin Consoleから発行・管理可能に
- 発行したAdmin keyでグループ管理・Spend Controls API・コストレポート・分析APIを呼び出せる
- クレジット/Codex分析の履歴を最大120日分Global Admin Consoleで閲覧可能に

## 影響範囲

- 対象ユーザー: ChatGPT Enterprise/EDUの管理者、Codex管理者APIを使う運用担当者
- 対象プラン: ChatGPT Enterprise / EDU（Global Admin Console対象組織）
- API / UI / 管理者機能: Global Admin Console（Credentials > Admin keys）、ChatGPT/Codex管理者API、Spend Controls API

## 教材化メモ

- 企業導入・IT管理者向けにAPI鍵をワークスペース単位で分離できる点は、既存のChatGPT Enterprise管理者ガイドがあれば追記価値がある。

## 原文確認

- 公式見出し: "ChatGPT Enterprise & Edu - Release Notes"（July 17, 2026エントリ）
- 公式URL: https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
- 原文全文は公式ページで確認してください（本文はWebSearch経由のスニペットで確認、直接WebFetchは403のため未実施）。
