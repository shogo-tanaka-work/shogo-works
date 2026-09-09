---
date: 2026-09-08
title: "Claude Platform のコスト削減ガイドと claude-api スキルの prompt-audit コマンド"
service: "Claude Platform"
source: https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform
fetched_at: 2026-09-09T09:02:00+09:00
published_at: 2026-09-08T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-08 Claude Platform のコスト削減ガイド

## 公式内容の日本語要約

Anthropic は 2026-09-08、`claude.com/blog` で **Claude Platform 上のアプリケーションのコストを、性能を落とさずに下げる方法**をまとめた記事を公開した（著者 Lance Martin、Product カテゴリ）。**性能とコストはトレードオフではない**という主張を、3つの具体策で構成している。

第一が**プロンプトキャッシュのヒット率最大化**である。キャッシュはモデル固定・プレフィックスのバイト完全一致・TTL ありという3条件で成立する。会話途中での effort / thinking 設定の変更（ただし Claude Opus 5 と Fable 5.1 は途中変更してもキャッシュが壊れない）、システムプロンプト内の可変タイムスタンプや ID、順序が変わるツール定義、フォーク時のプレフィックス不一致がミス要因として挙げられている。対策として、**Claude Console のキャッシュ診断でミス理由を特定**、稀用ツールの `defer_loading` によるプレフィックスからの除外、システム指示をメッセージとして途中追加してキャッシュを保つ手法、自動キャッシュブレークポイントの追従、`max_tokens: 0` によるキャッシュ事前ウォームが示されている。

第二が**プロンプトのアンチパターン除去**である。旧世代モデルの弱点を補うために書かれた指示が、フロンティアモデルでは逆にトークンを浪費するという指摘で、「二重チェックせよ」等の検証儀式、「CRITICAL: YOU MUST ALWAYS」のような強調、scratchpad などの固定手順、古い few-shot、矛盾する規則、旧世代向けの手動 thinking budget 設定が名指しされている。**`claude-api` スキルに `/claude-api prompt-audit` コマンドが追加**され、作業ディレクトリ内のプロンプト・スキル・ツール説明を対象に監査できる。

第三が**タスクに応じた effort の較正**である。

## できるようになったこと

- **Claude Console でプロンプトキャッシュのミス理由を診断**できる（診断 API あり）
- 稀用ツールを **`defer_loading`** でキャッシュ済みプレフィックスから外せる
- システム指示を**会話途中のメッセージとして追加**し、キャッシュを保てる
- **`/claude-api prompt-audit`** でアンチパターンを機械的に洗い出せる
- **Opus 5 / Fable 5.1 は会話途中の effort 変更でキャッシュが壊れない**

## 影響範囲

- 対象ユーザー: Claude Platform（Claude API）でアプリ・エージェントを実装している開発者
- 対象プラン: API 利用者全般
- API / UI / 管理者機能: API 挙動 + Claude Console の診断 UI + Claude Code のスキル

教材化メモ: src/content/ai-news-notes/claude/claude-platform-cost-performance.mdx

## 原文確認

- 公式見出し: Reducing cost and improving performance with Claude Platform
- 公式URL: https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform
- 原文全文は公式ページで確認してください。
