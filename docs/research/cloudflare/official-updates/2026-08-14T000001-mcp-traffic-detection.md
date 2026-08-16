---
date: 2026-08-14
title: "Gateway が MCP トラフィックを検出 — シャドー MCP の可視化と Portal 経由の強制"
service: "Cloudflare"
product: "Cloudflare One（Gateway, Access, MCP Server Portals）"
source: https://blog.cloudflare.com/mcp-security-updates/
official_url: https://blog.cloudflare.com/mcp-security-updates/
fetched_at: 2026-08-16T08:37:00+09:00
published_at: 2026-08-14
date_precision: date-only
category: release
---

# 2026-08-14 Cloudflare の MCP トラフィック検出

## 公式内容の日本語要約

Cloudflare が Cloudflare One に、**MCP（Model Context Protocol）トラフィックを検出して統制するための機能群**を追加した。組織内で誰がどの MCP サーバーへ接続しているかを可視化し、承認済みサーバーだけを通す運用に寄せるための仕組みである。

検出はプロトコルレベルのヒューリスティックで行う。MCP 仕様 2025-11-25 以降で必須となった **`MCP-Protocol-Version` ヘッダ**を主な手がかりとし、2026-07-28 のステートレスプロトコルで導入された **`Mcp-Method`** と **`Mcp-Name`** から操作内容とツール名を取得する。公式は、**ヘッダの存在は MCP である強い根拠になるが、非存在は MCP でないことの証明にはならない**と明記している。検出は完全ではないという前提が示されている。

追加された要素は次の4点である。

1. **Gateway の MCP 検出セレクタ**: `experimental.is_mcp == true` をポリシー条件に使える
2. **MCP トラフィックダッシュボード**: どのホストが MCP を提供しているか、どのユーザーが発生させているか、承認済み Portal を迂回しているかを表示する。任意の期間で総リクエスト数・ユニークユーザー数・ユニークサーバー数を確認できる
3. **Traffic Source セレクタ**: Gateway の Network / HTTP ポリシーで、Portal 経由のリクエスト（`mcp_portal`）と直接接続を区別できる
4. **MCP Portals の手動 OAuth 認証情報**: 動的登録に頼らず、事前登録済みの OAuth クライアントを管理者が手動設定できる。ダッシュボードに表示されるコールバック URL を上流プロバイダーへ登録し、クライアント認証情報を入力する

公式が示す運用手順は、**可視化 → 突き合わせ → Portal 化 → 強制**の順である。まず Gateway を通る MCP トラフィックを観察し、宛先を承認済みサーバーと突き合わせ、承認したサーバーを Portal の背後へ移し、最後に MCP 検出と Traffic Source を組み合わせたポリシーで未承認の直接接続を遮断する。

## できるようになったこと

- 組織内の MCP 通信をプロトコルレベルで検出し、ダッシュボードで俯瞰できる
- 承認していない MCP サーバーへの接続（シャドー MCP）を発見できる
- Portal 経由か直接接続かをポリシーで区別し、直接接続だけを遮断できる
- 動的クライアント登録に対応しない MCP サーバーも、手動 OAuth 設定で Portal に載せられる

## 影響範囲

- 対象ユーザー: Cloudflare One（Zero Trust）の管理者
- 対象プラン: 記載なし。Gateway / Access / MCP Server Portals の利用が前提
- API / UI / 管理者機能: Gateway の Network / HTTP ポリシー、MCP トラフィックダッシュボード、MCP Server Portals の設定画面
- 注意: `experimental.is_mcp` は名称のとおり experimental 扱いのセレクタである

教材化メモ: src/content/ai-news-notes/cloudflare/mcp-traffic-detection.mdx

## 原文確認

- 公式見出し: How Cloudflare detects MCP traffic and helps secure it
- 公式URL: https://blog.cloudflare.com/mcp-security-updates/
- 原文全文は公式ページで確認してください。
