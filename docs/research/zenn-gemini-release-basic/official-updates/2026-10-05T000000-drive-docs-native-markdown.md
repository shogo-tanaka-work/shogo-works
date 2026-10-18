---
date: 2026-10-05
title: "Drive と Docs が Markdown（.md）をネイティブにプレビュー・編集・共同編集"
service: "Google Workspace / Drive / Docs"
source: https://workspaceupdates.googleblog.com/2026/10/preview-edit-and-collaborate-on-Markdown-files-natively-across-Drive-and-Docs.html
fetched_at: 2026-10-06T09:40:00+09:00
published_at: 2026-10-05
date_precision: date-only
rollout_date: 2026-10-05
category: rollout
---

# 2026-10-05 Drive と Docs が Markdown をネイティブにプレビュー・編集・共同編集

## 公式内容の日本語要約

Google は 2026-10-05、**Google Drive と Google Docs で Markdown ファイル（`.md` / `.markdown`）を変換なしに扱えるようにした**と告知した。Docs で直接開いて編集・共同編集でき、Drive 側ではレンダリング済みのプレビュー（整形済み本文、クリック可能なリンク、表構造）が表示される。

公式は変更理由として、**従来は Markdown を Doc 形式へ変換する必要があり、その過程で書式が変わり、コメントが失われ、ファイルが分断されていた**ことを挙げている。今回の対応でその変換の摩擦がなくなる。

**公式は LLM との関係を明示している。** Markdown は「構造化されたコンテンツを保持するために大規模言語モデルが広く使う標準テキスト形式」であり、**ユーザーと AI エージェントが、Markdown 構文を手で編集したり形式を変換したりせずに同じファイルを共同編集できる**ようになる、と説明している。Docs のリアルタイム編集とコメント機能はそのまま使える。

## できるようになったこと

- Docs で `.md` / `.markdown` を**変換せずに**開いて編集・共同編集できる
- Drive 上でレンダリング済みプレビュー（整形本文・リンク・表）が見える
- 管理者設定・ユーザー設定は不要

## 影響範囲

- 対象ユーザー: 全 Google Workspace 利用者と個人 Google アカウント利用者
- 対象プラン: 全エディション + 個人アカウント
- API / UI / 管理者機能: UI（Drive / Docs）。管理コントロールなし
- ロールアウト: 2026-10-05 開始、Rapid / Scheduled の両ドメインで最大15日の段階展開

教材化メモ: src/content/ai-news-notes/gemini/drive-docs-native-markdown.mdx

## 原文確認

- 公式見出し: Preview, edit and collaborate on Markdown (.md) files natively across Drive and Docs
- 公式URL: https://workspaceupdates.googleblog.com/2026/10/preview-edit-and-collaborate-on-Markdown-files-natively-across-Drive-and-Docs.html
- 原文全文は公式ページで確認してください。
