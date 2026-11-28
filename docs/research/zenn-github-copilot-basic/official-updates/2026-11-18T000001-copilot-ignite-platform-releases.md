---
date: 2026-11-18
title: "GitHub Copilot - Ignite 2026 のプラットフォーム更新（Copilot app の Azure DevOps / GHES、browser use、JetBrains、Evals、チームカスタマイズ、MCP コネクタ8種）"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-11-23T09:35:00+09:00
published_at: 2026-11-16 / 2026-11-17 / 2026-11-18
date_precision: date-only
category: release
---

# GitHub Copilot - Ignite 2026 のプラットフォーム更新

## 公式内容の日本語要約

Microsoft Ignite 2026（2026-11-17）にあわせた更新がまとまって出た。窓内の GitHub Copilot changelog は**21件**で、うち主要なものを機能面でまとめる。

**Copilot app**。Azure DevOps リポジトリ対応が public preview（ブランチ作成、変更、PR 作成、任意のエージェントマージ）。**browser use** も public preview で、Chrome 拡張経由で Chromium 系ブラウザ内の作業を Copilot が行う（**既定オフ**）。GitHub Enterprise Server 対応はアプリ 1.2.0 以降で GA。**Azure DevOps と GHES のリポジトリではクラウドセッションは使えない。**

**JetBrains プラグイン**。クラウドサンドボックス、リモートアクセス、browser use、オンデバイス音声ディクテーションを追加（いずれも public preview または段階展開）。タイムスタンプ、セッションクリーンアップ、steer-and-queue 操作も入った。コードレビューは Copilot エージェントレビューエンジンへ切り替わり、Java モダナイゼーションの検出結果は Problems View に出る。

**チームカスタマイズが GA（2026-11-18）**。organization の team で、メンテナと owner が承認済み Agent Plugins をチーム既定に設定でき、直接メンバーの VS Code / Copilot app / Copilot CLI で自動的に有効になる。プラグインの出所は built-in / enterprise / 追加マーケットプレイス。**子チームは継承しない。** ポリシーが許せばメンバーは個別に無効化でき、enterprise と organization のポリシーが優先する。Business / Enterprise。

**GitHub 検証済み MCP サーバーのコネクタ8種追加（2026-11-18、public preview）**。Box / Buildkite / Calendly / ClickUp / Mixpanel / Supabase / Webflow / Wix。接続は Copilot app、CLI、VS Code、github.com で設定する。**Business / Enterprise 管理者は `Editor preview features` ポリシーの有効化が必要な場合があり、一部サービスは相手側の管理者設定も必要。**

**その他（2026-11-17）**: GitHub Copilot Evals が public preview、Repository insights で Copilot code review の結果を追跡、Copilot benchmarks サイトに harness 比較を追加、ブラウザ操作機能の単独告知。

**週次リリースまとめ（2026-11-16 掲載の "weekly releases — November 9"）**: Claude Fable 5.2（データ保持が既定、Business / Enterprise はポリシーが既定オフ）と Gemini 4 Carbon の提供（いずれも前週サマリーで記録済み）、Copilot app の GHES 対応 GA、Project 自動化の分単位スケジュール / カスタム cron、フランス語・スペイン語などの多言語ディクテーション、カスタムフィールドでの issue / PR 絞り込み、ハイコントラストと色フィルタの併用。VS Code 1.146 では `Compare Models` によるエージェント主導のモデル比較（実験的）と、全ワークスペースのエージェントセッションを1画面で追う Inbox モード。

## 影響範囲

- 対象ユーザー: Copilot 利用者全般。IDE（VS Code / JetBrains）、Copilot app、CLI
- 対象プラン: チームカスタマイズは Business / Enterprise。他は preview を含み段階展開
- API / UI / 管理者機能: browser use は既定オフ。MCP コネクタは `Editor preview features` ポリシーが前提になる場合がある

## 教材化メモ

単独記事化はしない（週次ソースのため）。21件の changelog のうち、受講者への影響が大きいのは「browser use が既定オフである」「Azure DevOps / GHES ではクラウドセッションが使えない」「チームカスタマイズは子チームへ継承されない」の3点。

## 原文確認

- 公式見出し: "GitHub Copilot app, Microsoft Ignite releases" / "GitHub Copilot in JetBrains, Ignite releases" / "Customize GitHub Copilot for your team" / "Connect Supabase, Box, Calendly, and more to Copilot" / "GitHub Copilot Evals is now in public preview" / "GitHub Copilot weekly releases — November 9" ほか
- 公式URL: https://github.blog/changelog/label/copilot/
- 原文全文は公式ページで確認してください。
