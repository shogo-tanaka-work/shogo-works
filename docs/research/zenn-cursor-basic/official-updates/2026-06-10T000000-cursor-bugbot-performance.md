---
date: 2026-06-10
title: "Cursor Bugbot — レビュー時間 5分→90秒、バグ検出精度10%向上、/review コマンド追加"
service: "Cursor"
source: https://cursor.com/changelog
fetched_at: 2026-06-11T10:18:34+09:00
published_at: 2026-06-10
date_precision: date-only
category: enhancement
---

# 2026-06-10 Cursor Bugbot パフォーマンス改善

## 公式内容の日本語要約

Cursor の Bugbot（コードレビュー自動化機能）が大幅に改善された。Composer 2.5 のモデル訓練によりレビュー速度が約3倍速くなり（5分→90秒）、バグ検出精度が10%向上（0.56→0.62 bugs/review）、コストも22%削減。`/review` コマンドで push 前にローカルでレビューを実行できるようになり、GitHub/GitLab 統合による重複スキップ機能も追加された。

## できるようになったこと

- **レビュー時間の大幅短縮**: 従来約5分 → 約90秒（約3倍）。
- **バグ検出精度向上**: 0.56 → 0.62 bugs/review（約10%向上）。
- **コスト削減**: 実行あたりのコストが約22%削減。
- **`/review` コマンド**: コードを push する前にローカルでレビューを実行可能。
- **GitHub/GitLab 統合**: 最後のレビュー以降の変更のみを対象に自動スキップ（重複防止）。
- 有効化: Cursor 3.7 以上、cursor.com/agents から利用可能。特別設定不要で自動有効化。CLI 対応は近日予定。

## 影響範囲

- 対象ユーザー: Cursor を使う全ユーザー（自動有効化）
- 対象プラン: 詳細は公式ページ参照
- GitHub / GitLab リポジトリ連携が有効な場合に重複スキップが機能

## 教材化メモ

「Cursor Bugbot 活用」章を新設または拡充。PR 作成前の `/review` 実行を開発フローのチェックポイントとして定型化する提案を追加。速度3倍・精度10%向上という数値を引用し、導入の費用対効果を示す。

## 原文確認

- 公式見出し: Bugbot Performance Improvements
- 公式URL: https://cursor.com/changelog
- 原文全文は公式ページで確認してください。
