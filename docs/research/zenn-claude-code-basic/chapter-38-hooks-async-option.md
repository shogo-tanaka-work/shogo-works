---
chapter: 38
slug: hooks-async-option
title: "Claude Code Hooksの非同期実行：async:trueでバックグラウンド処理"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-async-option
fetched_at: 2026-05-03T06:25:37Z
---

# Claude Code Hooksの非同期実行：async:trueでバックグラウンド処理

こんにちは、とまだです。

今回伝えたいことの要点は「**フックの処理完了を待たずに、すぐ次の作業に取りかかれるようになる**」ということです。

2026年1月下旬、Hooksに `async: true` オプションが追加されました。このオプションを使えば、時間のかかるフック処理をバックグラウンドで実行できます。

この記事では、`async: true` の基本から実践的な活用シーンまでを解説します。

## 忙しい人のために要約

この記事のポイントを5つにまとめました。

- `async: true` をフック設定に追加するだけで非同期実行が有効に
- フック完了を待たずに次のプロンプトを送信可能
- 「結果を待つ必要がない処理」に最適（整形、通知、環境構築など）

## async: true とは

まず、通常のフックの動作を確認しておきましょう。

通常、フックは同期的に実行されます。つまり、フックの処理が完了するまで Claude Code は次の操作を受け付けません。

これは安全性の観点からは正しい動作ですが、処理時間が長いと待ち時間が発生するわけです。

一方で、`async: true` を指定すると、フックがバックグラウンドで実行されるようになります。フックの完了を待たずに、すぐに次のプロンプトを送信できるのです。

## 基本的な設定方法

フックの設定に `async: true` を追加するだけです。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "./format-code.sh",
            "async": true
          }
        ]
      }
    ]
  }
}
```

## 動作確認してみよう

実際に同期フックと非同期フックの違いを確認してみましょう。

例えば、以下の設定では同期フックが即座に実行された後、非同期フックが10秒後にバックグラウンドで完了します。

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo \"⚡ 同期フック実行: $(date '+%H:%M:%S')\" >> $CLAUDE_PROJECT_DIR/async-test.log"
          },
          {
            "type": "command",
            "command": "sleep 10 && echo \"✅ 非同期フック完了: $(date '+%H:%M:%S')\" >> $CLAUDE_PROJECT_DIR/async-test.log",
            "async": true
          }
        ]
      }
    ]
  }
}
```

この設定でファイルを編集すると、`async-test.log` に以下のように記録されます。

```
⚡ 同期フック実行: 11:21:05
✅ 非同期フック完了: 11:21:15
```

ポイントは、**10秒待機する非同期フックの実行中も、Claude Code への次のプロンプト送信がブロックされない**ことです。

これは Claude Code のコンソール上の話なので文章では伝えづらいのですが、非同期フックの処理完了を待っている間も、普通に追加のプロンプトを送信できました。

つまり、裏で Hooks 処理が走っている間も、普通に作業を続けられます。

## 非同期フックの活用シーン

では、具体的にどのような場面で `async: true` が役立つのでしょうか。ここでは特に有効と思われる3つのケースを紹介します。

### コードの自動整形

例えば、ファイル編集後に Prettier や ESLint を実行する場合を考えてみましょう。整形処理の完了を待たずに次の作業に進めるのは大きなメリットです。

```
{
  "type": "command",
  "command": "npx prettier --write $CLAUDE_FILE_PATHS",
  "async": true
}
```

こういったように、Claude Codeでやりたい次の作業に直接関連しない処理は、非同期フックで実行すると便利です。

### ログ収集・通知

別の活用例として、操作ログを外部サービスに送信したり、Slack に通知を飛ばすシーンがあるかもしれません。  

こうした処理は結果を待つ必要がないため、非同期実行に最適です。

```
{
  "type": "command",
  "command": "curl -X POST https://your-webhook.example.com -d \"event=file_edited\"",
  "async": true
}
```

### SessionStart での環境構築

3つ目の活用例は、セッション開始時の環境構築です。

`npm install` や Docker コンテナの起動は時間がかかることがありますが、完了を待たずにすぐ作業を始められるのは便利でしょう。

Claude Code にすぐにテスト実行や動作確認をさせたいときは別ですが、コード編集から始める場合には、裏側で進めていくのが良いでしょう。

```
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "npm install && docker-compose up -d",
            "async": true
          }
        ]
      }
    ]
  }
}
```

## まとめ

この記事では、`async: true` オプションによる非同期フック実行について解説しました。

改めてポイントをまとめます。

- `async: true` をフック設定に追加するだけで有効化できる
- フック完了を待たずに次のプロンプトを送信可能になる
- ログ収集、通知、環境構築など「裏で動いていれば良い処理」に最適

フックの処理時間がボトルネックになっている場合は、ぜひ試してみてください。
