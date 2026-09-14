---
date: 2026-09-10
title: "プロジェクト API キーに有効期限を設定できるようになった"
service: "OpenAI Platform"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-09-11T09:02:00+09:00
published_at: 2026-09-10
date_precision: date-only
category: enhancement
---

# 2026-09-10 プロジェクト API キーの有効期限設定

## 公式内容の日本語要約

**プロジェクト API キーの作成時に有効期限（expiration date）を設定できる**ようになった。

さらに、**組織およびプロジェクト単位で「キーの最大有効期間」を強制**できる。Platform の設定で上限を決めると、**新規に作成されるキーは必ずその上限以内で失効する**。管理者が方針を決めれば、個々の開発者が期限なしのキーを作ることはできなくなる。

公式は、この更新を**キーのローテーションに関する本番運用のベストプラクティスに沿うもの**と位置づけている。

従来、API キーの棚卸しは「発行台帳を人が管理する」運用で支えるしかなかった。退職者が発行したキー、検証目的で作って消し忘れたキーが残り続ける事故は、それ自体が構成上避けられなかった。今回の変更は、その前提を**プラットフォーム側の強制力**へ移すものである。

教材化メモ: src/content/ai-news-notes/chatgpt-openai/api-key-expiration.mdx

## できるようになったこと

- プロジェクト API キーの作成時に有効期限を指定できる
- 組織・プロジェクト単位でキーの最大有効期間を強制できる
- 上限を設定すると、新規キーは必ずその範囲内で失効する

## 影響範囲

- 対象ユーザー: OpenAI API を使う組織の管理者・開発者
- 対象プラン: API（Platform 設定）
- API / UI / 管理者機能: 管理者機能

## 原文確認

- 公式見出し: API Key Expiration
- 公式URL: https://developers.openai.com/api/docs/changelog
- 原文全文は公式ページで確認してください。
