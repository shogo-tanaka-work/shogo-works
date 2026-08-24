---
date: 2026-08-21
title: "Cloudflare Bot Preference Sync — robots.txt を AI ボット方針（Search / Agent / Training）と自動同期"
service: "Cloudflare"
product: "Bots, AI Crawl Control"
source: https://blog.cloudflare.com/bot-preference-sync/
fetched_at: 2026-08-22T09:05:00+09:00
published_at: 2026-08-21
date_precision: date-only
category: release
---

# 2026-08-21 Cloudflare Bot Preference Sync

## 公式内容の日本語要約

Cloudflare は 2026-08-21、**Bot Preference Sync** を発表した。ダッシュボードで設定した AI ボットの方針を、`robots.txt` の記述として自動的に生成・同期する機能である。全プラン（Free から Enterprise まで）が対象で、提供開始は「来週中」とされている。

解決しようとしている問題は、**「表明した方針」と「実際に強制しているルール」のずれ**である。多くのサイトでは、`robots.txt` は手で書いた静的ファイルとして放置され、Cloudflare 側のボット制御設定だけが更新されていく。この2層が食い違うと、クローラー側は表明を無視するか、あるいは強制側の回避を試みる余地が生まれる。公式の言い方では「設定した preference が、そのまま publish される preference になる」状態を作るのが狙いである。

仕組みとしては、Cloudflare が生成したディレクティブを既存の `robots.txt` の内容の前に付加する。方針は **Search / Agent / Training の3カテゴリ**それぞれについて、`Allow`、`Block`（広告ページは例外）、`Block everywhere` から選ぶ。選択内容が対応する `User-agent` と `Disallow` のエントリへ自動的に反映される。

**Training についてはブロックの考え方が整理された。** 透明性を確保して協調するクローラーには `Disallow` を返して尊重を求めつつ、モデル学習への利用は防ぐという扱いに変わる。Search と Training の両方を行う mixed-use のボットは、Training を不許可にした場合、透明性の要件を満たさないとブロック対象になる。

既存顧客のうちレガシーの managed robots.txt を使っているものは、移行時に方針の確認を求められる。新規顧客は既定で有効になる。

## できるようになったこと

- ダッシュボードの AI ボット方針から `robots.txt` を自動生成・同期（手書きの静的ファイル管理が不要に）
- Search / Agent / Training の3カテゴリごとに Allow / Block / Block everywhere を選択
- Training 不許可時、透明性要件を満たさない mixed-use ボットをブロック対象にできる
- 全プラン（Free 〜 Enterprise）で利用可能

## 影響範囲

- 対象ユーザー: Cloudflare でサイトを配信している全事業者。特に自社コンテンツの AI 学習利用を制御したいメディア・EC・企業サイト
- 対象プラン: Free から Enterprise まで全プラン
- API / UI / 管理者機能: ダッシュボードのボット設定 UI と、生成される `robots.txt`
- 提供時期: 発表時点では「来週中」に提供開始。新規顧客は既定で有効、レガシー managed robots.txt 利用者は移行確認あり

教材化メモ: src/content/ai-news-notes/cloudflare/bot-preference-sync.mdx

## 原文確認

- 公式見出し: Say it once: introducing Bot Preference Sync
- 公式URL: https://blog.cloudflare.com/bot-preference-sync/
- 原文全文は公式ページで確認してください。
