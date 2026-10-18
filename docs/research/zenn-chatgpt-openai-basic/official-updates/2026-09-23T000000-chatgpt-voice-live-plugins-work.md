---
date: 2026-09-23
title: "ChatGPT Voice: Live がプラグイン対応、Voice が ChatGPT Work（web / モバイル）で利用可能に"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-09-24T09:40:00+09:00
published_date: 2026-09-23
date_precision: date-only
category: enhancement
---

# 2026-09-23 ChatGPT Voice の Live がプラグイン対応、Voice が Work へ

## 公式内容の日本語要約

OpenAI は 2026-09-23 付の ChatGPT Release Notes で、音声体験の2点の拡張を告知した。1点目は **Live（GPT-Live-1 / GPT-Live-1 mini で動く常時双方向の音声モード）がプラグインに対応**したこと。web / iOS / Android の3面で提供され、音声会話の途中でアカウントに接続済みのプラグイン・コネクタ（メール、カレンダー、Slack など）を呼び出せる。応答はチャット側にテキストでも残る。Free / Go でも、各プランがサポートするプラグインの範囲で Chat 内の Voice から利用できる。

2点目は **Voice が ChatGPT Work（web / モバイル）で使えるようになった**こと。話しかけるだけで Work にドキュメント・プレゼン・スプレッドシートの作成、接続アプリの参照、ブラウザ操作を指示できる。音声通話を終了しても実行中のタスクはテキスト側で継続する。Voice in Work の利用にはアカウント側に Voice と Work の両方のアクセスが必要で、消費は通常の Work 利用枠・課金に従う（音声側はプランごとの Voice 制限に従う）。

承認が必要なアクションでは web / モバイルとも画面上の確認ダイアログが出る。**音声による承認はサポートされていない**と公式ヘルプが明記している。Live は引き続きビデオ・画面共有に非対応で、ChatGPT Library からのファイル検索・追加もできない。

本日時点で `help.openai.com` と `openai.com` は当環境の WebFetch から 403 を返し、キャッシュ経由で取得できた本文も 2026-09-10 版で止まっていた。上記は公式 Release Notes の 2026-09-23 項を引用した複数の報道（Unite.AI、tbreak、shattered.io ほか）を突き合わせて再構成している。数値・対象プランは公式ヘルプ記事の記載として各報道が一致している範囲に限定した。

## できるようになったこと

- Live 音声会話中に、接続済みプラグイン／コネクタ（メール・カレンダー・Slack など）を呼び出せる（web / iOS / Android）
- ChatGPT Work を音声で起動し、ドキュメント・プレゼン・スプレッドシートの作成やブラウザ操作を指示できる（web / モバイル）
- 音声通話を切っても、開始済みの Work タスクはテキスト側で継続する
- Plus / Pro / Business / Enterprise は Gmail / Google カレンダー / Google 連絡先を複数アカウント同時接続できる

## 影響範囲

- 対象ユーザー: Live プラグインは Free / Go を含む全プラン（プランごとの対応プラグイン範囲内）。Voice in Work は Voice と Work の両方にアクセスできる有料プラン
- 対象プラン: Business Premium の GPT-Live-1 は 1.25 クレジット/分。Enterprise の従量課金は $0.05/分
- API / UI / 管理者機能: 既存のアプリ接続・権限・ワークスペース制限がそのまま適用される。Slack コネクタのアクションは管理者が有効化してから使える

教材化メモ: src/content/ai-news-notes/chatgpt-openai/voice-live-plugins-work.mdx

## 原文確認

- 公式見出し: ChatGPT — Release Notes, September 23, 2026
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 補助: https://help.openai.com/en/articles/20001274-chatgpt-voice
- 情報源の制約: 当環境から公式2URLとも 403。本文は報道突き合わせによる再構成であり、原文は公式ページで確認すること。
