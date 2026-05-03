---
chapter: 22
slug: claude-md-hierarchy
title: "CLAUDE.mdの配置場所と優先順位：チーム共有と個人設定の両立"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/claude-md-hierarchy
fetched_at: 2026-05-03T06:23:04Z
---

# CLAUDE.mdの配置場所と優先順位：チーム共有と個人設定の両立

こんにちは、とまだです。

「CLAUDE.mdはプロジェクトルートに1つだけ置くもの」と思っていませんか。

実は、CLAUDE.mdは複数の場所に配置でき、それぞれ異なるスコープで活用できるのです。今回伝えたいことの要点は、**配置場所を使い分けることで、チーム共有と個人設定を両立できる**ということです。

この記事では、CLAUDE.mdの配置場所と優先順位の仕組みから、実践的な使い分けパターンまでを解説します。読み終わる頃には、プロジェクトの規模やチーム構成に応じた最適な配置戦略を選べるようになっているはずです。

## 忙しい人のために要約

この記事のポイントを4つにまとめます。

- CLAUDE.mdは**複数箇所に配置可能**
- 配置場所には**優先順位**がある
- `~/.claude/CLAUDE.md`で**個人設定を全プロジェクトに適用**できる
- `CLAUDE.local.md`で**チーム共有と別の個人設定**を管理できる

## CLAUDE.mdの配置場所と優先順位

まず、CLAUDE.mdを配置できる場所と、その優先順位について整理しておきましょう。Claude Codeは、以下の順序で設定を読み込みます。

| 読み込み順序 | 配置場所 | スコープ | 用途 |
| --- | --- | --- | --- |
| 1（最優先） | Enterprise policy | 組織全体 | 企業ポリシーの強制 |
| 2 | `./CLAUDE.md` | プロジェクト | チーム共有の設定 |
| 3 | `~/.claude/CLAUDE.md` | 全プロジェクト | 個人の共通設定 |
| 4（最後） | `./CLAUDE.local.md` | プロジェクト | 個人のローカル設定 |

ここで重要なのは、**数字が小さいほど優先される**という点です。そのため、同じ内容が複数の場所で定義されている場合、より上位の設定が適用されます。

!

Enterprise policyは組織向けの機能であり、個人利用では通常気にする必要はありません。macOSなら `/Library/Application Support/ClaudeCode/CLAUDE.md`、Linuxなら `/etc/claude-code/CLAUDE.md` に配置します。

## 3つの配置パターンを使い分ける

「4つも配置場所があるのか」と思った方もいるかもしれません。ただ、実際の開発では、主に3つの配置パターンを意識すれば十分です。

組織向けの CLAUDE.md については特殊な運用となるため、今回は割愛します。

### 1. プロジェクトルート（チーム共有）

プロジェクトルートの `CLAUDE.md` は、**チームメンバー全員で共有する設定**を記述する場所です。

```
my-project/
├── CLAUDE.md          # ← チーム共有
├── src/
└── package.json
```

具体的には、以下のような内容を記述します。

- プロジェクトの概要と目的
- 技術スタック（使用言語、フレームワーク、ライブラリ）
- コーディング規約（命名規則、フォーマット）
- よく使う開発コマンド（`npm run dev`、`npm test` など）

このように、プロジェクトルートのCLAUDE.mdは**Gitで管理する**ことで、チーム全員が同じ設定でClaude Codeを使えるようになります。

### 2. ユーザーレベル（個人の全プロジェクト共通設定）

一方で、**すべてのプロジェクトに共通で適用したい個人設定**もありますよね。そんなときは `~/.claude/CLAUDE.md` を使います。

```
# ユーザーレベルのCLAUDE.mdを作成
mkdir -p ~/.claude
nano ~/.claude/CLAUDE.md
```

例えば、以下のような内容が考えられます。

```
# 個人設定

## 基本方針

私の開発スタイルに関する共通設定を記述しています。

- コミットメッセージは日本語で書く
- テストを書いてからコードを実装する（TDD）
- 複雑なロジックにはコメントを必ず追加

...
```

このように、どのプロジェクトで作業しても一貫したスタイルを保ちたい場合に便利です。

ただし、プロジェクト固有の設定と矛盾する場合は、プロジェクトルートの設定が優先されるという点に注意してください。

いわば、よりプロジェクトに近いルールが優先されるということです。

### 3. CLAUDE.local.md（プロジェクト固有の個人設定）

また、チームとは共有したくない個人的なメモや、ローカル環境固有の情報を記録したいこともあるでしょう。

そんなときは `CLAUDE.local.md` を使います。さらに、このファイルは**自動的に `.gitignore` に追加される**ため、チームには共有されません。

```
my-project/
├── CLAUDE.md          # チーム共有（Git管理）
├── CLAUDE.local.md    # 個人用（Git管理外）
├── src/
└── package.json
```

例えば、以下のような内容を記述できます。

```
# ローカル設定

## 開発環境

私のローカル環境に固有の情報を記述しています。

- サンドボックスURL: http://localhost:3000
- テスト用データベース: postgresql://localhost:5432/myapp_dev
- APIのモックサーバー: http://localhost:4000

...
```

## 実践的なユースケース

ここまでの内容を踏まえて、具体的なシナリオでの活用方法を見ていきましょう。

### ユースケース1: チーム共有とローカル設定の両立

チームで共有すべき設定と、個人のローカル環境に依存する設定を分離したい場合を考えてみます。

```
CLAUDE.md           # チーム共有（Git管理）
CLAUDE.local.md     # 個人用（Git管理外）
```

