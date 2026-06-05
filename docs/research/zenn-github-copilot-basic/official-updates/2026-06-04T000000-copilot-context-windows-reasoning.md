---
date: 2026-06-04
title: "GitHub Copilot — コンテキストウィンドウ拡大と推論レベル設定、Agent tasks REST API を Pro/Pro+/Max へ"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-06-05T11:16:48+09:00
published_at: 2026-06-04
date_precision: date-only
category: enhancement
---

# 2026-06-04 GitHub Copilot 機能追加（コンテキスト拡大・推論レベル・Agent tasks API）

## 公式内容の日本語要約

GitHub Copilot の changelog に 2026-06-04 付で複数の更新が掲載された。コンテキストウィンドウの拡大と推論レベルの設定、Agent tasks REST API の Pro / Pro+ / Max への提供拡大、Copilot Chat のプルリクエストへの文脈強化、Actions 失敗の「Fix with Copilot」の対象プラン拡大などが含まれる。

## できるようになったこと

- **コンテキストウィンドウ拡大 + 推論レベル設定**: より多くの情報を処理でき、Copilot の問題解決の深さ（推論レベル）を設定可能に。
- **Agent tasks REST API**: エージェントタスク機能へのプログラム的アクセスが Pro / Pro+ / Max でも利用可能に（従来は上位プラン中心）。
- **Copilot Chat のプルリクエスト文脈強化**: PR ディスカッション時のコードレビュー情報が充実。
- **Fix with Copilot for failing Actions**: GitHub Actions 失敗の自動修正提案が Pro / Pro+ / Max へ拡大。

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者。特に Pro / Pro+ / Max の個人・小規模チーム。
- 対象プラン: Pro / Pro+ / Max（Agent tasks REST API・Fix with Copilot）。コンテキスト/推論レベルは広く適用。
- API / UI / 管理者機能: REST API（Agent tasks）、Chat UI（PR 文脈）、Actions 連携。

## 教材化メモ

Copilot 教材の「エージェント / 自動化」章に Agent tasks REST API を追記し、CI 連携で「失敗 Action → 自動修正提案」を回す例を示す。「モデル設定」観点でコンテキストウィンドウ拡大と推論レベル設定を、コスト / 精度のトレードオフ調整として整理する。VS Code 5 月リリースまとめ（前日記事化済み）とは別更新である点に注意。

## 原文確認

- 公式見出し: Larger context windows and configurable reasoning levels / Agent tasks REST API now available for Copilot Pro, Pro+, and Max / Copilot Chat brings richer context to pull requests / Fix with Copilot for failing Actions now in Pro, Pro+, and Max
- 公式URL: https://github.blog/changelog/label/copilot/
- 原文全文は公式 changelog で確認してください。
