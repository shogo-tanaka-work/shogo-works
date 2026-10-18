---
date: 2026-10-02
title: "Workers KV の namespace jurisdictions が GA。eu / us / fedramp で保存先を固定"
service: "Workers KV"
product: "KV"
source: https://developers.cloudflare.com/changelog/post/2026-10-02-kv-jurisdictions-ga/
fetched_at: 2026-10-03T09:10:00+09:00
published_date: 2026-10-02
date_precision: date-only
category: release
---

# 2026-10-02 Workers KV namespace jurisdictions が GA

## 公式内容の日本語要約

**Workers KV の namespace jurisdictions が一般提供（GA）**になった。KV の namespace に対して、**データを永続的に保存する地理的範囲を限定**できる。

指定できるのは **`eu` / `us` / `fedramp`** の3つである。`fedramp` は FedRAMP 準拠データセンター向けである。

設定はダッシュボード、Wrangler、新しい `cf` CLI、REST API のいずれからも行える。Wrangler の例:

```
npx wrangler@latest kv namespace create <NAMESPACE_NAME> --jurisdiction=eu
```

**制約が1つある。jurisdiction は namespace の作成時にしか設定できず、後から追加・変更できない。** 既存 namespace を地域限定へ移す場合は、作り直してデータを移送する必要がある。

**誤解しやすい点として、読み取りは世界中の Worker から可能**である。jurisdiction が縛るのは**永続的な保存場所だけ**で、**KV のデータは jurisdiction の外にある Cloudflare ネットワーク上でキャッシュされうる**と明記されている。「EU 内にしかデータが存在しない」という意味ではない。

## できるようになったこと

- KV の保存先を EU / US / FedRAMP データセンターへ限定できる
- Wrangler / `cf` CLI / REST API / ダッシュボードのどれからでも指定できる

## 影響範囲

- 対象ユーザー: データレジデンシー要件のある組織、GDPR / 公共調達案件の担当
- 対象プラン: Workers KV 利用者
- API / UI / 管理者機能: namespace 作成時の `--jurisdiction` 指定（後から変更不可）

教材化メモ: src/content/ai-news-notes/cloudflare/workers-kv-jurisdictions-ga.mdx

## 原文確認

- 公式見出し: Workers KV namespace jurisdictions are now generally available
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-02-kv-jurisdictions-ga/
- 原文全文は公式ページで確認してください。
