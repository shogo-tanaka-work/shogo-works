---
date: 2026-07-29
title: "Sign in with ChatGPT（beta）提供開始"
service: "ChatGPT / OpenAI"
source: https://learn.chatgpt.com/docs/changelog
fetched_at: 2026-07-30T09:20:00+09:00
published_at: 2026-07-29
date_precision: date-only
category: release
---

# 2026-07-29 Sign in with ChatGPT（beta）

## 公式内容の日本語要約

ChatGPT / Codex の changelog に「Sign in with ChatGPT (beta)」が追加された。ChatGPT アカウントを使って対応サービスのアカウントを作成・連携できる仕組みで、プラグイン接続時の手順が減る。パートナーサイト側でも「Sign in with ChatGPT」ボタンからログインできる。

先行対応パートナーは Airtable、GitLab、HubSpot、Notion、Supabase、Vercel の6社。パートナーへ渡る情報は名前、メールアドレス、（あれば）プロフィール画像のみ。プラグインごとの権限承認は従来どおり別途必要で、ログイン連携が権限付与を兼ねるわけではない。

ChatGPT と Codex の双方で機能し、プラグインディレクトリ経由で利用する。対象プランは Plus、Pro、Business、Edu、Enterprise。

## できるようになったこと

- ChatGPT アカウントを ID プロバイダーとして、対応サービスのアカウント作成・連携ができる
- パートナーサイト側から「Sign in with ChatGPT」でログインできる
- プラグイン接続時の初期セットアップ手順が短縮される

## 影響範囲

- 対象ユーザー: Plus / Pro / Business / Edu / Enterprise
- 対象プラン: 上記（Free の記載なし）
- API / UI / 管理者機能: UI（プラグインディレクトリ・パートナーサイト）。beta 提供

## 教材化メモ

- 「ChatGPT が ID プロバイダー側に回る」という構図の変化。Google / GitHub アカウントによるソーシャルログインと同じ枠に OpenAI が入る話として説明できる
- 渡る情報が名前・メール・プロフィール画像に限定される点、権限承認は別という点は、SaaS 連携のガバナンス教材でそのまま使える論点
- beta かつ対応パートナー6社の段階なので、教材では「今後増える前提の仕組み」として位置づける

## 原文確認

- 公式見出し: Sign in with ChatGPT (beta)
- 公式URL: https://learn.chatgpt.com/docs/changelog
- 補足: `developers.openai.com/codex/changelog` は `learn.chatgpt.com/docs/changelog` へ308リダイレクト
- 原文全文は公式ページで確認してください。
