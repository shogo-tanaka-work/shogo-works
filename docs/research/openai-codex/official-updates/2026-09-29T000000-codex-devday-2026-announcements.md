---
date: 2026-09-29
title: "DevDay 2026: Codex に再利用可能なクラウド環境、Security Cloud、Ultrafast、刷新された CLI"
service: "OpenAI Codex"
source: https://openai.com/index/devday-2026-recap/
fetched_at: 2026-09-30T09:40:00+09:00
published_at: 2026-09-29
date_precision: date-only
category: release
---

# 2026-09-29 DevDay 2026 での Codex 発表

## 公式内容の日本語要約

DevDay 2026 で Codex 側にも複数の発表が出た。**いずれもバージョンタグ付きリリースではなく、公式イベントでの製品発表**である。

**再利用可能なクラウド環境**。Codex が**デバイスを跨いで使い回せるクラウド実行環境**を持つようになった。ローカルとクラウドで環境を作り直す手間が消える方向の変更である。

**Codex Security Cloud**。**GitHub リポジトリ全体をスキャンして脆弱性を洗い出し、クラウド側で修正案を用意する**。単一ファイルのレビューではなくリポジトリ単位である点が従来と異なる。

**Ultrafast の Codex 適用**。**最大 300 トークン/秒、標準の約8倍**。ChatGPT 側では Pro 500 に同梱される（単価は標準の6倍）。

**CLI の刷新**と、**ChatGPT デスクトップアプリ内のコードレビュー画面**。加えて、**Amazon と共同運用するエージェント基盤（Bedrock Managed Agents）の技術的土台**が Codex / Agents API 側から提供される。

なお同日のバージョンリリース **0.159.0 / 0.159.1 / 0.159.2** は別件で、`selection-rubric.md` の規約どおり週次ロールアップへ送る。**本メモが扱うのはバージョンリリースではない独立発表のみ**である。

## できるようになったこと

- デバイス跨ぎで再利用できるクラウド実行環境を使う
- リポジトリ全体の脆弱性スキャンと修正案生成をクラウドで走らせる
- Ultrafast で最大 300 トークン/秒の生成を得る
- ChatGPT デスクトップアプリ内でコードレビューする

## 影響範囲

- 対象ユーザー: Codex 利用者、GitHub でコードを管理する開発チーム
- 対象プラン: Ultrafast は Pro 500 / 標準6倍単価
- API / UI / 管理者機能: セキュリティレビューの工程に影響

教材化メモ: src/content/ai-news-notes/codex/codex-devday-2026-cloud-environments-and-security-cloud.mdx

## 原文確認

- 公式見出し: DevDay 2026 Recap
- 公式URL: https://openai.com/index/devday-2026-recap/
- **制約**: `openai.com` 403。内容は検索経由の報道（the-decoder、TechCrunch、AlphaSignal）で突き合わせた。
