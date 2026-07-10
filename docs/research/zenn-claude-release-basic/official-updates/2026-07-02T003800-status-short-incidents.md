---
date: 2026-07-02
title: "Claude Status：短時間障害3件（Opus 4.8 / Fable 5・Mythos 5 / 複数モデル横断）"
service: "Claude"
source: https://status.claude.com/
fetched_at: 2026-07-05T16:43:00+09:00
published_at: 2026-07-02T00:38:00Z
date_precision: timestamp
category: incident
---

# 2026-07-02〜07-04 Claude Status 短時間障害まとめ

## 公式内容の日本語要約

Claude Statusで、対象期間中に3件の短時間障害が発生・解消された。いずれも調査開始から解消まで40分以内で収束している。

- 2026-07-02 00:38〜01:19 UTC: Claude Opus 4.8でエラー率上昇（調査開始00:38、原因特定00:58、解消01:19）
- 2026-07-03 21:54〜22:06 UTC: Claude Fable 5 / Claude Mythos 5でエラー率上昇（調査開始21:54、原因特定21:55、修正実施22:00、解消22:06）
- 2026-07-03 23:42 UTC〜07-04 00:20 UTC: 複数モデル横断でエラー率上昇（調査開始23:42、修正実施・監視開始00:19〜00:20）

## できるようになったこと

（該当なし。障害と復旧の記録）

## 影響範囲

- 対象ユーザー: 該当時間帯にClaude Opus 4.8 / Fable 5 / Mythos 5、および複数モデルを利用していたユーザー
- 対象プラン: 全プラン（API・Console含む）
- API / UI / 管理者機能: 一時的なエラー率上昇のみ。いずれも40分以内に解消しており、恒久的な機能変更は伴わない

## 教材化メモ

- 単独記事化は見送り。短時間インシデントとして research 詳細のみに留める

## 原文確認

- 公式見出し: Claude Status incident history
- 公式URL: https://status.claude.com/
- 原文全文は公式ページで確認してください。
