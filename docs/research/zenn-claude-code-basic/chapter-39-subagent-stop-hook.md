---
chapter: 39
slug: subagent-stop-hook
title: "Claude CodeのSubagentStopフック：サブエージェント完了時の処理設定"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/subagent-stop-hook
fetched_at: 2026-05-03T06:25:47Z
---

# Claude CodeのSubagentStopフック：サブエージェント完了時の処理設定

こんにちは、とまだです。

今回伝えたいことの要点は、**SubagentStopフックを使えば、サブエージェント完了時に任意のコマンドを自動実行できる**ということです。

一言で言えば、サブエージェントの完了をトリガーにした自動化機能です。

!

この記事は少し高度な内容を含みます。必要になったときに参照する、という読み方でも問題ありません。

## 忙しい人のために要約

この記事のポイントを先にまとめておきます。

- **SubagentStopフック**は、サブエージェントがタスクを完了したときに実行される
- **Stopフック**はメインエージェント完了時、**SubagentStopフック**はサブエージェント完了時に発火する
- ログ記録などの**後処理**に活用できる
- JSON出力で「継続指示」を出すことで、追加作業をさせることも可能

## SubagentStopフックとは

サブエージェントを使ったタスク分散は、Claude Codeの便利な機能の一つです。たとえば、大規模なコードベースの調査や、複数ファイルの並列編集など、複雑なタスクを効率的に処理できるわけです。

サブエージェントの仕組みについては、別の記事で詳しく解説しています。

[Claude Codeのサブエージェントとは？並列処理とコンテキスト分離の仕組み](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-subagent)

では、サブエージェントの完了タイミングで何か処理を実行したい場合はどうすればよいでしょうか。そこで登場するのがSubagentStopフックです。

SubagentStopフックは、サブエージェントがタスクを完了したタイミングで自動的にシェルコマンドを実行する仕組みです。LLMの判断に依存せず確実に実行されるため、ログ記録などの処理に最適といえるでしょう。

Hooksの基本的な仕組みについては、別の記事で詳しく解説しています。

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

## StopフックとSubagentStopフックの違い

「StopフックとSubagentStopフックって、何が違うの？」と思った方もいるかもしれません。ここで両者の違いを整理しておきましょう。

Claude Codeには、エージェントの完了を検知するフックが2種類あります。

| フック | 発火タイミング |
| --- | --- |
| **Stop** | メインエージェントの完了時 |
| **SubagentStop** | サブエージェントの完了時 |

つまり、両者の最大の違いは「どのエージェントの完了を検知するか」という点なのです。

**メインエージェント**は、ユーザーと直接対話するClaudeのことです。一方、**サブエージェント**はメインエージェントから特定のタスクを委任されたClaudeで、**独自のコンテキストウィンドウを持つ**のが特徴です。

Stopフックの詳細については、別の記事で解説しています。

[Claude CodeのStopフックで完了時の処理：通知音やログ記録の自動化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/stop-hook)

!

PreToolUse/PostToolUseフックは**サブエージェント内では発火しません**。サブエージェントがファイルを編集しても、PostToolUseフックで設定した自動フォーマットは実行されない点に注意してください。

この場合、SubagentStopフックで別途対応する必要があります。

PreToolUse/PostToolUseフックについては、別の記事で詳しく解説しています。

[Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pre-post-tool-use-hooks)

## 基本的な設定方法

SubagentStopフックの設定方法を見ていきましょう。設定は`settings.json`に記述します。

```
{
  "hooks": {
    "SubagentStop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo \"$(date): Subagent completed\" >> ~/Desktop/hooks-test/subagent.log"
          }
        ]
      }
    ]
  }
}
```

この設定では、サブエージェントが完了するたびに、日時とともにログファイルに記録されるようになります。

```:subagent.log
Mon Dec 29 19:06:41 JST 2025: Subagent completed
```

!

**matcherフィールドについて**

SubagentStopフック（およびStopフック）では、**matcherフィールドは省略**します。なぜなら、これらのフックにはマッチャーの概念がないからです。

したがって、PreToolUseやPostToolUseで使う `"matcher": "Edit"` のような指定は、SubagentStopでは不要です。

## 補足: プロンプトベースのフック

この記事では `type: "command"` によるシェルコマンド実行を解説しましたが、SubagentStopフックには `type: "prompt"` という別の方式も用意されています。

プロンプトベースのフックは、LLM（Haiku）を使用してサブエージェントがタスクを完了したかどうかをインテリジェントに評価する仕組みです。コンテキストを理解した柔軟な判定ができる一方、シェルコマンドよりも処理時間がかかります。

ただ、ほとんどのユースケースでは `type: "command"` で十分対応できるため、まずはこちらから始めるのがおすすめです。

## まとめ

この記事では、SubagentStopフックの基本から高度な使い方までを解説しました。

- SubagentStopフックは**サブエージェントの完了時**に発火する
- Stopフックとは発火タイミングが異なるため、目的に応じて使い分けよう
- **matcherは省略**する（SubagentStopでは使用しない）
- `continue: false` でClaude全体の実行を停止することもできる

サブエージェントを活用した並列処理は、Claude Codeの便利な機能の一つです。

カスタムエージェントの定義方法については、別の記事で詳しく解説しています。

[Claude Codeのカスタムエージェント定義ファイルの作成方法](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/custom-agent-definition)

必須となる場面はそう多くないかもしれませんが、SubagentStopフックを設定しておくことでログ出力をしたり、実行後にテストを実行させたりと、より柔軟な処理を実現できるようになるでしょう。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
