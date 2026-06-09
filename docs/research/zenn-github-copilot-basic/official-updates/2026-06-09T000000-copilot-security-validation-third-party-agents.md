---
date: 2026-06-09
title: "GitHub Copilot — サードパーティ製コーディングエージェントへのセキュリティ検証を提供開始"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-09-security-validation-for-third-party-coding-agents
fetched_at: 2026-06-10T07:22:57+09:00
published_at: 2026-06-09
date_precision: date-only
category: enhancement
---

# 2026-06-09 GitHub Copilot サードパーティエージェントのセキュリティ検証

## 公式内容の日本語要約

Claude・OpenAI Codex 等のサードパーティ製コーディングエージェントが生成したコードに対して、自動セキュリティ検証を提供開始した。CodeQL による脆弱性解析、GitHub Advisory Database による依存関係チェック、機密情報検出を自動実行する。デフォルト有効で、Advanced Security ライセンスは不要。2025年10月以来の実績に基づく正式ロールアウト。

## できるようになったこと

- サードパーティ製コーディングエージェント（Claude / OpenAI Codex 等）が生成したコードを自動セキュリティ検証。
- **CodeQL 脆弱性解析 / GitHub Advisory Database 依存関係チェック / 機密情報検出**を自動実行。
- **デフォルト有効**。**Advanced Security ライセンス不要**。

## 影響範囲

- 対象ユーザー: GitHub 上でサードパーティ製コーディングエージェントを使う開発者・組織
- 対象プラン: デフォルト有効（Advanced Security 不要）
- API / UI / 管理者機能: リポジトリのセキュリティ検証（CodeQL / Advisory DB / secret scanning）

## 教材化メモ

Copilot / GitHub のセキュリティ章に、サードパーティ製エージェント生成コードへの自動検証（CodeQL・Advisory DB・機密情報検出、デフォルト有効・Advanced Security 不要）を追記。AI エージェントにコードを書かせる運用での「生成物の自動セキュリティゲート」として位置づけ、人手レビューとの併用前提を示す。

## 原文確認

- 公式見出し: Security validation for third-party coding agents
- 公式URL: https://github.blog/changelog/2026-06-09-security-validation-for-third-party-coding-agents
- 原文全文は公式ページで確認してください。
