---
date: 2026-09-21
title: "Python Workers が一般提供（GA）。Cloudflare Workers で Python が第一級言語になった"
service: "Cloudflare Workers"
product: "Workers, Python Workers"
source: https://blog.cloudflare.com/python-workers-ga/
fetched_at: 2026-09-22T09:02:00+09:00
published_at: 2026-09-21T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-21 Python Workers が一般提供（GA）

## 公式内容の日本語要約

Cloudflare は 2026-09-21、**Python Workers の一般提供（GA）**を発表した。2年前のベータ提供開始からの多年にわたる作業の完了で、公式は「Python は Cloudflare Developer Platform 上の**第一級（first-class）でフルサポートの言語**になった」と表現している。

GA の中身は主に4点である。**(1) バインディングのネイティブ対応**: これまで Python から Queues や KV などへ値を渡すには `pyodide.ffi.to_js()` で JavaScript オブジェクトへ明示変換する必要があったが、型変換が Workers ランタイムと Python SDK の内部へ取り込まれ、`self.env.QUEUE.send({"key": "value"})` がそのまま動くようになった。公式は旧来のグルーコードを「**人間と AI エージェントの双方にとって誤りの発生源だった**」と書いている。

**(2) Web フレームワーク対応**: `workers.asgi` / `workers.wsgi` コネクタ経由で FastAPI・Django・Flask を Python Workers 内で動かせる。Uvicorn や Gunicorn のような Web サーバーは不要で、Workers プラットフォーム自体がその役割を担う。WSGI/ASGI 準拠のフレームワークであれば同様に動作する。

**(3) Hyperdrive 経由の PostgreSQL / MySQL 接続**: これまで Python Workers は TCP ソケット非対応でデータベースドライバが使えなかった。Workers の connect API 上にソケットシステムコールを実装したことで、`aiomysql` や `asyncpg` といった既存ドライバが Hyperdrive バインディング経由で使えるようになった。

**(4) AI ライブラリのネイティブ動作**: HTTP クライアント（`requests` / `httpx`）を WebAssembly 環境で JavaScript の `fetch` へ通すアップストリーム貢献により、`openai`・`langchain`・`mcp` が Python Workers 内でそのまま動く。Workers AI でのサーバーレス GPU 推論や AI Gateway 経由のプロキシと組み合わせられる。

パッケージ生態系については、Cloudflare が **PEP 783（PyEmscripten プラットフォームの標準化）を提案して受理**させ、Pyodide のビルドツールチェーンを安定化、`cibuildwheel` へ PyEmscripten 対応を追加した。ネイティブ拡張を持つパッケージのクロスコンパイルが、Cloudflare の手作業ではなくメンテナ側で行える形になった。

## できるようになったこと

- Python Workers から全 Cloudflare バインディングを、JavaScript を1行も書かずに Python 的な書き方で利用できる
- FastAPI / Django / Flask のアプリを、コードをほぼそのまま Workers へ載せられる（`asgi.entrypoint(app)` の1行追加）
- Hyperdrive バインディング経由で PostgreSQL / MySQL へ既存ドライバから接続できる
- `openai` / `langchain` / `mcp` を Python Workers 内で動かし、Workers AI・AI Gateway と接続できる
- Dynamic Workers を使って、Worker の中に Python Worker を作れる

## 影響範囲

- 対象ユーザー: Cloudflare Workers の開発者全般。特に Python を主言語とするバックエンド・データ・AI 系の開発者
- 対象プラン: 公式は GA と記載。Workers の通常提供範囲
- API / UI / 管理者機能: ランタイムと Python SDK、Wrangler 設定。UI 変更ではなく開発体験の変更

教材化メモ: src/content/ai-news-notes/cloudflare/python-workers-ga.mdx

## 原文確認

- 公式見出し: Python Workers are now generally available
- 公式URL: https://blog.cloudflare.com/python-workers-ga/
- 関連（窓外・既記録）: Hyperdrive support for Python Workers（changelog 2026-09-16、`2026-09-16T000000-hyperdrive-python-workers.md`）
- 原文全文は公式ページで確認してください。
