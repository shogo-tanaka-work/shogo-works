---
date: 2026-10-28
title: "GitHub Universe 2026: Copilot Fusion が GA、ローカルモデルのルーティングと画像生成"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion
fetched_at: 2026-11-02T09:40:00+09:00
published_at: 2026-10-28T15:30:00Z
date_precision: timestamp
category: release
---

# 2026-10-28 GitHub Universe 2026: Copilot Fusion が GA、ローカルモデルのルーティングと画像生成

## 公式内容の日本語要約

**Copilot Fusion が GA。** タスクごとにモデルを選ぶのではなく Fusion を選ぶと、Copilot が複数モデルのルーティングとオーケストレーションを行う。Project HydraFusion の多モデル編成と Copilot auto model selection のモデル選定を統合したもの。利用者は Standard / High / Max の effort を選ぶだけで、単一モデルか複数モデルの組み合わせかは Copilot が決める。公式は Artificial Analysis Coding Agent Index で Fusion Max が 60（Claude Code + Opus 5.5 Max の2点差以内）、API コストは約半分、トークン約半分、タスク所要時間約40%減と記載。**Fusion は現行の Auto モデルオプションを置き換え、段階的に全利用者へ展開される。最初の30日は Fusion の利用が30%割引。**

**ローカルモデルのルーティングが experimental preview。** Fusion が端末上のモデルとクラウドモデルを選び分ける。対応 Windows では Windows ML provider 経由で MAI Code 1.1 Flash をダウンロード・設定できる。有効化は CLI の experimental mode + `/model`、Copilot app の Settings > Model providers と Experiments、VS Code の `chat.copilot.localModel.enabled`。

**画像生成・編集が Copilot 内で可能に。** 画像を依頼すると、選択中の推論モデルが GPT Image 2.5 Flare による専用の画像生成ツールを呼び、インラインでプレビューしてプロジェクトへ保存する。**organization / enterprise の owner はモデルポリシーで image generation モデルを無効化して止められる。** 「Made with AI」の可視ウォーターマークは opt-in（既定は off）。

## 影響範囲

- 対象ユーザー: Copilot 全般（Fusion は段階展開、ローカルモデルは実験的）
- 管理者: 画像生成はモデルポリシーで無効化可能。Auto オプションは Fusion へ置き換わる

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**「モデルを選ぶ」から「effort を選ぶ」への移行**が GA 水準に達した例。Claude Code の effort 指定、Codex の reasoning effort 変更と同じ方向で、モデル名での比較・選定という前提そのものが崩れつつある。既存教材でモデル選定表を載せている箇所は、Auto → Fusion の置き換えで記述が古くなる。

## 原文確認

- 公式URL: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion 、https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models 、https://github.blog/changelog/2026-10-28-generate-and-edit-images-directly-in-copilot
- 原文全文は公式ページで確認してください。
