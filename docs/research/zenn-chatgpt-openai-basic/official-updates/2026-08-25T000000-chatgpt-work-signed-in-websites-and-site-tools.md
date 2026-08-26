---
date: 2026-08-25
title: "ChatGPT Work がログインの必要なサイトでもタスクを実行可能に。Site tools（WebMCP）とブラウザ拡張の対応拡大も同日"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-08-26T09:05:00+09:00
published_at: 2026-08-25
date_precision: date-only
category: release
---

# 2026-08-25 ChatGPT Work のサインイン付きサイト対応と Site tools

## 公式内容の日本語要約

ChatGPT Work のブラウザ（web / モバイル）が、**サインインを必要とするサイトでもタスクを続行できる**ようになった。サイト側が認証を許可している場合、ChatGPT がログイン画面を提示し、利用者が自分で資格情報（必要ならセキュリティコードも）を入力する。以降そのセッションはサインイン状態が維持されることがあり、毎回の再ログインは不要。パスワードマネージャーの利用に対応する。

公式は**「ChatGPT はユーザー名とパスワードを見ることができず、モデルにも渡されず、学習にも使われない。保存もしない」**と明記している。閲覧履歴は Settings > Cloud browser > Browser data から、全サイト分または個別サイト単位で削除できる。予約や決済といった影響の大きい操作の前には必ず確認を求める。対象は Plus / Pro プラン。

公式が挙げる用途は、引っ越し先の公共料金の申し込み、DMV の予約やパスポート更新書類の記入、保険ポータルでの検査費用の確認、求人条件に合う人材プロフィールの探索など、いずれも**ログインの内側にある業務**である。

同日の Codex / ChatGPT 開発者向け changelog では、関連する2点が同時に告知されている。**ブラウザ拡張の対応拡大**（Chrome に加えて Microsoft Edge / Brave / Opera / Vivaldi。5種すべてでタブメンションとブラウザ操作に対応、Opera のみサイドチャット非対応）と、**Site tools（WebMCP）**（デスクトップアプリ内蔵ブラウザで、Web サイト側が提供するツールを ChatGPT Work / Codex が使ってページを操作できる。GPT-5.6 Sol または GPT-5.6 Terra が必要で、GPT-5.6 Luna では使えない）。

Site tools とクラウドブラウザのサインインは、いずれも **Enterprise / Edu ワークスペースでは利用不可**と明記されている。

## できるようになったこと

- ChatGPT Work のブラウザが、サインインが必要なサイトでもタスクを継続（Plus / Pro）
- サインイン情報の入力はチャット内ではなくサインインフロー上で行い、モデルには渡らない
- クラウドブラウザの閲覧履歴を全体・サイト単位で削除
- ブラウザ拡張が Edge / Brave / Opera / Vivaldi に対応
- Site tools（WebMCP）でサイト提供のツールを ChatGPT Work / Codex が利用（GPT-5.6 Sol / Terra 限定）

## 影響範囲

- 対象ユーザー: サインイン機能は Plus / Pro。ブラウザ拡張は ChatGPT デスクトップアプリの Settings > Computer Use から設定
- 対象プラン: **Enterprise / Edu ワークスペースでは Site tools・サイトサインインとも対象外**
- API / UI / 管理者機能: UI。Web サイト側のアクセス許可と操作確認の要件は従来どおり適用

教材化メモ: src/content/ai-news-notes/chatgpt-openai/chatgpt-work-signed-in-websites-and-site-tools.mdx

## 原文確認

- 公式見出し: 「ChatGPT Work can now complete tasks on signed-in websites」（ChatGPT Release Notes, August 25, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 併記: 「Browser extensions, site tools, and cloud sign-in」（ChatGPT & Codex changelog, 2026-08-25） https://learn.chatgpt.com/docs/changelog
- 原文全文は公式ページで確認してください。
