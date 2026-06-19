---
date: 2026-06-18
title: "Claude MCP コネクター — 組織一括認証管理（Enterprise beta / Team GA）"
service: "Claude (Enterprise)"
source: https://claude.com/blog/enterprise-managed-auth
fetched_at: 2026-06-19T12:00:00+09:00
published_at: 2026-06-18
date_precision: date-only
category: enhancement
---

# 2026-06-18 MCP コネクター組織一括認証管理

## 公式内容の日本語要約

Enterprise 管理者が Okta などのIDプロバイダーを通じてMCPコネクターを組織全体に一括プロビジョニングできる機能が追加された（Enterprise向けはベータ）。ユーザーは初回ログイン時に自動でコネクターへのアクセス権を取得でき、個別認証の手間が不要になる。Asana・Atlassian・Canva・Figma・Linear・Supabaseが対応済み。

## できるようになったこと

- Okta等のIDプロバイダーからMCPコネクターを組織一括でプロビジョニング
- ユーザーの初回ログイン時に自動でアクセス権付与（個別認証ステップの廃止）
- 既存のアクセス管理ワークフローへMCP管理を統合
- 対応コネクター: Asana, Atlassian, Canva, Figma, Linear, Supabase

## 影響範囲

- 対象ユーザー: Claude Team（GA） / Claude Enterprise（ベータ）の管理者・利用者
- 対象プラン: Team, Enterprise
- API / UI / 管理者機能: 管理者コンソール

## 教材化メモ

- MCPコネクターの「個別認証」問題を解決する機能。大規模組織では全員に個別認証を依頼するのが難しいため重要
- IDプロバイダー統合による一括管理は、既存のIT管理ツールに組み込みやすい

## 原文確認

- 公式見出し: Centrally manage authorization for MCP connectors
- 公式URL: https://claude.com/blog/enterprise-managed-auth
- 原文全文は公式ページで確認してください。
