---
chapter: 7
slug: install-on-windows
title: "Claude CodeをWindowsにインストールする方法"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/install-on-windows
fetched_at: 2026-05-03T06:20:40Z
---

# Claude CodeをWindowsにインストールする方法

こんにちは、とまだです。

「Claude Codeを使ってみたいけど、Windowsへのインストールって難しそう...」と感じていませんか？

今回伝えたいことの要点は、**PowerShellなら1コマンドで完了する**ということです。Node.jsの事前インストールも不要なので、コマンドラインに慣れていない方でも迷わずセットアップできます。

なお、以前はWSL（Windows Subsystem for Linux）の中にインストールする必要がありましたが、現在はWindowsネイティブで動作するようになりました。（

この記事では、3つのインストール方法を比較しながら、それぞれの手順とトラブルシューティングまで解説します。

## 忙しい人のために要約

この記事の要点を3つにまとめました。

- **PowerShell**でのネイティブインストールが最も簡単で、Node.jsは不要
- **コマンドプロンプト**や**WSL**経由でもインストール可能
- インストール後は `claude` コマンドを実行して**ログイン**

## 前提条件

Claude Codeをインストールする前に、以下の環境を確認してください。

**必要なもの:**

- PowerShellまたはコマンドプロンプト（Windowsには標準でインストール済み）
- Claude.aiまたはClaude Consoleのアカウント
- 作業フォルダ（コードプロジェクト、または練習用の空フォルダ）

