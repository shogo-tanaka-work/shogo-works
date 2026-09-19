---
date: 2026-09-17
title: "Workers のトレースが JavaScript RPC のセッションスパンを自動記録。Durable Objects までまたいで追える"
service: "Cloudflare"
product: "Workers, Durable Objects"
source: https://developers.cloudflare.com/changelog/post/2026-09-17-javascript-rpc-session-spans/
fetched_at: 2026-09-18T09:02:00+09:00
published_date: 2026-09-17
date_precision: date-only
category: enhancement
---

# 2026-09-17 Workers トレースの RPC セッションスパン

## 公式内容の日本語要約

Cloudflare は 2026-09-17、Workers のトレースが **JavaScript RPC の呼び出しを Worker 境界を越えて Durable Objects まで追跡**できるようにした。**従来はトレースが呼び出し側の RPC 境界で途切れていた。** ダッシュボード上では、呼び出し側のセッションとメソッド呼び出しが、呼び出され側の invocation、ネストした呼び出し、別 Worker へのコールバックと並べて表示される。

**セッションスパン**は呼び出し側セッションの生存期間をカバーし、そのセッションを再利用した呼び出しをまとめる。**個別のコールスパン**は各メソッド呼び出しを示す。実行色が関与する Workers / Durable Object エントリポイントを区別し、矢印が送受信の方向を示す。これにより、どこで時間を使ったか、どの呼び出しがセッションを再利用したか、返されたスタブやコールバックがリクエストの中でどう位置づくかがわかる。

有効化は Wrangler 設定の `observability.traces.enabled` を `true` にするだけで、**アプリケーションコードの変更も observability SDK の追加も不要**。スパンは自動で記録される。

## できるようになったこと

- Worker → Worker / Worker → Durable Object の RPC 呼び出しを1本のトレースで追える
- セッション再利用の有無がスパン構造から読み取れる

## 影響範囲

- 対象ユーザー: JavaScript RPC を使っている Workers / Durable Objects 開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Wrangler 設定1行。ダッシュボード表示が変わる

## 教材化メモ

- **「観測できない境界がボトルネックの隠れ場所になる」という教材例として素直**。RPC 境界でトレースが切れていたということは、そこで発生した遅延は今まで誰にも見えていなかった、ということ。**可視化が入るまで問題は存在しないことにされる**、という運用の一般則。
- **設定1行・コード変更なしで入る観測**という点は、observability 導入の障壁の話に使える。**SDK を入れる・コードに計装を書く、という手順が要らない**形で提供されると採用率が上がる。自作ツールの設計指針にもなる。
- セッション再利用が見える、という細部は「同じ接続を使い回しているつもりが毎回新規だった」という典型的な性能問題の発見手段として説明できる。
- 恒久教材へ入れるなら、設定キー名は書かず「分散トレースは境界をまたげて初めて意味を持つ」だけ残す。

## 原文確認

- 公式見出し: Workers traces now automatically include JavaScript RPC session spans
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-17-javascript-rpc-session-spans/
- 原文全文は公式ページで確認してください。
