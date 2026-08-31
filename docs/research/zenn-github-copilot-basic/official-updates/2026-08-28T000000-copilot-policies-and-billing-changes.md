---
date: 2026-08-28
title: "GitHub Copilot のポリシー・課金変更予告 — 09-01 新規受付再開、09-28 Chat 統合と code review 既定変更、10-01 シート前払い"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-08-31T09:40:00+09:00
published_at: 2026-08-28T00:00:00Z
date_precision: date-only
category: policy
---

# 2026-08-28 GitHub Copilot のポリシー・課金変更予告

## 公式内容の日本語要約

**期限が明記された告知が3系統まとめて出た。** 本週の週次確認ソースの中で、利用者側の対応期限が最も近い更新である。

**1. Copilot Business / Copilot Enterprise の課金**。2026-09-01 から、Copilot Business / Copilot Enterprise の新規契約受付を再開する。**2026-10-01 からは、クレジットカードまたは PayPal で支払っている既存顧客も、シート単位の前払いが必要になる。** 新規のシート割り当ては、支払いが済むまで利用者が Copilot を使えない。価格そのものは変更なし。シートを剥奪しても日割り返金は行われない。

**2. Copilot Chat の統合**。**2026-09-28 以降（"no earlier than"）**、github.com・GitHub Mobile・cloud agent の Copilot Chat が1つの体験に統合される。**チャットの保持期間が 28日からアカウント存続期間へ延長**される。既定で有効になり、オプトアウトすると github.com と GitHub Mobile の Copilot 自体が使えなくなる。**Business / Enterprise の管理者は 2026-09-28 までにポリシーを確認する必要がある。**

**3. Copilot code review の既定 effort 変更**。**2026-09-28 から、既定のレビュー effort が Lite から Balanced へ変わる。** Lite を維持したい組織は、**2026-09-28 までにリポジトリまたは Organization の設定で Lite を明示的に選択する**必要がある。

## できるようになったこと

- （機能追加ではなく、契約・保持期間・既定値の変更予告）

## 影響範囲

- 対象ユーザー: Copilot Business / Copilot Enterprise の管理者と契約担当。code review を使う全 Organization
- 対象プラン: Copilot Business / Copilot Enterprise（Chat 統合は github.com / Mobile の全利用者）
- API / UI / 管理者機能: 課金・ポリシー設定・チャットデータ保持期間・code review 既定値

## 期限までの残日数（2026-08-31 基準）

| 期日 | 内容 | 残日数 |
| --- | --- | --- |
| 2026-09-01 | Business / Enterprise の新規受付再開 | 1日 |
| 2026-09-28 | Copilot Chat 統合（既定ON・保持期間延長）。管理者はポリシー確認 | 28日 |
| 2026-09-28 | code review 既定 effort が Lite → Balanced。Lite 維持は明示設定が必要 | 28日 |
| 2026-10-01 | クレカ / PayPal 既存顧客のシート前払い開始 | 31日 |

## 教材化メモ

- **「オプトアウトすると機能ごと使えなくなる」という設計**は、統制の教材としてそのまま使える。統合に同意しない選択肢が「利用停止」しかない場合、それは実質的に選択肢ではない。ベンダーロックインの具体的な形として提示できる。
- **チャット保持期間が 28日からアカウント存続期間へ延びる**点は、社内規程との突き合わせが要る典型例。ログ保持期間を定めている組織は、既定ONで期間が延びることを検知できないと規程違反に気づけない。
- **既定値の変更（Lite → Balanced）に明示的なオプトアウト期限がある**のは、コスト影響のある既定変更の扱いとして参考になる。何もしない組織は自動的に高い effort へ移る。

## 原文確認

- 公式見出し: Upcoming changes to GitHub Copilot policies and billing（2026-08-28）
- 公式URL: https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/
- 一覧: https://github.blog/changelog/label/copilot/
- 原文全文は公式ページで確認してください。
