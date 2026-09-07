---
date: 2026-09-01
title: "GitHub Copilot — code review が Pull Request を承認できるように（既定オフ・public preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-09-01
date_precision: date-only
category: release
---

# 2026-09-01 Copilot code review の PR 承認

## 公式内容の日本語要約

Copilot の code review に**承認判定（approval assessment）**が加わり、その PR が承認可能かを示すようになった。有効化した場合、**Copilot の承認はリポジトリの必須承認数（required approvals）にカウントされる。**

**既定はオフ**である。公式は "The ability for Copilot to approve is off by default and configurable at the enterprise, organization, and repository level." と明記している。制御は3階層。

- **Enterprise**: Enterprise 全体で許可 / 禁止
- **Organization**: 組織全体で有効化、リポジトリへ委譲、全面無効のいずれか
- **リポジトリ**: 承認のオン / オフと、Copilot がレビューしてよいファイルパスの指定

**新しいコミットが push されると Copilot の承認は自動的に取り消される**（人間のレビュアーと同じ挙動）。再レビューは任意に要求できる。

提供は **public preview**。対象は Copilot Pro / Pro+ / Max / Business / Enterprise。

## できるようになったこと

- Copilot の code review が PR を承認し、必須承認数に算入される
- Enterprise / Organization / リポジトリの3階層で承認可否を制御する
- リポジトリ単位で Copilot がレビューするファイルパスを限定する

## 影響範囲

- 対象ユーザー: PR レビューに Copilot を使っている開発チーム
- 対象プラン: Pro / Pro+ / Max / Business / Enterprise（public preview）
- API / UI / 管理者機能: **ブランチ保護の必須承認数の意味が変わりうる**

## 教材化メモ

- **これは「AI がレビューする」から「AI が承認権を持つ」への一線を越える変更である。** 必須承認数にカウントされるということは、**required approvals = 1 のリポジトリでは、人間が一度も見ないまま merge できる**ことを意味する。既定オフかつ3階層で制御可能という設計は妥当だが、**有効化の判断はガバナンスの判断**であり、技術判断として現場に降ろすべきではない。
- **新しいコミットで承認が失効する**という挙動を人間と揃えた点は良い設計。承認の意味は「このコードを見た」であって「この PR を信頼する」ではない、という原則が保たれている。
- 統制設計の教材として、**「誰が承認できるか」ではなく「何が承認としてカウントされるか」を管理する**という視点を出せる。監査で問われるのは後者である。

## 原文確認

- 公式見出し: Copilot code review can now approve pull requests
- 公式URL: https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests
- 原文全文は公式ページで確認してください。
