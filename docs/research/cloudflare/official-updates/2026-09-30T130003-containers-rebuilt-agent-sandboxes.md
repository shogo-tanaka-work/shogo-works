---
date: 2026-09-30
title: "Containers を再設計 — 起動中央値 648ms、ファイルシステムのスナップショット、`durable_object` スケジューリングポリシー"
service: "Containers"
product: "Containers, Durable Objects"
source: https://blog.cloudflare.com/faster-agent-sandboxes/
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T12:58:00Z
date_precision: timestamp
category: enhancement
---

# 2026-09-30 Containers 再設計（エージェントサンドボックス前提）

## 公式内容の日本語要約

Cloudflare は Containers のアーキテクチャを再設計し、**エージェント用サンドボックスのスケールを前提にした構成**へ切り替えた。

**性能。** ComputeSDK による第三者ベンチマークで、**起動時間の中央値が4秒強から 648ms へ（約6.2倍の改善）**。バースト試験では**6拠点にわたり 100,000 コンテナを 5.387 秒で起動**した。

**実行時の構成指定。** 新しい **`durable_object` スケジューリングポリシー**により、**サンドボックスごとのイメージとインスタンス種別をデプロイ時ではなく実行時に選べる**。従来は環境ごとに別アプリ・別デプロイを用意する必要があった。

**ファイルシステムのスナップショット（パブリックベータ）。** 作業環境を保存・復元でき、エージェントがセッションを跨いでセットアップをやり直さずに済む。

**システムイメージ。** `cloudflare/debian-trixie`（Debian Trixie Slim + Node.js 24.20.0 LTS）が用意され、独自 Dockerfile なしで起動できる。

**アーキテクチャ。** 各コンテナは引き続き Durable Object に紐づくが、再設計で **Durable Object が開発者体験の表側に出た**。新機能は従来クラスではなく **`ctx.container` 経由でのみ**利用できる。

**非推奨の期限。** 旧 `Container` クラスと旧 `Sandbox` クラスは **2026-12-31 までメンテナンス**され、以降は既存デプロイは動作し続けるが更新は提供されない。

## できるようになったこと

- 実行時にイメージ / インスタンス種別を選択（`durable_object` スケジューリングポリシー）
- ファイルシステムのスナップショットによる保存・復元（パブリックベータ）
- 既製システムイメージ `cloudflare/debian-trixie` の利用
- 起動中央値 648ms、大量同時起動

## 影響範囲

- 対象ユーザー: Workers / Containers / Durable Objects の開発者、エージェント実行環境の構築者
- 対象プラン: 明記なし（スナップショットはパブリックベータ）
- **期限: 旧 `Container` / 旧 `Sandbox` クラスは 2026-12-31 までメンテナンス**

教材化メモ: src/content/ai-news-notes/cloudflare/containers-agent-sandboxes-rebuild.mdx

## 原文確認

- 公式見出し: Cloudflare Containers, rebuilt to scale agent sandboxes
- 公式URL: https://blog.cloudflare.com/faster-agent-sandboxes/
- changelog: https://developers.cloudflare.com/changelog/post/2026-09-30-snapshots/ 、https://developers.cloudflare.com/changelog/post/2026-09-30-durable-object-scheduling-policy/
- 原文全文は公式ページで確認してください。
