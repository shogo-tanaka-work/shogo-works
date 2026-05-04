---
chapter: 31
slug: hooks-basic-setup
title: "Claude CodeのHooks設定方法：/hooksコマンドとshファイル化"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup
fetched_at: 2026-05-03T06:24:30Z
---

# Claude CodeのHooks設定方法：/hooksコマンドとshファイル化

こんにちは、とまだです。

「Hooksを設定したいけど、JSONの書き方がよく分からない...」「設定ファイルを直接編集するのが不安」と感じていませんか？

今回伝えたいことの要点は、`/hooks`**コマンドを使えば対話的にHooksを設定でき、shファイル化で可読性と保守性を高められる**ということです。一言で言えば、Hooks設定のハードルを下げる実践的なテクニックを紹介します。

この記事では、Hooksの設定構造から対話的な設定方法、shファイル化のメリット、テスト方法までを解説します。

## 忙しい人のために要約

この記事のポイントを 4 つにまとめました。

- `/hooks` コマンドで対話的に Hooks を設定できる
- settings.json の基本構造はイベント名・マッチャー・コマンドの 3 要素
- sh ファイル化で JSON エスケープの複雑さを回避できる
- まずは簡単な echo で動作確認してから、より複雑な処理に進むのがおすすめ

## Hooks設定の基本構造

Hooksは、settings.jsonの`hooks`プロパティに記述します。まず基本構造を確認しておきましょう。

```
{
  "hooks": {
    "イベント名": [
      {
        "matcher": "マッチャーパターン",
        "hooks": [
          {
            "type": "command",
            "command": "実行するコマンド",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

各フィールドの役割は以下のとおりです。

| フィールド | 説明 |
| --- | --- |
| イベント名 | PreToolUse、PostToolUseなどのイベントタイプ |
| matcher | 対象を絞り込む正規表現パターン（省略可） |
| hooks | 実行するフックの配列 |
| type | `"command"`を固定で指定 |
| command | 実行するシェルコマンド |
| timeout | タイムアウト秒数（省略時はデフォルト値） |

「構造は分かったけど、実際にどう書けばいいの？」と思った方もいるかもしれません。次のセクションで、対話的に設定する方法を紹介します。

## /hooksコマンドで対話的に設定する

JSONを直接編集するのは、エスケープ処理などでミスしやすいものです。そこで活用したいのが`/hooks`**スラッシュコマンド**です。

Claude Codeで以下のコマンドを実行してみてください。

```
/hooks
```

このコマンドを実行すると、対話形式でHooksを設定できます。つまり、イベントタイプの選択、マッチャーの指定、コマンドの入力まで、順を追って進められるのが特徴なのです。

```
> /hooks
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Hook Configuration                                                                                │
│                                                                                                   │
│ Hooks are shell commands you can register to run during Claude Code processing. Docs              │
│                                                                                                   │
│                                                                                                   │
│ • Each hook event has its own input and output behavior                                           │
│ • Multiple hooks can be registered per event, executed in parallel                                │
│ • Any changes to hooks outside of /hooks require a restart                                        │
│ • Timeout: 60 seconds                                                                             │
│                                                                                                   │
│ ⚠ Hooks execute shell commands with your full user permissions. This can pose security risks, so  │
│  only use hooks from trusted sources.                                                             │
│ Learn more: https://code.claude.com/docs/en/hooks                                                 │
│                                                                                                   │
│                                                                                                   │
│ Select hook event:                                                                                │
│ ❯ 1.  PreToolUse - Before tool execution                                                          │
│   2.  PostToolUse - After tool execution                                                          │
│   3.  PostToolUseFailure - After tool execution fails                                             │
│   4.  Notification - When notifications are sent                                                  │
│ ↓ 5.  UserPromptSubmit - When the user submits a prompt                                           │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
   Enter to select · Esc to exit
