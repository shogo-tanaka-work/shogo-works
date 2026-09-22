---
title: "Python Workers が GA。FastAPI も Django も openai も langchain も、Cloudflare のエッジでそのまま動くようになった"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-09-21
sourceUrl: "https://blog.cloudflare.com/python-workers-ga/"
summary: "Cloudflare が 2026-09-21、Python Workers の一般提供（GA）を発表した。公式の表現は「Python は Cloudflare Developer Platform 上の第一級でフルサポートの言語になった」。変更は4点で、(1) バインディングが Python のまま扱えるようになり to_js() のグルーコードが不要になった、(2) workers.asgi / workers.wsgi コネクタで FastAPI・Django・Flask がそのまま動く、(3) Workers の connect API 上にソケットシステムコールを実装したことで aiomysql や asyncpg が Hyperdrive 経由で使える、(4) HTTP クライアントを fetch へ通すアップストリーム貢献により openai・langchain・mcp がネイティブに動く。加えて Cloudflare は PEP 783 を提案して受理させ、PyEmscripten プラットフォームの標準化とビルドツールチェーンの一般開放を行った。"
description: "2年間のベータを経て、Python が Workers の第一級言語になった。"
impact: "Python で書かれた AI エージェントやデータ処理を、サーバー管理なしでエッジへ載せる選択肢が実用段階に入った。TypeScript へ書き換える前提が外れる。"
tags: ["cloudflare", "workers", "python", "fastapi", "django", "langchain", "hyperdrive", "サーバーレス", "エッジ"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-09-21、**Python Workers の一般提供（GA）**を発表しました。ベータ提供の開始から2年、公式は「**Python は Cloudflare Developer Platform 上の第一級（first-class）でフルサポートの言語になった**」と表現しています。

**GA という言葉を、ここでは「本番で使ってよい」以上の意味で読む必要があります。** 今回の発表で変わったのは提供ステータスのラベルだけではなく、**Python Workers が「Python として書ける」ようになった**という実装上の中身だからです。

これまでの Python Workers には、Python で書いているのに JavaScript を意識し続けなければならない箇所がいくつもありました。その代表が、バインディングへ値を渡すときのグルーコードです。

```python
# これまで: Queue へ辞書を送るのに JavaScript オブジェクトへの明示変換が必要だった
from pyodide.ffi import to_js
import js

self.env.QUEUE.send(to_js({"key": "value"}, dict_converter=js.Object.fromEntries))
```

```python
# GA 以降: そのまま動く
self.env.QUEUE.send({"key": "value"})
```

公式はこの旧来のグルーコードについて、「**人間と AI エージェントの双方にとって、よくある誤りの発生源だった**」と書いています。型変換の処理全体が Workers ランタイムと Python SDK の内部へ取り込まれ、**JavaScript を1行も書かずに全バインディングを扱えるようになりました。**

## 何が変わったか

変更は大きく4点あります。

**1つ目は、いま見たバインディングのネイティブ対応です。** Workers AI、R2、D1、Hyperdrive、Durable Objects、Queues、Workflows といった Cloudflare プラットフォームの各コンポーネントへ、Python 的な書き方のまま接続できます。

**2つ目は、Web フレームワーク対応です。** `workers.asgi` と `workers.wsgi` という2つのコネクタが提供され、**FastAPI・Django・Flask のアプリケーションが Python Workers 内でそのまま動きます。**

```python
from fastapi import FastAPI
from workers import asgi

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, world!"}

Default = asgi.entrypoint(app)
```

**追加するのは実質1行です。** 通常の環境なら `uvicorn main:app` のように Web サーバーを立てるところですが、Workers ではプラットフォーム自体がその役割を担うため、Uvicorn や Gunicorn は不要です。公式の説明によれば、コネクタは「**薄く最適化されたブリッジ**」として、受信した JavaScript のリクエストを WSGI/ASGI の標準構造へ翻訳し、レスポンスを最小のオーバーヘッドで戻しています。WSGI/ASGI 準拠のフレームワークであれば、FastAPI・Django・Flask 以外でも同様に動きます。

**3つ目は、リレーショナルデータベースへの接続です。** これまで Python Workers は TCP ソケットに対応しておらず、`aiomysql` や `asyncpg` のようなデータベースドライバが使えませんでした。**理由は WebAssembly の制約です。** これらのドライバは標準ライブラリの `socket` モジュールを通じて POSIX のシステムコールを呼びますが、WebAssembly サンドボックス内ではそれらは常に失敗するスタブになっています。

Cloudflare は**ソケットのシステムコールを Workers の connect API の上に実装**することでこれを解決しました。ドライバが TCP 接続を開こうとすると、その呼び出しが独自のソケットシステムコール実装を経由して Workers ランタイムの JavaScript 呼び出しへ翻訳されます。**翻訳がシステムコールのレベルで起きるため、ドライバ側は何も知らなくてよい**という設計です。結果として、Hyperdrive バインディング経由で PostgreSQL と MySQL へ、慣れたドライバのまま接続できます。

**4つ目が、AI ライブラリのネイティブ動作です。** `openai`、`langchain`、`mcp` といったライブラリは `requests` や `httpx` といった HTTP クライアントに依存していますが、これらも低レベルのソケット操作が無いために正しく動きませんでした。Cloudflare は**これらの HTTP クライアントが WebAssembly 環境で JavaScript の `fetch` API へ直接リクエストを流せるよう、アップストリームへ貢献**しました。3つ目のソケット対応と合わせて、ネットワーク層全体が Python Workers 内で機能するようになっています。

**パッケージ生態系についての取り組みも、地味ですが重要です。** ネイティブの C/C++/Rust 拡張を持つ Python パッケージは、WebAssembly 向けにクロスコンパイルしないと動きません。これまでその標準的な手順が無く、**Cloudflare のチームが手作業でコンパイルしてホストしていた**ため、使えるパッケージの数が構造的に制限されていました。

Cloudflare はここで、自社専用のビルドを増やす道を選びませんでした。代わりに **PEP 783 を提案し、ブラウザランタイムで Python を動かすプラットフォーム「PyEmscripten」の標準化を実現**させています。1年以上の議論を経て受理され、パッケージのメンテナが PyEmscripten 向けのホイールをビルドして公開できるようになりました。あわせて Pyodide のビルドツールチェーンを安定化させ、`cibuildwheel` へも PyEmscripten 対応を追加しています。

## 業務インパクト（一般企業向け）

**この更新が実務で意味を持つのは、「Python で書かれた処理を動かす場所」の選択肢が1つ増えたからです。**

社内で AI まわりの実装を Python で進めている組織は多いはずです。データ処理、スクレイピング、LLM への問い合わせ、エージェントのオーケストレーション。**これらを本番で動かす段になると、多くの場合はサーバーかコンテナの話になります。** EC2 なり Cloud Run なり、どこかに実行環境を用意して、スケーリングと監視とパッチ適用の面倒を見る話です。

**今回の GA は、その前提に別の選択肢を置きます。** FastAPI で書いた API サーバーが `asgi.entrypoint(app)` の1行でエッジに載り、負荷分散とスケーリングはプラットフォーム側が持つ。**サーバーの台数を決める作業自体が無くなります。**

**判断が変わるのは、既存資産の扱いです。** これまで「Cloudflare Workers に載せたいが、うちの処理は Python で書かれている」という場面では、TypeScript への書き換えコストを見積もる必要がありました。その見積もりの前提が外れます。特に、**データベースへ接続する処理と AI ライブラリを使う処理**という、実務で最も多い2種類が動くようになった意味は大きいです。

**一方で、無条件に置き換えられるわけではありません。** 制約は依然として WebAssembly サンドボックスにあります。ネイティブ拡張を持つパッケージは PyEmscripten 向けのホイールが必要で、公式も「**生態系はまだこの標準を採用している途中**」と書いています。使いたいパッケージが対応していなければ動きません。公式は未対応パッケージを Discord や GitHub で報告するよう案内しており、主要メンテナとの調整も進めているとしていますが、**導入検討の最初の作業は「使っているパッケージが動くかの確認」になります。**

**もう1つ、移行判断で見落としやすい点があります。** Workers は実行時間やメモリに固有の制約を持つ環境で、長時間のバッチ処理や重い機械学習の推論をそのまま載せる場所ではありません。**向いているのは、リクエスト単位で完結する処理**です。API サーバー、Webhook の受け口、LLM への問い合わせを挟むエージェントの実行。**「サーバーを持たずに済む」という利点は、処理の形が合っている場合に限って効きます。**

## 副業・個人活用視点

**個人開発者にとっての変化は、もっと直接的です。**

Python でプロトタイプを書く人は多い一方、**それを人に見せられる形で公開する手前に、いつもインフラの壁があります。** ローカルでは動くが、デプロイ先を決め、サーバーを借り、ドメインを繋ぎ、動かし続ける。ここで止まる個人プロジェクトは珍しくありません。

**FastAPI のアプリに1行足せばグローバルに公開される**という状態は、この壁をかなり低くします。しかも `openai` や `langchain` がそのまま使えるので、**LLM を使った小さなツールを作って公開する**という、副業層が最も手をつけやすい領域が丸ごと対象に入ります。

**受託の観点では、提案の幅が変わります。** 「小規模な AI 機能を持つ API を1つ作ってほしい」という案件で、これまではサーバーの用意と運用を含めて見積もるか、TypeScript で書き直すかの二択でした。**Python のまま、サーバー運用なしで納品できる**選択肢が増えると、見積もりの構造そのものが変わります。運用費の説明が楽になる、という効果もあります。

**ただし、見積もりで注意すべき点もはっきりしています。** 「Python が動くようになった」を「何でも動く」と読むと事故ります。**先に確認すべきは、使う予定のパッケージが PyEmscripten 対応かどうかの1点**です。ここを確認せずに着手すると、実装の途中で移植不能なパッケージに当たり、設計をやり直すことになります。

**学習の投資先としても、位置づけが変わりました。** これまで Workers を使うには TypeScript が事実上の前提で、Python が主言語の人にとっては「別の言語を覚える」コストが入り口に立っていました。そのコストが無くなった以上、**Python だけで、エッジで動くサーバーレスの実装まで到達できます。** 学ぶ順番を組み立て直すだけの価値がある変化です。

## 関連リンク

- [Python Workers are now generally available（Cloudflare Blog / 2026-09-21）](https://blog.cloudflare.com/python-workers-ga/)
- [Hyperdrive support for Python Workers（Cloudflare Changelog / 2026-09-16）](https://developers.cloudflare.com/changelog/)
