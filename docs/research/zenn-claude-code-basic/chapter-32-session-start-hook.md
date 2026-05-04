---
chapter: 32
slug: session-start-hook
title: "Claude CodeのSessionStartフックで初期化を自動化：npm installの自動実行"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/session-start-hook
fetched_at: 2026-05-03T06:24:40Z
---

# Claude CodeのSessionStartフックで初期化を自動化：npm installの自動実行

こんにちは、とまだです。

「開発を始めるたびに`npm install`を実行したり、Dockerを起動したり...毎回同じ準備作業が面倒」と感じたことはありませんか？

今回伝えたいことの要点は、**SessionStartフックを使えば、セッション開始時の初期化作業を完全に自動化できる**ということです。  

一言で言えば、開発環境のセットアップをClaude Codeに任せて、すぐにコーディングに集中できるようになります。

この記事では、SessionStartフックの基本的な仕組みから、実践的な設定例、そして環境変数の永続化まで解説します。読み終わる頃には、自分のプロジェクトに最適な自動化設定を構築できるようになっているはずです。

## 忙しい人のために要約

この記事のポイントを5つにまとめました。

- **SessionStartフック**はセッション開始・再開時に自動実行される
- `npm install`やDocker起動など、**環境セットアップの自動化に最適**
- 条件分岐をシェルスクリプトで実装すれば、柔軟な初期化が可能
- **複数コマンドを順番に実行**できるので、柔軟な初期化が可能
- `$CLAUDE_ENV_FILE`で環境変数を永続化できる

## SessionStartフックとは

**SessionStartフック**は、Claude Codeで新しいセッションが開始されたとき、または既存セッションを再開したときに自動実行される仕組みです。開発環境を毎回同じ状態に保つために活用できます。

開発を始める際には、依存パッケージのインストール、環境変数の読み込み、開発サーバーの起動など、様々な準備が必要になりますよね。  

これらを毎回手動で実行するのは正直面倒なものです。

そこでSessionStartフックを活用すれば、これらの作業を自動で実行してくれるので、すぐに本題のコーディングに取りかかれます。

!

SessionStartフックは**マッチャー（パターン指定）を使用しない**点が他のフックとは異なります。  

つまり、セッション開始時には毎回実行されるわけです。条件分岐が必要な場合は、シェルスクリプト内で対応してください。

Hooksの全体像や他の種類について詳しく知りたい方は、別な記事で解説しています。

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

## 基本的な設定方法

SessionStartフックの設定は、設定ファイルの`hooks`セクションに記述します。基本構造は以下のようになります。

```
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "実行するコマンド"
          }
        ]
      }
    ]
  }
}
```

他のフックと異なり、SessionStartには `matcher`**（パターン指定）がない** 点に注目してください。セッション開始時に毎回実行されるため、条件を絞り込む必要がないからです。

Hooksの基本的な設定方法やshファイル化については、別な記事で詳しく解説しています。

[Claude CodeのHooks設定方法：/hooksコマンドとshファイル化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup)

## まずは簡単な例から試してみよう

いきなり複雑な設定を試すよりも、まずはシンプルな例で動作を確認してみましょう。

ここでは、セッション開始時にログファイルにメッセージを書き込む例を紹介します。

まず、テスト用のフォルダ構造を作成します。

```
mkdir -p ~/Desktop/hooks-test/.claude
cd ~/Desktop/hooks-test
```

次に、`.claude/settings.json` に以下の設定を追加します。

```:~/Desktop/hooks-test/.claude/settings.json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo \"セッション開始: $(date)\" >> ~/Desktop/hooks-test/session-start.log"
          }
        ]
      }
    ]
  }
}
```

この設定では、セッション開始時に日時付きのメッセージを `session-start.log` に書き込みます。

それでは動作確認してみましょう。`~/Desktop/hooks-test` ディレクトリで Claude Code を起動します。

```
cd ~/Desktop/hooks-test
claude
```

セッションが開始されると、自動的にログファイルが作成されます。確認してみましょう。

```
cat ~/Desktop/hooks-test/session-start.log
# セッション開始: Mon 29 Dec 2025 11:04:33 JST
```

このように、まずは簡単なログ出力で SessionStart フックの動作を確認してから、より実践的な設定に進むのがおすすめです。

## 複数コマンドを順番に実行する

実際のプロジェクトでは、複数の初期化処理が必要になることがほとんどですよね。`hooks`配列に複数のコマンドを追加すれば、**順番に実行**できます。

```
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "npm install"
          },
          {
            "type": "command",
            "command": "docker-compose up -d"
          },
          {
            "type": "command",
            "command": "npm run db:migrate"
          }
        ]
      }
    ]
  }
}
```

この例では、以下の処理が順番に実行されます。

1. 依存パッケージをインストール
2. Dockerコンテナをバックグラウンドで起動
3. データベースマイグレーションを実行

!

