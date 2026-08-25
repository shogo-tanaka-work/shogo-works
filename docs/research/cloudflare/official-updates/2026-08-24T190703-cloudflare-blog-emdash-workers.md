---
date: 2026-08-24
title: "Cloudflare Blog 自身が EmDash（Astro製CMS）へ移行 — Workers 上の構成と Blog 用 MCP server を公開"
service: "Cloudflare"
product: "Workers, Workers KV, Hyperdrive, EmDash"
source: https://blog.cloudflare.com/cloudflare-blog-uses-emdash/
fetched_at: 2026-08-25T09:05:00+09:00
published_at: 2026-08-24T19:07:03Z
date_precision: timestamp
category: enhancement
---

# 2026-08-24 Cloudflare Blog の EmDash 移行

## 公式内容の日本語要約

Cloudflare が 2026-08-24、**自社ブログを EmDash へ移行した経緯と本番構成を公開した**。EmDash は同社が 2026-04-01 に発表した Astro ベース・TypeScript 製の CMS で、プラグインを Dynamic Workers の隔離環境で動かすことで WordPress のプラグインセキュリティ問題を解こうとしているプロダクトである。移行の実施は **2026-08-12**、今回はその後日談にあたる。

公開された本番アーキテクチャは次の構成である。**EmDash を Cloudflare Worker 上で実行**し、**新しい Workers Cache の背後に配置**（Cloudflare は「主要サイトとしてはおそらく初」と述べている）、**Workers KV 上に構築された EmDash のオブジェクトキャッシュ**（Cloudflare の用途向けに EmDash チーム側が作ったもの）を利用し、**Cloudflare の一次提供の Hyperdrive × PlanetScale 連携**でデータベースに接続する。フロントエンドは Kumo デザインシステムに沿って再構築し、ライト／ダークモードのネイティブ対応を入れた。

移行の安全策も具体的である。**プロキシ Worker を配置してレガシーブログと新サイトへトラフィックを振り分け**、バージョン Cookie で経路を決め、新サイトが500系を返した場合はレガシーへフォールバックできるようにした。プロキシから新ブログ Worker へは **`NEW_BLOG` service binding による Worker 間直結**を使い、公開ホスト名・DNS・TLS・外向き HTTP を経由しない分のレイテンシを削っている。ローンチ当日は 1% → 5% → 15% と段階的に引き上げ、その日のうちに100%へ移行した。

**エージェント向けの成果として2点が挙げられている。1つは Cloudflare Blog 用の MCP server を新たに公開したこと**で、EmDash の API と AI search エンドポイントが Worker から公開されているため、MCP 化は数時間で済んだとしている。**もう1つは EmDash 自体が持つ MCP server** で、ブログ執筆者はコンテンツの閲覧・作成・編集、投稿の公開と予約、ファイル削除などを MCP 経由で行える。

実測値も公開された。p95 レスポンスレイテンシは旧構成にあった負荷時のスパイクが消え、平坦な応答プロファイルになったとしている。最大 850 RPS を捌き、Agents Week（9日間で18本、約300万ページビュー）ではフロントエンドの Worker が最大 450 RPS を問題なく処理、8月10日には 28,000 RPS の DDoS を Cloudflare 標準の DDoS 防御で吸収したと述べている。課題として、予約投稿が EmDash 0.19.0 まで機能しなかった点と、編集体験まわりの細かな不具合が残っている点を挙げている。

## できるようになったこと

- Cloudflare Blog 用の **MCP server** が公開された（EmDash API と AI search エンドポイントを Worker から公開）
- EmDash 自体の MCP server により、閲覧・作成・編集・公開・予約・ファイル削除を MCP 経由で実行できる
- Workers + 新 Workers Cache + Workers KV オブジェクトキャッシュ + Hyperdrive×PlanetScale という本番構成が、実測値つきで公開された
- 段階ロールアウトとフォールバックを Worker のプロキシと service binding で実装する具体例が示された

## 影響範囲

- 対象ユーザー: Cloudflare Workers 上でコンテンツサイトを構築する開発者、CMS 移行を検討する組織
- 対象プラン: 記載なし（EmDash は MIT ライセンスの OSS、Cloudflare アカウントへデプロイ可能）
- API / UI / 管理者機能: 製品リリースではなく自社導入事例。ただし Blog 用 MCP server の公開は新規の提供

教材化メモ: `src/content/ai-news-notes/cloudflare/cloudflare-blog-emdash-workers.mdx`

## 原文確認

- 公式見出し: The Cloudflare Blog – Brought to you by EmDash
- 公式URL: https://blog.cloudflare.com/cloudflare-blog-uses-emdash/
- 併記（EmDash 初出、2026-04-01）: https://blog.cloudflare.com/emdash-wordpress/
- 原文全文は公式ページで確認してください。
