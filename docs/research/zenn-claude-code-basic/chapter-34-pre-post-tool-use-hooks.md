---
chapter: 34
slug: pre-post-tool-use-hooks
title: "Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pre-post-tool-use-hooks
fetched_at: 2026-05-03T06:24:59Z
---

# Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加

こんにちは、とまだです。

「Claude Codeでファイルを編集するたびに、毎回手動でフォーマットを実行するのが面倒...」と感じていませんか？あるいは「危険なコマンドを実行する前に、ワンクッション置いて確認したい」というニーズがあるかもしれません。

今回伝えたいことの要点は、**PreToolUse/PostToolUseフックを活用すれば、こうした手作業を自動化できる**ということです。一言で言えば、ツール実行の前後に任意のコマンドを自動実行する仕組みです。

この記事では、PreToolUseフックとPostToolUseフックの違いから、matcherの指定方法、そして実践的な設定例までを解説します。読み終わる頃には、自分のプロジェクトに合わせたフック設定ができるようになるでしょう。

## 忙しい人のために要約

この記事のポイントを5つにまとめました。

- **PreToolUseフック**はツール実行前に発火し、事前チェックや警告表示に使える
- **PostToolUseフック**はツール実行後に発火し、自動フォーマットやlintに最適
- **matcher**でどのツール（Bash、Edit、Write等）に対して発火するか指定できる
- ワイルドカード（`*`）を使って柔軟なパターンマッチングが可能
- settings.jsonに設定を記述し、プロジェクト単位または個人単位で管理できる

## PreToolUseフックとは

**PreToolUseフック**は、Claude Codeがツール（Bash、Edit、Write等）を実行する直前に発火するフックです。ツールが実行される前に割り込んで事前処理を行えるわけです。

Hooks機能全体の概要については、別な記事で詳しく解説しています。

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

PreToolUseフックには、主に以下の3つの用途があります。

- 危険なコマンド実行前の**警告表示**
- 特定のファイル変更前の**バックアップ作成**
- 実行条件の**チェックと制御**

たとえば、「rmコマンドを実行しようとしているけど、本当に大丈夫？」といった確認を自動化できるのです。つまり、この仕組みは「ガードレール」としての役割を果たすと考えてください。

## PostToolUseフックとは

一方、**PostToolUseフック**は、Claude Codeがツールを実行した直後に発火するフックです。ツールの実行結果を受けて後処理を自動実行できるため、非常に便利です。

PostToolUseフックには、主に以下の3つの用途があります。

- ファイル編集後の**自動フォーマット**
- コード変更後の**lint実行**
- 変更ログの**記録**

具体的には、Claude Codeがコードを編集するたびに自動でPrettierやESLintを実行する、といったワークフローが実現できるのです。コード品質を自動で担保してくれるから、手動での確認作業が大幅に減ります。

!

PreToolUse/PostToolUseフックは**メインエージェントのみ**で発火します。サブエージェント（Taskツールで起動されるエージェント）がツールを実行しても、これらのフックは発火しない点に注意してください。

サブエージェント完了時に処理を行いたい場合は、SubagentStopフックを使用するとよいでしょう。

[Claude CodeのSubagentStopフック：サブエージェント完了時の処理設定](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/subagent-stop-hook)

## matcherでツールを指定する

フックをどのツールに対して発火させるかは、**matcher**で指定します。よく使われるのは`"Bash"`、`"Edit"`、`"Write"`といったツール名です。

| matcher | マッチするツール |
| --- | --- |
| `"Bash"` | すべてのBash実行 |
| `"Edit"` | すべてのEdit操作 |
| `"Write"` | すべてのWrite操作 |
| `"Edit|Write"` | EditまたはWrite |

また、パイプ記号（`|`）でOR条件を指定できます（例：`"Edit|Write"`）。マッチャーの詳細は別な記事で詳しく解説しています。

[Claude CodeのHooksマッチャー詳細：ワイルドカードとパターン指定](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-matcher)

## 実践例：Prettier でファイルを自動フォーマット

動作確認ができたところで、より実践的な例を見てみましょう。  

（JavaScript 系のプロジェクトでの使用例ですので、読んでいただくだけでも大丈夫です。

Hooksの基本的な設定方法については、別な記事で詳しく解説しています。

[Claude CodeのHooks設定方法：/hooksコマンドとshファイル化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup)

### フォーマット用のスクリプトを作成

ここでは、ファイル編集後に Prettier（コードを綺麗に整形するツール）で自動フォーマットする Hooks を作成します。

まず、以下のような sh ファイルを作成します。

場所はユーザーレベルの `~/Desktop/hooks-test/.claude/hooks/format-on-edit.sh` とします。

```
#!/bin/bash
# ~/Desktop/hooks-test/.claude/hooks/format-on-edit.sh
# PostToolUseを使い、編集されたファイルをフォーマットするHooksスクリプト

set -e

# 標準入力からJSONを読み取り、ファイルパスを抽出
file_path=$(jq -r '.tool_input.file_path // empty')

# ファイルパスが空の場合は終了
[[ -z "$file_path" ]] && exit 0

# ファイルが存在しない場合は終了
[[ ! -f "$file_path" ]] && exit 0

# 対象拡張子をチェック
case "$file_path" in
  *.ts|*.tsx|*.js|*.jsx|*.json)
    npx prettier --write "$file_path" 2>/dev/null || true
    ;;
esac
```

