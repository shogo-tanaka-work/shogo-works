---
chapter: 40
slug: user-prompt-submit-hook
title: "Claude CodeのUserPromptSubmitフックでプロンプトを加工する：コンテキストの追加と機密情報のブロック"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/user-prompt-submit-hook
fetched_at: 2026-05-03T06:25:56Z
---

# Claude CodeのUserPromptSubmitフックでプロンプトを加工する：コンテキストの追加と機密情報のブロック

こんにちは、とまだです。

「Claude Codeにプロンプトを送信する前に、何か追加したい情報がある」「うっかりAPIキーを送信してしまいそうで心配」と思ったことはありませんか？

今回伝えたいことの要点は、**UserPromptSubmitフックを使えば、ユーザーの入力プロンプトを加工できる**ということです。追加の指示をコンテキストに注入したり、機密情報をブロックしたりできます。

この記事では、UserPromptSubmitフックの基本的な仕組みから、コンテキストの追加、機密情報のブロックまで解説していきます。読み終わる頃には、ユーザー入力を自在に加工できるようになっているはずです。

## 忙しい人のために要約

この記事のポイントを4つにまとめました。

- **UserPromptSubmitフック**はユーザーがプロンプトを送信したときに発火する
- stdinから**JSON形式**でプロンプトを受け取り、`prompt`フィールドでユーザー入力を取得
- stdoutに出力した内容が**コンテキストに追加**される
- APIキーなどの機密情報を検知して**ブロック**できる

## UserPromptSubmitフックとは

**UserPromptSubmitフック**は、ユーザーがClaude Codeにプロンプトを送信したときに自動実行されるフックです。

ユーザーの入力を受け取り、加工したり、検証したり、追加情報を付与したりできるのが特徴になります。他のフックと異なり、**ユーザーの入力そのものを扱える**という点で独自の立ち位置にあるわけです。

UserPromptSubmitフックの主な役割は2つあります。

| 役割 | 説明 |
| --- | --- |
| **追加** | プロンプトにコンテキストや追加指示を注入する |
| **ブロック** | 機密情報を検知してブロックする |

!

UserPromptSubmitフックは**マッチャー（パターン指定）を使用しない**点が他のフックとは異なります。SessionStartフックと同様に、プロンプト送信時に毎回実行されます。

フックの基本的な仕組みについて詳しく知りたい方は、こちらの記事をご覧ください。

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

## stdinからJSONを受け取る

UserPromptSubmitフックは、他のフックと異なり**stdinからJSON形式でデータを受け取ります**。

「stdin？JSON？」と思った方もいるかもしれませんので、簡単に説明しておきましょう。

### stdinとは

**stdin（標準入力）** は、プログラムにデータを渡すための入り口のようなものです。

普段ターミナルでコマンドを実行するとき、パイプ（`|`）を使ってデータを渡すことがありますよね。

```
echo "Hello" | cat
```

この例では、`echo`の出力が`cat`の「標準入力」に渡されています。UserPromptSubmitフックでも同様に、Claude Codeがスクリプトの標準入力にデータを渡してくれる仕組みになっているわけです。

### JSONとは

**JSON（JavaScript Object Notation）** は、データを構造化して表現するための形式です。波括弧 `{}` で囲まれ、`"キー": "値"` のペアでデータを表現します。

UserPromptSubmitフックでは、以下のようなJSONデータが渡されてきます。

```
{
  "session_id": "abc123",
  "prompt": "こんにちは、今日の天気を教えて",
  "cwd": "/Users/username/project",
  "hook_event_name": "UserPromptSubmit"
}
```

この中で最も重要なのは `prompt`**フィールド**で、ここにユーザーが入力したテキストが格納されています。

### jqコマンドでJSONを解析する

JSONからデータを取り出すには、`jq`**コマンド**を使うのが便利です。`jq`はJSONを操作するための専用ツールで、macOSでは`brew install jq`でインストールできます。

```
# stdin から JSON を読み込み、prompt フィールドを抽出
prompt=$(cat | jq -r '.prompt')
```

このコマンドを分解して説明すると、以下のようになります。

| 部分 | 説明 |
| --- | --- |
| `cat` | 標準入力からデータを読み込む |
| `|` | パイプで次のコマンドにデータを渡す |
| `jq -r '.prompt'` | JSONから`prompt`フィールドの値を取り出す（`-r`は生の文字列で出力） |
| `prompt=$(...)` | 結果を変数`prompt`に格納する |

「なぜ環境変数ではなくJSONなのか？」と疑問に思う方もいるかもしれません。これは、プロンプトに改行や特殊文字が含まれる可能性があるため、JSONで安全に受け渡す設計になっているのではないでしょうか。

!

`jq`がインストールされていない場合は、以下のコマンドでインストールしてください。

```
# macOS
brew install jq

# Ubuntu/Debian
sudo apt-get install jq
```

