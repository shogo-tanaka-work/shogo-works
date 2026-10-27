---
date: 2026-10-23
title: "Copilot 使用状況メトリクス API が OpenCode など他社ツールの利用も集計"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode
fetched_at: 2026-10-26T09:40:00+09:00
published_at: 2026-10-23
date_precision: date-only
category: enhancement
---

# 2026-10-23 使用状況メトリクス API に `totals_by_client` が追加

## 公式内容の日本語要約

**Copilot の使用状況メトリクス API が、より多くのクライアントツールのモデル利用を報告するようになった。** これまでレポートに出ていなかった **OpenCode** を含む。データは新しい `totals_by_client` 配列で返る。

対象は enterprise / organization / enterprise-user / organization-user の各レポートで、1日版・28日版の両方。28日版では各 `day_totals` エントリの中に配列が入る。

**内訳として切り出されるクライアント**は `opencode`、`claude_code`、`codex`、`zed`、`copilot_cli`、`github_app`、`cloud_agent`、`code_review`、`vscode`、`jetbrains`。認識できないクライアントは `other` にまとめられる。各エントリにはリクエスト数、セッション数、トークン使用量、モデル別内訳が入る。

**既存フィールドは変わらない追加のみの変更で、必須の作業はない。** 新データを使うには enterprise owner / billing manager / organization owner、または `View Copilot Metrics` 権限を持つカスタムロールが必要で、Copilot usage metrics ポリシーの有効化が前提。

注意点として、`request_count` はプロンプト数ではなくモデル呼び出し数を数えるため、プロンプト数や対話回数と直接比較しない。クライアントの識別は各リクエストが送る integration ID に基づくため、`client` は best-effort な分類として扱う。Copilot code review と cloud agent からのリクエストは `product_selected` をモデル選択モードとして報告する。

## できるようになったこと

- Copilot のモデル利用を、Claude Code / Codex / OpenCode / Zed / JetBrains / VS Code などクライアント別に集計できる
- クライアント別にリクエスト数・セッション数・トークン使用量・モデル別内訳を取得できる

## 影響範囲

- 対象ユーザー: Copilot のメトリクスを見る enterprise / organization 管理者
- 対象プラン: 明記なし（Copilot usage metrics ポリシーの有効化が前提）
- API / UI / 管理者機能: 使用状況メトリクス API

## 教材化メモ

- **内訳に `claude_code` と `codex` と `opencode` が並んでいる点が、この告知のいちばん面白いところである。** GitHub Copilot のサブスクリプションのモデル枠が、Copilot 以外のエージェント CLI から消費されている実態を、GitHub 自身が計測対象として認めた形になる。**「どのツールを使うか」と「どのモデル契約を使うか」が分離している**現状の裏付けとして使える。
- `request_count` がモデル呼び出し数でありプロンプト数ではない、という注意は**メトリクスの読み違えを防ぐ基本**である。エージェントは1プロンプトで何度もモデルを呼ぶため、プロンプト数と比較すると「1人が異常に使っている」ように見える。
- 分類が integration ID 依存の best-effort である点も、**可観測性データの精度の限界**として教材に残せる。

## 原文確認

- 公式見出し: Usage metrics API adds usage from tools like OpenCode
- 公式URL: https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode
- 原文全文は公式ページで確認してください。
