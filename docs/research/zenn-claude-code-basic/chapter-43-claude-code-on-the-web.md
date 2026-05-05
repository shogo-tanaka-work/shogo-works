---
chapter: 43
slug: claude-code-on-the-web
title: "Claude Code on the Webとは？ブラウザでAI駆動開発を始める方法"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/claude-code-on-the-web
fetched_at: 2026-05-03T06:26:25Z
---

# Claude Code on the Webとは？ブラウザでAI駆動開発を始める方法

こんにちは、とまだです。

「Claude Codeを使ってみたいけど、セットアップが面倒...」「出先でちょっとした修正を依頼したいけど、PCがない...」といった経験はありませんか？

今回伝えたいことの要点は、**ブラウザからClaude Codeを使える「Claude Code on the Web」を活用すれば、環境構築なしで今すぐAI駆動開発を始められる**ということです。

この記事では、Claude Code on the Webの概要から実際の使い方、CLI版との使い分けまでを解説します。読み終わる頃には、どのような場面でWeb版を選ぶべきか判断できるようになるのではないでしょうか。

## 忙しい人のために要約

この記事のポイントは以下の通りです。

- **Claude Code on the Web**はブラウザからclaude.ai/codeにアクセスして使う機能
- GitHubアカウントを接続し、リポジトリへのアクセス許可を与えて使用
- セキュアなクラウドSandbox環境でコード分析・変更・PR作成まで完結
- 複数タスクの**並列処理**やスマホアプリからの作業に対応
- ローカルCLIとの連携もサポート（**Open in CLI**機能）
- **SessionStartフック**で依存関係のインストールを自動化できる

## Claude Code on the Webの概要

Claude Code on the Webは、2025年10月に公開されたClaude Codeのブラウザ版です。通常のClaude Codeはターミナルで動作するCLIツールですが、Claude Code on the WebではWebブラウザ上で同様の機能を使えるのが特徴です。

Claude Codeの基本的な概念については、別な記事で詳しく解説しています。

[Claude Codeとは？AI駆動開発のメリット・特徴を徹底解説](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-claude-code)

Claude のブラウザ版を開き、サイドバーから「コード」をクリックすると、Claude Code on the Webのページが開きます。

