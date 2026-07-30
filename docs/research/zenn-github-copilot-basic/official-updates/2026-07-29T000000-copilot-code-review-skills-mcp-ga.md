---
date: 2026-07-29
title: "Copilot code review の Agent skills と MCP が一般提供（GA）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available
fetched_at: 2026-07-30T09:20:00+09:00
published_at: 2026-07-29
date_precision: date-only
category: release
---

# 2026-07-29 Copilot code review の Agent skills / MCP が GA

## 公式内容の日本語要約

Copilot code review における Agent skills と MCP サーバー対応が、public preview から一般提供（GA）に移行した。

Agent skills は、リポジトリの `.github/skills` ディレクトリに `SKILL.md` を置くことで、組織固有のコーディング標準やツールの文脈を Copilot のレビューに持ち込む仕組み。MCP サーバー対応は、Issue トラッカーやドキュメント基盤といった外部プラットフォームをレビュー時の参照先にできる。MCP 経由のツール呼び出しは読み取り専用に制限される。

GA に合わせて、Agent skills や MCP のコンテキストを使って生成されたコメントには、その旨の帰属表示が付くようになった。どのコメントが追加コンテキストの影響を受けたのか判別できる。

対象は Copilot Pro / Pro+ / Business / Enterprise。既存利用者は設定の引き継ぎのみで追加作業は不要。新規に使う場合は、MCP サーバーはリポジトリ設定の Copilot → MCP servers で構成し、認証トークンは Secrets and variables → Agents に保存する。Agent skills は `.github/skills` 配下にスキルディレクトリと `SKILL.md` を作成する。GitHub と Playwright の MCP サーバーは既定で有効。

## できるようになったこと

- `.github/skills` の `SKILL.md` による組織固有ルールのレビュー反映が GA 品質で使える
- Issue トラッカー・ドキュメント基盤などの MCP サーバーをレビュー文脈として接続できる（読み取り専用）
- Agent skills / MCP コンテキスト由来のコメントに帰属表示が付く

## 影響範囲

- 対象ユーザー: Copilot Pro / Pro+ / Business / Enterprise
- 対象プラン: 上記4プラン
- API / UI / 管理者機能: リポジトリ設定（Copilot → MCP servers、Secrets and variables → Agents）、リポジトリ内 `.github/skills`

## 教材化メモ

- `SKILL.md` を置いてレビュー基準を注入する構造は、Claude Code / Codex のスキル運用と同じ発想。「レビュー観点をリポジトリに置く」という考え方を横断的に説明できる
- MCP 呼び出しが読み取り専用に限定されている点は、AI にどこまで権限を渡すかの設計例として教材化しやすい
- 帰属表示は「AI のコメントの根拠を追えるようにする」実装例。レビュー運用の信頼性の話に接続できる

## 原文確認

- 公式見出し: Copilot code review: Agent skills and MCP now generally available
- 公式URL: https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available
- 原文全文は公式ページで確認してください。
