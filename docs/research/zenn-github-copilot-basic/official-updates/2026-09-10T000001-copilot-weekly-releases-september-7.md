---
date: 2026-09-10
title: "Copilot 週次リリース（9月7日ぶん） — Jira 連携、CLI の HydraFusion 実験、VS Code 1.137"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7
fetched_at: 2026-09-14T09:50:00+09:00
published_at: 2026-09-10T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-10 GitHub Copilot 週次リリース（9月7日ぶん）

## 公式内容の日本語要約

GitHub Copilot の週次リリースまとめ。クライアント別の内容は次のとおり。

**GitHub Copilot アプリ**: **Jira 連携**が利用可能になった。Jira の issue を共有キャンバスへ取り込み、調査と実装をその場で進められる。

**Copilot CLI**: **Project HydraFusion が実験段階（experimental）に入った。** ローカル / クラウド / 複合モデル間の**自動セマンティックルーティング**で、性能・コスト・レイテンシを最適化する。

**VS Code 1.137**: 3点。**エージェント自動化が public preview**（繰り返しタスク向け）、**ボイスモードが experimental へ移動**、エージェントウィンドウがリポジトリを開かずに issue / PR の詳細を表示できるようになった。

**JetBrains**: 企業管理者がサンドボックス設定（有効化、ファイルシステムアクセス、ネットワーク設定、開発ツール権限）を中央管理できるようになった（09-08 の個別告知と同内容）。

**モデル**: **GPT-6 Astra が一般提供に到達**、**Gemini 3.8 Flash が新規に利用可能**、**MAI-Code-1-Flash が廃止**（09-10 の個別告知と同内容）。

## できるようになったこと

- Copilot アプリで Jira issue を共有キャンバスへ取り込める
- Copilot CLI でローカル / クラウド / 複合モデルの自動ルーティングを試せる（experimental）
- VS Code で繰り返しタスクのエージェント自動化を試せる（public preview）
- GPT-6 Astra を GA で、Gemini 3.8 Flash を新規に選択できる

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者全般
- 対象プラン: 記載なし（機能ごとに preview / experimental の別あり）
- API / UI / 管理者機能: Copilot アプリ / CLI / VS Code / JetBrains

## 教材化メモ

- **HydraFusion の「自動セマンティックルーティング」は、モデル選定を利用者の手から外す方向の動きである。** 前週まで週次サマリーで追ってきたのは「どのモデルが退役するか」だったが、ルーティングが自動化されると**そもそもどのモデルが使われたかが利用者に見えなくなる。** コスト統制と再現性の議論の前提が変わるため、experimental のうちから観察対象にしておく価値がある。
- **GPT-6 Astra の GA が、日次側で追っている OpenAI の動きと同じ週に Copilot 側へ到達している。** モデル提供元の発表からサードパーティ製品への反映までのリードタイムを測る材料になる（OpenAI 側の Astra 提供開始は 09-09、Copilot 側の GA 告知は 09-10 の週次まとめ）。
- 記事化はしない（週次確認ソースの通常更新。個別告知ぶんは別ファイルで記録済み）。

## 原文確認

- 公式見出し: GitHub Copilot weekly releases — September 7
- 公式URL: https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7
- 原文全文は公式ページで確認してください。
