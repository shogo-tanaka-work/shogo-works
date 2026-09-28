---
date: 2026-09-21
title: "GitHub Copilot に Grok 4.7 を追加。Pro 以上で選択可"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-21-grok-4-7-is-now-available-in-github-copilot
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-21
date_precision: date-only
category: release
---

# 2026-09-21 GitHub Copilot に Grok 4.7

## 公式内容の日本語要約

xAI の **Grok 4.7** が GitHub Copilot のモデル選択に追加された。同日 09-25 の週次リリースまとめ（"GitHub Copilot weekly releases — September 21"）では、**Grok 4.7 の提供対象は Pro 以上**と整理されている。

同じ週に GPT-6 Sol / GPT-6 Luna / Claude Opus 5.5 も追加されており、**今週のモデル追加は計4件**である。xAI 側の一次情報（`docs.x.ai` の release notes）では Grok 4.7 は同日リリースで、`grok-4.7` slug・500k コンテキスト・reasoning effort の4段階（low / medium / high 既定 / xhigh）が公開されている（詳細は `../zenn-xai-grok-basic/official-updates/2026-09-21T000000-grok-4-7.md`）。

**Business / Enterprise では、モデルポリシーで無効化している組織は自動では有効にならない。** 前週までに記録した 10-02 / 10-19 の廃止対象には **Grok 4.5** が含まれており、**Grok 系を使っている組織は 4.7 への移行がそのまま廃止対応になる。**

## できるようになったこと

- Copilot のモデルピッカーから Grok 4.7 を選べる（Pro 以上）

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者
- 対象プラン: Pro 以上
- API / UI / 管理者機能: Business / Enterprise はモデルポリシーの設定に従う

## 教材化メモ

- **モデル追加告知は、同時に廃止対応の期限表と突き合わせて読む。** Grok 4.5 は 10-19 廃止対象であり、4.7 の追加はその代替提示でもある。追加告知だけを見ると「選択肢が増えた」に見えるが、実務では「乗り換え先が示された」と読むほうが正確である。

## 原文確認

- 公式見出し: Grok 4.7 is now available in GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-09-21-grok-4-7-is-now-available-in-github-copilot
- 原文全文は公式ページで確認してください。
