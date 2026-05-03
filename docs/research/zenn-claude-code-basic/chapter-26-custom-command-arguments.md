---
chapter: 26
slug: custom-command-arguments
title: "Claude Codeカスタムコマンドで$ARGUMENTSを使って引数を受け取る方法"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/custom-command-arguments
fetched_at: 2026-05-03T06:23:42Z
---

# Claude Codeカスタムコマンドで$ARGUMENTSを使って引数を受け取る方法

「カスタムコマンドを作ったけど、毎回違うファイルやIssue番号を指定したい...」と感じたことはありませんか？

今回伝えたいことの要点は、`$ARGUMENTS` を使えば**1つのコマンドで様々なケースに対応できる**ということです。

コマンド実行時に渡した値をプロンプト内で活用できるため、Issue番号、ファイルパス、検索キーワードなど、状況に応じた柔軟な操作が可能になります。

カスタムコマンドの基本については、別の記事で詳しく解説しています。

[Claude Codeのカスタムコマンドとは？スラッシュコマンドの作り方入門](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-custom-command)

## 忙しい人のために要約

この記事で学べる内容を5つにまとめました。

- `$ARGUMENTS` はコマンド実行時に渡された**引数全体**を受け取るプレースホルダー
- `/mycommand foo bar` と実行すると、`$ARGUMENTS` は `foo bar` に置き換わる
- Issue番号、ファイルパス、検索キーワードなど様々な用途で活用できる
- 引数がない場合は空文字列になるため、**プロンプトで補完対応を考慮**してください
- `argument-hint` フィールドを設定しておくと、引数のヒントが表示される

## $ARGUMENTS とは

`$ARGUMENTS` は、カスタムコマンド実行時に渡された**引数全体を受け取るためのプレースホルダー**です。プロンプト内のどこでも使用でき、非常にシンプルな仕組みになっています。

では、具体例を見てみましょう。以下のようなコマンドファイルがあるとします。

```
---
description: 指定された Issue のタイトルを表示
---

Issue 番号 $ARGUMENTS のタイトルを表示してください。
```

このコマンドを `/show-issue-title 123` と実行すると、`$ARGUMENTS` は `123` に置き換わります。  

その結果、Claudeには「Issue 番号 123 のタイトルを表示してください。」というプロンプトが渡されます。

たったこれだけの仕組みですが、カスタムコマンドの活用範囲が一気に広がりますよね。ぜひ試してみてください。

なお、引数を渡さなかった場合は空文字列となり、意味のないプロンプトが生成されてしまいますので、ご注意ください。

## 使用例：エラーメッセージを分析する

開発現場でよく使うパターンとして、エラーメッセージを分析するコマンドを見てみましょう。

以下の内容を `.claude/commands/search-error.md` として保存しましょう。なお、ここではフロントマターに `argument-hint` を設定することで、入力すべき引数のヒントを表示しています。

カスタムコマンドのフロントマターについては、別の記事で詳しく解説しています。

[Claude Codeカスタムコマンドのフロントマター設定：description・allowed-tools・model](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/custom-command-frontmatter)

```
---
description: エラーメッセージを検索して原因を調査
argument-hint: <error-message>
---

以下のエラーについて調査し、原因と修正方法を提案してください。

$ARGUMENTS
```

使用方法を見てみましょう。たとえば `TypeError: Cannot read property 'map' of undefined` というエラーメッセージについて調査したい場合は、以下のように実行します。

```
/search-error TypeError: Cannot read property 'map' of undefined
```

これで Claudeはエラーメッセージを分析し、プロジェクト内で原因と修正方法を提案してくれます。

!

`argument-hint: <error-message>` を設定しておくと、`/` 入力時のオートコンプリートで引数の形式が表示されます。チームメンバーにとっても使いやすくなるので、設定しておくことをおすすめします。

## 引数入力のコツ

実際に使ってみると「あれ、引数がうまく渡せない...」と戸惑う方もいるかもしれません。カスタムコマンドを呼び出す際には、**引数の入力方法**にちょっとしたコツがあります。

### Tab キーを使った入力

`/fix-issue` とタイプしてすぐに Enter を押すと、引数なしでコマンドが実行されてしまうため注意が必要です。これは避けてください。引数を入力するには、以下の手順で操作しましょう。

1. `/fix-issue` とタイプ
2. **Tab キーでコマンドを選択**（または矢印キーで選択して Tab）
3. スペースを入力
4. 引数を入力（例: `123`）
5. Enter で実行

この流れを覚えておくと、引数付きのコマンドをスムーズに実行できるようになります。

## 複数の値を渡す場合

「2つ以上の値を渡したい場合はどうすればいいの？」という疑問もあるでしょう。

`$ARGUMENTS` は引数全体を**1つの文字列**として受け取ります。つまり、複数の値をスペース区切りで渡すことも可能なわけです。

ただ、個別の引数を扱いたい場合は `$0`, `$1` などの**位置引数**を使う方が確実でしょう。

位置引数の使い方については、別の記事で詳しく解説しています。

[Claude Codeカスタムコマンドで$1/$2/$3を使って複数引数を扱う方法](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/custom-command-multiple-args)

## まとめ

`$ARGUMENTS` を使うことで、カスタムコマンドに**柔軟性**を持たせられます。

- `$ARGUMENTS` は**引数全体を受け取る**プレースホルダー
- `argument-hint` で引数のヒント表示を設定しましょう
- 引数がない場合は空文字列になるため注意が必要です

まずはよく使う操作で引数が必要なものを洗い出してください。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
