---
chapter: 35
slug: hooks-exit-codes
title: "Claude Code Hooksの終了コードによる制御：ツール実行のブロック"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-exit-codes
fetched_at: 2026-05-03T06:25:08Z
---

# Claude Code Hooksの終了コードによる制御：ツール実行のブロック

こんにちは、とまだです。

今回伝えたいことの要点は、**PreToolUseフックで終了コード2を返すことで、ツール実行をブロックできる**ということです。一言で言えば、危険な操作を阻止する「ガードレール」を構築できる仕組みです。

この記事では、終了コードの基本から、`rm -rf`（フォルダごと削除）をブロックする実践例までを解説します。

## 忙しい人のために要約

この記事のポイントを3つにまとめました。

- 終了コード **0** は成功で、ツール実行を許可
- 終了コード **2** は**ブロック**で、ツール実行を阻止（PreToolUseのみ）
- それ以外の終了コードはエラー扱い

## この記事で使用するテストディレクトリ

前回の記事で使用した `~/Desktop/hooks-test` ディレクトリを引き続き使用します。  

まだ作成していない方は、以下のコマンドで作成してください。

```
mkdir -p ~/Desktop/hooks-test/.claude
cd ~/Desktop/hooks-test
```

## 終了コードの基本

Hooksで実行されるコマンドは、終了時に「終了コード」という数値を返します。この終了コードによってClaude Codeの動作が変わります。

| 終了コード | 意味 | 動作 |
| --- | --- | --- |
| **0** | 成功 | ツール実行を許可 |
| **2** | ブロック | **ツール実行を阻止**（PreToolUseのみ有効） |
| **その他** | エラー | stderr（標準エラー出力）の内容が詳細モードで表示される |

特に重要なのは**終了コード2**です。PreToolUseフックで終了コード2を返すと、そのツール呼び出し自体がブロックされます。

PreToolUse・PostToolUseフックの詳細な使い方については、別な記事で詳しく解説しています。

[Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pre-post-tool-use-hooks)

!

終了コード2によるブロックは**PreToolUseフックでのみ有効**です。

PostToolUseなど他のフックで終了コード2を返しても、単なるエラーとして扱われるだけでブロック効果はありません。

## まずは簡単な例から試してみよう

すべてのBashコマンドをブロックするシンプルなフックで動作を確認してみましょう。

Hooksの基本的な設定方法については、別な記事で詳しく解説しています。

[Claude CodeのHooks設定方法：/hooksコマンドとshファイル化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup)

`~/Desktop/hooks-test/.claude/settings.json` に以下の設定を追加します。

```:~/Desktop/hooks-test/.claude/settings.json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'ブロック: Bashコマンドの実行は許可されていません' >&2; exit 2"
          }
        ]
      }
    ]
  }
}
```

`~/Desktop/hooks-test` ディレクトリで Claude Code を起動し、Claude に「`ls` コマンドを実行して」と依頼してみてください。

```
> lsを実行して

⏺ Bash(ls)
  ⎿  Error: PreToolUse:Bash hook error: [echo 'ブロック: Bashコマンドの実行は許可されていません' >&2; exit 2]: ブロック:
     Bashコマンドの実行は許可されていません

⏺ Bashコマンドがhookによってブロックされています。
```

終了コード2を返すことでツール実行がブロックされることを確認できました。

!

このままだとすべてのBashコマンドがブロックされてしまうため、確認後は settings.json の内容を削除するか、次の実践例の設定に置き換えてください。

## 実践例：rm -rf（フォルダごと削除）をブロック

動作確認ができたところで、より実践的な例を見ていきましょう。危険な`rm -rf`（フォルダごと削除）をブロックする設定を作成します。

まず、shファイルを作成します。場所は、検証用プロジェクトのhooksディレクトリにします。

```
#!/bin/bash
# ~/Desktop/hooks-test/.claude/hooks/block-rm-rf.sh
# rm -rf をブロック（rm は許可）

# 標準入力からJSONを読み取り、コマンドを抽出
input=$(cat)
command=$(echo "$input" | jq -r '.tool_input.command // empty')

# -r や -f オプションがあればブロック（rm file.txt は許可）
if [[ "$command" =~ -[rf] ]]; then
    echo "ブロック: rm -rf / rm -r は許可されていません" >&2
    exit 2
fi

exit 0
```

次に、settings.jsonでこのスクリプトをPreToolUseフックに登録します。マッチャーには `Bash` を指定し、スクリプト内でコマンドの内容をチェックします。

マッチャーの詳細なパターン指定方法については、別な記事で詳しく解説しています。

[Claude CodeのHooksマッチャー詳細：ワイルドカードとパターン指定](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-matcher)

```
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "~/Desktop/hooks-test/.claude/hooks/block-rm-rf.sh"
          }
        ]
      }
    ]
  }
}
```

スクリプトに実行権限を付与するのを忘れずに。

```
chmod +x ~/Desktop/hooks-test/.claude/hooks/block-rm-rf.sh
```

では、実際に試してみましょう。

先に、削除テスト用のフォルダとファイルを作成しておきます。

```
mkdir test-folder
touch test-folder/test.txt
```

Claude Code を起動し、「`rm -rf test-folder` を実行して」と依頼すると、以下のようにブロックされます。

```
> `rm -rf test-folder` を実行して

⏺ I'll execute that command to remove the test-folder directory.

⏺ Bash(rm -rf test-folder)
  ⎿  Error: Permission to use Bash with command rm -rf test-folder has been denied.

⏺ Bashにrm -rfを実行する権限がありません。このコマンドは実行できません。

  通常のファイル削除が必要な場合は、別の方法をお試しください。例えば、ファイルエクスプローラーから削除するか、別のツールを使用してください。
```

上記のうち、`Error: Permission to use Bash with command rm -rf test-folder has been denied.` の部分が終了コード2を返したことによるブロックです。

誤って重要なファイルを削除してしまうリスクを大幅に減らせるため、安心感が違いますね。

単純な Bash コマンドのガードであれば `permissions` によるガードでも十分ですが、より複雑なガードが必要な場合は、終了コード2を返すことでブロックすることができます。

パーミッション設定の詳細については、別な記事で詳しく解説しています。

[Claude Codeのパーミッション設定を最適化する：セキュリティと利便性のバランス](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/permission-optimization)

より高度な危険コマンドのガード実装については、別な記事で詳しく解説しています。

[Claude Code Hooksで危険なコマンドをブロック！安全なAI駆動開発を実現](https://zenn.dev/tmasuyama1114/articles/claude_code_hooks_guard_bash_command)

## まとめ

この記事では、Hooksの終了コードによるブロック制御について解説しました。

- 終了コード **0** は成功で、ツール実行を許可
- 終了コード **2** は**ブロック**で、ツール実行を阻止（PreToolUseのみ有効）

まずは「rm -rf のブロック」から始めて、自分のワークフローに合わせたガードレールを構築してみてはいかがでしょうか。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
