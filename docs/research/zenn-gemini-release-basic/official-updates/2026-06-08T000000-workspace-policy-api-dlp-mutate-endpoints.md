---
date: 2026-06-08
title: "Google Workspace — Workspace Policy API に DLP の書き込み（Create/Update/Delete）エンドポイントを追加"
service: "Google Workspace / Gemini"
source: https://workspaceupdates.googleblog.com/2026/06/introducing-workspace-policy-api-mutate-endpoints-for-DLP.html
fetched_at: 2026-06-09T10:37:42+09:00
published_at: 2026-06-08
date_precision: date-only
category: enhancement
---

# 2026-06-08 Workspace Policy API DLP mutate エンドポイント

## 公式内容の日本語要約

Google Workspace の Policy API に、DLP（データ損失防止）ルールとディテクタの Create / Update / Delete（書き込み）エンドポイントが追加された。これまでの Get / List（読み取り専用）と組み合わせ、DLP ポリシーのライフサイクル全体を API で自動管理できる。対象は Drive / Gmail / Chat / Chrome の機密情報スキャン。操作できるのはスーパー管理者のみ。

## できるようになったこと

- Workspace Policy API に **DLP ルール／ディテクタの Create / Update / Delete** エンドポイントを追加。
- 既存の Get / List と合わせて、DLP ポリシーの**フルライフサイクルを API で自動管理**可能に。
- 対象範囲: Drive / Gmail / Chat / Chrome の機密情報スキャン。
- 操作権限: **スーパー管理者のみ**。

## 影響範囲

- 対象ユーザー: Workspace 管理者（DLP を IaC / 自動化で管理したい組織）
- 対象プラン: 全 Google Workspace プラン。Rapid Release / Scheduled Release 両ドメインに即日展開。
- API / UI / 管理者機能: 管理者向け API（Policy API）。

## 教材化メモ

Workspace のガバナンス／管理自動化章に、Policy API の DLP 書き込みエンドポイント（Create/Update/Delete）を追記。これまで管理コンソール手動運用だった DLP ルールを「コードで定義・レビュー・反映」する IaC 的運用例（バージョン管理・差分レビュー・複数環境への一括反映）を示す。スーパー管理者権限が前提である点を明記。

## 原文確認

- 公式見出し: Introducing Workspace Policy API mutate endpoints for DLP
- 公式URL: https://workspaceupdates.googleblog.com/2026/06/introducing-workspace-policy-api-mutate-endpoints-for-DLP.html
- 原文全文は公式ページで確認してください。
