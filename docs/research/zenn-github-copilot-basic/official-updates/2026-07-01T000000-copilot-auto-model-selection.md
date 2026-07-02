---
date: 2026-07-01
title: "GitHub Copilot Enterprise：デフォルトオートモデル選択"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-01-enterprises-can-default-to-auto-model-selection
fetched_at: 2026-07-02T12:00:00+09:00
published_at: 2026-07-01T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-07-01 GitHub Copilot Enterprise オートモデル選択デフォルト化

## 公式内容の日本語要約

企業管理者が `managed-settings.json` の `model` フィールドを `auto` に設定することで、組織全体の新規会話をオートモデル選択でスタートさせられる機能が追加。Business・Enterprise ライセンスユーザーに自動適用。ユーザーは個別に別モデルへ切り替え可能。VS Code 1.126 以上が必要。

## できるようになったこと

- `managed-settings.json` の `model: "auto"` で組織全体のデフォルトモデル選択を「オート」に設定
- ユーザーは個別に別モデルへ切り替え可能（管理者設定はデフォルトのみ制御）
- Business / Enterprise ライセンスで利用可能

## 影響範囲

- 対象ユーザー: Business / Enterprise 管理者
- 要件: VS Code 1.126 以上

## 原文確認

- 公式URL: https://github.blog/changelog/2026-07-01-enterprises-can-default-to-auto-model-selection
- 原文全文は公式ページで確認してください。
