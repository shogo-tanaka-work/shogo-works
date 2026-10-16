---
date: 2026-10-15
title: "Claude Code の Code Review が一般提供開始 — research preview を終了し Team / Enterprise へ、レビュー時間は約20分から6〜10分へ"
service: "Claude Code"
source: https://claude.com/resources/articles/code-review-is-now-generally-available
fetched_at: 2026-10-16T09:20:00+09:00
published_date: 2026-10-15
date_precision: date-only
category: release
---

# 2026-10-15 Claude Code の Code Review が一般提供開始

## 公式内容の日本語要約

**Claude Code の Code Review が research preview を終了し、一般提供（GA）になった。** 提供対象は **Claude Team と Claude Enterprise の組織**である。Code Review は Pull Request を自動でレビューし、人間のレビュアーが見る前にバグを指摘する機能である。

**公式が置いている問題設定は「レビューのボトルネック」である。** コーディングエージェントによって書く速度が上がっても、レビューの速度は上がらないため、そこが詰まる。

**GA で変わった点は3つ挙がっている。**

1. **速度**: 大半のレビューが約3倍速くなり、**従来の約20分から6〜10分**になった。
2. **品質**: 重要なバグをより多く捕まえることを狙う。各指摘は**問題・何が引き金になるか・修正方法**を数文でまとめた簡潔な形にする。
3. **柔軟性**: 管理者がリポジトリごとに **Quick / Standard / Deep** のレビュー深度を選べる。

**有効化の手順は管理者と開発者で分かれている。** 管理者は Claude Code 設定で Code Review をオンにし、**GitHub App をインストール**して対象リポジトリを選ぶ。開発者側は、有効化後の新しい Pull Request に対して**設定なしで自動実行される**。

**クレジットの期限が明記されている。** 対象となる Claude Enterprise 組織は、**2027-01-15 までに最低 $10,000 分の Code Review クレジットを請求できる**。**クレジットは請求から30日で失効する**。プロモーション規約が適用される。

**対応プラットフォームは GitHub App のみが挙がっている。** ドキュメントは `code.claude.com/docs/en/code-review`。

## できるようになったこと

- Claude Team / Enterprise で Code Review を本番前提で使える（research preview の制約が外れる）
- リポジトリ単位で Quick / Standard / Deep のレビュー深度を選べる
- レビュー完了までの待ち時間が 6〜10 分に短縮される
- 新規 PR に対し、開発者側の設定なしで自動レビューが走る

## 影響範囲

- 対象ユーザー: Claude Team / Enterprise 組織の管理者と開発者
- 対象プラン: Claude Team、Claude Enterprise
- API / UI / 管理者機能: Claude Code 設定（管理者が有効化・深度選択）、GitHub App、PR 上の自動レビュー

教材化メモ: src/content/ai-news-notes/claude-code/code-review-generally-available.mdx

## 原文確認

- 公式見出し: Code Review is now generally available
- 公式URL: https://claude.com/resources/articles/code-review-is-now-generally-available
- ドキュメント: https://code.claude.com/docs/en/code-review
- 原文全文は公式ページで確認してください。
