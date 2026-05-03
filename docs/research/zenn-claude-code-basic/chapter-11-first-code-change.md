---
chapter: 11
slug: first-code-change
title: "はじめてのコード変更：Claude Codeを実際に動かしてみよう"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/first-code-change
fetched_at: 2026-05-03T06:21:18Z
---

# はじめてのコード変更：Claude Codeを実際に動かしてみよう

こんにちは、とまだです。

「Claude Codeをインストールしたけど、何から始めればいいか分からない...」と感じていませんか？

今回伝えたいことの要点は、**Claude Codeは実際に手を動かしてみるのが一番の近道**ということです。

この記事では、練習用のフォルダを作って、実際にコードを変更するまでを体験できます。読み終わる頃には、**Claude Codeの基本的な使い方**が身についているはずです。

一方で、最初から実際のプロジェクトで試すのは少し不安かもしれません。そこで、この記事では安全に練習できる環境を用意するところから始めます。

## 忙しい人のために要約

この記事のポイントを3つにまとめておきます。

- 練習用フォルダを作って、そこでClaude Codeを試す
- 日本語で「関数を追加して」と依頼するだけでOK
- 変更前に確認画面が出るので、勝手にコードが壊れる心配はない

## 準備：練習用フォルダを作る

まずは練習用のフォルダを用意しましょう。ターミナルで以下のコマンドを実行してください。

```
mkdir ~/Desktop/claude-practice
cd ~/Desktop/claude-practice
```

空のフォルダができたら準備完了です。ファイルの作成もClaude Codeにお願いしてみましょう。

## 1. Claude Codeを起動する

練習用フォルダにいる状態で、`claude`コマンドを実行します。

```
claude
```

起動すると、プロンプトが表示されて入力待ちの状態になります。

Claude Codeのセッション起動や基本操作については、以下の記事で詳しく解説しています。

[Claude Codeの最初のセッション：起動から基本操作まで](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/first-session)

## 2. ファイル作成を依頼する

以下のように入力してみてください。

```
> main.jsを作り、コンソールに"Hello"と出力するコードを書いてください
```

Claude Codeが以下のようにコードを提案してきます。

```
> main.jsを作り、コンソールに"Hello"と出力するコードを書いてください

⏺ main.js を作成します。

⏺ Write(main.js)

──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Create file
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ main.js                                                                                                                                    │
│                                                                                                                                            │
│ console.log("Hello");                                                                                                                      │
│                                                                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
 Do you want to create main.js?
 ❯ 1. Yes
   2. Yes, allow all edits during this session (shift+tab)
   3. Type here to tell Claude what to do differently
```

確認画面で「Yes」を選択すると、ファイルが作成されます。

なお、十字キーの下を押して二番目の「Yes, allow all edits during this session (shift+tab)」を選択すると、以降の編集でもすべての変更を承認するようになります。基本的には、この設定をおすすめします。

承認すると、ファイルが作成されます。

```
⏺ Write(main.js)
  ⎿  Wrote 2 lines to main.js
     console.log("Hello");

⏺ main.js を作成しました。node main.js で実行すると "Hello" が出力されます。
```

## 3. コードの追加を依頼する

続けて、作成したファイルに関数を追加してみましょう。

```
> 先ほどのmain.jsに、"Hello, World!"と出力するhelloWorld関数を追加して
```

すると変更をしてくれるわけなのですが、Claude Codeは以下のようにコードを差分形式で表示します。

```
> 先ほどのmain.jsに、"Hello, World!"と出力するhelloWorld関数を追加して

⏺ Read(main.js)
  ⎿  Read 2 lines

⏺ Update(main.js)
  ⎿  Updated main.js with 4 additions
       1    console.log("Hello");
       2 +
       3 +  function helloWorld() {
       4 +    console.log("Hello, World!");
       5 +  }

⏺ helloWorld 関数を追加しました。helloWorld() を呼び出すと "Hello, World!" が出力されます。
```

先ほど二番目の「Yes, allow all edits during this session (shift+tab)」を選択していたので、今回の編集の際には自動的に承認され、ファイルが更新されます。

## 4. 変更後のファイルを確認する

では、実際にファイルを確認してみましょう。

直接ファイルを開いてみると、以下のようになっています。

```
console.log("Hello");

function helloWorld() {
  console.log("Hello, World!");
}
```

`helloWorld`関数が追加されているはずです。

## 補足：承認モードについて

先ほど二番目の「Yes, allow all edits during this session (shift+tab)」を選択したことで、今後のファイル編集は自動的に承認されるようになっていました。

今後のファイル編集は自動的に承認されるようになっており、現在のモードが以下のように表示されます。

```
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
> 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ⏵⏵ accept edits on (shift+tab to cycle)
```

この `accept edits on` というのが、今後のファイル編集は自動的に承認されるようになっていることを示しています。

表示されている通り、`shift+tab`キーを押すと、承認モードを切り替えることができます。

もう一度押すと `plan mode on` と表示され、こちらはファイルに変更を行う前に計画を立てて、ユーザーの承認を求めるモードになります。

```
  ⏸ plan mode on (shift+tab to cycle)
```

さらにもう一度押すとデフォルトのモードに戻り、ただのコンソールに戻ります。そしてもう一度押すと `accept edits on` と表示され、承認モードに戻ります。

まとめますと、以下のようなサイクルが繰り返されます。

1. default mode（デフォルトのモード）
2. accept edits on（自動承認モード）
3. plan mode on（計画モード）

Claude Codeには他にも便利なコマンドがたくさんあります。詳しくは以下の記事をご覧ください。

[Claude Codeの基本コマンド一覧：日常で使う主要コマンド](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/basic-commands)

## まとめ

このハンズオンでは、Claude Codeで最初のコード変更を体験しました。練習用フォルダを作り、日本語で依頼し、提案を確認して承認するという流れです。この基本的なワークフローさえ覚えれば、あとは実際のプロジェクトでも同じように使えます。

ここから先、Claude Codeをより安全に使いこなすために、以下の記事も参考にしてみてください。

承認設定やセキュリティについて詳しく知りたい方はこちら：

[Claude Codeのパーミッション設定を最適化する：セキュリティと利便性のバランス](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/permission-optimization)

Claude Codeのベストプラクティスを学びたい方はこちら：

[Anthropicが公開しているClaude Codeのベストプラクティスを初心者向けに解説](https://zenn.dev/tmasuyama1114/articles/claude_code_best_practice_guide)
