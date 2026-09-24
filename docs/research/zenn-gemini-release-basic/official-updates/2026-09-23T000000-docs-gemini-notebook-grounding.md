---
date: 2026-09-23
title: "Google Docs で Gemini Notebook をコンテキストソースにできる。出典付きで下書きを生成"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/09/ground-ai-prompts-in-google-docs-on-existing-sources-from-Gemini-Notebook.html
fetched_at: 2026-09-24T09:40:00+09:00
published_date: 2026-09-23
date_precision: date-only
rollout_date: 2026-09-23
category: enhancement
---

# 2026-09-23 Google Docs × Gemini Notebook グラウンディング

## 公式内容の日本語要約

Google は 2026-09-23、**Google Docs で Gemini Notebook をコンテキストソースとして参照できる**機能を導入した。Workspace Intelligence の基盤の上に作られたもので、「深いリサーチ」と「コンテンツ作成」の間の断絶を埋める、という位置付けである。

使い方は単純で、Docs のサイドパネルまたは下部バーで `@` を入力し、既存の Notebook を参照する。Gemini はその Notebook に集めたソースに基づいて出力を生成し、**インライン引用を付ける**。タブを切り替えたり、Notebook と Docs の間でコピー＆ペーストしたりする必要がなくなる。プロジェクト提案書や技術ホワイトペーパーの下書きが想定用途として挙げられている。

**ロールアウトは Rapid Release / Scheduled Release とも「Available now」**で、段階展開ではない。**管理者側は Drive の Gemini for Workspace が有効なら既定で利用可能**になる。エンドユーザー側は Workspace のスマート機能が有効になっている必要がある。

対象エディションは Business Standard / Plus、Enterprise Standard / Plus、Education Plus、消費者向けは Google AI Pro / Ultra、教育向けアドオン（Google AI Pro for Education、Teaching and Learning）、AI Expanded Access。**Business Starter と Enterprise Starter は対象外**である点に注意。

教材化メモ: src/content/ai-news-notes/gemini/docs-notebook-grounding.mdx

## できるようになったこと

- Google Docs のサイドパネル / 下部バーで `@` から Gemini Notebook を参照できる
- 参照した Notebook のソースに基づいて Gemini が出力し、インライン引用が付く
- Notebook と Docs の間のコピー＆ペーストが不要になる

## 影響範囲

- 対象ユーザー: Workspace のスマート機能が有効なエンドユーザー
- 対象プラン: Business Standard / Plus、Enterprise Standard / Plus、Education Plus、Google AI Pro / Ultra、Google AI Pro for Education、Teaching and Learning、AI Expanded Access（**Business Starter / Enterprise Starter は対象外**）
- API / UI / 管理者機能: Drive の Gemini for Workspace が有効なら既定で利用可能。個別の新規管理項目は追加されていない

## 原文確認

- 公式見出し: Ground AI prompts in Google Docs on existing sources from Gemini Notebook
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/ground-ai-prompts-in-google-docs-on-existing-sources-from-Gemini-Notebook.html
- 原文全文は公式ページで確認すること。
