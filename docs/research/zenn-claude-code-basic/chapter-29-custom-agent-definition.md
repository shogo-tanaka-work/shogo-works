---
chapter: 29
slug: custom-agent-definition
title: "Claude Codeのカスタムエージェント定義ファイルの作成方法"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/custom-agent-definition
fetched_at: 2026-05-03T06:24:11Z
---

# Claude Codeのカスタムエージェント定義ファイルの作成方法

こんにちは、とまだです。

「コードレビューやテスト作成を毎回同じ品質でやってほしいけど、Claude への指示が毎回バラバラになってしまう...」と感じたことはありませんか？

今回伝えたいことの要点は、**エージェント定義ファイルを使えば、プロジェクト専用のサブエージェントを Markdown で定義してチーム共有できる**ということです。

この記事では、エージェント定義ファイルの基本構造から実践的な定義例、ツール権限の設計まで解説します。読み終わる頃には、プロジェクト専用のサブエージェントを作成して活用できるようになるでしょう。

## 忙しい人のために要約

この記事で学べる内容を5つにまとめました。

- エージェント定義ファイルは `.claude/agents/` ディレクトリに **Markdown 形式**で作成する
- フロントマターで `name`、`description`、`tools` などを設定して役割を定義する
- `description` の内容に応じて Claude が**自動的にサブエージェントを選択・呼び出す**
- 明示的に「〇〇サブエージェントを使って」と指示することも可能
- プロジェクトの `.claude/agents/` に配置すれば、**Git でチーム共有**できる

## エージェント定義ファイルとは

エージェント定義ファイルは、カスタムサブエージェントの設定と振る舞いを記述した **Markdown ファイル**です。このファイルを作成しておくと、特定のタスクを専門のサブエージェントに委任できるようになります。

通常、Claude Code にタスクを依頼すると、メインエージェント（Claude 本体）がすべてを処理します。

一方で、エージェント定義ファイルを用意しておくと、**コードレビュー専門**のサブエージェントが自動的に呼び出されるといった動作が可能になるのです。  

そのため、繰り返し行うタスクの品質を一定に保てるという利点があるのです。

サブエージェントの基本概念については、別なチャプターで詳しく解説しています。

[Claude Codeのサブエージェントとは？並列処理とコンテキスト分離の仕組み](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-subagent)

### 保存場所と優先順位

エージェント定義ファイルの保存場所は2箇所あります。それぞれの特徴を理解して使い分けてください。

| 場所 | スコープ | 用途 |
| --- | --- | --- |
| `.claude/agents/` | プロジェクト専用 | Git でチーム共有 |
| `~/.claude/agents/` | 全プロジェクト共通 | 個人用の汎用エージェント |

なお、名前が競合した場合、プロジェクト側（`.claude/agents/`）が優先される点に注意が必要なのです。

したがって、チームで統一したいエージェントはプロジェクト側に配置しましょう。逆に、個人的に使いたいエージェントはユーザー側に配置してください。

## 基本的なファイル構造

エージェント定義ファイルは、**フロントマターと本文**で構成されます。Zenn や Qiita の記事を書いたことがある方なら馴染みのある形式ではないでしょうか。まず、基本的な構造を見てみましょう。

```
---
name: agent-name
description: いつこのエージェントを使うかの説明
tools: Read, Write, Bash
model: sonnet
---

# エージェント名

エージェントの役割と専門知識の詳細な説明。

## 呼び出された時の動作
1. ステップ1
2. ステップ2
3. ステップ3

## 注意点

エージェントが守るべき重要なポイントを記述します。

- 重要なポイント1
- 重要なポイント2
```

### フロントマターの設定項目

冒頭の`---`から始まる部分がフロントマターです。

フロントマターでは以下の項目を指定できます。各フィールドの役割を理解しておきましょう。

| フィールド | 必須 | 説明 |
| --- | --- | --- |
| `name` | はい | 小文字とハイフンを使用した一意の識別子 |
| `description` | はい | サブエージェントの目的の説明。**自動呼び出しの判断に使用される** |
| `tools` | いいえ | カンマ区切りのツールリスト。省略時は全ツール継承 |
| `model` | いいえ | `sonnet`、`opus`、`haiku`、または `inherit` |
| `permissionMode` | いいえ | 権限モード設定 |
| `skills` | いいえ | 使用するスキルのカンマ区切りリスト |

なお、`model` における `inherit` は、メインエージェントのモデルを使用することを意味します。つまり、エージェントを呼び出したときに使っていたモデルと同じモデルを使用することを意味します。

