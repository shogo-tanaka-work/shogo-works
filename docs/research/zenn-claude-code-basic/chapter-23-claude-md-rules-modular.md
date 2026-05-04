---
chapter: 23
slug: claude-md-rules-modular
title: "CLAUDE.mdの肥大化を防ぐ！.claude/rules/でルールをモジュール化"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/claude-md-rules-modular
fetched_at: 2026-05-03T06:23:13Z
---

# CLAUDE.mdの肥大化を防ぐ！.claude/rules/でルールをモジュール化

こんにちは、とまだです。

「CLAUDE.mdに書くことが増えすぎて、管理が大変...」と感じていませんか。

実は、CLAUDE.mdの内容は`.claude/rules/`ディレクトリを使ってモジュール化できるのです。今回伝えたいことの要点は、**ルールを分割し、必要なときだけ動的に読み込むことで、コンテキストを効率的に使える**ということです。

この記事では、`.claude/rules/`の基本から、paths指定による動的ロードの仕組みまでを解説します。読み終わる頃には、プロジェクトの規模に応じた効率的なルール管理ができるようになっているはずです。

## 忙しい人のために要約

この記事のポイントを4つにまとめます。

- `.claude/rules/`は**CLAUDE.mdを分割するためのモジュラールール機能**
- `paths`指定なしのルールは**起動時にロード**、指定ありは**対象ファイル操作時に動的ロード**
- 一度ロードされたルールは**重複ロードされない**（コンテキスト効率◎）
- 複数ルールの**同時適用**も可能（TypeScript + APIルールなど）

## CLAUDE.md 肥大化問題とは

CLAUDE.mdは便利な機能です。プロジェクト固有のルールや慣習を書いておけば、Claude Codeがそれを踏まえて作業してくれます。

しかし、便利だからといって何でも書き込んでいくと、気づけば肥大化しています。コーディング規約、テストの書き方、API設計のルール、セキュリティ要件...プロジェクトが成長するにつれて、CLAUDE.mdも膨らんでいきます。

そして問題は、**CLAUDE.mdの内容は起動時に全てコンテキストに読み込まれる**ことです。

CLAUDE.mdの基本について詳しく知りたい方は、別な記事で解説しています。

[CLAUDE.mdとは？Claude Codeのプロジェクト設定ファイルを理解する](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-claude-md)

