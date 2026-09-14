---
date: 2026-09-10
title: "Cloudflare Containers が OpenAI Agents API の実行環境として使えるように"
service: "Containers"
product: "Containers, Workers"
service_scope: "AI / エージェント"
source: https://developers.cloudflare.com/changelog/post/2026-09-10-using-openai-agents-api-with-cloudflare-containers/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-10-using-openai-agents-api-with-cloudflare-containers/
fetched_at: 2026-09-11T09:02:00+09:00
published_at: 2026-09-10
date_precision: date-only
category: enhancement
---

# 2026-09-10 Cloudflare Containers × OpenAI Agents API

## 公式内容の日本語要約

**Cloudflare Containers が、OpenAI Agents API の「自己ホスト実行環境」として使える**ようになった。同日 OpenAI が Agents API をパブリックベータで公開しており、**その「外部サンドボックスへ接続する」選択肢の最初の実装例**にあたる。

役割分担が明確に示されている。**OpenAI 側がセッション、オーケストレーション、コンテキスト圧縮、復旧を担い、アプリケーション側がツールを提供し、実行環境として Cloudflare Containers を使う。** エージェントの「頭脳と進行管理」と「手を動かす場所」を分離する構成である。

オープンソースの **OpenAI Agents API Workers テンプレート**がリファレンス実装として提供される。この Worker は **Codex のセッションごとに Cloudflare Container を1つ維持**し、実行中の作業を保ち、追加入力が来たら再接続し、**アイドルになれば自動で停止する**。

テンプレートは拡張前提で書かれている。**Container を拡張してデータとネットワークへのアクセスを制御された形で与える**、あるいは他の Cloudflare 製品と統合する、という改変が想定されている。

教材化メモ: src/content/ai-news-notes/cloudflare/containers-openai-agents-api.mdx

## できるようになったこと

- OpenAI Agents API の実行環境として Cloudflare Containers を指定できる
- Codex セッションごとに Container を維持し、アイドルで自動停止する構成をテンプレートから始められる
- Container 側でデータ・ネットワークのアクセス範囲を制御できる

## 影響範囲

- 対象ユーザー: Cloudflare Workers / Containers を使う開発者、OpenAI Agents API の利用者
- 対象プラン: Workers（Containers 利用が前提）
- API / UI / 管理者機能: 開発者向け

## 原文確認

- 公式見出し: Use Cloudflare Containers with Codex via the OpenAI Agents API
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-10-using-openai-agents-api-with-cloudflare-containers/
- 原文全文は公式ページで確認してください。
