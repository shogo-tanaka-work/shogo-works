---
chapter: 46
slug: skills-creation
title: "Claude Code Skillsの作り方！SKILL.mdの書き方から references フォルダの活用まで"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/skills-creation
fetched_at: 2026-05-03T06:26:54Z
---

# Claude Code Skillsの作り方！SKILL.mdの書き方から references フォルダの活用まで

こんにちは、とまだです。

前回の記事では、Skills の概念と `frontend-design` プラグインによる効果を体験しました。「Skills すごい！自分でも作ってみたい」と感じた方もいるのではないでしょうか。

今回伝えたいことの要点は、**Skills は SKILL.md の構造を理解すれば自分で作成できる**ということです。Anthropic 公式の `skill-creator` プラグインを使えば、さらに手軽に作成できます。

この記事では、Skills のディレクトリ構造から SKILL.md の書き方、そしてオリジナルの Skills を作成するところまでをハンズオン形式で進めていきます。読み終わる頃には、自分だけの Skills を作成できるようになっているはずです。

Skills の基本概念については、別な記事で詳しく解説しています。

[Claude CodeのSkillsとは？AIに知識を与える仕組みを解説](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-skills)

## 忙しい人のために要約

この記事で押さえておきたいポイントは次の5つです。

- Skills は `~/.claude/skills/`**（個人用）または `.claude/skills/`（プロジェクト用）** に配置する
- **SKILL.md** には `name` と `description` が必須で、description がトリガーの決め手になる
- description には **具体的なキーワード**を含めることが重要
- Anthropic 公式の **skill-creator** プラグインでオリジナル Skills を作成できる
- **references フォルダ**を活用すると、詳細なルールを分割管理できる

では、実際に手を動かしてみましょう。

## Skillsのディレクトリ構造

前回の記事で `frontend-design` プラグインの効果を体感したところで、次は自分で Skills を作ってみましょう。

Skills の配置場所は、本棚の整理に例えるとわかりやすいかもしれません。「個人の書斎」と「会社の共有本棚」のように、用途に応じて置き場所が分かれています。

Skills は以下の3箇所に配置できます。

| 配置場所 | パス | 用途 |
| --- | --- | --- |
| 個人用 | `~/.claude/skills/skill-name/` | すべてのプロジェクトで使用 |
| プロジェクト用 | `.claude/skills/skill-name/` | 特定のプロジェクトのみ |
| プラグイン | Plugin と一緒にインストール | 配布用 |

個人用は、TypeScript のベストプラクティスなど、どのプロジェクトでも使いたい知識に適しています。プロジェクト用は、そのプロジェクト固有のルール（デザインシステム、コーディング規約など）に使うとよいでしょう。

チームで共有したい場合は、`.claude/skills/` に配置して git にコミットすれば、他のメンバーも同じ Skills を使えるようになります。

Claude Codeの拡張機能全体の中での Skills の位置づけについては、別な記事で詳しく解説しています。