フロントマターの各項目については、カスタムコマンドのフロントマター設定についてのチャプターでも詳しく解説しています。

[Claude Codeカスタムコマンドのフロントマター設定：description・allowed-tools・model](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/custom-command-frontmatter)

!

`description` フィールドは自動呼び出しの判断に使われるため、**どのような状況で呼び出すべきか**を明確に記述してください。例えば「コードレビュー時に使用」「テスト失敗時に使用」など、使用場面を明確に記述してあげるのが効果的です。

### descriptionフィールドをより効果的に書く

先述の通り `description` フィールドの書きっぷりによって、サブエージェントの呼び出し精度が大きく変わります。

そこで、より効果的な場面で呼び出されるようにするためのテクニックを紹介します。

#### PROACTIVELYキーワードの使用

`PROACTIVELY` もしくは `MUST BE USED` というキーワードを使うことで、Claudeへの指示をより強調できます。

それぞれ、以下のような意味を持ちます。公式ドキュメントを読む限りでは、どちらも大きな違いはないようです。

- PROACTIVELY: 積極的に使用する
- MUST BE USED: 必ず使用する

このキーワードを含めることで、該当する状況でClaudeがサブエージェントを積極的に呼び出すようになります。

descriptionフィールドは、通常の文章でも機能します。しかし、PROACTIVELYを含めると、Claudeがサブエージェントを選択する際の判断基準が明確になるため、自動呼び出しの精度が向上する傾向があります。

特に、複数のサブエージェントが存在する環境では、このキーワードによる優先度付けが効果的でしょう。

!

PROACTIVELY もしくは MUST BE USED は必須ではありません。基本的な書き方でも十分に機能するからです。

注意点としては、すべてのタスクに適用する必要はありません。

シンプルな単一ファイルの修正や、ユーザーが明示的に指示するタスクは、メインエージェントで直接処理する方が効率的な場合もあるからです。

PROACTIVELY を使うべき場面：

- 複雑なタスク（コード品質チェック、テスト生成など）
- 定期的に繰り返すタスク
- コンテキスト分離が有効な場面

PROACTIVELY を避けるべき場面：

- 単一ファイルの簡単な修正
- ワンショットのタスク
- ユーザーが明示的に指示した場合

#### 発動条件を明確にする（when句）

サブエージェントを起動させる条件を明確に記述することが重要です。

「どういう状況で実行すべきか」を示す意味を持つためです。

例：

- `when tests fail.`（訳：テストが失敗した場合に使用する）
- `when debugging issues or errors occur.`（訳：デバッグ中やエラーが発生した場合に使用する）
- `when code changes are detected.`（訳：コードが変更された場合に使用する）

## 実践的なエージェント定義例

具体的なエージェント定義ファイルの例を2つ紹介します。これらをベースに、プロジェクトに合わせてカスタマイズしてみてください。

### 例1: コードレビュアー

ファイルパス: `.claude/agents/code-reviewer.md`

```
---
name: code-reviewer
description: Use PROACTIVELY when code changes are detected. コード品質、セキュリティ、保守性をレビュー
tools: Read, Grep, Glob, Bash
model: sonnet
---

# Code Reviewer

あなたはシニアコードレビュアーです。高いコード品質とセキュリティ基準を確保します。

## 呼び出された時の動作
1. `git diff` で最近の変更を確認
2. 変更されたファイルに焦点を当てる
3. レビューを実施

## レビューチェックリスト

以下の観点でコードをチェックしてください。

- 可読性（シンプルで理解しやすいか）
- 命名（関数と変数が適切か）
- 重複（コードの重複がないか）
- エラーハンドリング
- セキュリティ
- テストカバレッジ

## 優先度別フィードバック

問題の深刻度に応じて3段階で分類してください。

- 重要（セキュリティ問題、明確なバグ）
- 警告（パフォーマンス、保守性）
- 提案（リファクタリング案）

修正方法の具体例も含めて報告してください。
```

### 例2: テストライター

ファイルパス: `.claude/agents/test-writer.md`

