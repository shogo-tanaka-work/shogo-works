---
date: 2026-06-04
title: "Google Workspace — DBSC（Chrome on Windows）GA、iOS 向けセキュリティ/管理機能のロールアウト"
service: "Gemini / Workspace"
source: https://workspaceupdates.googleblog.com/
fetched_at: 2026-06-05T11:16:48+09:00
published_at: 2026-06-04
date_precision: date-only
rollout_date: 2026-06-04
category: rollout
---

# 2026-06-04 Workspace セキュリティ（DBSC GA / iOS 管理機能）

## 公式内容の日本語要約

Google Workspace に 2026-06-04 付でセキュリティ系の更新が出た。Windows の Chrome における DBSC（Device Bound Session Credentials）が GA となり、Workspace ユーザーに対してデフォルトで有効化される。あわせて iOS デバイス向けのセキュリティ / 管理機能の段階ロールアウトが 06-04 に開始した（反映まで最大 15 日）。

## できるようになったこと

- **DBSC（Chrome on Windows）GA**: セッション Cookie を認証したデバイスにバインドし、Cookie が窃取されてもセッション乗っ取りを困難にする。Workspace ユーザーでデフォルト有効。
- **iOS セキュリティ / 管理機能のロールアウト**: 06-04 開始、反映まで最大 15 日。

## 影響範囲

- 対象ユーザー: Google Workspace ユーザー（管理者・情シス中心）。
- 対象プラン: 対象 Workspace / Google AI プラン。
- API / UI / 管理者機能: ブラウザセッションのセキュリティ、管理コンソール / デバイス管理。

## 教材化メモ

Workspace セキュリティ教材の「セッション保護」観点に DBSC を追記。Cookie 窃取（セッションハイジャック）への防御として、デフォルト有効・Windows Chrome 限定という前提を明記する。読者層が一般ユーザー / 個人中心のため、本日は AI ニュース速報記事化はせず research 記録に留める（前日の DLP 系更新と同方針）。

## 原文確認

- 公式見出し: Device Bound Session Credentials (DBSC) ... generally available / Gmail sources in Ask Gemini in Drive（※後者は 06-03 既出・前日記事化済み）
- 公式URL: https://workspaceupdates.googleblog.com/
- 原文全文は公式 Workspace Updates で確認してください。
