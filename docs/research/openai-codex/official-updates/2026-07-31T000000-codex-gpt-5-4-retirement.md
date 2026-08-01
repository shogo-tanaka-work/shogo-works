---
date: 2026-07-31
title: "Codex から GPT-5.4 / GPT-5.4 mini が 2026-08-31 に退役"
service: "OpenAI Codex"
source: https://learn.chatgpt.com/docs/changelog
fetched_at: 2026-08-01T15:10:00+09:00
published_at: 2026-07-31
date_precision: date-only
category: policy
rollout_date: 2026-08-31
---

# 2026-07-31 Codex の GPT-5.4 / GPT-5.4 mini 退役予告

## 公式内容の日本語要約

ChatGPT / Codex の changelog に、GPT-5.4 と GPT-5.4 mini が 2026-08-31 に Codex から退役する旨が掲載された。対象は ChatGPT 認証のユーザー。OpenAI API 経由および API キーによるセッションでは引き続き利用できる。

推奨される移行先は次のとおり。

- `gpt-5.4` → `gpt-5.6-terra`（GPT-5.6 Terra）
- `gpt-5.4-mini` → `gpt-5.6-luna`（GPT-5.6 Luna）

期限までに更新が必要な対象として、ワークスペースの既定モデル、保存済み設定、管理された構成（managed configurations）、カスタムエージェント、スケジュール済みタスクが挙げられている。

## できるようになったこと

- （機能追加ではなく退役予告）

## 影響範囲

- 対象ユーザー: ChatGPT 認証で Codex を使う利用者。API キーセッションは対象外
- 対象プラン: ChatGPT 認証を伴う Codex 利用全般
- API / UI / 管理者機能: ワークスペース既定モデル、保存済み設定、managed configurations、カスタムエージェント、スケジュール済みタスク
- 期限: 2026-08-31

## 教材化メモ

- モデル名をハードコードした設定が複数箇所（既定モデル・カスタムエージェント・スケジュール済みタスク）に散らばると、退役時の棚卸しが重くなる。「モデル指定を1箇所に寄せる」という設計指針の実例として使える
- ChatGPT 認証と API キーで退役タイミングが異なる点は、認証経路によって提供条件が変わる例として教材化できる
- 移行先（Terra / Luna）は 2026-07-30 に値下げされたモデルでもあるため、退役と価格改定をセットで説明できる

## 原文確認

- 公式見出し: GPT-5.4 and GPT-5.4 mini retiring from Codex
- 公式URL: https://learn.chatgpt.com/docs/changelog
- 原文全文は公式ページで確認してください。
