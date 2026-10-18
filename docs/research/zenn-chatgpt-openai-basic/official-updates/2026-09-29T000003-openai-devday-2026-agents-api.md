---
date: 2026-09-29
title: "DevDay 2026: Agents API にコンピュータ操作・並列サブエージェント、Decisions API と Bedrock Managed Agents"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/devday-2026-recap/
fetched_at: 2026-09-30T09:40:00+09:00
published_at: 2026-09-29
date_precision: date-only
category: enhancement
---

# 2026-09-29 DevDay 2026: Agents API の拡張

## 公式内容の日本語要約

**Agents API** は 2026-09-11 からパブリックベータで提供されているマネージドなエージェント実行基盤である。**セッション、オーケストレーション、文脈圧縮（context compaction）、復旧を OpenAI 側が受け持ち**、開発者はツールと実行環境を定義する。DevDay 2026 でここに複数の機能が入った。

追加されたのは、**OpenAI ホストのブラウザによるコンピュータ操作（computer use）**、**MCP サーバーへの接続**、**並列サブエージェント**、**永続セッション状態**、そして **Codex 由来のマルチエージェント機能・ツール検索・ツール呼び出し・文脈圧縮**である。

**Decisions API** は別枠の新 API で、**あらかじめ定義した有限の選択肢に対する実時間の判定**に特化する。開発者はテキストまたは画像で文脈を渡し、返ってきた回答を分類・ルーティング・エージェントの次アクション選択へ使う。**限定プレビューで提供開始、広範な提供は数日以内**とされる。

**Bedrock Managed Agents** は AWS との共同発表で、**OpenAI のエージェントを AWS 内部で完結して動かす**構成。Agents API の中核から OpenAI と Amazon が共同で構築し、AWS のリソースとネイティブに動くよう調整されている。**限定プレビュー**。

## できるようになったこと

- ホスト型ブラウザでエージェントに GUI 操作をさせる
- MCP サーバーへ接続し、並列サブエージェントを走らせる
- 有限選択肢の判定を Decisions API へ切り出す
- AWS 内でエージェント実行を完結させる（限定プレビュー）

## 影響範囲

- 対象ユーザー: API 開発者、AWS 上で統制要件を持つ企業
- 対象プラン: Agents API はパブリックベータ、Decisions API と Bedrock Managed Agents は限定プレビュー
- API / UI / 管理者機能: 自前のエージェント基盤を持つ判断が変わる

教材化メモ: src/content/ai-news-notes/chatgpt-openai/agents-api-computer-use-and-decisions-api.mdx

## 原文確認

- 公式見出し: DevDay 2026 Recap
- 公式URL: https://openai.com/index/devday-2026-recap/
- 関連: https://aws.amazon.com/bedrock/managed-agents-openai/
- **制約**: `openai.com` 403。内容は検索経由の報道（the-decoder、explainx.ai、Decrypt、AWS 公式ページ）で突き合わせた。
