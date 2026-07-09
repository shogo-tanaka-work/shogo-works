---
date: 2026-07-08
title: "エンタープライズ管理下でのOpenTelemetryエクスポート設定に対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-08-enterprise-managed-opentelemetry-export-for-vs-code-and-cli
fetched_at: 2026-07-09T15:42:00+09:00
published_at: 2026-07-08T20:50:07Z
date_precision: timestamp
category: enhancement
---

# 2026-07-08 エンタープライズ管理下でのOpenTelemetryエクスポート設定に対応

## 公式内容の日本語要約

組織が、GitHub Copilotの OpenTelemetry（OTel）データ送信先をエンタープライズ管理設定で一元指定できるようになった。個々の開発者が`OTEL_*`環境変数を設定する必要がなくなる。管理者はOTLPエクスポート先エンドポイント・プロトコル（otlp-http/otlp-grpc）、サービス名・リソース属性、認証トークンを含むエクスポーターヘッダー、プロンプト・レスポンス・ツールのコンテンツキャプチャポリシーを制御できる。VS CodeのCopilot Chat拡張とCopilot CLIのエージェントホストプロセス双方に適用され、管理設定値が環境変数・ユーザー設定より優先される。エクスポーターヘッダーがサブプロセス環境に漏れないようセキュリティ対策も講じられている。

## できるようになったこと

- OTLPエクスポート先・プロトコルの一元設定
- サービス名・リソース属性・認証ヘッダーの管理
- プロンプト/レスポンス/ツールのコンテンツキャプチャポリシー制御
- ネイティブMDM/サーバー管理/`managed-settings.json`経由での配布、環境変数より優先

## 影響範囲

- 対象ユーザー: エンタープライズ管理者
- 対象プラン: Enterprise
- API / UI / 管理者機能: VS Code Copilot Chat、Copilot CLIエージェントホスト、可観測性（Observability）基盤連携

## 教材化メモ

- Copilot利用ログをOTel経由で既存の可観測性基盤に統合する話は、AI活用の監査・コンプライアンス教材の実例として使える。

## 原文確認

- 公式見出し: "Enterprise-managed OpenTelemetry export for VS Code and CLI"
- 公式URL: https://github.blog/changelog/2026-07-08-enterprise-managed-opentelemetry-export-for-vs-code-and-cli
- 原文全文は公式ページで確認してください。
