---
title: "Workers の静的アセットを /blog/ のようなパス配下から配信できる — assets.base_path"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-28
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-28-static-assets-base-path/"
summary: "Cloudflare は Workers Static Assets に、URL の path prefix 配下から配信する設定を追加した。Wrangler では assets.base_path、cloudflare.config.ts では worker.assets.basePath に /blog のようなパスを指定すると、ビルド成果物のディレクトリ構造を変えずに、そのパス配下で配信できる。Wrangler 4.148.0 以上、cf 1.0.0-beta.13 以上が必要。"
description: "1つのドメインの一部のパスだけを Workers の静的サイトにしたいときの手間が減る。"
impact: "サブパス配信のために成果物のフォルダを /blog/ の下へ入れ直す必要がなくなる。パスごとにオリジンを振り分ける構成で、静的サイトを1つのパスに載せやすくなる。"
tags: ["cloudflare", "workers", "static-assets", "wrangler", "ルーティング"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は、**Workers Static Assets を URL の path prefix 配下から配信できる**ようにしました。ビルド成果物のディレクトリ構造は変えずに、設定で配信パスだけを指定します。

設定は2通りです。

- **Wrangler**: `assets.base_path` に `/blog` のようなパスを指定する
- **`cloudflare.config.ts`**: `worker.assets.basePath` に同じ値を指定する

たとえば、`./dist` にあるビルド成果物を `/blog/` 配下で配信したい場合は、次のように書きます。

```toml
[assets]
directory = "./dist"
base_path = "/blog"
```

`assets.directory` は、これまでどおり配信するディレクトリを選びます。`base_path` は、その中身を**どの URL パスの下に見せるか**を決めます。必要なバージョンは **Wrangler 4.148.0 以上**、`cloudflare.config.ts` を使う場合は **cf 1.0.0-beta.13 以上**です。`cloudflare.config.ts` の例では、compatibility date に導入日である 2026-10-28 を指定しています。

## 何が変わったか

- 静的アセットを **URL のパス配下から配信**できる（例: `/blog/`）
- **成果物のディレクトリ構造を変える必要がない**。`dist` の中身をそのまま使える
- Wrangler の設定（`assets.base_path`）と `cloudflare.config.ts`（`worker.assets.basePath`）の両方に対応
- 詳細は公式ドキュメントの「Serving a subdirectory」を参照

## 業務インパクト（一般企業向け）

**この機能が効くのは、1つのドメインを複数のシステムで分け合っている企業です。** コーポレートサイトの本体は既存の基盤に置いたまま、`/blog/` や `/docs/` だけを別のチームが静的サイトとして運用する、という構成は珍しくありません。これまでは、**成果物を `blog/` というフォルダの下に入れ直してからデプロイする**など、配信パスに合わせた整形が必要でした。

設定で完結すれば、**ビルドの手順とデプロイの設定が分かれ、担当者間の受け渡しが単純になります。** ビルドは常にサイトのルートを基準に作り、公開するパスだけを設定で決められるため、同じ成果物を別のパスへ載せ替える場面でも、成果物を触らずに済みます。

**確認が必要な点もあります。** 本記事の根拠は公式の更新情報で、配信パス以外のサイト内リンクや、アセットのパスがどう解決されるかまでは確認していません。**サイト内の絶対パスで書いたリンクや画像が、プレフィックス付きで正しく解決されるかは、導入前に検証用の環境で確かめてください。**

## 副業・個人活用視点

**受託で「既存サイトの一部のパスだけ作り替えたい」という依頼に向く機能です。** 既存のサイトを丸ごと移さず、`/lp/` や `/campaign/` だけを Workers の静的サイトとして載せられると、**作業範囲と責任範囲を小さく区切れます**。

**試すなら、小さな検証サイトで `base_path` を設定し、トップ、画像、内部リンクがすべて指定のパス配下で開くかを見るのが手早い方法です。** ルート直下に置く場合と違い、パスのずれは気づきにくい不具合になります。

**導入時は、Wrangler のバージョンが 4.148.0 以上であることを先に確認してください。** 古いバージョンのままだと、設定が反映されない可能性があります。

**情報源の制約**: 本記事は Cloudflare の changelog 本文に基づく。リンクやアセットのパス解決の挙動は、公式ドキュメント側で確認していない。
