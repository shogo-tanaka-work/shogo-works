---
date: 2026-11-16
title: "Artifacts がローカル開発に対応"
service: "Cloudflare"
source: https://developers.cloudflare.com/changelog/post/2026-11-16-local-artifacts-development/
fetched_at: 2026-11-17T09:15:00+09:00
published_at: 2026-11-16T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-11-16 Artifacts がローカル開発に対応

## 公式内容の日本語要約

Cloudflare Artifacts（Git リポジトリを Workers から扱う機能）が wrangler dev・Cloudflare Vite プラグイン・Workers Vitest 連携でローカルシミュレーターを使えるようになった。Wrangler 設定に artifacts バインディングを追加するとリポジトリ作成、HTTPS 取り込み、トークン発行、git の clone / push をローカルで試せ、本番と同じイベントも発火するため Workflows のテストに使える。要 Wrangler 最新版と Git 2.32 以上。deployed リポジトリを使うには remote = true。

## 影響範囲

- 対象: Workers で Artifacts を使う開発者。

## 教材化メモ

記事化見送り（スコア不足）。スコア 1/1/1/0/2 = 5。Artifacts 利用者に限られ、基礎教材への影響は小さい。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-16-local-artifacts-development/
- 原文全文は公式ページで確認してください。
