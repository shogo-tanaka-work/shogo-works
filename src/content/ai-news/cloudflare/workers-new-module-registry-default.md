---
title: "Workers の新モジュールレジストリが11月17日から既定に — 互換性日付を上げる前に require() と import を確認"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-11-02
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-11-02-module-registry-default/"
summary: "Cloudflare は、互換性日付が 2026-11-17 以降の JavaScript Workers で、新しいモジュールレジストリを既定にすると告知した。new_module_registry フラグは不要になる。Node.js 互換環境で ES モジュールを require() で読み込め、import.meta も使える一方、無効な import attributes は拒否され、トップレベル await を含むモジュールの require() は失敗する。既存の Workers は互換性日付かフラグを変えるまで現状のまま動く。従来の挙動を保つには legacy_module_registry を指定する。同じ日付で Request.signal も既定で有効になる。"
description: "既定が変わるのは互換性日付を 2026-11-17 以降に更新したときだけ。更新前に依存関係の import と require() を点検する。"
impact: "既存の Workers は何もしなければ変わらない。互換性日付を更新するタイミングで、依存ライブラリの import attributes と require() の挙動が影響し得る。"
tags: ["cloudflare", "workers", "互換性日付", "モジュール", "期限あり"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は2026-11-02、**互換性日付が 2026-11-17 以降の JavaScript Workers では、新しいモジュールレジストリを既定で使う**と告知しました。

- モジュールレジストリは、Worker の JavaScript モジュールを探して読み込む仕組み。2026年9月に新版が発表されていた
- 2026-11-17 以降の日付を指定した Worker は、`new_module_registry` フラグなしで新版になる
- **Python Workers は対象外**で、従来のレジストリのまま
- **既存の Workers は、互換性日付やフラグを変えるまで今の挙動を保つ**

## 何が変わったか

- Node.js 互換を使う Workers で、`require()` から ES モジュールを読み込める。ただしそのモジュールと依存先が**トップレベル `await` を使っていないこと**が条件
- `import.meta` が使え、現在のモジュールの URL や、別モジュールの URL（読み込まずに解決）を取得できる
- **新レジストリは無効な import attributes を拒否する**。従来は通っていたコードが失敗する可能性がある
- 従来のレジストリを使い続けるには、日付が 2026-11-17 以降でも `legacy_module_registry` を足す
- 事前に試すには、今の日付のまま `new_module_registry` を互換性フラグに足す

## 業務インパクト（一般企業向け）

**何もしなければ影響はありません。** 互換性日付は Worker ごとに固定されており、勝手に上がることはありません。

**確認が要るのは、日付を更新するときです。** 定期的に互換性日付を最新へ揃える運用の会社は、11月17日以降の日付に上げた時点で新レジストリになります。

確認の手順は次の通りです。

- 日付を上げる Worker の依存ライブラリで、`require()` による ES モジュール読み込みやトップレベル `await` の有無を調べる
- 無効な import attributes がないかを、ビルドとテストで確認する
- 不安なら先に `new_module_registry` を足して検証環境で動かし、問題があれば `legacy_module_registry` で逃がす

**注意点**: 本記事は changelog の記述に基づく。どの依存ライブラリが影響を受けるかは、公式ページでは示されていない。

## 副業・個人活用視点

**個人の Worker は、日付を据え置く限り影響を受けません。** 新しい Worker を作るとき、テンプレートが 11月17日以降の日付を入れる可能性があります。そのとき既存コードを移植して動かない場合は、このレジストリの違いを疑います。

**受託案件では、保守の説明材料になります。** 納品済みの Worker の互換性日付を上げる提案をするなら、「新レジストリの確認が必要」と事前に伝えておくと、更新作業の見積もりが立てやすくなります。

**情報源の制約**: 本記事は Cloudflare の changelog（2026-11-02）に基づく。動作の検証は行っていない。なお同日、Request.signal も 2026-11-17 以降の日付で既定になる告知が出ている（クライアント切断を `request.signal` で受け取れる。無効化は `disable_request_signal`）。
