---
date: 2026-07-07
title: "Microsoft 365コネクタにWrite tools追加（メール送信・カレンダー・OneDrive/SharePoint編集）"
service: "Claude"
source: https://support.claude.com/en/articles/12138966-release-notes
fetched_at: 2026-07-09T15:42:00+09:00
published_at: 2026-07-07T00:00:00Z
date_precision: date-only
category: rollout
rollout_date: 2026-07-07
---

# 2026-07-07 Microsoft 365コネクタにWrite tools追加

## 公式内容の日本語要約

これまで検索のみだったMicrosoft 365コネクタが書き込みに対応した。メールの下書き作成・送信・整理、カレンダーイベントの管理、メールボックス設定の変更、OneDrive/SharePointでのファイル作成・更新が可能になった。読み取り・検索機能は従来通り利用可能で、Teamsアクセスは引き続き読み取り専用にとどまる。全プラン（Free/Pro/Max/Team/Enterprise）が対象だが、組織利用にはMicrosoft Entra管理者の同意と、管理者による有効化が必須。Maxプランから順次展開される。

## できるようになったこと

- メールの下書き作成・送信・整理
- カレンダーイベントの作成・管理
- メールボックス設定の変更
- OneDrive/SharePointでのファイル作成・更新
- （従来通り）メール・カレンダー・ファイルの読み取り・検索
- Teamsアクセスは引き続き読み取り専用

## 影響範囲

- 対象ユーザー: 全プラン（Free/Pro/Max/Team/Enterprise）。組織利用はMicrosoft Entra管理者の同意必須
- 対象プラン: Free/Pro/Max/Team/Enterprise（Maxプランから順次展開）
- API / UI / 管理者機能: Microsoft 365コネクタ（メール・カレンダー・OneDrive/SharePoint）、Microsoft Entra管理者同意・有効化設定

## 教材化メモ

- 「読み取り専用→書き込み対応」への拡張は、コネクタ連携教材でリスク管理（誤送信防止・権限設計）とセットで扱うべき
- 組織導入にはEntra管理者同意が必須という点は、企業導入教材の前提条件として明記すると良い

## 原文確認

- 公式見出し: Release notes
- 公式URL: https://support.claude.com/en/articles/12138966-release-notes
- 原文全文は公式ページで確認してください。
