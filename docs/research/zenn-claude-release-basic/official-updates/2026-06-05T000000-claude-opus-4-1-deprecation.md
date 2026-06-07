---
date: 2026-06-05
title: "Claude Platform — Claude Opus 4.1 を非推奨化、Claude API 退役は 2026-08-05"
service: "Claude (Anthropic)"
source: https://platform.claude.com/docs/en/release-notes/overview
fetched_at: 2026-06-07T13:00:00+09:00
published_at: 2026-06-05
date_precision: date-only
category: policy
---

# 2026-06-05 Claude Opus 4.1 非推奨化

## 公式内容の日本語要約

Anthropic が Claude Opus 4.1（`claude-opus-4-1-20250805`）の非推奨を発表した。Claude API 上での退役は 2026年8月5日に予定されている。移行先として Claude Opus 4.8（`claude-opus-4-8`）への切り替えが推奨されている。エンドユーザー UI への影響はなく、API を直接呼び出す開発者・企業が対象。

## できるようになったこと（変わったこと）

- `claude-opus-4-1-20250805` が非推奨に。
- **Claude API での退役日: 2026年8月5日**。
- 推奨移行先: **Claude Opus 4.8（`claude-opus-4-8`）**。移行ガイドが提供されている。
- 対象は API 経由でモデル ID を固定指定している実装。

## 影響範囲

- 対象ユーザー: Claude API を直接利用する開発者・企業
- 対象プラン: Claude API（Console / SDK）
- API / UI / 管理者機能: API のモデル ID 指定。Claude アプリ（UI）のエンドユーザーへの直接影響なし

## 教材化メモ

Claude のモデル一覧・モデル選定章で Claude Opus 4.1 を「非推奨（2026-08-05 API 退役）」と記し、Opus 4.8 への移行を推奨に更新する。モデル ID をハードコードしている実装向けに、退役前の切り替えチェックリスト（コスト・レイテンシ・出力差分の再評価）を注記する。

## 原文確認

- 公式見出し: June 5, 2026 — Claude Platform release notes
- 公式URL: https://platform.claude.com/docs/en/release-notes/overview
- 補助: https://platform.claude.com/docs/en/about-claude/model-deprecations
- 原文全文は公式ページで確認してください。
