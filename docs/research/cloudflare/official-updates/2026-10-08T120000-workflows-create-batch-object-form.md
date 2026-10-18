---
date: 2026-10-08
title: "Workflows の createBatch() がオブジェクト形式に対応（1回で最大100インスタンス）"
service: "Cloudflare Workflows"
product: "Workflows, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-10-08-create-batch-object-form/
fetched_at: 2026-10-09T09:20:00+09:00
published_at: 2026-10-08T12:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-10-08 Workflows の createBatch() がオブジェクト形式に対応

## 公式内容の日本語要約

Cloudflare Workflows の **`createBatch()`** がオプションオブジェクトを受け付けるようになり、**1回の呼び出しで最大100インスタンス**を作成できる。

指定方法は2つある。**`count`** を渡すと、生成された ID と共通の params を持つインスタンスをまとめて作る。**`instances`** を渡すと、インスタンスごとに ID と params を指定できる。

戻り値の構造が実務上重要である。作成されたインスタンスは **`created`**、失敗したものは **`errors`** に入り、**失敗は入力の位置（input position）で識別される。** 既存の ID と重複 ID は errors として報告される。

**従来の配列形式は deprecated になったが、引き続き動作する。** ローカル開発で型を使うには **Wrangler 4.148.0 以降**が必要である。

部分成功を前提にした戻り値（`created` と `errors` の分離、位置での識別）は、**100件を1回で投げる API としては妥当な設計**である。全件成功か全件失敗の2値で扱うと、重複 ID が1件混じっただけで残り99件を作り直すことになる。

## できるようになったこと

- `createBatch()` にオブジェクトを渡し、1回で最大100インスタンスを作成できる
- `count` で共通 params の一括作成、`instances` で個別 ID / params の指定ができる
- 部分成功を `created` / `errors` で受け取り、失敗を入力位置で特定できる

## 影響範囲

- 対象ユーザー: Cloudflare Workflows の利用者
- 対象プラン: Workflows が使えるプラン
- API / UI / 管理者機能: SDK / API。**配列形式は deprecated（動作は継続）**、ローカル型には Wrangler 4.148.0 以降が必要

## 教材化メモ

- **一括 API の戻り値設計の教材として、ちょうどよい具体例である。** 100件を1回で投げる API が全件成功 / 全件失敗の2値しか返さないと、1件の重複で残りを作り直すことになる。**`created` / `errors` に分け、失敗を入力位置で返す**設計は、自分でバッチ API を作るときの型になる。
- **deprecated の扱いを教える題材になる。** 配列形式は動くが deprecated である。**「動くから放置」と「動くうちに移行」のどちらを選ぶか**を、移行コストと将来の削除リスクで判断する練習に使える。
- **「ローカルの型だけツール側のバージョンが要る」という依存の形**（Wrangler 4.148.0 以降）は、実行時には影響しないが開発体験に影響する依存の例として扱える。

## 原文確認

- 公式見出し: Workflows, Workers - Create Workflow instance batches by count or list
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-08-create-batch-object-form/
- 原文全文は公式ページで確認してください。
