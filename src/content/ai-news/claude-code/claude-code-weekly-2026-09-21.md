---
title: "Claude Code 週次まとめ（9/14〜9/19） — プラグインの install script がこれまで実行されていた"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-09-21
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-09-14 から 09-19 の Claude Code（2.1.271 / 272 / 273 / 274 / 275 / 276 / 277 / 278）をまとめる。今週いちばん効くのは 2.1.275 の3点で、npm 由来プラグインが --ignore-scripts で取得されるよう変わり、それまでは install script が実行されていた。同じ版で git / ssh / marketplace URL に埋め込んだパスワードやトークンが、ログ・エラー表示・claude plugin marketplace list の3経路に出ていた問題も直っている。2.1.275 はゲートウェイ経由の全リクエストを 400 で落とす回帰も持ち込み、約3時間40分後の 2.1.276 で修正された。2.1.277 では CLAUDE.md の無いプロジェクトで AGENTS.md を読むようになり、サブエージェントの出力がヘッダとインデントで枠付けされて指示として解釈されなくなった。非推奨だった TaskOutput は削除された。2.1.278 は auto mode の分類器をサーバー側既定へ移し、該当構成では分類器ぶんが課金されなくなる。"
description: "2026-09-14〜09-19 の Claude Code のパッチをまとめて振り返る。プラグインのサプライチェーン、URL 内資格情報の露出、ゲートウェイ経路の回帰と課金、AGENTS.md 対応が中心。"
impact: "2.1.275 を掴んだ環境は 2.1.276 以降へ更新してください。ANTHROPIC_BASE_URL でプロキシやゲートウェイを指している構成では、全リクエストが 400 で落ちます。あわせて2つの棚卸しが要ります。1つは npm 由来のプラグインで、2.1.275 より前は install script が実行されていたため、いつ何を入れたかを確認してください。もう1つは資格情報を URL に埋め込んでいる場合で、ログ・エラー表示・marketplace 一覧の3経路に出ていたため、外へ出した内容の確認とローテーションが必要です。サンドボックスを使っている環境は、sandbox.excludedCommands の glob が複合 Bash コマンド全体を除外していたため、除外範囲を見直してください。CLAUDE.md を置かず AGENTS.md だけのリポジトリは、2.1.277 から読まれる側が変わります。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "権限管理", "サプライチェーン", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**更新してください。今週は2.1.275 のセキュリティ変更3点と、その直後の回帰が中心です。**

**プラグインの install script が、これまで実行されていました** (2.1.275)。npm ソースからのプラグイン取得が **`npm pack --ignore-scripts` + 整合性検証**に変わりました。裏を返すと、**それ以前は「プラグインを入れる」がサードパーティのコードを自分の権限で走らせることだった**わけです。**いつ何を入れたかを棚卸ししてください。**

**URL に埋め込んだ資格情報が3経路に出ていました** (2.1.275)。git / ssh / marketplace の URL に含まれるパスワードやトークンが、**メッセージ・ログ・`claude plugin marketplace list` のすべてに表示**されていました（VS Code の Manage plugins 側も同様）。更新に加えて、**外へ出した内容の確認とローテーション**が要ります。

**2.1.275 はゲートウェイ経由を全滅させました** (2.1.276 で修正)。`ANTHROPIC_BASE_URL` がプロキシを指す環境で**全リクエストが 400**。約3時間40分後に修正版が出ています。**集中管理している構成ほど先に壊れました。**

**サンドボックスの除外範囲が広すぎました** (2.1.277)。`sandbox.excludedCommands` の glob が、**一部一致で複合 Bash コマンド全体を**サンドボックスから外していました。現在は全パート一致時のみです。

## 変更一覧

**セキュリティと資格情報** — npm プラグインの install script 停止と整合性検証、URL 内資格情報の露出修正、ゲートウェイが名乗ったアカウントを保存前に確認し `/status` に表示 (2.1.275)。**サブエージェントの結果をヘッダ付きインデントで枠付けし、その中のテキストがセッション自身の指示として通らないように** (2.1.277)。

**権限とサンドボックス** — 組織ポリシーのキャッシュがアカウント・API キー切り替え後も再利用される問題、読めない `managed-mcp.json` が無視されていた問題、`ANTHROPIC_UNIX_SOCKET` 経由でポリシー取得が拒否される問題を修正 (2.1.271)。Bash の複合シェル構文での権限判定漏れ (2.1.273)。`sandbox.excludedCommands` の glob (2.1.277)。sandboxed Bash が zsh 失敗時に exit code 0 を返す問題 (2.1.275)。**コマンド単位の `allowed_domains`** で、そのコマンドにだけホストを開けられるように (2.1.271)。

**ゲートウェイと課金** — 分類・圧縮追跡用のヒントヘッダー (2.1.273)。`CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` と upstream への静的 `headers:` (2.1.277)。**auto mode の分類器がサーバー側既定になり、該当構成では分類器ぶんが課金されません** (2.1.278)。ただし**ゲートウェイが `safeguards` / `safeguard_results` を落としたり tool-use ID を書き換えると従来どおり課金**されます。`/status` の `Auto mode server` 行で切り分けられます。

**プロジェクト指示** — **CLAUDE.md の無いプロジェクトで AGENTS.md を読む**ように。`/config` で切替可。**Bedrock / Vertex / Foundry では未対応** (2.1.277)。

**削除と非推奨** — **TaskOutput ツールを削除**し、出力は Read で読む形に。`taskOutputMaxChars` と `TASK_MAX_OUTPUT_LENGTH` が無効化 (2.1.277)。`claude -p` 外部起動時の自動タイトル生成も削除。

**同期と運用** — claude.ai で有効なスキル・プラグインをターミナルセッションへ同期（`syncClaudeAiSkills` / `syncClaudeAiPlugins` でオプトアウト）(2.1.275)。メモリ逼迫の可視警告、`CLAUDE_CODE_MCP_STARTUP_WAIT_MS`、**サーバー別 `timeout` を伸ばしても約5分で切れていた MCP の修正**、破損トランスクリプトの自己修復 (2.1.274)。

## 拾わなかったもの

2.1.272 は「バグ修正と信頼性改善」の1行のみです。VS Code 拡張・Claude Tag・Code Review 向けの個別修正、表示調整、内部改善は省きました。2.1.275 と 2.1.277 はそれぞれ100項目超あります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