```
---
name: test-writer
description: Use PROACTIVELY after new feature implementation or when test coverage is insufficient
tools: Read, Write, Bash
model: sonnet
---

# Test Writer

包括的なテストケースを作成するテスト専門家です。

## テスト作成手順
1. テスト対象のコードを理解
2. エッジケースとエラーケースを特定
3. テストケースを設計
4. テストコードを実装
5. テストを実行して確認

## テストの原則

テストコードを書く際は、以下の5つの原則に従ってください。

- AAA パターン（準備→実行→検証の順序）
- 独立性（単独で実行可能）
- 可読性（読みやすさを保つ）
- 網羅性（正常系と異常系）
- 高速性（素早いフィードバック）

テストは実装の詳細ではなく、**振る舞い**をテストすることに注意してください。
```

## 複数のサブエージェントを協調させる

複数のサブエージェントを定義した場合、CLAUDE.md でメインエージェントを「オーケストレーター（指揮者）」として定義することで、効率的にタスクを分担できます。

オーケストレーターと聞くと難しいかもしれませんが、要は「メインエージェント」がサブエージェントを呼び出す仕組みを定義することです。  

そして同時に複数のサブエージェントを協調させる仕組みを定義するだけです。

### オーケストレーターパターンの例

複数のサブエージェントが存在するなら、それらを協調させることで、より複雑なワークフローを実現できます。

以下は少し極端な例ですが、このようにCLAUDE.mdを記述すると、ユーザーの指示を適切なサブエージェントに自動的に振り分けられるでしょう。

CLAUDE.md の基本的な使い方については、別なチャプターで詳しく解説しています。

[CLAUDE.mdとは？Claude Codeのプロジェクト設定ファイルを理解する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-claude-md)

ファイルパス: `.claude/CLAUDE.md`

```
あなたはオーケストレーター（指揮者）です

ユーザーからコード作成の依頼を受けたら、以下の手順で処理してください。

## ワークフロー

1. **計画フェーズ**: ユーザーの要件を整理し、必要なタスクを洗い出す
2. **実装フェーズ**: code-writer サブエージェントにコード実装を委任する
3. **テストフェーズ**: test-writer サブエージェントにテストを作成してもらう
4. **レビューフェーズ**: 以下2つのサブエージェントにコード品質とセキュリティチェックを並列で委任する
  - code-reviewer
  - security-reviewer
5. **修正フェーズ**: レビュー指摘を踏まえて、code-writer または test-writer に修正を委任する
6. **完了**: 最終確認後、ユーザーに報告する

各サブエージェントには、以下の責務を持たせてください。

- **code-writer**: コード実装のみに専念
- **test-writer**: テストケースの設計と実装
- **code-reviewer**: コード品質とセキュリティチェック
- **security-reviewer**: セキュリティチェック
```

このパターンを使うことで、「このフィーチャーを実装してテストまで作成してレビューしてほしい」と一言指示するだけで、複数のサブエージェントが自動的に協調してタスクを完了してくれます。

## ツール権限の制限

実は、サブエージェントに許可するツールは制限できます。

セキュリティや安全性の観点から、**必要最小限のツールのみを許可する**ことを推奨します。過剰な権限付与はセキュリティリスクとなるためです。

### 読み取り専用エージェントの例

レビューや分析のみを行うエージェントには、編集権限を与えない設定が有効でしょう。

```
---
name: analyzer
description: コードベースを分析してレポートを生成。編集は行わない
tools: Read, Grep, Glob
---
```

この設定では、`Write` や `Edit` が含まれていないため、ファイルを変更することはできないわけです。したがって、意図しない編集を防止できるという利点があります。

### プロジェクト固有の検証エージェント

読み取り専用エージェントの活用例として、アーキテクチャの一貫性を検証するエージェントも挙げられます。

たとえば Onion Architecture やクリーンアーキテクチャを採用している場合、レイヤー境界の保持やディレクトリ配置規約の遵守をチェックするエージェントが有効でしょう。

ファイルパス: `.claude/agents/architecture-validator.md`

```
---
name: architecture-validator
description: Use PROACTIVELY when reviewing code changes. Onion Architecture 準拠状況をチェック。レイヤー境界違反やディレクトリ配置ミスを検出
tools: Read, Grep, Glob
model: sonnet
---

# Architecture Validator

プロジェクトが Onion Architecture に準拠しているか検証する専門家です。

## 検証項目

以下の観点でアーキテクチャをチェックしてください。

- **ディレクトリ配置**
  - Repository 層のファイルが `infrastructure/repositories/` に配置されているか
- **レイヤー境界**
  - Domain 層が Infrastructure 層に依存していないか
- **ドメインロジック流出**
  - ビジネスロジックが Application 層や Infrastructure 層に漏れていないか

## 報告形式

違反を発見した場合、以下の形式で報告してください。

- 違反箇所（ファイルパスと行番号）
- 違反内容（どの規則に違反しているか）
- 具体的な修正案
```

