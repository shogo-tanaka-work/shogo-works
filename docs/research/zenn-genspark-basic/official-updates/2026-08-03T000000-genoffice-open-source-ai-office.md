---
date: 2026-08-03
title: "Genspark が GenOffice をオープンソース公開（Word / Excel / PowerPoint / PDF 対応のAIオフィススイート）"
service: "Genspark"
source: https://www.genspark.ai/blog/genoffice-open-source-ai-office
fetched_at: 2026-08-04T10:02:00+09:00
published_date: 2026-08-03
date_precision: date-only
category: release
---

# 2026-08-03 Genspark GenOffice オープンソース公開

## 公式内容の日本語要約

Genspark が、デスクトップ向け AI オフィススイート「GenOffice」をオープンソースとして公開した。公式は「PC / Mac 向けで世界初のフル機能オープンソース AI Office」と位置づけている。

Word / Excel / PowerPoint / PDF のファイル形式に対応し、主要 AI モデルを背後に置いて、タブを切り替えずに調査・執筆・データ分析・ファイル編集を行える構成。ライセンス料・広告・ウォーターマークはなく、誰でも無償で利用できるとしている。

配布は `genspark.ai/genoffice` からの Mac / Windows 向けダウンロード、コードベースは GitHub で全公開。フォーク・コントリビュート・自社ワークフローへの改変が可能とされている。現時点ではアルファ版で、Alpha はエンジニア1名が1週間、約1万ドル分のトークンで構築したと公式が説明している。

なお、本文ページ（`genspark.ai/blog/genoffice-open-source-ai-office`）は直接フェッチが 403 のため、公式ブログ一覧での掲載日・タイトルと、genspark.ai ドメインに限定した公式検索結果を根拠にしている。

## できるようになったこと

- Word / Excel / PowerPoint / PDF を扱える AI オフィススイートを Mac / Windows に無償導入できる
- コードベースが GitHub 公開され、フォークや自社向け改変ができる
- ライセンス料・広告・ウォーターマークなしで利用できる

## 影響範囲

- 対象ユーザー: デスクトップでのドキュメント作業を AI に任せたい個人・企業。自前でオフィス系 AI ツールを改変したい開発者
- 対象プラン: 無償（オープンソース）
- API / UI / 管理者機能: デスクトップアプリ（Mac / Windows）、GitHub リポジトリ

## 教材化メモ

- `src/content.config.ts` の `aiNews.tool` enum に `genspark` が無いため、本件は AIニュース記事化の対象外。enum 追加を検討する場合は、Genspark 系の記事本数が継続的に見込めるかを先に判断する。
- 「オープンソースのデスクトップ AI オフィス」というカテゴリ自体が新しく、既存の Microsoft 365 Copilot / Google Workspace との比較教材の題材になりうる。ただしアルファ版のため、実運用前提の教材化は安定版を待つ。

## 原文確認

- 公式見出し: GenOffice: The First Open-Source AI Office Suite
- 公式URL: https://www.genspark.ai/blog/genoffice-open-source-ai-office
- 製品ページ: https://www.genspark.ai/genoffice
- 原文全文は公式ページで確認してください。
