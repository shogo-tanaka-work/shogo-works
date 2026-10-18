---
date: 2026-09-24
title: "MCP server portals が一般提供（GA）。承認済み MCP サーバーへの単一エンドポイント"
service: "Cloudflare Access / Cloudflare One"
product: "Access, Cloudflare One"
source: https://developers.cloudflare.com/changelog/post/2026-09-24-mcp-portals-ga/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-24-mcp-portals-ga/
fetched_at: 2026-09-25T09:10:00+09:00
published_at: 2026-09-24
date_precision: date-only
category: release
---

# 2026-09-24 MCP server portals が GA

## 公式内容の日本語要約

Cloudflare は 2026-09-24、**MCP server portals を一般提供（GA）**にした。**承認済みの MCP（Model Context Protocol）サーバー群に対する単一のエンドポイント**を提供する機能で、ベータからの昇格である。エージェントごと・ツールごとに個別の MCP 接続を配るのではなく、**ポータル1つを経由させて、そこで認可・可視化・統制をまとめて効かせる**という構造になる。

ベータ以降に追加された機能は6つ。**Gateway ルーティング**により HTTP ログと DLP（データ損失防止）スキャンが効くようになった。**Code Mode ポリシー**で、ポータルがツール定義をどこまで圧縮しトークン消費を抑えるかを制御できる。**静的 OAuth クレデンシャル**への対応で、Dynamic Client Registration に非対応のプロバイダーも接続できる。**セッション管理**により、ポータル側からサーバーの再接続と認可の変更ができる。**サービストークン認証**で、自律エージェントやマシン間（M2M）アクセスに対応した。**Logpush 対応**で、アクティビティを外部ストレージや SIEM へエクスポートできる。

2026-09-22 には「プライベートネットワーク上の MCP サーバーへ Gateway 経由で到達する」機能も追加されており、**社内 MCP サーバーを外へ出さずにポータル配下へ入れられる**構成が揃った形である。

提供範囲は「**すべての Cloudflare 顧客**」で、プラン階層の限定は changelog 上に記載がない。

## できるようになったこと

- 承認済み MCP サーバーへの単一エンドポイントが GA
- Gateway ルーティングによる HTTP ログと DLP スキャン
- Code Mode ポリシーでツール定義の圧縮とトークン消費を制御
- 静的 OAuth クレデンシャル対応（DCR 非対応プロバイダーを収容）
- ポータルからのセッション再接続・認可変更
- サービストークン認証（自律エージェント / M2M）
- Logpush で外部ストレージ・SIEM へ出力

## 影響範囲

- 対象ユーザー: 社内でエージェントに MCP サーバーを使わせている組織、Cloudflare One / Access の管理者
- 対象プラン: **すべての Cloudflare 顧客**（changelog 上にプラン限定の記載なし）
- API / UI / 管理者機能: Cloudflare One ダッシュボード、Gateway ポリシー、Logpush ジョブ

教材化メモ: src/content/ai-news-notes/cloudflare/mcp-server-portals-ga.mdx

## 原文確認

- 公式見出し: Access, Cloudflare One - MCP server portals are now generally available
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-24-mcp-portals-ga/
- 補助: https://developers.cloudflare.com/changelog/post/2026-09-22-private-mcp-servers/（2026-09-22、プライベート MCP サーバー対応）
- 原文全文は公式ページで確認してください。
