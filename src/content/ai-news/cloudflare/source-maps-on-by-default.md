---
title: "Wrangler と cf がソースマップを既定でアップロード — 設定なしで元のファイル名・行番号のスタックトレース"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-20
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-20-source-maps-on-by-default/"
summary: "Cloudflare changelog の 2026-10-20 エントリで、Wrangler 4.150.0 以降の wrangler deploy / versions upload / preview がソースマップを既定で生成・アップロードすると告知された。upload_source_maps の設定は不要になる。cf deploy も既定でアップロードし、Cloudflare Vite プラグイン 1.64.0 以降は Worker ビルドが既定でソースマップを生成する。元のファイル名と行番号に戻ったスタックトレースが Workers Logs、リアルタイムログ、Tail Workers、Workers Issues に出る。適用は Worker 実行後で、CPU 時間・バンドルサイズ・コールドスタートに影響しない。無効化は upload_source_maps を false にする。"
description: "既定値の変更。ソースが Cloudflare に渡る点を把握し、不要なら明示的にオフにする。"
impact: "障害調査でスタックトレースが読みやすくなる。一方で、既定でソースマップがアップロードされるため、ソースコードの内容が Cloudflare 側に渡る。社内規定でソースの外部保管に制約がある場合は、Wrangler を更新する前に無効化の設定を入れる必要がある。"
tags: ["cloudflare", "workers", "wrangler", "source-maps", "デバッグ"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-10-20、**Wrangler 4.150.0 以降**で `wrangler deploy`、`wrangler versions upload`、`wrangler preview` が**ソースマップを既定で生成・アップロード**すると告知しました。これまで必要だった **`upload_source_maps` の設定は不要**になります。

`cf deploy` も既定でアップロードします。**Cloudflare Vite プラグイン 1.64.0 以降**では、Worker のビルドが既定でソースマップを生成し、`cf deploy` がビルド出力内のすべてのソースマップをアップロードします。

効果は、**元のファイル名と行番号に戻ったスタックトレース**が Workers Logs、リアルタイムログ、Tail Workers、Workers Issues に出ることです。ソースマップは Worker の実行後に適用されるため、**CPU 時間、バンドルサイズ、コールドスタートには影響しません**。

## 何が変わったか

- Wrangler 4.150.0 以降で deploy / versions upload / preview が**既定でアップロード**
- `cf deploy` も既定でアップロード。Vite プラグイン 1.64.0 以降は Worker ビルドが**既定でソースマップを生成**
- 元のファイル名・行番号のスタックトレースが、Workers Logs / リアルタイムログ / Tail Workers / Workers Issues に出る
- カスタムビルドでは、外部ソースマップを見つけて自動アップロード。解決できないもの（インラインの `data:`）は**スキップ**され、失敗しない
- 失敗させたい場合は `upload_source_maps` を `true` にする
- 無効化は Wrangler で `upload_source_maps: false`、`cf` / Vite プラグインでは Worker の Vite 環境で `build.sourcemap` を `false` にする

## 業務インパクト（一般企業向け）

**障害対応の初動が速くなります。** 圧縮後のコードの位置ではなく、書いたコードの位置でエラーが見えるためです。

**注意すべきは、ソースコードの内容が Cloudflare に渡る点です。** ソースマップには元のソースの情報が含まれ得ます。社内規定でソースの外部保管に制約がある場合は、Wrangler や Vite プラグインを更新する前に、無効化の設定を入れてください。CI で最新版を自動取得している場合は、**気付かないうちに既定が変わる**ことになります。

## 副業・個人活用視点

**設定の手間なしで、本番のエラーを読みやすくできます。** 小さな Worker を受託で運用している場合、顧客からの不具合報告を調べる時間が短くなります。

受託案件では、**顧客のソースを第三者サービスに渡してよいか**を契約で確認しておくと安全です。不要な案件では、設定ファイルに `upload_source_maps: false` を入れておきます。
