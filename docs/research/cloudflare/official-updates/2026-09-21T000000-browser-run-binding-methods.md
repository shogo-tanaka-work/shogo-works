---
date: 2026-09-21
title: "Browser Run のバインディングにセッション管理と DevTools のメソッドが追加（追補）"
service: "Cloudflare"
product: "Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-09-21-browser-binding-methods/
fetched_at: 2026-09-23T09:10:00+09:00
published_at: 2026-09-21
date_precision: date-only
category: enhancement
---

# 2026-09-21 Browser Run バインディングのメソッド追加（追補）

## 公式内容の日本語要約

**本件は 2026-09-22 の日次チェックと本日の窓のあいだに落ちた追補である。** changelog の `pubDate` が `2026-09-21 00:00:00 GMT` の date-only エントリで、前日の窓（2026-09-21T00:02Z 開始）の2分前に位置していたため取りこぼした。内容の鮮度は落ちていないため、本日分に追補として記録する。

Cloudflare は 2026-09-21、**Browser Run のブラウザバインディングに、セッション管理と DevTools 操作の型付きメソッドを追加**した。これまで HTTP リクエストを自前で組み立てる必要があった操作を、メソッド呼び出しで行える。セッションの取得、ブラウザクライアントの接続、Live View URL の作成、ターゲット管理、セッションのクローズが対象である。

**`acquire()` と `launch()` が `outboundByHost` を受け取るようになった点が実務上は大きい。** 指定したホスト名向けのリクエストを別の Worker 経由へ回せるため、**認証を付与する Worker やプライベートサービスへ到達する Worker を経路に挟める。**

```js
const connection = await env.BROWSER.launch({
	outboundByHost: {
		"private.example.test": env.OUTBOUND,
	},
});
```

取得と接続を分けたい場合は `connectSession(sessionId)` を使う。CDP クライアント向けに、セッションへピン留めされた `webSocket` Fetcher を返す。バインディングには Live View、アクティブセッション、セッション履歴、上限、セッション詳細、クリーンアップのメソッドも含まれる。入れ子の `devtools` バインディングは、ブラウザのバージョン情報、プロトコル記述、ターゲットの列挙・作成・アクティブ化・クローズの型付きメソッドを提供する。

## できるようになったこと

- セッション管理と DevTools 操作を型付きメソッドで呼べる（HTTP リクエストの自作が不要）
- `outboundByHost` でホスト単位に別 Worker へ経路を回せる
- `connectSession(sessionId)` で取得と接続を分離できる

## 影響範囲

- 対象ユーザー: Browser Run を使うエージェント／スクレイピング開発者
- 対象プラン: 記載なし
- API / UI / 管理者機能: 既存コードは動き続ける。型付きメソッドへの置き換えは任意

## 教材化メモ

- **見送り（スコア不足・5点）。** API の書き味の改善で、できること自体は大きく変わらない。
- ただし **`outboundByHost` は「エージェントに閉域リソースを触らせる」設計の具体例**として価値がある。同日（09-22）の MCP server portal のプライベート対応と合わせると、**Cloudflare がエージェントとプライベートネットワークの接続点を複数製品で整えている**と読める。
- **取りこぼしの原因そのものが運用の教材になる。** date-only の changelog エントリは `00:00:00 GMT` 固定のため、窓の境界が日付の境界とずれると落ちる。窓を「前日の window_end から」で連結していても、date-only ソースには隙間が生まれる。

## 原文確認

- 公式見出し: Browser Run adds session and DevTools methods to browser bindings
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-21-browser-binding-methods/
- 原文全文は公式ページで確認してください。
