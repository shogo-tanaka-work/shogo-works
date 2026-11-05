---
date: 2026-11-02
title: "Workers: 11月17日から新モジュールレジストリが既定に"
service: "Cloudflare / Workers"
source: https://developers.cloudflare.com/changelog/post/2026-11-02-module-registry-default/
fetched_at: 2026-11-03T09:10:00+09:00
published_at: 2026-11-02
date_precision: date-only
category: policy
---

# 2026-11-02 Workers: 11月17日から新モジュールレジストリが既定に

## 公式内容の日本語要約

互換性日付 2026-11-17 以降の JavaScript Workers は、新しいモジュールレジストリを既定で使う。`new_module_registry` フラグは不要になる。Python Workers は従来のレジストリのまま。新レジストリでは Node.js 互換環境で ES モジュールを `require()` でき（トップレベル await を含まない場合）、`import.meta` も使える。無効な import attributes は拒否される。従来に戻すには `legacy_module_registry` を指定する。既存 Workers は互換性日付かフラグを変えるまで現状維持。

## 影響範囲

- 対象: 互換性日付を 2026-11-17 以降へ更新する JavaScript Workers

教材化メモ: src/content/ai-news-notes/cloudflare/workers-new-module-registry-default.mdx

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-11-02-module-registry-default/
- 取得経路: Exa（web_fetch_exa）。原文全文は公式ページで確認してください。
