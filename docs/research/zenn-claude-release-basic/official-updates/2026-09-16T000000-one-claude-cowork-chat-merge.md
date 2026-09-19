---
date: 2026-09-16
title: "Claude Cowork と chat が統合され「one Claude」へ。Pro / Max から数週間かけて段階展開"
service: "Claude"
source: https://claude.com/blog/cowork-is-now-claude
fetched_at: 2026-09-17T09:02:00+09:00
published_date: 2026-09-16
date_precision: date-only
category: release
---

# 2026-09-16 Claude Cowork と chat の統合（one Claude）

教材化メモ: src/content/ai-news-notes/claude/one-claude-cowork-chat-merge.mdx

## 公式内容の日本語要約

Anthropic は 2026-09-16、**Claude Cowork と chat を1つの Claude へ統合する**と発表しました。これまで利用者は、短い質問なら chat、レポート作成のような重い作業なら Cowork、と**入力前にモードを選ぶ必要がありました**。今回の変更で**その選択自体が無くなり**、Claude 側がタスクに必要な手段を判断します。

公式は統合の理由を「Cowork を大きな作業のための別の場所として、Design を視覚的作業のための場所として作ったが、利用者は両方を使っており、**どちらにタスクが属するかを決めるのが煩わしいと言われた**。片方で始めたものがもう片方に引き継がれない問題もあった」と説明しています。

**展開は Pro / Max プランから、web / デスクトップ / モバイルで数週間かけて段階的に行われます。** 有効化の操作は不要です。Team / Free は「soon」とされ、**Enterprise については組織に変更が入る少なくとも30日前に通知**されます。

ヘルプセンター側には移行時の実務条件が明記されています。**同じプランでもアカウントごとに切替時期が異なり**、入力欄に「Chat」「Cowork」の選択肢が残っていれば未移行です。既存の chat / タスク / プロジェクト / 設定は引き継がれます。**一度新体験へ移行すると、分離された「Chat」「Cowork」へは戻せません。**

移行に伴う配置変更も示されています。Cowork のタスクは Recents へ chat と統合、**Cowork の Global instructions は Settings > General の「Instructions for Claude」へ統合**、Web 検索のトグルは廃止（Claude が必要と判断したときに検索）、Research は `/deep-research` または「+」ボタンから、ローカル実行タスクのメモリはそのタスクに紐づいたまま残ります。

権限モードは Auto（逐一確認せず、実行前に自動安全チェック）と Manual（既定。実行前に都度確認）の2種類です。

## できるようになったこと

- chat と Cowork のモード選択が不要になり、**同一会話から重いタスクを依頼できる**
- 重いタスクは**クラウドで継続**し、ノートPCを閉じても止まらない（ローカルファイル/アプリを使うタスクは Claude Desktop の起動が必要）
- 成果物（ドキュメント、数式入りスプレッドシート、プレゼン）を**会話から直接受け取れる**
- 接続済みアプリ（Google Drive / Gmail / Microsoft 365 / Slack）をタスク実行中に参照できる
- スケジュール実行タスクをクラウドで回せる
- モバイルから進捗確認・軌道修正ができる

## 影響範囲

- 対象ユーザー: まず Pro / Max の既存・新規ユーザー。Team / Free は後続、Enterprise は30日前通知
- 対象プラン: Pro / Max（web / デスクトップ / モバイル）
- API / UI / 管理者機能: **UI の構造変更**。管理者向けには Enterprise の事前通知期間（30日以上）と、Docs / Slides / Design の有効化判断が該当
- 非可逆性: **移行後に旧 UI へ戻す手段は公式に提示されていない**

## 原文確認

- 公式見出し: Claude Cowork and chat are now one Claude
- 公式URL: https://claude.com/blog/cowork-is-now-claude
- ヘルプセンター: https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude
- 原文全文は公式ページで確認してください。