[Claude Code の6つの拡張機能、結局どう使い分ければいいの？](https://zenn.dev/tmasuyama1114/articles/claude_code_extension_guide)

## SKILL.mdの構造

Skills のコアとなるのが **SKILL.md** ファイルです。このファイルには、YAML フロントマターで必須項目を定義します。

### 基本構造

SKILL.md は、YAML フロントマターと Markdown 本文で構成されます。以下が最小構成の例です。

```
---
name: skill-identifier
description: このスキルの説明と、どのような場面で使うかを記述
---

# スキル名

スキルの詳細な説明やガイドラインをここに書きます。
```

### 必須フィールド

| フィールド | 説明 | 制限 |
| --- | --- | --- |
| `name` | スキルの識別子 | 小文字、数字、ハイフンのみ。64文字以内 |
| `description` | スキルの説明 | 何をするか＋いつ使うかを記述。1024文字以内 |

特に重要なのは **description** です。Claude は常にこの説明文だけを見て「このタスクにこの Skills を使うべきか」を判断するため、具体的なキーワードを含めることがポイントになります。

### 良い description の例

description の書き方で、Skills が呼び出されるかどうかが決まります。具体的なキーワードを含めることが重要です。

```
# ✅ 良い例：具体的なキーワードを含む
description: Apple Human Interface Guidelines に従ったUI設計を行う。
  Use when creating iOS/macOS style interfaces, Apple-like design,
  or working with SF Symbols, glassmorphism, or Apple design system.

# ❌ 悪い例：曖昧すぎる
description: デザインを改善するスキル
```

### オプションフィールド

必要に応じて、以下のフィールドも追加できます。

```
---
name: safe-file-reader
description: ファイルを読み取り専用で分析する。ファイルの読み込みや検索が必要な時に使用。
allowed-tools: Read, Grep, Glob
---
```

`allowed-tools` を指定すると、その Skills がアクティブな間は **指定したツールのみが使用可能になり、許可を求めずに実行されます**。公式ドキュメントによると、以下のようなケースで便利です。

- **読み取り専用スキル**: ファイルを変更してはいけない場合
- **スコープが限定されたスキル**: データ分析のみ、ファイル書き込みなしなど
- **セキュリティに敏感なワークフロー**: 機能を制限したい場合

`allowed-tools` が指定されていない場合、Claude は通常どおりツールを使用するための許可を求めます。

## オリジナルのデザインスキルを作ってみよう

ここからは、実際にオリジナルの Skills を作成していきます。  

Anthropic 公式の `skill-creator` プラグインを使えば、Skills の構造を熟知していなくても手軽に作成できます。

[https://github.com/anthropics/skills](https://github.com/anthropics/skills)

!

skill-creator はあくまで「雛形」を作るものなので、生成された SKILL.md は確認してカスタマイズすることをおすすめします。

特に description の内容は、自分のユースケースに合わせて調整した方が良いでしょう。

### skill-creatorプラグインのインストール

まず、Anthropic のスキル用マーケットプレイスを追加します。

```
> /plugin marketplace add anthropics/skills
  ⎿  Successfully added marketplace: anthropic-agent-skills
```

マーケットプレイスが追加されたら、`example-skills` プラグインをインストールします。

`/plugin` コマンドを使うとそのプラグインに含まれる Skills を確認できますが、色々と含まれていることがわかります。

```
> /plugin
╭───────────────────────────────────────────────────────────────────────────────────────────────────────╮
│  Discover   Installed   Marketplaces   Errors  (tab to cycle)                                         │
│                                                                                                       │
│ example-skills @ anthropic-agent-skills                                                               │
│                                                                                                       │
│ Scope: user                                                                                           │
│                                                                                                       │
│ Collection of example skills demonstrating various capabilities including skill creation, MCP         │
│ building, visual design, algorithmic art, internal communications, web testing, artifact building,    │
│ Slack GIFs, and theme styling                                                                         │
│                                                                                                       │
│ Status: Enabled                                                                                       │
│                                                                                                       │
│ Installed components:                                                                                 │
│ • Skills: algorithmic-art, brand-guidelines, canvas-design, doc-coauthoring, docx, frontend-design,   │
│ internal-comms, mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory,              │
│ web-artifacts-builder, webapp-testing, xlsx                                                           │
```

このプラグインに `skill-creator` が含まれています。

```
> /plugin install example-skills@anthropic-agent-skills
```

インストール先を選択する画面が表示されますので、用途に合わせて選んでください。

```
│   Install for you (user scope)                                                                        │
│ > Install for all collaborators on this repository (project scope)                                    │
│   Install for you, in this repo only (local scope)                                                    │
│   Back to plugin list
```

その後、`/plugin` コマンドを実行し、`tab` キーで `Installed` タブに移動すると、インストールされたプラグインを確認できます。

```
> /plugin
╭───────────────────────────────────────────────────────────────────────────────────────────────────────╮
│  Discover   Installed   Marketplaces   Errors  (tab to cycle)                                         │
│                                                                                                       │
│ Installed Plugins                                                                                     │
│                                                                                                       │
│ anthropic-agent-skills                                                                                │
│ ❯ ◉ example-skills user, v1.0.0                                                                       │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────╯
   Space: toggle · Enter: details · Delete: uninstall · Esc: back
```

これで `skill-creator` が使えるようになります。

### デザインスキルの作成を依頼

skill-creator が準備できたら、以下のプロンプトで新しい Skills を作成してもらいましょう。

```
skill-creator スキルを使って、Apple風のおしゃれデザインを
作成するための新たな Claude Skills である "apple-design" を
プロジェクト内に作成してください。
```

Claude Code から Skills 使用の許可を求められたら、「Yes」を選択します。

```
 Use skill "example-skills:skill-creator"?
 Claude may use instructions, code, or files from this Skill.

   Guide for creating effective skills. This skill should be used
   when users want to create a new skill (or update an existing
   skill) that extends Claude's capabilities with specialized
   knowledge, workflows, or tool integrations.
   (plugin:example-skills@anthropic-agent-skills)

 Do you want to proceed?
 ❯ 1. Yes
   2. Yes, and don't ask again for example-skills:skill-creator in this project
   3. No, and tell Claude what to do differently (esc)
```

### 生成されたスキルの確認

しばらく待つと、以下のような構造で Skills が作成されるかと思います。こちらが最もシンプルな構造です。

```
.claude
└── skills
    └── apple-design
        └── SKILL.md
```

SKILL.md の中には、Apple Design System に関するガイドラインが記述されています。

## 応用：サポートファイルの活用

基本的な Skills ができたら、さらに充実させることもできます。

SKILL.md の横に追加ファイルを配置することで、詳細なルールを分割して管理できます。

公式ドキュメントでは、以下のような構造が推奨されています。

```
my-skill/
├── SKILL.md           # 必須：メインのスキルファイル
├── reference.md       # オプション：詳細なドキュメント
├── examples.md        # オプション：具体的な使用例
├── scripts/
│   └── helper.py      # オプション：ユーティリティスクリプト
└── templates/
    └── template.txt   # オプション：テンプレートファイル
```

SKILL.md からこれらのファイルを参照しておくことで、必要な時に読み込むことができます。

ルールをモジュール化する手法については、CLAUDE.md の分割管理についての記事が参考になります。

[CLAUDE.mdの肥大化を防ぐ！.claude/rules/でルールをモジュール化](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/claude-md-rules-modular)

## トラブルシューティング：うまく呼び出されない場合

Skills が認識されない場合は、以下を確認してください。

| 問題 | 対処法 |
| --- | --- |
| ファイル名が違う | `SKILL.md`（大文字）になっているか確認 |
| YAML が不正 | `---` で囲まれているか、タブではなくスペースを使っているか確認 |
| description が曖昧 | 具体的なキーワードを追加 |

念のため、Claude Code 内で `/skills` コマンドを実行し、作成した Skills が認識されているか確認してください。

以下のような形で表示されれば、認識されています。

```
> /skills
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Skills
 4 skills

 User skills (/Users/tomada/.claude/skills)
 agile-ticket-planner · ~2.1k tokens
 claude-code-headless · ~1.7k tokens
 product-requirements-designer · ~2.7k tokens
 Project skills (.claude/skills)
 apple-design · ~1.1k tokens 👈 一覧の中に表示されていればOK

 Esc to close
```

## まとめ

Skills の作成で重要なポイントは次の通りです。

- 配置場所: `~/.claude/skills/`（個人用）または `.claude/skills/`（プロジェクト用）
- `SKILL.md` には `name` と `description` が必須で、description がトリガーの決め手になる
- **references フォルダ**や**templates フォルダ**を活用すると、詳細なルールを分割管理できる
- **/skills** コマンドで作成した Skills を確認できる

これで、オリジナルの Skills を作成する方法を学びました。

Skills を実際に使った事例やサブエージェントとの使い分けについては、以下の記事もあわせてご覧ください。

[【Claude Code】Skills機能で『AIっぽい』UIから脱却する方法！Anthropic公式もおすすめ](https://zenn.dev/tmasuyama1114/articles/anthropic_claude_skills_design)

[Claude Code Skillsとサブエージェントの使い分け：知識の提供とタスクの委譲](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/skills-and-subagents)

[Claude Codeのカスタムエージェント定義ファイルの作成方法](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/custom-agent-definition)

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