「どちらのアカウントを作ればいいの？」と思った方もいるかもしれません。[Claude.ai](https://claude.ai)はサブスクリプションプラン、[Claude Console](https://console.anthropic.com)はAPIアクセス用のプリペイドクレジット方式です。一般的な開発用途であれば、Claude.aiがおすすめです。

アカウントの詳しい違いやログイン方法については、別な記事で詳しく解説しています。

[Claude Codeのログインと認証設定：ProプランとAPI課金の違い](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/login-and-authentication)

## PowerShellでのインストール（推奨）

最もシンプルで推奨される方法がPowerShellを使ったインストールです。PowerShellを開いて、以下のコマンドを実行するだけで完了します。

```
irm https://claude.ai/install.ps1 | iex
```

このコマンドを実行すると、インストールスクリプトがダウンロードされ、自動的にセットアップが進みます。

!

`irm`は`Invoke-RestMethod`、`iex`は`Invoke-Expression`の省略形です。コマンドをコピペするだけで動くので、PowerShellに慣れていない方でも問題ありません。

### 管理者権限が必要な場合

インストール中に権限エラーが発生した場合は、管理者としてPowerShellを起動してください。スタートメニューで「PowerShell」を検索し、右クリックで「管理者として実行」を選択します。

一方で、可能な限り管理者権限なしでインストールするのがおすすめです。管理者権限が不要な場合はユーザーディレクトリにインストールされるため、システム全体に影響を与えません。

## コマンドプロンプトでのインストール

PowerShellが使えない場合は、コマンドプロンプトからもインストールできます。

```
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

このコマンドは、インストールスクリプトのダウンロード、実行、削除を1行で行います。

!

PowerShellの方がより現代的で、Windows 10以降では標準的に利用されているため、特別な理由がなければPowerShellをおすすめします。

## WSL経由のインストール

以前はWindowsでClaude Codeを使うにはWSL（Windows Subsystem for Linux）の中にインストールする必要がありました。現在はネイティブインストールが推奨ですが、WSL環境で開発している方はこちらの方法も利用できます。

```
curl -fsSL https://claude.ai/install.sh | bash
```

このコマンドはMacやLinuxと同じインストール方法です。WSL 1とWSL 2の両方で動作します。

一方で、WSLはWindows上で仮想的にLinuxを動かしているため、ネイティブのWindowsインストールと比較するとオーバーヘッドがあります。特別な理由がなければ、PowerShellでのインストールを選んでください。

## npm経由のインストール（代替）

ネイティブインストールがうまくいかない場合は、npm経由でもインストールできます。ただし、Node.js 18以上が必要です。

```
npm install -g @anthropic-ai/claude-code
```

!

管理者権限でnpmをグローバルインストールすると権限問題の原因になる場合があります。権限エラーが発生した場合は、[npmのドキュメント](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)を参照してください。

npm経由はあくまで代替手段という位置づけです。特別な理由がなければ、PowerShellでのインストールを選んでください。

## インストール後の確認

インストールが完了したら、PowerShell（またはコマンドプロンプト）で `claude` コマンドを実行してみてください。

```
claude
```

初回起動時にはログインを求められます。Claude.aiまたはClaude Consoleのアカウントでログインすると、認証情報が保存されて次回以降は自動でログインされます。

初めてClaude Codeを使う方は、次のステップについて別な記事で詳しく解説しています。

[Claude Codeの最初のセッション：起動から基本操作まで](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/first-session)

### 動作確認には claude doctor

環境に問題がないか確認したい場合は、診断ツールを使うと便利です。

```
claude doctor
```

インストールタイプやバージョン情報、環境設定の状態が表示されます。問題がある場合は警告やエラーメッセージも出力されるため、トラブルシューティングの第一歩として活用できます。

## インストール方法の比較

どの方法を選ぶか迷っている方のために、比較表を用意しました。

| 方法 | 前提条件 | 推奨度 | 備考 |
| --- | --- | --- | --- |
| PowerShell | なし | ★★★ | 最も簡単でNode.js不要 |
| コマンドプロンプト | なし | ★★☆ | PowerShellが使えない場合 |
| WSL | WSL導入済み | ★☆☆ | WSL環境で開発している方向け |

基本的には**PowerShellでのインストールを選んでおけば問題ありません**。

## よくあるトラブルと対処法

インストール時に問題が発生した場合は、以下の対処法を試してください。

### コマンドが見つからない場合

インストール後に `claude` コマンドが見つからない場合は、ターミナルを再起動してください。環境変数が再読み込みされることで、パスが通ります。

上記で解決しない場合は、インストールが正常に完了していない可能性があります。再度インストールコマンドを実行してみてください。

### 実行ポリシーエラーが発生した場合

PowerShellで「スクリプトの実行が無効」というエラーが表示された場合は、実行ポリシーを変更する必要があります。

管理者としてPowerShellを起動し、以下のコマンドを実行してください。

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

!

実行ポリシーの変更はセキュリティに関わる設定です。企業環境などでポリシーが制限されている場合は、IT管理者に相談してください。

セキュリティ設定については、別な記事でより詳しく解説しています。

[Claude Codeのパーミッション設定を最適化する：セキュリティと利便性のバランス](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/permission-optimization)

### ウイルス対策ソフトによるブロック

一部のウイルス対策ソフトがインストールスクリプトをブロックする場合があります。一時的にリアルタイム保護を無効にしてインストールを試みてください。インストール完了後は、リアルタイム保護を有効に戻すことを忘れないでください。

## まとめ

この記事では、WindowsへのClaude Codeインストール方法を解説しました。

- PowerShellでのインストールが最も簡単で、Node.jsは不要
- コマンドプロンプトやWSL経由も選択可能
- インストール後は `claude` コマンドを実行してログイン

インストールが完了したら、さっそく `claude` コマンドを実行してClaude Codeを起動してみてください。プロジェクトディレクトリで起動すると、そのプロジェクトについて質問したり、コードの修正を依頼したりできます。

基本的なコマンドの使い方については、別な記事で詳しく解説しています。

[Claude Codeの基本コマンド一覧：日常で使う主要コマンド](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/basic-commands)

Macユーザーの方は、Mac向けのインストール手順を用意しています。

[Claude CodeをMacにインストールする方法](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/install-on-mac)
