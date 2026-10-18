---
date: 2026-10-06
title: "Claude for Google Workspace — Docs / Sheets / Slides にサイドバーを追加（beta）"
service: "Claude"
source: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides
fetched_at: 2026-10-07T09:25:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: release
---

# 2026-10-06 Claude for Google Workspace

## 公式内容の日本語要約

Anthropic が **Claude for Google Workspace** を公開した。Google Docs / Sheets / Slides に **Claude のサイドバー**が入り、**開いているファイルを読んで直接編集する。** コピー＆ペーストでの往復なしに、下書き、分析、構造の組み替え、体裁の整えまでをファイル内で行う。

提供状況は **beta** で、対象は **Pro / Max / Team / Enterprise** プランである。導入は Google Workspace Marketplace からで、**利用者自身でのインストールと、管理者による組織一括配布の両方に対応する。** 組織が Marketplace アプリをブロックしている場合は、管理者が Claude を許可リストへ入れるか、管理者インストールを行う必要がある（ブロックされた利用者には Google 側のメッセージ「This application is not allowed by your administrator」が出る）。

アプリ別の用途として、Docs は書き直し・構造の組み替え・契約書レビュー・見出しの統一・メモからの表作成、Sheets は数式のデバッグ・データの正規化・モデル構築・VLOOKUP のトラブルシュート・感度分析、Slides は下書きスライドの作成・内容の分割・タイトルの統一・スタイル付きのグラフ挿入が挙げられている。

**データアクセス範囲が明確に限定されている点が重要である。** Claude が読むのは**現在開いているファイルと、有効化したコネクタだけ**で、Drive、Gmail、Calendar、その他のファイルには到達しない。この単一ファイルのスコープは **Google 側の権限で強制される。** 参照ファイルの添付は1メッセージあたり20件まで可能である。

制約も公式に列挙されている。**Firefox 非対応**（Chrome / Edge / Safari のみ）、**1回の処理は6分まで**、リンク付きグラフの作成と自動更新は不可、Docs のコメント解決は不可、Connected Sheets（BigQuery）非対応、定期実行の自動化やカスタムメニューの作成は不可。モデルはサイドバーのピッカーから、自分のプランで使えるものを選ぶ。

## できるようになったこと

- Docs / Sheets / Slides の**ファイル内で Claude が直接編集**できる（サイドバー）
- **管理者による組織一括配布**に対応（Marketplace ブロック環境では許可リスト登録が必要）
- 参照用ファイルを1メッセージあたり20件まで添付できる

## 影響範囲

- 対象ユーザー: Pro / Max / Team / Enterprise の利用者（Google アカウントが Marketplace アプリをインストールできる必要あり）
- 対象プラン: Pro / Max / Team / Enterprise（beta）
- API / UI / 管理者機能: UI（サイドバー）＋ 管理者機能（Marketplace 配布・許可リスト）

教材化メモ: src/content/ai-news-notes/claude/claude-for-google-workspace.mdx

## 原文確認

- 公式見出し: 「Claude now works with Google Docs, Sheets, and Slides」
- 公式URL: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides 、https://support.claude.com/en/articles/16951679-use-claude-in-google-docs-sheets-and-slides
- 原文全文は公式ページで確認してください。