従来の Linter やテストでは対応できない、**プロジェクト固有の設計方針**を自動的に検証できる点が強みです。

たとえばチーム規約が「Domain 層は Infrastructure に依存してはいけない」といったルールの場合、このエージェントが継続的に遵守状況を監視してくれます。

### MCP ツールへのアクセス

※少し高度な内容ですので、読み飛ばしていただいても構いません。

サブエージェントからMCP（Model Context Protocol）で接続したサーバーのツールを使用する場合は、`mcp__<server-name>__<tool-name>` の形式で指定してください。

`tools` フィールドを省略すると、MCPツールを含む**全ツールへのアクセスが許可される**ためです。意図しない操作を防ぐため、明示的にツールを指定することを推奨します。

```
---
name: note-analyzer
description: Obsidian ノートを分析する専門エージェント
tools: Read, mcp__obsidian-mcp-tools__get_vault_file
---
```

## サブエージェントの呼び出し方

定義したサブエージェントは、**自動呼び出し**と**明示的な呼び出し**の2つの方法で利用できます。それぞれの方法を確認しましょう。

### 自動呼び出し

Claude が `description` の内容に基づいて、適切なサブエージェントを自動的に選択するという仕組みです。

```
> コードをレビューして
→ code-reviewer が自動的に呼び出される

> このバグを修正して
→ debugger が自動的に呼び出される
```

自動呼び出しを効果的に機能させるには、`description` に「どのような状況で使うべきか」を明確に記述することが重要なのです。

また、キーワードを含めておくとマッチしやすくなるため、複数のサブエージェントが存在する環境では特に効果的といえます。

### 明示的な呼び出し

特定のサブエージェントを指定して呼び出すこともできます。以下のように依頼してください。

```
> code-reviewer サブエージェントを使って、セキュリティをチェックして

> test-writer サブエージェントにテストを作成してもらって
```

自動呼び出しがうまく機能しない場合や、特定のサブエージェントを確実に使いたい場合に有効な方法でしょう。

## 効果的なエージェント定義のコツ

「エージェント定義ファイルを作ったけど、うまく動かない...」という経験をされる方は少なくありません。

ここでは、効果的なエージェント定義ファイルを作成するための**3つのベストプラクティス**を紹介します。

### 1. 1エージェント1責任

「1つのエージェントに色々やらせた方が効率的では？」と思う方もいるかもしれません。

しかし、1つのサブエージェントには**1つの責任だけ**を持たせることが重要です。

複数の役割を持たせると、判断が曖昧になり、期待通りに動作しない場合があるのです。

この原則を実践するため、良い例と悪い例を比較してみましょう。descriptionフィールドの書き方によって、エージェントの責任範囲をどのように明確化できるかを示します。

```
- # 悪い例: 複数の責任
- description: コードを書いてテストしてレビューする

+ # 良い例: 単一の責任
+ description: コードレビューのみを行う
```

複数の作業が必要な場合は、複数のサブエージェントを連携させて使用しましょう。

### 2. 詳細なプロンプトを記述

本文、つまり実行してほしい内容については、具体的な指示、例、制約を含めてください。

曖昧な指示は避けて、**具体例を含む詳細な指示**の方が一貫した結果を得られるからです。

さらに、良い例と悪い例の両方を示すと、サブエージェントが期待値をより正確に理解できるようになるでしょう。

```
...

## 具体例
- 良い関数名: `calculateTotalPrice`, `fetchUserData`
- 悪い関数名: `func1`, `doStuff`, `tmp`
```

### 3. Claude に生成させる

一番最初は、Claude Code 自身にエージェント定義ファイルを作成してもらうのがおすすめです。

```
> コードレビューに役立つサブエージェントを複数作成して。
  コード品質、セキュリティ、パフォーマンスをチェックするサブエージェントがそれぞれ必要です。
```

生成されたファイルをベースに、プロジェクトに合わせてカスタマイズすることを推奨します。

また、Claude Code 自身に組み込まれている `claude-code-guide` というサブエージェントを使うと、エージェント定義ファイルの作成についても教えてくれます。

最初はエージェント定義ファイルの作成については、`claude-code-guide` サブエージェントに依頼すると良いでしょう。

Skills と SubAgents の違いや使い分けについては、別な記事で詳しく解説しています。

