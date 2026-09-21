---
date: 2026-09-15
title: "GitHub Copilot がリポジトリのカスタムプロパティ定義値を提案（public preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions/
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-15T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-15 Copilot のカスタムプロパティ提案

## 公式内容の日本語要約

リポジトリの**カスタムプロパティ定義を作るときに、Copilot が取りうる値を提案する**ようになった。公式例では `FedRAMP` に対してコンプライアンス関連の値、`internet-facing` に対して `yes` / `no` が提案される。

**Copilot Business / Copilot Enterprise 向けの public preview** で、**Enterprise / Organization の owner が「Repository custom property suggestions」という Copilot ポリシーで提供可否を制御**する。既定が ON か OFF かは公式文に明記がない（**未確認**）。

カスタムプロパティはリポジトリの分類・ルールセットの適用条件に使われるため、**資産台帳とガバナンスの入力を AI が埋める**形の機能にあたる。

## できるようになったこと

- カスタムプロパティ定義の作成時に値の候補を受け取る
- 管理者が Copilot ポリシーで機能の提供可否を切り替える

## 影響範囲

- 対象ユーザー: Enterprise / Organization の owner、リポジトリ管理者
- 対象プラン: Copilot Business / Copilot Enterprise（public preview）
- API / UI / 管理者機能: カスタムプロパティ定義画面、Copilot ポリシー

## 教材化メモ

**「AI が統制メタデータを提案する」という位置づけを、教材では慎重に扱う。** カスタムプロパティはルールセットの適用条件になりうるため、**提案をそのまま採用すると、分類の粒度を AI が決めたことになる。** 便利さの反面、**台帳の語彙が組織の実態ではなくモデルの事前分布に引っ張られる**リスクがある。

**「AI に埋めさせてよい欄と、人が決めるべき欄を分ける」**という一般則の題材にできる。値の候補出し（発散）は AI 向き、**どの分類軸を採用するか（収束）は人間の意思決定**、という切り分けが説明しやすい実例である。

## 原文確認

- 公式見出し: GitHub Copilot suggests custom properties definitions
- 公式URL: https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions/
- 原文全文は公式ページで確認してください。
