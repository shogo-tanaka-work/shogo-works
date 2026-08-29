---
date: 2026-08-28
title: "ChatGPT に複数の Google アカウントを接続できるようになった"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
official_url: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-08-29T09:05:00+09:00
published_date: 2026-08-28
date_precision: date-only
category: release
---

# 2026-08-28 ChatGPT に複数 Google アカウント接続

## 公式内容の日本語要約

2026-08-28 の ChatGPT リリースノートに **Connect multiple Google accounts to ChatGPT** が掲載された。Gmail / Google カレンダー / Google 連絡先の各プラグインについて、**複数のアカウントを同時に接続**できるようになった。

これまでは各プラグインにつき1アカウントしか接続できず、私用アカウントと業務アカウントを併用している利用者は、切り替えるか片方を諦めるかしかなかった。今回の変更で、**同じ会話の中に個人と業務の両方を持ち込める**。

公式が挙げている使い方は2つ。**複数のカレンダーをまとめて確認して1日の予定を立てる**こと、**接続した複数の受信箱を横断してメールを探す**こと。いずれも「アカウントをまたいで1回の指示で済ませる」形になる。

提供範囲は **Plus / Pro / Business / Enterprise の対象プラン**で、**グローバル提供**。web・デスクトップ・iOS・Android のすべてに対応する。

なお、プラグイン自体の提供可否はプラン・地域・ワークスペース設定に依存する旨が同ページに記載されており、今回の複数アカウント接続もその条件の上に乗る。

## できるようになったこと

- Gmail / Google カレンダー / Google 連絡先の各プラグインに **複数の Google アカウントを接続**できる
- 1つの会話の中で、**接続した複数アカウントのカレンダー・メールを横断**して扱える
- 対象は **Plus / Pro / Business / Enterprise**、web / デスクトップ / iOS / Android、グローバル提供

## 影響範囲

- 対象ユーザー: Google Workspace / Gmail をプラグイン経由で ChatGPT に接続している利用者
- 対象プラン: Plus / Pro / Business / Enterprise（プラグイン自体はプラン・地域・ワークスペース設定に依存）
- API / UI / 管理者機能: UI（プラグイン接続設定）。管理者はワークスペース設定でプラグイン可否を制御

## 原文確認

- 公式見出し: Connect multiple Google accounts to ChatGPT（August 28, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 教材化メモ: src/content/ai-news-notes/chatgpt-openai/multiple-google-accounts-plugins.mdx
- 原文全文は公式ページで確認してください。
