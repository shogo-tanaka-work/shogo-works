---
source: "GitHub Changelog"
url: "https://github.blog/changelog/2026-06-25-copilot-code-review-analysis-depth-and-efficiency-updates"
published_at: "2026-06-25T00:00:00Z"
fetched_at: "2026-06-26T09:36:39+09:00"
assessment: "A"
---

# GitHub Copilot Code Review — 分析深度・効率化アップデート

## 概要

Copilot コードレビューのファイル探索エンジンを刷新し、コスト20%削減を達成。組織レベルのデフォルト設定と分析深度の Medium 段階がパブリックプレビューに。

## エンジン変更（コスト削減の核心）

- 従来のカスタムファイルツールを廃止
- 代わりに Copilot CLI/SDK のビルトイン CLI ツール（`grep`、`rg`、`glob`、`view`）を使用
- 結果: **コスト約20%削減**、レビュー品質は維持（オフライン・オンライン評価いずれも同等）

## 分析深度（Analysis Depth）の2段階

| レベル | 状態 |
|---|---|
| Low | 既存（GA） |
| Medium | パブリックプレビュー |

Medium では PR のオーバービューコメントに「どの分析深度が生成したか」の帰属表示が追加。

## 組織設定（新機能）

- 未設定リポジトリに対してデフォルトのレビューレベルを組織単位で設定可能
- 各リポジトリは個別にオーバーライド可能

## 公式引用

> "reduced Copilot code review costs by about 20% while maintaining the same standard of review quality"
