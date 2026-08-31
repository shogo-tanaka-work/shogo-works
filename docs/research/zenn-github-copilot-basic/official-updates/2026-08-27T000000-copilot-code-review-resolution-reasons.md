---
date: 2026-08-27
title: "Copilot code review に解決理由の選択が追加、bot PR・大規模 PR の制限が撤廃"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-27-copilot-code-review-resolution-reasons-and-expanded-capabilities/
fetched_at: 2026-08-31T09:40:00+09:00
published_at: 2026-08-27T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-08-27 Copilot code review の解決理由と対応範囲の拡大

## 公式内容の日本語要約

**解決理由の選択**。Copilot code review のコメントを解決するとき、**Addressed / Won't fix / Incorrect** の3択から理由を選べるようになった。「Resolve conversation」ボタンの隣にドロップダウンとして出る。公式は「製品チームへの有用なフィードバックとなり、製品改善に役立つ」としている。

**対応範囲の拡大は3点**。

1. **bot が作成した Pull Request のレビュー**。ポリシーを有効にすれば、bot および Copilot cloud agent が作った PR をレビューできる。**利用料は Organization に直接課金**される。前提として「Copilot ライセンスを持たないメンバーが Copilot code review を使うことを許可する」ポリシーの有効化が必要。
2. **Copilot cloud agent の PR** が、機能制限された体験ではなく**完全なエージェントレビュー**を受けられるようになった。
3. **大規模 PR の制限撤廃**。従来の「300ファイルまたは 20,000 行」という上限が**完全に撤廃**された。

## できるようになったこと

- レビューコメントの解決時に理由（Addressed / Won't fix / Incorrect）を残せる
- bot / Copilot cloud agent 作成の PR をレビューできる
- 300ファイル・20,000行を超える PR をレビューできる

## 影響範囲

- 対象ユーザー: Copilot code review を使う Organization。特に bot 自動化と大規模 PR を扱うチーム
- 対象プラン: Copilot Business / Copilot Enterprise
- API / UI / 管理者機能: レビューポリシー・課金（bot PR は Organization 課金）

## 教材化メモ

- **「bot の PR を bot がレビューする」構成の課金が Organization 直課金**である点は、エージェント運用のコスト設計として重要。人が起点でない処理は件数の上限が人の作業量で決まらないため、**課金の主体と件数の上限を誰が握るか**を先に決めないと青天井になる。
- **300ファイル / 20,000行の上限撤廃**は、レビューの対象範囲が広がる一方でコストも増える。「使えるようになった」と「使うべき」は別、という判断の題材になる。
- 記事化はしない（週次確認ソースの通常更新）。

## 原文確認

- 公式見出し: Copilot code review: Resolution reasons and expanded capabilities（2026-08-27）
- 公式URL: https://github.blog/changelog/2026-08-27-copilot-code-review-resolution-reasons-and-expanded-capabilities/
- 原文全文は公式ページで確認してください。