![](https://static.zenn.studio/user-upload/deployed-images/18e3a53528766f6e11075cec.png?sha=eeb416d0f2c985d71c6cf5071220d4e90771af0b)

つまり、TypeScriptのルールも、Markdownのルールも、APIのルールも、全部がコンテキストを占有します。今からREADMEを編集するだけなのに、TypeScriptのルールがコンテキストを使っている...これはもったいないですよね。

「必要な時だけ、必要なルールを読み込んでほしい」

そんなニーズに応えるのが`.claude/rules/`機能です。

## .claude/rules/とは

`.claude/rules/`は、CLAUDE.mdを分割して管理するためのモジュラールール機能です。

### 基本的なディレクトリ構成

まずは基本的なフォルダ構成を見てみましょう。以下はプロジェクトルートに配置するファイル構成の例です。

```
your-project/
├── .claude/
│   ├── CLAUDE.md           # メインの指示（最小限に保つ）
│   └── rules/
│       ├── code-style.md   # コードスタイル
│       ├── testing.md      # テスト規約
│       └── security.md     # セキュリティ要件
```

`.claude/rules/`配下に置いた`.md`ファイルは、自動的にプロジェクトメモリとして認識されます。サブディレクトリを作っても再帰的に検出してくれるので、`frontend/`や`backend/`といったフォルダで整理することも可能です。

なお、CLAUDE.mdから外部ファイルを参照する@記法という別のアプローチもあります。

[CLAUDE.mdの@記法で他ファイルを参照する：仕様書やスタイルガイドの取り込み](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/claude-md-at-syntax)

### paths指定による条件付きルール

ここからが本題です。

ルールファイルにYAMLフロントマターで`paths`を指定すると、**特定のファイルを操作した時だけ**ルールが読み込まれるようになります。

```
---
paths: src/api/**/*.ts
---

# API開発ルール

このルールには以下のような内容を書きます。

- 全APIエンドポイントは入力検証必須
- 標準エラーレスポンス形式を使用
```

この設定により、`src/api/`配下のTypeScriptファイルを触った時だけ、このルールがコンテキストに追加されます。

重要な動作仕様をまとめるとこのようになります。

| paths指定 | ロードタイミング | コンテキスト |
| --- | --- | --- |
| **なし** | 起動時に即座にロード | 常に消費 |
| **あり** | 対象ファイル操作時に動的ロード | 必要な時だけ消費 |

paths指定がないルールは従来のCLAUDE.mdと同じく起動時にロードされます。一方、paths指定があるルールは**必要になるまでロードされない**ので、コンテキストを節約できます。

![](https://static.zenn.studio/user-upload/deployed-images/2df4fe0b52ce7822cd91e8ba.png?sha=49484fcb91af91344bdde5cdf3e8c088d31ad3bf)

### 動的ロードの様子

実際にファイルを読み込むと、以下のようにルールが動的にロードされる様子が確認できます。

```
⏺ Read(src/components/Button.tsx)
  ⎿  Read 15 lines
  ⎿  .claude/rules/frontend.md   ← ここで動的ロード！
```

一度ロードされたルールは、同じセッション内で再度ロードされることはありません。これは**コンテキスト効率**の観点から嬉しいポイントです。

![](https://static.zenn.studio/user-upload/deployed-images/396ee681766ef7b5f8d63539.png?sha=104cd5c9d160f34ebdbe0832bf141ee800590cdc)

## Globパターンの書き方

`paths`フィールドではGlobパターンが使えます。例を交えて紹介します。

| パターン | マッチ対象 |
| --- | --- |
| `**/*.ts` | 全ディレクトリのTypeScriptファイル |
| `src/**/*` | src/配下の全ファイル |
| `*.md` | プロジェクトルートのMarkdownファイルのみ |
| `src/components/*.tsx` | 特定ディレクトリのReactコンポーネント |

### 複数のパターンを指定する

複数のディレクトリやファイル種別を対象にしたい場合は、ブレース展開やカンマ区切りが使えます。

!

プレース展開とは、`{ts,tsx}` のように、複数のファイルを指定することを指します。

**ブレース展開の例**

```
---
paths: src/**/*.{ts,tsx}
---
```

この指定では、`src/`配下のすべての`.ts`ファイルと`.tsx`ファイルがマッチします。

**カンマ区切りの例**

```
---
paths: {src,lib}/**/*.ts, tests/**/*.test.ts
---

# TypeScriptファイル用ルール

TypeScriptファイルに適用するルールを定義しています。

- any型は使用禁止
- 型定義は明示的に記述する
```

この指定では、`src/`と`lib/`配下のTypeScriptファイル、そして`tests/`配下のテストファイルがマッチします。

!

`paths` を省略すると、すべてのファイルに対して常に適用されます。大きなルールファイルで `paths` を省略すると、コンテキストを常に消費するので注意が必要です。

## 実践的なユースケース

ここまでの内容を踏まえて、具体的なシナリオでの活用方法を見ていきましょう。

![](https://static.zenn.studio/user-upload/deployed-images/5265254d9319113d1a8c4c1c.png?sha=b13bd5e860171ee31bd450d6db3c07dd158cec14)

### ユースケース1: フロントエンドとバックエンドで異なるルール

フルスタックプロジェクトでは、フロントエンドとバックエンドで異なるルールを適用したいことが多いでしょう。そこで、paths指定を活用した設定例を見てみます。

```
.claude/rules/
├── frontend.md     # paths: src/frontend/**
└── backend.md      # paths: src/backend/**
```

それぞれのファイルの内容は以下のようになります。

**frontend.md**

```
---
paths: src/frontend/**
---

# フロントエンドルール

フロントエンド開発に適用するルールです。

- React + TypeScript
- Tailwind CSSでスタイリング
- コンポーネントはfunctional componentのみ
```

**backend.md**

```
---
paths: src/backend/**
---

# バックエンドルール

バックエンド開発に適用するルールです。

- Express.js + TypeScript
- RESTful API設計に従う
- エラーハンドリングは必ず実装
```

### ユースケース2: テストファイル専用のルール

テストには独自のルールがあることが多いです。テストファイルを触った時だけ適用されるルールを作れます。

```
---
paths: **/*.test.ts, **/*.spec.ts
---

# テストルール

テストを書く際は、以下のルールに従ってください。

- describeとitで構造化する
- AAA（Arrange-Act-Assert）パターンを使う
- モックは最小限に抑える
```

### ユースケース3: ドキュメント執筆のルール

技術ドキュメントを書く時だけ適用したいスタイルガイドがある場合も便利です。

```
---
paths: docs/**/*.md
---

# ドキュメント執筆ルール

ドキュメントを書く際は、以下のルールに従ってください。

- 見出しは名詞句で始める
- コード例には必ず説明を添える
- 画像にはalt属性を付ける
```

## 設定の確認方法

現在読み込まれているルールを確認するには、`/memory`コマンドを実行します。

これで現在のメモリ（コンテキスト）に読み込まれているルールを確認できます。

```
/memory
```

このコマンドを実行すると、以下のような選択画面が表示されます。この例ですと、常に読み込まれているルールは `general.md` だけです。これは `paths` 指定がないルールファイルが常に読み込まれているためです。

```
╭──────────────────────────────────────────────────────────────────╮
│ Select memory to edit:                                           │
│                                                                  │
│    1. User memory                Saved in ~/.claude/CLAUDE.md    │
│    2. .claude/CLAUDE.md                                          │
│  ❯ 3. .claude/rules/general.md                                   │
│    4. Project memory             Saved in ./CLAUDE.md            │
╰──────────────────────────────────────────────────────────────────╯
```

Claude Codeには.claude/rules/以外にも様々な拡張機能があります。使い分けについては別な記事で整理しています。

[Claude Code の6つの拡張機能、結局どう使い分ければいいの？](https://zenn.dev/tmasuyama1114/articles/claude_code_extension_guide)

## まとめ

`.claude/rules/`を使ったモジュラールール機能について解説しました。ポイントを振り返ると以下の3つです。

- **CLAUDE.mdの肥大化問題は`.claude/rules/`で解決できる**
- **paths指定による動的ロードでコンテキストを節約**
- **1ファイル1トピック、サブディレクトリで整理がベストプラクティス**

プロジェクトの規模が大きくなって「CLAUDE.mdが長すぎる...」と感じたら、ぜひ`.claude/rules/`への分割を検討してみてください。

必要な時に必要なルールだけがロードされる、スマートなルール管理ができるようになります。

## 関連記事

知識のモジュール化という観点では、Skillsという別のアプローチもあります。

[Claude Code Skillsの作り方！SKILL.mdの書き方から references フォルダの活用まで](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/skills-creation)

また、トークン最適化の応用テクニックとして、MCPサーバー設計での98.7%削減事例も参考になります。

[Anthropic公式のMCPサーバー設計術！98.7%のトークン削減を実現](https://zenn.dev/tmasuyama1114/articles/anthropic_mcp_workflow)

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
