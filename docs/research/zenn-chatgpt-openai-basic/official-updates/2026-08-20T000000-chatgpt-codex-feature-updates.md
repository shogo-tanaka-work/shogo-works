---
date: 2026-08-20
title: "ChatGPT / Codex 更新 — Apple Messages プラグイン、Computer History の欧州提供、Codex スレッドの読み取り専用共有、Site の URL 変更と共同編集"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-08-21T09:20:00+09:00
published_at: 2026-08-20
date_precision: date-only
---

# 2026-08-20 ChatGPT / Codex 機能更新

## 公式内容の日本語要約

ChatGPT Release Notes の 2026-08-20 付見出し「Codex and ChatGPT feature updates」に6件が掲載された。`learn.chatgpt.com/docs/changelog` の同日エントリと突き合わせると、公開範囲の記述に差分がある（下記）。

**Apple Messages プラグイン**: Apple silicon Mac の ChatGPT デスクトップアプリで、iMessage / SMS / RCS の会話を読み取り・検索し、Messages 経由でメッセージを作成・送信できる。ChatGPT Work と Codex の両方で使える。既定では送信前に本文と宛先の承認を求める。公式ドキュメントには**承認の永続化に伴うリスク、権限の取り消し手順、承認プロンプトを無効化したタスクに関する既知の問題**が明記されている。

**Computer History の欧州提供**: EEA・スイス・英国で提供開始。macOS デスクトップアプリ向け。help.openai.com は「Pro ユーザー向け」、learn.chatgpt.com は「Pro / Business / Enterprise 向け、Business・Enterprise は管理者が先に有効化する必要がある」と記載しており、後者のほうが詳しい。既定でオフ、Memories が前提。

**Codex スレッドの読み取り専用共有**: macOS デスクトップアプリからローカル Codex スレッドのスナップショットを共有できる。スナップショットは静的で、ツール呼び出しやシェル入出力は含まない。個人アカウントのリンクは URL を知る全員が開けるが、ワークスペースアカウントのリンクは同一ワークスペースのメンバーに限定される。既知のシークレットパターンは伏字化されるが、**パス・差分・画像に機微情報が残りうるため確認が必要**と明記。リンクの確認・失効はデータ制御の Shared links から行う。

**ChatGPT Site の URL 変更**（Plus / Pro のオーナー、再デプロイ不要。旧アドレスはルートとクエリパラメータを含めてリダイレクト。カスタムドメインは別扱いで変更されない）、**Site の共同編集**（同一ワークスペースのアクティブメンバーをエディターとして招待。オーナーが公開範囲・設定・分析・所有権・バージョン復元・エディター管理を保持）、**ピン留めチャットのデバイス間同期**（デスクトップ と iOS。Android は対象外）も追加された。

## できるようになったこと

- Apple Messages プラグインで iMessage / SMS / RCS の読み取り・検索・送信（承認前提）
- Computer History を EEA・スイス・英国で利用（macOS、既定オフ、Memories 前提）
- Codex スレッドの読み取り専用スナップショット共有と失効管理
- ChatGPT Site の URL 変更（再デプロイ不要）と共同編集
- ピン留めチャットのデスクトップ / iOS 同期

## 影響範囲

- 対象ユーザー: ChatGPT デスクトップ（macOS）利用者、Codex 利用者、Site オーナー
- 対象プラン: Apple Messages は全プラン、Computer History は Pro / Business / Enterprise、Site の URL 変更は Plus / Pro
- API / UI / 管理者機能: UI 中心。Business / Enterprise では Computer History の管理者有効化が必要

教材化メモ: src/content/ai-news-notes/chatgpt-openai/apple-messages-plugin-and-computer-history-europe.mdx

## 原文確認

- 公式見出し: Codex and ChatGPT feature updates（August 20, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes 、https://learn.chatgpt.com/docs/changelog
- 原文全文は公式ページで確認してください。
