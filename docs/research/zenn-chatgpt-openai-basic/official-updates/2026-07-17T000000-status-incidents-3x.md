---
date: 2026-07-17
title: "OpenAI Status — GitHub connectorエラー増加・新ChatGPTアプリのEnterprise Codex権限起因ログイン不可・Codex 5.6-sol過負荷エラーの3件"
service: "ChatGPT / OpenAI"
source: https://status.openai.com/
fetched_at: 2026-07-18T10:58:20+09:00
published_at: 2026-07-17T00:00:00Z
date_precision: date-only
category: incident
---

# 2026-07-17 OpenAI Status incident 3件

## 公式内容の日本語要約

同日にOpenAI Statusで3件のincidentが記録された。

1. **00:17 JST頃** GitHub connectorのエラー率上昇（Recovered）。
2. **15:32（現地表記、詳細タイムゾーン未確認）** 「New ChatGPT App Not Available For Enterprise Users Without Codex Permissions」。Codex RBACが有効化されていないEnterpriseユーザーが新ChatGPTデスクトップアプリにインストール後ログインしようとすると`codex_cli_workspace_disabled`エラーが出てログインできない不具合。本窓終了時点（fetched_at）で「Unresolved」、回避策としてChatGPT Classicの利用が案内されている。
3. **20:42（現地表記）** 「Codex 5.6-sol Experiencing Increased Server-Overload Errors」。GPT-5.6-sol向けのCodexで過負荷エラーが増加、対応後Recoveredとなった。

いずれも2026-07-09に発表されたGPT-5.6・ChatGPT Work・Codex統合デスクトップアプリ（新ChatGPTアプリ）関連の周辺トラブルで、短時間〜中時間で収束または回避策提示済み。

## できるようになったこと

（機能追加ではなくincidentのため該当なし）

## 影響範囲

- 対象ユーザー: GitHub connector利用者、Codex RBAC未設定のEnterpriseユーザー（新ChatGPTアプリ利用時）、GPT-5.6-sol利用者
- 対象プラン: ChatGPT Enterprise（Codex権限起因の事象）、Codex利用者全般
- API / UI / 管理者機能: GitHub connector、新ChatGPTデスクトップアプリのログイン、Codex（GPT-5.6-sol）実行

## 教材化メモ

- 「Enterprise Codex権限未設定だと新ChatGPTアプリにログインできない」は、Enterprise管理者向けにCodex RBAC設定を事前に確認すべき注意点として紹介価値がある。
- 短時間incidentのため単独記事化はしない。

## 原文確認

- 公式見出し: 各incidentタイトル（本文参照）
- 公式URL: https://status.openai.com/ 、https://status.openai.com/history
- 原文全文は公式ページで確認してください（status.openai.comは直接WebFetch可、詳細タイムスタンプの一部はWebFetch要約経由のため要確認）。
