---
date: 2026-09-09
title: "Workers のモジュールレジストリを再構築、URL ベース解決と遅延コンパイルを `new_module_registry` フラグで提供"
service: "Cloudflare Workers"
product: "Workers"
source: https://blog.cloudflare.com/workers-module-registry-nodejs/
official_url: https://blog.cloudflare.com/workers-module-registry-nodejs/
fetched_at: 2026-09-10T09:18:00+09:00
published_at: 2026-09-09T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-09 Workers のモジュールレジストリ再構築

## 公式内容の日本語要約

Cloudflare は 2026-09-09、Workers ランタイム（workerd）の **モジュールレジストリを書き直した**と公式ブログで解説した。モジュール指定子（specifier）を**ファイルシステムパスではなく URL として扱う**方式へ変更し、Node.js のモジュール解決仕様との整合を取った。

背景として、Node.js API が既定で有効になり、Worker のサイズ上限が全プランで **64 MiB** へ拡大したことで、**より大きな既存 Node.js アプリを Workers へ載せられる**ようになった。その結果、旧レジストリのパスベース解決では合わない挙動が表面化していた。

具体的に直ったもの: `import.meta.url` / `import.meta.main` / `import.meta.resolve()` が正しく動作する。指定子がクエリ文字列やフラグメントを含む実 URL として解析される。`node:` 組み込みは、どの経路で import しても**同一インスタンス**に解決される。import attributes が仕様どおり検証される。ES モジュールへの `require()` が Node.js の `require(esm)` ルールに従う。読み込み経路によらずエラークラスとメッセージが統一される。WebAssembly の source phase import に対応する。

性能面では、**モジュールを最初の import 時に遅延コンパイル**するようになり（従来は事前に一括コンパイル）、さらに **V8 isolate のレプリカ間でコードキャッシュを共有**してメモリ重複を削減する。

**適用には明示的なオプトインが必要**で、`wrangler.toml` の互換性フラグに `new_module_registry` を指定する。**既定で有効化される日付（default on date）はまだ設定されていない**ため、放置しても自動的には切り替わらない。

## できるようになったこと

- `new_module_registry` 互換性フラグで新しいモジュールレジストリを有効化できる
- `import.meta.url` / `import.meta.main` / `import.meta.resolve()` が動作する
- `node:` 組み込みが import 経路によらず同一インスタンスに解決される
- ES モジュールへの `require()` が Node.js の `require(esm)` ルールに従う
- モジュールの遅延コンパイルと isolate レプリカ間のコードキャッシュ共有で起動・メモリ効率が改善する
- WebAssembly の source phase import に対応する

## 影響範囲

- 対象ユーザー: Workers 開発者、特に既存の Node.js 資産を移植している開発者
- 対象プラン: 全プラン（Worker サイズ上限 64 MiB は全プラン共通）
- API / UI / 管理者機能: ランタイム挙動と `wrangler.toml` の互換性フラグ。**既定オン日は未設定**

教材化メモ: src/content/ai-news-notes/cloudflare/workers-new-module-registry.mdx

## 原文確認

- 公式見出し: How we rebuilt Cloudflare Workers' module registry for Node.js compatibility
- 公式URL: https://blog.cloudflare.com/workers-module-registry-nodejs/
- 原文全文は公式ページで確認してください。
