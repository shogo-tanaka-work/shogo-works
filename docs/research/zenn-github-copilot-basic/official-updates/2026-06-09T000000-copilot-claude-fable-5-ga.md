---
date: 2026-06-09
title: "GitHub Copilot — Claude Fable 5 が一般提供開始（プロンプト・出力は30日保持に注意）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-09-claude-fable-5-is-generally-available-for-github-copilot
fetched_at: 2026-06-10T07:22:57+09:00
published_at: 2026-06-09
date_precision: date-only
category: enhancement
---

# 2026-06-09 GitHub Copilot で Claude Fable 5 が GA

## 公式内容の日本語要約

Anthropic の Mythos クラス初モデル「Claude Fable 5」が GitHub Copilot で一般提供開始。Copilot Pro+ / Max / Business / Enterprise が対象で、VS Code / Visual Studio / Copilot CLI で選択できる。長時間の自律コーディング向けに設計され、少ないツール呼び出しで同等の作業を完了する。ただし、他の Claude モデルがゼロデータ保持であるのに対し、本モデルのみ Anthropic の安全分類器運用のためプロンプト・出力が30日間保持される点に注意。

## できるようになったこと

- **Claude Fable 5 が GitHub Copilot で GA**。VS Code / Visual Studio / Copilot CLI で選択可能。
- 長時間の自律コーディング向け設計。少ないツール呼び出しで作業を完了。
- **データ保持の例外**: 他の Claude モデルはゼロデータ保持だが、本モデルのみ安全分類器運用のため**プロンプト・出力を30日間保持**。

## 影響範囲

- 対象ユーザー: Copilot Pro+ / Max / Business / Enterprise の利用者・組織
- 対象プラン: Pro+ / Max / Business / Enterprise
- API / UI / 管理者機能: モデル選択（VS Code / Visual Studio / Copilot CLI）。データ保持ポリシーの差異に注意

## 教材化メモ

Copilot のモデル選択章に Claude Fable 5（長時間自律コーディング向け、対象プラン Pro+/Max/Business/Enterprise）を追記。重要注意として「Fable 5 のみプロンプト・出力が30日保持（他 Claude モデルはゼロ保持）」をデータガバナンス上の差分として明示する。Fable 5 自体の特性は Claude モデル記事へリンク。

## 原文確認

- 公式見出し: Claude Fable 5 is generally available for GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-06-09-claude-fable-5-is-generally-available-for-github-copilot
- 原文全文は公式ページで確認してください。
