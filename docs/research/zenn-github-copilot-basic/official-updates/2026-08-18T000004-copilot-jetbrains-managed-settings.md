---
date: 2026-08-18
title: "GitHub Copilot for JetBrains にエンタープライズ管理設定 — プラグイン統制・MCP サーバー許可リスト・権限モード制御"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains
fetched_at: 2026-08-19T17:53:00+09:00
published_at: 2026-08-18
date_precision: date-only
category: release
---

# 2026-08-18 GitHub Copilot for JetBrains のエンタープライズ管理設定

## 公式内容の日本語要約

GitHub Copilot の JetBrains 版が、`managed-settings.json` によるエンタープライズ管理設定に対応しました。管理できる領域は 4 つです。

**プラグイン統制**: `enabledPlugins` で必須化・無効化を指定し、`extraKnownMarketplaces` で承認済みマーケットプレイスを追加、`strictKnownMarketplaces` で承認元以外からのインストールを禁止できます。

**MCP サーバー許可リスト**: `allowedMcpServers` / `deniedMcpServers` で、開発者が接続できる MCP サーバーを企業側で限定します。公式は「企業の許可リスト外のサーバーへの接続を防ぐ」と説明しています。シャドー MCP の統制という点で、Cloudflare Gateway の MCP トラフィック検出（2026-08-14）と同じ問題意識の機能です。

**OpenTelemetry の集中管理**: コレクター、プロトコル、サービス名、リソース属性を管理者側で設定でき、管理者設定が開発者の選択より優先されます。

**権限モード制御**: `permissions.disableBypassPermissionsMode` を `disable` にすると、承認をバイパスする機能を封じられます。

対象は最新の JetBrains プラグインを使う GitHub Copilot の全エンタープライズです。適用には最新プラグインへの更新と `managed-settings.json` の配布が必要で、管理者側の作業が発生します。

## できるようになったこと

- JetBrains 版でプラグインの必須化・無効化・インストール元の制限
- MCP サーバーの許可 / 拒否リストによる接続先の限定
- OpenTelemetry 設定の集中管理（管理者設定が開発者設定に優先）
- 承認バイパスモードの無効化

## 影響範囲

- 対象ユーザー: JetBrains IDE で Copilot を使うエンタープライズの管理者と開発者
- 対象プラン: GitHub Copilot のエンタープライズ契約
- API / UI / 管理者機能: 管理者機能。`managed-settings.json` の配布と最新プラグインへの更新が前提

## 教材化メモ

- VS Code 側で先行していたエンタープライズ管理設定が JetBrains へ広がった形。「IDE ごとに統制のかかり方が違う」状態は、Copilot を全社導入する際の実務上の落とし穴として教材化価値がある。
- MCP サーバー許可リストは「開発者が自由に外部 MCP を繋げる状態をどう統制するか」という論点そのもの。Cloudflare の MCP トラフィック検出（ネットワーク側で検出）と Copilot の許可リスト（クライアント側で制限）は、同じ課題への異なるレイヤーの答えとして並べて説明できる。
- 承認バイパスモードの無効化は、AI エージェントに「聞かずに実行させる」設定を組織として封じられるという話。ハーネスエンジニアリングのガードレール層の具体例に使える。

## 原文確認

- 公式見出し: Enterprise managed settings in GitHub Copilot for JetBrains
- 公式URL: https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains
- 原文全文は公式ページで確認してください。
