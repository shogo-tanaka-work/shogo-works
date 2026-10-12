---
date: 2026-10-08
title: "Copilot code review に組織課金と実行者制限。既定は「メンバー個人の枠」で、枯渇するとレビューが失敗する"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls
fetched_at: 2026-10-12T09:50:00+09:00
published_at: 2026-10-08
date_precision: date-only
category: policy
---

# 2026-10-08 Copilot code review の組織課金と実行者制限

## 公式内容の日本語要約

Copilot code review に管理者向けの制御が2つ入った。

**1. ライセンス保有メンバーの課金先を選べる。** 既定では、レビュー要求は**要求したメンバー自身の Copilot 枠**に課金される。organization owner はこれを**リポジトリを所有する organization への課金**へ切り替えられ、メンバーの枠を消費しないようにできる。設定名は「Choose how members with a Copilot license are billed」で、選択肢は2つ。**Member（既定）**はメンバー自身の枠を使い、**枠が枯渇するとレビューは失敗する**。**Organization** は所有 organization へ課金し、**AI Credits の有償利用を有効化しておく必要がある**（予算の設定は任意）。

**2. レビュー要求できる人を制限できる。** organization owner とリポジトリ管理者が「Only allow Copilot code review to be triggered by authorized users」を有効化できる。有効時は、**organization / enterprise の外のライセンス（個人ライセンスなど）でレビューを要求できなくなる。** organization レベルで owner が有効化した場合、**リポジトリ管理者は無効化できない。**

管理者の作業は、organization settings の **Copilot → Policies** で課金方式を選ぶこと（既定は Member のまま）。Organization 課金を選ぶなら AI Credits の有償利用を有効化し、必要なら予算を置く。実行者制限は任意で有効化する。個人リポジトリ、自動レビュー、API 要求への適用範囲は Copilot code review のドキュメントを参照するよう案内されている。

**発効日・期限の記載は無い。**

## できるようになったこと

- レビュー要求の課金先を organization へ寄せ、メンバーの枠を保護できる
- 外部ライセンスからのレビュー要求を拒否できる

## 影響範囲

- 対象ユーザー: organization owner、リポジトリ管理者、Copilot ライセンス保有メンバー
- 対象プラン: プラン名の明示なし。Organization 課金は AI Credits 有償利用が前提
- API / UI / 管理者機能: organization settings > Copilot > Policies

## 教材化メモ

- **既定が「メンバー個人の枠」で、枯渇するとレビューが失敗する**という点が実務上いちばん効く。**CI にレビューを組み込んでいる場合、特定メンバーの枠切れで落ちる**経路が既定のまま残る。**「誰の財布で動いているか」を自動化の前提条件として書き出す**という教材になる。
- **「organization レベルで有効化するとリポジトリ側で外せない」という上位優先の設計**は、権限モデルの説明に使える良い形である。下位で緩められる統制は統制にならない。
- **外部の個人ライセンスで組織リポジトリのレビューを要求できていた**という事実が、裏返しの論点になる。**課金の経路が、そのままアクセスの経路になっている。**

## 原文確認

- 公式見出し: Copilot code review: New organization billing options and controls
- 公式URL: https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls
- 原文全文は公式ページで確認してください。
