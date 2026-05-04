---
chapter: 37
slug: hooks-matcher
title: "Claude CodeのHooksマッチャー詳細：ワイルドカードとパターン指定"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-matcher
fetched_at: 2026-05-03T06:25:27Z
---

# Claude CodeのHooksマッチャー詳細：ワイルドカードとパターン指定

こんにちは、とまだです。

「フックを設定したけど、思ったように発火しない...」「特定のコマンドだけに反応させたいのに、どう書けばいいかわからない」と感じていませんか？

今回伝えたいことの要点は、**マッチャーの書き方を覚えれば、フックの発火条件を自在にコントロールできる**ということです。一言で言えば、マッチャーはフックの「フィルター」のようなものです。

この記事では、Claude Codeのフックにおけるマッチャーの詳細な使い方を解説します。読み終わる頃には、自分のワークフローに合わせたマッチャーを設計できるようになるでしょう。

Hooksの基本的な概念や全体像については、別の記事で解説しています。

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

## 忙しい人のために要約

この記事のポイントを5つにまとめました。

- マッチャーはフックの発火条件を指定する文字列
- 空文字列 `""` を使うとすべてのツールにマッチ
- ツール名のみ（`"Bash"`, `"Edit"` など）で該当ツールの処理すべてにマッチ
- パイプ記号（`|`）でOR条件を指定可能（例: `Edit|Write`）

## マッチャーとは

マッチャー（matcher）は、**フックがどの条件で発火するかを指定する文字列**です。

つまり、`settings.json` のフック設定において、イベントの絞り込み条件として機能します。

まず、以下の設定例で構造を確認しましょう。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm run format"
          }
        ]
      }
    ]
  }
}
```

この例では、`matcher` に `"Edit"` を指定しています。Editツール（ファイル編集）が実行された後に、`npm run format` が自動実行されるわけです。

## 基本的なマッチャーパターン

マッチャーには**5つの基本パターン**があります。目的に応じて使い分けてください。

### 空文字列ですべてのツールにマッチ

空文字列 `""` を指定すると、すべてのツール実行にマッチします。これは最も緩い条件で、**あらゆるツール実行に反応させたい場合**に使用してください。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'ツールが実行されました'"
          }
        ]
      }
    ]
  }
}
```

例えば、Stopフックで完了通知を設定する場合など、条件を限定しない場面で役立ちます。

!

公式ドキュメントには記載がないようですが、検証ではアスタリスク `*` でも同様にすべてにマッチすることを確認しました。

どちらでも動く可能性はありますが、公式ドキュメントに記載のある空文字列 `""` を使用することをおすすめします。

[https://code.claude.com/docs/ja/hooks#構造](https://code.claude.com/docs/ja/hooks#%E6%A7%8B%E9%80%A0)

### ツール名でマッチ

特定のツール名を指定すると、そのツールのすべての操作にマッチします。以下の表で主なツール名を確認してください。

| マッチャー | 説明 |
| --- | --- |
| `"Bash"` | コマンドを実行するとき（`npm install` など） |
| `"Edit"` | 既存のファイルを編集するとき |
| `"Write"` | 新しいファイルを作成するとき |
| `"Read"` | ファイルの内容を読み取るとき |

具体的な設定例を見てみましょう。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Bashコマンドが実行されました'"
          }
        ]
      }
    ]
  }
}
```

この設定は、**Bashツールのあらゆる実行にマッチします**。

例：

- `npm install`
- `git commit`
- `rm -rf`
- `mkdir` etc...

### OR条件で複数ツールにマッチ

パイプ記号（`|`）を使うと、**複数のツールをOR条件で指定**できます。

ファイルの作成・編集に関わる操作に Hooks を動作させたいときに便利です。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "npm run format"
          }
        ]
      }
    ]
  }
}
```

この設定は、Edit、Writeのいずれかが実行された場合にマッチします。同じ処理を複数のツールに適用したい場合に便利です。

PostToolUseフックの基本的な設定方法については、別の記事で詳しく解説しています。

[Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pre-post-tool-use-hooks)

### コマンドパターンでマッチ

Bashツールの場合、実行コマンドのパターンを指定できるのが特徴です。構文は `Bash(コマンドパターン)` となっていて、より細かい条件を設定できるわけです。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Bash(npm install)",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'npm installが実行されました'"
          }
        ]
      }
    ]
  }
}
```

この設定は `npm install` コマンドの**完全一致でのみマッチ**するため、`npm install lodash` のように引数が付いた場合はマッチしません。この違いは重要なので覚えておくと良いでしょう。

### SessionStart用のマッチャー

SessionStartフックでは、**matcherを省略することも、特定のイベントを指定することも可能**です。省略した場合は、すべてのセッション開始イベントでフックが発火します。

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

特定のイベントだけに反応させたい場合は、以下の4つのマッチャーを使用できます。

| マッチャー | 発火タイミング |
| --- | --- |
| `startup` | 新規セッション起動時 |
| `resume` | `--resume`、`--continue`、`/resume` によるセッション再開時 |
| `clear` | `/clear` コマンド実行時 |
| `compact` | 自動または手動コンパクト実行時 |

[https://code.claude.com/docs/ja/hooks#sessionstart](https://code.claude.com/docs/ja/hooks#sessionstart)

SessionStartフックの実践的な活用方法については、別の記事で詳しく解説しています。

[Claude CodeのSessionStartフックで初期化を自動化：npm installの自動実行](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/session-start-hook)

たとえば、新規起動時のみ `npm install` を実行したい場合は以下のように設定します。

!

**Stop / SubagentStop フックについて**

StopフックとSubagentStopフックでは、**matcherフィールド自体を省略**します。これらのフックにはマッチャーの概念がないためです。

```
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "startup",
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

