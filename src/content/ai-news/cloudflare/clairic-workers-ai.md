---
title: "Clairic が Workers AI に登場 — テキストではなく「型付きの値」と確信度を返す抽出モデル（プレビュー）"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-19
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-19-clairic-workers-ai/"
summary: "Cloudflare が、テキストを生成せず型付きの値を返す新クラス「System One」モデルの第1弾 Clairic を Workers AI のプレビューとして公開した。モデル ID は @cf/cloudflare/clairic。text・number・date・duration・list・estimate・forecast を型指定で抽出し、各回答に p_null と confidence が付く。価格は入力100万トークンあたり $0.10 で、出力トークンの課金はない。長い算術や多数行の集計は不安定で、計算はコードで行う前提と明記されている。重みは公開予定。"
description: "Workers AI に型付き抽出モデル Clairic がプレビュー登場。確信度つきで値を返す。"
impact: "請求書や注文メールなどからの項目抽出を、型と確信度つきで安価に組み込める。確信度で自動処理と人の確認を振り分ける設計がしやすい。ただしプレビューで、計算はコード側に寄せる必要がある。"
tags: ["cloudflare", "workers-ai", "抽出", "プレビュー", "モデル"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-10-19、**Clairic** を Workers AI のプレビューとして公開しました。Cloudflare は Clairic を、**テキストを生成せず型付きの値を返す「System One」クラス**の第1弾と位置づけています。

入力を**1パスで読み、型を指定した項目の値を返します**。型は `text`（入力中の正確な範囲と文字オフセット）、`number`、`date`、`time`、`datetime`、`duration`、`list`、`estimate`（範囲内の分布）、`forecast`（将来ステップごとの推定）です。

特徴は**確信度が標準で付くこと**です。各スカラー回答に `p_null`（入力から値が決まらない確率）と `confidence` が付き、入力から決まらない場合は `null` を返します。推定と予測には中央値と80%区間（p10〜p90）が付きます。画像は最大4枚まで一緒に渡せます。

モデル ID は `@cf/cloudflare/clairic`。`env.AI.run()` か REST の `/ai/run` で呼び、AI Gateway 経由も使えます。**価格は入力100万トークンあたり $0.10 で、トークンを生成しないため出力課金はありません。** Cloudflare は重みを公開する予定としています。

## 何が変わったか

- Workers AI に **Clairic（`@cf/cloudflare/clairic`）** がプレビューで追加
- 型指定の抽出に対応: `text` / `number` / `date` / `time` / `datetime` / `duration` / `list` / `estimate` / `forecast`
- 各回答に **`p_null` と `confidence`**、推定・予測には **中央値と80%区間**。`options.include_quantiles` で99パーセンタイルも取得可
- 予測は**最大64ステップ**。画像は**最大4枚**まで入力可
- 価格は**入力 $0.10 / 100万トークン、出力課金なし**
- プレビューの制約: 依存する長い算術や多数行の集計は不安定（入力は Clairic で抽出し、計算はコードで）、根拠のない推定は区間が広い、多段の予測は平均に寄る、年のない日付は `reference_date` の指定が必要
- 重みは公開予定

## 業務インパクト（一般企業向け）

**文書からの項目抽出に、「どれを人が確認すべきか」の判断材料が最初から付いてきます。**

請求書、注文、問い合わせメールから日付・金額・番号を取り出す処理は、多くの現場にあります。難しいのは抽出そのものより、**間違いに気づく仕組み**です。Clairic は `p_null` と `confidence` を返すため、**確信度の高いものは自動処理、低いものだけ人の確認に回す**という振り分けを組みやすくなります。公式も、スコアを「何を自動化し、何をレビューに回すかの判断」に使えるとしています。

注意点は、**プレビューであることと、公式が弱点を明記している点**です。長い算術や多数行の集計は不安定とされています。**「抽出は Clairic、計算はコード」と役割を分ける**のが前提です。本番投入の前に、自社の文書で精度と確信度の当たり具合を確認してください。

## 副業・個人活用視点

**帳票処理やデータ入力の自動化案件で、コストと設計の両面が軽くなります。**

出力課金がなく入力 $0.10 / 100万トークンなので、**件数が多い定型文書の処理でも費用を読みやすい**です。確信度つきで返るため、「全件自動」ではなく「怪しいものだけ人が見る」という納品形にしやすく、**精度の説明責任を持ちやすく**なります。

試すなら、まず手元の請求書や注文メールで `text` と `date` の抽出を試し、`null` と低確信度がどんな入力で出るかを見るのが近道です。プレビューなので、**仕様が変わりうる前提**で組んでください。

---

**補足**: 詳細な設計意図は Cloudflare の公式ブログ（`blog.cloudflare.com/clairic-extraction-model/`）にあります。本稿は changelog の内容に基づいています。
