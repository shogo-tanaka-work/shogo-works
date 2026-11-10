---
title: "Claude Code 週次まとめ（11/3〜11/7） — 権限チェックの抜け穴が4件塞がれた。まず上げる"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-11-09
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-11-03 から 11-07 の Claude Code（2.1.317 / 2.1.318 / 2.1.319）をまとめる。最優先は 2.1.319 のセキュリティ修正で、Bash の権限チェックを環境変数の前置きで回避できた問題、sed が accept-edits と auto mode で権限チェックを飛ばせた問題、worktree 作成時のサンドボックス脱出、/rewind がディレクトリ symlink 経由でファイルを復元・削除できた問題が塞がれた。合わせて LLM ゲートウェイ配下の auto mode の挙動が変わり、サーバー側で確認できない呼び出しは確認か拒否になる。claude -p は auto mode で拒否されたとき exit 1 を返すようになり、CI の成否判定が変わる。"
description: "2026-11-03〜11-07 の Claude Code のパッチをまとめて振り返る。権限チェックの抜け穴4件、auto mode と claude -p の挙動変更、資格情報の失効通知が中心。"
impact: "まず 2.1.319 へ上げてください。権限ルールで止めているつもりの操作が通っていた修正が4件入っています。次に、LLM ゲートウェイ配下で auto mode を使っている場合は挙動が変わります。サーバー側で確認できない呼び出しは確認を求めるか拒否され、組み込みの分類器へは落ちません。従来の動作が必要なら CLAUDE_CODE_AUTO_MODE_SERVER=0 を設定してください。managed settings で CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS を設定している組織は、同じ managed settings に CLAUDE_CODE_AUTO_MODE_SERVER=1 も入れる必要があります。CI で claude -p を使っている場合は、auto mode で操作が拒否されたときの終了コードが 0 から 1 に変わるため、成否判定を確認してください。Claude Desktop は 2026-11-10 に変更が入ります。Opus 4.8 の fast mode は 2026-11-30 に削除されます。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "権限管理", "企業管理", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**先に 2.1.319 へ上げてください。権限チェックの抜け穴が4件塞がれています。**

- 細工した**環境変数の前置き**でコマンドの一部を隠し、Bash の権限チェックを回避できた
- **`sed`** が accept-edits と auto mode で権限チェックを飛ばせた
- **worktree の作成時**にサンドボックスから脱出できた
- **`/rewind`** がディレクトリ symlink 経由でファイルを復元・削除できた

いずれも「権限ルールで止めているつもりの操作が通っていた」型で、設定を変えずに版を上げれば塞がります。

**対応が要る挙動変更が3つあります。**

1. **LLM ゲートウェイ配下の auto mode**（2.1.319）。サーバー側で確認できない呼び出しは確認か拒否になり、**組み込みの分類器へ落ちません。** 従来の動作は `CLAUDE_CODE_AUTO_MODE_SERVER=0`（Bedrock / Vertex / Foundry は変更なし）。**managed settings で `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` を設定しているなら、同じ場所に `CLAUDE_CODE_AUTO_MODE_SERVER=1` も要ります。**
2. **`claude -p` の終了コード。** auto mode で安全チェックが使えず拒否されたとき 0 ではなく **exit 1** になります（2.1.319）。**CI の成否判定を確認してください。**
3. **Claude Desktop の 2026-11-10 の変更**（残り1日）。`desktopHome` の無いポリシーが `coworkTabEnabled: false` や `chatSessionRetentionDays` に依存していると、ゲートウェイが起動時に警告します（2.1.319）。

**Opus 4.8 の fast mode は 2026-11-30 に削除**されます（残り21日。前週分の告知）。

## 変更一覧

**権限** — 上記4件に加え、プロンプトで待つ呼び出しを拒否してターンを続ける **`permissions.denyInsteadOfPrompting`**、`--trust-workspace false` が**リポジトリ設定内のフックと skills も止める**変更、コネクタのターミナル名で書いた deny / ask ルールが Claude Desktop で無視されていた修正 (2.1.319)。

**企業管理** — 支出を合計・開発者別・日別・IdP グループ別で読む **cost report API `GET /v1/organizations/analytics/cost`** (2.1.317)、別 AWS アカウントのロール用 `assume_role` (2.1.318)、プール予算の引き当て順 `admin.pooled_conflict_rule` / `admin.pooled_priority_order` (2.1.319)。

**資格情報** — サインインの失効日が `claude auth status`（`loginExpiresAt`）と `claude -p` の JSON（`credential_expires_at`）に出て、**10日前から stderr に警告**が出ます。失効後に `ant auth login` 側で継続すると **Claude Console の組織へ課金される**旨も警告されます (2.1.318、2.1.319)。

**その他** — IDE ターミナルからの起動で **IDE 拡張を自動で入れなくなりました** (2.1.318)。`deniedMcpServers` の URL が**上流一致の Anthropic 提供サーバーとコネクタもブロック** (2.1.318)。web / shell ツールが**メールアドレスを送る前に確認** (2.1.317)。self-hosted runner の orchestrator のログ形式が変わり、**`retryable=true:` で突き合わせるスクリプトは更新が要ります** (2.1.318)。

## 拾わなかったもの

ネットワークホームでの設定ファイル保護、MCP の接続と再開、VS Code 拡張、Cloud Sessions、Code Review、self-hosted runner の修正が多数あります。3版で200件を超えるため全件は追っていません。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
