---
title: "Copilot code review の Agent skills と MCP が GA、レビュー基準を `.github/skills` に置ける"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-29
sourceUrl: "https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available"
summary: "Copilot code review における Agent skills と MCP サーバー対応が public preview から一般提供（GA）に移行した。リポジトリの `.github/skills` に `SKILL.md` を置くことで組織固有のコーディング標準をレビューへ持ち込め、MCP サーバー経由で Issue トラッカーやドキュメント基盤をレビュー時の参照先にできる。MCP のツール呼び出しは読み取り専用に制限される。GA に合わせ、これらのコンテキストを使って生成されたコメントには帰属表示が付く。対象は Copilot Pro / Pro+ / Business / Enterprise で、既存利用者は追加作業不要。"
description: "GitHub と Playwright の MCP サーバーは既定で有効。新規に使う場合は MCP をリポジトリ設定の Copilot → MCP servers で構成し、認証トークンは Secrets and variables → Agents に保存する。"
impact: "レビュー基準をリポジトリ内のファイルとして管理する運用が GA 品質で使えるようになった。MCP を読み取り専用に限定する設計は、AI にどこまで権限を渡すかの判断材料になる。"
tags: ["github-copilot", "code-review", "mcp", "skills"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Copilot code review における Agent skills と MCP サーバー対応が、public preview から一般提供（GA）へ移行しました。

Agent skills は、リポジトリの `.github/skills` ディレクトリに `SKILL.md` を置くことで、組織固有のコーディング標準やツールの文脈を Copilot のレビューに持ち込む仕組みです。汎用的な指摘ではなく「このリポジトリではこう書く」というルールをレビューに反映させられます。ルール自体がリポジトリ内のファイルとして管理されるため、変更履歴が追え、レビューを通じて更新できる点が実務的です。

MCP サーバー対応は、Issue トラッカーやドキュメント基盤といった外部プラットフォームをレビュー時の参照先にできる機能です。重要なのは、MCP 経由のツール呼び出しが読み取り専用に制限されている点です。レビューのために外部情報を読むことはできても、そこから書き込む経路は開いていません。

GA に合わせて、Agent skills や MCP のコンテキストを使って生成されたコメントには、その旨の帰属表示が付くようになりました。どの指摘が追加コンテキストの影響を受けたのかが判別できるため、指摘の根拠を辿れます。

対象は Copilot Pro、Pro+、Business、Enterprise の4プランです。既存利用者は設定がそのまま引き継がれ、追加作業は不要です。新規に使う場合、MCP サーバーはリポジトリ設定の Copilot → MCP servers で構成し、認証トークンは Secrets and variables → Agents に保存します。Agent skills は `.github/skills` 配下にスキルディレクトリと `SKILL.md` を作成します。なお GitHub と Playwright の MCP サーバーは既定で有効です。

## 何が変わったか

- Agent skills と MCP サーバー対応が public preview から GA へ移行
- `.github/skills` の `SKILL.md` により、組織固有のコーディング標準やツールの文脈をレビューへ反映できる
- MCP サーバー経由で Issue トラッカー・ドキュメント基盤などを参照先にできる
- MCP 経由のツール呼び出しは読み取り専用に制限される
- Agent skills / MCP コンテキスト由来のコメントに帰属表示が付く（GA での新規追加）
- 対象プラン: Copilot Pro、Pro+、Business、Enterprise
- 既存利用者は設定が引き継がれ追加作業なし
- MCP の構成先はリポジトリ設定の Copilot → MCP servers、トークンは Secrets and variables → Agents
- GitHub と Playwright の MCP サーバーは既定で有効

## 業務インパクト（一般企業向け）

レビュー基準をリポジトリ内のファイルとして持てるようになった、という点が本質です。多くの組織ではコーディング規約が Wiki や Confluence に置かれ、実際のレビューでは守られているかどうかが人によってばらつきます。`SKILL.md` としてリポジトリに置けば、規約はコードと同じ変更フローに乗り、Copilot のレビューにも自動的に反映されます。規約の更新もプルリクエストで議論できます。

GA になったことの実務的な意味は、preview 前提の「壊れたら仕方ない」扱いから外れることです。レビューの一次通過を Copilot に任せる運用を正式なプロセスとして定義できるようになります。ただし GA になっても AI のレビューが人間のレビューを置き換えるわけではなく、機械的に検出できる規約違反を先に潰して、人間は設計判断に集中する、という分担が現実的です。

MCP のツール呼び出しが読み取り専用に限定されている点は、セキュリティレビューを通しやすい設計です。レビュー用の AI に書き込み権限があると、Issue の更新やコメント投稿が意図せず走るリスクを検討しなければなりません。読み取り専用と明示されていることで、承認の議論が「どの情報を読ませるか」に絞れます。認証トークンを Secrets and variables → Agents に置く構成も、既存のシークレット管理と同じ枠で扱えます。

帰属表示の追加は、レビュー運用の信頼性に効きます。AI の指摘に対して「なぜそう言っているのか」が分からないと、開発者は指摘を無視するようになります。追加コンテキスト由来であることが見えれば、根拠となったスキルや参照先まで辿れます。導入時は、この帰属表示を開発者に説明しておくと定着が早いでしょう。

なお GitHub と Playwright の MCP サーバーが既定で有効という点は、明示的に確認しておくべき前提です。既定で有効な接続先が何を読むのかは、導入審査の対象に含めるのが妥当です。

## 副業・個人活用視点

Copilot Pro / Pro+ が対象に含まれているため、個人契約でも使えます。副業で複数のリポジトリを扱っている場合、案件ごとに `.github/skills` を置いてコードの書き方の癖を記述しておくと、久しぶりに触るリポジトリでも Copilot が文脈を踏まえたレビューをしてくれます。自分のためのメモを、そのままレビュー基準として機能させられるかたちです。

クライアントに納品する仕事では、`SKILL.md` そのものが成果物になり得ます。「このコードベースではこういう規約で書いています」という説明を、動くレビュー基準として置いておけるのは引き継ぎ資料として強いです。ドキュメントは読まれないことが多いですが、レビューで指摘されるルールは守られます。

MCP 経由で Issue トラッカーやドキュメントを参照させる使い方は、1人で全工程を持つ働き方でこそ効きます。実装した時点では覚えている仕様の背景を、レビュー時点では忘れていることがよくあります。Issue を参照先にしておけば、その差分を Copilot 側が埋めてくれます。読み取り専用なので、勝手に Issue が更新される心配もありません。
