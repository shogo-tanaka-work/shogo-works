---
date: 2026-09-23
title: "Copilot code review の設定ページが全プランへ。effort（Lite / Balanced）の既定を個人・組織の両方で決められるように（GA）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-23
date_precision: date-only
category: release
---

# 2026-09-23 Copilot code review のリクエストと設定

## 公式内容の日本語要約

Copilot code review の**専用設定ページが、従来の Pro / Pro+ / Max 限定から、Copilot Business と Copilot Enterprise を含む全プランへ拡大**した（**GA**）。

**リクエスト経路は3つ**である。(1) PR の作成時、または draft から出したときの自動実行、(2) PR の Reviewers セクションからの手動リクエスト、(3) 新しい push に対する自動レビュー。個人設定ページで、**自分が作成または共同作成した draft PR と、新規 push に対する自動レビューをそれぞれ有効化**できる。

**effort は Lite と Balanced の2段階**で、個人設定ページで既定を決め、手動リクエスト時には別の effort を選べる。

**組織側の統制も入った。** エンタープライズ管理者は **組織所有リポジトリに適用される既定 effort（Lite / Balanced / GitHub 既定）**を設定でき、**組織レベルとリポジトリレベルで上書き**できる。

**前週の記録との接続**: 09-18 に「code review の既定 effort が **2026-09-28** に Lite → Balanced へ変わる」と告知されており、**その発効日が本日（2026-09-28）である。** 本更新はその直前に、個人・組織の両方で既定を明示設定する手段を揃えたものと読める。

## できるようになったこと

- code review の専用設定ページを全プラン（Business / Enterprise を含む）で利用
- draft PR / 新規 push に対する自動レビューを個人設定で有効化
- effort（Lite / Balanced）の既定を個人設定で指定、手動リクエスト時に個別指定
- エンタープライズ管理者が組織所有リポジトリの既定 effort を設定（組織 / リポジトリで上書き可）

## 影響範囲

- 対象ユーザー: PR レビューで Copilot を使う開発者と、その組織の管理者
- 対象プラン: 全 Copilot プラン（Business / Enterprise を含む）
- API / UI / 管理者機能: 個人設定ページ、エンタープライズの既定 effort 設定

## 教材化メモ

- **既定値の変更日（09-28）の直前に、既定を明示設定する手段が配られた**という順序が実務的に重要である。**「既定が変わる」と告知されたら、まず自分の環境で明示設定に切り替えられるかを探す**、という手順として教えられる。
- **effort の階層（GitHub 既定 → 組織 → リポジトリ → 個人）**は、設定の優先順位設計の実例。どこで上書きできるかを把握していないと、「組織で決めたのに効いていない」が起きる。

## 原文確認

- 公式見出し: More ways to request and configure Copilot code reviews
- 公式URL: https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews
- 原文全文は公式ページで確認してください。
