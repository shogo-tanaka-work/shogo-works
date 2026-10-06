---
date: 2026-09-30
title: "GitHub Copilot に HydraFusion（複数モデルのオーケストレーション、research preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-09-30T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-30 GitHub Copilot に HydraFusion

## 公式内容の日本語要約

**HydraFusion** が VS Code（v1.140 以降）と GitHub Copilot app に入った。**research preview** であり、公式も「変更の可能性がある」と明記している。

仕組みは、タスクに対するモデル選択を最適化問題として扱い、3つのワークフローのいずれかを選ぶものである。

- **Single** — 1つのモデルが直接解く
- **Cascade** — 効率的なモデルが下書きし、より強いモデルがレビューする
- **Critique** — 独立した批評モデルがレビューし、下書きしたモデルが修正する

対象は **Copilot Pro / Pro+ / Business / Enterprise**。**Business / Enterprise では管理者が preview features を有効化しないと使えない。**

プレミアムリクエストの倍率や課金方式についての記載はない。どのベンダーのモデルを使うかも changelog には書かれていない。

## できるようになったこと

- モデル選択とレビュー構成を Copilot 側に委ねる（research preview）
- Cascade / Critique による自動レビュー付き生成

## 影響範囲

- 対象ユーザー: Copilot Pro / Pro+ / Business / Enterprise
- 対象プラン: Max の記載なし
- API / UI / 管理者機能: **Business / Enterprise は preview features の有効化が前提**

## 教材化メモ

- **「どのモデルを使うか」を人間が選ぶ前提そのものが崩れ始めている。** auto model selection（既存）は1モデルを選ぶ機能だが、HydraFusion は**複数モデルを役割分担させる構成を自動で組む**。コストと品質のトレードオフが利用者から見えなくなる方向の変化で、課金方式の記載が無いことと合わせて、**「見積もれなくなる」リスクとして扱うべき**である。
- **Cascade / Critique は、人間のレビュー体制をそのままモデルに写した形**である。ドラフト担当とレビュー担当を分ける、批評専任を置く——組織設計の言葉でそのまま説明できるため、ハーネス設計の教材で使いやすい。
- research preview のまま既定クライアントへ入っている点は、**「試験機能が本番ツールに同梱される」**という最近の傾向の実例。preview features を組織として開けるかどうかの判断材料になる。

## 原文確認

- 公式見出し: HydraFusion in VS Code and the GitHub Copilot app
- 公式URL: https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app
- 原文全文は公式ページで確認してください。
