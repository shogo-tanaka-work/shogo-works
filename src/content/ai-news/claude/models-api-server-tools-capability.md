---
title: "Models API に capabilities.server_tools を追加 — 名前が近い capabilities.code_execution とは別の問いに答える"
tool: "claude"
toolLabel: "Claude"
date: 2026-10-06
sourceUrl: "https://platform.claude.com/docs/en/release-notes/api"
summary: "Claude の Models API に capabilities.server_tools が追加された。GET /v1/models と GET /v1/models/{model_id} が、各モデルが web search ツールと code execution ツールを受け付けるかを返す。公式が注意しているのは2つの似た名前のフィールドの意味の違いで、モデルが code execution ツールを受け付けるかは capabilities.server_tools.code_execution を読み、トップレベルの capabilities.code_execution はコードがそのリクエストの他のツールを呼べるかを表す。2026-10-05 の capabilities.thinking.types.disabled、2026-10-01 の line フィールドと合わせ、Models API の capability 報告が週単位で細かくなっている流れの一部である。モデル ID を文字列で分岐させる実装を capability 問い合わせへ置き換えられる範囲が広がっている。"
description: "追加変更なので既存実装は壊れない。ただし似た名前の2フィールドの取り違えは、どちらにも転ぶ。"
impact: "モデル ID をハードコードした分岐を、API への問い合わせへ置き換えられる。新モデルが出たときにコードを直す必要が減る。一方で capabilities.server_tools.code_execution と capabilities.code_execution を取り違えると、使える構成を使えないと判定するか、未対応モデルへツールを渡して失敗する。"
tags: ["claude", "Models API", "capability", "web search", "code execution", "API設計"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude/model-lineup-2026"
draft: false
---

## 要約

Claude の Models API に **`capabilities.server_tools`** が追加されました。`GET /v1/models` と `GET /v1/models/{model_id}` が、**各モデルが web search ツールと code execution ツールを受け付けるか**を返します。

**本記事は追補です。** 2026-10-07 の日次チェックで同じページから 10-05 の `capabilities.thinking.types.disabled` を追補として拾いましたが、その隣にあった 10-06 の本エントリが抜けていました。date-only エントリの取りこぼしです。

**公式が注意を向けているのは、2つの似た名前のフィールドの意味の違いです。**

モデルが **code execution ツールを受け付けるか**を確認するには **`capabilities.server_tools.code_execution`** を読みます。

一方でトップレベルの **`capabilities.code_execution`** は、**コードがそのリクエストの他のツールを呼べるか**を表します。

**名前が近いのに、別の問いに答えるフィールドです。** 前者は「このモデルにこのツールを渡せるか」、後者は「渡したコードが他のツールを呼べるか」。**取り違えると、どちらの方向にも転びます。** トップレベルの方を見て「false だから使えない」と判定すれば、**使えるはずの構成を使えないと判定します。** 逆に `server_tools` の方を見ずにツールを渡せば、**未対応モデルへ渡して失敗します。**

**この追加は、流れの中で読むべきものです。** 2026-10-01 の `line` フィールド、2026-10-05 の `capabilities.thinking.types.disabled`、そして今回の `capabilities.server_tools`。**Models API の capability 報告が、週単位で細かくなっています。**

**方向はひとつです。モデル ID を文字列で分岐させる実装を、capability の問い合わせへ置き換えられる範囲が広がっています。**

**これは地味ですが、保守の形を変える変化です。** `if (model.startsWith("claude-opus"))` のような分岐を書いている実装は、**新しいモデルが出るたびに直す必要があります。** そして直し忘れると、**新モデルで動かない機能が黙って増えます。** capability を問い合わせる形にすれば、**モデルが増えても分岐を書き足す必要がありません。**

## 何が変わったか

- **Models API に `capabilities.server_tools` が追加**（2026-10-06）
- `GET /v1/models` と `GET /v1/models/{model_id}` が、**各モデルが web search ツールと code execution ツールを受け付けるか**を返す
- **`capabilities.server_tools.code_execution`**: そのモデルが **code execution ツールを受け付けるか**
- **`capabilities.code_execution`**（トップレベル）: **コードがそのリクエストの他のツールを呼べるか**。**別の問いに答えるフィールド**
- 既存実装を壊さない**追加変更**
- 2026-10-01 の `line`、2026-10-05 の `capabilities.thinking.types.disabled` に続く、**capability 報告の細分化**の一部

## 業務インパクト（一般企業向け）

**影響範囲は限定的ですが、該当する実装では保守コストに直接効きます。**

**該当するのは、複数のモデルを使い分けている実装です。** コストの都合で軽いモデルと重いモデルを切り替える、用途でモデルを分ける、といった構成です。**ここで「このモデルは web search が使えるか」をコード側で持っていると、モデルが増えたときに必ず直す必要があります。**

**直すのを忘れたときの壊れ方が厄介です。** 多くの場合、**新しいモデルが「未対応」の側に分類されて、機能が静かに使われなくなります。** エラーにならないので気づきません。**「なぜか検索が効かないモデルがある」という形で、数か月後に発覚します。**

**今回の追加で、この分岐を API へ寄せられます。** 起動時にモデル一覧を取り、capability で判定する。**モデルが増えても、コードを触らずに正しく判定されます。**

**ただし、置き換えるなら名前の違いを正確に押さえてください。**

**ここが本件の実務上の要点です。** `capabilities.server_tools.code_execution` と `capabilities.code_execution` は**名前が近く、エディタの補完で間違えて選べる距離にあります。** そして**どちらも boolean を返すので、型では気づけません。**

**取り違えの被害は2方向です。** トップレベルを見て判定すると、**使えるモデルを使えないと判定する**可能性があります。この場合は機能が無効になるだけで、動作はします。**気づきにくい方の失敗です。** 逆に `server_tools` を見ずにツールを渡すと、**リクエストが失敗します。** こちらはエラーになるので気づけます。

**対処は実装の形で防ぐのが確実です。** capability の読み取りを**1か所の関数に閉じ込め**、関数名で意図を区別してください。`modelAcceptsCodeExecutionTool()` と `codeCanCallOtherTools()` のように**関数名で問いを表す**と、呼び出し側で取り違えません。**フィールド名を各所で直接読む実装は、この手の取り違えを必ず起こします。**

**設計のレビュー観点としても使えます。** 「モデルの能力をコードに書いているか、API に聞いているか」。**これは Claude に限らず、複数モデルを扱う実装すべてに当たる観点です。** 社内のコードレビューのチェック項目に1行入れる価値があります。

## 副業・個人活用視点

**API を使って何か作っている個人開発者には、実利のある変更です。**

**モデルの能力をコードに書いていると、モデルが出るたびにメンテナンスが発生します。** 個人の開発では、**このメンテナンスが最も後回しになる種類の作業**です。動いているので急がない。そして**動かなくなっていることにも気づかない。**

**capability を問い合わせる形にしておけば、この作業が消えます。** 作ったものを長く放置する前提なら、**最初からこの形にしておくのが得です。** 起動時に1回モデル一覧を取ってキャッシュするだけなので、実装も重くありません。

**受託では、これは「引き渡した後に壊れない」という品質の話になります。**

**納品したシステムが、半年後にモデルの入れ替わりで機能しなくなる。** これは受託で実際に起きる形です。そして**原因がモデル ID のハードコードだと、説明が苦しい。** 「新しいモデルが出たので直します」という追加請求は、**納品時の設計の問題として見られます。**

**逆に、capability を問い合わせる設計にしていれば、提案の材料になります。** 「モデルの入れ替わりでコードを直す必要がない設計にしています」。**これは機能ではなく保守性の説明なので、価格の根拠として説明しやすい部分です。** 見積の説明に1行入れる価値があります。

**学習の題材としては、API 設計の「名前の近さ」の問題が本題です。**

**`capabilities.server_tools.code_execution` と `capabilities.code_execution`。** 公式がわざわざ注意書きを添えているということは、**取り違える人が出ると想定されている**ということです。**この種の事故は、自分が API を設計する側になったときにも起こします。**

**学べることは2つです。** 1つは**読む側として、似た名前のフィールドを見たら必ずドキュメントで意味を確認する**こと。型が同じなら、動かしても気づけません。もう1つは**設計する側として、別の問いに答えるフィールドに近い名前を付けない**こと。**`code_execution` と `server_tools.code_execution` は、名前だけ見ると後者が前者の詳細のように見えます。** 実際は別の問いです。

**自分が作るものの命名を見直す機会として使ってください。** 公式が注意書きを書かざるを得なかった名前は、**命名の失敗例として参照する価値があります。**

## 関連リンク

- [Claude API release notes（公式）](https://platform.claude.com/docs/en/release-notes/api)
- [Using the Models API（公式）](https://platform.claude.com/docs/en/models/overview)
