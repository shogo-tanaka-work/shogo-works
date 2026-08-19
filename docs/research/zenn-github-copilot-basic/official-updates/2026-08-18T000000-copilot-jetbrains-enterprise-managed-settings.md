---
date: 2026-08-18
title: "GitHub Copilot for JetBrains に Enterprise managed settings — プラグイン統制、MCP サーバーの allowlist / denylist"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains/
fetched_at: 2026-08-19T10:10:00+09:00
published_at: 2026-08-18
date_precision: date-only
---

# 2026-08-18 GitHub Copilot for JetBrains の Enterprise managed settings

## 公式内容の日本語要約

JetBrains 系 IDE 向けの GitHub Copilot プラグインが、管理者による中央管理設定に対応した。対象は4領域である。

**プラグインの統制**では、特定プラグインの必須化・無効化、追加マーケットプレイスの承認、承認済みソースへの限定ができる。開発者が任意にプラグインを追加できる状態を、組織のポリシー側から閉じられる。

**MCP サーバーの制御**が明示的に含まれる。開発者がアクセスできる Model Context Protocol サーバーを、allowlist と denylist で中央管理する。MCP 経由で社外システムへ接続する経路を IT 側で握れるため、エージェント利用の統制としては影響が大きい。

**OpenTelemetry の設定**を中央管理でき、collector のエンドポイントと resource attribute を指定してテレメトリのルーティングを揃えられる。

**権限モード**では、管理者が「Bypass Approvals」と「Autopilot」を無効化できる。承認を省略する動作と自律実行を組織単位で止められる。

対象は Copilot Enterprise プランの契約者である。

## できるようになったこと

- JetBrains 版 Copilot のプラグインを必須化・無効化・承認済みソースへ限定
- MCP サーバーの allowlist / denylist を中央管理
- OpenTelemetry の collector エンドポイントと resource attribute を中央管理
- 「Bypass Approvals」「Autopilot」の無効化

## 影響範囲

- 対象ユーザー: Copilot を JetBrains IDE で展開している企業の管理者と開発チーム
- 対象プラン: Copilot Enterprise
- API / UI / 管理者機能: 管理者機能の追加

教材化メモ: src/content/ai-news-notes/github-copilot/jetbrains-enterprise-managed-settings.mdx

## 原文確認

- 公式見出し: Enterprise managed settings in GitHub Copilot for JetBrains
- 公式URL: https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains/
- 原文全文は公式ページで確認してください。
