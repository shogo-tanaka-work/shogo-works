---
chapter: 36
slug: hooks-environment-variables
title: "Claude Code Hooksの環境変数活用：プロジェクト情報の取得と永続化"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-environment-variables
fetched_at: 2026-05-03T06:25:18Z
---

# Claude Code Hooksの環境変数活用：プロジェクト情報の取得と永続化

こんにちは、とまだです。

「Hooksでプロジェクトのルートディレクトリを取得したいけど、どうすればいいの？」と疑問に思ったことはありませんか？

今回伝えたいことの要点は、**Hooksで利用できる環境変数を活用すれば、プロジェクト固有の処理を柔軟に実装できる**ということです。一言で言えば、環境変数を通じてClaude Codeからスクリプトに情報を渡せる仕組みです。

この記事では、2つの主要な環境変数の使い方を解説します。

## 忙しい人のために要約

この記事のポイントを2つにまとめました。

- **CLAUDE_PROJECT_DIR** でプロジェクトのルートディレクトリを取得できる
- **CLAUDE_ENV_FILE** でセッション中の環境変数を永続化できる（SessionStartのみ）

## この記事で使用するテストディレクトリ

前回の記事で使用した `~/Desktop/hooks-test` ディレクトリを引き続き使用します。  

まだ作成していない方は、以下のコマンドで作成してください。

```
mkdir -p ~/Desktop/hooks-test/.claude
cd ~/Desktop/hooks-test
```

## Hooksで利用できる環境変数

「環境変数とは何か？」と思った方もいるかもしれません。

環境変数とは、プログラムに情報を渡すための仕組みです。そして、Claude CodeのHooksでは、スクリプト内で特定の環境変数を参照することで、プロジェクトやファイルに関する情報を取得できるのです。

Hooksの基本的な仕組みについては、別の記事で詳しく解説しています。

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

主要な2つの環境変数を確認しておきましょう。

| 環境変数 | 説明 | 利用可能なイベント |
| --- | --- | --- |
| **CLAUDE_PROJECT_DIR** | プロジェクトのルートディレクトリ（絶対パス） | すべて |
| **CLAUDE_ENV_FILE** | 環境変数永続化ファイルのパス | SessionStartのみ |

それぞれの環境変数について、詳しく見ていきましょう。

## まずは簡単な例から試してみよう

環境変数が実際にどう渡されるか、PostToolUseフックで確認してみましょう。

`~/Desktop/hooks-test/.claude/settings.json` に以下の設定を追加します。

```:~/Desktop/hooks-test/.claude/settings.json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "echo \"プロジェクトディレクトリ: $CLAUDE_PROJECT_DIR\""
          }
        ]
      }
    ]
  }
}
```

`~/Desktop/hooks-test` ディレクトリで Claude Code を起動し、「`ls` を実行して」と依頼してみてください。  

（Bash や Read など、何かしらのツール実行が必要であるという点に注意してください）

```
cd ~/Desktop/hooks-test
claude
```

ツール実行後、以下のように表示されていれば成功です。

```
> lsを実行して

...
⏺ Bash(ls -la)
  ⎿  total 16
  ⎿  PostToolUse:Bash hook succeeded: プロジェクトディレクトリ: /Users/tomada/Desktop/hooks-test
```

環境変数 `$CLAUDE_PROJECT_DIR` に、現在のプロジェクトディレクトリが自動的に設定されていることがわかりますね。

## CLAUDE_PROJECT_DIR：プロジェクトディレクトリ

まずは`CLAUDE_PROJECT_DIR`から説明します。これは、現在作業中のプロジェクトのルートディレクトリを示す環境変数です。

なぜこの環境変数が重要かというと、スクリプト内でプロジェクトのルートを基準にした相対パスを扱えるようになるからです。

```
#!/bin/bash
# CLAUDE_PROJECT_DIR の活用例

# プロジェクトルートを取得
project_root="$CLAUDE_PROJECT_DIR"

# プロジェクト固有の設定ファイルを参照
if [[ -f "$project_root/.prettierrc" ]]; then
    echo "Prettier設定が見つかりました"
fi

# プロジェクト内のログファイルに記録
echo "$(date): フック実行" >> "$project_root/.claude/hooks.log"
```

この環境変数を使うことで、Claude Codeがどのディレクトリで起動されたかに関わらず、プロジェクトのルートを基準に処理を行えるわけですね。

Hooksの具体的な設定方法については、別の記事で詳しく解説しています。

[Claude CodeのHooks設定方法：/hooksコマンドとshファイル化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup)

## CLAUDE_ENV_FILE：環境変数永続化ファイル

最後に、`CLAUDE_ENV_FILE`について説明します。これは、SessionStartフックでのみ利用可能な特殊な環境変数です。

この環境変数には、環境変数を永続化するためのファイルパスが格納されています。具体的には、このファイルに`KEY=VALUE`形式で書き込むことで、セッション中に環境変数を設定できるのです。

```
#!/bin/bash
# SessionStartフックでの活用例

env_file="$CLAUDE_ENV_FILE"

# 環境変数を永続化
echo "PROJECT_TYPE=nodejs" >> "$env_file"
echo "DEBUG_MODE=true" >> "$env_file"
```

「どういう場面で使うの？」と疑問に思う方もいるかもしれません。

たとえば、プロジェクトの種類を自動判定してセッション中に参照したい場合に活用できます。この設定により、他のフックスクリプトで設定した環境変数を参照できるようになります。

ただし、`CLAUDE_ENV_FILE`はSessionStartフックでのみ利用可能である点に注意してください。

SessionStartフックの実践的な使い方については、別の記事で詳しく解説しています。

[Claude CodeのSessionStartフックで初期化を自動化：npm installの自動実行](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/session-start-hook)

## まとめ

この記事では、Hooksで利用できる2つの環境変数について解説しました。

- **CLAUDE_PROJECT_DIR** でプロジェクトのルートディレクトリを取得
- **CLAUDE_ENV_FILE** でセッション中の環境変数を永続化（SessionStartのみ）

まずは今回試した `$CLAUDE_PROJECT_DIR` の動作確認から始めて、必要に応じて `$CLAUDE_ENV_FILE` も活用してみてください。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
