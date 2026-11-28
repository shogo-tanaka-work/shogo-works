---
date: 2026-11-17
title: "GitHub Copilot - 廃止・退役告知（3モデル発効、MAI-Code-1.1-Flash、VS Code Local harness、JetBrains 2025.2）"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-11-23T09:35:00+09:00
published_at: 2026-11-16 / 2026-11-17
date_precision: date-only
category: incident
---

# GitHub Copilot - 廃止・退役告知（窓内4件）

## 公式内容の日本語要約

週次確認で最初に拾う廃止・EOL 告知が、この窓に4件あった。

**1. 3モデルの廃止が 2026-11-16 に発効した**（2026-10-15 告知分）。Claude Opus 4.8 / Claude Opus 5 / GPT-5.6 Terra が Copilot Chat、インライン編集、ask / agent モード、コード補完から外れた。代替は Opus 5.5（Opus 4.8・Opus 5）と GPT-6.1 Sol または GPT-6 Luna（GPT-5.6 Terra）。**Claude Opus 4.8 は年額プランの個人サブスクライバーには引き続き提供**される。Claude Opus 5 はモデルピッカーから削除されたが、既存の認可済みアクセス経由の「実行時 refusal フォールバック」としては残る。既定モデル有効化のもとでは、管理者がグローバル既定を切っていないかぎり代替モデルは自動で有効になる。グローバル既定を切っている組織は、Copilot 設定のモデルポリシーで代替を明示的に有効にする必要がある。

**2. MAI-Code-1.1-Flash を 2026-12-18 に廃止**（2026-11-17 告知）。MAI Code 2 Flash の投入にあわせた措置で、全 Copilot 体験で廃止される。代替は「最新の MAI Code Flash モデル」。Copilot Enterprise 管理者はモデルポリシーで代替モデルのアクセスを有効にする必要がある場合がある。

**3. VS Code が Local harness を 2027年2月に削除**（2026-11-16 告知）。VS Code 1.146 で Local harness（エディタ内 Copilot エージェントセッションでモデル・コンテキスト・ツールを調整していた旧実装）が非推奨になった。代替の Microsoft Copilot harness は VS Code 1.143 以降、新規セッションの既定。移行期間は3か月で、組織ポリシーが許すかぎり Local harness は残るが、新機能は Copilot harness 側にしか入らない。**管理者は `vscode.temporaryDefaultToLocalHarness` の例外設定を見直す必要がある。この一時設定は Local harness と同時に削除されるため、例外を残しても Local harness は使えなくなる。** Copilot harness では管理者がマネージドランタイム権限とサンドボックス制限を強制できる（Local harness では不可）。ただし harness を選ぶだけではサンドボックスは有効にならず、別途設定が必要。利用者側は新規セッションで Session Target に Copilot を選び、カスタマイズの互換性を2027年2月までに確認する（harness 切り替えで全カスタマイズが自動変換されるわけではない）。

**4. JetBrains IDE 2025.2 のサポートが終了した**（2026-11-17 告知）。Copilot の更新を受け取り続けるには 2025.3 以降（推奨 2026.2 以降）へ上げる。終了日の明記はなく、告知時点で「終了した」と書かれている。

## 影響範囲

- 対象ユーザー: Copilot 全プラン（モデル廃止）、VS Code 利用者と企業管理者（harness）、JetBrains 利用者
- 対象プラン: Business / Enterprise で管理者作業が発生。個人年額プランは Opus 4.8 を継続利用可
- 管理者機能: モデルポリシー、`vscode.temporaryDefaultToLocalHarness`、マネージドランタイム権限・サンドボックス設定

## 教材化メモ

週次サマリーの「期限つきの告知」へ残日数つきで転記した。単独記事化はしない（週次ソースのため）。

## 原文確認

- 公式見出し: "GitHub Copilot models deprecated on November 16, 2026" / "Upcoming deprecation of MAI-Code-1.1-Flash in December" / "VS Code retires the Local harness in February 2027" / "GitHub Copilot in JetBrains, Ignite releases"
- 公式URL: https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026 、https://github.blog/changelog/2026-11-17-upcoming-deprecation-of-mai-code-1-1-flash-in-december 、https://github.blog/changelog/2026-11-16-vs-code-retires-the-local-harness-in-february-2027 、https://github.blog/changelog/2026-11-17-github-copilot-in-jetbrains-ignite-releases
- 原文全文は公式ページで確認してください。