```

ただ、途中でマッチャーやコマンド指定などを直接入力する必要があります。

はじめて Hooks を使う方にとっては「何を入力すればいいかわからない」という状況になってしまいます。

そのため、むしろ settings.json に直接記述したり、コマンドも sh や Python スクリプトで記述した方が、より直感的に設定できると思います。  

このあたりも概要だけ把握しておけば、あとは Claude Code 自身に任せることもできます。

まずは本記事＋関連記事を読んで、設定方法を理解だけしておくことをおすすめします。

Hooksの基本的な概念については、別な記事で詳しく解説しています。

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

## shファイル化のすすめ

先ほど出した例の通り、Hooks で実行したいコマンドは settings.json に直接記述することもできます。

```
"command": "実行するコマンド",
```

ただ、複雑なコマンドになってくると JSON 内でエスケープ（正しく認識されるように調整）するのが大変になります。

そこでおすすめなのが、**コマンドをshファイルに切り出す**方法です。

!

ここでは sh ファイル（いわゆるシェルスクリプト）を例に説明しますが、Python スクリプトや Node.js スクリプトなどでも同様の方法で設定できます。

### shファイル化のメリット

shファイル化には、主に3つのメリットがあります。

まず、**可読性が向上する**点が挙げられます。なぜなら、シェルスクリプトとして記述すれば、コメントも自由に書けますし、複数行にわたる処理も見やすくなるからです。

次に、**テストが簡単になる**ことも見逃せません。というのも、shファイル単体で実行できるため、Hooks経由ではなく直接動作確認できるわけです。

そして、**再利用しやすい**という利点もあります。具体的には、同じスクリプトを複数のイベントから呼び出したり、他のプロジェクトでも使い回したりできます。

一方で、shファイルを管理するファイルが増えるという側面もあります。とはいえ、設定が複雑になるほどメリットの方が大きくなるため、トレードオフを考慮して選択するとよいでしょう。

### まずは簡単な例から試してみよう

まずはシンプルな例で動作を確認してみましょう。ここでは `echo` を使って、Hooks が正しく動作しているかを確認します。

まず、テスト用のフォルダ構造を作成します。

```
mkdir -p ~/Desktop/hooks-test/.claude/hooks # .claude/hooks ディレクトリを作成
cd ~/Desktop/hooks-test # ディレクトリに移動
touch ~/Desktop/hooks-test/.claude/settings.json # settings.json を作成
```

次に、settings.json に以下のような設定を追加します。

```:~/Desktop/hooks-test/.claude/settings.json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "~/Desktop/hooks-test/.claude/hooks/hello.sh"
          }
        ]
      }
    ]
  }
}
```

この設定では `Write` または `Edit` ツールが実行された後に、`~/Desktop/hooks-test/.claude/hooks/hello.sh` が実行されます。  

つまり、ファイルを作成または編集した後に、これから作るスクリプトが実行されることになります。

続いて、hooks ディレクトリ内に最小限の sh ファイルを作成します。

```:~/Desktop/hooks-test/.claude/hooks/hello.sh
#!/bin/bash

echo "Hooks が実行されました！" >> ~/Desktop/hooks-test/hooks.log
```

これは、「Hooks が実行されました！」というメッセージを `hooks.log` ファイルに書き込むだけのシンプルなスクリプトです。

sh ファイルに実行権限を付与するのを忘れずに。

```
chmod +x .claude/hooks/hello.sh
```

最終的なフォルダ構造は以下のようになります。

```
~/Desktop/hooks-test/
├── .claude/
│   └── settings.json    # Hooks の設定
└── hooks/
    └── hello.sh         # 実行されるスクリプト
```

これで準備完了です。Claude Code を `~/Desktop/hooks-test` ディレクトリで起動し、適当なファイルを作成してみましょう。

まずは Claude Code を起動します。

```
claude
```

例えば、以下のようなプロンプトを送信してみましょう。とにかくファイルを作成したり、編集したりできればOKです。

```
> test.txt というファイルを作成してください。
```

すると Hooks `hooks.log` ファイルが作成されていることから、Hooks が実行されたことを確認できます。

```
cat ~/Desktop/hooks-test/hooks.log
# Hooks が実行されました！
```

このように、まずは簡単な echo で動作確認してから、より複雑な処理に進むのがおすすめです。

より実践的な Hooks の活用例については、別な記事で詳しく解説しています。

[Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pre-post-tool-use-hooks)

### 補足：Hooks にエラーがある場合のログ

例えば Hooks で実行するスクリプトの指定が間違っている場合、以下のようなメッセージが表示されます。

```
  ⎿  PostToolUse:Write hook error
```

このように、`PostToolUse:Write hook error` というメッセージが表示されていますので、Hooks で実行するスクリプトの指定が間違っていることがわかります。

どこに問題があるのかまでは表示されないのが辛いところですが、まずは `settings.json` の書き方から確認するようにしましょう。

よくあるのはファイルパスの指定が間違っていたり、コマンドの実行権限がないなどです。

特に「相対パスを指定している」という間違いは多いですので、注意しましょう。

また、スクリプトの実行に成功しても、そのスクリプトの終了コードが0でない場合（エラーがある場合）も、同じように `PostToolUse:Write hook error` というメッセージが表示されます。

その場合はシェルスクリプト（`.sh`ファイル）を直接実行し、エラーが起きているかどうかを確認することで原因を特定できます。

1. シェルスクリプト（`.sh`ファイル）を直接実行
2. エラーが起きているかどうかを確認
3. エラーが起きていなければ `settings.json` の書き方を確認

Hooks のエラーハンドリングについては、別な記事で詳しく解説しています。

[Claude Code Hooksの終了コードによる制御：ツール実行のブロック](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-exit-codes)

## まとめ

この記事では、Hooks の設定方法について解説しました。

- `/hooks` コマンドで対話的に Hooks を設定できる
- settings.json の基本構造はイベント名・マッチャー・コマンドの 3 要素
- sh ファイル化で JSON エスケープの複雑さを回避できる
- まずは簡単な echo で動作確認してから、より複雑な処理に進むのがおすすめ

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
