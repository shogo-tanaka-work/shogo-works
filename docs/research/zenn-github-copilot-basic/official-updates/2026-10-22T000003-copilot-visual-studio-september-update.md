---
date: 2026-10-22
title: "Visual Studio の Copilot 9月更新（BYOM プレビュー、破壊的変更あり）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2
fetched_at: 2026-10-26T09:40:00+09:00
published_at: 2026-10-22
date_precision: date-only
category: release
---

# 2026-10-22 Visual Studio の Copilot 9月更新

## 公式内容の日本語要約

**タイトルは「September update」だが公開は 2026-10-22 である。** 対象は Visual Studio 2026 で、最小ビルド番号の明記はない。

主な内容は3点。

- **Git agent の PR 調査**: 文脈として添付した pull request を要約し、コメントとファイルへのリンクを付ける。**GitHub または Azure DevOps の MCP サーバーが必要。**
- **Bring Your Own Model（BYOM、プレビュー）**: GitHub Copilot のモデルと自前のデプロイを使える。サインインの有無を問わない。対応プロバイダーは Microsoft Foundry、OpenAI、Anthropic、Ollama。**Community / Professional / Enterprise の各エディションで既定有効。**
- **NuGet の脆弱性修正**: Error List の audit 警告に fixer が付き、Copilot Chat を agent モードで開いて **NuGet MCP サーバー**経由で脆弱なパッケージを更新する。GitHub Copilot へのサインインと当該 MCP サーバーの有効化が必要。

**破壊的変更がある。BYOM は新しい Agent (Preview)（GitHub Copilot SDK ベースの harness）を必須とし、従来の Ask / Agent モードは BYOM を使えなくなった。** 更新後、**設定済みの Ollama モデルは再登録が必要**である。

関連 changelog としてモデル廃止（2026-10-19 発効、および 2026-11 中旬予定）が挙げられているが、本ページには詳細がない。

## できるようになったこと

- Visual Studio の Git agent が PR を要約できる（GitHub / Azure DevOps MCP サーバー必須）
- BYOM で Foundry / OpenAI / Anthropic / Ollama のモデルを使える（プレビュー、既定有効）
- NuGet の脆弱パッケージ更新を Copilot Chat の agent モードから実行できる

## 影響範囲

- 対象ユーザー: Visual Studio 2026 で Copilot を使う開発者
- 対象プラン: Community / Professional / Enterprise（BYOM は3エディションで既定有効）
- API / UI / 管理者機能: IDE（Visual Studio）、MCP サーバー連携

## 教材化メモ

- **「更新したら設定が消える」類の破壊的変更である。** Ollama モデルの再登録が必要で、BYOM が新しい Agent (Preview) 必須になったため、**従来の Ask / Agent モードで BYOM を使っていた環境は更新で機能を失う。** マイナー更新の体裁でこの種の変更が入るため、changelog の "Breaking change" 行を読む習慣の教材になる。
- **BYOM が Community エディションを含む3エディションで既定有効**なのは、モデル持ち込みのガバナンス上の論点になる。サインイン不要で外部プロバイダーへ接続しうるため、**端末側の統制（Enterprise managed settings）で絞るかどうかの判断が発生する。**
- 3機能のうち2つが **MCP サーバー前提**である（GitHub / Azure DevOps、NuGet）。MCP が IDE 機能の実装手段として前提化していることの具体例になる。
- タイトルの月（September）と公開日（10-22）がずれている。**一次情報でも見出しの日付と公開日は一致しない**ことの実例。

## 原文確認

- 公式見出し: GitHub Copilot in Visual Studio — September update
- 公式URL: https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2
- 原文全文は公式ページで確認してください。
