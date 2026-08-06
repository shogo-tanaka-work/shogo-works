---
date: 2026-08-05
title: "Inference hooks — Claude Enterprise 向けのインライン DLP（ベータ）"
service: "Claude"
source: https://claude.com/blog/claude-enterprise-inference-hooks
fetched_at: 2026-08-06T18:30:00+09:00
published_date: 2026-08-05
date_precision: date-only
category: release
---

# 2026-08-05 Claude Enterprise の Inference hooks

## 公式内容の日本語要約

Anthropic が Claude Enterprise 向けに「Inference hooks」をベータ提供した。モデルに内容が渡る前に、組織のセキュリティサーバーが検査する仕組みで、実質的にインラインの DLP（データ損失防止）にあたる。

動作はシンプルで、すべての推論リクエストがセキュア WebSocket 接続を通じて組織のサーバーへ送られ、サーバーが allow / deny の判定を返す。判定が返るまで Claude は処理を進めない。検査対象はユーザーのプロンプトだけでなく、**ツール呼び出しの応答**も含む。外部から取り込んだ内容がモデルに渡る前に止められる点が特徴になる。

既存の DLP 基盤（Netskope、Palo Alto Networks、Proofpoint など）と統合できるほか、独自実装も可能。展開方法も現実的で、シャドーモード（判定はするが遮断しない）、ロール単位の除外、割合ベースの段階展開に対応し、タイムアウト値と障害時ポリシー（fail open / fail close）も設定できる。

適用範囲は組織全体で、Claude chat、Claude Code、Claude Cowork、MCP 接続ツールをカバーする。製品ごとに個別の連携を組む必要がない点が、既存の DLP 導入と比べたときの差になる。

## できるようになったこと

- 推論リクエストをモデル到達前に組織のサーバーで検査し、allow / deny を返せる
- ユーザープロンプトに加えてツール呼び出しの応答も検査対象にできる
- Netskope / Palo Alto Networks / Proofpoint などの既存 DLP と統合できる
- シャドーモード、ロール除外、割合ベースの段階展開ができる
- タイムアウトと障害時ポリシーを設定できる
- Claude chat / Claude Code / Claude Cowork / MCP 接続ツールを組織全体で一括カバーできる

## 影響範囲

- 対象ユーザー: Claude Enterprise 契約組織のセキュリティ・コンプライアンス担当
- 対象プラン: Claude Enterprise（ベータ）
- API / UI / 管理者機能: 管理者向け設定 + 組織側 WebSocket サーバーの実装が必要

教材化メモ: src/content/ai-news-notes/claude/enterprise-inference-hooks.mdx

## 原文確認

- 公式見出し: Inference hooks: inline data loss prevention for Claude Enterprise
- 公式URL: https://claude.com/blog/claude-enterprise-inference-hooks
- 原文全文は公式ページで確認してください。
