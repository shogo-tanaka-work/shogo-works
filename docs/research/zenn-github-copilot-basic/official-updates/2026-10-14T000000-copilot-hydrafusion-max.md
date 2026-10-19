---
date: 2026-10-14
title: "GitHub Copilot の HydraFusion が更新され、HydraFusion Max が追加（research preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option
fetched_at: 2026-10-19T09:40:00+09:00
published_at: 2026-10-14
date_precision: date-only
category: enhancement
---

# 2026-10-14 HydraFusion の更新と Max オプション

## 公式内容の日本語要約

**HydraFusion は、複数モデルを編成して1つの回答を出す research preview の機能である。** 利用者がタスクごとにモデルを選ばなくて済むようにする位置づけで、VS Code / GitHub Copilot app / Copilot CLI で使える。

**今回の更新は4点。** (1) **モデルプールが Claude Opus 5.5 / GPT-6 Astra / GPT-6.1 Sol / GPT-6 Luna** になり、各ステップで使うモデルは編成ワークフローが決める。(2) **ステップ別の reasoning effort** が入り、**下書きは medium、レビューは high** で動く（従来は各モデルの既定値）。(3) **Cascade** は、成果物を検査して**必要なときだけ修正を要求する judging ステップ**を追加した（従来は必要時に強いモデルへ段階的に上げていた）。(4) **Critique** は、テキスト要約ではなく**実際のワークスペースを検査するツール**に重心を移し、複数の critic モデルを並列で使う。

**HydraFusion Max は、同じアーキテクチャとワークフローの上で「難しいタスクでのフロンティア性能」に寄せたオプションである。** 深さが要る箇所に高い reasoning effort を当て、編成はトークン効率も考慮する。通常の HydraFusion は**速度・コスト・性能の折り合い**を取る選択肢で、適度なトークン節約がある。

対象プランは Copilot Pro / Pro+ / Business / Enterprise で、**実験的機能・プレビュー機能を有効にしていること**と**組織のモデルポリシーに従うこと**が前提である。価格・乗数・既定有効化の状態は記載がない。

## できるようになったこと

- HydraFusion Max を選び、難しいタスクへ高い reasoning effort を当てた編成を使える
- 下書き medium / レビュー high のステップ別 effort で動く

## 影響範囲

- 対象ユーザー: 実験的・プレビュー機能を有効にした Copilot 利用者
- 対象プラン: Pro / Pro+ / Business / Enterprise
- API / UI / 管理者機能: VS Code / Copilot app / Copilot CLI。モデルポリシー（管理者）

## 教材化メモ

- **「モデルを選ばせない」方向の機能が、ベンダー横断で増えている**（Claude Code の auto mode、Copilot の HydraFusion）。**選択をツール側へ委ねると、何が動いたかの可観測性が課題になる**という論点へつながる。同週 Claude Code 側は auto mode の classifier decision を OpenTelemetry へ出す方向へ動いた。
- **ステップ別に effort を変える設計**は、「1タスク1モデル1設定」ではないコスト設計の具体例。下書きは安く、レビューは厚く、という配分は自作の自動化にも一般化できる。
- **research preview であり価格の記載が無い**点は、本番運用へ入れる判断材料が足りないことを意味する。試用と導入を分ける判断の練習に使える。

## 原文確認

- 公式見出し: HydraFusion updates and new Max option
- 公式URL: https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option
- 原文全文は公式ページで確認してください。