![](https://static.zenn.studio/user-upload/deployed-images/b719e8a55055f4229c5b64d7.png?sha=b76886175316d58e10fc933a184e5a2283fc6972)

![](https://static.zenn.studio/user-upload/deployed-images/d1015409f2caa9007cf32ede.png?sha=597f680e3b5c8393dd1c05bc02de86b5f55ed483)

執筆している2026年1月現在は**リサーチプレビュー中**であり、Claude Pro/Maxプランのユーザーのみが利用可能です（Team/Enterpriseプレミアムシートユーザーへの提供は近日予定）。正直なところ、まだ発展途上の機能ではありますが、すでに実用的なレベルに達していると感じています。

!

Claude Code on the Webは比較的新しい機能のため、仕様が変更される可能性があります。最新情報は[公式ドキュメント](https://docs.anthropic.com/ja/docs/claude-code/claude-code-on-the-web)で確認することをおすすめします。

## 主な用途

「CLIがあるのに、なぜブラウザ版が必要なの？」という疑問を持つ方もいるかもしれません。

しかし、Claude Code on the Webには**CLI版とは異なる強み**があります。公式ドキュメントでは、以下のようなユースケースが挙げられています。

### コードアーキテクチャへの質問

大規模なリポジトリの構造を把握したいときに役立ちます。

「このプロジェクトの全体像を教えて」「認証処理はどこで行っている？」といった質問を投げかけることで、効率的にコードベースを理解できます。

もちろん、コードアーキテクチャへの質問はCLI版でも可能ですが、ローカルにリポジトリをクローンしなくても読み込めますので、より気軽に質問できるのが強みです。

### バグ修正と定型タスク

新機能の開発ではユーザーが細かくハンドリングしてあげる必要がある一方で、既存の機能のバグ修正やリファクタリングは、そこまで細かいハンドリングが必要ないタスクです。

こういったタスクは、**指示を出して、あとは完了を待つだけという**ワークフローが実現できます。

そのため CLI 版ではなくとも Web 版でも実行でき、いつでもどこでも作業を開始できます。

### 複数タスクの並列処理

ブラウザ上で**複数のタスクを同時に実行できる**点も見逃せません。

たとえば、複数のバグ修正を並行して進めるといった使い方が可能です。

ただし、並列実行するとレート制限の消費が早まったり、コンフリクトが発生する可能性がありますので、程々に使うのが良いでしょう。

### 移動中の作業

Claude の**スマホアプリからもアクセスできる**ため、移動中にコードの確認やちょっとした修正依頼が可能です。

通勤中やノートパソコンから離れている間にタスクを開始し、エージェントの作業を監視したり、追加の指示を出したりすることができます。

## セットアップ手順

Claude Code on the Webを使い始めるのは簡単です。セットアップは**5つの手順**で完了します。

1. [claude.ai/code](https://claude.ai/code)にアクセス
2. GitHubアカウントを接続
3. 作業したいリポジトリにClaude GitHub Appをインストール
4. デフォルト環境を選択（ネットワークアクセスレベルの設定）
5. コーディングタスクを送信して作業開始

![](https://static.zenn.studio/user-upload/deployed-images/585365058271d846bab22e48.png?sha=51fe9906d6d6ed0b48ca938326fc2ae8972f7f88)

GitHubアカウントを接続すると、Anthropicが管理するセキュアな仮想マシンにリポジトリがクローンされます。この仕組みのおかげで、ローカル環境を汚さずにコード分析や変更を行えるわけです。

!

Claude GitHub Appを一度インストールすれば、以後新規作成したリポジトリでも自動的に利用可能になります。

## 実際の作業の流れ

リポジトリを選択したら、CLI版と同じように自然言語で指示を出すだけです。

```
> テストカバレッジを確認して、足りない部分を追加して
```

![](https://static.zenn.studio/user-upload/deployed-images/98b659031231acafdf2e338c.png?sha=49e84a92a087c600ddf774ab23d036dccf4dcde0)

タスクを開始すると、内部では以下のような処理が行われます。

1. **リポジトリのクローン**: リポジトリがAnthropic管理の仮想マシンにクローンされる
2. **環境セットアップ**: Claudeがコードを含むセキュアなクラウド環境を準備
3. **ネットワーク構成**: インターネットアクセスが設定に基づいて構成される
4. **タスク実行**: Claudeがコードを分析し、変更を加え、テストを実行
5. **完了**: 変更がブランチにプッシュされ、PR作成の準備ができる

![](https://static.zenn.studio/user-upload/deployed-images/ce4c6c979276ddc9b34e2c4a.png?sha=a44fcc0c38df4e372679d87e1186d6b8a12e6403)

作業が完了すると、Claude CodeがGitHubにプルリクエストを作成できるようになります。

![](https://static.zenn.studio/user-upload/deployed-images/962ffa2f08f595910c6b5d85.png?sha=38c46aaa307babcba3b9bac7c860f0588a286756)

あとはGitHub上でレビューしてマージするだけなので、ブラウザから離れる必要がないのはありがたいです。

## WebからCLIへの移動

Claude Code on the Webで開始した作業を、ローカルのCLIに引き継ぐことも可能です。この機能は**Open in CLI**と呼ばれています。

具体的な手順は以下の通りです。

1. ブラウザ上で「Open in CLI」（CLIで開く）ボタンをクリック
2. コマンドがクリップボードにコピーされる
3. ローカルでリポジトリをチェックアウトし、作業ブランチに移動
4. コマンドをターミナルで実行
5. 既存のローカル変更はスタッシュされ、リモートセッションが読み込まれる

例えば、以下のようなコマンドがコピーされます。

```
claude --teleport session_0123xxxxxxxyyyyyyzzzzzzzzzzz
```

これをローカルで実行すると、以下のように引き継げます。

```
──────────────────────────────────────────────────────────────────────────────────────────
 Teleport to Repo

 Open Claude Code in tomada1114/vibe-coding-studio:

 ❯ 1. Use ~/workspace/vibe-coding-studio
   2. Cancel

 Enter to confirm · Esc to cancel
```

引き継いだ後は、Web版の続きとしてそのまま作業を継続できます。

```
  結果

  ✅ すべてのテストが合格
  ✅ ESLint・TypeScript・テストチェック全てクリア
  ✅ コアモジュールのカバレッジが80%以上を維持
  ✅ ブランチ claude/add-test-coverage-SAMMw にpush完了

  変更はコミットされ、GitHubにpushされました。必要に応じてプルリクエストを作成できます。

⏺ Session resumed

──────────────────────────────────────────────────────────────────────────────────────────
> 
──────────────────────────────────────────────────────────────────────────────────────────
  ? for shortcuts
```

思っていたよりシームレスに引き継げるので、移動中にWebで作業を開始し、デスクに戻ってからCLIで本格的に作業を続けたい場合に便利です。

CLI版の基本的な使い方については、別な記事で詳しく解説しています。

[Claude Codeの最初のセッション：起動から基本操作まで](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/first-session)

!

セッションを移動できるのは、同じアカウントに認証されている場合のみです。

## SessionStartフックの活用

多くのプロジェクトだと、依存関係のインストールが必要になります。  

Claude Code on the Web が自主的に判断してインストールを試行してくれることもありますが、Hooks の SessionStart フックを使うことで、より確実に依存関係のインストールを行うことができます。

簡単に言うと、「セッション開始時に自動でスクリプトを実行する」ということです。

そのスクリプトには、依存関係のインストールを行うコマンドを記述します。その設定ファイルとスクリプトを Git 管理することで、依存関係のインストールを自動化できます。

### 設定方法

`.claude/settings.json` に以下のように記述します。

```
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "startup",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/scripts/install_pkgs.sh"
          }
        ]
      }
    ]
  }
}
```

### セットアップスクリプトの例

次に `scripts/install_pkgs.sh` を作成します。

こちらは React や Next.js のプロジェクトでよく使う `npm install` を実行するスクリプトです。

```
#!/bin/bash

# Auto-install dependencies on session start
# This script is triggered by the SessionStart hook in .claude/settings.json

echo "📦 Installing dependencies..."

# Install Node.js dependencies
if [ -f "package.json" ]; then
  echo "Installing npm packages..."
  npm install
else
  echo "⚠️  No package.json found"
fi

exit 0
```

私自身もこのスクリプトを使っていますが、`package.json` の有無をチェックしてから `npm install` を実行するシンプルな構成です。

Pythonプロジェクトであれば `pip install -r requirements.txt` に置き換えるなど、プロジェクトに合わせてカスタマイズしてください。

SessionStartフックの詳細な設定方法や他のHooksについては、別な記事で詳しく解説しています。

[Claude CodeのSessionStartフックで初期化を自動化：npm installの自動実行](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/session-start-hook)

[Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks)

## クラウド環境の設定

Claude Code on the Web では、クラウド環境を使用してコード分析や変更を行います。

Anthropicが提供するクラウド環境に接続して行うわけですが、その環境について設定することができます。

!

2026年1月執筆時点の情報です。リサーチプレビュー中のため、仕様が変更される可能性があります。最新情報は[公式ドキュメント](https://docs.anthropic.com/ja/docs/claude-code/claude-code-on-the-web)で確認することをおすすめします。

### ネットワークアクセスの制限

セキュリティ上の理由から、仮想環境からのネットワークアクセスはデフォルトで**許可リストドメイン**に制限されています。許可されている主なドメインは以下の通りです。

| カテゴリ | 許可ドメイン例 |
| --- | --- |
| バージョン管理 | github.com, gitlab.com, bitbucket.org |
| パッケージレジストリ | registry.npmjs.org, pypi.org, crates.io |
| クラウドプラットフォーム | *.googleapis.com, *.microsoftonline.com |
| コンテナレジストリ | ghcr.io, mcr.microsoft.com |

外部APIを使用するプロジェクトでは、必要なドメインが許可リストに含まれているか事前に確認しておくと安心です。含まれていない場合は接続に失敗してしまいます。

### 新しいクラウド環境の設定を追加する

チャット入力欄の近くにある `Default` という欄をクリックすると、新しいクラウド環境の設定を追加することができます。

「+環境を追加」を選択します。

![](https://static.zenn.studio/user-upload/deployed-images/51e972e6bec9ee1870fabd9b.png?sha=bd4fbc0609772c4d8564778be2bc82dd6bc3de01)

こちらを選択すると、以下のようにクラウド環境の設定画面が表示されます。

![](https://static.zenn.studio/user-upload/deployed-images/7b3e379f80366285674db879.png?sha=9159bb0788f8a730cb862f3f8eca4d2f016c51d7)

名前は自由に付けられますので、後から選択するときにわかりやすい名前を付けるとよいでしょう。

### ネットワークアクセスのレベルを選択する

ネットワークアクセスのレベルは、プルダウンから選択できます。

- なし：ネットワークアクセスを全く許可しない
- Trusted：検証済みのソースからのみネットワークアクセスを許可
- Full：すべてのネットワークアクセスを許可
- カスタム：許可するドメインを自由に指定できる

![](https://static.zenn.studio/user-upload/deployed-images/48828529adad44b540dca079.png?sha=65e3ca4fea490a579f623af1307ea303c7a522b3)

このうち、Trusted の場合は `github.com` や `npmjs.com` など、開発でよく使うドメインが自動的に許可されます。

詳しくは以下の公式ドキュメントを参照してください。

[https://code.claude.com/docs/en/claude-code-on-the-web#default-allowed-domains](https://code.claude.com/docs/en/claude-code-on-the-web#default-allowed-domains)

カスタムを選択すると、許可するドメインを自由に指定できるようになります。

![](https://static.zenn.studio/user-upload/deployed-images/3bdaa901e24be689fa4a4090.png?sha=b36e911498282d582f2c67cff57f17c1b634f470)

なお、`npm` などの一般的なパッケージマネージャーについてはチェックマークを付けるだけで、Trusted の場合と同じように自動的に許可されます。

そのため、カスタムを選択する時はこちらにチェックをつけつつ、追加で許可したいドメインを追加するのが良いでしょう。

### 環境変数の設定

Claude Code on the Web で開発をする上で、環境変数を設定することもできます。

クラウド環境の設定画面の中で「環境変数」という欄がありますので、この中で環境変数を設定することができます。

`.env` などと同じように `KEY=VALUE` 形式で設定することができます。

![](https://static.zenn.studio/user-upload/deployed-images/35a2a5822e1ed7ed64bf40a7.png?sha=8f7f52bb486aea9aa59660506aca1eb92121ee30)

セキュリティ設定については、別な記事で詳しく解説しています。

[Claude Codeのパーミッション設定を最適化する：セキュリティと利便性のバランス](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/permission-optimization)

## 制限事項

Claude Code on the Webにはいくつかの制限があります。利用前に把握しておくと、期待とのギャップを避けられるでしょう。

### GitHubリポジトリのみ対応

現時点では、**GitHubでホストされているリポジトリでのみ動作します**。  

GitLabやBitbucketなど、他のGitホスティングサービスには対応していません。GitHubを使っていないプロジェクトでは、残念ながら利用できないのが現状です。

### プラン制限

2026年1月現在は**Claude Pro/Maxプランのユーザーのみ**が利用可能です。無料プランでは利用できません。Team/Enterpriseプレミアムシートユーザーへの提供は近日予定とのことです。

## CLI版との使い分け

Claude Code on the WebとCLI版は、どちらが優れているというものではなく、場面や状況に応じた使い分けが効果的です。

一つの目安としては、以下の表を参考にしてください。

| 状況 | 推奨 |
| --- | --- |
| 本格的な開発作業 | CLI版 |
| バグ修正や定型タスク | Web版 |
| 移動中のちょっとした修正 | Web版 |
| ローカルにクローンしていないリポジトリ | Web版 |
| 複数タスクの並列処理 | Web版 |
| MCPサーバーとの連携 | CLI版 |

Web版は「タスクを投げて、あとは待つだけ」というワークフローに向いています。一方で、**MCPサーバ**の利用や本格的なカスタマイズが必要な場合は、CLI版を選択するのがおすすめです。

Claude CodeとCursorなど他のツールとの比較については、別な記事で詳しく解説しています。

[Claude Code vs Cursor：どっちを選ぶべき？違いと使い分けを解説](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/claude-code-vs-cursor)

## まとめ

この記事では、Claude Code on the Webの概要と使い方を解説しました。

- **ブラウザから**claude.ai/codeにアクセスして使用可能
- **GitHubリポジトリ**と連携し、PR作成まで完結
- **Open in CLI**でローカルへの引き継ぎも可能

CLI版とWeb版を使い分けることで、より柔軟なAI駆動開発が実現できますので、ぜひ試してみてください。
