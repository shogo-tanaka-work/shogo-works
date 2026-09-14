---
date: 2026-09-10
title: "ChatGPT Library のファイル・フォルダ共有が可能に"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-09-12T09:20:00+09:00
published_date: 2026-09-10
date_precision: date-only
category: enhancement
---

# 2026-09-10 ChatGPT Library のファイル・フォルダ共有が可能に

教材化メモ: src/content/ai-news-notes/chatgpt-openai/library-sharing.mdx

## 公式内容の日本語要約

ChatGPT Library に **共有機能** が追加されました。ファイルやフォルダを共有し、アクセスできる相手を選び、共有されたコンテンツを会話の中で直接使えます。

### 新しくできること

- **個別の相手への共有**: 受信者を招待し、**Viewer または Editor** の権限を割り当てる
- **ワークスペース全体への共有**: ワークスペースの全員が使える状態にする
- **アクセス管理**: 共有ダイアログから、誰がアクセスできるかの確認、権限変更、アクセス削除を行う
- **共有コンテンツの利用**: `Shared with me` から項目にアクセスし、ChatGPT との会話で共有ファイルを使う

### 共有フォルダと所有権（重要）

**共有フォルダにアップロードされたファイルは、フォルダの所有者に帰属します。** アップロードした本人が誰かは記録されますが、所有者ではありません。

この結果として、**他人の共有フォルダにファイルをアップロードし、後でそのフォルダへのアクセス権を外された場合、ファイルは相手のフォルダに残り、アップロードした本人はアクセスを失います。**

## できるようになったこと

- ファイル・フォルダの個別共有（Viewer / Editor）とワークスペース全体共有
- 共有ダイアログでのアクセス権の確認・変更・削除
- `Shared with me` 経由での共有コンテンツの会話利用

## 影響範囲

- 対象ユーザー: ChatGPT Library 利用者
- 対象プラン: 公式リリースノートにプラン限定の記載なし
- API / UI / 管理者機能: UI（共有ダイアログ）。所有権はフォルダ所有者に帰属する仕様

## 原文確認

- 公式見出し: Share files and folders from your Library（September 10, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 原文全文は公式ページで確認してください。
