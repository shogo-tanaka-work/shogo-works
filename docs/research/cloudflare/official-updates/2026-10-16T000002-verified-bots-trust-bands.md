---
date: 2026-10-16
title: "Verified bots の挙動を継続評価して trust band を付ける仕組み（Cloudflare 内部で稼働中）"
service: "Bot Management / Verified Bots"
product: "Bot Management, Radar"
source: https://blog.cloudflare.com/verified-bots-accountability/
official_url: https://blog.cloudflare.com/verified-bots-accountability/
fetched_at: 2026-10-17T09:15:00+09:00
published_date: 2026-10-16
date_precision: date-only
category: enhancement
---

# 2026-10-16 Verified bots の継続的な信頼評価

## 公式内容の日本語要約

Cloudflare は、**Verified bot が「検証されたあとに何をしているか」を継続的に評価する仕組み**を公開した。身元が確認済みであることと、サイト側の意思を尊重していることは別だという立場である。評価結果は固定の格付けではなく、観測された挙動に基づく**説明可能な trust band**として表される。

初期のシグナルは2つ。**robots.txt（RFC 9309）に従っているか**と、**HTTP 429 に対して減速・停止するか**である。単発の違反より、繰り返されるパターンを重く見る。429 を無視し続ければ band は下がり、従えば上がる。

背景として、2025 年に Perplexity の bot がオプトアウト済みサイトへアクセスし、ブロックの回避を試みたとして Verified bot リストから外した件が挙げられている。

**提供状況は「Cloudflare 内部で稼働中」の段階である。** 全顧客への提供予定と、Radar でのスコア公開予定は述べられているが、**時期は示されていない。** 提供後は、サイト側が Verified bot トラフィックの扱いを決める閾値を選べるようになるとされる。サイト側の既存の手段としては Bot Preference Sync と Bot Management が挙げられている。

## できるようになったこと

- （現時点では Cloudflare 内部のみ）Verified bot の robots.txt 遵守と 429 への反応を継続的に評価し、trust band を算出する
- bot 運営者は、公開されるスコアで「信頼を維持し続けていること」を示せるようになる（公開時期は未定）

## 影響範囲

- 対象ユーザー: Verified bot の運営者（AI クローラーを含む）、Cloudflare を使うサイト所有者
- 対象プラン: 記載なし。顧客提供は未開始
- API / UI / 管理者機能: 提供時に trust 閾値の選択が加わる見込み。Radar でのスコア公開も予定

## 教材化メモ

- **「身元確認」と「行動の継続評価」を分ける考え方**は、AI エージェント全般の信頼設計にそのまま使える。認証（誰か）と認可（何をしてよいか）に加えて、**観測された振る舞いで権限を動かす**という第3の軸として説明できる。
- **robots.txt と 429 という2つのシグナルが「宣言された意思」と「その場の信号」に対応している**点が教材的に分かりやすい。前者は事前の取り決め、後者は実行中のフィードバック。エージェント設計のレート制御を説明する例として具体的。
- **「単発の違反より繰り返しのパターン」という評価方針**は、社内の AI 利用ポリシー違反の扱いにも応用できる論点。1回の逸脱で遮断する設計は運用が回らない。
- ただし**提供時期が未定で、現在サイト所有者が取れる行動が無い**ため、速報記事にはしない。全顧客提供または Radar 公開の時点で記事候補へ上げ直す。

## 原文確認

- 公式見出し: `Continuous accountability for Verified bots`
- 公式URL: https://blog.cloudflare.com/verified-bots-accountability/
- 原文全文は公式ページで確認してください。
