---
date: 2026-11-12
title: "Cloudflare Tunnel の URL 正規化を拡張、既定オンは 2027-02-08"
service: "Cloudflare Tunnel"
source: https://developers.cloudflare.com/changelog/
fetched_at: 2026-11-13T09:20:00+09:00
published_at: 2026-11-12
date_precision: date-only
category: policy
---

# 2026-11-12 Cloudflare Tunnel の URL 正規化を拡張、既定オンは 2027-02-08

## 公式内容の日本語要約

cloudflared 2026.11.0 から、セミコロン区切りのパスパラメータを ingress ルール照合前に正規化する。Access 検証を要するルールのセキュリティ向上が目的。2027-02-08 以降の新リリースで既定オン（従来予告は 2027-01-25）。現在は既定オフで、`--disable-path-normalization=false` か `TUNNEL_DISABLE_PATH_NORMALIZATION=false` でオンにできる。オリジンへ送るパスは変わらない。

教材化メモ: src/content/ai-news-notes/cloudflare/tunnel-url-normalization-default-2027-02-08.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/
- 原文全文は公式ページで確認してください。
