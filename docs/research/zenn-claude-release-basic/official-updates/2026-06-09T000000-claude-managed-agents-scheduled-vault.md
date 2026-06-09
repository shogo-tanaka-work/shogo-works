---
date: 2026-06-09
title: "Claude Managed Agents — スケジュール実行（cron）と Vault による環境変数管理をパブリックベータで追加"
service: "Claude (Anthropic)"
source: https://claude.com/blog/whats-new-in-claude-managed-agents
fetched_at: 2026-06-10T07:22:57+09:00
published_at: 2026-06-09
date_precision: date-only
category: enhancement
---

# 2026-06-09 Claude Managed Agents 新機能

## 公式内容の日本語要約

Claude Managed Agents に、スケジュール実行（cron）と Vault を使った環境変数管理の2機能がパブリックベータで追加された。定期タスク（夜間データ同期・週次コンプライアンス確認など）を自動化でき、Vault に格納した環境変数はサンドボックス内に保持されず、ネットワーク境界でのみ添付される設計でセキュリティを確保する。導入事例として Rakuten・Notion・Browserbase を紹介。

## できるようになったこと

- **スケジュール実行（cron）**: Managed Agents を定期実行可能に。夜間データ同期・週次レポート・定期コンプライアンス確認などを自動化。
- **Vault による環境変数管理**: Vault に格納した環境変数はサンドボックス内には保持されず、ネットワーク境界でのみ添付。秘密情報をエージェント実行環境に常駐させない設計。
- いずれもパブリックベータ。

## 影響範囲

- 対象ユーザー: Claude Managed Agents を業務自動化に使う開発者・企業
- 対象プラン: Managed Agents（パブリックベータ）
- API / UI / 管理者機能: エージェントのスケジューリング、秘密情報管理（Vault 連携）

## 教材化メモ

Managed Agents の運用章に、スケジュール実行（cron）と Vault 環境変数管理を追記。「定期タスクの自動化」例（夜間同期・週次レポート・定期監査）と、「秘密情報をサンドボックスに常駐させずネットワーク境界でのみ注入する」セキュリティ設計を整理する。パブリックベータ段階である点を明記。

## 原文確認

- 公式見出し: What's new in Claude Managed Agents
- 公式URL: https://claude.com/blog/whats-new-in-claude-managed-agents
- 原文全文は公式ページで確認してください。
