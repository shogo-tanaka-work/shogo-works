---
chapter: 15
slug: git-operations-with-claude-code
title: "Claude CodeでGit操作を自動化する：自然言語でcommit・PR作成まで"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/git-operations-with-claude-code
fetched_at: 2026-05-03T06:21:57Z
---

# Claude CodeでGit操作を自動化する：自然言語でcommit・PR作成まで

こんにちは、とまだです。

「Gitのコマンドって毎回調べないと出てこない…」と感じることはありませんか？

今回伝えたいことは、**Claude Codeに自然言語で伝えるだけで、Gitの初期化からPRの作成・マージまで一通りの操作が完結する**ということです。

コマンドを覚えなくても、「コミットして」「PRを作って」と伝えるだけでOK。開発のテンポを崩さずにGit操作できるのがClaude Codeの強みのひとつです。

この記事では、Claude Codeを使ったGit操作の基本フローを解説します。リポジトリの初期化・コミット・ブランチ作成・GitHubへのプッシュ・PR作成とマージまで、実際のコマンドの流れを見ながら手順を追っていきます。読み終わる頃には、Gitコマンドを調べる時間をほぼゼロにできる感覚がつかめているはずです。

## 忙しい人のために要約

この記事の要点を5つにまとめました。

- **Claude Codeは自然言語のGit指示を実行できる**：「コミットして」「PRを作って」だけで一連の操作が完結する
- **コミットメッセージはClaude Codeが自動生成**：変更内容を分析してConventional Commits準拠のメッセージを提案してくれる
- **GitHub CLIと連携してPRの作成・マージも可能**：ブラウザを開かずターミナルだけでGitHubの操作が完結する
- **リモート操作には確認画面が表示される**：pushやPR作成などの影響範囲が大きい操作は、必ずYes/Noを確認してから実行される
- **パーミッション設定で意図しないpushを防げる**：settings.jsonで`git push`をaskに指定しておくと安全

## 事前準備

このハンズオンを進めるには、以下の3つが必要です。

