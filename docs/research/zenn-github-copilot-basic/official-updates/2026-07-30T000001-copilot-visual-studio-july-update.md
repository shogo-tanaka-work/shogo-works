---
date: 2026-07-30
title: "GitHub Copilot in Visual Studio 7月更新 — Copilot SDK ベースの新エージェント、組織横断のカスタム指示"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-july-update
fetched_at: 2026-07-31T11:55:00+09:00
published_at: 2026-07-30
date_precision: date-only
category: release
---

# 2026-07-30 GitHub Copilot in Visual Studio 7月更新

## 公式内容の日本語要約

Visual Studio 向け Copilot の7月更新。

**Copilot SDK ベースの新エージェント（public preview）**: GitHub Copilot CLI を支えているのと同じ技術で構築された新しいエージェントの選択肢が public preview で提供される。公式の説明では「やり取りの往復を減らし、一発で正しく仕上がるタスクが増える」とされ、応答は短く目で追いやすい形式になっている。

**組み込みスキル**: .NET チームと Azure チームの知見が組み込みスキルとして同梱され、開発者が必要なものを選んで有効化できる。

**コードレビュー**: コードブロックを選択して「Copilot Actions > Review Selection」を選ぶと、その場で対応可能なインラインのフィードバックが得られる。

**組織レベルのカスタマイズ**: 組織のオーナーが、組織配下の全リポジトリに適用されるカスタム指示を設定できる。開発者ごとの個別設定が不要になる。この機能は GitHub Copilot Business または Enterprise が必要。

新エージェント、組み込みスキル、コードレビューは全プランで利用できる。組織レベルの指示のみ Business / Enterprise 限定。

## できるようになったこと

- Copilot SDK（Copilot CLI と同じ基盤）で構築された新エージェントを選択できる（public preview）
- .NET / Azure チーム由来の組み込みスキルを選択的に有効化できる
- コードブロックを選択して「Copilot Actions > Review Selection」でインラインレビューを受けられる
- 組織オーナーが全リポジトリに適用されるカスタム指示を設定できる（Business / Enterprise）

## 影響範囲

- 対象ユーザー: Visual Studio で Copilot を使う開発者、および組織オーナー
- 対象プラン: 新エージェント / 組み込みスキル / コードレビューは全プラン。組織レベルのカスタム指示は Business / Enterprise
- API / UI / 管理者機能: Visual Studio UI、組織設定

## 教材化メモ

- 「CLI と同じ基盤のエージェントが IDE に降りてくる」構図は、Copilot の実装が CLI 起点に統一されつつあることの表れ。ツール選定の教材で触れられる
- 組織レベルのカスタム指示は、`.github/skills`（code review の GA、2026-07-29）と並ぶ「AI への指示を組織資産として管理する」流れの一環。個人設定 → リポジトリ設定 → 組織設定という階層で整理できる
- .NET / Azure の組み込みスキルは、ベンダーが自社スタック向けの知見をスキルとして配る例。スキルの流通モデルの話に接続できる

## 原文確認

- 公式見出し: GitHub Copilot in Visual Studio — July update
- 公式URL: https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-july-update
- 原文全文は公式ページで確認してください。
