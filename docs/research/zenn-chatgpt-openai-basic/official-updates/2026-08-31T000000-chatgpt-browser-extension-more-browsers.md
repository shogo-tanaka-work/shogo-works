---
date: 2026-08-31
title: "ChatGPT ブラウザ拡張が Edge / Brave / Opera / Vivaldi に対応"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-09-01T09:20:00+09:00
published_at: 2026-08-31
date_precision: date-only
category: rollout
---

# 2026-08-31 ChatGPT ブラウザ拡張が Edge / Brave / Opera / Vivaldi に対応

## 公式内容の日本語要約

ChatGPT のブラウザ拡張機能が、**Microsoft Edge、Brave、Opera、Vivaldi** に対応した。これまでの対応ブラウザに加えて、Chromium 系の主要ブラウザが広くカバーされる。

拡張機能の役割は、開いているタブを ChatGPT Work / Codex の文脈として持ち込むこと、およびデスクトップアプリからブラウザ操作を指示することにある。タブをメンションして作業対象にできる。

**機能の提供範囲はブラウザによって差がある。** サイドチャットは Edge / Brave / Vivaldi で利用でき、**Opera はタブのメンションとブラウザ操作には対応するがサイドチャットは非対応**である。

セットアップの前にデスクトップアプリを更新する必要があり、実際に使えるかどうかはワークスペースの設定にも依存する。

## できるようになったこと

- ブラウザ拡張が Edge / Brave / Opera / Vivaldi で利用可能に
- 対応ブラウザで開いているタブをメンションし、ChatGPT Work / Codex の文脈として渡せる
- デスクトップアプリからブラウザ操作を指示できる

## 影響範囲

- 対象ユーザー: ChatGPT Work / Codex を使うデスクトップアプリ利用者
- 対象プラン: ワークスペース設定に依存
- API / UI / 管理者機能: ブラウザ拡張 UI。サイドチャットは Edge / Brave / Vivaldi のみ（Opera 非対応）

## 教材化メモ

- **AIニュース記事化は見送り（既出）。** 公開済み記事 `src/content/ai-news/chatgpt-openai/chatgpt-work-signed-in-websites-and-site-tools.mdx`（2026-08-25、PR マージ済み）が、ブラウザ拡張の Edge / Brave / Opera / Vivaldi 対応を既に扱っている。**Chrome と合わせて5種**であること、**Opera のみサイドチャット非対応**であること、設定場所が `Settings > Computer Use` であることまで書かれており、本日の Release Notes の記述より具体的。重複記事を作る利益がない。
- 日付の食い違いについては、同日の `2026-08-31T000000-chatgpt-site-tools-webmcp.md` の教材化メモに詳述した。本項目も同じ経緯（開発者向け changelog が先行、ヘルプセンター Release Notes への掲載が 08-31）と見られる。
- **本日の Release Notes で新たに読み取れる情報**は2点だけある。**「セットアップ前にデスクトップアプリの更新が必要」**であることと、**「実際の利用可否はワークスペース設定に依存する」**こと。既存記事には無い記述だが、いずれも単独記事にする重みは無い。**社内案内を作る場面で補足すべき運用上の前提**として、ここに記録しておく。
- 統制面の論点（Chrome だけ管理すればよかった構成が崩れる、Brave / Vivaldi は管理外に置かれがち）は既存記事の側で扱われている。

## 原文確認

- 公式見出し: 「Use the browser extension in more browsers」（August 31, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 取得制約: `help.openai.com` は WebFetch が HTTP 403 を返すため、Exa 経由で公式本文を取得して確認した。
- 原文全文は公式ページで確認してください。
