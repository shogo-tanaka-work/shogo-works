---
date: 2026-06-03
title: "Cursor Enterprise 向け Organizations"
service: "Cursor"
source: https://cursor.com/changelog/enterprise-organizations
fetched_at: 2026-06-04T11:04:18+09:00
published_date: 2026-06-03
date_precision: date-only
category: release
---

# 2026-06-03 Cursor Enterprise 向け Organizations

## 公式内容の日本語要約

Cursor Enterprise に、企業全体を一元管理する組織階層「Organizations / Teams / Groups」の3層構造が導入され GA。組織横断のコスト・トークン使用量の可視化、ID プロバイダーの組織レベル管理、ユーザーのマルチチーム所属に対応する。

## できるようになったこと

- **3階層管理**: Organization（企業全体の最上位コンテナ）/ Team（部門・地域単位の運用単位）/ Group（チーム横断のユーザー集合）。
- **コスト・トークン管理**: 組織全体の支出とトークン使用量を一箇所で確認。チームごとに予算を設定可能。
- **ID プロバイダー連携**: 組織レベルでの IdP 管理。
- **マルチチーム所属**: ユーザーが複数チームに所属し、チームごとに異なる役割を持てる。
- **分析ダッシュボード**: 組織全体の利用状況把握＋チーム単位のドリルダウン。

## 影響範囲

- 対象ユーザー: Cursor Enterprise の管理者・IT 部門。
- 対象プラン: Cursor Enterprise。
- API / UI / 管理者機能: 管理コンソール（管理者機能）、IdP 連携。

## 教材化メモ

Cursor 教材の「チーム/エンタープライズ運用」章に、Organizations/Teams/Groups の3階層と、組織横断のコスト・トークン管理、IdP の組織レベル管理を追記。複数部門で Cursor を展開する企業のガバナンス設計フックとして整理。

## 原文確認

- 公式見出し: Organizations for Cursor Enterprise
- 公式URL: https://cursor.com/changelog/enterprise-organizations
- 原文全文は公式ページで確認してください。
