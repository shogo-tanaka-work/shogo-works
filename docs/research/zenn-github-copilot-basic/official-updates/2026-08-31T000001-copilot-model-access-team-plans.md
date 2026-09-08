---
date: 2026-08-31
title: "GitHub Copilot — Team プランのモデルアクセスは請求元 Organization が決める方式へ"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-31-copilot-model-access-update-for-github-team-plans
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-08-31
date_precision: date-only
category: policy
---

# 2026-08-31 GitHub Copilot Team プランのモデルアクセス変更

## 公式内容の日本語要約

複数の Organization で Copilot seat を持つ利用者について、**利用可能なモデルの決定方法が変わった**。従来は**所属するいずれかの Organization が有効化していれば、そのモデルを使えた**。変更後は「**請求元の Organization がモデルアクセスを決める**」方式になる。請求元は Copilot features ページの `Usage billed to` で確認できる。

**Copilot アクセスが Enterprise（またはその配下の Organization）経由で完結している場合は、本変更の影響を受けない**と明記されている。

公式ページ上、発効日は公開日以外に明示されていない。管理者向けの具体的な作業指示も記載がない。

## できるようになったこと

- （アクセス判定方式の変更。新機能なし）

## 影響範囲

- 対象ユーザー: **複数 Organization にまたがって Copilot seat を持つ利用者**
- 対象プラン: GitHub Team プラン。Enterprise 経由のアクセスは対象外
- API / UI / 管理者機能: モデルセレクタに出る選択肢が変わりうる

## 教材化メモ

- **権限が「いずれかで許可されていれば通る（OR）」から「特定の1つが決める」へ変わった**という構造の変更である。OR 合成は緩い方向へ倒れやすく、統制側からは穴になる。**複数所属の主体に対して権限をどう合成するか**は、SaaS のマルチテナント設計で必ず出る論点であり、この事例はその実物として使える。
- 利用者から見ると**何もしていないのに使えるモデルが減りうる**変更である。「請求元がどこか」を意識して使っている人はまずいない。**課金の構造がそのまま機能の可否になる**という点は、SaaS 調達の教材で扱う価値がある。

## 原文確認

- 公式見出し: Copilot model access update for GitHub Team plans
- 公式URL: https://github.blog/changelog/2026-08-31-copilot-model-access-update-for-github-team-plans
- 原文全文は公式ページで確認してください。
