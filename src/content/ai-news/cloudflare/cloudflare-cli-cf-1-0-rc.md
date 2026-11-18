---
title: "Cloudflare CLI（cf）1.0 リリース候補：設定形式とビルド出力が安定、コマンド名の変更あり"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-11-17
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-11-17-release-candidate/"
summary: "Cloudflareが新CLI「cf」の1.0リリース候補（1.0.0-rc.1）を公開した。9月下旬からのベータを経て、設定形式・ビルド出力・主要コマンドが1.0まで安定する見込みと示した。一部コマンドは名称が変わる。"
description: "cf 1.0.0-rc.1で安定対象になるもの、ベータからの移行で必要な作業（Build Output v1、依存バージョン、コマンド名変更、標準出力の仕様）、新しいログ確認コマンドを整理する。"
impact: "cfをCI・デプロイスクリプトに組み込んでいる場合のコマンド名・出力先・Build Outputの移行作業、Wranglerからの移行判断に影響。"
tags: ["cloudflare", "cli", "cf", "wrangler", "workers", "release-candidate"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflareは2026年11月17日、新しいコマンドラインツール「Cloudflare CLI（`cf`）」の`1.0.0-rc.1`を公開しました。`cf`は9月下旬からベータで提供されており、今回は1.0へ向けた最初のリリース候補です。公式は、自分のプロジェクトで試して、1.0の前にフィードバックを送ってほしいとしています。

ベータ版の利用者にとっては、**スクリプトを書き換える必要がある変更**が含まれます。CIやデプロイ手順に組み込んでいる場合は、更新前に変更点を確認してください。

## 何が変わったか

- **1.0まで安定する見込みのもの**: `cloudflare.config.ts`の設定形式、`cf build`が書き出し`cf deploy`が読むBuild Outputの形式、`cf init` / `dev` / `build` / `deploy`などプロジェクト作成・開発・デプロイのコマンド、Cloudflare APIから生成されるコマンドの大半
- **まだ変わりうるもの**: あまり使われないAPI由来のコマンドの一部（呼び出しパス）
- **Build Output v1**: 出力先が`.cloudflare/output/v1/`に移る。`cf deploy`は初回実行時に新しい場所へ自動でビルドを作る
- **依存関係**: 依存のバージョン指定がキャレット（`^`）になる。Viteでビルドする場合は`@cloudflare/vite-plugin` 2.0.0-rc.0以降、従来のWranglerで動くプロジェクトはWrangler 4.163.0以降が必要
- **コマンド名の変更（エイリアスなし）**: たとえば`cf workers secrets bulk`は`cf workers secrets bulk-edit`になる。一覧は公式のリリースノートで確認する
- **ベータ前半からの変更**: 進捗やメッセージはstderrに出力され、stdoutはコマンドの出力だけになる。キャメルケース/スネークケース由来のコマンドはケバブケースになる。`cf previews deploy`はプレビュー名を`--preview-name`で渡す。`--local`の状態は`.cloudflare/state`に保存される。アカウントの選択は保存されず、`cloudflare.config.ts`の`accountId`か環境変数`CLOUDFLARE_ACCOUNT_ID`で指定する。端末のない環境での破壊的コマンドは`--force`がないとエラーになる
- **新機能**: `cf observability tail`でライブログをNDJSONで流せる。`--worker`、`--zone`、`--all`で対象を選び、`--filters`で絞り込む。Workers Logsの有効化が必要

## 業務インパクト（一般企業向け）

影響が大きいのは、ベータ版の`cf`をCIに入れているチームです。stdoutにメッセージが出なくなったことで、ログをパースしているスクリプトが壊れる可能性があります。また、端末のないCIでの破壊的コマンドが`--force`なしだと失敗するため、削除や上書きを含むジョブはエラーで止まります。

リリース候補なので、本番のデプロイ経路を即座に切り替える必要はありません。ステージング用のジョブで先に試し、コマンド名の変更と、Build Outputの出力先変更に伴うキャッシュ・アーティファクト設定を洗い出す、という順番が安全です。

Wranglerを使い続けるプロジェクトも、Wrangler 4.163.0以降が条件になる箇所があります。バージョン固定をしている場合は確認してください。

## 副業・個人活用視点

個人開発でCloudflare Workersを使っているなら、新規プロジェクトで`cf init`から試す価値があります。設定が`cloudflare.config.ts`に集まるため、AIコーディングエージェントにも読ませやすい構成です。

一方、1.0前なので、納品物のデプロイ手順に固定で入れるのは慎重に。クライアント案件では、Wranglerなど安定した手順を残しつつ、自分のプロジェクトで`cf`を試すのが無難です。`cf observability tail`は、障害の切り分けで便利なため、ログ確認の補助として試せます。
