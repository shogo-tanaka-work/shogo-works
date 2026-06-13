---
date: 2026-06-11
title: "GitHub Agentic Workflows がパブリックプレビューに — 自然言語で GitHub Actions の自動化を定義"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/
fetched_at: 2026-06-12T13:50:31+09:00
published_at: 2026-06-11
date_precision: date-only
category: release
---

# 2026-06-11 GitHub Agentic Workflows パブリックプレビュー

## 公式内容の日本語要約

GitHub Agentic Workflows が**パブリックプレビュー**に移行した。2026-02-13 のテクニカルプレビューから範囲が拡大。

Agentic Workflows は、自然言語の Markdown ファイルでリポジトリの自動化ロジックを記述し、それを標準的な Actions YAML にコンパイルする機能。Issue トリアージ、CI 失敗分析、ドキュメント更新などの「推論ベースのタスク」を、GitHub Actions の CI/CD パイプライン上でコーディングエージェントを使って自動化できる。

既存の Actions のランナーグループ・ポリシー制約をそのまま再利用する設計。

**セキュリティ制御:**
- エージェントはリポジトリコンテンツへのアクセス時に integrity filter ルールを遵守
- デフォルトは読み取り専用権限
- Agent Workflow Firewall 配下のサンドボックスコンテナで実行
- 全出力を Safe outputs プロセスで検証
- 提案された変更は適用前に脅威検出ジョブがスキャン

**利用開始:** CLI 拡張機能をインストール → クイックスタートガイドで数分でトリガー可能。GitHub Next の agentics リポジトリにトリアージ・レポート・コンプライアンス等のプリビルドワークフロー例あり。

## できるようになったこと

- 自然言語 Markdown で Actions のエージェント自動化を定義・コンパイルできる
- Issue トリアージ・CI 失敗分析・ドキュメント更新等の推論ベースタスクを Actions 上で自動化できる
- 既存の Actions 権限・ランナーグループをそのまま流用できる
- パブリックプレビューとして公開範囲が拡大（テクニカルプレビューから）

## 影響範囲

- 対象ユーザー: GitHub Copilot を使う開発者・DevOps チーム（パブリックプレビュー段階）
- 対象プラン: 公開記事に明記なし（Copilot サブスクリプションが必要と想定）
- API / UI / 管理者機能: CLI 拡張機能のインストールが必要。企業向けには runner グループ・ポリシーの再利用が前提。

## 教材化メモ

- Agentic Workflows は「Copilot の chat/PR 自動化」とは別に、Actions のパイプライン上でエージェントを走らせる設計。既存 CI/CD との統合ポイントを教材化するとき「Actions + Copilot Agent」の組み合わせとして整理できる。
- セキュリティ設計（read-only デフォルト・Firewall・threat detection）は「Enterprise でエージェントを安全に使うためのガバナンス設計」の事例として有用。

## 原文確認

- 公式見出し: "GitHub Agentic Workflows is now in public preview"
- 公式URL: https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/
- 原文全文は公式ページで確認してください。
