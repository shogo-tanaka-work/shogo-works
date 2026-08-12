---
date: 2026-08-11
title: "Compliance API の対象が Claude Cowork と Claude Code へ拡張（Enterprise ベータ）"
service: "Claude"
source: https://claude.com/blog/compliance-api-cowork-and-claude-code
fetched_at: 2026-08-12T10:05:00+09:00
published_at: 2026-08-11
date_precision: date-only
category: enhancement
---

# 2026-08-11 Compliance API が Cowork / Claude Code をカバー

## 公式内容の日本語要約

Anthropic は、これまで Claude の通常チャットセッションに限られていた Compliance API の対象を、Claude Cowork（デスクトップ / Web / モバイル）と Claude Code（CLI / デスクトップ）へ広げた。Claude Enterprise 向けのベータ提供で、既存の Compliance Access Key をそのまま使えるため、別途の連携実装は不要である。

新設されたセッションエンドポイントは、サーバー側に保持されたトランスクリプトを統合した形で返す。内容にはプロンプトと応答、ツール呼び出しの内容（Web および MCP）、Skill が含まれる。メタデータとしては検証済みのユーザー ID とメールアドレス、組織 ID、セッション ID とメッセージ ID、タイムスタンプが返る。

カバー範囲には除外がある。Claude Code on the web、Claude Platform 経由の Claude Code、および Amazon Bedrock / Google Cloud Vertex AI / Microsoft Foundry 上のセッションは現時点で対象外である。

すでに Compliance API を有効にしている組織は、新しいエンドポイントをそのまま照会できる。未導入の組織は platform.claude.com のドキュメントから機能を有効化する。既存の OpenTelemetry エクスポートを使っている場合は併用できる。

## できるようになったこと

- Claude Cowork（デスクトップ / Web / モバイル）のセッションを Compliance API で取得できる
- Claude Code（CLI / デスクトップ）のセッションを Compliance API で取得できる
- プロンプト・応答・ツール呼び出し内容（Web / MCP）・Skill を含むトランスクリプトを統合形式で取得できる
- 検証済みユーザー ID / メール、組織 ID、セッション / メッセージ ID、タイムスタンプをメタデータとして取得できる
- 既存の Compliance Access Key をそのまま使い、追加の連携実装なしで照会できる

## 影響範囲

- 対象ユーザー: Claude Enterprise のセキュリティ・コンプライアンス担当、情シス
- 対象プラン: Claude Enterprise（ベータ）
- API / UI / 管理者機能: 管理者向け REST API（新設セッションエンドポイント）
- 対象外: Claude Code on the web、Claude Platform 経由の Claude Code、Bedrock / Vertex AI / Foundry 上のセッション

教材化メモ: src/content/ai-news-notes/claude/compliance-api-cowork-claude-code.mdx

## 原文確認

- 公式見出し: Compliance API coverage extends to Claude Cowork and Claude Code
- 公式URL: https://claude.com/blog/compliance-api-cowork-and-claude-code
- 原文全文は公式ページで確認してください。