ここで注意したいのが、**前のコマンドが失敗しても後続のコマンドは実行される**という点です。依存関係がある場合は、シェルスクリプトで細かく分岐させるのが良いでしょう。

## 実践例：npm install の自動実行

動作確認ができたところで、より実践的な例を見てみましょう。Node.js プロジェクトでは、セッション開始時に `npm install` を自動実行するのが便利です。

```
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "npm install"
          }
        ]
      }
    ]
  }
}
```

この設定を追加すると、セッション開始時に依存パッケージが自動でインストールされるようになります。特に**Claude Code on the Web**（クラウド環境）では、セッションごとに環境がリセットされることがあるので、この自動化機能は重宝するのではないでしょうか。

### 条件分岐でスマートに実行する

ただし、毎回 `npm install` を実行するのは無駄が多いですよね。`node_modules` が既に存在する場合はスキップしたいところです。

そこで、条件分岐を含むスクリプトを `.claude/hooks` ディレクトリに作成していきます。  

（読み込めればどこに置いても良いですが、ここでは `.claude/hooks` ディレクトリに作成します）

ここでは、先ほどの `~/Desktop/hooks-test` ディレクトリに Node.js プロジェクトをセットアップしましょう。

まず検証のために、適当なライブラリをインストールしてみましょう。

`npm install` コマンドでパッケージをインストールすることで、`package.json` と `node_modules` を作成することができます。

```
cd ~/Desktop/hooks-test
npm install lodash # 適当なライブラリをインストール
```

これで以下のような構成になります。

```
$ tree -a -L 1
.
├── .claude
├── node_modules
├── package-lock.json
└── package.json
```

次に、`.claude/hooks/install-node-modules.sh` を作成します。これは `node_modules` が存在しない場合のみ `npm install` を実行するスクリプトです。

それぞれの分岐で実行内容をログファイルに書き込むようにしておきます。こうしておけば、後から `cat` コマンドでフックの実行結果を確認できます。

```:.claude/hooks/install-node-modules.sh
#!/bin/bash
# node_modules が存在しない場合のみ npm install を実行

LOG_FILE=~/Desktop/hooks-test/session-start.log

if [ ! -d "node_modules" ]; then
    echo "$(date): node_modules が見つかりません。npm install を実行します..." >> "$LOG_FILE"
    npm install >> "$LOG_FILE" 2>&1
else
    echo "$(date): node_modules は既に存在します。スキップします。" >> "$LOG_FILE"
fi
```

`npm install >> "$LOG_FILE" 2>&1` の `2>&1` は、標準エラー出力もログファイルに残すための指定です。これで `npm install` がエラーになったときも、原因がログファイルから追えるようになります。

そしてスクリプトに実行権限を付与します。

```
chmod +x .claude/hooks/install-node-modules.sh
```

そして、`.claude/settings.json` からこのスクリプトを呼び出します。

```:.claude/settings.json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "~/Desktop/hooks-test/.claude/hooks/install-node-modules.sh"
          }
        ]
      }
    ]
  }
}
```

この設定では、以下のような動作になります。

- `node_modules` ディレクトリが**存在しない**場合：ログに記録して `npm install` を実行
- `node_modules` ディレクトリが**存在する**場合：スキップのメッセージをログに記録して終了

!

**注意**: `npm install` を実行するには、プロジェクトに `package.json` が必要です。

`package.json` がないと `npm install` がエラーになります。原因は `session-start.log` に記録されるので、うまく動かないときはまずログを確認してみてください。

### 動作確認

それでは動作を確認してみましょう。`node_modules` ディレクトリが既に存在する状態で Claude Code を起動します。

```
cd ~/Desktop/hooks-test
claude
```

セッションが開始されたら、ログファイルを確認してみましょう。`node_modules` が存在するため、スキップされていることがわかりますね。

```
cat ~/Desktop/hooks-test/session-start.log
# Mon 29 Dec 2025 11:04:33 JST: node_modules は既に存在します。スキップします。
```

次に、Claude Code を一度終了し、`node_modules` を削除して再度起動してみましょう。

```
rm -rf node_modules
claude
```

ログファイルを確認すると、今度は `npm install` が実行されたことがわかります。

```
cat ~/Desktop/hooks-test/session-start.log
# Mon 29 Dec 2025 11:04:33 JST: node_modules は既に存在します。スキップします。
# Mon 29 Dec 2025 11:05:12 JST: node_modules が見つかりません。npm install を実行します...
# added 1 package, and audited 2 packages in 1s
# found 0 vulnerabilities
```

このように、条件分岐を入れることで無駄な処理を省きつつ、必要なときだけ自動実行できるようになります。

## 環境変数を永続化する

少し高度な内容になりますが、セッション中に環境変数を設定することもできます。

たとえば自作スクリプトで環境変数に応じて処理を分岐させている場合には、その環境変数をセッション中に保持しておくことで、Claude Code からスクリプトを実行する際に環境変数を参照できるようになります。

