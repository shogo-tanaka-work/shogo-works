---
chapter: 33
slug: stop-hook
title: "Claude CodeのStopフックで完了時の処理：通知音やログ記録の自動化"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/stop-hook
fetched_at: 2026-05-03T06:24:49Z
---

# Claude CodeのStopフックで完了時の処理：通知音やログ記録の自動化

こんにちは、とまだです。

「Claude Codeで長いタスクを実行しているけど、いつ終わるか分からなくて画面を見続けるのが辛い...」と感じていませんか。

今回伝えたいことの要点は、**Stopフックを使えばタスク完了時に通知やログ記録などの後処理を自動化できる**ということです。一言で言えば、長時間タスクの完了を見逃さず、効率的なワークフローを構築できるようになります。

この記事では、Stopフックの仕組みから実践的な設定まで解説します。

## 忙しい人のために要約

この記事の要点をまとめます。

- **Stopフック**はClaude応答完了時に発火
- 完了通知、ログ記録、後処理を自動化できる
- `settings.json`または`settings.local.json`に設定
- macOSでは`afplay`や`osascript`で通知を実現可能

## Stopフックとは

**Stopフック**は、Claudeがタスクを完了して応答を終えたときに自動実行されるフックです。

大規模なリファクタリングやテストの実行など、時間のかかるタスクを依頼することがありますよね。完了を確認するために画面を見続けるのは非効率ですし、他の作業をしていると完了を見逃してしまうこともあります。

**Stopフックを設定しておけば**、タスク完了時に通知音やデスクトップ通知で知らせてもらえるため、安心して別の作業に集中できるようになります。

ただし、Stopフックは応答完了のたびに発火する点は覚えておいてください。簡単な質問への回答でも発火するので、通知音が頻繁に鳴りすぎて煩わしくなることもあります。そのため、長時間タスクのときだけ有効化する、といった使い分けがおすすめです。

Hooksの基本的な概念については、別な記事で詳しく解説しています。

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

## 基本的な設定方法

Stopフックの設定は、`settings.json`に以下の形式で記述します。

```
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "実行したいコマンド"
          }
        ]
      }
    ]
  }
}
```

設定のポイントは以下の通りです。

- **matcher**：Stopフックでは**省略**する（マッチャーの概念がないため）
- **type**：`"command"`を指定してシェルコマンドを実行
- **command**：実行するコマンドを記述

Hooksの基本的な設定方法については、別な記事で詳しく解説しています。

[Claude CodeのHooks設定方法：/hooksコマンドとshファイル化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup)

## まずは簡単な例から試してみよう

いきなり複雑な設定を試すよりも、まずはシンプルな例で動作を確認してみましょう。

前回の記事で作成した `~/Desktop/hooks-test` ディレクトリを引き続き使用します。まだ作成していない場合は、以下のコマンドで作成してください。

```
mkdir -p ~/Desktop/hooks-test/.claude
cd ~/Desktop/hooks-test
```

次に、`.claude/settings.json` に以下の設定を追加します。

```:~/Desktop/hooks-test/.claude/settings.json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo \"応答完了: $(date)\" >> ~/Desktop/hooks-test/stop.log"
          }
        ]
      }
    ]
  }
}
```

この設定では、Claudeが応答を完了するたびに日時付きのメッセージを `stop.log` に書き込みます。

それでは動作確認してみましょう。`~/Desktop/hooks-test` ディレクトリで Claude Code を起動します。

```
cd ~/Desktop/hooks-test
claude
```

Claude Code が起動したら、何か簡単な質問をしてみてください（例：「こんにちは」）。

その後、ログファイルを確認してみましょう。

```
cat ~/Desktop/hooks-test/stop.log
# 応答完了: Mon 29 Dec 2025 15:30:45 JST
```

このように、まずは簡単なログ出力で Stop フックの動作を確認してから、より実践的な設定に進むのがおすすめです。

## 実践例：タスク完了時に通知音を鳴らす

動作確認ができたところで、より実践的な例を見てみましょう。

macOSでは、`afplay`コマンドでシステムサウンドを再生できます。

```
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Glass.aiff"
          }
        ]
      }
    ]
  }
}
```

この設定により、Claudeが応答を完了するたびに「Glass」という通知音が鳴ります。macOSには複数のシステムサウンドが用意されているため、好みに応じて変更してください。

- `/System/Library/Sounds/Glass.aiff` - 透明感のある音
- `/System/Library/Sounds/Ping.aiff` - 短いピン音
- `/System/Library/Sounds/Submarine.aiff` - 深みのある音
- `/System/Library/Sounds/Hero.aiff` - 達成感のある音

!

**Windowsの場合**は、PowerShellで通知音を鳴らせるそうです。筆者はWindowsを使っていないため未検証で恐縮ですが、参考になるかもしれません。

```
{
  "type": "command",
  "command": "powershell -c \"[System.Media.SystemSounds]::Asterisk.Play()\""
}
```

## 実践例：デスクトップ通知を表示する

音だけでなく**視覚的な通知**も表示したい場合は、`osascript`コマンドを使います。これはmacOSでAppleScriptを実行するための標準コマンドです。

```
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"タスク完了\" with title \"Claude Code\"'"
          }
        ]
      }
    ]
  }
}
```

この設定により、macOSの通知センターに「Claude Code」というタイトルで「タスク完了」というメッセージが表示されます。

![](https://static.zenn.studio/user-upload/deployed-images/4e27a8f74545f10d50aed0ff.png?sha=1486dea0cd6fab3375d47949621107a9167467bd)

!

通知音とデスクトップ通知を組み合わせたい場合は、`hooks`配列に複数のコマンドを追加すれば順番に実行されます。

```
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Glass.aiff"
          },
          {
            "type": "command",
            "command": "osascript -e 'display notification \"タスク完了\" with title \"Claude Code\"'"
          }
        ]
      }
    ]
  }
}
```

## 補足：関連するフックについて

Stopフックに関連するフックとして、以下の2つがあります。

| フック | 発火タイミング | 主な用途 |
| --- | --- | --- |
| **Notification** | Claude Codeが通知を送る際 | 通知のカスタマイズ |
| **SubagentStop** | サブエージェント完了時 | 並列処理の完了検知 |

これらは用途が異なるため、一般的なタスク完了時の処理にはStopフックを使用するのがおすすめです。

SubagentStopフックについては、別な記事で詳しく解説しています。

[Claude CodeのSubagentStopフック：サブエージェント完了時の処理設定](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/subagent-stop-hook)

セッション開始時に処理を実行するSessionStartフックについては、別な記事で詳しく解説しています。

[Claude CodeのSessionStartフックで初期化を自動化：npm installの自動実行](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/session-start-hook)

ツール実行の前後に処理を追加するPreToolUse・PostToolUseフックについては、別な記事で詳しく解説しています。

[Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pre-post-tool-use-hooks)

## まとめ

この記事では、**Stopフック**の仕組みと活用方法を解説しました。

- **Stopフック**はClaude応答完了時に発火
- macOSでは`afplay`や`osascript`で通知を実現可能
- ログ記録と組み合わせてタスク履歴を残せる

長時間タスクの完了を見逃さないよう、ぜひ設定してみてください。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
