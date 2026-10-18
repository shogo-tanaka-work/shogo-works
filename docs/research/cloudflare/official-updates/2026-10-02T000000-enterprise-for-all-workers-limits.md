---
date: 2026-10-02
title: "Enterprise for all 続報。Workers のサイズ上限 10MB→64MiB、サブリクエスト 1,000→100万など上限を一斉緩和"
service: "Workers"
product: "Workers, R2, Logpush, Cloudflare One"
source: https://blog.cloudflare.com/enterprise-for-all-update/
fetched_at: 2026-10-03T09:10:00+09:00
published_date: 2026-10-02
date_precision: date-only
category: enhancement
---

# 2026-10-02 Enterprise for all の続報

## 公式内容の日本語要約

Cloudflare が「Enterprise 限定だった機能を全プランへ開放する」という方針（Enterprise for all）の進捗を公開した。**新しい Enterprise 限定機能は今後作らない**と明言し、プラン差を「**何が使えるか**」ではなく「**どれだけ使えるか**」に寄せるとしている。

**開発者プラットフォーム側の上限緩和が大きい。**

| 項目 | 変更前 | 変更後 |
| --- | --- | --- |
| Worker のサイズ上限（非圧縮） | 10 MB | **64 MiB** |
| リクエストあたりのサブリクエスト数 | 1,000 | **100万** |
| 起動時間（startup time） | 400 ms | **1 秒** |
| WebSocket メッセージサイズ | 1 MiB | **32 MiB** |

**Dynamic Workers が有料アカウントへ開放**された。

**権限まわりも変わった。RBAC がリソース単位**（Workers、R2 など個別）で設定できるようになった。従来はアカウント単位の粗い粒度だった。あわせて **Authentik の IdP 対応、SCIM の監査ログ、SCIM 2.0 の Group Sync**、**MCP Server Portals**、Network Overview が全プラン側へ移る。

**Logpush と Transformers が Free / Pro / Business でも従量課金で使える**ようになった（従来 Enterprise 限定）。**Custom Dashboards も全プラン**へ。

アカウント運用の変更として、**「New Account」ボタンで無料アカウントを追加作成**してプロジェクトを分離できるようになった。複数アカウントを束ねる **Organizations は 2027年初頭**に無料アカウントへ展開予定である。

## できるようになったこと

- 依存の重い Worker（64 MiB まで）をそのままデプロイできる
- 1リクエストから100万サブリクエストまで扱える（大量のファンアウト処理）
- 起動時間 1 秒までの初期化を許容（重いライブラリの読み込み）
- Workers / R2 をリソース単位で権限分離できる
- Free / Pro / Business でも Logpush でログを外部へ送れる

## 影響範囲

- 対象ユーザー: Cloudflare Workers / R2 の利用者全般、情シス・権限設計の担当者
- 対象プラン: Free / Pro / Business を含む全プラン。Dynamic Workers は有料から
- API / UI / 管理者機能: Workers の制限値、RBAC、SCIM、Logpush、アカウント管理

教材化メモ: src/content/ai-news-notes/cloudflare/enterprise-for-all-workers-limits.mdx

## 原文確認

- 公式見出し: Updates on our pledge to make Cloudflare features accessible to everyone
- 公式URL: https://blog.cloudflare.com/enterprise-for-all-update/
- 原文全文は公式ページで確認してください。
