---
chapter: 45
slug: what-is-skills
title: "Claude CodeのSkillsとは？AIに知識を与える仕組みを解説"
source: https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-skills
fetched_at: 2026-05-03T06:26:44Z
---

# Claude CodeのSkillsとは？AIに知識を与える仕組みを解説

こんにちは、とまだです。

Claude Code を使っていると、こんな悩みを感じることはありませんか？

- 毎回同じデザインルールを説明するのが面倒
- CLAUDE.md にすべて書くとコンテキストがパンパンになる
- 毎回同じような指示をしたり、参考資料を読み込ませるのが大変

今回伝えたいことの要点は、**Skills を使えば「必要な時だけ知識を読み込む」仕組みが作れる**ということです。

この記事では、Skills の概念と特徴を解説した後、公式の `frontend-design` プラグインを使って実際に効果を体験していただきます。

「Skills って本当に効果あるの？」と思っている方も、この記事を読み終わる頃には「Skills すごい！」と実感できるはずです。

## 忙しい人のために要約

この記事で押さえておきたいポイントは次の6つです。

- **Skillsは「必要な時だけ開くレシピ本」のような仕組み**
- **CLAUDE.md と違い、普段のコンテキストを圧迫しない**ため、数百のSkillsでも問題ない
- **MCPが「外部接続」を担当**するのに対し、**Skillsは「知識の提供」を担当**する
- **git でチーム共有も可能**で、プロジェクトに含めれば全員が同じ知識を使える
- **frontend-design プラグイン**で Skills の効果をすぐに体感できる

では、Skills の仕組みを詳しく見ていきましょう。

## Skillsとは？

Skillsとは、**Claude Code が自動的に発見・読み込みできる専門知識のパッケージ**です。

具体的には、特定のタスクに必要なガイドライン、ルール、テンプレートなどを1つのフォルダにまとめたものになります。そのため、「このタスクにはこの知識が必要だ」と Claude が判断した時だけ、該当する Skills の内容が読み込まれるわけです。

たとえば、「React のコンポーネントを作って」とお願いした場合、もし「react-component-design」という Skills があれば、Claude は自動的にその知識を参照して作業してくれます。開発者が毎回ルールを説明する必要がなくなるのです。

### 料理のレシピ本に例えると

Skills の仕組みを理解するには、キッチンに並んだレシピ本をイメージしてみてください。

本棚には数十冊のレシピ本が並んでいますが、普段は背表紙（タイトルと簡単な説明）だけが見えている状態です。

「今日はパスタを作ろう」と決めた瞬間、初めてイタリア料理の本を手に取り、該当するページを開きます。すべての本を同時に開いて置いておく必要はありませんし、そんなことをしたらキッチンのスペースが足りなくなってしまうでしょう。

Skills もこれと同じ仕組みになっています。

普段は「この Skills は○○用です」というメタデータだけがメモリに常駐し、実際の詳細なルールやテンプレートは必要になった時だけ読み込まれます。

この仕組みのおかげで、数百の Skills を登録しておいても、コンテキストウィンドウを圧迫することがないわけです。

