---
date: 2026-05-13
title: "Building a safe, effective sandbox to enable Codex on Windows"
service: "OpenAI Codex"
source: https://openai.com/index/building-codex-windows-sandbox/
fetched_at: 2026-05-14T10:35:00+09:00
published_date: 2026-05-13
date_precision: date-only
category: enhancement
---

# 2026-05-13 Codex on Windows sandbox

## 公式内容の日本語要約

OpenAIは、CodexをWindows上で安全かつ実用的に動かすためのサンドボックス設計をEngineering / Securityカテゴリの記事として公開した。CodexはCLI、IDE extension、desktop appで開発者のローカル環境上のコマンドを実行するため、ファイル書き込みとネットワークアクセスをOSレベルで制限する必要がある。

記事では、AppContainer、Windows Sandbox、Mandatory Integrity Controlなど既存のWindows分離機構を検討したうえで、Codexの開発者ワークフローには合わなかった理由を説明している。最終設計では、専用のsandbox user、restricted token、firewall rule、sandbox setup binary、command runner binaryを組み合わせ、WindowsでもMac / Linuxに近い安全性と使い勝手を目指している。

## できるようになったこと

- Codex on Windowsで、ワークスペース内の書き込みとネットワーク制限をより強く実装できる。
- `CodexSandboxOffline` / `CodexSandboxOnline`のような専用Windowsユーザーを使い、firewall ruleをユーザー単位で適用する。
- `codex-windows-sandbox-setup.exe`と`codex-command-runner.exe`に役割を分け、setupとrestricted command executionを分離する。
- Windows Homeなど既存Windows Sandboxに依存できない環境も考慮した設計になっている。

## 影響範囲

- 対象ユーザー: WindowsでCodex CLI / IDE extension / desktop appを使う開発者、企業の開発端末管理者
- 対象プラン: Codex利用者
- API / UI / 管理者機能: Codex local sandbox / security / Windows runtime

## 教材化メモ

Codexのapproval mode / sandbox教材に、WindowsではMacのSeatbeltやLinuxのseccomp / bubblewrapと同じ前提で説明できないことを補足する。企業導入では、管理者権限が必要なsetup、ローカルユーザー作成、firewall rule、workspace write boundaryをレビュー項目として扱う。

## 原文確認

- 公式見出し: Building a safe, effective sandbox to enable Codex on Windows
- 公式URL: https://openai.com/index/building-codex-windows-sandbox/
- 掲載カテゴリ: Engineering / Security
- 原文全文は公式ページで確認してください。
