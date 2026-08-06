---
date: 2026-08-05
title: "WriteGuard — MCP サーバーの書き込み操作に対するリスク階層制御（プライベートベータ）"
service: "Cloudflare"
product: "MCP server portal, Cloudflare One"
source: https://blog.cloudflare.com/mcp-portal-writeguard-private-beta/
fetched_at: 2026-08-06T18:30:00+09:00
published_date: 2026-08-05
date_precision: date-only
category: release
---

# 2026-08-05 WriteGuard（MCP サーバー向け書き込み制御）

## 公式内容の日本語要約

Cloudflare が、MCP サーバーに対する共通のポリシー・帰属記録・監査レイヤーである「WriteGuard」をプライベートベータで公開した。MCP クライアントとサーバーの間に入り、エージェントによる書き込み操作を制御・記録する。

ツールをリスク階層（Read Only / Minimal Impact / Contained Write / Critical）で分類し、高リスクの操作は実行前にブロックできる。実行された操作には「どのエージェントが行ったか」を示す帰属ラベルが付き、下流のアプリケーション側でも識別できる。接続された MCP サーバー横断で書き込み活動を集中監査でき、結果は成功 / 失敗 / ブロックに分類される。

Cloudflare 自身が「エージェントが数千件のチケットを一括クローズしてしまう」ような事故を防ぐために内製したもので、書き込み権限を社内展開する前段として位置づけられている。提供は Cloudflare の MCP サーバーポータル経由のプライベートベータで、GA に向けて段階的に拡大予定。

## できるようになったこと

- MCP ツールを 4 段階のリスク階層で分類できる
- 高リスクの書き込み操作を実行前にブロックできる
- 実行操作にエージェント帰属ラベルを付け、下流アプリで識別できる
- 複数 MCP サーバー横断で書き込み活動を集中監査できる（成功 / 失敗 / ブロック）

## 影響範囲

- 対象ユーザー: MCP サーバーに書き込み機能を持たせたい組織
- 対象プラン: Cloudflare MCP サーバーポータル経由のプライベートベータ
- API / UI / 管理者機能: 管理者向けポリシー + 監査ログ

## 教材化メモ

- 「読み取り MCP は入れたが、書き込みを許すかで止まっている」という状況は多くの組織で共通しており、リスク階層による段階的解禁は汎用的な設計パターンとして教材化できる。
- エージェント帰属（誰の操作か下流で判別できる）は、監査要件を満たすうえで見落とされやすい観点。MCP 教材の「導入前チェックリスト」に組み込む候補。
- 現時点でプライベートベータのため、手順の教材化は時期尚早。GA まで概念レベルの紹介に留める。

## 原文確認

- 公式見出し: WriteGuard: fine-grained controls for MCP Servers
- 公式URL: https://blog.cloudflare.com/mcp-portal-writeguard-private-beta/
- 原文全文は公式ページで確認してください。
