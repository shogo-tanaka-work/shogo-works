---
date: 2026-05-20
title: "GitHub Copilot: VS Code で Auto モデル選択がタスクに応じてルーティング"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-05-20-auto-model-selection-now-routes-based-on-your-task-in-vs-code
fetched_at: 2026-05-21T11:30:00+09:00
published_date: 2026-05-20
date_precision: date-only
category: enhancement
---

# 2026-05-20 GitHub Copilot Auto model selection が VS Code でタスク応答ルーティングに

## 公式内容の日本語要約

VS Code 上の GitHub Copilot の Auto モードが、推論・コード生成の複雑度・バグ診断難度・ツールオーケストレーションの必要性を評価して、最適な AI モデルを自動選択するようになった。リアルタイムのモデル可用性 / 信頼性メトリクスも考慮される。ユーザーは応答にホバーすると実際に選ばれたモデルを確認できる。有償ユーザーは Auto 利用時に **model multipliers が 10% 割引**となる。Enterprise はモデルポリシーが管理者設定で適用される。

## できるようになったこと

- VS Code の Copilot で **Auto** を選ぶとタスク内容に応じて自動でモデル選択
- 有償プランは Auto 利用で model multiplier 10% 割引
- 手動でのモデル切り替えはいつでも可能
- 応答にホバーすると選択されたモデル名を確認可能

## 影響範囲

- 対象: VS Code + Copilot 利用者全員（無償 / 有償）
- 対象プラン: 全プラン（割引は有償のみ）
- Enterprise: 管理者のモデルポリシー設定が前提

## 教材化メモ

「どのモデルを選べばいいか分からない」初学者向け教材で Auto モード推奨の根拠として使える。プレミアムリクエスト管理の教材では「Auto 利用で 10% 割引」を Tips として追記候補。

## 原文確認

2026-05-21T11:30:00+09:00 時点で確認。
