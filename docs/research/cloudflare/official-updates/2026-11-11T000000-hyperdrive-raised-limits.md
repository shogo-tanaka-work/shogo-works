---
date: 2026-11-11
title: "Hyperdrive の設定数と接続数の上限を引き上げ"
service: "Hyperdrive"
source: https://developers.cloudflare.com/changelog/post/2026-11-11-hyperdrive-raised-limits/
fetched_at: 2026-11-12T09:15:00+09:00
published_at: 2026-11-11
date_precision: date-only
category: enhancement
---

# 2026-11-11 Hyperdrive の上限引き上げ

## 公式内容の日本語要約

Workers Paid では Hyperdrive 設定を最大100件（従来25件）、設定あたりのオリジン DB 接続を最大1,500（従来100）まで構成できる。ダッシュボード・Wrangler・REST API で設定可能。オリジン DB 側の接続上限より低く設定することが推奨されている。

## 影響範囲

- 対象: Workers Paid で複数 DB や高同時接続を扱う開発者

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-11-hyperdrive-raised-limits/
