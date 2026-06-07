---
date: 2026-06-05
title: "GitHub Copilot — VS Code でのエンタープライズ管理プラグインがパブリックプレビュー"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-05-enterprise-managed-plugins-in-vs-code-in-public-preview
fetched_at: 2026-06-07T13:00:00+09:00
published_at: 2026-06-05
date_precision: date-only
category: enhancement
---

# 2026-06-05 GitHub Copilot VS Code エンタープライズ管理プラグイン（パブリックプレビュー）

## 公式内容の日本語要約

VS Code 1.122 で、エンタープライズ管理プラグインがパブリックプレビューとして提供開始。組織管理者が `.github-private/.github/copilot/settings.json` でプラグインを定義すると、VS Code と Copilot CLI の両方に設定が自動適用される。カスタムエージェント・スキル・MCP 設定・フックを組織横断で統一配布でき、利用者の認証時に自動インストールされる。先に CLI に実装されていた機能を VS Code へ拡張した形。

## できるようになったこと

- 組織管理者が `.github-private/.github/copilot/settings.json` にプラグインマーケットプレイスを定義。
- 配布対象: **カスタムエージェント / スキル / MCP 設定 / フック**。
- 設定は **VS Code と Copilot CLI の両方** に自動適用。
- 利用者の認証時にプラグインが自動インストールされ、オンボーディングとセットアップ時間を短縮。

## 影響範囲

- 対象ユーザー: VS Code 1.122 以上で Copilot を使う組織メンバー
- 対象プラン: Copilot Business / Copilot Enterprise
- API / UI / 管理者機能: 管理者によるプラグイン配布設定（リポジトリ `.github-private` 経由）、VS Code / CLI への自動適用

## 教材化メモ

Copilot のエンタープライズ運用章に、CLI 向けに先行提供されていた「管理プラグイン」が VS Code へ拡張された経緯を追記。`.github-private/.github/copilot/settings.json` を単一の配布ソースとして、エージェント / スキル / MCP / フックを組織横断で標準化する運用例を示す。パブリックプレビュー段階である点と必要バージョン（VS Code 1.122+）を明示。

## 原文確認

- 公式見出し: Enterprise-managed plugins in VS Code in public preview
- 公式URL: https://github.blog/changelog/2026-06-05-enterprise-managed-plugins-in-vs-code-in-public-preview
- 原文全文は公式ページで確認してください。
