---
date: 2026-10-07
title: "Python / TypeScript SDK に browser use・computer use のベータクラスが追加"
service: "Claude Platform / SDK"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: enhancement
---

# 2026-10-07 SDK に browser use / computer use のクラス

## 公式内容の日本語要約

Claude の Python SDK と TypeScript SDK に、**browser use tool と computer use tool 用のクラスがベータとして追加された。**

使い方は、提供されたクラスをサブクラス化し、**ツール1つにつき1メソッドを自分のブラウザ自動化・デスクトップ自動化の実装に対して書く**という形である。その上で SDK 側が次を担う。

- ツールループの実行（モデルからのツール呼び出しを受け、結果を返す往復）
- ブラウザに対して設定した URL ポリシーとファイルポリシーの適用
- 承認コールバックの呼び出し

つまり、これまでアプリ側で書く必要があった「モデルの指示を解釈してループを回し、許可されない URL を弾き、人間の承認を挟む」という定型処理が SDK へ寄せられた。開発者が書くのは**実際に Playwright などを操作する部分だけ**になる。

ツール定義のトークン量は従来どおり大きい。`browser_toolset_20260801` の既定メンバーで約 6,600 入力トークン、`computer_toolset_20260801` の既定メンバーで約 4,500 入力トークンがリクエストに乗る。オプションメンバーを4つ全部有効にすると browser 側はさらに約 880 トークン増え、`configs` でメンバーを無効化すると減る。

なお Claude Haiku 5.5 では computer use に `computer_toolset_20260801` が必須で、旧 `computer_20250124` はエラーになる。

## できるようになったこと

- ツールループ・URL ポリシー・承認フローを自前実装せず、SDK 標準として使える
- 自社のブラウザ / デスクトップ自動化基盤を、メソッド実装だけで Claude に接続できる

## 影響範囲

- 対象ユーザー: Python / TypeScript SDK で browser use・computer use を実装する開発者
- 対象プラン: Claude API（beta）
- API / UI / 管理者機能: SDK（ベータ。API 仕様自体の変更ではない）

教材化メモ: src/content/ai-news-notes/claude/sdk-browser-computer-use-toolsets.mdx

## 原文確認

- 公式見出し: "SDK browser and computer use classes (Python and TypeScript SDKs, beta)"
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 併記: https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-sdk
- 原文全文は公式ページで確認してください。
