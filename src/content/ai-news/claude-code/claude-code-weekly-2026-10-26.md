---
title: "Claude Code 週次まとめ（10/19〜10/23） — サンドボックスの外へ漏れていた経路が、まとめて閉じられた"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-10-26
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-10-19 から 10-23 の Claude Code（2.1.304 / 305 / 306 / 307 / 308 / 309 / 310）をまとめる。中心は 2.1.309 のサンドボックス修正で、サンドボックス内の Bash が各コマンドの前にシェルの起動ファイルをサンドボックスの外で実行していた。macOS の denyWrite グロブと profile store の書き込み保護は symlink 経由だと実体パスに適用されず、サンドボックス内のコマンドと自動承認された編集は --mcp-config で渡した設定ファイルを書き換えられた。Edit(path) の deny ルールが同じパスへの Bash リダイレクトを止めない経路もあった。Windows ではフックの fail-open が 2.1.309 と 2.1.310 で2版続けて修正された。利用者側の作業が必要なのは3点で、claude ultrareview がワークスペースの信頼を要求するようになり CI は --trust-workspace が必要、allowedMcpServers の変更でアップグレード時に MCP サーバーが増える、sed -i が実ファイル編集として扱われ /rewind で戻らなくなった。"
description: "2026-10-19〜10-23 の Claude Code のパッチをまとめて振り返る。サンドボックスと権限チェックのすり抜け修正、ultrareview のワークスペース信頼要求、allowedMcpServers の挙動変更が中心。"
impact: "2.1.303 以前を使っている環境は 2.1.310 へ更新してください。サンドボックスを有効にしている環境では、シェルの起動ファイル（.zshrc / .bashrc）がサンドボックスの外で実行されていたため、起動ファイルに書いた処理が制限を受けずに動いていた可能性があります。symlink 経由でアクセスしているパスに denyWrite を書いている場合、そのルールは実体パスに適用されていませんでした。claude ultrareview を CI から呼んでいる場合は --trust-workspace を追加するか CLAUDE_CODE_DISABLE_ULTRAREVIEW_TRUST_CHECK=1 を設定しないと止まります。allowedMcpServers で managed-mcp.json の stdio サーバーを絞っていた組織は、アップグレード後に /mcp で増えたサーバーが無いか確認してください。止めるには deniedMcpServers を使います。sed -i は /rewind で戻らなくなったため、巻き戻し前提の運用は見直してください。"
tags: ["claude-code", "weekly-rollup", "サンドボックス", "権限管理", "セキュリティ", "MCP", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**更新してください。今週は「サンドボックスの中で動いているつもりのものが、外で動いていた」型の修正が中心です。**

**いちばん効くのは 2.1.309 の1行目。** **サンドボックス内の Bash コマンドが、macOS と Linux で、各コマンドの前にシェルの起動ファイルをサンドボックスの外で実行していました。** `.zshrc` や `.bashrc` に書いた処理は、サンドボックスの制限を受けずに動いていたことになります。

**同じ版で、境界の漏れが続けて閉じられています。** macOS の `denyWrite` グロブと profile store の書き込み保護は、**symlink 経由で到達したフォルダでは実体パスに適用されていませんでした。** サンドボックス内のコマンドと自動承認された編集は、**`--mcp-config` で渡した MCP 設定ファイルを書き換えられました。** `Edit(path)` の deny ルールが**同じパスへの Bash リダイレクトを止めない**経路、`cd` を括ったり前置したりした git 複合コマンドが確認を出さない経路もあります。**Windows ではフックの fail-open が 2.1.309 と 2.1.310 で2版続けて修正されました**（PowerShell の exit code 2 が止めない、Git Bash が無いと `PreToolUse` / `PermissionRequest` が通してしまう）。

**利用者側の作業が必要なのは3点です。** (1) **`claude ultrareview` がワークスペースの信頼を要求**するようになりました。端末では確認が出て、**スクリプトは `--trust-workspace` を渡さないと止まります**（2.1.309）。(2) **`allowedMcpServers` の変更で、allowlist から外れていた `managed-mcp.json` の stdio サーバーがアップグレードで読み込まれます。** 止めるには `deniedMcpServers` を使います（2.1.305）。(3) **`sed -i` が実ファイル編集として扱われ、`/rewind` で戻らなくなりました**（2.1.309）。

## 変更一覧

**サンドボックスと権限チェック** — 上記に加えて、**無効化した MCP サーバーが print / SDK セッションで後続の権限プロンプトによって再接続**、worktree 隔離ガードのすり抜け (2.1.309)。**`rm -r` の安全確認がマウントドライブ、`/Volumes`、WSL の `/mnt/c` にも出る** (2.1.304)。なお **`sandbox.allowNestedUserNamespaces`** が追加されましたが、公式自身が**サンドボックスのファイル保護を回避しうる**と書いています (2.1.305)。

**可観測性** — **`claude_code.safety_event`**。権限ルール・auto mode・安全チェック・フック・サンドボックスが**止めた／確認した／差し戻した**各ツール呼び出しが OpenTelemetry イベントになります (2.1.307)。上の修正群と合わせると、**今週は「止めた記録を取れるようにした週」**でもあります。

**ゲートウェイと代替プロバイダー** — **2.1.304 のリグレッション**（Vertex / Bedrock 等で ToolSearch が拒否されると全リクエストが失敗）の修正 (2.1.305)。**Monitor ツールとプラグインモニターが Bedrock / Vertex / Foundry とテレメトリ無効環境でも動く** (2.1.310)。

**事故防止** — **`cleanupPeriodDays` が極端に大きいと最近のファイルが消える**不具合 (2.1.310)、巨大なネスト CLAUDE.md による圧縮ループ、ディスク満杯時の明示エラー (2.1.309)。

**設定支援** — `/auto-mode-setup`、mod の `tool.check` に **`decider: "person"`**（人だけが承認できる） (2.1.304)。

## 拾わなかったもの

2.1.306 と 2.1.308 はほぼ不具合修正のみです。ほかに VS Code 拡張、Cloud Sessions、Claude Tag（Slack）、Code Review、mod の描画、self-hosted runner 関連の修正が多数あります。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