## Bashコマンドのマッチング

Bashコマンドに対してマッチャーを設定する場合、**ツール名 `Bash` のみでマッチ**させ、スクリプト内でコマンドの内容をチェックするのが確実な方法です。

危険なBashコマンドをブロックする実践的なHooksの実装例については、別の記事で詳しく解説しています。

[Claude Code Hooksで危険なコマンドをブロック！安全なAI駆動開発を実現](https://zenn.dev/tmasuyama1114/articles/claude_code_hooks_guard_bash_command)

!

パーミッション設定では `Bash(npm:*)` のようなプレフィックスマッチングが使えます。

一方、**Hooksのマッチャーではこの書き方は動作しない**ので、ご注意ください。

- ✅ permissions: `"Bash(npm:*)"` → 動作する
- ❌ Hooks matcher: `"Bash(npm:*)"` → 動作しなかった

※2026年1月の検証時点

### Bashツール全体にマッチさせる

すべてのBashコマンドにマッチさせる場合は、単純に `Bash` を指定します。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Bashコマンドが実行されました'"
          }
        ]
      }
    ]
  }
}
```

### スクリプト内でコマンドを判別する

特定のコマンド（例：npmコマンド）だけに反応させたい場合は、フックスクリプト内でコマンドの内容をチェックします。

標準入力から読み取る書き方は難しく感じるかもしれませんが、コピペして使えばOKです。

```
#!/bin/bash
# npm-check.sh - npmコマンドのみ処理

# 標準入力からJSONを読み取り、コマンドを抽出
input=$(cat)
command=$(echo "$input" | jq -r '.tool_input.command // empty')

# npmで始まるコマンドかチェック
if [[ "$command" == npm* ]]; then
    echo "npmコマンドが実行されました: $command"
fi

exit 0
```

settings.json では `Bash` でマッチさせ、このスクリプトを呼び出します。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/npm-check.sh"
          }
        ]
      }
    ]
  }
}
```

Hooksの基本的な設定方法とshファイル化のテクニックについては、別の記事で詳しく解説しています。

[Claude CodeのHooks設定方法：/hooksコマンドとshファイル化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup)

### よく使うコマンドチェックパターン

スクリプト内で使えるパターンマッチの例です。

| チェック対象 | 条件式 |
| --- | --- |
| npmコマンド | `[[ "$command" == npm* ]]` |
| gitコマンド | `[[ "$command" == git* ]]` |
| rmコマンド | `[[ "$command" == rm* ]]` |
| 危険なrm -rf | `[[ "$command" =~ rm.*-[rf] ]]` |

## マッチャー設定時の注意点

マッチャーを設定する際に知っておくべき**3つの注意点**を解説します。

### 大文字小文字の区別

マッチャーは**大文字小文字を区別する**という特徴があります。以下の例を確認してください。

- ✅ `"Bash"` - 正しい
- ❌ `"bash"` - マッチしない
- ✅ `"Edit"` - 正しい
- ❌ `"edit"` - マッチしない

ツール名の先頭は大文字で記述する点がポイントです。小文字にするとマッチしなくなるため、この点は覚えておくと良いでしょう。

[https://code.claude.com/docs/ja/hooks#基本的なトラブルシューティング](https://code.claude.com/docs/ja/hooks#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E3%83%88%E3%83%A9%E3%83%96%E3%83%AB%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0)

### パターンの優先順位

同じイベントタイプに複数のマッチャーを設定した場合、**配列の順番通りに評価される**仕組みになっています。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [{ "type": "command", "command": "echo 'Edit実行'" }]
      },
      {
        "matcher": "Edit|Write",
        "hooks": [{ "type": "command", "command": "echo 'Edit または Write'" }]
      }
    ]
  }
}
```

この設定では、Edit ツールを実行すると「Edit実行」と「Edit または Write」の両方が表示されます。つまり、**マッチしたすべてのフックが順に実行される**仕組みです。

複数のマッチャーが意図せず発火しないよう、この動作を理解しておくと良いでしょう。

Hooksの終了コードによる実行制御については、別の記事で詳しく解説しています。

[Claude Code Hooksの終了コードによる制御：ツール実行のブロック](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-exit-codes)

### 正規表現のサポート

Hooksのマッチャーは**正規表現をサポート**しています。そのため、より柔軟なパターン指定が可能です。

| パターン | 説明 |
| --- | --- |
| `Edit|Write` | EditまたはWriteにマッチ |
| `Notebook.*` | Notebookで始まるツールすべてにマッチ |

すべてのツールにマッチさせたい場合は、`*` を使用してください。

## まとめ

この記事では、フックのマッチャーについて解説しました。

- **マッチャー**はフックの発火条件を指定
- **空文字列**ですべてにマッチ、**ツール名**で絞り込み
- **パイプ記号（`|`）** でOR条件を指定可能
- **正規表現**がサポートされている
- 大文字小文字の区別に注意が必要

まずはシンプルなマッチャーから始めて、慣れてきたらOR条件やワイルドカードを活用していくのが良いのでしょう。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
