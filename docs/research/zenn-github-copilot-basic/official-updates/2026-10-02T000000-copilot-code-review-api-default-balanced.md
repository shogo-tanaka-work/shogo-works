---
date: 2026-10-02
title: "Copilot code review が REST / GraphQL API 対応、既定 effort は 2026-09-28 から Balanced"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-10-02T00:00:00Z
date_precision: date-only
category: policy
---

# 2026-10-02 Copilot code review の API 対応と既定 effort

## 公式内容の日本語要約

変更は2つある。

**1つめは API 対応。** **REST と GraphQL の両 API から Copilot にレビューを依頼できる**ようになった。依頼時に **effort level を任意で指定**できるため、独自スクリプトやチームのワークフローへ組み込める。

**2つめは既定 effort の変更で、こちらは既に発効している。** 既定のレビュー effort が **Balanced** になった。**発効日は 2026-09-28** で、**新規・既存の両方のリポジトリと organization に適用される**。

対象は **Copilot Pro / Pro+ / Max / Business / Enterprise** で GA。

従来の **Lite** に戻したい場合の設定箇所は4階層ある。Enterprise（AI controls → Agents → Copilot code review）、Organization（Copilot → Code review）、Repository（Copilot → Code review）、Personal（Copilot settings → Copilot → Code review）。**下位の階層が上位の設定を上書きできる。**

## できるようになったこと

- REST / GraphQL API からのレビュー依頼と effort level 指定
- 4階層での既定 effort の明示設定

## 影響範囲

- 対象ユーザー: Copilot code review を使う全プランの利用者
- 対象プラン: Pro / Pro+ / Max / Business / Enterprise（GA）
- API / UI / 管理者機能: **既定 effort が Balanced へ（2026-09-28 発効済み、既存リポジトリにも適用）**

## 教材化メモ

- **前週（2026-09-28 の週次サマリー）で「本日発効」と記録した既定値変更が、実際に発効したことが公式に確認できた。** 予告を記録しておき、発効後に裏を取るという追跡の型が機能した実例である。
- **既定値の変更と、その既定を明示設定する手段の配布が、5日違いで並んでいる**（09-23 に個人設定ページが全プランへ開放、09-28 に既定変更）。「既定が変わる」と告知されたら**まず明示設定の手段を探す**という手順の正しさが、2週続けて裏づけられた。
- **effort level を API から指定できる**ようになったことで、レビューの深さをリポジトリの性質ごとに切り替える運用が書ける。本番に近いリポジトリは深く、試験用は浅く——**レビューの強度を資産の重要度に合わせる**という設計の実装手段になる。

## 原文確認

- 公式見出し: Copilot code review: API support and new default effort level
- 公式URL: https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level
- 原文全文は公式ページで確認してください。
