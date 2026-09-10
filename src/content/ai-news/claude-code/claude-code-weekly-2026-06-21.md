---
title: "Claude Code 週次まとめ（6/15〜6/21） — 権限ルールにパラメータ条件が入り、破壊的コマンドが既定でブロックされるようになった"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-06-21
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-06-15 から 06-21 の Claude Code（v2.1.178 / 181 / 183）をまとめる。権限ルールに `Tool(param:value)` 構文が入り、`Agent(model:opus)` のようにツールの入力パラメータを条件にできるようになった。auto mode ではサブエージェントの起動が事前に分類器で評価されるようになり、ブロックされたアクションをサブエージェント経由で要求できる抜け道が塞がれている。2.1.183 では `git reset --hard` や `terraform destroy` など、取り返しのつかないコマンドが文脈次第でブロックされるようになった。`/config key=value` でセッション中に設定を即時変更できる。"
description: "2026-06-15〜06-21 の Claude Code のパッチをまとめて振り返る。Tool(param:value) 権限構文、破壊的コマンドのブロック、/config の即時変更が中心。"
impact: "権限をコストの観点で絞りたい組織は `Agent(model:opus)` のような書き方でモデル指定単位の制御ができるようになった。破壊的コマンドのブロックは既定の挙動変更で、意図して実行したい場面では指示の書き方が変わる。"
tags: ["claude-code", "weekly-rollup", "権限管理", "セキュリティ", "skills"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**権限の書き方が一段細かくなりました。** `Tool(param:value)` 構文で、ツールの入力パラメータを条件にできます (2.1.178)。`Agent(model:opus)` と書けば Opus のサブエージェントだけをブロックできます。ワイルドカードも使え、managed settings と `.claude/settings.json` の `allowedTools` / `disallowedTools` で指定します。**権限を「ツール単位」から「使い方単位」で絞れる**ようになった変更です。

**既定の挙動が変わった点が1つあります。** `git reset --hard`、`git checkout -- .`、`git clean -fd`、`git stash drop` が、ローカル作業の破棄を指示されていない文脈でブロックされるようになりました (2.1.183)。`git commit --amend` はそのセッションで作っていないコミットに対してブロックされます。`terraform destroy` / `pulumi destroy` / `cdk destroy` も、対象スタックの指定がなければ止まります。意図して実行したい場面では、破棄したいことを明示する必要があります。

## 変更一覧

**権限と auto mode** — `Tool(param:value)` 構文 (2.1.178)。auto mode でサブエージェントの起動が分類器で事前評価されるようになり、ブロック済みアクションをサブエージェント経由でレビューなしに要求できたケースが塞がれました (2.1.178)。破壊的コマンドのブロックは 2.1.183 です。

**skills と設定の階層** — ネストされた `.claude/skills` 配下のスキルが、そのディレクトリ内のファイルを扱うときに自動ロードされます。名前が衝突した場合は `<dir>:<name>` の形式で両方使えます (2.1.178)。agent / workflow / output-style は作業ディレクトリに最も近い `.claude/` 設定が優先されます。

**設定操作** — `/config key=value` でセッション中に設定を即時変更できます（`/config thinking=false` など）(2.1.181)。`/config --help` でショートハンドキーの一覧が出て、トグルは Enter / Space で変更、Esc で保存終了する操作に整理されました (2.1.183)。

**モデル** — 非推奨・自動更新されたモデルを使っていると stderr に警告が出ます。エージェントの frontmatter で指定したモデルにも適用されるため、指定を固定している場合は確認が要ります (2.1.183)。

**macOS とランタイム** — サンドボックスに `--dangerously-allow-apple-events` が追加され、GUI アプリ連携コマンドを実行できます。`CLAUDE_DISABLE_MOBILE_NOTIFICATIONS` でモバイル通知を抑制でき、ランタイムは Bun 1.4 へ上がりました (2.1.181)。

**修正** — 古い websocket / OAuth のファイルディスクリプタ環境変数による OOM クラッシュ、別アカウントの Chrome OAuth トークンでの接続がサイレントに失敗する問題、`ANTHROPIC_BASE_URL` と `ANTHROPIC_AUTH_TOKEN` 併用時の `401 Invalid bearer token`、コンパクションが `--fallback-model` を尊重しない問題が 2.1.178 で直っています。

## 拾わなかったもの

`/doctor` のレイアウト統一、ワークフローキーワードの発火条件の厳格化、`/bug` の説明必須化、WebSearch と思考ブロックの修正などがあります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
