---
date: 2026-08-31
title: "ChatGPT デスクトップ内蔵ブラウザで WebMCP 経由のサイト提供ツールが使える"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-09-01T09:20:00+09:00
published_at: 2026-08-31
date_precision: date-only
category: release
---

# 2026-08-31 ChatGPT デスクトップ内蔵ブラウザで WebMCP 経由のサイト提供ツールが使える

## 公式内容の日本語要約

ChatGPT Release Notes の 2026-08-31 付見出しで、**ChatGPT Work と Codex が、対応サイトが提供するツールをデスクトップアプリの内蔵ブラウザ内で直接使える**ようになったことが公開された。

従来、ChatGPT が外部サービスの機能を呼ぶには、プラグインやコネクタを個別に接続する必要があった。今回は**サイト側が自分でツールを公開し、ChatGPT がそれをその場で発見する**方式になる。ユーザーはアドレスバーの矢印を選ぶと、そのページが提供しているツールの一覧を確認できる。

技術的な土台は **WebMCP**。利用には対応アカウント、対応モデル、対応ページの3つが揃っている必要がある。**提供範囲はデスクトップアプリの内蔵ブラウザに限られ、Chrome 拡張機能経由では使えない。**

既存のウェブサイトアクセス許可と、センシティブな操作に対する確認は従来どおり適用される。

## できるようになったこと

- 対応サイトが公開するツールを、接続設定なしで ChatGPT がその場で発見・利用できる
- アドレスバーの矢印から、そのページが提供するツールの一覧を確認できる
- ChatGPT Work と Codex の両方が対象

## 影響範囲

- 対象ユーザー: ChatGPT Work / Codex の利用者
- 対象プラン: 対応アカウントが必要（Release Notes 上で具体的なプラン名の明示なし）
- API / UI / 管理者機能: デスクトップアプリの内蔵ブラウザ UI。Chrome 拡張は対象外。既存のサイトアクセス許可・センシティブ操作確認は継続適用

## 教材化メモ

- **AIニュース記事化は見送り（既出）。** 同じ機能が、公開済み記事 `src/content/ai-news/chatgpt-openai/chatgpt-work-signed-in-websites-and-site-tools.mdx`（2026-08-25、PR マージ済み）で既に扱われている。当該記事は Site tools（WebMCP）を本文・箇条書き・業務インパクト・副業視点のすべてで言及しており、**GPT-5.6 Sol / Terra が必要で Luna では動かない**点、**Enterprise / Edu ワークスペースでは利用不可**である点まで書かれている。本日の Release Notes の記述（「対応アカウント・モデル・ページが必要」）より詳しい。重複記事を作る利益がない。
- **ただし日付の食い違いがある。** 既存記事は 2026-08-25 付で「同日、開発者向けの changelog では関連する2点が告知されています」と書いているが、**本日時点の公式 Release Notes では、Site tools とブラウザ拡張の項目は `# August 31, 2026` の見出し配下にあり、`# August 25, 2026` の配下には無い**（08-25 配下は「Scheduled tasks can respond to app updates and be shared」と「ChatGPT Work can now complete tasks on signed-in websites」の2項目）。既存記事は開発者向け changelog を根拠に先行して書かれ、ヘルプセンターの Release Notes に正式掲載されたのが 08-31 だった、という経緯と読める。
- **運用上の教訓**: 開発者向け changelog とヘルプセンター Release Notes で掲載日がずれる。**先行ソースで書いた場合、後日 Release Notes に載ったときに重複候補として上がってくる**ため、日次サマリーの「公開記事化結果」に既出判定の根拠を残しておく必要がある。`research-learnings.md` にも記録した。
- 教材観点そのもの（WebMCP により連携の統制軸が「コネクタ許可」から「サイト許可」へ移る、という論点）は、既存記事の教材化メモ側に寄せる。ここでは重複させない。

## 原文確認

- 公式見出し: 「Use website tools in the desktop browser」（August 31, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 取得制約: `help.openai.com` は WebFetch が HTTP 403 を返すため、Exa 経由で公式本文を取得して確認した。
- 原文全文は公式ページで確認してください。
