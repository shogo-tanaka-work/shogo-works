---
date: 2026-11-17
title: "GitHub Copilot - セキュリティ・管理統制の追加（secret scanning on demand、code review の secret detection、Agent 365 監視、Entra サインイン、plugin-only カスタマイズ）"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-11-23T09:35:00+09:00
published_at: 2026-11-16 / 2026-11-17
date_precision: date-only
category: enhancement
---

# GitHub Copilot - セキュリティ・管理統制の追加

## 公式内容の日本語要約

Ignite 2026 にあわせて、管理者が効かせる統制と、資格情報の流出を止める機構が同時に増えた。

**secret scanning on demand（public preview、既定オフ）**。Copilot の `security-review` スペシャリストが GitHub の secret scanning 検出器を実行できるようになった。従来の LLM ベース検出に加えて、150社以上のパートナーと作った**500種類超のプロバイダーパターン**と、**周辺コードを読んで接続文字列内のパスワードなどを推定する GitHub のファインチューニング済みモデル**が走る。対象は Copilot CLI、Copilot app セッション、Copilot SDK 連携、Copilot code review。**検査するのは変更分のみで、リポジトリ履歴は見ない。** 有効化はツール単位で、Copilot CLI では対話セッション内で `/settings aiSecretDetection on`。有効にするまでは従来の LLM 検出だけが動く。

**Copilot code review の強化（public preview）**。`Adaptive` は PR ごとの複雑さとリスクから Lite / Balanced / Max のレビュー強度を自動選択する（PR 単位・既定値のどちらでも設定可、設定した上限を超えない）。クロスリポジトリコンテキストは public リポジトリ向け preview。secret detection はパターンマッチと AI で追加行の資格情報を検出する。Azure DevOps のコードレビューは GA。Pro 以上。

**Microsoft Agent 365 への Copilot 活動ストリーミング**。Enterprise はクラウドエージェント、CLI、VS Code、Visual Studio、JetBrains、Eclipse を含む全 Copilot クライアントのエージェント活動を Agent 365 へ流し、**プロンプト・応答・ツール呼び出しを含むセッションを監査**できる。追加のリスク情報は Microsoft Purview と Defender 側で参照する。対象は Enterprise Managed Users を使う GitHub Enterprise Cloud。

**Copilot CLI の Microsoft Entra サインイン（public preview）**。EMU（OIDC 利用）向けのサイレント SSO と、Microsoft 365 Copilot ライセンスでの利用に対応した。前者は GitHub 推論を使い組織の Copilot プランで課金される。後者（Frontier かつ usage-based billing の組織）は **Microsoft 365 推論を使い、GitHub アカウント自体が不要**になり、モデルアクセスと利用上限は Microsoft 365 Copilot 設定側で管理される。Windows / macOS のみ（Linux は後日）。CLI `1.0.113` 以降が必要。

**カスタマイズの出所を縛る管理設定（2026-11-16）**。`strictPluginOnlyCustomization` マネージド設定で、ユーザー / プロジェクト由来の単独カスタマイズを禁止し、プラグインまたはマネージド設定由来のみを許可できる。対象は skills / custom agents / hooks / MCP servers / 実行可能な Copilot extensions の5カテゴリで、個別選択も可能。**plugin-only は「enterprise 管理プラグインのみ」でもマーケットプレイス許可リストでもない**ため、`strictKnownMarketplaces` と併用して出所を絞る。対象は GitHub Enterprise Cloud で Copilot Business / Enterprise ライセンスを持つメンバー。

## 影響範囲

- 対象ユーザー: 開発者（secret scanning / code review）、企業管理者（Agent 365 / Entra / plugin-only）
- 対象プラン: code review は Pro 以上。Agent 365 と plugin-only は Enterprise Cloud。Entra の M365 推論経路は Frontier + usage-based billing
- API / UI / 管理者機能: いずれも管理者側の有効化作業が前提。secret scanning は既定オフ

## 教材化メモ

単独記事化はしない（週次ソースのため）。週次サマリーに要点のみ残す。教材観点としては「secret scanning は変更分のみで履歴を見ない」「plugin-only はマーケットプレイス許可リストではない」の2点が誤解を生みやすい。

## 原文確認

- 公式見出し: "Secret scanning on demand for developers and agents" / "Copilot code review: Adaptive effort, secret detection, and more" / "Monitor GitHub Copilot activity through Microsoft Agent 365" / "GitHub Copilot CLI adds Microsoft Entra sign-in as a preview" / "Control where GitHub Copilot customizations come from"
- 公式URL: https://github.blog/changelog/2026-11-17-secret-scanning-on-demand-for-developers-and-agents 、https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more 、https://github.blog/changelog/2026-11-17-monitor-github-copilot-activity-through-microsoft-agent-365 、https://github.blog/changelog/2026-11-17-github-copilot-cli-adds-microsoft-entra-sign-in-as-a-preview 、https://github.blog/changelog/2026-11-16-control-where-github-copilot-customizations-come-from
- 原文全文は公式ページで確認してください。
