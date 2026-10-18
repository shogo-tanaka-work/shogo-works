---
date: 2026-10-01
title: "Workers Builds の遅延が解消、Durable Objects / R2 で短時間の障害"
service: "Workers Builds / Durable Objects / R2"
product: "Workers Builds, Durable Objects, R2"
source: https://www.cloudflarestatus.com/
fetched_at: 2026-10-02T09:11:00+09:00
published_at: 2026-10-01T20:59:00Z
date_precision: timestamp
category: incident
---

# 2026-10-01 Cloudflare の障害（Workers Builds / Durable Objects / R2）

## 公式内容の日本語要約

**Workers Builds のビルド遅延**（Minor）は **2026-09-30T15:33Z に発生し、2026-10-01T21:27Z に解消**した。前日（2026-10-01 分）の日次サマリーで Monitoring 状態として記録していたものが、本窓内で Resolved になった。**約30時間継続**している。

加えて、**Durable Objects と R2 で 2026-10-01T20:59Z〜21:18Z（約19分）の障害**が記録され、いずれも解消済みである。

**Workers AI については本窓内の障害記録はない。** データセンター単位のメンテナンス告知は対象外として扱う。

## できるようになったこと

- （障害のため該当なし）

## 影響範囲

- 対象ユーザー: Workers Builds を使うデプロイ、Durable Objects / R2 の利用者
- 対象プラン: 全プラン
- API / UI / 管理者機能: 該当なし

## 教材化メモ

- **ビルド遅延が30時間続いた**という事実の扱い。Minor 分類であっても、**CI/CD がベンダー側の単一経路に依存している場合はデプロイが丸一日止まる**ことを意味する。Birthday Week のような大量リリース週に重なった点も含め、**「影響度 Minor」と「業務影響」は別物**という読み方の例。
- **Durable Objects と R2 が同時刻に落ちた**こと。両者を前提にしたアーキテクチャ（本日発表の Basin / K2 / Artifacts はいずれも R2 を基盤とする）では、**障害が独立事象にならない**。可用性設計で相関を見落とす典型。

## 原文確認

- 公式見出し: Cloudflare Status（Workers Builds / Durable Objects / R2）
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
