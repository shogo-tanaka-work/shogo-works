---
date: 2026-09-23
title: "Durable Objects の名前検索が128文字まで対応（従来20文字）"
service: "Cloudflare Durable Objects"
product: "Durable Objects"
source: https://developers.cloudflare.com/changelog/post/2026-09-24-durable-object-name-search-limit/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-24-durable-object-name-search-limit/
fetched_at: 2026-09-25T09:10:00+09:00
published_at: 2026-09-23
date_precision: date-only
category: enhancement
---

# 2026-09-23 Durable Objects の名前検索が128文字まで対応

## 公式内容の日本語要約

Cloudflare ダッシュボードで Durable Objects を名前検索するときの文字数上限が、**20文字から128文字へ拡大**された。

適用箇所は3つ。**Metrics タブのオブジェクト絞り込み**、**Data Studio のオブジェクト検索**、そして**検索結果と直近の呼び出し一覧の表示**である。表示は128文字まで出したうえで、それを超える部分は省略記号で切られる。

DO の名前にユーザー ID、テナント ID、複合キーなどを埋め込む設計では、20文字では先頭しか入らず絞り込みが成立しないことがあった。128文字あれば、実運用で使われる複合キーの大半はそのまま検索できる。

**本エントリは前日（2026-09-24）の日次巡回で記録できていなかったものを、本日追補として記録する。** RSS の `pubDate` が 2026-09-23、changelog の URL スラッグが `2026-09-24` と食い違っており、日付だけを見る巡回では境界に落ちやすい形になっていた。

## できるようになったこと

- Durable Objects の名前検索が**128文字**まで対応（従来20文字）
- 適用先: Metrics タブのオブジェクト絞り込み、Data Studio のオブジェクト検索、検索結果・直近の呼び出し一覧の表示
- 128文字を超える名前は省略記号で切って表示

## 影響範囲

- 対象ユーザー: Durable Objects をダッシュボードから運用・調査する開発者
- 対象プラン: Durable Objects を利用できるプラン（changelog 上に限定の記載なし）
- API / UI / 管理者機能: ダッシュボード UI（Metrics タブ / Data Studio）のみ。API・課金への影響なし

## 教材化メモ

- **観測性は「名前の設計」に依存する**という実例。DO 名に複合キーを入れる設計は検索上限に当たるまで問題が見えない。命名規約を決めるときに、監視画面側の制約も一緒に確認する、という順序を教えられる。
- 上限20 → 128 という**桁の変更ではない拡張**が、実運用ではしばしば決定的になる。「足りないか足りるか」は平均ではなく実際のキー長の分布で決まる。
- 単独記事にはしない（スコア3点）。UI の絞り込み上限の変更であり、手順や判断が変わるものではないため。

## 原文確認

- 公式見出し: Durable Objects - Durable Object name search now supports 128 characters
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-24-durable-object-name-search-limit/
- 原文全文は公式ページで確認してください。
