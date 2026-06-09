---
date: 2026-06-09
title: "Claude Fable 5 / Claude Mythos 5 を発表 — Anthropic 史上最高性能の一般公開モデル（GA 2026-06-09）"
service: "Claude (Anthropic)"
source: https://www.anthropic.com/news/claude-fable-5-mythos-5
fetched_at: 2026-06-10T07:22:57+09:00
published_at: 2026-06-09
date_precision: date-only
category: release
---

# 2026-06-09 Claude Fable 5 / Claude Mythos 5

## 公式内容の日本語要約

Anthropic が新モデルライン **Claude Fable 5（`claude-fable-5`）** を一般提供開始した。Opus/Sonnet/Haiku の上位に位置づく「これまでで最も高性能な一般公開モデル」で、要求の厳しい推論・長時間の自律エージェント作業向け。同時に **Claude Mythos 5（`claude-mythos-5`）** が Project Glasswing 内の限定提供（招待制）として登場（Claude Mythos Preview の後継）。GA 日は 2026-06-09、Claude API / Claude Platform on AWS / Amazon Bedrock / Vertex AI / Microsoft Foundry で同日提供。

## できるようになったこと

- **Claude Fable 5（`claude-fable-5`）が GA**。コンテキストウィンドウ 1M トークン、最大出力 128k トークン、Adaptive thinking 常時オン（Extended thinking は非対応）。
- 価格は **入力 $10 / 出力 $50 per MTok**（Opus 4.8 の $5/$25 より上位）。
- トークナイザは Opus 4.7 導入のものを使用。**同じテキストでも旧モデル比で約30%多くトークンを消費**する点に注意。
- **`claude-mythos-5`** は Project Glasswing の招待制限定提供（GA ではない）。AWS / Vertex でも Limited availability。
- 安全性対応として、拒否時は HTTP 200 で `stop_reason: "refusal"` を返し**課金されない**。オプトインの `fallbacks` パラメータ（ベータ）で別モデルへ自動フォールバック可能。

## 影響範囲

- 対象ユーザー: Claude API / 各クラウド（AWS・Vertex・Foundry）の開発者・企業。最高難度の推論・長時間エージェント作業を要するワークロード。
- 対象プラン: Claude API および主要クラウド。Mythos 5 は Project Glasswing 承認顧客のみ。
- API / UI / 管理者機能: 新モデル ID。クライアント側では Claude Code v2.1.170・GitHub Copilot 等が同日に Fable 5 アクセスを開放。

## 関連（同日のクライアント対応）

- Claude Code v2.1.170 が Fable 5 アクセスを追加（`../zenn-claude-code-release-basic/official-updates/2026-06-09T172309-claude-code-v2-1-170.md`）。
- GitHub Copilot が Fable 5 を GA（`../zenn-github-copilot-basic/official-updates/2026-06-09T000000-copilot-claude-fable-5-ga.md`）。

## 教材化メモ

Claude のモデル一覧・モデル選定章を更新し、最上位ティアとして Claude Fable 5（`claude-fable-5`、$10/$50、1M/128k、Adaptive thinking 常時オン）を追加する。Opus 4.8 との使い分け（コスト差・トークナイザ差で約30%増）を明示。Mythos 5 は Project Glasswing 限定として注記。`stop_reason: "refusal"` の非課金挙動と `fallbacks` パラメータ（ベータ）を、安全分類器付きモデルの実装前提として整理する。

## 原文確認

- 公式見出し: Claude Fable 5 and Claude Mythos 5
- 公式URL: https://www.anthropic.com/news/claude-fable-5-mythos-5
- API ドキュメント: https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5
- モデル一覧（スペック・価格表）: https://platform.claude.com/docs/en/about-claude/models/overview
- リリースノート: https://platform.claude.com/docs/en/release-notes/overview
- 原文全文は公式ページで確認してください。