![](https://static.zenn.studio/user-upload/deployed-images/f9edf8e0bf013c9ba2055222.png?sha=8289cabd3b2e3f001076ef5e7510e0584d8dbd1e)

## なぜSkillsが必要なのか

Skills が必要な理由は、**段階的開示（Progressive Disclosure）** という設計思想にあります。

従来の方法では、すべての知識を CLAUDE.md に書き込むか、毎回プロンプトで指示する必要がありました。

「CLAUDE.md が長くなりすぎて管理が大変...」と感じている方もいるかもしれません。  

プロジェクトが大きくなるにつれて CLAUDE.md は肥大化し、コンテキストウィンドウの大部分を占めるようになってしまいます。

Skills では、知識を3段階に分けて読み込むことで、この問題を解決しています。

| レベル | 内容 | トークン消費 |
| --- | --- | --- |
| 第1段階 | メタデータ（名前・説明）のみ | 約100トークン/Skill |
| 第2段階 | SKILL.md 全体（指示・例・ガイドライン） | 通常は5,000トークン未満 |
| 第3段階 | 追加リソース（スクリプト・テンプレート・データ） | 必要時のみ読み込み |

このように、普段は第1段階のメタデータだけが読み込まれているため、数百の Skills を同時に利用可能な状態にしておいても問題ありません。実際に使う時だけ、第2段階・第3段階の詳細が読み込まれる設計になっています。

![](https://static.zenn.studio/user-upload/deployed-images/25c2628894c3b6c217c17ce5.png?sha=3eca20df828a3fe2b1cd0d051e54d937710815c7)

## CLAUDE.mdやMCPとの違い

「CLAUDE.md に書くのとどう違うの？」「MCP との使い分けは？」という疑問を持つ方も多いのではないでしょうか。

以下の表で違いを整理してみます。

| 観点 | Skills | CLAUDE.md | MCP |
| --- | --- | --- | --- |
| 提供するもの | 手続き的知識（How） | 指示・文脈情報 | 外部接続（What/Where） |
| 読み込みタイミング | 必要時のみ | 常に全量 | 初期に全ツール定義 |
| トークン消費 | 少ない | 多くなりがち | 中〜多 |
| メンテナンス | 容易（ファイル編集のみ） | 容易 | 中〜高（サーバー実装） |
| チーム共有 | git で可能 | git で可能 | 設定ファイルで可能 |

MCP は外部のデータベースやAPIと接続するための仕組みであり、「何を」「どこから」取得するかを担当します。

一方、Skills は「どのように」作業を進めるかという手続き的な知識を担当します。

たとえば、MCPでGitHubのイシューを取得し、Skills で定義されたコーディング規約に従ってコードを書く、という組み合わせが考えられます。

MCPの詳しい仕組みと使い方については、別な記事で解説しています。

[MCPとは？Claude Codeで外部ツールと連携するModel Context Protocolを解説](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/what-is-mcp)

!

**注意点**

Skills は「Claude が自動的に選択する」仕組みのため、意図した Skills が読み込まれない場合もあります。

なぜなら、これは **モデル呼び出し** と呼ばれる仕組みで、Claude がリクエストと Skills の説明（description）に基づいて自律的に使用を判断するからです。  

そのため、確実に特定の知識を使わせたい場合は、プロンプトで明示的に Skills の名前を含めるか、CLAUDE.md に直接書く方が確実なケースもあるでしょう。

CLAUDE.md・Skills・サブエージェントなど6つの拡張機能の使い分けについては、別な記事で詳しく解説しています。

[Claude Code の6つの拡張機能、結局どう使い分ければいいの？](https://zenn.dev/tmasuyama1114/articles/claude_code_extension_guide)

## frontend-designプラグインで効果を体験しよう

ここまで Skills の概念を説明してきましたが、まだ実感が湧かない方もいるかもしれません。

百聞は一見にしかず、ということで、公式の `frontend-design` プラグインを使って実際に効果を体験してみましょう。

### プラグインとは

プラグインは、**Skills（＋α）をまとめて配布する仕組み**です。

[https://code.claude.com/docs/ja/plugins](https://code.claude.com/docs/ja/plugins)

Anthropic が公式で提供している Skills もありますし、個人開発者が作成した Skills もあります。

つまり自分で Skills を作成する前に、他の開発者が作成した Skills を試せるわけですね。公式のマーケットプレイスから数クリックでインストールできるため、手軽に始められます。

!

ちょっとややこしいので、言葉の整理をしておきましょう。

プラグインは Skills をまとめて配布する仕組みであり、Skills はプラグインの中に含まれています。  

そしてこのプラグインにはサブエージェントやカスタムコマンドなども含めることができます。

なお、カスタムスラッシュコマンドはスキルと同じ扱いに統合されました。詳しくは以下の記事をご覧ください。

[【Claude Code】カスタムスラッシュコマンドがスキルに統合されました](https://zenn.dev/tmasuyama1114/articles/cc_commands_merged_into_skills)

言うなれば、他の人がカスタマイズした Claude Code の設定ファイルをまとめて借りてくるようなものです。

そして、その プラグインはマーケットプレイスからインストールできます。  

（マーケットプレイスは、プラグインを配布している店舗のようなものです）

以上を踏まえると、ここからは以下のような流れを踏みます。

1. Anthropic のマーケットプレイスと接続する
2. マーケットプレイスからデザインに役立つ プラグインをインストールする
3. その プラグインに含まれる Skills を使って、UI を作成する

![](https://static.zenn.studio/user-upload/deployed-images/d552bfce5cafdd41c06509d1.png?sha=3b0879a5434616aa5ba907cbbc2073da276621bd)

### インストール手順

Claude Code を起動して、`/plugin` コマンドを実行します。

初期画面では、以下のような画面が表示されます。

```
> /plugin
╭────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│  Discover   Installed   Marketplaces   Errors  (tab to cycle)                                          │
│                                                                                                        │
│ Discover plugins                                                                                       │
│                                                                                                        │
│ No plugins available.                                                                                  │
│ Add a marketplace first using the Marketplaces tab.                                                    │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────╯
   Esc to go back
```

初期画面では、何も表示されていないかと思います。

ひとまず `Esc` キーを押して、前の画面に戻ります。

では、実際に追加してみましょう。

Anthropic が公式で提供しているプラグインのマーケットプレイスを追加します。

[https://github.com/anthropics/skills](https://github.com/anthropics/skills)

GitHub リポジトリの説明を参考に、以下のコマンドを実行します。

```
/plugin marketplace add anthropics/claude-code
```

こちらを実行すると、以下のような画面が表示されます。

```
> /plugin marketplace add anthropics/claude-code
  ⎿  Successfully added marketplace: anthropic-agent-skills
```

マーケットプレイスが追加されたら、`frontend-design` プラグインをインストールしましょう。`/plugin install frontend-design@claude-code-plugins` を実行します。

```
> /plugin install frontend-design@claude-code-plugins
```

Skills をインストールする場所はユーザーレベル（ホームディレクトリ）か、プロジェクト内など、用途に応じて選べます。お好きな場所を選んでいただいてOKです。

今回はプロジェクト内にインストールしますので `Install for all collaborators on this repository (project scope)` を選択します。

```
│   Install for you (user scope)                                                                        │
│ > Install for all collaborators on this repository (project scope)                                    │
│   Install for you, in this repo only (local scope)                                                    │
│   Back to plugin list
```

その後、`/plugin` コマンドを実行し、`tab` キーで `Installed` タブに移動し、`frontend-design` プラグインがインストールされていることを確認します。

```
> /plugin
╭───────────────────────────────────────────────────────────────────────────────────────────────────────╮
│  Discover   Installed   Marketplaces   Errors  (tab to cycle)                                         │
│                                                                                                       │
│ Installed Plugins                                                                                     │
│                                                                                                       │
│ claude-code-plugins                                                                                   │
│ ❯ ◉ frontend-design project, v1.0.0                                                                   │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────╯
   Space: toggle · Enter: details · Delete: uninstall · Esc: back
```

これで `frontend-design` プラグインがインストールされました。

これで `frontend-design` プラグインがすぐに使えるようになります。スキルは自動で読み込まれるため、再起動は不要です。

### 補足：プラグインのインストール方法

一度マーケットプレイス（配布者）を追加したら、そのマーケットプレイスの中にあるプラグインは `/plugin` コマンド実行後の `Discover` タブから選択してインストールすることもできます。

以下のように、まだインストールしていないプラグインが表示され、十字キーの上下で選択し、`Enter` キーで詳細を表示してインストールできます。

```
> /plugin
╭───────────────────────────────────────────────────────────────────────────────────────────────────────╮
│  Discover   Installed   Marketplaces   Errors  (tab to cycle)                                         │
│                                                                                                       │
│ Discover plugins (1/11)                                                                               │
│ ╭───────────────────────────────────────────────────────────────────────────────────────────────────╮ │
│ │ ⌕ Search…                                                                                         │ │
│ ╰───────────────────────────────────────────────────────────────────────────────────────────────────╯ │
│                                                                                                       │
│ ❯ ◯ agent-sdk-dev · claude-code-plugins · 0 installs                                                  │
│     Development kit for working with the Claude Agent SDK                                             │
│                                                                                                       │
│   ◯ claude-opus-4-5-migration · claude-code-plugins · 0 installs                                      │
│     Migrate your code and prompts from Sonnet 4.x and Opus 4....                                      │
│                                                                                                       │
│   ◯ commit-commands · claude-code-plugins · 0 installs                                                │
│     Commands for git commit workflows including commit, push,...                                      │
│                                                                                                       │
│   ◯ explanatory-output-style · claude-code-plugins · 0 installs                                       │
│     Adds educational insights about implementation choices an...                                      │
│                                                                                                       │
│   ◯ feature-dev · claude-code-plugins · 0 installs                                                    │
│     Comprehensive feature development workflow with specializ...                                      │
│  ↓ more below                                                                                         │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────╯
   Type to search · Space: (de)select · Enter: details · Esc: back
```

### 比較検証：プラグインの有無でどう変わる？

同じプロンプトで UI を作成し、違いを確認してみました。  

（読んでいただくだけでOKです）

以下のプロンプトを使います。

```
架空の AI 開発企業の LP を作成してください。HTML + Tailwind CSS で実装してください。
```

#### プラグインなしの場合

Skills なしで作成すると、機能としては動作するものの、いわゆる「AI っぽいデザイン」になりがちです。

具体的には、紫系のグラデーションが多かったり、余白のバランスが崩れていたりすることがあるかもしれません。  

また、AI駆動開発をよくやる方はわかるかもしれませんが、数字の見せ方や影の付け方が似たり寄ったりなデザインになりがちです。

別な記事で解説したように、これは AI に具体的な指示を与えないと「無難な選択肢」を選ばれてしまうためです。

[【Claude Code】Skills機能で『AIっぽい』UIから脱却する方法！Anthropic公式もおすすめ](https://zenn.dev/tmasuyama1114/articles/anthropic_claude_skills_design)

その問題を解決するために、適切な場面に役立つ知識を与える仕組みが Skills です。

#### プラグインありの場合

`frontend-design` プラグインを有効にした状態で同じプロンプトを実行すると、Claude はデザインに関する専門知識を参照しながら作業してくれます。

なお、Skills がちゃんと呼び出された場合は、Claude Code の CLI 上に以下のように Skills の名前が表示されます。  

（表示方法はバージョンによって少し変わるかもしれません）

```
> 架空の AI 開発企業の LP を作成してください。HTML + Tailwind CSS で実装してください。

⏺ /frontend-design
```

色使いやスペーシングに一貫性が生まれ、プロフェッショナルな印象のUIが生成されやすくなるわけです。同じプロンプトであっても、結果が大きく変わることを体感できるでしょう。

2回ほど試してみたところ、どちらも AI っぽいよくあるデザインではなく、特徴的なデザインが生成されていました。

![](https://static.zenn.studio/user-upload/deployed-images/1e627a7c4bff8d59ef6233b5.png?sha=44fac48a67f09c8c32839d08c60931394651effe)

![](https://static.zenn.studio/user-upload/deployed-images/9033f45b5084ebaa22b2f07c.png?sha=7a106942a8a216e485bd2a533ea43dedc6c8f870)

#### 違いのポイント

なぜこのような差が生まれるのでしょうか。プラグインが「デザインの引き出し」を Claude に与えているからです。  

具体的には、プラグインを使うと以下のような改善が見られることが多くなります。

- 余白やスペーシングが適切になる
- 色使いに一貫性が出る
- コンポーネントのサイズ感が統一される
- 全体としてプロフェッショナルな印象になる

つまり、同じプロンプトでも「参照できる知識があるかどうか」で、出力の品質が大きく変わるわけです。

一方で、デザインの好みは人それぞれなので、必ずしもプラグインを使った方が良いとは限りません。たとえば、独自のブランドカラーがある場合は、オリジナルの Skills を作成する方が適切でしょう。自分のプロジェクトに合ったスタイルを選んでいただければと考えています。

オリジナルSkillsの作り方については、別な記事で詳しく解説しています。

[Claude Code Skillsの作り方！SKILL.mdの書き方から references フォルダの活用まで](https://zenn.dev/tmasuyama1114/books/claude_code_basic/viewer/skills-creation)

## 補足： /skills コマンドで使える Skills を確認する方法

/skills コマンドを実行すると、現在読み込まれている Skills を確認できます。

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
 test-planning · ~1.1k tokens

 Esc to close
```

ユーザーレベルにインストールした Skills と、プロジェクトレベルにインストールした Skills が表示されます。

また、それぞれを読み込んだときに消費されるトークン数も表示されます。

SkillsとサブエージェントはClaude Codeの中でも混同しやすい機能です。両者の違いと使い分けについては、別な記事で詳しく解説しています。

[【Claude Code】SkillsとSubAgents、どっちを使えばいいの？違いと使い分けを完全解説](https://zenn.dev/tmasuyama1114/articles/claude_code_skills_vs_subagents)

## まとめ

Skills は **必要な時だけ読み込まれる専門知識のパッケージ** です。  

段階的開示により、コンテキストを圧迫しにくいという特徴を活かしつつ、AIに知識を与えることができることを学んでいただきました。

Anthropic が公式で提供しているプラグインを使うと Skills の効果をすぐに体感できますので、ぜひ試してみてください。

## 📚 Udemy講座でさらに詳しく学ぶ

本記事の内容をさらに深く学びたい方へ。  

**CLAUDE.md・rules・カスタムコマンド・サブエージェント・Skills・Hooks**の6つの拡張機能を体系的に解説したUdemy講座を公開しています。  

コンテキストを節約しながら開発効率を最大化する方法を、ハンズオン形式で学べます。

[https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide](https://www.vibecodingstudio.dev/coupons/claude-code-perfect-guide)

上記リンクから**1,500円の特別クーポン**で受講できます。
