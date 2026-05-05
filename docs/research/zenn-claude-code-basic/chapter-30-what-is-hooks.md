---
chapter: 30
slug: what-is-hooks
title: "Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-hooks
fetched_at: 2026-05-03T06:24:21Z
---

# Claude CodeのHooksとは？ライフサイクルイベントで処理を自動化する

こんにちは、とまだです。

「ファイルを編集するたびに手動でフォーマッタを実行するのが面倒...」「Claudeにお願いしても、たまにフォーマットを忘れることがある...」と感じたことはありませんか？

今回伝えたいことの要点は、**Claude CodeのHooksを使えば、LLMの判断に頼らず確実に自動化できる**ということです。一言で言えば、「決定論的に」処理を実行できる仕組みです。

この記事では、Hooksの基本概念と10種類のイベントタイプを解説します。具体的な設定方法や実践例は、各詳細記事で紹介していますので、概要を把握した上で必要な記事に進んでいただければと考えています。

## 忙しい人のために要約

この記事のポイントを5つにまとめました。

- Hooksはライフサイクルイベントに応じて**自動実行されるシェルコマンド**
- LLMの判断に依存しない**決定論的な実行**が最大の特徴
- 10種類のイベントタイプがあり、用途に応じて使い分けられる
- 設定は`.claude/settings.json`または`~/.claude/settings.json`に記述
- コードフォーマット、テスト実行、通知送信などの自動化に活用できる

## Hooksとは何か

Hooksとは、Claude Codeのライフサイクルの特定の時点で自動的に実行されるシェルコマンドのことです。

具体的には、「〜が起きたら、〜を実行する」というトリガー型の仕組みになっています。そのため、手動操作を減らしてワークフローを自動化できるわけです。

一般的なプログラミングにおけるフック（GitのプリコミットフックやReactのuseEffectなど）と同様の概念を持っています。Claude Codeでは、ツールの実行前後やセッションの開始・終了といったタイミングで、任意のコマンドを自動実行できるのです。

Hooksの具体的な設定方法については、別の記事で詳しく解説しています。

[Claude CodeのHooks設定方法：/hooksコマンドとshファイル化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/hooks-basic-setup)

### CLAUDE.mdとの違い：決定論的 vs 確率論的

Hooksの最大の特徴は、**LLMの判断に依存しない**点にあります。

例えば、CLAUDE.mdに「ファイル編集後は`npm run format`を実行して」と書いたとしましょう。この場合、Claudeは**確率論的**に判断するため、コンテキストによって実行してくれる時としてくれない時が出てきます。「ちゃんと指示したのに、なぜ実行してくれないの？」と感じた経験がある方もいるかもしれません。

一方、Hooksで設定した処理は**決定論的**に実行されます。PostToolUseフックに`npm run format`を設定しておけば、ファイル編集のたびにフォーマッタが走ってくれるのです。

確実性が求められる処理には、CLAUDE.mdではなくHooksを使うのがおすすめです。

!

**使い分けの目安**

- **CLAUDE.md**: Claudeへの指示や文脈情報を伝える
- **Hooks**: 毎回確実に実行したい処理に使う

## 10種類のフックイベント

Claude Codeでは、10種類のフックイベントが用意されています。それぞれの発火タイミングを把握しておきましょう。

| イベント | 発火タイミング |
| --- | --- |
| **PreToolUse** | ツール実行前（ブロック可能） |
| **PostToolUse** | ツール実行完了後 |
| **PermissionRequest** | 権限ダイアログ表示時 |
| **Notification** | 通知送信時 |
| **UserPromptSubmit** | ユーザープロンプト送信時 |
| **Stop** | メインエージェント完了時 |
| **SubagentStop** | サブエージェント完了時 |
| **SessionStart** | セッション開始・再開時 |
| **SessionEnd** | セッション終了時 |
| **PreCompact** | コンパクト実行前 |

よく使われるのは、**PreToolUse**（事前チェック）、**PostToolUse**（自動フォーマット）、**Stop**（完了通知）、**SessionStart**（環境初期化）の4つです。

