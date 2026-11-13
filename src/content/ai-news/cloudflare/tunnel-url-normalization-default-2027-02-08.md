---
title: "Cloudflare Tunnel の URL 正規化：2027年2月8日から既定オン、cloudflared 2026.11.0 で事前検証を"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-11-12
sourceUrl: "https://developers.cloudflare.com/changelog/"
summary: "cloudflared 2026.11.0 から、セミコロン区切りのパスパラメータを ingress ルールの照合前に正規化するようになった。Access 検証を要するルールを守るための変更。新しい cloudflared の既定オンは 2027-02-08 からで、従来予告の 2027-01-25 から延期された。"
description: "対象になる構成、有効化の方法、期限までに行うテストを整理。現在は既定オフ。"
impact: "パスで振り分ける Tunnel 構成は、既定オンになる前にセミコロンを含むパスのルーティングを検証しておく必要がある。Access 検証を使わない構成は影響しない。"
tags: ["cloudflare", "tunnel", "cloudflared", "access", "security"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は2026年11月12日、Tunnel の URL 正規化を拡張しました。cloudflared のバージョン 2026.11.0 から、セミコロンで区切られたパスパラメータを、ingress ルールと照合する前に正規化します。これは 2026.10.0 で導入された正規化の拡張です。目的は、Cloudflare Access の検証を要するルールが、パスの書き方の違いですり抜けられないようにすることです。

重要なのは期限です。2027年2月8日以降の新しい cloudflared リリースで、この正規化が既定でオンになります。以前の予告は 2027年1月25日でしたが、テストの時間を確保するため延期されました。

## 何が変わったか

- **対象**: セミコロン区切りのパスパラメータの扱い。照合前に正規化される
- **オリジンへ送るパス**: 変わらない
- **現在の状態**: 既定オフ
- **有効化**: `cloudflared tunnel --disable-path-normalization=false run <TUNNEL_NAME_OR_UUID>`、または各 cloudflared レプリカに `TUNNEL_DISABLE_PATH_NORMALIZATION=false` を設定して再起動
- **既定オンの日**: 2027-02-08 以降の新リリース（旧予告 2027-01-25）
- **影響しない構成**: Access 検証を要するルールが無い構成

## 業務インパクト（一般企業向け）

Access で保護した内部アプリを Tunnel で公開し、パスごとにルールを分けている組織が対象です。更新して既定オンになった途端、セミコロンを含むパスのルーティングが変わる恐れがあります。2027年2月8日までに、検証環境で 2026.11.0 以降を使い、正規化を有効にしてテストしてください。特に、セミコロンを含むパスに一致するルールを確認します。

併せて、cloudflared の更新手順を見直す機会にもなります。自動更新を使っているなら、既定が変わる日を運用カレンダーに入れてください。

## 副業・個人活用視点

自宅サーバーや個人プロジェクトを Tunnel で公開していても、Access 検証を使うルールが無ければ影響はありません。顧客の案件で Tunnel と Access を組んでいる場合は、保守契約の範囲で期限前に検証を提案する材料になります。
