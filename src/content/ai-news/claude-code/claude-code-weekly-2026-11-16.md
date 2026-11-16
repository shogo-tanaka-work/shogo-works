---
title: "Claude Code 週次まとめ（11/9〜11/13） — サンドボックス内の Bash が既定で確認を求める。無人運用は設定が要る"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-11-16
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-11-09 から 11-13 の Claude Code（2.1.321 / 2.1.322 / 2.1.323 / 2.1.325）をまとめる。セキュリティ修正は2件で、2.1.325 の zstd 圧縮レスポンスのデコードと、2.1.321 の MCP OAuth のリフレッシュトークンが別ホストへ送られていた問題。合わせて 2.1.325 で既定が厳しくなり、サンドボックス内の Bash が通常の権限フローに従うようになり、スケジュールタスクと /loop は allowed-tools や hooks を宣言する skill の実行前に確認を求めるようになった。無人運用は版を上げるだけでは止まるため、設定の追加が必要になる。Fable 5.2 が既定の Fable モデルになった。"
description: "2026-11-09〜11-13 の Claude Code のパッチをまとめて振り返る。セキュリティ修正2件、サンドボックスとスケジュールタスクの既定変更、権限チェックの抜け穴、Fable 5.2 の既定化が中心。"
impact: "まず 2.1.325 へ上げてください。zstd デコードのセキュリティ修正と、権限チェックの抜け穴の修正が複数入っています。そのうえで、無人運用をしている場合は設定の追加が必要です。サンドボックス内の Bash は既定で通常の権限フローに従うようになったため、プロンプトなしで動かすには sandbox.autoAllowBashIfSandboxed を true にしてください。managed settings でサンドボックスを有効にしている組織は、最上位の managed source に同じ設定を入れる必要があります。スケジュールタスクと /loop は allowed-tools や hooks を宣言する skill の実行前に確認を求めるようになったため、permissions.allow に Skill(名前) を足してください。読み取り専用の git コマンドも、プロジェクト外や未信頼のリポジトリでは確認を求めます。追加は --add-dir で行い、additionalDirectories 設定では通りません。Fable 5.2 が既定の Fable モデルになり、保存済みの Fable 5.1 の選択は fable へ移ります。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "権限管理", "サンドボックス", "企業管理", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**セキュリティ修正が2件あります。まず 2.1.325 へ上げてください。**

- **zstd 圧縮レスポンスのデコード**にセキュリティ上の問題があった (2.1.325)
- **MCP OAuth のリフレッシュトークンなどの秘密情報**が、サーバーのリダイレクト先である別ホストへ送られていた (2.1.321)

**そのうえで、無人運用は版を上げるだけだと止まります。設定の追加が要ります (2.1.325)。**

1. **サンドボックス内の Bash が既定で通常の権限フローに従います。** 確認なしで動かすなら `sandbox.autoAllowBashIfSandboxed: true`。**managed settings でサンドボックスを有効にしている組織は、最上位の managed source に同じ設定**を入れてください。
2. **スケジュールタスクと `/loop` が、`allowed-tools` や hooks を宣言する skill の実行前に確認を求めます。** 無人で走らせるなら `permissions.allow` に `Skill(<名前>)` を足します。
3. **読み取り専用の git コマンドも、プロジェクト外・未信頼のリポジトリでは確認を求めます。** 追加は `--add-dir` で行います（`additionalDirectories` 設定では通りません）。

**Fable 5.2 が既定の Fable モデルになりました**（1M コンテキスト、$8 / $40 per Mtok）。保存済みの Fable 5.1 の選択は `fable` へ移ります。戻すなら `/model claude-fable-5-1` (2.1.321)。

## 変更一覧

**権限チェックの抜け穴** — 読み取り専用 Bash がサンドボックス外で確認なしに動いた、権限チェックが**誤ったフォルダ**で書き込みを判定した、`cp` / `mv` の書き込み先に deny ルールが効かなかった (2.1.321)。bypass や allow ルール下で `rm` の危険削除プロンプトが飛んだ、`Bash(ls*)` のような**末尾ワイルドカード**付き allow ルールが確認を飛ばした (2.1.323)。**複合コマンド**の一部が確認なしに通った、allow ルールが**名前と別のプログラム**を起動できた、`Read(./.env)` 型の相対 deny ルールが `cd` の後にプロジェクトを外れた、コミットされた `.claude/settings.local.json` が利用者自身の設定として扱われた、サンドボックスが worktree の settings / hooks を守り切れなかった (2.1.325)。

**Artifact の確認漏れ** — サブエージェントが**組織外から見える artifact** を確認なしに変更・アップロードできた、auto mode が最初の変更しか判定していなかった (2.1.325)。

**課金と資格情報** — バックグラウンドセッションが claude.ai のログインで動いているのに、**起動元シェルの API キーを使って課金**していた。Bedrock のトークン計数が、`allowedProviders` が許可していないのに会話を Bedrock へ送っていた (2.1.325)。`--permission-mode auto` が auto mode 利用不可のとき**より緩いモードで開始**していたのを、確認を求める Manual 開始に変更 (2.1.323)。

**Code Mode とプラグイン** — 実験的 opt-in の **Code Mode**（Claude が JavaScript を書いてツールを呼ぶ）、`plugin.json` の `engines["claude-code"]` によるバージョン範囲判定、`claude plugin validate` の TypeScript hooks 型検査 (2.1.323)。`pluginDigests` は非推奨・無視 (2.1.325)。

**その他** — Vertex の global / us / eu で **fast mode** (2.1.322)。`claude remote-control` に `--settings <file>` (2.1.321)。

## 拾わなかったもの

2.1.325 は1版で200件近くあり、MCP の接続と再開、サインイン、VS Code 拡張、Windows の `/resume`、表示まわりの修正が大量に入っています。全件は追っていません。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
