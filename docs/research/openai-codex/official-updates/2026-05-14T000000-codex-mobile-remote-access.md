---
date: 2026-05-14
title: "Work with Codex from anywhere"
service: "OpenAI Codex"
source: https://openai.com/index/work-with-codex-from-anywhere/
fetched_at: 2026-05-15T10:18:28+09:00
published_date: 2026-05-14
date_precision: date-only
category: release
---

# 2026-05-14 Work with Codex from anywhere

## 公式内容の日本語要約

OpenAIは、CodexがChatGPT mobile app内でpreview提供されることを発表した。CodexがMac host、laptop、devbox、managed remote environmentで作業を続けている間、ユーザーはiOS / AndroidのChatGPT mobile appからthreadの開始・継続、質問への回答、方針変更、action approval、結果確認を行える。

同じ発表で、Remote SSHのGA、HooksのGA、Business / Enterprise向けprogrammatic access tokens、対象Enterprise workspaceでのlocal Codex HIPAA-compliant useも案内された。

## できるようになったこと

- ChatGPT mobile appからCodexのactive threadを確認・操作できる。
- macOS上のCodex appに接続し、QR codeでmobile側と連携できる。
- remote SSH環境でCodexを使い、phoneからsecure relay経由で操作できる。
- Hooksが全プランでGA、programmatic access tokensがBusiness / Enterpriseで利用可能。
- eligible ChatGPT Enterprise workspaceでlocal CodexのHIPAA-compliant useがサポートされる。

## 影響範囲

- 対象ユーザー: Codex利用者、ChatGPT mobile利用者、Enterprise / Business管理者
- 対象プラン: Codex mobile previewはFree / Go含む全プラン、programmatic access tokensはBusiness / Enterprise
- API / UI / 管理者機能: ChatGPT mobile app / Codex app / Remote SSH / Hooks / workspace settings

## 教材化メモ

Codex教材では、local CLI中心の説明から「host machine + mobile steering + remote environment」へ利用シーンを広げる必要がある。企業向けには、remote SSH、secure relay、programmatic access tokens、HIPAA対応を分けて扱う。

## 原文確認

- 公式見出し: Work with Codex from anywhere
- 公式URL: https://openai.com/index/work-with-codex-from-anywhere/
- 原文全文は公式ページで確認してください。
