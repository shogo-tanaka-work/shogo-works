---
date: 2026-10-07
title: "Managed Agents の limited networking が web_search / web_fetch にも allowed_hosts を適用（セッション作成が 400 で失敗し得る）"
service: "Claude Managed Agents"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: policy
---

# 2026-10-07 Managed Agents の allowed_hosts が web ツールにも効く

## 公式内容の日本語要約

Claude Managed Agents で `limited` networking を使うクラウド環境では、環境の `allowed_hosts` が **`web_search` と `web_fetch` にも適用されるようになった。** これまでサンドボックスの通信だけを縛っていた設定が、サーバー側 web ツールの到達範囲も縛る。

挙動は次のとおり。`allowed_hosts` に一致しないホストの URL を `web_fetch` が取得しようとすると、エージェントへ `url_not_allowed` のエラー結果が返る。`web_search` は一致しないホストの結果を除外する。**`allowed_hosts` にホストが1つも入っていない場合、どちらのツールもページも検索結果も返さない。** `allow_package_managers` と `allow_mcp_servers` はこれらのツールに対してホストを追加しない。ツールにホストを到達させるには `allowed_hosts` へ追加する必要があり、**その追加はサンドボックスに対しても同じホストを開く。** `unrestricted` networking と self-hosted 環境ではこれらのツールは制限されない。

**破壊的な点はセッション作成の失敗である。** `limited` networking で、有効化した web ツールの `allowed_domains` に `allowed_hosts` に含まれないエントリがあると、**セッション作成が 400 エラーで失敗する。** そのエントリを追加するセッション更新も同様に失敗する。`allowed_hosts` のエントリは `*.` で始まらない限り**単一の完全一致ホスト**であり、`docs.example.com` は `["example.com"]` には含まれない。解消方法は、`allowed_hosts` にホストを追加するか、`allowed_domains` からそのエントリを外すかの2択。

## できるようになったこと

- `limited` networking の環境で、web 検索・取得の到達範囲をホスト単位で強制できる
- サンドボックスと web ツールの許可リストが1か所（`allowed_hosts`）に統一される

## 影響範囲

- 対象ユーザー: Claude Managed Agents で `limited` networking のクラウド環境を使う開発者
- 対象プラン: Claude Platform（Managed Agents）
- API / UI / 管理者機能: API（既存セッション設定が 400 で落ち得る破壊的変更）

教材化メモ: src/content/ai-news-notes/claude/managed-agents-allowed-hosts-web-tools.mdx

## 原文確認

- 公式見出し: "In Claude Managed Agents, a cloud environment with `limited` networking now also applies its `allowed_hosts` to the `web_search` and `web_fetch` tools."
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 併記: https://platform.claude.com/docs/en/managed-agents/environments#networking 、 https://platform.claude.com/docs/en/managed-agents/tools-web-restrictions
- 原文全文は公式ページで確認してください。
