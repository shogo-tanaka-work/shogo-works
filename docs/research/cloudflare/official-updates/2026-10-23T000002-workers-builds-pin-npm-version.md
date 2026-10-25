---
date: 2026-10-23
title: "Workers Builds が packageManager の npm バージョンを固定"
service: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-23-workers-builds-pin-npm-version/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-23-workers-builds-pin-npm-version/
fetched_at: 2026-10-25T09:10:00+09:00
published_date: 2026-10-23
date_precision: date-only
category: enhancement
---

# 2026-10-23 Workers Builds の npm バージョン固定

## 公式内容の日本語要約

Workers Builds は、依存関係のインストール前に `package.json` の `packageManager` フィールドに書かれた npm のバージョンを入れるようになった。ローカルと同じ npm でビルドでき、新しい npm が書いた lockfile も同じ結果で入る。Yarn・pnpm・Bun のバージョンもこのフィールドで決まる。`npm@11.19.1` のような正確なバージョンが必要で、`engines.npm` は無視される。

記事化判断: 見送り（スコア不足・5点）。1 / 1 / 1 / 0 / 2。開発者向けの小さなビルド設定の改善。

## 教材化メモ

Cloudflare の CI/ビルド設定を扱う教材で、`packageManager` の指定方法の補足として使える。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-23-workers-builds-pin-npm-version/
