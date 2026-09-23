---
date: 2026-09-22
title: "Workers Builds が Cursor Origin のリポジトリに対応"
service: "Cloudflare"
product: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-09-22-cursor-origin-workers-builds/
fetched_at: 2026-09-23T09:10:00+09:00
published_at: 2026-09-22
date_precision: date-only
category: enhancement
---

# 2026-09-22 Workers Builds の Cursor Origin 対応

## 公式内容の日本語要約

Cloudflare は 2026-09-22、**Workers Builds が Cursor Origin にホストされたリポジトリに対応した**と告知した。これまで GitHub / GitLab が対象だった連携先に Cursor Origin が加わった形である。

接続すると、本番ブランチへの push が自動でビルドとデプロイを行う。非本番ブランチのビルドを有効にすると、**各ブランチにバージョン固有のプレビューURLと、最新ビルドを追う安定プレビューURLの2種類**が発行される。Cloudflare は Cursor Origin のプルリクエストへビルド状態とプレビューリンクを投稿し、トリガーされたビルドごとに check run を作成する。

導入は Cursor へ Cloudflare アプリをインストールし、Cloudflare がアクセスできる Cursor Origin リポジトリを選び、Worker のビルド設定を進める。

## できるようになったこと

- Cursor Origin のリポジトリから Workers を自動ビルド・デプロイできる
- プルリクエストにビルド状態とプレビューリンクが表示される

## 影響範囲

- 対象ユーザー: Cursor Origin を使っている Workers 開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Cursor 側への Cloudflare アプリのインストールが必要

## 教材化メモ

- **見送り（スコア不足・5点）の典型例。** 機能としては正しく動くが、読者が行動を変えるには「Cursor Origin を使っている」という前提が必要で、対象が狭い。
- 同日の Worker Previews と合わせると、**Cloudflare が「変更ごとに隔離環境を出す」方向へ製品を寄せている**ことが読み取れる。単体では弱いが、文脈としては Worker Previews の記事で触れる価値がある。
- 連携先の追加は、**ロックインの読み方の教材**になる。ビルド基盤がどのホスティングに対応しているかは、リポジトリ移行の自由度を左右する。

## 原文確認

- 公式見出し: Workers Builds now supports Cursor Origin
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-22-cursor-origin-workers-builds/
- 原文全文は公式ページで確認してください。
