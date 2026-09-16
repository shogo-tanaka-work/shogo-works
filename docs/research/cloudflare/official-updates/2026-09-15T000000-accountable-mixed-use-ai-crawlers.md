---
date: 2026-09-15
title: "Cloudflare が Accountable クローラー designation と Disallow AI Training 設定を公開 — 検索に残したまま学習だけ拒否できる"
service: "Cloudflare"
product: "Bots, Bot Preference Sync, Security Settings"
source: https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/
fetched_at: 2026-09-16T09:02:00+09:00
published_at: 2026-09-15
date_precision: date-only
category: release
---

# 2026-09-15 Accountable クローラーと Disallow AI Training

## 公式内容の日本語要約

Cloudflare は 2026-09-15、**検索での発見可能性を維持したまま AI 学習だけを拒否する**仕組みを公開した。中核は2つ。**Accountable という designation** と、**Disallow AI Training という新しい設定**である。

背景にあるのが **mixed-use crawler**（検索と学習を1つのクローラーで兼ねるもの）の問題である。従来は、学習を拒否しようとすると検索インデックスからも外れるというトレードオフがあり、サイト運営者は片方だけを拒否できなかった。

**Accountable の要件は4つ。**(1) robots.txt などの標準経由で AI 学習のオプトアウト手段を提供する、(2) AI 要約のオプトアウトを運営者側で直接、かつ Cloudflare 経由でも提供する、(3) どのページが学習に使われたかを URL 単位で可視化し、検索での露出指標を出す、(4) 学習のオプトアウトが検索順位に影響しないことを保証する。現時点の実装と、期限付きのコミットメントの両方が評価対象になる。

**mixed-use で Accountable と認定されたのは Apple / Google / Microsoft の3社。** Apple（Applebot）は `Disallow: Applebot-Extended` でオプトアウト可能、URL 単位の確認ツールは「来年」提供予定。Google（Googlebot）は `Disallow: Google-Extended`、追加の URL 単位の透明性ツールは「数週間のうちに」提供予定。**Microsoft（Bingbot）は robots.txt での no-training 指定への対応が「2027年初頭」目標**で、**それまでは Disallow AI Training 設定が Bing へ自動的に意思を伝えない**点が明記されている。Amazon / Anthropic / Meta / OpenAI は検索用と学習用を分離した形で Accountable に分類されている。

**Disallow AI Training を選ぶと、Bot Preference Sync が robots.txt へ no-training の意思を publish する。** Accountable な mixed-use クローラーは検索用途で通過し続け、**それ以外の学習クローラーは Amazon / Anthropic / Meta / OpenAI のものを含めてブロックされる。** 学習専用クローラーをブロックしても検索の発見可能性には影響しない。

設定は4種類。**Allow / Disallow AI Training / Block on pages with ads / Block**。Block は mixed-use も含めて全ブロックのため検索にも影響する。**Disallow AI Training が効くのは Training の挙動のみで、Search と Agent の挙動には適用されない。** Cloudflare はボットの挙動を Search / Training / Agent の3つに分類している。

**提供は全プラン・全顧客で、ドメインの Security Settings から設定する。既存顧客の設定は自動的に引き継がれる。** 旧「Block AI Bots」の設定は、Search: Allow / Training: Disallow AI Training / Agent: Block on pages with ads へ移行される。

## できるようになったこと

- 検索インデックスに残したまま、AI 学習への利用だけを拒否できる
- robots.txt への no-training 表明を Bot Preference Sync が自動で publish する
- Search / Training / Agent の挙動別に、クローラーの扱いを分けて設定できる

## 影響範囲

- 対象ユーザー: すべてのサイト運営者
- 対象プラン: 全プラン（無料含む）
- API / UI / 管理者機能: ドメインの Security Settings（UI）。既存設定は自動移行

教材化メモ: src/content/ai-news-notes/cloudflare/accountable-mixed-use-ai-crawlers.mdx

## 原文確認

- 公式見出し: Have it both ways: stay discoverable in search while disallowing AI training
- 公式URL: https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/
- 原文全文は公式ページで確認してください。
