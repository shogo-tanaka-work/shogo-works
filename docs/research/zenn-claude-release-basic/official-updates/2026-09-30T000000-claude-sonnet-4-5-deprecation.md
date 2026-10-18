---
date: 2026-09-30
title: "Claude Sonnet 4.5 を非推奨化、2026-11-30 に退役"
service: "Claude API / Claude Platform"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T00:00:00Z
date_precision: date-only
category: incident
---

# 2026-09-30 Claude Sonnet 4.5 の非推奨化と退役予告

## 公式内容の日本語要約

Claude Platform の API リリースノートに **2026-09-30 付で Claude Sonnet 4.5（`claude-sonnet-4-5-20250929`）の非推奨化**が掲載された。**退役日は 2026-11-30**。移行先として **Claude Sonnet 5.5** が案内され、専用の移行ガイドが示されている。

Sonnet 5.5 は **2026-09-28 に公開**されたばかりのモデルで、Claude API、Amazon Bedrock、Claude Platform on AWS、Google Cloud、Microsoft Foundry で利用できる。つまり**後継の公開から2日後に前世代の退役日が確定した**という並びである。

**移行時に効く破壊的変更が Sonnet 5.5 側に複数ある**（2026-09-28 のリリースノートに記載、本日の非推奨告知と合わせて棚卸しが必要）。

1. 拡張思考の制御: `high` 以下の effort では `thinking: {"type": "disabled"}` ではなく `{"type": "between_tools"}` を使う
2. **強制ツール利用（`tool_choice` の `any` / `tool`）は 400 エラーを返す**
3. thinking ブロックがモデルと会話に紐づく
4. 旧 `computer_20251124` の computer use ツールは Claude API と Google Cloud で受け付けられない
5. Advisor ツールは Claude Opus 4.8 / 4.7 / Sonnet 5 を advisor として拒否する

加えて **thinking ブロックがアカウントに紐づく**（Sonnet 5.5 が生成した thinking ブロックは生成元アカウントまたは連携アカウントでのみ有効。他アカウントではモデルに渡る前に破棄され、リクエスト自体は成功する）。旧モデルのブロックは影響を受けない。

## できるようになったこと

- 該当なし（退役予告）

## 影響範囲

- 対象ユーザー: `claude-sonnet-4-5-20250929` を指定している全 API 利用者
- 対象プラン: Claude API および各クラウド経由の提供
- **期限: 2026-11-30 に退役**
- 移行時の注意: Sonnet 5.5 の破壊的変更5点（特に強制ツール利用の 400 化）

教材化メモ: src/content/ai-news-notes/claude/claude-sonnet-4-5-retirement.mdx

## 原文確認

- 公式見出し: Claude Sonnet 4.5 deprecation（2026-09-30 の項）
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 関連: https://platform.claude.com/docs/en/about-claude/model-deprecations 、https://platform.claude.com/docs/en/models/sonnet-5-5/migration-guide
- 原文全文は公式ページで確認してください。
