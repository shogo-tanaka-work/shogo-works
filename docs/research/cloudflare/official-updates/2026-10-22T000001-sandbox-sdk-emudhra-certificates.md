---
date: 2026-10-22
title: "Sandbox SDK 0.12.14 が eMudhra 侵害を受けて信頼する証明書を更新"
service: "Sandboxes"
source: https://developers.cloudflare.com/changelog/post/2026-10-22-emudhra-certificates/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-22-emudhra-certificates/
fetched_at: 2026-10-24T09:10:00+09:00
published_date: 2026-10-22
date_precision: date-only
category: policy
---

# 2026-10-22 Sandbox SDK が eMudhra 中間 CA の侵害に対応

## 公式内容の日本語要約

eMudhra の中間認証局8つの秘密鍵が復元できる状態にあり、これらにチェーンする証明書は任意のホスト名で偽造できる。0.12.14 より前の Sandbox SDK イメージはこれらを信頼しており、コンテナから直接出る HTTPS 通信（`mountBucket()`、バックアップ、`gitCheckout()`、トンネル、サンドボックス内のコード）が偽造証明書で傍受され得る。

0.x は `@cloudflare/sandbox@0.12.14` へ更新し、Dockerfile の `FROM` を同版へ合わせて再デプロイする。更新できない場合（0.8.7 以降）は `interceptHttps = true` で HTTPS を Worker 経由にする回避策がある（443 以外の TLS は対象外）。1.x は SDK 更新は不要で、イメージを再ビルドし、実行中のサンドボックスとスナップショットを入れ替える。

0.12.13 で CA バンドル・Node.js・cloudflared・pip が、0.12.14 で Bun が該当証明書を拒否するようになった。確認はサンドボックス内から公式の検証用ホストへ接続し、全クライアントで失敗することを見る。

教材化メモ: src/content/ai-news-notes/cloudflare/sandbox-sdk-emudhra-certificates.mdx

## できるようになったこと

- 侵害された CA を拒否するイメージへの更新と、サンドボックス内からの確認

## 影響範囲

- 対象ユーザー: Sandbox SDK を使う Workers 開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: SDK・イメージ更新、再デプロイ

## 原文確認

- 公式見出し: Sandboxes - Sandbox SDK 0.12.14 updates trusted certificates after the eMudhra compromise
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-22-emudhra-certificates/
- 原文全文は公式ページで確認してください。
