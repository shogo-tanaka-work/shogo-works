---
date: 2026-09-24
title: "Compliance API の Activity Feed からファイル名・プロジェクト文書名・アーティファクト名が消えた（過去分も含む）。Microsoft 365 のローカルセッション endpoint はベータ解除"
service: "Claude Platform / Compliance API"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-09-26T09:10:00+09:00
published_at: 2026-09-24
date_precision: date-only
category: policy
---

# 2026-09-24 Compliance API の Activity Feed から名称フィールドが削除（追補記録）

## 公式内容の日本語要約

**本エントリは 2026-09-26 実行時の追補記録である。** Claude Platform の API Release Notes は 2026-09-24 の日付見出しの下に複数の更新を持ち、前日（2026-09-25）の日次巡回では同じ見出しのうち拒否課金の変更のみを記録していた。**同じ日付見出しの下にある Compliance API の変更が記録から漏れていた**ため、ここで追補する。

変更は2点ある。

1つ目は **Activity Feed から名称フィールドが消えたこと**である。Compliance API の Activity Feed は、**ファイル名、プロジェクト文書名、アーティファクトのタイトルを返さなくなった**。`filename` と `title` フィールドは空になるか省略される。**この扱いは過去のアクティビティにも遡って適用される**（"including historical ones"）。名称が必要な場合は、`read:compliance_user_data` スコープを持つ Compliance Access Key を使って ID から引き直す。

2つ目は **Claude for Microsoft 365 のローカルセッション endpoint がベータを抜けたこと**である。対象は Excel、PowerPoint、Word、Outlook のセッション。

1つ目は**取得できる情報が減る後退方向の変更**であり、しかも遡及する。Activity Feed のファイル名を前提に監査ログの検索・分類・DLP 判定を組んでいる実装は、**過去分の再取得でも名称が取れなくなる**。ID から名称を引く経路が追加で必要になり、そのためのスコープ付きキーの発行と管理も増える。

教材化メモ: src/content/ai-news-notes/claude/compliance-api-activity-feed-names-removed.mdx

## できるようになったこと / できなくなったこと

- できなくなった: Activity Feed のレスポンスから `filename` / `title` を直接読むこと（過去分も含む）
- 代替手段: `read:compliance_user_data` スコープの Compliance Access Key で ID から名称を引く
- ベータ解除: Claude for Microsoft 365（Excel / PowerPoint / Word / Outlook）のローカルセッション endpoint

## 影響範囲

- 対象ユーザー: Compliance API を使う Enterprise 管理者・監査担当・eDiscovery 実装者
- 対象プラン: Compliance API を利用できる Enterprise 相当
- API / UI / 管理者機能: Compliance API（Activity Feed のレスポンス項目、ローカルセッション endpoint）

## 原文確認

- 公式見出し: September 24, 2026（Compliance API / Refusal billing を含む日付見出し）
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 原文全文は公式ページで確認してください。
