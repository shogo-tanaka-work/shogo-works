---
title: "Cloudflare Agents SDK に web_fetch ツールが追加。Workers AI Markdown Conversion で Web・PDF・Office 文書をテキスト化し、長文は offset で分割して返す"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-12
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-11-web-fetch/"
summary: "Cloudflare Agents SDK に web_fetch ツールが追加された。エージェントが URL を指定して Web ページ・PDF・対応 Office 文書を読み込み、Workers AI Markdown Conversion でモデルが読めるテキストへ変換する。Markdown for Agents に対応したサイトには Markdown を直接要求する。モデルに返るのは本文、リダイレクト後の最終 URL、HTTP ステータス、content type の4点。長いページは分割して返り、各レスポンスに次の区間を要求する offset が含まれる。設定で許可ホスト・レスポンスサイズ上限・タイムアウト・リダイレクトの扱いを制御できるが、changelog にはオプション名の記載が無く docs に委ねられている。導入は Pi Durable harness が案内され、agents/webfetch/pi の webFetchTool を registry.install() で登録する。AI SDK / TanStack AI アダプタも同梱。モデルを介さないページ取得には fetchWeb() / windowWebFetchPage() / renderWebFetchPage() が使え、Durable Object もブラウザも不要。必要バージョンは Agents SDK v0.28.0 以降。価格・課金の記載は changelog に無い。"
description: "PDF と Office 文書が入っている点が実務上の分かれ目になる。社内文書は HTML で置かれていないことが多い。"
impact: "エージェントに文書読み取りを持たせるために必要だった「取得・変換・分割」の自前実装が消える。同時に、エージェントが読む外部テキストの経路が1本増えるため、許可ホストの設計が必要になる。"
tags: ["cloudflare", "agents-sdk", "web-fetch", "markdown-conversion", "PDF", "エージェント"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare Agents SDK に **`web_fetch` ツール**が追加されました。エージェントが URL を指定して、**Web ページ・PDF・対応 Office 文書**を読み込めます。

**取得した内容は Workers AI Markdown Conversion でテキストへ変換されます。** これは Cloudflare が別途提供している文書変換機能で、**HTML / PDF / Office 文書をモデルが読める Markdown に落とす**ものです。`web_fetch` はその上に乗っています。

**Markdown for Agents に対応したサイトに対しては、Markdown を直接要求します。** Markdown for Agents は、サイト側が「エージェント向けに Markdown を返す」ことを宣言する仕組みで、Cloudflare は 2026-10-09 にこの変換をプロセス内で行う改善も出しています。**対応サイトなら変換を挟まない**という分岐が入っています。

**モデルに返るのは4点です。**

- ページ本文
- **リダイレクト後の最終 URL**
- HTTP ステータス
- content type

**最終 URL が返るのは地味ですが実務的に重要です。** 出典を記録するとき、リダイレクト前の URL を残すと後から辿れないことがあります。

**長いページは分割して返ります。** 各レスポンスに**次の区間を要求するための offset** が含まれ、モデルはそれを使って読み進めます。**文脈長に収まらない文書を、モデル自身の判断でページングする**構造です。

**制御できる項目は4つです。** 取得を許可するホスト、レスポンスサイズ上限、タイムアウト、リダイレクトの扱い。**ただし changelog には「制御できる」とあるだけで、オプション名は書かれていません。** 実際の指定方法は docs（`developers.cloudflare.com/agents/tools/web-fetch/`）側にあります。

**導入は Pi Durable harness が正式な案内です。**

```ts
import { webFetchTool } from "agents/webfetch/pi";

// harness ファクトリ内、Harness.open(...) より前
this.registry.install({
  name: "web-tools",
  tools: [webFetchTool({ binding: this.env.AI })],
});
```

**どの harness でも動き、AI SDK / TanStack AI 向けアダプタも同梱されています。** さらに**モデルを呼ばずにページを取得したい場合**は、`agents/webfetch` の **`fetchWeb()` / `windowWebFetchPage()` / `renderWebFetchPage()`** が使えます。公式は**これらに Durable Object もブラウザも不要**と明記しています。

**必要バージョンは Agents SDK v0.28.0 以降です**（同時に追加された `web_search` は v0.27.0 以降なので、両方使うなら 0.28.0 が実質の下限になります）。

**価格・課金の記載は changelog にありません。** Workers AI Markdown Conversion を使う旨だけが書かれているため、その課金に従うと読むのが自然です。

## 何が変わったか

- Agents SDK に **`web_fetch` ツール**が追加された
- 対応形式は **Web ページ・PDF・対応 Office 文書**
- 変換は **Workers AI Markdown Conversion**。Markdown for Agents 対応サイトには **Markdown を直接要求**
- モデルに返るのは**本文・リダイレクト後の最終 URL・HTTP ステータス・content type**
- 長文は分割され、**各レスポンスに次区間の offset** が入る
- 制御項目は**許可ホスト・サイズ上限・タイムアウト・リダイレクト**（オプション名は changelog に無く docs 側）
- 導入は **Pi Durable harness**（`agents/webfetch/pi` の `webFetchTool`）。どの harness でも動作
- **AI SDK / TanStack AI アダプタ**同梱
- モデル不要の取得関数 **`fetchWeb()` / `windowWebFetchPage()` / `renderWebFetchPage()`**。**Durable Object もブラウザも不要**
- 必要バージョンは **Agents SDK v0.28.0 以降**
- `web_search` を併せて渡すと、検索結果を `web_fetch` で読むようモデルへ指示される
- **価格・課金の記載は無い**

## 業務インパクト（一般企業向け）

**この機能の実務的な分かれ目は、PDF と Office 文書が入っていることです。**

エージェントに「社内の資料を読ませたい」という要件が来たとき、**対象が HTML で置かれていることはほとんどありません。** 見積書は PDF、仕様書は Word、集計は Excel。**Web ページだけ読めるツールは、この要件に対して半分も届きません。** `web_fetch` が PDF と Office 文書を含んでいるのは、要件との距離を縮めます。

**ただし「URL で取れるもの」に限られる点は押さえてください。** 社内のファイルサーバや SharePoint にあるものは、URL と認証の整理が別途必要です。**ツールが対応しているのは形式の問題で、到達性の問題ではありません。**

**次に、ページング（offset）の意味を実務に翻訳します。**

**長文が分割されて返るということは、モデルが「読み進めるかどうか」を判断するということです。** 100ページの PDF を渡したとき、モデルが3区間で切り上げる可能性があります。**それは必ずしも間違いではありません**——必要な情報が前半にあればそれで足ります。ただし**「全部読んだ前提で結論を出している」と誤解すると危険**です。契約書のレビューのように**最後まで読まないと判断できない用途では、offset を使い切る制御を自分で書く**必要があります。公式はツールを提供していますが、読み切る保証はしていません。

**3つ目は、許可ホストの設計です。**

`web_fetch` は許可ホストを制御できます。これは**エージェントが読む外部テキストの経路を縛る唯一の手段**です。そして前述の通り、同時に追加された `web_search` と組み合わせると、**モデルが読む URL は事前に分かりません。** 検索結果を読ませるなら許可ホストは広く取らざるを得ず、**縛りは実質的に効かなくなります。**

**この衝突は回避策のある問題ではなく、設計判断です。** 整理すると2つの型に分かれます。

- **閉じた型**: 許可ホストを社内ドメインや信頼済みの数件に限る。検索は使わない。**権限のある操作（書き込み、送信、決済）を持たせてよい。**
- **開いた型**: 検索と併用し、公開 Web を読む。**権限のある操作を持たせない。** 出力は人のレビューを経る。

**この2つを1つのエージェントに混ぜると、プロンプトインジェクションで権限が使われる経路ができます。** 社内で運用するなら、**エージェントの定義ファイルに「どちらの型か」を書かせる**くらいの運用がちょうどいいです。

**4つ目は、モデル不要の取得関数が実は使い所が広いことです。**

`fetchWeb()` は Durable Object もブラウザも不要で、ページを Markdown にして返します。**これは「エージェント」とは関係なく、単なる文書変換パイプラインとして使えます。** 社内の資料を定期的に集めて Markdown に揃える、という前処理は RAG 構築で必ず発生します。**そこに Workers AI Markdown Conversion を直接使える経路がある**という読み方は、エージェントを作る予定がない組織にも効きます。

## 副業・個人活用視点

**個人開発で効くのは、`fetchWeb()` の方です。**

エージェントを作る話よりも先に、**「URL を渡すと Markdown が返る関数」が Durable Object もブラウザも無しで使える**という点が実用的です。Playwright でヘッドレスブラウザを立てて本文を抜く処理は、書いたことがある人なら分かる通り**保守が重い**作業です。サイトの構造が変わるたびに壊れます。

**案件で使える形は3つあります。**

**1つ目は、資料の下処理の受託です。** 「社内の PDF 200本を検索できるようにしたい」という依頼で、**最初の工程は必ずテキスト化**です。ここを Workers AI Markdown Conversion に寄せれば、OCR やパーサの選定という沼を避けられます。**成果物は「Markdown に揃った文書群」で、これ自体が納品物になります。**

**2つ目は、読み切りの保証を売ることです。** offset でページングされるということは、**「最後まで読ませる」処理は自分で書く必要がある**ということです。契約書・仕様書・論文のように**全体を読まないと使えない文書**を扱う案件では、ここが品質の差になります。「モデルが途中で切り上げていないことを確認する仕組み」を入れた納品は、入れていない納品と見た目が同じで中身が違います。**違いを説明できる人が単価を取ります。**

**3つ目は、出典の記録です。** 最終 URL と HTTP ステータスがモデルに返るため、**「どこから取ったか」を成果物に残す作りが標準で用意されています。** リサーチ代行や調査レポートの納品では、出典が辿れるかどうかが信頼の全部です。

**コンテンツの題材としては、「ページングされるツールの扱い」が手薄です。** 文脈長の話は飽和していますが、**ツールが分割して返してきたとき誰が読み切る責任を持つのか**という論点はあまり書かれていません。実際に長い PDF を食わせて、モデルが何区間で止まるかを測った記録は、それだけで記事になります。

**注意点を1つ。** changelog にはオプション名が書かれていません。**許可ホストやタイムアウトの指定方法は docs を見る必要があります。** 本記事はオプション名を推測していません。
