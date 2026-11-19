---
date: 2026-11-18
title: "Workers VPC のカスタムCAとクライアント証明書（mTLS）"
service: "Cloudflare"
source: https://developers.cloudflare.com/changelog/post/2026-11-18-custom-ca-mtls/
fetched_at: 2026-11-19T09:20:00+09:00
published_at: 2026-11-18
date_precision: date-only
category: enhancement
---

# 2026-11-18 Workers VPC のカスタムCAとクライアント証明書（mTLS）

## 公式内容の日本語要約

Workers VPC の VPC Service で独自CAの検証とmTLSのクライアント証明書に対応。Hyperdrive 経由の PostgreSQL（RDS CA バンドル等）にも適用。Wrangler 4.164.0 以降、Terraform provider 5.29.0 以降。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-18-custom-ca-mtls/
- 原文全文は公式ページで確認してください。

判定: 見送り（スコア不足）。教材化メモ（記事化せず）: 私設CA環境での検証モード選択（verify_full）の教材候補。