## 基本的な設定方法

UserPromptSubmitフックの設定は、設定ファイルの`hooks`セクションに記述していきます。基本構造は以下の通りです。

Hooksの設定方法の基本については、別な記事で詳しく解説しています。

[Claude CodeのHooks設定方法：/hooksコマンドとshファイル化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup)

```
{
  "hooks": {
    "UserPromptSubmit": [
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

設定のポイントは以下の通りです。

| 項目 | 説明 |
| --- | --- |
| **matcher** | SessionStartと同様に省略する |
| **type** | `"command"`を指定してシェルコマンドを実行 |
| **command** | 実行するコマンドを記述 |
| **stdout** | 出力した内容がコンテキストに追加される |

## まずは簡単な例から試してみよう

いきなり複雑な設定を試すよりも、まずはシンプルな例で動作を確認してみましょう。

前回の記事で使用した `~/Desktop/hooks-test` ディレクトリを引き続き使用します。まだ作成していない場合は、以下のコマンドで作成してください。

```
mkdir -p ~/Desktop/hooks-test/.claude/hooks
cd ~/Desktop/hooks-test
```

まず、プロンプトをログに記録するスクリプトを作成していきましょう。

```:.claude/hooks/log-prompt.sh
#!/bin/bash

# stdin から JSON を読み込み、prompt フィールドを抽出
prompt=$(cat | jq -r '.prompt')

# ログファイルに記録
echo "$(date): $prompt" >> ~/Desktop/hooks-test/prompt.log

exit 0
```

スクリプトに実行権限を付与します。

```
chmod +x ~/Desktop/hooks-test/.claude/hooks/log-prompt.sh
```

次に、`.claude/settings.json` に以下の設定を追加します。

```:~/Desktop/hooks-test/.claude/settings.json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "~/Desktop/hooks-test/.claude/hooks/log-prompt.sh"
          }
        ]
      }
    ]
  }
}
```

では、動作確認してみましょう。`~/Desktop/hooks-test` ディレクトリで Claude Code を起動します。

```
cd ~/Desktop/hooks-test
claude
```

何か質問を入力してみてください（例：「こんにちは」）。

その後、ログファイルを確認してみましょう。先ほどのプロンプトがログファイルに記録されていることが確認できます。  

つまり、UserPromptSubmitフックはプロンプトを受け取り、`log-prompt.sh` スクリプトが実行されていることがわかります。

```
cat ~/Desktop/hooks-test/prompt.log
# Tue Dec 30 08:55:07 CST 2025: こんにちは
```

## 使いどころ1：コンテキストの追加

動作確認ができたところで、より実践的な例を見てみましょう。

一つ目の使いどころは、**追加の指示をコンテキストに注入する**ことです。stdoutに出力した内容はコンテキストに追加されるため、毎回のプロンプトに「注意事項」を付与できます。

たとえば、曖昧な指示には聞き返すよう促すスクリプトを作成してみましょう。

Claude Code では「AskUserQuestion」というツールが用意されており、これを使うとユーザーが選択式で回答できます。こちらを積極的に使うよう、追加のプロンプトを注入するようにしましょう。

```:.claude/hooks/add-guardrail.sh
#!/bin/bash

# stdin を消費
cat > /dev/null

# 追加の指示を出力
echo "ユーザーからのプロンプトが曖昧な場合は、AskUserQuestionツールを使用してユーザーに確認してから作業を進めてください。"

exit 0
```

!

**stdinを消費する `cat > /dev/null` について**

Claude Code は JSON-RPC という通信方式で動いており、リクエストが標準入力（stdin）経由で送られてきます。

`cat > /dev/null` は「送られてきたデータを読み捨てる」処理です。  

これを入れないと、データがバッファに残ったままになり、まれに通信がうまくいかなくなる可能性があります。

**例えるなら**：郵便受けに届いた手紙を取り出さずに放置すると、次の手紙が入らなくなるイメージです。

省略しても動くことが多いですが、**プロトコル上の正しい作法**として入れておくのが無難です。

settings.json は以下のようになります。

```:~/Desktop/hooks-test/.claude/settings.json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "~/Desktop/hooks-test/.claude/hooks/add-guardrail.sh"
          }
        ]
      }
    ]
  }
}
```

この設定により、ユーザーのプロンプトに加えて「曖昧な場合は確認する」というガイドラインがコンテキストに追加されます。Claude Codeは確率論的に動作するため、毎回確認してくれるとは限りませんが、確認頻度は上がるのではないでしょうか。

実際に Claude Code に質問を投げかけた後、Ctrl + o でトランスクリプトを表示すると、以下のようにガイドラインがコンテキストに追加されていることがわかります。

これで、曖昧な点があれば Claude Code が AskUserQuestion ツールを使ってユーザーに確認するようになります。

```
> ログファイルを編集して
  ⎿  ⧉ Selected 1 lines from .claude/hooks/add-guardrail.sh in Cursor
  ⎿ UserPromptSubmit hook succeeded: ユーザーからのプロンプトが曖昧な場合は、AskUserQuestionツールを使用してユーザー
    に確認してから作業を進めてください。