### CLAUDE_ENV_FILEを使って環境変数をセット

SessionStartフックには、**特別な環境変数`$CLAUDE_ENV_FILE`** が用意されています。これはSessionStartフック固有の機能で、セッション全体で環境変数を共有するために使います。

この変数が指すファイルに環境変数を書き込むと、そのセッション中ずっと有効になります。具体的な使用例を見てみましょう。

```
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo 'NODE_ENV=development' >> \"$CLAUDE_ENV_FILE\""
          }
        ]
      }
    ]
  }
}
```

これで `NODE_ENV` 環境変数が設定されます。

### 動作確認

では、確認してみましょう。  

Claude Code のコンソール（CLI）の中で `!` を付けると任意のコマンドを実行することができますので、以下のように実行してみましょう。

```
! echo $NODE_ENV
```

すると以下のように表示され、先ほど設定した `NODE_ENV` 環境変数が表示されていることがわかります。

```
! echo $NODE_ENV
  ⎿  development
```

SessionStartフックで利用できる環境変数の詳細については、別な記事で解説しています。

[Claude Code Hooksの環境変数活用：プロジェクト情報とファイルパスの取得](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-environment-variables)

## タイムアウトの設定

初期化処理に時間がかかる場合は、**タイムアウトを延長する**必要があるかもしれません。`timeout`オプションで対応できます。

```
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "npm install",
            "timeout": 300
          }
        ]
      }
    ]
  }
}
```

`timeout`は秒単位で指定します。上記の例では5分（300秒）に設定しています。

**デフォルトのタイムアウトは30秒**なので、大規模なプロジェクトでは適宜調整してみてください。

特に Docker コンテナを起動したり、何らかのマイグレーションを実行したりする場合は、タイムアウト時間を長めに設定しておくと良いでしょう。

## 使用時の注意点

SessionStartフックは便利ですが、いくつか気をつけたいポイントがあります。

まず、**実行時間**について考えてみましょう。初期化処理が長すぎると、セッション開始のたびに待ち時間が発生してしまいます。本当に毎回必要な処理だけを登録し、時間のかかる処理は`timeout`を適切に設定するのがコツです。

次に、**エラーハンドリング**も大切なポイントです。フックが失敗してもセッション自体は開始されるという仕様になっています。これは一見便利ですが、失敗に気づきにくいという側面もあるんですよね。重要な処理については、スクリプト内でエラーハンドリングを入れておくと安心です。  

また、ログを出力するようにしておくと、フックが失敗した場合に原因を特定しやすくなります。うまく動かないときは試してみてください。

最後に、**セキュリティ**にも配慮が必要です。フックは自動実行される仕組みなので、**信頼できるコマンドのみを登録する**ことが大切です。プロジェクト設定（`settings.json`）をチームで共有する場合は、コードレビューの対象に含めることをおすすめします。

## フックのエラーを調査する

**フックがエラーになってもセッション自体は正常に開始される**ので、致命的な問題にはなりません。ただし、意図した初期化処理が行われていない可能性があるため、エラーが出た場合は原因を調べて対処することをおすすめします。

最もシンプルな確認方法は、**スクリプトを直接実行してみる**ことです。

```
~/Desktop/hooks-test/.claude/hooks/install-node-modules.sh
```

スクリプトが正常に動作するかを手元で確認できます。

加えて、先ほどのスクリプトのように **エラー出力もログファイルにリダイレクト**しておくと、フック経由で実行されたときの挙動も追跡できます。`npm install >> "$LOG_FILE" 2>&1` のように `2>&1` を付けることで、標準エラー出力もログに残せます。

例えば、`package.json` がないディレクトリで `npm install` が実行された場合、以下のようなエラーがログに記録されます。

```
cat ~/Desktop/hooks-test/session-start.log
# Mon 29 Dec 2025 11:10:21 JST: node_modules が見つかりません。npm install を実行します...
# npm error code ENOENT
# npm error syscall open
# npm error path /Users/tomada/Desktop/hooks-test/package.json
# npm error errno -2
# npm error enoent Could not read package.json: Error: ENOENT: no such file or directory
```

フックがうまく動かないときは、このログファイルをチェックしてみてください。

Hooksの終了コードによる制御やエラーハンドリングの詳細については、別な記事で解説しています。

[Claude Code Hooksの終了コードによる制御：ツール実行のブロック](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-exit-codes)

## まとめ

SessionStartフックを活用すれば、開発環境のセットアップを完全に自動化できます。

- **セッション開始時に自動実行**される
- **複数コマンド**を順番に実行できる
- **環境変数の永続化**には`$CLAUDE_ENV_FILE`を使う
- **タイムアウト設定**で長時間処理にも対応可能

毎回の初期化作業をフックに任せて、すぐにコーディングに集中できる環境を作ってみてください。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
