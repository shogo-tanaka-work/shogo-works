---
date: 2026-09-04
title: "GPT-6 Astra の提供拡大（Pro / Enterprise / Business Premium と API）— 公式ページ未更新"
service: "ChatGPT / OpenAI"
source: https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6-astra
fetched_at: 2026-09-05T09:30:00+09:00
published_date: 2026-09-04
date_precision: date-only
category: rollout
status: 保留（公式未確認）
---

# 2026-09-04 GPT-6 Astra の提供拡大 — 保留（公式未確認）

## 状況

2026-09-04（JST では 09-04 夜〜09-05 未明）に、GPT-6 Astra の提供範囲が Pro / Enterprise / Business Premium（ChatGPT Work と Codex）へ拡大し、API でも利用可能になったとする情報が複数の報道で流れた。Sam Altman が「messy rollout」として謝意を示し、**アクセスできなかった有料プランの利用者に対して1日につき1回の rate-limit reset をバンクする**という補償方針も示されたとされる。

**しかし本日時点で、公式ページ側にこの拡大を確認できる記載がない。**

- `openai.com/index/gpt-6-astra/` の本文は依然として「rolling out today to a limited set of organizations and over the coming days will become available to all ChatGPT Plus, Pro, Business, and Enterprise users」のまま
- `developers.openai.com/api/docs/guides/latest-model?model=gpt-6-astra` の冒頭バナーも「rolling out today for enterprises in our Trusted Access Program、access through API and our Plus, Pro, Business and Enterprise plans coming in the coming days」のまま
- `developers.openai.com/api/docs/changelog` に 2026-09-04 付のエントリなし
- `help.openai.com` の ChatGPT Release Notes / Model Release Notes は本環境から本文を取得できない（WebFetch 403、Exa 経由でも取得できたのは古いキャッシュ）

情報源は OpenAI 公式 X アカウントと社員の X 投稿を起点とした報道であり、`source-catalog.md` の二次ソース許可リスト（Bloomberg / 9to5系 / Help Net Security / TechCrunch / releasebot.io / Neowin）にも該当しない媒体が中心である。**一次ソースの URL を特定できなかったため `保留（公式未確認）` として記録し、記事化しない。**

## 傍証として確認できた公式情報

一次情報として確認できたのは、Astra が実際に配られ始めていることを示す**間接的な事実**のみである。

- OpenAI Codex `rust-v0.153.3`（2026-09-04T19:01:32Z、公式 GitHub Releases）: **Amazon Bedrock のモデルピッカーに GPT-6-Astra を追加**
- OpenAI Codex `rust-v0.153.4`（2026-09-04T23:25:48Z、同）: **バンドルのモデルピッカーで Astra を表示し、モデル未設定時の既定モデルを Astra に変更**
- `developers.openai.com` の Astra モデルガイド: 「To build with Astra, set `model` to `gpt-6-astra` in a Responses API request」と記載

Codex 側が既定モデルを Astra へ切り替えている事実は、少なくとも Codex 経由の提供が始まっていることを示す。ただしこれは ChatGPT 各プランへの提供状況を裏づけるものではない。

## 教材化メモ

「ベンダーの X 投稿が事実上のリリースノートになり、公式ページの記述が追いつかない」典型例である。企業の導入判断では、**公式ページの記述と実際の提供状況がずれる期間が数日あり得る**ことを前提に、管理者は自社テナントの設定画面で実際の可否を確認する必要がある、という運用上の教訓として扱える。Enterprise では Astra が既定オフであることも併せて押さえる。

## 原文確認

- 公式見出し（未更新のまま）: GPT‑6 Astra: A new generation of intelligence / Model guidance — GPT-6 Astra
- 公式URL:
  - https://openai.com/index/gpt-6-astra/
  - https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6-astra
  - https://github.com/openai/codex/releases/tag/rust-v0.153.4
- 次回実行時に `openai.com/index/gpt-6-astra/` と `help.openai.com` の Release Notes を再確認し、提供範囲の確定と GPT-5.6 Sol の扱い（退役予告・プロモーション価格終了日）を追う。
