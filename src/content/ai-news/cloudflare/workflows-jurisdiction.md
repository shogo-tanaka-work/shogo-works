---
title: "Cloudflare Workflows を eu / us / fedramp の地域に固定できる — 作成後は変更不可"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-27
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-27-workflow-jurisdictions/"
summary: "Cloudflare が Workflows に jurisdiction 指定を追加した。wrangler の workflows binding（または exports で宣言した Workflow）に eu、us、fedramp のいずれかを指定すると、その Workflow のインスタンスは指定した地域の中でのみ実行・データ保存される。GDPR や FedRAMP などのデータ所在地規制への対応が目的。jurisdiction は Workflow の作成時に決まり、後から変更できない。既存の Workflow と異なる値を指定すると、wrangler deploy と wrangler versions upload はアップロード前に停止する。Wrangler 4.152.0 以上が必要。"
description: "データ所在地の要件がある処理を Workflows に載せられるようになる一方、既存 Workflow の地域は変えられない。"
impact: "地域要件のある案件では、Workflow を作る前に jurisdiction を決める必要がある。後から変更できないため、誤ると作り直しになる。"
tags: ["cloudflare", "workflows", "workers", "データ所在地", "GDPR", "FedRAMP", "wrangler"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は **Workflows に jurisdiction（法域）の指定を追加**しました。指定した Workflow は、**インスタンスの実行もデータの保存も、その地域の中だけ**で行われます。公式が挙げる目的は、**GDPR や FedRAMP といったデータ所在地規制への対応**です。

設定は wrangler の設定ファイルで行います。`workflows` の binding、または `exports` で宣言した Workflow に `jurisdiction` を書きます。

```jsonc
{
	"workflows": [
		{
			"name": "my-workflow",
			"binding": "MY_WORKFLOW",
			"class_name": "MyWorkflow",
			"jurisdiction": "eu",
		},
	],
}
```

指定できる値は次の3つです。

- `eu`: 欧州連合
- `us`: 米国
- `fedramp`: FedRAMP-Moderate のデータセンター

**押さえるべき点は、変更できないことです。** jurisdiction は Workflow の**作成時に決まり、後から変えられません**。すでに別の jurisdiction で作られた Workflow に異なる値を指定すると、**`wrangler deploy` と `wrangler versions upload` は Worker をアップロードする前に止まります**。誤った値のまま本番へ出てしまう事故は防げますが、**地域を変えたいときは Workflow を作り直す**ことになります。

必要な Wrangler のバージョンは **4.152.0 以上**です。

## 何が変わったか

- Workflow を **`eu` / `us` / `fedramp`** のいずれかに制限できる
- 制限した Workflow の**インスタンスは、指定した地域の中でのみ実行・保存**される
- 設定場所は `workflows` binding、または `exports` で宣言した Workflow
- **作成後は変更不可**。既存 Workflow と値が違うと deploy / versions upload が止まる
- **Wrangler 4.152.0 以上**が必要
- 詳細は公式の Data location のページを参照

## 業務インパクト（一般企業向け）

**この機能の価値は、「Workflows を使ってよいか」という社内審査の論点を1つ減らすことにあります。**

業務の自動化に Workflows のような長時間・多段のオーケストレーションを使うと、**処理の途中経過が各ステップの状態として保存**されます。個人情報や取引データがその中に入る場合、**「どこの国で処理され、どこに保存されるのか」を説明できないと、情報システム部門や法務の承認が通りません**。これまでは地域の固定ができなかったため、規制のある業務では採用を見送るしかない場面がありました。

**やるべきことは、案件の最初に地域要件を確認することです。** 作成後に変えられない以上、後からの修正は作り直しです。起案の時点で「EU 居住者のデータを含むか」「政府系の調達要件があるか」を確かめ、**Workflow を作る前に値を決めて**ください。テンプレートに `jurisdiction` を必須項目として入れておくと、指定漏れが起きません。

**限界も押さえてください。** この設定が保証するのは、**Workflow のインスタンスが実行・保存される場所**です。Workflow から呼び出す外部 API、別のストレージ、ログの出力先は別の問題で、**それぞれの所在地を別途確認する必要があります**。「Workflows を eu にしたから全体が EU 内に収まる」とは言えません。規制対応の説明では、データが通る経路を1つずつ挙げて確認するのが安全です。

## 副業・個人活用視点

**個人の趣味の自動化では、この設定は不要です。** 指定しなければ従来どおり動きます。無理に付けると、**後から変えられない**という制約だけを背負います。

**効いてくるのは、受託で海外や公共の案件を取るときです。** 見積もりの段階で「データを EU 内に置けますか」と聞かれることは珍しくありません。その場で「Workflows は地域を固定できます」と答えられると、**技術的に対応できるかを確かめるための往復が減ります**。ただし、先ほど触れたとおり、固定できるのは Workflow の実行と保存の範囲です。**構成全体で要件を満たせるかは、別に設計して答える**必要があります。

**納品物には、選んだ地域とその理由を1行残してください。** 作成後に変えられない設定は、後任者が「なぜ eu なのか」を知らないまま触ると危険です。設計資料や README に値と理由を書いておけば、引き継ぎで困りません。

**検証は小さく始めるのが現実的です。** 試験用の Workflow を `eu` で作り、同じ名前で別の値を指定したときに deploy が止まることを確かめておけば、運用中に誤った変更を入れたときの挙動を事前に把握できます。
