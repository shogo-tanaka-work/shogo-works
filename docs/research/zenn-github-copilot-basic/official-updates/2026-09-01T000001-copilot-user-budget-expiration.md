---
date: 2026-09-01
title: "GitHub Copilot — 個人ユーザー予算に有効期限を設定できるように（GA）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-01-set-an-expiration-date-for-individual-user-budgets
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-09-01
date_precision: date-only
category: enhancement
---

# 2026-09-01 個人ユーザー予算の有効期限

## 公式内容の日本語要約

個人ユーザー単位の予算（individual user budget）に**任意の有効期限**を設定できるようになった。指定日に予算が自動で削除されるため、手作業での後片付けが不要になる。

設定は3種類。

- 期限なし（既定の挙動）
- 次の請求サイクル開始時に自動削除
- UTC の特定日に削除

設定手段は請求設定の UI と、Budgets REST API の `expires_at` フィールド。**個人予算が失効した利用者は、コストセンター予算または全体予算へ自動的にフォールバック**する。期限は後から変更・解除できる。

提供は **generally available**。対象は Copilot Business / Copilot Enterprise のみ。

## できるようになったこと

- 個人予算に「次の請求サイクル開始時」または「UTC の特定日」の失効を設定する
- `expires_at`（Budgets REST API）で期限をプログラム的に管理する

## 影響範囲

- 対象ユーザー: Copilot の支出管理を行う管理者
- 対象プラン: Copilot Business / Copilot Enterprise
- API / UI / 管理者機能: 請求設定 UI、Budgets REST API

## 教材化メモ

- **一時的な例外に自動で寿命を持たせる**という設計。予算の一時増額、PoC 期間の枠、退職予定者の枠——いずれも「戻し忘れ」が常態化する種類の設定である。**期限を設定として持てること自体が統制**であり、運用手順書で「◯月◯日に戻す」と書くより確実に効く。
- **失効後にコストセンター予算・全体予算へフォールバックする**という設計も重要。**失効＝利用不能ではなく、失効＝既定へ戻る**。例外を消したときに業務が止まらないという性質は、権限の一時付与を設計するときにそのまま真似できる。
- API に `expires_at` がある点は、**IaC で予算を管理する**運用へ接続できる。

## 原文確認

- 公式見出し: Set an expiration date for individual user budgets
- 公式URL: https://github.blog/changelog/2026-09-01-set-an-expiration-date-for-individual-user-budgets
- 原文全文は公式ページで確認してください。