∴ Thinking…

  ユーザーは「ログファイルを編集して」と言っていますが、これは曖昧なリクエストです。どのログファイルを編集するのか、
  どのような編集を行うのかが明確ではありません。

  システムリマインダーにも「ユーザーからのプロンプトが曖昧な場合は、AskUserQuestionツールを使用してユーザーに確認して
  から作業を進めてください。」と書かれています。
```

プロンプトに注入されており、かつそれを Claude Code が理解していることが確認できます。

実際、その後にちゃんと AskUserQuestion ツールが使って私に質問をしてくれました。

```
> ログファイルを編集して
  ⎿  ⧉ Selected 1 lines from .claude/hooks/add-guardrail.sh in Cursor

⏺ リクエストが曖昧なため、確認させてください。

─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
←  ☐ 対象ファイル  ☐ 編集内容  ✔ Submit  →

どのログファイルを編集しますか？ファイルパスを教えてください。

❯ 1. ファイルを探す
     現在のディレクトリからログファイルを検索します
  2. パスを指定
     編集したいログファイルのパスを直接入力します
  3. Type something.
```

個人的に、これが一番おすすめな UserPromptSubmit フックの使いどころです。

もしシェルスクリプトを用意するのが面倒であれば、1行で設定することもできます。追加の文字列を常に挿入する用途であれば、これぐらいでも十分です。

```:~/Desktop/hooks-test/.claude/settings.json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo 'ユーザーからのプロンプトが曖昧な場合は、AskUserQuestionツールを使用してユーザーに確認してから作業を進めてください.'"
          }
        ]
      }
    ]
  }
}
```

## 使いどころ2：機密情報のブロック

二つ目の使いどころは、**機密情報のブロック**です。

開発中にAPIキーやシークレットをプロンプトに含めてしまうことがあるかもしれません。そうした情報がClaude Codeに送信される前に検知してブロックできます。

ちょっと高度なシェルスクリプトになりますが、ご自身でカスタマイズするときには Claude Code に助けてもらえば簡単に作成できます。

```:.claude/hooks/filter-secrets.sh
#!/bin/bash

# stdin から JSON を読み込み、prompt フィールドを抽出
prompt=$(cat | jq -r '.prompt')

# APIキーパターンを検知（OpenAI形式: sk-xxx）
if echo "$prompt" | grep -qE "sk-[a-zA-Z0-9]{20,}"; then
    echo '{"decision": "block", "reason": "APIキーが含まれている可能性があります。機密情報を削除してから再度お試しください。"}'
    exit 0
fi

exit 0
```

JSON形式で`{"decision": "block", "reason": "..."}`を返すと、プロンプトの送信がブロックされ、ユーザーに理由が表示されます。

試しにダミーの API キーをプロンプトで教えてみます。

シェルスクリプトの中では `sk-` から始まる文字列をAPIキーとして検知したらブロックするように設定していたので、以下のようなプロンプトを入力します。

```
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
> APIキーをあなたに教えますね。sk-abcdefghijklmnopqrstuvwxyz123456 です。
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
```

すると、Claude Code に送信される前に適切にブロックされ、シェルスクリプトで設定したメッセージが表示されます。

```
⏺ UserPromptSubmit operation blocked by hook:
  APIキーが含まれている可能性があります。機密情報を削除してから再度お試しください。

  Original prompt: APIキーをあなたに教えますね。sk-abcdefghijklmnopqrstuvwxyz123456 です。
```

これでうっかり API キーを送信してしまうことがなくなります。

終了コードを使ったブロック制御の詳細については、別な記事で詳しく解説しています。

[Claude Code Hooksの終了コードによる制御：ツール実行のブロック](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-exit-codes)

## まとめ

この記事では、**UserPromptSubmitフック**の仕組みと2つの使いどころを解説しました。

- **コンテキストの追加**：追加の指示をプロンプトに注入
- **機密情報のブロック**：APIキーなどの機密情報を検知してブロック

UserPromptSubmitフックを活用すれば、Claude Codeへの入力を事前に加工したり、機密情報の誤送信を防いだりできます。特にコンテキストの追加は、チームでClaude Codeを使う際に統一したルールを適用するのに便利です。

他のフック機能についても学びたい方は、以下の記事もご参照ください。

[Claude CodeのSessionStartフックで初期化を自動化：npm installの自動実行](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/session-start-hook)

[Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pre-post-tool-use-hooks)

[Claude Code Hooksの環境変数活用：プロジェクト情報とファイルパスの取得](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-environment-variables)

本記事が参考になれば幸いです。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
