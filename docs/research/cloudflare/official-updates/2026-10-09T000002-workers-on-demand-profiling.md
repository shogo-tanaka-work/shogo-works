---
date: 2026-10-09
title: "Workers / Durable Objects に本番オンデマンドの CPU・メモリプロファイリングとフレームグラフが追加"
service: "Workers"
product: "Workers, Durable Objects, Observability"
source: https://blog.cloudflare.com/workers-on-demand-profiling/
fetched_at: 2026-10-10T09:31:00+09:00
published_date: 2026-10-09
date_precision: date-only
category: release
---

# 2026-10-09 Workers / Durable Objects のオンデマンドプロファイリング

## 公式内容の日本語要約

Cloudflare が **本番稼働中の Worker と Durable Object を、その場でプロファイリングできる機能**を発表した。CPU とメモリの2種類を取得でき、インタラクティブなフレームグラフで表示し、プロファイルファイルをダウンロードできる。公式は「アプリケーションを理解する最良の方法は本番でプロファイルすることだ」と述べている。

経路は3つある。**CLI** は Wrangler ではなく `cf` パッケージを使い、`cf workers versions profile latest --duration-ms <ms> --profile-type cpu` の形で `.pprof` を保存する。**ダッシュボード**は Build → Compute → Workers & Pages → 対象 Worker → Observability タブ → ドロップダウンで Flamegraph を選び、CPU / メモリ・バージョン・期間を指定して Capture Profile を押す。**API** は script version のプロファイルエンドポイントへ `{"duration_ms":5000,"profile_type":"cpu"}` のような JSON を投げる。

**オーバーヘッドの数値は公式に記載が無い。** プロファイルの開始・停止の瞬間だけ isolate ロックを取るため、サンプリング中も Worker はリクエストを処理し続けると説明されている。CPU サンプリングの間隔は 1ms。

制約は多い。**プロファイル対象はデプロイ済みで稼働中のバージョンだけ**（プロファイル用に新しい isolate を立てないため）で、有用な結果を得るには十分なトラフィックが必要である。**セッションは毎回手動で開始する**ため、短時間だけ現れる問題は取り逃がしうる。メモリプロファイラは**プロファイリング窓の中で行われたアロケーションだけ**を捕まえ、起動時のアロケーションは含まない。TypeScript の Worker は source maps を有効にしないと関数名が読めない。Durable Objects は名前で特定のオブジェクトを選び、リクエストはそれを所有するロケーションへルーティングされる。

**提供プラン・価格・正式な提供開始日は記載が無い。** 継続プロファイリング（continuous profiling）は開発中とされている。

## できるようになったこと

- 本番の Worker / Durable Object の CPU・メモリをオンデマンドで取得し、フレームグラフで読める
- `.pprof` としてダウンロードし、`pprof` など手元のツールで解析できる
- 関数をサンプル数順に並べたテーブルビューを使える

## 影響範囲

- 対象ユーザー: Workers / Durable Objects の運用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: CLI（`cf`）・ダッシュボード（Observability タブ）・API の3経路
- 制約: 稼働中バージョンのみ / 手動開始 / 起動時アロケーションは対象外 / TS は source maps 必須

教材化メモ: src/content/ai-news-notes/cloudflare/workers-on-demand-profiling.mdx

## 原文確認

- 公式見出し: Introducing on-demand CPU and memory profiling with flamegraphs for Workers and Durable Objects（Cloudflare Blog, 2026-10-09）
- 公式URL: https://blog.cloudflare.com/workers-on-demand-profiling/
- 原文全文は公式ページで確認してください。