シンプルな hello.sh と比べると複雑に見えますが、やっていることは「編集されたファイルのパスを取得して、対象の拡張子なら Prettier を実行する」というだけです。

また、`chmod +x ~/Desktop/hooks-test/.claude/hooks/format-on-edit.sh` で実行権限を付与しておきましょう。

```
chmod +x ~/Desktop/hooks-test/.claude/hooks/format-on-edit.sh
```

### settings.json にフックを設定

次に、settings.json からこのスクリプトを呼び出します。

`~/Desktop/hooks-test/.claude/settings.json` に以下のような設定を追加します。

`matcher` には Claude Code の処理に関わるものを指定します。ここでは、ファイルの作成（Write）と編集（Edit）を対象にしています。  

（詳しくは別記事で解説します）

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "~/Desktop/hooks-test/.claude/hooks/format-on-edit.sh"
          }
        ]
      }
    ]
  }
}
```

!

shファイルを使う場合は、**絶対パスを指定する**ことが推奨されています。相対パスだと、カレントディレクトリによって動作が変わる可能性があるためです。

ここまでの設定によって、Claude Code の Hooks が以下のような挙動をします。

1. Claude Code がファイルを編集する
2. Hooks のマッチャーによって検知される
3. `~/Desktop/hooks-test/.claude/hooks/format-on-edit.sh` が実行される
4. sh ファイルの中身が実行される
5. Prettier でフォーマットが実行される
6. ファイルが保存される

これで、ファイル編集後に自動的にフォーマットが実行されるようになります。

### 実際に試してみる

実際に試してみましょう。`~/Desktop/hooks-test` ディレクトリで、フォーマット対象のファイルを Claude Code を使わずに作成してみます。

ただし、最初はあえてフォーマットされていないようなコードを作成してみましょう。

`~/Desktop/hooks-test/test.js` に以下のようなコードを作成してみましょう。

```
function test() {
    let a  = 1; // インデントが崩れているようなコード

  console.log(a);

  return    a
}
```

そして、Claude Code を起動して、ファイルを編集してみます。

```
> test.js というファイルの末尾に test() という1行を追加してください。
```

すると `test.js` ファイルに `test()` という1行が追加されつつ、Prettier でフォーマットが実行されます。

実際、`test.js` ファイルは以下のようなコードフォーマットされていました。無駄な改行やインデントが削除されています。

```
function test() {
  let a = 1;

  console.log(a);

  return a;
}

test();
```

フォーマットは分かりやすい例ですが、他にもテストコードを実行したり、Lintコードを実行したり、といった用途でも活用できます。

### 補足：Hooks のスクリプトが実行されたことの確認

先ほどの Prettier フォーマットの例ですと、Claude Code のログ上では、以下のようなメッセージが表示されていました。

```
  ⎿  Running PostToolUse hooks… (1/2 done)
```

`1/2 done` というメッセージが表示されていますので、以下2つの Hooks スクリプトが実行されたことがわかります。

1. 最初に設定したログ作成のスクリプト（`hello.sh`）
2. 今回設定した Prettier フォーマットのスクリプト（`format-on-edit.sh`）

ちなみに筆者が検証した限り、先ほどのログ作成のスクリプトは `hello.sh` が実行されたときには特に `Running PostToolUse hooks…` というメッセージが表示されていませんでした。

詳細な仕様は不明ですが、フォーマットのように実行から完了まで数秒程度の時間がかかるような処理であれば、`Running PostToolUse hooks…` というメッセージが表示されるのかもしれません。

Hooks が実行されたかどうかの判断においては、参考程度にすると良いでしょう。

## よくある質問

「PreToolUseとPostToolUseの違いは何？」という疑問が生じるかもしれません。

簡単に言うと、PreToolUseは「**実行前**」、PostToolUseは「**実行後**」に発火するという違いです。事前チェックや警告表示にはPreToolUseを、後処理（フォーマット、lint等）にはPostToolUseを使い分けてください。

PreToolUseフックで危険なコマンドをブロックする実践的な方法については、別な記事で詳しく解説しています。

[Claude Code Hooksで危険なコマンドをブロック！安全なAI駆動開発を実現](https://zenn.dev/tmasuyama1114/articles/claude_code_hooks_guard_bash_command)

「すべてのツールにフックを設定したい」という場合はどうでしょうか？matcherに空文字列（`""`）を指定すれば可能です。ただし、パフォーマンスへの影響を考慮して、**必要なツールだけに限定することをおすすめします**。過度なフック設定はレスポンスの低下につながる可能性があるからです。

## まとめ

この記事では、PreToolUse/PostToolUseフックについて解説してきました。

- **PreToolUseフック**はツール実行前に発火し、警告表示や事前チェックに使える
- **PostToolUseフック**はツール実行後に発火し、自動フォーマットやlintに最適
- matcherでどのツールに対して発火するか**柔軟に指定できる**

まずは「編集後に自動フォーマット」から始めてみてください。自分のワークフローに合わせて少しずつカスタマイズしていくとよいでしょう。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
