---
date: 2026-09-08
title: "JetBrains 版 Copilot に企業管理サンドボックス（public preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-08-enterprise-managed-sandbox-in-copilot-for-jetbrains
fetched_at: 2026-09-14T09:50:00+09:00
published_at: 2026-09-08T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-08 JetBrains 版 Copilot の企業管理サンドボックス

## 公式内容の日本語要約

**企業管理サンドボックスポリシー（public preview）**。管理者がサンドボックスの挙動を中央制御できる。対象は**ファイルシステム / ネットワークアクセス、プロキシ設定、macOS Keychain アクセス**である。**対象コントロールは IDE 側でロックされ、組織が管理している設定であることが表示される。**

同時に入った変更は次のとおり。**ファイルをまたぐ次編集候補**（next edit suggestions がファイル間でカーソルを移動する）。**グローバルなプロジェクトコンテキスト**（ファイル / フォルダを一度チャットへ追加すればプロジェクト全体の参照になる）。**企業ポリシーの診断機能**（ポリシーが正しく検出・適用されているかを検証できる）。**ターミナルと IDE の連携（public preview）** — `/ide` コマンドで GitHub Copilot CLI セッションを JetBrains IDE のコンテキスト（選択範囲・診断情報を含む）へ接続する。

そのほかモデル選択・エージェントプロンプト・MCP 設定・プラグイン更新の発見性の改善と、空のチャットセッション、ワーキングセット件数、OAuth 認証、無応答チャットの修正。**Chat の OpenTelemetry 設定が全ユーザーへ一般提供**になった。

## できるようになったこと

- 管理者がサンドボックスのファイルシステム / ネットワーク / プロキシ / Keychain アクセスを中央制御できる
- 企業ポリシーが正しく適用されているかを診断できる
- `/ide` で Copilot CLI セッションを JetBrains の IDE コンテキストへ接続できる
- Chat の OpenTelemetry 設定が全ユーザーで使える

## 影響範囲

- 対象ユーザー: JetBrains IDE の Copilot 利用者、企業管理者
- 対象プラン: 企業管理設定は Business / Enterprise
- API / UI / 管理者機能: 組織設定（管理者によるサンドボックスポリシー設定が要る）

## 教材化メモ

- **macOS Keychain アクセスを明示的な統制対象に挙げている**点が実務的である。エージェントがローカルで動く以上、いちばん危ないのはファイルでもネットワークでもなく**手元の資格情報ストア**である。同じ週の Claude Code 2.1.268 が資格情報のログ露出を修正しているのと、守っている対象は同じである。
- **「組織が管理している設定であることを IDE 上で明示する」**設計は、統制を入れたときに現場が混乱しないための最低条件。権限が効いているのに理由が見えないと、利用者は設定を触って回避しようとする。
- 翌日の 09-09 に Copilot アプリ / CLI / VS Code 向けの企業管理権限が GA しており、**IDE 側とツール側で同じ統制モデルを揃えにきている**と読める。
- 記事化はしない（週次確認ソースの更新、かつ public preview）。

## 原文確認

- 公式見出し: Enterprise-managed sandbox in Copilot for JetBrains
- 公式URL: https://github.blog/changelog/2026-09-08-enterprise-managed-sandbox-in-copilot-for-jetbrains
- 原文全文は公式ページで確認してください。
