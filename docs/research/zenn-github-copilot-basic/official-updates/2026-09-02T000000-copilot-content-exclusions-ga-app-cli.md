---
date: 2026-09-02
title: "GitHub Copilot — Content exclusions が Copilot アプリと CLI で一般提供"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-09-02
date_precision: date-only
category: release
---

# 2026-09-02 Content exclusions が Copilot アプリ / CLI で GA

## 公式内容の日本語要約

Copilot アプリと Copilot CLI が**コンテンツ除外（content exclusions）ポリシーを適用する**ようになった。公式表現は "Copilot won't use excluded files as context, helping you protect sensitive code across agentic workflows."

対象は **Copilot Business / Copilot Enterprise** のみ。**既定では有効になっていない**——管理者がポリシーを設定して初めて効く。設定は Enterprise / Organization / リポジトリの各階層で行える。

これまで content exclusions は IDE 側で先に提供されており、**エージェント的な実行経路（アプリ / CLI）が適用対象から外れていた**。その穴が塞がった形になる。

## できるようになったこと

- Copilot アプリと CLI が、除外指定されたファイルをコンテキストとして使わなくなる
- Enterprise / Organization / リポジトリの各階層で除外ポリシーを設定する

## 影響範囲

- 対象ユーザー: 機密コードを持つ組織
- 対象プラン: Copilot Business / Copilot Enterprise
- API / UI / 管理者機能: content exclusion ポリシー（管理者設定）

## 教材化メモ

- **「IDE では除外していたのに、CLI とアプリからは読めていた」**——これが GA 以前の実態である。統制の教材として重要なのは、**ポリシーの適用範囲は実行経路ごとに確認しないと分からない**という点。「除外設定を入れた」ことと「あらゆる経路で除外される」ことは別である。
- エージェント的なワークフローが増えるほど、**同じデータに触る経路が増える**。統制は経路ごとに実装されるため、新しい経路が生えるたびに穴が空く。**経路の棚卸し**を定期作業として設計する理由になる。
- 既定オフである点は運用上の注意。GA になっても**管理者が設定するまで何も守られない**。

## 原文確認

- 公式見出し: Content exclusions generally available in Copilot app and CLI
- 公式URL: https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli
- 原文全文は公式ページで確認してください。
