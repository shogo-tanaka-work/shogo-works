---
chapter: 12
slug: basic-commands
title: "Claude Codeの基本コマンド一覧：日常で使う主要コマンド"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/basic-commands
fetched_at: 2026-05-03T06:21:28Z
---

# Claude Codeの基本コマンド一覧：日常で使う主要コマンド

「Claude Codeを使い始めたけど、コマンドが多すぎて何から覚えればいいかわからない...」と感じていませんか？

今回伝えたいことの要点は、**まず3つのコマンドだけ覚えればいい**ということです。

`claude`で起動、`exit`で終了、`claude -c`で会話を継続してこれだけで日常的な作業は十分こなせます。

一方で、便利なコマンドは他にもたくさんあるので、この記事では主要なコマンドを整理して紹介します。

## 忙しい人のために要約

この記事で紹介するコマンドの要点です。

- 起動は`claude`、終了は`exit`か`Ctrl+C`
- 会話継続は`claude -c`、過去の会話再開は`claude -r`
- 対話モード内で`/clear`、`/help`、`/resume`が使える
- `claude commit`でコミットメッセージの自動生成も可能

## 基本コマンドの全体像

Claude Codeのコマンドは**2種類**に分かれます。

まず**シェルコマンド**は、ターミナルで直接実行するタイプです。`claude`から始まり、Claude Code自体の起動や会話の再開に使います。

次に**スラッシュコマンド**は、Claude Codeの対話モード内で使うものです。`/`から始まり、会話履歴のクリアやヘルプの表示といった操作ができます。

（正直、はじめは違いがわかりにくいかもしれませんが、使っているうちに自然と身につくので心配いりません）

Claude Codeの基本的な使い方については、別の記事で詳しく解説しています。

[Claude Codeとは？AI駆動開発のメリット・特徴を徹底解説](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-claude-code)

以下、シェルコマンドから順に見ていきましょう。

## シェルコマンドの基本

シェルコマンドは、Claude Codeの**起動・終了・会話の再開**といった基本操作を担います。まずはこれらを押さえておけば、日常的な作業で困ることはないでしょう。

Claude Code の中ではなく、ターミナルの中で実行するという点に注意してください。

### 対話モードの開始と終了

最も基本的なコマンドが`claude`です。プロジェクトのルートディレクトリで以下のように実行します。

```
cd /path/to/your/project
claude
```

たとえば、`~/Desktop/test-project` ディレクトリで実行する場合は、次のようになります。

```
cd ~/Desktop/test-project
claude
```

起動すると、セッション情報や最近の会話履歴が表示されるので、ここから対話形式でClaude Codeとやり取りを始められます。

終了するには、`exit`と入力するか、`Ctrl+C`を押すだけです。

どちらでも同じ結果になりますが、個人的には`Ctrl+C`を多用しています（タイプ数が少ないので）。

初めてClaude Codeを使う方は、セッションの始め方から基本操作まで、別の記事で詳しく解説しています。

[Claude Codeの最初のセッション：起動から基本操作まで](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/first-session)

### ワンショット実行

「対話モードに入らず、一度限りのタスクだけ実行したい」という場面もありますよね。そんな時は引数付きで`claude`コマンドを使います。

`-p`オプションを使うと、クエリの結果を表示した後すぐに終了します。

これはターミナルの中で実行することができるので、スクリプトからの呼び出しやパイプ連携ができるようになります。

```
claude -p "README.mdを読んで、概要を説明して"
```

### 会話の継続と再開

Claude Codeは会話履歴を保存しているので、過去の会話を続けられます。この機能があるおかげで、作業の中断と再開がスムーズになります。

**`claude -c`** は直前の会話を継続するコマンドです。

```
claude -c
```

「さっきの続きを話したい」という時に使ってください。ただし、会話を継続せずに`claude`で新規セッションを開始すると、前回のコンテキストが失われてしまいます。これはちょっともったいないので、意識的に`claude -c`を使う習慣をつけるといいかもしれません。

また、**`claude -r`** を使うと、過去の会話一覧が表示されます。

```
claude -r
```

実行結果の例：

```
claude -r
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

Resume

❯ README.mdを読んで、概要を説明して
  14 seconds ago · 4 messages · main

↓ テストのエラーを修正して
  1 minute ago · 2 messages · main
```

再開したい会話を選択できるわけです。ただし、古い会話はコンテキストが失われている場合もあるので、その点は留意しておいてください。対話モード内でも`/resume`コマンドで同じ操作ができます。

セッション管理の詳細については、別の記事で詳しく解説しています。

