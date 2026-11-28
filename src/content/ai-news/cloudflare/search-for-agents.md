---
title: "Cloudflare が Search for Agents を発表：サイトの検索を AI エージェントへ、トグル1つで自ドメインに公開（ベータ）"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-11-25
sourceUrl: "https://blog.cloudflare.com/search-for-agents/"
summary: "Cloudflare が、自社ドメインを AI エージェントから検索できるようにする Search for Agents を発表した。ダッシュボードのトグルを入れると、AI Search のインスタンスが自動で作られてコンテンツのインデックスが始まり、/.well-known/search で検索エンドポイントが公開される。HTML の head や Markdown の front matter に、エンドポイントと使い方を示すメタデータが自動で付く。結果は AI の生成回答ではなく Markdown で返り、エージェントは自分のモデルで使える。ベータで全プランが対象、Free には上限がある。"
description: "Search for Agents の仕組み、エージェント向けの発見用メタデータ、有効化の手順、公開前に確認したい統制ポイント（Bot 管理・AI Crawl Control・WAF）を整理する。"
impact: "自社サイトのドキュメントや記事を、エージェントがクロールせずに検索できる入口を設定なしで作れる。一方で検索結果は誰でも取得できる公開面になるため、公開前に対象範囲と Bot・WAF の設定を確認する必要がある。"
tags: ["cloudflare", "ai-search", "search-for-agents", "markdown-for-agents", "エージェント", "ベータ"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-11-25、**Search for Agents** を発表しました。自社ドメインのコンテンツを AI エージェントが検索できるようにする機能で、これまで手作業だった AI Search インスタンスの作成、検索エンドポイントの公開、エージェントへの周知を、**ダッシュボードのトグル1つ**にまとめたものです。ベータ表示で、Free を含む全プランで使えます（Free は上限あり）。

有効化すると、Cloudflare が AI Search のインスタンスを自動で作成し、ゾーンのコンテンツのクロールとインデックスを始めます。検索は自分のドメインの `/.well-known/search` で受け付けます。

## 何が変わったか

- **有効化**: ゾーンの Overview ページの Quick Actions、または API から有効にする。インスタンスは既定設定で作られ、リランキングやキャッシュ設定などは後から AI Search 側で変更できる
- **検索の方法**: `GET`（または HTTP `QUERY`）で、キーワードか自然文を渡す。公式の例は `curl --get "https://<自ドメイン>/.well-known/search" --data-urlencode "q=..."` の形
- **返り値**: AI が生成した回答ではなく、**関連する内容を Markdown で返す**。エージェントは返ってきた内容を自分のモデルで使う
- **発見用メタデータ**: HTML の `head` に `agent:instructions`、`agent:endpoint`、`agent:method`、`agent:documentation` の `meta` を自動で追加する。Markdown for Agents を有効にしていれば、`Accept: text/markdown` で取得した Markdown の YAML front matter にも同じ情報が入る
- **統制**: インデックスができた後の利用は、Bot 管理、AI Crawl Control、WAF など**ドメイン側の設定の対象**になる
- **料金**: 利用は AI Search の料金とプランの上限に従う。具体的な上限値は公式ドキュメントで確認する

## 業務インパクト（一般企業向け）

自社のヘルプ、製品ドキュメント、ナレッジ記事を、**AI エージェントに「クロールさせる」のではなく「検索してもらう」形へ寄せられる**ようになります。エージェントがサイト全体を巡回して負荷をかける状況を減らし、必要な箇所だけを取りに来させる狙いです。

導入前に確認したい点は次のとおりです。

- **公開範囲**: 検索対象は「ゾーンのコンテンツ」。認証後のページや社内向けの情報が、インデックスやエンドポイントの対象にならないかを確認する
- **アクセス制御**: Bot 管理、AI Crawl Control、WAF のルールが検索エンドポイントにも効くため、許可するエージェントの方針を先に決める
- **コスト**: AI Search の利用量が課金対象になる。想定外のアクセスで利用量が増えないかを、プランの上限と合わせて確認する
- **ベータの扱い**: 仕様や既定値が変わる可能性があるため、本番サイトへの適用は段階的に進める

## 副業・個人活用視点

個人サイトやドキュメントサイトを Cloudflare に置いていれば、**サイトを「エージェントに引用されやすい形」にする小さな改善案件**として扱えます。設定自体はトグルなので、提案の中心は、公開する範囲の整理と、Bot・WAF 設定の見直し、結果が正しく返るかの確認になります。

納品や運用に使うときは、ベータである点と、料金・上限が公式ドキュメントで変わりうる点を、顧客へ最初に伝えてください。
