---
chapter: 42
slug: mcp-getting-started
title: "MCPサーバーを追加してみよう：Context7 MCPで始める最初の一歩"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/mcp-getting-started
fetched_at: 2026-05-03T06:26:15Z
---

# MCPサーバーを追加してみよう：Context7 MCPで始める最初の一歩

こんにちは、とまだです。

「MCPサーバーを追加したいけど、どうやればいいの？」と思っていませんか？

前回の記事ではMCPの概念と仕組みを解説しました。今回は実際にMCPサーバーを追加して、使ってみるところまでを体験しましょう。

MCPの基本概念をおさらいしたい場合は、こちらの記事をご覧ください。

[MCPとは？Claude Codeで外部ツールと連携するModel Context Protocolを解説](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-mcp)

今回は**Context7 MCP**を例に説明します。LLMの学習データが古いという問題を解決する、実用的なMCPサーバーです。

## 忙しい人のために要約

- `claude mcp add`コマンドでMCPサーバーを追加できる
- Context7はLLMの古い知識を補い、最新ドキュメントを参照できる
- `/mcp`コマンドで接続状態を確認できる
- プロンプト末尾に`use context7`を付けるだけで使える

## Context7 MCPを追加する

以下のコマンドを実行するだけで、Context7 MCPを追加できます。

```
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

`YOUR_API_KEY`の部分は、[context7.com/dashboard](https://context7.com/dashboard)で無料取得できるAPIキーに置き換えてください。

![](https://static.zenn.studio/user-upload/deployed-images/b906124ad18d6491d163d7b4.png?sha=2b700dd7c0c2cc2f0a44d4e0a79032f10da0f303)

!

APIキーなしでも使えますが、レート制限があります。無料でAPIキーを取得できるので、取得しておくことをおすすめします。

環境変数を使う場合は上記の例のように `--api-key $CONTEXT7_API_KEY` のように指定できます。

この書き方については MCP によって異なりますので、最新の情報は各 MCP の公式リポジトリを参照してください。

!

MCP ツールは登場したばかりということもあり、設定方法などが変わることがあります。

Context7 MCP の公式リポジトリは以下の URL ですので、うまくいかない場合はこちらを参照してください。  

[https://github.com/upstash/context7](https://github.com/upstash/context7)

### なぜContext7 MCPなのか

最初に試すMCPサーバーとしてContext7 MCPをおすすめする理由は3つあります。

1. **LLMの弱点を補う** - 古い学習データによるハルシネーションを防ぐ
2. **実用的** - 最新のライブラリドキュメントを参照できる
3. **簡単に使える** - プロンプトに`use context7`を付けるだけ

## 追加できたか確認する

Claude Code内で`/mcp`コマンドを実行してみてください。

`/mcp`コマンドを含む基本的なコマンドについては、別の記事で詳しく解説しています。

[Claude Codeの基本コマンド一覧：日常で使う主要コマンド](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/basic-commands)

```
> /mcp

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Manage MCP servers
 1 servers

 ❯ 1. context7              ✔ connected · Enter to view details
```

`connected`と表示されていれば正常に動作しています。

（最初は `conneting...` と表示されることがありますが、しばらく待つと `connected` と表示されます。）

## 実際に使ってみる

MCPの強みは、自然言語で話しかけるだけでツールを使えることです。

Context7の場合は、プロンプトの末尾に`use context7`を付けるだけで最新ドキュメントを参照してくれます。  

もしくは「Context7 MCPを使って xxx を調べて」というプロンプトを出すことでも使えます。

### 最新のライブラリドキュメントを参照する

たとえば、Next.jsのApp Routerの特徴を調べたいとき、こう指示するだけです。

```
> Next.jsのApp Routerの特徴を調べて。use context7
```

これでContext7がNext.jsの最新ドキュメントを取得し、それを参照した正確な回答を返してくれます。

ちなみに、初回だと以下のようにツール利用の承認を求められます。

```
⏺ Next.jsのApp Routerについて、Context7で最新のドキュメントを調べます。

⏺ context7 - resolve-library-id (MCP)(query: "Next.js App Router features and usage", libraryName: "next.js")

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Tool use

   context7 - resolve-library-id(query: "Next.js App Router features and usage", libraryName: "next.js") (MCP)
   Resolves a package/product name to a Context7-compatible library ID and returns matching libraries.

...
 Do you want to proceed?
 ❯ 1. Yes
   2. Yes, and don't ask again for context7 - resolve-library-id commands in /Users/tomada/Desktop/session-test
   3. No, and tell Claude what to do differently (esc)
```

これは、MCP が実行しようとしている操作が意図した操作かどうかを確認するためのものです。また、同じ MCP でも複数のツール（機能）がある場合は、その度に承認を求められます。

Yes を選択すると、MCP が実行されます。

ちなみに二番目の Yes（`Yes, and don't ask again for ...`）を選択すると、同じツールの使用を繰り返したときには承認を求めないようになります。

この許可設定についてはプロジェクトフォルダ内の `.claude/settings.local.json` に自動的に記述されますので、このファイルを直接編集することで設定を変更することもできます。

パーミッション設定の詳細については、別の記事で解説しています。

[Claude Codeのパーミッション設定を最適化する：セキュリティと利便性のバランス](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/permission-optimization)

二番目の Yes を選択した場合は、以下のような内容になっていると思います。

```:.claude/settings.local.json
{
  "permissions": {
    "allow": [
      "mcp__context7__query-docs"
    ]
  }
}
```

ツールを承認していくたびに、このファイルに追記されていきます。  

新しいプロジェクトで最初から自動承認したい場合は、このファイルの中身をコピペしていくとよいでしょう。

## トラブルシューティング

うまく動かない場合は、以下を確認してみてください。

### /mcp で disconnected と表示される

起動コマンドをターミナルで直接実行して、エラー内容を確認しましょう。

```
npx -y @upstash/context7-mcp
```

具体的なエラーメッセージが表示されるため、原因の特定が楽になります。

### npx が見つからない

Node.jsがインストールされているか確認してください。

```
node --version
which npx
```

Node.jsがインストールされていない場合は、[公式サイト](https://nodejs.org/)からインストールしてください。

### とりあえず再起動

設定変更後や原因不明の問題は、Claude Codeの再起動で解決することも多いです。

```
exit
claude
```

それでもうまくいかない場合は、一旦 MCP 設定を削除するのも一つの手です。

削除するには、`claude mcp add`コマンドで追加したサーバー名を指定して削除します。

```
claude mcp remove <サーバー名>
```

Context7 MCP の場合は `context7` と指定して追加していたので、以下のようなコマンドになります。

```
claude mcp remove context7
```

その後、再び MCP 設定を追加してください。

```
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

## まとめ

Context7 MCPを例に、MCPサーバーの追加から使い方までを体験しました。

- `claude mcp add`で追加
- `/mcp`で確認
- `use context7`で最新ドキュメントを参照
- `claude mcp remove <サーバー名>` で削除
- 承認設定は `.claude/settings.local.json` に記述される

MCPサーバーは他にもたくさんあります。GitHub、Slack、データベースなど、自分の開発フローに合ったものを追加してみてください。

MCPサーバーの一覧は、[公式リポジトリ](https://github.com/modelcontextprotocol/servers)や[Smithery](https://smithery.ai)で確認できます。

ブラウザ操作系のMCPサーバーを選ぶときは、以下の記事も参考になります。

[【MCP】Playwright vs Chrome DevTools どっちを使う？実務経験から解説する使い分けガイド](https://zenn.dev/tmasuyama1114/articles/web_mcp_recommended)