各イベントの詳細な活用方法については、以降のチャプターで解説しています。

特に、ファイル編集後の自動フォーマットや危険なコマンドの実行前チェックについては、別の記事で実践例を紹介しています。

[Claude CodeのPreToolUse・PostToolUseフック：ツール実行前後の処理を追加](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/pre-post-tool-use-hooks)

## フックの設定場所

フックの設定は、以下の3箇所に記述できます。それぞれスコープとGit管理の有無が異なるので、用途に応じて使い分けてください。

| 設定ファイル | スコープ | Git管理 |
| --- | --- | --- |
| `.claude/settings.json` | プロジェクト | ○（推奨） |
| `.claude/settings.local.json` | プロジェクト（ローカル） | ×（.gitignore推奨） |
| `~/.claude/settings.json` | ユーザー全体 | - |

チームで共有したいフック（自動フォーマットなど）は`.claude/settings.json`に記述してください。一方で、個人の環境に依存する設定（通知設定など）は`.claude/settings.local.json`に記述すると、Git管理から外せます。

SessionStartフックを使った環境初期化の具体例については、別の記事で解説しています。

[Claude CodeのSessionStartフックで初期化を自動化：npm installの自動実行](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/session-start-hook)

## 詳細記事ガイド

Hooksの具体的な設定方法や実践例については、以下の記事で詳しく解説しています。

| 記事 | 内容 |
| --- | --- |
| [Hooksの設定方法](hooks-basic-setup) | /hooksコマンド、shファイル化、テスト方法 |
| [SessionStartフック](session-start-hook) | npm install自動実行、環境初期化 |
| [Stopフック](stop-hook) | 完了通知、ログ記録 |
| [PreToolUse・PostToolUseフック](pre-post-tool-use-hooks) | 自動フォーマット、事前チェック |
| [終了コードによる制御](hooks-exit-codes) | ツール実行のブロック、警告表示 |
| [環境変数の活用](hooks-environment-variables) | プロジェクト情報、ファイルパスの取得 |
| [マッチャー詳細](hooks-matcher) | ワイルドカード、パターン指定 |
| [SubagentStopフック](subagent-stop-hook) | サブエージェント完了時の処理 |

また、Bashコマンドの実行を保護するセキュリティフックについては、[Claude Code Hooksで危険なコマンドをブロック！安全なAI駆動開発を実現](https://zenn.dev/tmasuyama1114/articles/claude_code_hooks_guard_bash_command)で詳しく解説しています。

## セキュリティ上の注意点

Hooksは自動実行される仕組みのため、設定には注意が必要です。「便利だから何でも自動化しよう」と思うかもしれませんが、セキュリティリスクも考慮しておきたいところです。

基本的なベストプラクティスを3つ紹介します。

まず、**信頼できるスクリプトのみ使用する**ことが重要です。外部から取得したフック設定は事前にレビューしておくのがおすすめですね。

次に、**最小権限の原則を意識する**ことも大切です。コマンドの実行権限は必要最小限に抑えておくと安心できます。

そして、**プロジェクトフックをレビューする**習慣をつけましょう。Gitにコミットする前に、チームメンバーと設定内容を確認しておくとよいでしょう。

Hooksは便利な機能ですが、誤った設定はプロジェクト全体に影響を与えることもあります。設定変更後は、意図した動作になっているか確認しておくと安心です。

## まとめ

この記事では、Claude CodeのHooksの概念と10種類のイベントタイプを解説しました。

- Hooksはライフサイクルイベントに応じて**自動実行されるシェルコマンド**
- CLAUDE.mdの確率論的な実行とは異なり、**決定論的に実行される**
- 10種類のイベントタイプから用途に応じて選択できる
- コードフォーマット、通知、保護などの自動化に活用できる

確実性が求められる処理をHooksに任せることで、LLMの判断に頼らない安定したワークフローを構築できます。次のチャプターでは、具体的な設定方法について解説していきます。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
