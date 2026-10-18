---
date: 2026-09-30
title: "Cloudflare Workers のビルド遅延（Minor / Monitoring）"
service: "Workers"
product: "Workers Builds"
source: https://www.cloudflarestatus.com/
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T15:33:00Z
date_precision: timestamp
category: incident
---

# 2026-09-30 Workers のビルド遅延

## 公式内容の日本語要約

Cloudflare Status に **Workers build delays** が掲載された。**2026-09-30T15:33Z 開始**、影響度 Minor、状態は Monitoring（「修正を適用し結果を監視中」）。

同日 19:18Z に解決した **Network Performance Issues in Los Angeles (LAX)**（影響度 Minor）では、影響対象に **Containers と Durable Objects** が含まれていた。こちらは窓内に解決済みである。

データセンター単位のメンテナンス告知は `source-catalog.md` の規約どおり対象外とする。

## できるようになったこと

- 該当なし（incident）

## 影響範囲

- 対象ユーザー: Workers のビルドを実行している利用者、LAX 経由の Containers / Durable Objects 利用者
- 判定: **記事化しない**（短時間 incident。日次サマリーと本詳細メモに留める）

## 教材化メモ

- **Birthday Week のような発表集中日にビルド系の遅延が出る**という相関は、運用上の注意として覚えておく価値がある。大型リリース週に重要なデプロイを重ねない、という判断材料になる。
- **「影響度 Minor」の読み方。** ビルドの遅延は可用性には出ないが、**インシデント対応中のホットフィックスが出せない**という形で効く。ステータスページの重大度は自社の文脈では読み替える必要がある、という一般則の例。

## 原文確認

- 公式見出し: Cloudflare Workers build delays / Network Performance Issues in Los Angeles (LAX)
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
