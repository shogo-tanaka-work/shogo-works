---
date: 2026-10-05
title: "Durable Objects の可用性障害（北米東部）— Containers / R2 / Workers Assets / Workflows も影響"
service: "Cloudflare Durable Objects"
product: "Durable Objects, Containers, R2, Workers Assets, Workflows"
source: https://www.cloudflarestatus.com/incidents
fetched_at: 2026-10-06T09:40:00+09:00
published_at: 2026-10-05T17:14:30Z
date_precision: timestamp
category: incident
official_url: https://www.cloudflarestatus.com/history
---

# 2026-10-05 Durable Objects の可用性障害（北米東部）

## 公式内容の日本語要約

Cloudflare Status に **「Durable Objects Availability Issue in Eastern North America」** が掲載された。**開始 2026-10-05T17:14:30Z、解決 2026-10-05T22:35:46Z で、継続は約5時間20分**である。巡回時点では **resolved**。

影響コンポーネントとして **Containers / Durable Objects / R2 / Workers Assets / Workflows** が挙げられている。**開発者プラットフォームの中核が横断的に影響を受けた形**で、Durable Objects を状態保持に使うエージェント構成（Agents SDK / Containers ベースのサンドボックス）は北米東部で影響を受けうる範囲に入る。

同日の Status には **「Increase in Latency Across Multiple Locations」**（2026-10-05 09:30 付、開始と解決が同時刻で登録されており実質的な継続時間が読み取れない）と、**「API Shield JWT Validation Errors」**（resolved、API Shield はセキュリティ製品で本 Skill の対象外）も掲載されている。

**データセンター単位のメンテナンス告知（PRG / FRA / ACC / BGW / MCT / GYE / DOH / SIN）は規約どおり対象外**として記録しない。

**短時間 incident の扱いに準じ、AIニュース記事化はしない。** 日次サマリーと本詳細メモに留める。

## できるようになったこと

- （該当なし。障害記録）

## 影響範囲

- 対象ユーザー: 北米東部で Durable Objects / Containers / R2 / Workers Assets / Workflows を使う利用者
- 対象プラン: 公式に明記なし
- API / UI / 管理者機能: Workers 開発者プラットフォーム（実行時）

## 教材化メモ

- **AIニュース記事化はしない（障害）。**
- 教材での使いどころは「Durable Objects はエージェントの状態保持の単一障害点になりうる」という設計上の論点である。**Agents SDK や Containers ベースのサンドボックスは DO を前提に組むため、DO の可用性がそのままエージェントの可用性になる。** リージョン障害時の挙動（状態の読み出し失敗をどう扱うか）を設計段階で決めておく必要がある。
- 影響コンポーネントが5つ並ぶ点も教材向けである。**マネージドな開発者プラットフォームは、構成要素が内部で共有されているため「Workers だけ使っているから無関係」とは言えない**ことの実例になる。

## 原文確認

- 公式見出し: Durable Objects Availability Issue in Eastern North America
- 公式URL: https://www.cloudflarestatus.com/history
- 原文全文は公式ページで確認してください。
