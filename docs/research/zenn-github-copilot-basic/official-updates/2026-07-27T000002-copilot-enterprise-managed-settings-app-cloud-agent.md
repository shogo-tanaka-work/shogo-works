---
date: 2026-07-27
title: "Enterprise managed settingsがGitHub Copilot appとCopilot cloud agentにも適用"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-07-28T21:44:59+09:00
published_at: 2026-07-27
date_precision: date-only
category: enhancement
---

# 2026-07-27 Enterprise managed settings拡張（app / cloud agent）

## 公式内容の日本語要約

これまでCopilot CLIとVS Codeのみに適用されていたエンタープライズ管理設定（enterprise managed settings）が、GitHub Copilot appとCopilot cloud agentにも適用されるようになった。

対象となる設定:

- プラグインの利用可否
- 承認済みマーケットプレイスの制限
- 承認プロンプトのバイパス（app / CLI / VS Code対象。cloud agentは対象外）
- 新規会話でのモデル自動選択のデフォルト

既存の `managed-settings.json` を使っている組織は追加設定不要。Copilot appは次回サインイン/再起動時に、cloud agentはタスク割り当て時に設定が反映される。

## できるようになったこと

- 1つのポリシー定義を、Copilot app / CLI / VS Code / cloud agentで一貫して適用できる
- 既存の管理設定ファイルを変更せずに適用範囲が自動拡大される

## 影響範囲

- 対象ユーザー: エンタープライズ管理者、Copilot app / cloud agent利用者
- 対象プラン: Copilot Enterprise（managed settings利用組織）
- API / UI / 管理者機能: `managed-settings.json` によるポリシー管理

## 教材化メモ

- Copilotのクライアント横断ガバナンスが進んでいる流れとして、専用アクセスポリシー追加（同日発表）とセットで企業導入教材に反映候補。

## 原文確認

- 公式見出し: Enterprise managed settings in the GitHub Copilot app and Copilot cloud agent
- 公式URL: https://github.blog/changelog/2026-07-27-enterprise-managed-settings-now-apply-to-the-github-copilot-app/
- 原文全文は公式ページで確認してください。