それぞれの役割は以下のとおりです。

**CLAUDE.md（チーム共有）**

```
# MyProject

## 技術スタック

このプロジェクトで使用している技術は以下のとおりです。

- Next.js 14 + TypeScript
- PostgreSQL + Prisma

## コーディング規約

コードを書く際は、以下のルールに従ってください。

- 命名規則は camelCase
- テストカバレッジは80%以上
```

**CLAUDE.local.md（個人用）**

```
# ローカル設定

## 開発環境

私のローカル環境に固有の設定です。

- ローカルDBのURL: postgresql://localhost:5432/myproject_dev
- 開発サーバー: http://localhost:3000
```

### ユースケース2: 複数プロジェクトで共通のスタイルを保つ

複数のプロジェクトで同じコーディングスタイルを適用したい場合もありますよね。そのようなときは、ユーザーレベルの設定を活用します。

**~/.claude/CLAUDE.md**

```
# 共通設定

## コーディングスタイル

すべてのプロジェクトで適用する私のスタイルです。

- インデント: スペース2つ
- セミコロン: なし
- クォート: シングル

## コミット

コミットメッセージに関するルールは以下のとおりです。

- Conventional Commitsに従う
- feat:, fix:, docs: などのプレフィックスを使用
```

プロジェクト固有のルールはそれぞれの `CLAUDE.md` に記述し、共通のスタイルはユーザーレベルで管理するわけです。

## @記法で外部ファイルを参照する

さらに、CLAUDE.mdでは`@`記法を使って外部ファイルを参照できます。これにより、設計書やスタイルガイドなどの詳細情報をCLAUDE.md本体に埋め込むことなく読み込めます。

@記法については、別な記事で詳しく解説しています。

[CLAUDE.mdの@記法で他ファイルを参照する：仕様書やスタイルガイドの取り込み](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/claude-md-at-syntax)

## 設定の確認方法

現在読み込まれているCLAUDE.mdの内容を確認するには、いくつかの方法があります。

### /memory コマンド

現在のメモリ（CLAUDE.md）の内容を確認・編集できます。

```
/memory
```

このコマンドを実行すると、以下のような選択画面が表示されます。

```
╭──────────────────────────────────────────────────────────────────╮
│ Select memory to edit:                                           │
│                                                                  │
│    1. User memory                Saved in ~/.claude/CLAUDE.md    │
│    2. Project memory             Saved in ./CLAUDE.md            │
│    3. Local memory               Saved in ./CLAUDE.local.md      │
╰──────────────────────────────────────────────────────────────────╯
```

このように、配置場所ごとに分かれて表示されるので、どの設定を編集したいか選択できます。

### /context コマンド

また、コンテキストに展開されている（セッションで読み込まれている）ファイルの内容を確認することもできます。

```
/context
```

大量に文字が表示されますが、その中で `Memory files` という欄があります。

ここを見れば、メモリとして読み込まれているファイルの内容を確認できます。

```
  ⎿  Memory files · /memory
  ⎿  └ User (/Users/tomada/.claude/CLAUDE.md): 1.5k tokens
  ⎿  └ Project (/Users/tomada/workspace/test-project/CLAUDE.md): 663 tokens
```

## CLAUDE.md と settings.json の違い

「配置場所による優先順位」という点では、settings.json も似た仕組みを持っています。混同しやすいので、ここで整理しておきましょう。

| 設定ファイル | 内容 | 記述形式 |
| --- | --- | --- |
| CLAUDE.md | AIへの指示（ルール、コーディング規約など） | Markdown（自然言語） |
| settings.json | ツールの設定（権限、フック、MCPなど） | JSON |

つまり、それぞれに書くべき内容は以下のように異なります。

**CLAUDE.mdに書くべき内容**

- プロジェクトの概要・目的
- コーディング規約・スタイルガイド
- やってほしいこと・やってほしくないこと

**settings.jsonに書くべき内容**

- パーミッション設定（許可するBashコマンドなど）
- フック（Hooks）の設定
- MCPサーバーの設定

**両者は補完関係**にあるため、用途に応じて使い分けてください。

CLAUDE.mdの基本については、別な記事で詳しく解説しています。

[CLAUDE.mdとは？Claude Codeのプロジェクト設定ファイルを理解する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-claude-md)

## まとめ

CLAUDE.mdの配置場所と優先順位について解説しました。配置場所の使い分けを理解すれば、チームの規約を守りながら個人の好みも反映した柔軟な設定管理が可能になります。

**まずはプロジェクトルートのCLAUDE.mdを整備**し、必要に応じてユーザーレベルや `CLAUDE.local.md` を追加していくのがおすすめです。

!

CLAUDE.mdの内容が増えてきたら、`.claude/rules/`ディレクトリを使ってルールをモジュール化することもできます。

[CLAUDE.mdの肥大化を防ぐ！.claude/rules/でルールをモジュール化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/claude-md-rules-modular)

Claude Codeには、CLAUDE.mdの他にもSkills・Sub-agents・MCP・カスタムコマンドといった拡張機能があります。これらの使い分けについては、別な記事で詳しく解説しています。

[Claude Code の6つの拡張機能、結局どう使い分ければいいの？](https://zenn.dev/tmasuyama1114/articles/claude_code_extension_guide)

また、CLAUDE.mdを含むClaude Codeのベストプラクティス全般については、こちらの記事も参考にしてください。

[Anthropicが公開しているClaude Codeのベストプラクティスを初心者向けに解説](https://zenn.dev/tmasuyama1114/articles/claude_code_best_practice_guide)

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
