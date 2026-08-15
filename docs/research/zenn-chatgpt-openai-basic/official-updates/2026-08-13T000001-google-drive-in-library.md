---
date: 2026-08-13
title: "Google Drive が Library に統合、Docs / Sheets / Slides を会話の横で扱える（追補）"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-08-15T11:48:00+09:00
published_at: 2026-08-13
date_precision: date-only
category: enhancement
---

# 2026-08-13 Google Drive in Library

## 公式内容の日本語要約

Google Drive プラグインを接続していると、**Library から Drive のファイルとフォルダを直接閲覧できる**ようになった。直接共有されたアイテムも含まれる。コンポーザーや `@` メンションから Drive のファイルを素早く呼び出し、再アップロードせずに任意のチャットへ追加できる。

ファイルを扱っているときは、**Google ドキュメント / スプレッドシート / スライドを会話の横に開いたまま**、要約、分析、比較、そこからの新規作成を ChatGPT に依頼できる。フォルダを選んで、その中のファイル群を横断して作業させることもできる。コンテンツは Drive に接続されたままなので、元ファイルへ戻るのが容易である。**対応かつ認可されている場合は、ChatGPT がソースファイルを直接更新できる**。

提供範囲には制限がある。初期の体験に含まれるのは **My Drive と、直接共有されたファイル・フォルダ**で、**共有ドライブ（Shared Drives）は未対応**である。Google Drive の編集・共同編集機能の一部も ChatGPT 内では使えない。

Plus / Pro / Enterprise / Edu / Healthcare / Business の Web 版に、Chat と Work の両トグルで展開される。モバイル対応は後続。

本エントリは 2026-08-13 付だが、2026-08-14 の巡回時点では掲載されていなかった。追補として記録する。

## できるようになったこと

- Library から Drive のファイル・フォルダを閲覧し、再アップロードなしでチャットへ追加できる
- Docs / Sheets / Slides を会話の横に開いたまま要約・分析・比較・新規作成を依頼できる
- フォルダを選んでファイル群を横断した作業を依頼できる
- 対応・認可されている場合、ChatGPT がソースファイルを直接更新できる

## 影響範囲

- 対象ユーザー: Google Drive プラグインを接続した ChatGPT 利用者
- 対象プラン: Plus / Pro / Enterprise / Edu / Healthcare / Business の Web（Chat / Work 両トグル）。モバイルは後続
- API / UI / 管理者機能: Library、コンポーザー、`@` メンション
- 制限: 共有ドライブ未対応。Drive の編集・共同編集機能の一部は利用不可

教材化メモ: src/content/ai-news-notes/chatgpt-openai/computer-history-and-drive-library.mdx

## 原文確認

- 公式見出し: Google Drive is now in Library（August 13, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 原文全文は公式ページで確認してください。
