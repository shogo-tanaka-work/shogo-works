---
date: 2026-10-26
title: "GitHub Copilot の assisted permissions が GA"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available
fetched_at: 2026-11-02T09:40:00+09:00
published_at: 2026-10-26T22:31:30Z
date_precision: timestamp
category: release
---

# 2026-10-26 GitHub Copilot の assisted permissions が GA

## 公式内容の日本語要約

Copilot CLI、Copilot app、VS Code で assisted permissions が一般提供になった。Copilot がコマンド実行・ファイルシステムのパスへのアクセス・URL の開封について許可を求めるとき、**その要求を LLM が評価し、明確に安全と分類されたものは自動で進む。** それ以外は従来どおり利用者の承認を要する。

切り替えは CLI では `/permissions` から `assisted`、Copilot app ではモードピッカーの Tool permissions から Assisted、VS Code では権限ピッカーから Assisted permissions。

**管理者側の統制**: enterprise-managed settings で、Allow All をブロックしつつ Assisted は使わせる、あるいは Assisted だけを個別に無効化できる。新規セッションの既定権限モードも指定できる。開発者はポリシーで許された別のモードを選べる。既定が利用不可またはポリシー禁止の場合、セッションは手動承認で始まる。

## 影響範囲

- 対象ユーザー: Copilot CLI / app / VS Code の利用者
- 管理者: 既定権限モードの指定と Allow All / Assisted の個別制御が可能

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**「承認の判断自体を LLM に任せる」モードが GA になった**という点が本質で、Claude Code の auto mode と同じ方向である。安全判定を別のモデルに委ねる設計は、判定が外れたときの責任分界が論点になる。管理者が Allow All を禁じつつ Assisted を許す、という中間段を用意している点は統制設計の実例として使える。

## 原文確認

- 公式見出し: GitHub Copilot assisted permissions generally available
- 公式URL: https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available
- 原文全文は公式ページで確認してください。
