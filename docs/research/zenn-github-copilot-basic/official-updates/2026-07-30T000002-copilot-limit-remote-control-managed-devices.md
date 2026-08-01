---
date: 2026-07-30
title: "Copilot のリモート制御を管理対象デバイスに限定できる（remoteControl 設定）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-30-limit-remote-control-to-managed-devices
fetched_at: 2026-07-31T11:55:00+09:00
published_at: 2026-07-30
date_precision: date-only
category: policy
---

# 2026-07-30 Copilot リモート制御の管理対象デバイス限定

## 公式内容の日本語要約

Copilot のリモート制御（モバイル、Web、VS Code から遠隔で Copilot セッションを操作する機能）に対して、どのデバイスがリモート制御されるセッションをホストできるかを制限する `remoteControl` エンタープライズ管理設定が追加された。

設定できるモードは3つ。

- `requireSSO`: シングルサインオンによる認可を必須にする
- `disabled`: リモート制御を全面的に禁止する
- `enabled`: 制限なしで許可する

適用方法も3系統ある。

1. サーバー管理（`.github-private` リポジトリ経由）: エンタープライズのユーザーアカウントに適用
2. MDM 管理: 特定の管理対象デバイスに適用
3. ファイルベース: 設定ファイルを受け取った任意のマシンに適用

対象は enterprise と organization。

## できるようになったこと

- `remoteControl` 設定で、リモート制御されるセッションをホストできるデバイスを制限できる
- `requireSSO` / `disabled` / `enabled` の3モードを選択できる
- サーバー管理（`.github-private`）、MDM、設定ファイルの3系統で配布できる

## 影響範囲

- 対象ユーザー: エンタープライズ / 組織の管理者
- 対象プラン: enterprise、organization（changelog上、Business / Enterprise 相当）
- API / UI / 管理者機能: エンタープライズ管理設定。MDM 連携あり

## 教材化メモ

- 「セッションをどこからでも操作できる」機能に対して、デバイス側から制限をかけるという発想。機能そのものの可否ではなく実行場所を制御する設計として説明できる
- MDM 経由の配布に対応している点は、AI ツールの統制が既存の端末管理基盤に載る例。情シス向け教材で「新しい管理系統を作らずに済む」という論点に使える
- `requireSSO` という中間の選択肢があることは、全面禁止と全面許可の二択にしないポリシー設計の実例

## 原文確認

- 公式見出し: Limit remote control to managed devices
- 公式URL: https://github.blog/changelog/2026-07-30-limit-remote-control-to-managed-devices
- 原文全文は公式ページで確認してください。
