---
date: 2026-09-25
title: "Workers Metrics のグラフにリリースと段階デプロイが表示されるようになった"
service: "Workers"
product: "Workers"
source: https://developers.cloudflare.com/changelog/post/2026-09-25-release-flows-workers-metrics/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-25-release-flows-workers-metrics/
fetched_at: 2026-09-26T09:10:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: enhancement
---

# 2026-09-25 Workers Metrics にリリース注釈が追加

## 公式内容の日本語要約

Cloudflare は 2026-09-25、**Workers Metrics のグラフに、選択期間内のすべてのリリースと段階デプロイの進行を表示**するようにした。

トラフィック配分の変更ごとに**帯（シェーディング）が表示され、新バージョンへのトラフィック比率が上がるほど濃くなる**。100% 配分の直接デプロイは単独のマーカーとして残り、近接するデプロイはグラフが混み合わないようグループ化される。

公式が挙げている用途は3つ。**リグレッションの起点特定**（"Find when a regression started — See which traffic percentage was configured when errors, latency, CPU time, or wall time changed"）、**ロールアウト段階ごとのメトリクス比較**、**ロールバック後の回復確認**（ロールバックは別のリリースイベントとして表示される）。

参照はダッシュボードの Worker の Metrics タブから。

## できるようになったこと

- 選択期間内のリリースと段階デプロイの進行がメトリクスグラフ上で見える
- トラフィック配分の変更が濃度の変わる帯として表示される
- エラー・レイテンシ・CPU 時間・wall time の変化が、どの配分比率のときに起きたか特定できる
- ロールバックを別イベントとして扱い、回復を確認できる

## 影響範囲

- 対象ユーザー: Workers を段階デプロイで運用している開発者
- 対象プラン: 告知に制限の記載なし
- API / UI / 管理者機能: ダッシュボードの Metrics タブ（表示のみ）

## 教材化メモ

- **段階デプロイとメトリクスを同じ画面で見る**という当たり前の要求が、最近まで満たされていなかったという事実。可観測性の話をするとき「メトリクスが取れる」と「原因に辿り着ける」は別だという例として短く使える。
- ただし**これは表示の改善で、手順や判断の基準は変わらない**。記事化はしていない。教材で扱うなら、段階デプロイの説明の補足として1行触れる程度が妥当。

## 原文確認

- 公式見出し: Workers - See every release and gradual deployment on Workers Metrics charts
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-25-release-flows-workers-metrics/
- 原文全文は公式ページで確認してください。
