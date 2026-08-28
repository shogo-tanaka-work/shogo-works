---
date: 2026-08-27
title: "Workers Builds の劣化（Minor、約1時間39分で Resolved）"
service: "Cloudflare"
product: "Workers Builds"
source: https://www.cloudflarestatus.com/
official_url: https://www.cloudflarestatus.com/
fetched_at: 2026-08-28T09:05:00+09:00
published_at: 2026-08-27T21:19:40Z
date_precision: timestamp
category: incident
---

# 2026-08-27 Cloudflare Workers Builds の劣化

## 公式内容の日本語要約

Cloudflare Status に **Workers Builds are Degraded** が掲示された。影響度は **Minor**、発生 2026-08-27T21:19:40Z、解消 2026-08-27T22:58:12Z。**約1時間39分**で Resolved となった。

影響範囲は Workers Builds（Workers のビルドパイプライン）で、**Workers AI や Durable Objects への影響は記載されていない**。ランタイム側の障害ではなく、デプロイ・ビルド系の劣化にあたる。

同じ窓内に Turnstile のチャレンジ不具合（14:40:38Z 〜 19:29:35Z、Minor、Resolved）と、WARP 利用者の位置情報が誤る事象（18:46:19Z 発生、Identified）が出ているが、いずれも本 Skill の対象範囲（AI / エージェント / MCP / 開発者プラットフォーム）外のため記録対象にしていない。

## できるようになったこと

- 該当なし（障害記録）

## 影響範囲

- 対象ユーザー: Workers Builds を使って CI 経由でデプロイしている利用者
- 対象プラン: 全プラン
- API / UI / 管理者機能: Workers Builds（ビルドパイプライン）

## 教材化メモ

- **ランタイム障害とビルド障害を分けて見る**視点の実例。サービスは動いているがデプロイができない状態は、監視のダッシュボード上では「正常」に見えることがある。**リリースパイプラインの可用性を別立てで監視するか**という設計判断につながる。
- 短時間 incident のため記事化しない（SKILL 規約）。詳細メモと日次サマリーに留める。

## 原文確認

- 公式見出し: Workers Builds are Degraded
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