[Claude Codeのセッション管理：開始・終了・再開の完全ガイド](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/session-management)

## スラッシュコマンドの基本

先述の通り、対話モード内では、`/`から始まるスラッシュコマンドが使えます。これらは**対話の流れをコントロール**するための機能です。スラッシュコマンドを使わなくても作業は進められますが、覚えておくと便利でしょう。

途中まで入力すると候補も表示されるので、それを参考に入力していくというのが良いでしょう。

候補の表示例：

```
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
> /cl
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  /clear                       Clear conversation history and free up context
  /status                      Show Claude Code status including version, model, account, API connectivity, and tool statuses
  /passes                      Share a free week of Claude Code with friends
  /compact                     Clear conversation history but keep a summary in context. Optional: /compact [instructions for summarization]
  /doctor                      Diagnose and verify your Claude Code installation and settings
  /init                        Initialize a new CLAUDE.md file with codebase documentation
  /install-github-app          Set up Claude GitHub Actions for a repository
  /memory                      Edit Claude memory files
  /model                       Set the AI model for Claude Code
  /plugin                      Manage Claude Code plugins
```

### 会話のリセットとヘルプ

**`/clear`** は現在の会話履歴をすべてクリアするコマンドです。

```
> /clear
```

新しいトピックを始めたい時や、コンテキストをリセットしたい時に使います。「前の話題を引きずって、的外れな回答が返ってくる」という経験がある方もいるかもしれませんが、そういう時は`/clear`で解決できることが多いです。

なお、コンテキストというのは簡単にいうと「これまでの会話の内容」という理解で今は大丈夫です。

コンテキスト管理の詳細については、別の記事で詳しく解説しています。

[Claude Codeのコンテキスト管理完全ガイド：/clear・/compact・/contextの使い分け](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/context-management)

また、**`/help`** を実行すると、利用可能なコマンドの一覧と説明が表示されます。

```
> /help
```

コマンドを忘れた時に役立つので、覚えておくといいでしょう。

### 過去の会話を再開

**`/resume`** は対話モード内で過去の会話を選んで再開するコマンドです。

```
> /resume
```

シェルコマンドの`claude -r`と同じ機能です。対話モード中に「さっきの別プロジェクトの会話に戻りたい」という時に便利でしょう。

過去の会話を巻き戻す/rewindコマンドについては、別の記事で詳しく解説しています。

[Claude Codeの/rewindコマンドで過去に戻る：会話の巻き戻しテクニック](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/rewind-command)

## コマンド一覧表

ここまで紹介したコマンドを表にまとめました。ブックマークしておくと、後で参照しやすいかもしれません。

| コマンド | 機能 | 例 |
| --- | --- | --- |
| `claude` | 対話モードを開始 | `claude` |
| `claude "task"` | 一度限りのタスクを実行 | `claude "fix the build error"` |
| `claude -p "query"` | クエリを実行して終了 | `claude -p "explain this function"` |
| `claude -c` | 直前の会話を継続 | `claude -c` |
| `claude -r` | 過去の会話を再開 | `claude -r` |
| `/clear` | 会話履歴をクリア | `> /clear` |
| `/help` | ヘルプを表示 | `> /help` |
| `/resume` | 過去の会話を再開 | `> /resume` |
| `exit`/`Ctrl+C` | 終了 | `> exit` |

## キーボードショートカット

コマンド以外にも、対話モード内で使える**ショートカット**があります。知っておくと作業効率が上がりますよ。

| ショートカット | 機能 |
| --- | --- |
| `?` | 利用可能なキーボードショートカットを表示 |
| `Tab` | コマンド補完 |
| `↑` | コマンド履歴を遡る |
| `/` | スラッシュコマンドの一覧（候補）を表示 |

特に `Tab`**補完** は積極的に使うことをおすすめします。コマンドを途中まで入力して`Tab`を押すと、自動的に補完されるのです。入力ミスも減るので、ぜひ活用してみてください。

## まとめ

この記事では、Claude Codeの**基本コマンド**を紹介しました。

すべてを一度に覚える必要はありません。まずは`claude`、`exit`、`claude -c`の3つから始めて、必要に応じて他のコマンドを覚えていけばいいでしょう。実際に手を動かしているうちに、自然と身につくはずです。

さらに便利な使い方として、カスタムスラッシュコマンドを作成して定型作業を自動化する方法もあります。

[【Claude Code】カスタムスラッシュコマンド完全ガイド：定型タスクを自動化しよう！](https://zenn.dev/tmasuyama1114/articles/claude_code_commands)
