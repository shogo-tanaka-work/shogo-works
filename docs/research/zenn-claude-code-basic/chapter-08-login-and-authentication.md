---
chapter: 8
slug: login-and-authentication
title: "Claude Codeのログインと認証設定：ProプランとAPI課金の違い"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/login-and-authentication
fetched_at: 2026-05-03T06:20:50Z
---

# Claude Codeのログインと認証設定：ProプランとAPI課金の違い

「Claude Codeをインストールしたけど、ログインってどうすればいいの？」「アカウントが2種類あるって聞いたけど、どっちを選べばいいか分からない...」と悩んでいませんか？

今回伝えたいことの要点は、**Claude Codeのログインはシンプルで、アカウント選択も用途に応じて判断しやすい**ということです。一言で言えば、「毎日使うならClaude.ai、たまに使うならAnthropic Console」という基準で選べばOKです。

この記事では、ログインの手順から2種類のアカウントの違いまでを解説します。読み終わる頃には、自分に合ったアカウントを選んでログインできるようになっているでしょう。

## 忙しい人のために要約

この記事の要点を5つにまとめました。

- Claude Codeのログインは `claude` コマンド実行時に自動で案内される
- **Claude.ai**（サブスクリプション）と**Anthropic Console**（API従量課金）の2種類がある
- 同じメールアドレスで両方のアカウントを持てる
- 一度ログインすれば認証情報は保存され、次回以降は再ログイン不要
- アカウント切り替えは `/login` コマンドで実行

## ログインの基本

まず、ログインの基本的な流れを説明します。Claude Codeを初めて起動すると、自動的にログイン画面が表示されるのです。

なお、Claude Codeのインストールがまだの方は、別な記事で詳しく解説しています。

[Claude CodeをMacにインストールする方法](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/install-on-mac)  

[Claude CodeをWindowsにインストールする方法](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/install-on-windows)

```
claude
```

ターミナルで上記コマンドを実行してください。するとブラウザが開いてログインページに遷移するからです。ブラウザが使える環境であれば特別な準備は必要ありません。

!

すでにClaude Codeを起動済みで対話モードにいる場合は、`/login` コマンドでもログイン画面を開けます。状況に応じて使い分けましょう。

ただし、**ログインにはブラウザが必要である**という点に注意が必要です。ターミナルからブラウザが開けない環境（SSHでリモート接続している場合など）では、表示されるURLを手動でコピーしてブラウザに貼り付けてください。

## 2種類のアカウント

Claude Codeでは、**2種類のアカウント**が利用できるのをご存じでしょうか？それぞれの違いを表にまとめましたので、参考にしてください。

| アカウント種別 | 料金体系 | 特徴 |
| --- | --- | --- |
| Claude.ai | 月額サブスクリプション | ウェブ版Claude.aiと共通プラン |
| Anthropic Console | API従量課金 | 使った分だけ支払い |

以下で、それぞれの詳細を見ていきます。

### Claude.ai（サブスクリプション）

Claude.aiは、ウェブ版のClaude（[https://claude.ai](https://claude.ai)）と同じアカウントを使用するサービスです。

ProプランやMaxプランに加入していれば、Claude Codeも追加料金なしで利用できるのです。月額固定で使い放題（一定の制限あり）のため、日常的にClaude Codeを使う方に向いています。

!

Claude.aiのProプランは月額$20、Maxプランは月額$100です（2026年1月時点）。ただし、料金は変更される可能性があるため、最新情報は公式サイトで確認してください。

料金体系の詳細については、別な記事で詳しく解説しています。

[Claude Codeの料金体系完全ガイド：ProとMaxの違いと料金比較](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pricing-guide)

### Anthropic Console（API従量課金）

一方、**Anthropic Console**（[https://console.anthropic.com](https://console.anthropic.com) ）は、APIを利用するための開発者向けアカウントです。

事前にクレジットをチャージしておき、使用したトークン数に応じて料金が発生するわけです。Claude Codeで初めてログインすると、「Claude Code」という名前のワークスペースが自動作成されます。

使った分だけの支払いになるため、たまにしかClaude Codeを使わない場合や、API経由でClaude Codeを呼び出す自動化を構築する場合に向いています。

ヘッドレスモード（非対話実行）でのスクリプト自動化については、別な記事で詳しく解説しています。

[Claude Codeのヘッドレスモード（-pオプション）でターミナルから非対話実行する方法](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/headless-mode)

ただ、料金の管理が面倒な場合は、Claude.aiのサブスクリプションプランを選ぶのがおすすめです。

### どちらを選ぶべきか

「どちらを選ぶべきか？」という疑問が生じるかもしれませんが、判断基準はシンプルです。次のケースに当てはまるかどうかで判断してみてください。

**Claude.aiを選ぶケース**

- 毎日Claude Codeを使う予定がある
- ウェブ版Claude.aiも使いたい
- 月額固定で予算管理したい

**Anthropic Consoleを選ぶケース**

- たまにしか使わない
- CI/CDやスクリプトからClaude Codeを自動実行したい
- 使用量を細かくトラッキングしたい

とはいえ、両方のアカウントを持っておくことも可能です。たとえば、日常使いはClaude.ai、自動化用途にはAnthropic Consoleと使い分けるパターンも有効でしょう。

## 同じメールアドレスで両方持てる

実は、Claude.aiとAnthropic Consoleは**同じメールアドレスで両方のアカウントを作成できる**のです。

ログイン時に「Use claude.ai」か「Use Anthropic Console」かを選択する画面が表示されるため、その時点で利用するアカウントを決められます。

## 認証情報の保存

一度ログインすると、認証情報はシステムに保存されるのです。

次回 `claude` コマンドを実行した際は、再ログインなしですぐにClaude Codeを利用できます。認証情報は安全に暗号化されて保存されるため、平文で保存される心配もありません。

!

**共有PCやサーバーでClaude Codeを使う場合**は、セキュリティに注意が必要です。認証情報がそのマシンに保存されるため、他のユーザーがアクセスできる環境では適切な権限管理を行ってください。

## アカウントの切り替え

すでにログイン済みの状態で別のアカウントに切り替えたい場合はどうすればよいでしょうか？対話モード内で `/login` コマンドを実行すればOKです。

```
> /login
```

このコマンドを実行するとブラウザが開いて、再度ログインフローを実行できるからです。Claude.aiからAnthropic Consoleへの切り替え、またはその逆も、同じコマンドで対応できます。

## まとめ

この記事では、**Claude Codeのログイン方法**と2種類のアカウントの違いを解説しました。

- `claude` コマンドでログインフローが開始
- Claude.ai（月額制）とAnthropic Console（従量課金）から選択
- 同じメールで両方持てる
- 認証情報は安全に保存され、次回以降は再ログイン不要
- `/login` でアカウント切り替え可能

ログインが完了したら、実際にプロジェクトディレクトリでClaude Codeを起動して使い始めてください。

初回セッションの始め方については、別な記事で詳しく解説しています。

[Claude Codeの最初のセッション：起動から基本操作まで](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/first-session)

Claude Codeの効果的な活用方法やベストプラクティスについては、別な記事で詳しく解説しています。

[Anthropicが公開しているClaude Codeのベストプラクティスを初心者向けに解説](https://zenn.dev/tmasuyama1114/articles/claude_code_best_practice_guide)