- **Git**：Macでは`git --version`でバージョンが表示されればOK。表示されない場合はXcode Command Line Toolsのインストールダイアログが出るので「インストール」をクリック。Windowsは[https://gitforwindows.org/](https://gitforwindows.org/) からインストーラーを実行してください
- **GitHubアカウント**：[https://github.com](https://github.com) でアカウントを作成してください
- **GitHub CLI（gh）**：`brew install gh`（Mac）または`winget install --id GitHub.cli`（Windows）でインストール後、`gh auth login`で認証を済ませてください

!

GitHub CLIは、Claude CodeがGitHub操作（PR作成・マージなど）を実行するために必要なツールです。認証が済んでいないと、Step 4以降のGitHub操作が実行できません。

Git操作が動作する任意のプロジェクトディレクトリがあれば、以下のハンズオンをそのまま試せます。

## 基本用語を確認しよう

Git操作に入る前に、このハンズオンで使う基本用語を整理しておきましょう。以下の7つはStep 1〜7でひと通り体験します。

| 用語 | 意味 |
| --- | --- |
| **リポジトリ** | プロジェクトの変更履歴を保存する場所 |
| **コミット** | 変更を記録するセーブポイント |
| **ブランチ** | 開発の流れを分岐させる仕組み |
| **プッシュ** | ローカルの変更をGitHub（リモート）に送る |
| **Pull Request（PR）** | 変更内容をレビューしてもらうための依頼 |
| **マージ** | ブランチの変更を統合する操作 |
| **プル** | リモートの変更をローカルに取り込む操作 |

## リポジトリを作成してコミットしよう

プロジェクトのディレクトリでClaude Codeを起動しましょう。

```
cd ~/Desktop/your-project
claude
```

### Step 1: リポジトリを初期化する

最初に、プロジェクトのディレクトリをGitリポジトリとして初期化します。Claude Codeに依頼してみましょう。

```
> このディレクトリをGitリポジトリとして初期化してください
```

Claude Codeが`git init`を実行し、リポジトリが初期化されます。

```
⏺ Bash(git init)
  ⎿  Initialized empty Git repository in /Users/username/Desktop/your-project/.git/

⏺ Gitリポジトリを初期化しました。
```

Viteなどのツールでプロジェクトを作成した場合、`.gitignore`ファイルはすでに生成されています。`.gitignore`とは、Gitで追跡しないファイルを指定するための設定ファイルです。

↓ .gitignore の主要な設定（一部抜粋）

```
node_modules
dist
*.log
*.local
```

`node_modules`（インストールしたパッケージの実体）や`dist`（ビルド出力）、ログファイルなどをGitの管理対象から除外することで、リポジトリを軽量に保てます。

### Step 2: 最初のコミットを作成する

リポジトリが初期化できたら、現在のコードをコミットします。コミットにはまずステージング（対象ファイルの登録）が必要ですが、Claude Codeに任せれば自動で処理してくれます。

```
> 現在のコードをすべてコミットしてください。
  コミットメッセージは日本語でお願いします
```

Claude Codeがファイルのステージング（`git add`）とコミット（`git commit`）を実行します。

```
⏺ Bash(git add .gitignore README.md src/ ...)
  ⎿  (No output)

⏺ Bash(git commit -m "chore: プロジェクトの初期セットアップ")
  ⎿  [main (root-commit) 563656f] chore: プロジェクトの初期セットアップ
      11 files changed, 3683 insertions(+)
      ...

⏺ 初回コミットを作成しました。
```

注目してほしいのは、**Claude Codeが変更内容を分析して適切なコミットメッセージを自動生成している**点です。`git commit`の実行前に承認を求められたら、内容を確認して問題なければ「Yes」を選択しましょう。メッセージを変えたい場合は「No」を選んで、次のように依頼できます。

```
> コミットメッセージを「初期コミット：プロジェクトの基本機能を実装」に変えてください
```

コミットメッセージに`chore:`というプレフィックスが付いています。これはConventional Commitsと呼ばれる慣習で、`chore`（環境構築）、`feat`（機能追加）、`fix`（バグ修正）、`docs`（ドキュメント）といったプレフィックスで変更の種類を示します。

!

毎回プレフィックスの指定を伝えるのは手間ですが、CLAUDE.mdにルールとして記載しておくと、自動で従ってくれるようになります。CLAUDE.mdについては、[CLAUDE.mdとは？Claude Codeのプロジェクト設定ファイルを理解する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-claude-md)で詳しく解説しています。

## コミットを工夫しよう

コミットの基本操作を体験したところで、コミットのタイミングについて考えてみましょう。Claude Codeのように大量のコードを一気に生成するツールを使うと、1回の変更量が大きくなり、タイミングに迷うことがあります。次の2つの方針を参考にしてください。

### 方針1：依頼のたびにコミットする

**最初のうちにおすすめの方法**です。Claude Codeに機能追加を依頼すると、複数のファイルが一度に変更されることが珍しくありません。Claude Codeへの依頼1回ごとに動作確認してコミットしておけば、何か問題が起きても直前の状態に戻れます。

### 方針2：機能単位でコミットする

作業の流れを把握できたら、**ひとつの機能がまとまったタイミングでコミット**する方式に切り替えましょう。コミット履歴が「意味のある変更」だけで構成されるため、後から履歴を辿りやすくなります。

どちらの方法でも、Claude Codeにコミットメッセージの生成を任せることで、コミットへの負担は大きく減ります。

## ブランチを作って機能を追加しよう

コミットの方針を押さえたところで、次のステップに進みます。

ここまではすべての変更をmainブランチという1本の流れで管理してきました。mainブランチはプロジェクトの安定した状態を保つためのブランチです。新しい機能を追加するときにmainへ直接変更し続けると、開発中の不安定なコードが混入するリスクがあります。

これを防ぐのがブランチの分岐です。新しいブランチを作れば、mainを安定した状態に保ちつつ、別の場所で機能を開発できます。もし問題が起きても、ブランチごと破棄すればmainには影響しません。

### Step 3: ブランチを作成して変更する

ブランチの練習として、READMEを更新してみましょう。まずブランチを作成します。

```
> feature/update-readme というブランチを作成してください
```

Claude Codeが`git checkout -b feature/update-readme`を実行し、新しいブランチに切り替わります。

```
⏺ Bash(git checkout -b feature/update-readme)
  ⎿  Switched to a new branch 'feature/update-readme'

⏺ feature/update-readme ブランチを作成し、切り替えました。
```

続いて、READMEの更新を依頼します。

```
> README.mdを現在のプロジェクトの内容に合わせて更新してください。
  アプリの概要、主な機能、起動方法を記載してください
```

Claude Codeがプロジェクトの内容を読み取り、READMEを更新してくれます。更新が完了したら、変更をコミットします。

```
> 変更をコミットしてください
```

```
⏺ Bash(git add README.md && git commit -m "docs: README.mdをプロジェクトの内容に合わせて更新")
  ⎿  [feature/update-readme eb84dfc] docs: README.mdをプロジェクトの内容に合わせて更新
      1 file changed, 32 insertions(+), 9 deletions(-)

⏺ コミットしました (eb84dfc)。
```

このように、ブランチを作成してから作業し、コミットするという流れがGitの基本的な開発サイクルです。

## GitHubにプッシュしてPRを作ろう

ローカルでの開発フローは一通り体験できました。ここからは、ローカルの変更をGitHubと共有する方法に進みます。

現在、feature/update-readmeブランチはまだローカルにしか存在しません。GitHubに公開することで、チームで共有したり、変更内容をレビューしてもらえるようになります。個人開発でも、コードのバックアップや変更履歴の可視化に役立ちます。

### Step 4: GitHubリポジトリを作成してプッシュする

GitHubにコードをプッシュするには、まずリモートリポジトリが必要です。Claude Codeに依頼して、リポジトリの作成からプッシュまでを一度に進めましょう。

```
> GitHubに my-app という名前のリポジトリを作成して、
  コードをプッシュしてください
```

GitHubのリポジトリには**Public**（誰でも見れる）と**Private**（非公開）の2種類があります。指定しなかった場合、以下のような確認画面が表示されることがあります。

```
⏺ リポジトリの公開設定を確認させてください。

─────────────────────────────────────
 ☐ Visibility

GitHubリポジトリの公開設定はどちらにしますか？

❯ 1. Public
     誰でも閲覧可能
  2. Private
     自分だけがアクセス可能
  3. Type something.
─────────────────────────────────────
  4. Chat about this
```

この確認画面はClaude Codeの「AskUserQuestion tool」という機能で表示されます。選択肢から選ぶほか、「3. Type something.」で自由にテキストを入力して回答することもできます。今回は「1. Public」を選択しましょう。

次に、Claude CodeがGitHub CLIの`gh repo create`でGitHubにリポジトリを作成し、コードをプッシュします。リモートへの操作は影響範囲が大きいので、確認画面で内容を確認してから「Yes」を選択しましょう。

```
 Bash command

   gh repo create my-app --public --source=. --push
   Create public GitHub repo and push

 This command requires approval

 Do you want to proceed?
 ❯ 1. Yes
   2. Yes, and don't ask again for: gh repo:*
   3. No
```

`--push`オプションにより、リポジトリの作成と同時に現在のブランチがプッシュされます。さらにClaude Codeはmainブランチもプッシュが必要と判断して追加で実行します。

```
⏺ 完了しました。

  - リポジトリ: https://github.com/your-username/my-app
  - main と feature/update-readme の両ブランチをプッシュ済みです
```

リポジトリのURLが出力に表示されたら、ブラウザでアクセスして確認してみてください。

![GitHubに作成されたリポジトリ](https://static.zenn.studio/user-upload/deployed-images/2a474046d4750b57170f3904.png?sha=e1b04e7f05cdb07043ec47998a858d42c2cd8fea)

なお、[Claude Codeのパーミッション設定を最適化する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/permission-optimization)で紹介している方法で`git push`をask（確認を強制）に指定しておくと、意図しないプッシュを防げます。

↓ .claude/settings.json でgit pushをaskに指定した場合の例

```
{
  "permissions": {
    "ask": ["Bash(git push *)"]
  }
}
```

### Step 5: PRを作成する

feature/update-readmeブランチにいることを確認したら、PRを作成します。PRを作成することで、変更の差分が一覧でき、レビューを依頼できます。

```
> feature/update-readme ブランチのPRを作成してください。
  タイトルと説明文もわかりやすい内容を埋めてください
```

Claude CodeがGitHub CLIの`gh pr create`を実行し、PRのタイトルと説明文を自動生成してくれます。

```
⏺ Bash(gh pr create ...)
  ⎿  https://github.com/your-username/my-app/pull/1

⏺ PRを作成しました: https://github.com/your-username/my-app/pull/1
```

表示されたURLにアクセスすると、GitHubのPRページで内容を確認できます。

![GitHubに作成されたPR](https://static.zenn.studio/user-upload/deployed-images/af4040ee92781bb3953e1306.png?sha=f06110b40e50285729512c8492323bd9e36f9766)

### Step 6: PRをマージする

PRの内容に問題がなければ、マージしてmainブランチに変更を統合します。

```
> 作成したPRをマージしてください
```

Claude CodeがGitHub CLIの`gh pr merge`を実行します。確認画面でPR番号やマージ方法を確認してから「Yes」を選択しましょう。

```
⏺ Bash(gh pr merge 1 --merge)

⏺ PR #1 をマージしました。
```

マージが完了すると、feature/update-readmeブランチの変更がGitHub上のmainブランチに統合されます。

### Step 7: ローカルのmainブランチを最新化する

マージはGitHub上（リモート）で行われたため、ローカルのmainブランチにはまだ変更が反映されていません。ローカルを最新の状態に更新しましょう。

```
> mainブランチに切り替えて、リモートの変更をローカルに反映してください
```

Claude Codeがmainブランチに切り替える`git checkout main`と、リモートの変更をローカルに反映する`git pull`を実行します。

```
⏺ Bash(git checkout main && git pull)
  ⎿  Switched to branch 'main'
     From https://github.com/your-username/my-app
     ...

⏺ mainブランチに切り替え、リモートのマージ済み変更を反映しました。
```

これで、ブランチ作成からPRのマージ、ローカルの最新化まで、Gitワークフローの一連の流れが完結しました。

## まとめ

この記事では、Claude Codeを使ったGit操作の基本フローを解説しました。

| 操作 | Claude Codeへの依頼例 |
| --- | --- |
| リポジトリ初期化 | 「Gitリポジトリとして初期化して」 |
| コミット | 「現在のコードをコミットして」 |
| ブランチ作成 | 「〇〇というブランチを作って」 |
| プッシュ | 「GitHubにプッシュして」 |
| PR作成 | 「PRを作成して」 |
| PRマージ | 「PRをマージして」 |
| プル（最新化） | 「リモートの変更をプルして」 |

- コミットメッセージの生成はClaude Codeに任せることで、書く手間がなくなる
- ブランチを切ってPRを作る流れは、個人開発でも習慣にしておくと安全
- pushやPR作成など、リモートに影響する操作は確認画面で必ず内容を確認する

まずは手元のプロジェクトで「コミットして」と一言伝えてみてください。Gitコマンドを調べる時間がなくなる感覚がすぐ実感できるはずです。
