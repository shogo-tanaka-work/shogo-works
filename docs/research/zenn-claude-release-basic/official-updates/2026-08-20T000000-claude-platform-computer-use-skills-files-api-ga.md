---
date: 2026-08-20
title: "computer use / browser use ツール / Skills API / Files API が Claude Platform で一般提供"
service: "Claude Platform"
source: https://claude.com/blog/computer-use-skills-api-files-api
fetched_at: 2026-08-21T09:20:00+09:00
published_at: 2026-08-20
date_precision: date-only
---

# 2026-08-20 computer use / browser use ツール / Skills API / Files API の一般提供

## 公式内容の日本語要約

Anthropic は Claude Platform において、computer use、Skills API、Files API の一般提供（GA）を開始した。あわせて computer use の一部として **browser use ツール**を新設した。3つを組み合わせることで「ソフトウェアを操作し、自社の専門知識を適用し、成果物ファイルを返す」エージェントを構築できる、というのが公式の位置づけである。

computer use はスクリーンショットを見てクリック・入力・スクロールを行う仕組みで、自動化を前提に作られていないアプリケーションも操作できる。今回の GA で **1回のモデル呼び出しにつき1アクションだった制約が撤廃され、1ターンで複数アクションを実行できる**ようになった。呼び出し回数と所要時間が減る。加えて computer use は BAA 下の **HIPAA 規制ワークロードの対象**になった。

新しい browser use ツールは、スクリーンショットに加えて**ページ構造を読み取る**。画面上の座標ではなく特定のフィールドやボタンを対象に操作するため、ピクセルベースより指定が安定する。

Skills API は、指示・スクリプト・テンプレートをまとめた「スキル」を**アップロードしバージョン管理する API**。スキルは Claude のコード実行サンドボックス内で動くため、利用者側でホスティングは不要。Files API は PDF や表計算ファイルを一度アップロードして ID で参照する仕組みで、GA にあわせて**自動有効期限、レート上限5倍、組織あたり 1TB のストレージ**が入った。

提供面では、Skills API と Files API が **Microsoft Foundry** 経由でも利用可能。更新版 computer use と browser use ツールは **Google Cloud Vertex AI に近日提供**予定。既存の beta 連携は移行期間中も動作する。

## できるようになったこと

- computer use が1ターンで複数アクションを実行（呼び出し回数と所要時間の削減）
- computer use が BAA 下の HIPAA 規制ワークロードに対応
- browser use ツールでページ構造ベースの Web 操作
- Skills API による独自スキルのアップロードとバージョン管理
- Files API の自動有効期限、レート上限5倍、組織あたり 1TB ストレージ

## 影響範囲

- 対象ユーザー: Claude Platform の API 利用者・エージェント開発者
- 対象プラン: Claude Platform（Microsoft Foundry 経由も一部対応）
- API / UI / 管理者機能: API（beta フラグ運用から GA へ移行）

教材化メモ: src/content/ai-news-notes/claude/computer-use-skills-api-files-api-ga.mdx

## 原文確認

- 公式見出し: Build production agents with computer use, the Skills API, and the Files API
- 公式URL: https://claude.com/blog/computer-use-skills-api-files-api
- 原文全文は公式ページで確認してください。
