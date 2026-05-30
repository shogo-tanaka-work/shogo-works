---
date: 2026-05-29
title: "Google Workspace — CSE Slides の Vault / Takeout エクスポート後 PowerPoint 変換がベータ提供（Enterprise Plus / Education Standard・Plus / Frontline Plus / Assured Controls 対象）"
service: "Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/05/available-in-beta-convert-your-client-side-encrypted-Slides-after-a-Vault-or-Takeout-export.html
fetched_at: 2026-05-30T14:30:00+09:00
published_at: 2026-05-29T00:00:00+00:00
date_precision: date-only
category: enhancement
---

# 2026-05-29 CSE Slides PowerPoint 変換ベータ

## 公式内容の日本語要約

Google は **クライアントサイド暗号化（CSE: Client-Side Encryption）された Slides** を Vault または Data Takeout でエクスポートしたあとに **PowerPoint 形式へ変換** できる機能をベータ提供開始した。これまで CSE Documents・CSE Sheets では同等の変換が可能だったが、**Slides まで対応領域が広がった**。

対象プランは **Enterprise Plus、Education Standard / Plus、Frontline Plus、Assured Controls、Assured Controls Plus**。利用には管理者が **CSE Office Interop beta** プログラムに登録され、Google から承認される必要がある。承認済み組織はベータ機能が即時利用可能。

## できるようになったこと

- CSE Slides を Vault エクスポートで取り出し → 復号して PowerPoint (.pptx) 形式へ変換できる。
- Data Takeout 経由でユーザー単位のエクスポートにも対応。
- ガバナンス / コンプライアンス要件下で **「データを別形式で持ち出して利用継続」** のシナリオが Slides で完結。

## 影響範囲

- 対象ユーザー: CSE を運用する Enterprise Plus / Education / Frontline Plus / Assured Controls 管理者
- 対象プラン: 上記限定プラン
- API / UI / 管理者機能: Vault エクスポート、Data Takeout、CSE Office Interop beta（要事前承認）

## 教材化メモ

CSE / Vault / DLP 関連の教材があれば「Slides の可搬性」を **CSE Documents・CSE Sheets と並列の節** として追加。Assured Controls 系プランで Slides を業務利用している組織にとっては監査・退職時データ持ち出し管理に直結する。

## 原文確認

- 公式見出し: "Available in beta: Convert your client-side encrypted Slides after a Vault or Takeout export"
- 公式URL: https://workspaceupdates.googleblog.com/2026/05/available-in-beta-convert-your-client-side-encrypted-Slides-after-a-Vault-or-Takeout-export.html
