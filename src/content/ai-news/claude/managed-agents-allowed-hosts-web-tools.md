---
title: "Managed Agents の allowed_hosts が web_search / web_fetch にも効くようになった。既存設定はセッション作成が 400 で落ちる"
tool: "claude"
toolLabel: "Claude"
date: 2026-10-07
sourceUrl: "https://platform.claude.com/docs/en/managed-agents/environments#networking"
summary: "Claude Managed Agents で limited networking を使うクラウド環境の allowed_hosts が、サンドボックスの通信だけでなく web_search と web_fetch にも適用されるようになった。一致しないホストへの web_fetch は url_not_allowed エラーを返し、web_search は該当ホストの結果を除外する。allowed_hosts が空なら両ツールは何も返さない。さらに、有効化した web ツールの allowed_domains に allowed_hosts に含まれないエントリがあると、セッション作成が 400 エラーで失敗する。allowed_hosts のエントリは *. で始まらない限り単一の完全一致ホストであり、docs.example.com は example.com には含まれない。unrestricted networking と self-hosted 環境ではこれらのツールは制限されない。"
description: "allowed_domains に書いたホストが allowed_hosts に無いと、エージェントが動かないのではなくセッションが作れない。既存設定の棚卸しが先に必要。"
impact: "Managed Agents で limited networking を使っている組織は、allowed_domains と allowed_hosts の整合が取れていないとセッション作成の時点で 400 エラーになる。サブドメインはワイルドカードなしでは一致しないため、docs.example.com を許可したつもりで example.com しか書いていない設定は落ちる。一方で、web 検索・取得の到達範囲をホスト単位で強制できるようになり、許可リストが allowed_hosts 1か所に統一された。"
tags: ["claude", "managed-agents", "セキュリティ", "破壊的変更", "api", "ガバナンス"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic が2026年10月7日、**Claude Managed Agents の `limited` networking の挙動を変更しました。** クラウド環境の `allowed_hosts` が、これまでサンドボックスの通信だけを縛っていたところから、**サーバー側 web ツール（`web_search` と `web_fetch`）の到達範囲も縛るようになりました。**

**挙動の詳細は次のとおりです。**

- `allowed_hosts` に一致しないホストの URL を `web_fetch` が取得しようとすると、**エージェントへ `url_not_allowed` のエラー結果が返る**
- `web_search` は、一致しないホストの**検索結果を除外する**
- **`allowed_hosts` にホストが1つも入っていない場合、どちらのツールもページも検索結果も返さない**
- `allow_package_managers` と `allow_mcp_servers` は、これらのツールに対してホストを追加しない
- ツールにホストを到達させるには `allowed_hosts` へ追加する。**その追加はサンドボックスに対しても同じホストを開く**
- `unrestricted` networking と self-hosted 環境では、これらのツールは制限されない

**実務上もっとも重いのは、セッション作成が失敗する点です。** `limited` networking で、有効化した web ツールの `allowed_domains` に `allowed_hosts` に含まれないエントリがあると、**セッション作成が 400 エラーで失敗します。** そのエントリを追加するセッション更新も同様に失敗します。エージェントが動いてから「取得できませんでした」と返るのではなく、**そもそもセッションが立ち上がりません。**

**そして一致の判定が厳密です。** `allowed_hosts` のエントリは `*.` で始まらない限り**単一の完全一致ホスト**として扱われます。公式が挙げている例がそのまま要点で、**`docs.example.com` は `["example.com"]` には含まれません。** サブドメインを許可するには `*.example.com` と書く必要があります。

解消方法は2択です。`allowed_hosts` にホストを追加するか、`allowed_domains` からそのエントリを外すか。

## 何が変わったか

- `limited` networking のクラウド環境で、**`allowed_hosts` が `web_search` と `web_fetch` にも適用される**
- 一致しないホストへの `web_fetch` は **`url_not_allowed` エラー結果**をエージェントへ返す
- `web_search` は一致しないホストの**結果を除外**する
- **`allowed_hosts` が空の場合、両ツールは何も返さない**
- `allow_package_managers` / `allow_mcp_servers` は**これらのツールにホストを追加しない**
- `allowed_hosts` への追加は、**サンドボックス側にも同じホストを開く**
- **破壊的変更**: 有効化した web ツールの `allowed_domains` に `allowed_hosts` 外のエントリがあると、**セッション作成が 400 エラー**。該当エントリを追加するセッション更新も 400
- **`allowed_hosts` のエントリは `*.` 始まりでない限り単一の完全一致ホスト。** `docs.example.com` は `["example.com"]` に含まれない
- `unrestricted` networking と self-hosted 環境は**この制限の対象外**

## 業務インパクト（一般企業向け）

**先に棚卸しをしてください。** これは「新機能が増えた」ではなく「既存設定が動かなくなり得る」変更です。`limited` networking を使っている環境について、**`allowed_domains` に書いてあるホストが `allowed_hosts` にも揃っているか**を確認する必要があります。揃っていなければセッション作成の時点で 400 です。CI やバッチでエージェントセッションを立てている構成だと、**朝のジョブが一斉に落ちる形で気づくことになります。**

**サブドメインの落とし穴が一番危険です。** `example.com` と書けばその配下も許可されると考えるのは自然ですが、**公式は明確に否定しています。** `docs.example.com` を使いたいなら、`docs.example.com` を個別に書くか `*.example.com` と書くかのどちらかです。社内ドキュメントや製品マニュアルを参照させるエージェントは、だいたいサブドメインにあります。ここを見落とすと、**設定したつもりで検索結果から黙って消える**という形で出ます。`web_search` は除外するだけでエラーを返さないため、こちらは特に気づきにくいです。

**統制の観点では、これは素直に歓迎できる変更です。** これまで `limited` networking は「サンドボックスの通信は縛るが、サーバー側 web ツールは別経路で外に出られる」という状態でした。情シス審査で「このエージェントはどこまで外部にアクセスできるか」と問われたとき、**サンドボックスと web ツールで2つ説明する必要があった**わけです。それが `allowed_hosts` 1か所に統一されました。**許可リストが1つになったことは、監査の説明コストをそのまま下げます。**

**ただし「1か所になった」ことの裏返しも押さえてください。** `allowed_hosts` にホストを追加すると、**web ツールだけでなくサンドボックスにもそのホストが開きます。** 「検索で参照させたいだけ」のホストを追加すると、サンドボックス内のコードからもそこへ通信できるようになります。細かく分けたい場合は、この仕様が制約になります。

**`allow_package_managers` と `allow_mcp_servers` が web ツールに効かない点も明示されました。** npm や PyPI を許可していても、`web_fetch` でそのドメインを取得することはできません。別物として扱う必要があります。

**`unrestricted` networking と self-hosted 環境は対象外です。** つまりこの変更で困るのは、**セキュリティを締めている環境だけ**です。緩い設定のままの環境には影響がありません。構造としてはやや皮肉ですが、`limited` を選んでいる組織ほど作業が発生します。

## 副業・個人活用視点

**個人開発で Managed Agents を使っている場合、まず `unrestricted` で動かしているかを確認してください。** `unrestricted` なら影響はありません。`limited` を使っているなら、`allowed_domains` と `allowed_hosts` の整合を確認する作業が必要です。個人の構成は設定ファイルが1つなので、確認自体は数分で終わります。

**受託案件では、この変更を「説明材料」として使えます。** クライアントの情シス審査で「エージェントはどこに通信するのか」を問われる場面は増えています。**`allowed_hosts` 1か所で web 検索・取得・サンドボックスのすべてが決まる**という構造は、審査で説明しやすい設計です。「許可リストはこのファイルのこの行です」と1か所を指せるのは、審査の通りやすさに直結します。

**サブドメインの仕様は、提案時の見積りに影響します。** 参照させたいドキュメントサイトが複数のサブドメインに分かれている場合、`*.example.com` でまとめるか個別に列挙するかの判断が必要です。**ワイルドカードでまとめると、意図しないサブドメインも開きます。** セキュリティ要件が厳しい先には個別列挙を提案することになり、その棚卸し作業が工数になります。設計段階で「参照先ホストの一覧」をクライアントから出してもらう段取りを組んでおくと手戻りが減ります。

**`web_search` が黙って結果を除外する点は、デバッグの落とし穴として覚えておいてください。** エラーが出ないので「検索結果が少ない」「欲しい情報が出てこない」という症状になります。`web_fetch` は `url_not_allowed` を返すのでまだ分かりやすいですが、検索側は原因究明に時間を取られます。**挙動がおかしいときは `allowed_hosts` を疑う**というチェック項目を、自分の手順に入れておく価値があります。

## 関連リンク

- [Environment networking（公式ドキュメント）](https://platform.claude.com/docs/en/managed-agents/environments#networking)
- [Restrict web search and web fetch domains（公式ドキュメント）](https://platform.claude.com/docs/en/managed-agents/tools-web-restrictions)
- [Claude Platform API release notes（公式）](https://platform.claude.com/docs/en/release-notes/api)
