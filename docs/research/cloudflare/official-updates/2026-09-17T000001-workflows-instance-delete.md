---
date: 2026-09-17
title: "Cloudflare Workflows のインスタンスを個別・一括削除できるように（最大100件）"
service: "Cloudflare"
product: "Workflows, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-09-17-instance-delete/
fetched_at: 2026-09-18T09:02:00+09:00
published_date: 2026-09-17
date_precision: date-only
category: enhancement
---

# 2026-09-17 Workflows インスタンスの削除

## 公式内容の日本語要約

Cloudflare は 2026-09-17、Workflows のインスタンスと保存された状態を、**Workflows API または Wrangler 4.125.0 以降から削除できる**ようにした。**1回あたり1〜100件**。削除するとインスタンスの保存状態が解放され、実行中であれば実行が停止する。**ストレージ課金は日次ピークの平均に基づく**と明記されている。

単体削除はハンドルの `delete()`、複数はバインディングの `deleteBatch()` を使う。**Workflow が自分自身のインスタンスを削除した場合、`await instance.delete()` の時点で実行が止まり、後続コードは動かない。** バッチ結果は成功した `{ id }` と、インスタンス単位のエラーを返す。存在しない ID はエラーとして返る。重複 ID は上限にカウントされ、削除は1回だけ行われて結果が入力位置ごとに繰り返される。

Wrangler は位置引数の ID、トップレベルが文字列配列の JSON ファイル、またはその併用を受け付ける（合計100件まで）。`latest` で直近作成分を削除でき、`--local` でローカルの `wrangler dev` セッションに対して実行できる。

## できるようになったこと

- 不要になった Workflow インスタンスの状態を明示的に解放できる
- Wrangler から ID リストのファイル指定で一括削除できる

## 影響範囲

- 対象ユーザー: Cloudflare Workflows の利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: API / Wrangler。Wrangler は 4.125.0 以降が必要

## 教材化メモ

- **「状態を持つ実行基盤には、削除 API が後から必要になる」という一般則の実例として使える。** Workflows は長時間実行と状態保存が売りだが、状態は課金対象として残り続ける。**機能追加の順序（実行 → 観測 → 削除）は、ステートフルなサービスで繰り返し現れる。**
- **自己削除時の挙動（`await instance.delete()` 以降が実行されない）は、非同期処理の教材で使える罠**。「削除を呼んだ後に後始末を書く」という自然な書き方が動かない。リソースを自分で消す処理を書くときの一般的な注意点として扱える。
- ストレージ課金が**日次ピークの平均**である点は、コスト設計の教材向き。ピークを削るには「使い終わったらすぐ消す」運用が要る、という結論に直結する。
- 恒久教材へ入れるなら、Wrangler のバージョン番号とコマンド形式は書かない（変わる）。残すのは「状態は明示的に消さないと課金が続く」という設計上の認識だけでよい。

## 原文確認

- 公式見出し: Delete Workflow instances individually or in batches
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-17-instance-delete/
- 原文全文は公式ページで確認してください。
