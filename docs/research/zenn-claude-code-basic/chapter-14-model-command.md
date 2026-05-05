---
chapter: 14
slug: model-command
title: "Claude Codeの/modelコマンドでモデルを切り替える：タスク別の最適選択"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/model-command
fetched_at: 2026-05-03T06:21:47Z
---

# Claude Codeの/modelコマンドでモデルを切り替える：タスク別の最適選択

「タスクによってモデルを切り替えたいけど、どうすればいいの？」と感じたことはありませんか？

Claude Codeでは、セッション中に`/model`コマンドでモデルを切り替えられます。この記事では、`/model`コマンドの使い方からデフォルトモデルの設定方法まで解説します。

## 忙しい人のために要約

この記事のポイントを3つにまとめました。

- `/model`**コマンド**でセッション中にいつでもモデルを切り替え可能
- `settings.json`や`--model`オプションで**デフォルトモデル**を設定できる
- `/status`コマンドやステータスラインで現在のモデルを確認できる

## /modelコマンドの基本

`/model`コマンドは、セッション中にAIモデルを切り替えるためのコマンドです。`/model`と入力すると、利用可能なモデルの一覧が表示されます。

矢印キーで選択してEnterキーを押すと、その場でモデルが切り替わります。また、直接モデル名を指定して切り替えることも可能です。

```
# セッション中にモデル選択画面を表示
/model

# 直接モデルを指定して切り替え
/model sonnet
/model opus
/model haiku
```

利用可能なモデルは以下の3種類です。

| モデル | 特徴 | 向いているタスク |
| --- | --- | --- |
| **Sonnet** | バランス型、デフォルト | 日常的な開発作業全般 |
| **Opus** | 最高性能、高コスト | 複雑な設計・推論 |
| **Haiku** | 高速・低コスト | 調査や簡単な確認作業 |

各モデルの詳細な特徴については、別な記事で解説しています。

[Claude Codeで使えるモデル一覧：Opus・Sonnet・Haikuの選び方](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/available-models)

## 開発フェーズに応じた切り替え例

タスクの性質に応じてモデルを切り替える実践例を紹介します。

```
# 調査フェーズ：Haikuで素早くコードベースを確認
/model haiku

# 設計フェーズ：Opusで複雑な設計を検討
/model opus

# 実装フェーズ：Sonnetで効率的にコード生成
/model sonnet
```

このように、開発フェーズに応じて柔軟に切り替えることで、品質とコストを両立できます。

## デフォルトモデルの設定

毎回`/model`で切り替えるのが面倒な場合は、`settings.json`でデフォルトモデルを設定できます。設定方法は複数あるため、順番に説明します。

### settings.jsonでの設定

プロジェクトの`.claude/settings.json`に以下のように記述してください。

```
{
  "model": "sonnet"
}
```

なお、ユーザー全体のデフォルトを設定したい場合は、`~/.claude/settings.json`に記述します。ただし、プロジェクト固有の設定が優先される点に注意が必要です。

### 起動時のオプション指定

Claude Code起動時に`--model`オプションでモデルを指定することも可能です。以下のように実行してください。

```
# Opusで起動
claude --model opus

# Haikuで起動
claude --model haiku
```

### 環境変数での設定

環境変数`ANTHROPIC_MODEL`でも設定できます。以下のように設定してください。

```
export ANTHROPIC_MODEL=opus
claude
```

設定の優先順位は以下の通りです。上にあるものほど優先されます。

1. セッション中の`/model`コマンド（最優先）
2. 起動時の`--model`オプション
3. 環境変数`ANTHROPIC_MODEL`
4. `settings.json`の`model`設定

モデル設定と並んで重要なコンテキスト管理の詳細については、別な記事で解説しています。

[Claude Codeのコンテキスト管理完全ガイド：/clear・/compact・/contextの使い分け](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/context-management)

## 現在のモデルを確認する方法

現在使用中のモデルを確認するには、いくつかの方法があります。それぞれの特徴を説明しましょう。

### /modelコマンド

一番シンプルなのが、`/model`コマンドを実行する方法です。

```
/model
```

このように、モデル名の引数をつけずに実行すると、現在のモデル名が表示されます。

```
───────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Select model
 Switch between Claude models. Applies to this session and future Claude Code sessions. For other/previous
 model names, specify with --model.

 ❯ 1. Default (recommended)   Opus 4.5 · Most capable for complex work ✔
   2. Sonnet                  Sonnet 4.5 · Best for everyday tasks
   3. Haiku                   Haiku 4.5 · Fastest for quick answers
```

上記のように、チェックマーク ✔ が付いているモデルが現在のモデルです。

この例ですと、Default (recommended) である Opus 4.5 が現在のモデルです。

/modelコマンド以外にも、Claude Codeには日常的に使う便利なコマンドが多数用意されています。

[Claude Codeの基本コマンド一覧：日常で使う主要コマンド](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/basic-commands)

### /statusコマンド

もう一つ、モデル以外にも、様々な情報を確認できる`/status`コマンドがあります。

以下のコマンドを実行してください。

```
/status
```

`/status`コマンドは、現在のモデル、認証状態、パーミッション設定などを一覧表示する役割を果たします。

実行すると、以下のように表示されます。

```
> /status
────────────────────────────────────────────────────────────────────────
 Settings:  Status   Config   Usage   (tab to cycle)

 Version: 2.0.74
 Session ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 cwd: /Users/tomada/workspace/hoge
 Login method: Claude Max Account
 Organization: xxx@xxx.com's Organization
 Email: xxx@xxx.com

 Model: Default Opus 4.5 · Most capable for complex work 👈 ここに現在のモデル名が表示されます
```

## モデル選択のベストプラクティス

モデル選択で迷ったときのガイドラインを紹介します。以下の2つのポイントを押さえておいてください。

### まずはSonnetから始める

多くのタスクはSonnetで十分対応できます。したがって、まずはSonnetで試し、品質に満足できない場合のみOpusに切り替えるのが効率的です。

### コストを意識する

Opusは高品質ですが、API使用料も高くなる点に注意が必要です。そのため、日常的な開発ではSonnetを使用し、重要な設計判断やレビュー時にのみOpusを使うことで、コストを最適化できます。

モデル別の料金体系とコスト最適化の詳細については、別な記事で解説しています。

[Claude Codeの料金体系完全ガイド：ProとMaxの違いと料金比較](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pricing-guide)

## まとめ

この記事では、`/model`コマンドによるモデル切り替えについて解説しました。

- **Sonnet**（バランス型）、**Opus**（高性能）、**Haiku**（高速・低コスト）の3種類
- タスクの難易度に応じて使い分けることで**コスト最適化**が可能
- `settings.json`や`--model`オプションでデフォルトモデルを設定可能

まずはSonnetをベースに、必要に応じてOpusやHaikuを活用してください。
