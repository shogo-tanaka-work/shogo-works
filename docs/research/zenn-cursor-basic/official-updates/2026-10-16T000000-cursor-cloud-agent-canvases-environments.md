---
date: 2026-10-16
title: "Cursor の cloud agent が canvas を作れるように。Environments API が beta、環境は300リポジトリまで"
service: "Cursor"
source: https://cursor.com/changelog/cloud-agent-canvases-and-environments
fetched_at: 2026-10-19T09:55:00+09:00
published_at: 2026-10-16
date_precision: date-only
category: enhancement
---

# 2026-10-16 Cursor cloud agent の canvas と環境の改善

## 公式内容の日本語要約

**3点の更新である。**

**cloud agent が作業の一部として対話的な canvas を作れるようになった。** 完成した canvas はリンクを送ることでチームへ共有できる。

**Environments API が beta で提供開始。** エージェントが動くクラウド環境を**プログラムから作成・管理できる**。

**環境が大きく・速くなった。** cloud agent の環境が**最大300リポジトリ**に対応し、**大きな環境のロードが5倍速く**なった。

提供プラン、API の認証方式、beta の制約、300リポジトリの上限が何に対する上限か（1環境あたり）の詳細は、changelog の記載からは確認できない。

## できるようになったこと

- cloud agent の成果物として対話的な canvas を作り、リンクで共有できる
- Environments API（beta）からクラウド環境を作成・管理できる
- 1環境で最大300リポジトリを扱える

## 影響範囲

- 対象ユーザー: Cursor の cloud agent 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Environments API（beta）、cloud agent の UI

## 教材化メモ

- **「エージェントの成果物がテキストや diff ではなく、見られる画面になる」**流れの一例。**同週に Cursor の canvas、前月に Claude の Artifacts 系、Copilot の HydraFusion のような編成機能**と並べると、成果物の形式が広がっている様子が見える。
- **環境をプログラムから作る API**が出た点は、**エージェント実行環境そのものが管理対象になった**ことを意味する。CI の worker をコードで管理するのと同じ発想で、**環境の棚卸し・コスト管理が新しい運用項目になる**。
- **300リポジトリという上限値**は、monorepo ではなく多リポジトリ構成の組織を想定した数字である。自社の構成でこの上限に当たるかを確認する、という実務的な読み方ができる。

## 原文確認

- 公式見出し: Cloud Agent Canvases and Environment Improvements
- 公式URL: https://cursor.com/changelog/cloud-agent-canvases-and-environments
- 原文全文は公式ページで確認してください。