[【Claude Code】SkillsとSubAgents、どっちを使えばいいの？違いと使い分けを完全解説](https://zenn.dev/tmasuyama1114/articles/claude_code_skills_vs_subagents)

## `/agents` コマンドでの管理

エージェント定義ファイルはテキストエディタで作成することもできますが、Claude Code の `/agents` スラッシュコマンドを使うと、UI を通じて対話的に作成・管理できます。

このコマンドを実行するとインタラクティブなメニューが表示され、数回の操作でサブエージェントを作成できます。

```
> /agents
```

### UI を使った作成フロー

メニューでは以下の手順を進んでいきます。

#### 1. **Create new agent を選択**

最初に「Create new agent」を選択します。

```
> /agents
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Agents                                                                                     │
│ 14 agents                                                                                  │
│                                                                                            │
│ ❯ Create new agent
```

#### 2. **保存場所を選択**

次に保存場所を選択します。プロジェクト内でのみ使うものであれば、「Project」を選択します。

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Create new agent                                                                           │
│ Choose location                                                                            │
│                                                                                            │
│ ❯ 1. Project (.claude/agents/)                                                             │
│   2. Personal (~/.claude/agents/)                                                          │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
   ↑↓ to navigate · Enter to select · Esc to cancel
```

```
                                                               │
```

![](https://static.zenn.studio/images/copy-icon.svg)

![](https://static.zenn.studio/images/wrap-icon.svg)

#### 3. **作成方法を選択**

次に作成方法を選択します。推奨の「Generate with Claude」を選択します。

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Create new agent                                                                           │
│ Creation method                                                                            │
│                                                                                            │
│ ❯ 1. Generate with Claude (recommended)                                                    │
│   2. Manual configuration                                                                  │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
```

#### 4. **プロンプトを入力**

サブエージェントに実現してほしいことを自然言語（日本語 or 英語）で記述します。

言うなれば「サブエージェントに任せたい仕事」です。

たとえば「このブランチで変更されたファイルに対して、網羅的なテストを作成してほしい」といったように入力します。

この UI の中でいう「Help me write unit tests for my code...」の部分に入力します。

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Create new agent                                                                           │
│ Describe what this agent should do and when it should be used (be comprehensive for best   │
│ results)                                                                                   │
│                                                                                            │
│ e.g., Help me write unit tests for my code...                                              │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
```

#### 5. **使用ツールを選択**

次は、サブエージェントに許可するツールを選択します。

All tools、Read-only、Edit、Execution などから選択します。

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Create new agent                                                                           │
│ Select tools                                                                               │
│                                                                                            │
│ ❯ [ Continue ]                                                                             │
│ ────────────────────────────────────────                                                   │
│   ☒ All tools                                                                              │
│   ☒ Read-only tools                                                                        │
│   ☒ Edit tools                                                                             │
│   ☒ Execution tools                                                                        │
│   ☒ Other tools                                                                            │
│ ────────────────────────────────────────                                                   │
│   [ Show advanced options ]                                                                │
│                                                                                            │
│ All tools selected                                                                         │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
   Enter to toggle selection · ↑↓ to navigate · Esc to go back
```

できるだけサブエージェントの権限は必要なものにだけ絞るのがベストプラクティスです。

例えばサブエージェントはレビューだけを行い、修正はメインエージェントが行う場合には `Read-only tools` があれば十分です。

ただし、絞りすぎると例えばテストコマンドの実行ができなくなってしまうなど、本来の役割を果たせなくなってしまうので、注意が必要です。

慣れないうちは `All tools` を選択し、必要に応じて徐々に絞っていくのが良いでしょう。

#### 6. **モデルを選択**

深い推論なら opus、高速処理なら haiku といったように選択します。

判断がつかなければ、コスパがよく、バランスのよい Sonnet を選択しておけばOKです。

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Create new agent                                                                           │
│ Select model                                                                               │
│ Model determines the agent's reasoning capabilities and speed.                             │
│                                                                                            │
│ ❯ 1. Sonnet                Balanced performance - best for most agents ✔                   │
│   2. Opus                  Most capable for complex reasoning tasks                        │
│   3. Haiku                 Fast and efficient for simple tasks                             │
│   4. Inherit from parent   Use the same model as the main conversation                     │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
   ↑↓ to navigate · Enter to select · Esc to go back
```

#### 7. **識別色を選択**

最後にサブエージェントが呼び出された時に表示される色を選択します。

**色設定**は、複数のサブエージェントが同時に動作する場合に役立ちます。メイン会話では、各エージェントが設定した色でハイライトされるため、どのエージェントが処理中か一目でわかるでしょう。

以下のように表示されますので、好きな色を選択します。よく分からなければ「Automatic color」を選択します。

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Create new agent                                                                           │
│ Choose background color                                                                    │
│                                                                                            │
│ ❯ Automatic color                                                                          │
│     Red                                                                                    │
│     Blue                                                                                   │
│     Green                                                                                  │
│     Yellow                                                                                 │
│     Purple                                                                                 │
│     Orange                                                                                 │
│     Pink                                                                                   │
│     Cyan                                                                                   │
│                                                                                            │
│                                                                                            │
│ Preview:  comprehensive-test-creator                                                       │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
   ↑↓ to navigate · Enter to select · Esc to go back
```

#### 8. **確認画面**

最後に確認画面が表示されますので、問題がなければ「s」を押して保存します。

```
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Create new agent                                                                           │
│ Confirm and save                                                                           │
│                                                                                            │
│ Name: comprehensive-test-creator                                                           │
│ Location: .claude/agents/comprehensive-test-creator.md                                     │
│ Tools: All tools                                                                           │
│ Model: Sonnet                                                                              │
│                                                                                            │
│ Description (tells Claude when to use this agent):                                         │
│                                                                                            │
│   Use this agent when you need to create comprehensive test suites for files changed in    │
│   the current branch. This agent is designed to analyze modified files and generate        │
│   thorough test coverage following the project's testing discipline standa…                │
│                                                                                            │
│ System prompt:                                                                             │
│                                                                                            │
│   You are an expert test architect specializing in comprehensive test suite creation. Your │
│    role is to analyze code changes and generate thorough, production-ready test suites     │
│   that follow strict quality standards and the testing discipline gui…                     │
│                                                                                            │
│ Warnings:                                                                                  │
│  • Agent has access to all tools                                                           │
│                                                                                            │
│                                                                                            │
│ Press s or Enter to save, e to save and edit                                               │
╰────────────────────────────────────────────────────────────────────────────────────────────╯
   s/Enter to save · e to edit in your editor · Esc to cancel
```

ちなみに、先ほど入力したプロンプト（やってほしい仕事）に合わせて、Claude Code が Description や Sysmte prompt（本文）をうまく生成してくれていますね。

プロンプトを書くのが苦手でも、このように Claude Code が自動で生成してくれるので、そのまま使うこともできます。

#### 9. **保存完了後の確認

`s` を押して保存に成功したら、`/agents` コマンドを実行して保存したサブエージェントが表示されていることを確認します。

```
> /agents
╭────────────────────────────────────────────────────────────────────────────────────────────╮
│ Agents                                                                                     │
│ 15 agents                                                                                  │
│                                                                                            │
│ ❯ comprehensive-test-creator
```

また、マークダウンファイルが作成され、さらにフロントマターも自動で生成されていることが確認できます。

.claude/agents/comprehensive-test-creator.md

```
---
name: comprehensive-test-creator
description: Use this agent when you need to create comprehensive test (...略)
model: sonnet
---

You are an expert test architect specializing in comprehensive test suite creation. Your role is to analyze code changes and generate thorough, production-ready test suites that follow strict quality standards and the testing discipline guidelines from the CLAUDE.md specifications.

## Your Core Responsibilities:
...
```

## まとめ

この記事では、Claude Code のエージェント定義ファイルについて解説しました。重要なポイントを振り返ります。

- `.claude/agents/` に **Markdown 形式**で作成し、Git でチーム共有できる
- `description` に基づいて**自動呼び出し**される仕組みを活用する
- **1エージェント1責任**の原則を守り、ツール権限は必要最小限に
- `/agents` コマンドを使うと、UI を通じて対話的にサブエージェントを作成できる

サブエージェントを定義しておくと、毎回同じ指示を書く手間から解放されるのは嬉しいポイントです。まずは1つ、よく使うタスク用のエージェントを作ってみてはいかがでしょうか。

サブエージェントを含む Claude Code のベストプラクティスについては、別な記事で包括的に解説しています。

[Anthropicが公開しているClaude Codeのベストプラクティスを初心者向けに解説](https://zenn.dev/tmasuyama1114/articles/claude_code_best_practice_guide)

また、Skills と サブエージェントの使い分けについては、別なチャプターで詳しく解説しています。

[Claude Code Skillsとサブエージェントの使い分け：知識の提供とタスクの委譲](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/skills-and-subagents)

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
