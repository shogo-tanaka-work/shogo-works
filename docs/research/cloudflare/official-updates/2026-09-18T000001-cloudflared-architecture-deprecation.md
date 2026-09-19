---
date: 2026-09-18
title: "cloudflared が 2027年に 32bit Windows と Intel Mac 向けビルドを廃止"
service: "Cloudflare Tunnel / Cloudflare Tunnel for SASE"
product: "Cloudflare Tunnel, Cloudflare Tunnel for SASE"
source: https://developers.cloudflare.com/changelog/post/2026-09-18-cloudflared-architecture-deprecation/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-18-cloudflared-architecture-deprecation/
fetched_at: 2026-09-19T09:02:00+09:00
published_at: 2026-09-18
date_precision: date-only
category: incident
---

# 2026-09-18 cloudflared の 32bit Windows / Intel Mac ビルド廃止予告

## 公式内容の日本語要約

Cloudflare が、**2027年から cloudflared の 32bit Windows 向けビルドと Intel ベース macOS 向けビルドを廃止する**と告知した。理由として挙げられているのは OS 側のサポート期限との整合で、**Windows 10 のサポートが 2025年10月に終了**していること、**macOS 27 が Intel アーキテクチャを非対応**にしたことが根拠として示されている。

**本Skillの製品スコープ外の告知である。** Cloudflare Tunnel / Tunnel for SASE はネットワーク・ゼロトラスト製品で、`source-catalog.md` の Cloudflare 節が定める「AI / エージェント / MCP / 開発者プラットフォームに関わるか」という判定に当てはまらない。**それでも記録するのは、廃止時期が明記された告知であり、cloudflared をローカル開発の公開経路として使っている場合に棚卸しが発生するため**である。

**廃止は「2027年から」とだけ示されており、月日の指定は本文にない。** 具体的な日付が出た時点で再記録する。

## できるようになったこと

- 該当なし（廃止予告）

## 影響範囲

- 対象ユーザー: 32bit Windows または Intel Mac 上で cloudflared を動かしている利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: cloudflared バイナリの配布対象アーキテクチャ

## 教材化メモ

**単独記事にしない（製品スコープ外）。** ただし「**ベンダーの廃止告知は OS のサポート期限に連動して出る**」という一般則の実例としては使える。Windows 10 の EOL（2025-10）と macOS の Intel 非対応という2つの外部要因が、1年以上遅れてツールの配布対象に効いてくる、という時間差が要点である。

教材で扱うなら、Cloudflare 固有の話にせず「**自社が依存しているエージェント／CLI の対応アーキテクチャを、OS の EOL カレンダーと突き合わせて棚卸しする**」という点検手順に落とす。年月日が未確定の廃止告知をどう管理するか（期日が出るまで棚卸しリストに残す）も一緒に扱える。

## 原文確認

- 公式見出し: cloudflared to deprecate 32-bit Windows and Intel-based macOS builds in 2027
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-18-cloudflared-architecture-deprecation/
- 原文全文は公式ページで確認してください。
