---
title: "Claude Code 週次まとめ（5/11〜5/17） — `claude agents` と `/goal` が登場。セッションを一覧して監督する形へ"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-05-17
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-05-11 から 05-17 の Claude Code（v2.1.139 / 140 / 141 / 143）をまとめる。この週の中心は `claude agents` によるエージェントビューと `/goal` の追加で、実行中・ブロック中・完了済みのセッションを一覧し、完了条件を決めて複数ターンにまたがって作業を続けさせられるようになった。hooks には shell を介さない exec form が入り、`PostToolUse` の `continueOnBlock` で拒否理由を戻して作業を継続できる。プラグインは依存関係を壊す無効化を拒否するようになり、worktree の cleanup が `rm -rf` へフォールバックしなくなった。"
description: "2026-05-11〜05-17 の Claude Code のパッチをまとめて振り返る。エージェントビューと /goal の登場、hooks の exec form、プラグイン依存の保護が中心。"
impact: "複数セッションを並行させる運用は、`claude agents` で一覧監督する形に移せる。hooks を自動化に組み込んでいるチームは exec form と continueOnBlock で設計の幅が広がる。worktree の cleanup 修正は、作業中ファイルを失う事故を防ぐ。"
tags: ["claude-code", "weekly-rollup", "harness-engineering", "hooks", "plugin"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

この週は**使い方そのものが変わる追加**が入りました。`claude agents` でエージェントビューを開くと、実行中・ブロック中・完了済みのセッションを一覧できます (2.1.139)。あわせて `/goal` で完了条件を設定すると、Claude が複数ターンにまたがって作業を続けます。1セッションに張り付く使い方から、**複数を並べて監督する使い方**へ寄せられるようになった週です。

対応が必要なものはありませんが、**worktree を使っているなら 2.1.143 まで上げてください**。cleanup が `rm -rf` へフォールバックしなくなり、gitignore 対象のファイルや作業中ファイルを失いにくくなっています。

## 変更一覧

**エージェント運用** — `claude agents` のビュー本体と `/goal` (2.1.139)。`--cwd <path>` でディレクトリ単位に絞り込め (2.1.141)、`--model` / `--effort` / `--settings` / `--mcp-config` をディスパッチ先へ渡せるようになりました (2.1.143)。バックグラウンドセッションは現在の権限モードを維持し (2.1.141)、アイドル復帰後もモデルと effort を保つようになっています (2.1.143)。`worktree.bgIsolation: "none"` で作業コピーへ直接向けることもできます (2.1.143)。

**hooks** — `args: string[]` の exec form が追加され、shell を介さずコマンドを直接起動できます (2.1.139)。`PostToolUse` の `continueOnBlock` は、拒否理由を Claude に戻して作業を続けさせる設定です。hook の JSON 出力に `terminalSequence` も追加されました (2.1.141)。

**プラグイン** — `claude plugin details <name>` で構成とセッションごとのトークンコスト見積もりが見えます (2.1.139)。依存プラグインがある場合は `disable` が拒否され、無効化の順序が案内されます。`enable` は推移的依存をまとめて有効化します (2.1.143)。`/plugin` のマーケットプレイスでは、ターン単位・呼び出し単位の想定コンテキストコストを確認できます。GitHub 由来のプラグインを SSH ではなく HTTPS でクローンする `CLAUDE_CODE_PLUGIN_PREFER_HTTPS` も入りました (2.1.141)。

**その他** — MCP stdio サーバーへ `CLAUDE_PROJECT_DIR` が渡ります (2.1.139)。`ANTHROPIC_WORKSPACE_ID` による workload identity federation 対応、`/feedback` への直近セッション同梱、Rewind メニューの過去文脈の要約操作が 2.1.141 です。PowerShell ツールの既定有効化と Windows Terminal / WSL 関連の修正は 2.1.143 に入りました。

## 拾わなかったもの

サブエージェント種別の表記ゆれ吸収、エージェントのカラーパレット更新、シンボリックリンクされた設定ファイルのホットリロード修正など、細かな修正が各版に入っています。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
