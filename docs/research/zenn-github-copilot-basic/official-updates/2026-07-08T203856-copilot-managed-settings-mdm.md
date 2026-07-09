---
date: 2026-07-08
title: "エンタープライズ管理者がMDM経由でCopilot設定をVS Code/CLIに配布可能に"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-08-deploy-managed-copilot-settings-via-mdm-in-vs-code-and-cli
fetched_at: 2026-07-09T15:42:00+09:00
published_at: 2026-07-08T20:38:56Z
date_precision: timestamp
category: enhancement
---

# 2026-07-08 エンタープライズ管理者がMDM経由でCopilot設定をVS Code/CLIに配布可能に

## 公式内容の日本語要約

エンタープライズ管理者が、MDM（モバイルデバイス管理）やファイルベース設定を通じてGitHub Copilotの設定をデバイスに直接配布できるようになった。既存のサーバー管理型に加え、ネイティブMDM（Windowsレジストリ `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\GitHubCopilot` / macOS管理設定 `com.github.copilot`）、`managed-settings.json`ファイル配置（root所有・world-writable禁止・symlink禁止）の3経路が同一設定キーで利用できる。優先順位はネイティブMDM＞サーバー管理＞ファイルベース。

## できるようになったこと

- Windowsレジストリ/macOS管理設定経由でのCopilot設定配布
- `managed-settings.json`によるファイルベース設定配布
- 権限・モデル選択・有効プラグイン・テレメトリ設定・Marketplace設定の一元管理
- 複数チャネル併用時の優先順位ルール（ネイティブMDM＞サーバー管理＞ファイルベース）

## 影響範囲

- 対象ユーザー: エンタープライズ管理者
- 対象プラン: Enterprise
- API / UI / 管理者機能: VS Code、Copilot CLI、MDM、`managed-settings.json`

## 教材化メモ

- 同日公開のOpenTelemetryエクスポート管理と合わせて「企業ガバナンス強化」の一連の発表として教材化しやすい。

## 原文確認

- 公式見出し: "Deploy managed Copilot settings via MDM in VS Code and CLI"
- 公式URL: https://github.blog/changelog/2026-07-08-deploy-managed-copilot-settings-via-mdm-in-vs-code-and-cli
- 原文全文は公式ページで確認してください。
