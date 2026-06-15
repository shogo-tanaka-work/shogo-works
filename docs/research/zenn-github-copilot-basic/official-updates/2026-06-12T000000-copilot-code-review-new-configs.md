---
date: 2026-06-12
title: "Copilot Code Review 新設定 — 組織ランナー制御・コンテンツ除外・カスタム指示の文字制限廃止"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-12-copilot-code-review-new-configurations-and-controls
fetched_at: 2026-06-13T11:04:44+09:00
published_at: 2026-06-12
date_precision: date-only
category: enhancement
---

# 2026-06-12 Copilot Code Review 新設定

## 公式内容の日本語要約

GitHub Copilot のコードレビュー機能に3つの設定・制御が追加された。

**1. 組織レベルのランナー制御（Organization-level runner controls）:**
- 組織管理者が Copilot code review のデフォルトランナーを設定し、全リポジトリに自動適用できる
- ランナー設定を**ロック**することで、組織デフォルトが個別リポジトリ設定をオーバーライドできる
- 設定場所: Organization → Copilot → Runner type → Runner type configuration

**2. コンテンツ除外サポート（Copilot content exclusion support）:**
- リポジトリ・組織・エンタープライズレベルの Copilot コンテンツ除外設定が Copilot code review でも尊重されるようになった
- 特定のファイル・ディレクトリをコードレビューの対象から除外できる

**3. カスタム指示の文字制限廃止:**
- これまで `.github` ディレクトリの custom instructions ファイルは 4,000 文字でカットされていた
- この制限が完全に廃止された
- GitHub Copilot Cloud Agent（有効な場合）にも適用

## できるようになったこと

- 組織全体で統一したランナーを強制適用できる（個別リポジトリが設定を上書きするのを防げる）
- センシティブなファイル（`.env`・認証情報等）をコードレビューから除外できる
- 長い custom instructions（レビュー規約・コーディングスタンダード等）を制限なく設定できる

## 影響範囲

- 対象ユーザー: GitHub Copilot Code Review を利用する組織管理者・開発者
- 対象プラン: Enterprise / Organization レベルの機能。個人プランへの適用は記事内に明記なし。
- API / UI / 管理者機能: Organization 設定ページで設定可。

## 教材化メモ

- 「組織全体でランナーを強制適用してロック」は、DevSecOps の観点でセキュリティ・コスト管理に使えるパターン。
- コンテンツ除外サポートは「AI レビューに何を見せるか・見せないか」というガバナンスの設計事例として使える。
- カスタム指示の文字制限廃止により、組織のコーディング規約・セキュリティポリシー全体を AI レビューに組み込む設計が現実的になった。

## 原文確認

- 公式見出し: "Copilot code review: New configurations and controls"
- 公式URL: https://github.blog/changelog/2026-06-12-copilot-code-review-new-configurations-and-controls
- 原文全文は公式ページで確認してください。
