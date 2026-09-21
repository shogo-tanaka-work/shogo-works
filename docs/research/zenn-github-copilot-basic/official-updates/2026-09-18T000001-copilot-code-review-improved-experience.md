---
date: 2026-09-18
title: "Copilot code review のレビュー体験を刷新。概要コメントに未解決・解決済み・見落としの3分類、コメント見出し、自動解決の理由表示"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience/
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-18T00:00:01Z
date_precision: date-only
category: enhancement
---

# 2026-09-18 Copilot code review のレビュー体験刷新

## 公式内容の日本語要約

Copilot code review に4点の変更が入り、**GA として提供**されている。

1. **概要コメントの刷新** — Copilot の現時点の評価、**レビューの effort レベル**、そして所見を **Open issues / Resolved since last review / Previously missed problems** の3分類で表示する。
2. **コメント見出し** — 各レビューコメントに**何を見つけたかを簡潔に示す見出し**が付き、優先度を一目で判断できる。
3. **自動解決の理由表示** — 対応済みかどうかで自動解決し、**`Won't Fix` / `Incorrect` のような解決理由**を出す。
4. **コミットメッセージの生成** — 提案をまとめて受け入れるとき、**選択した変更からコミットのタイトルと任意の説明を生成**する。

**`Previously missed problems`（前回のレビューで見落としていた問題）を明示する分類**が入った点が新しい。レビュアー自身の取りこぼしではなく、**Copilot 自身の前回の取りこぼしを自己申告する枠**である。

## できるようになったこと

- 未解決・解決済み・前回の見落としを分けて把握する
- コメント見出しで優先度を判断する
- 自動解決の理由（`Won't Fix` / `Incorrect`）を確認する
- 受け入れた提案からコミットメッセージを生成する

## 影響範囲

- 対象ユーザー: Copilot code review の利用者・レビュアー
- 対象プラン: 記載なし（GA）
- API / UI / 管理者機能: PR 上のレビュー UI

## 教材化メモ

**`Previously missed problems` は、AI レビューの教材として単独の価値がある。** AI レビューを導入した現場でいちばん扱いにくいのは、**「前回通したものが今回指摘される」**という非決定性である。**それを不具合として隠すのではなく、分類として表に出した**のが今回の設計判断にあたる。**AI の出力は毎回同じではないという前提を UI に織り込む**という形の一例として使える。

**effort レベルの表示は、09-28 の既定変更（Lite → Balanced）と直結する。** どの effort で回ったレビューかが概要に出るようになったため、**既定変更の前後で品質差を自分の PR で観測できる。** 09-28 にどちらを選ぶかの判断材料を、告知ではなく実測で取れる、という運用手順に落とせる。

## 原文確認

- 公式見出し: Copilot code review: An improved review experience
- 公式URL: https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience/
- 原文全文は公式ページで確認してください。
