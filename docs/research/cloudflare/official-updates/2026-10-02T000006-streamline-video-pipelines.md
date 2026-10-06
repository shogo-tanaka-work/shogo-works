---
date: 2026-10-02
title: "Streamline。Workers + Containers で独自の動画処理パイプラインを組むオープンソース構成"
service: "Stream"
product: "Stream, Workers, Containers, Durable Objects"
source: https://blog.cloudflare.com/streamline/
fetched_at: 2026-10-03T09:10:00+09:00
published_date: 2026-10-02
date_precision: date-only
category: release
---

# 2026-10-02 Streamline

## 公式内容の日本語要約

Cloudflare が **Streamline** を公開した。**カスタムの動画処理パイプラインを組むための開発者向け構成**で、ライブ配信や保存済み動画に対して、オーバーレイの追加、字幕の焼き込み、フィルタ適用をリアルタイムに行える。

構成は **FFmpeg を動かすコンテナ化されたメディアエンジン**と、**制御層としての Workers** の組み合わせである。Workers がセッションのオーケストレーション、動画操作の API 公開、**Cloudflare Access による認証**、コンテナのライフサイクル管理を担う。Workers 内の **Durable Object** がセッションを調停し、プレビュー映像を中継する。コンテナ側はリクエストとは独立して入出力と処理を回す。

**提供形態はオープンソース**で、メディアエンジンとデモアプリの2リポジトリが GitHub で公開されている。試用向けに `playground.streamline-video.workers.dev` のプレイグラウンドが動いている。**料金とベータ期日の記載はない。**

**AI 寄りの発表ではない**が、将来の「コンピュータービジョンのパイプライン」への言及があり、工場カメラ映像の処理のようにエージェントや組み込み機器からの入力を受け付けられるとしている。

## できるようになったこと

- Workers + Containers で独自の動画処理パイプラインを組める
- FFmpeg ベースの処理をサーバーレス構成に載せられる
- オープンソースのリファレンス実装から始められる

## 影響範囲

- 対象ユーザー: 動画配信基盤を自前で組む開発者
- 対象プラン: Workers / Containers / Durable Objects 利用者
- API / UI / 管理者機能: オープンソースの参照実装、プレイグラウンド

## 教材化メモ

- **「制御は Workers、重い処理は Containers」という責務分割**が、サーバーレスで重量ワークロードを扱うときの定石として示されている。AI 推論の自前ホスティングにも同じ形が使える。
- **Durable Object をセッション調停役に置く**のは、ステートフルな処理をエッジで持つときの典型パターン。エージェントの会話状態管理と構造が同じである。
- 本 repo の記事化スコープ（AI / エージェント / MCP / 開発者プラットフォーム）では、AI 要素が薄く**スコア4で見送り**とした。Stream 単体はソースカタログ上も対象外製品である。

## 原文確認

- 公式見出し: Streamline: custom video pipelines with Cloudflare Stream and Workers
- 公式URL: https://blog.cloudflare.com/streamline/
- 原文全文は公式ページで確認してください。
