---
date: 2026-10-15
title: "Cloudflare Gateway と DLP が Workers でプログラム可能に — Forward アクションが public beta、DLP のカスタム検証は提供開始"
service: "Cloudflare One / Gateway"
product: "Cloudflare One, Gateway, Workers"
source: https://blog.cloudflare.com/programmable-gateway-dlp/
fetched_at: 2026-10-16T09:20:00+09:00
published_date: 2026-10-15
date_precision: date-only
category: enhancement
---

# 2026-10-15 Gateway と DLP が Workers でプログラム可能に

## 公式内容の日本語要約

**Cloudflare Gateway と DLP（Data Loss Prevention）が、Workers を通じてプログラム可能になった。** 追加されたのは **Forward という Gateway ポリシーアクション**、**Custom Function というセレクタ型**、そして **DLP のカスタム検証関数**の3つである。

**Forward アクション**: HTTP ポリシーを通過したリクエストを**バインドされた Worker へルーティングし、インラインのミドルウェアとして動かす。** Worker はヘッダーとボディを読み書きし、オリジンへ転送し、レスポンスを書き換えられる。**TCP / TLS / 証明書 / HTTP バージョン交渉は Gateway 側が処理する。** トラフィックを変更せず、非同期のログ出力やアラートだけを行う使い方もできる。

**Custom Functions**: Worker が**ポリシー評価中に走り**、文字列・数値・真偽値を返す。その値が HTTP / Network ルールの条件で使える**セレクタ**になる。Worker は**送信元 IP、アイデンティティ、デバイスポスチャ、ヘッダー**などのコンテキストを受け取る。**フォールバックの既定値が必須**である。

**DLP のカスタム検証**: DLP のエントリがマッチしたとき、**Worker が外部の source of truth に照会**してから、プロファイルを適用するかをポリシーが判断する。公式の例は「**検出された GitHub トークンがまだ有効かを確認する**」ものである。

**性能面の説明**: Gateway と Workers は**同じマシン上で動くため、ディスパッチはローカル呼び出しでネットワークホップが増えない。**

**公式が挙げるユースケース**: KV にセッションを保持し D1 や Hyperdrive 経由の内部 DB に監査記録を残す正当化インタースティシャル、JWT クレームに基づく動的ヘッダー注入（NGINX プロキシ群の置き換え）、疑わしいファイルの第三者サンドボックス送付や R2 保存、DLP マッチ時の Slack / PagerDuty へのリアルタイム通知、複雑なリスクスコアリングやグループ所属判定、検出されたシークレットの発行元への照会。

**提供状況が機能ごとに違う。**

- **Forward アクションと Workers 連携**: **public beta**（本告知から開始）
- **Custom Functions**: **年内（before the end of the year）予定**
- **DLP カスタム検証関数**: **本日提供開始**
- **一般提供**: 両機能とも全プランの全顧客向けが予定。導入部では全 Zero Trust プランとされている

**課金**: ディスパッチされたトラフィックは**通常の Worker リクエストとして課金**される。Workers Free には実行時間と1日のリクエスト上限がある。

**AI / LLM / MCP トラフィックは、名指しのユースケースとしては挙がっていない。** Worker から Workers AI を呼べること、DLP が既に AI Gateway と統合されていること、Cloudflare One が「Workers、エージェント、およびそのトラフィック」を保護できること（リンク先の changelog）への**間接的な言及はある**が、**AI トラフィックを対象とした用途としては書かれていない。**

## できるようになったこと

- Gateway を通る HTTP リクエストを Worker にインラインのミドルウェアとして処理させられる（public beta）
- DLP のマッチを外部の source of truth に照会して検証できる（提供開始）
- ポリシー評価中に Worker を走らせて独自セレクタを作れる（年内予定）

## 影響範囲

- 対象ユーザー: Cloudflare One / Zero Trust を運用する情報システム・セキュリティ部門
- 対象プラン: 全 Zero Trust プラン向けに段階提供。ディスパッチは通常の Worker リクエストとして課金
- API / UI / 管理者機能: Gateway ポリシー（Forward アクション、Custom Function セレクタ）、DLP プロファイル設定、Workers バインディング

## 教材化メモ

- **単独記事にしない（判定D、スコア5点）。** 重要度1 / **持続性1** / 実務影響1 / 既存教材影響0 / 公式情報の十分性2 で合計5点、閾値6点に届かない。**Forward は public beta、Custom Functions は「年内予定」**で、仕様が動く段階にある。**提供状況が3段階に分かれている機能を今記事化すると、どれが使えるのかが読者に伝わらないまま古くなる。**
- **記事化を見送る一方で、スコープの判断は記録しておく。** Cloudflare One / Gateway はネットワーク・セキュリティ製品だが、**Workers（対象製品）がポリシー経路に入る変更**なので巡回対象には含めた。規約の「MCP や AI が絡む更新は製品を問わず対象」ではなく、**「開発者プラットフォームに関わるか」の軸で対象**にしている。
- **Custom Functions が GA になったら単独記事の候補に上げ直す。** その時点で「ポリシーをコードで書く」という話が完成し、**ノーコードのルール画面とコードの境界**という教材の軸が立つ。
- **「同じマシンで動くからホップが増えない」という説明は、エッジの設計思想の教材に使える。** 製品の宣伝文ではなく、**なぜその配置が選べるのか**という読み方の練習になる。

## 原文確認

- 公式見出し: A fully programmable secure web gateway
- 公式URL: https://blog.cloudflare.com/programmable-gateway-dlp/
- changelog: https://developers.cloudflare.com/changelog/post/2026-10-15-gateway-workers-public-beta/ 、https://developers.cloudflare.com/changelog/post/2026-10-15-dlp-custom-validation-workers/
- 原文全文は公式ページで確認してください。
