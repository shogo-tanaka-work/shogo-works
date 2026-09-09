---
title: "Claude Code v2.1.200：デフォルト権限モードを「Manual」に改称、AskUserQuestionの自動継続を廃止"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-07-03
sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.200"
summary: "Claude Code v2.1.200 で、CLI/VS Code/JetBrains全体の権限モード表記が「default」から「Manual」に統一された（`--permission-mode manual` も併用可）。また `AskUserQuestion` ダイアログがデフォルトで自動継続しなくなり、アイドルタイムアウトは `/config` からのオプトイン制になった。"
description: "権限モードの表記が「default」から「Manual」へ全クライアント統一。AskUserQuestionダイアログの自動継続がデフォルト廃止となり、放置時に勝手に進む挙動がなくなった。既存の教材・スクショの表記更新が必要。"
impact: "権限モード名の変更により、既存の社内ドキュメント・教材・スクリーンショットの表記が古くなる。AskUserQuestionの自動継続廃止は、確認なしに処理が進んでしまう事故を防ぐ安全側の変更。"
tags: ["claude-code", "permission-mode", "ui", "safety", "release"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Claude Code v2.1.200（2026-07-03T16:52Z）は、権限モードまわりの表記と挙動を見直すリリースです。

これまでCLIやドキュメント上で「default」と表記されていた既定の権限モードが、**「Manual」という名称に統一**されました。CLI本体、`--help`、VS Code拡張、JetBrains拡張のすべてで表記が揃えられ、`--permission-mode manual` のように明示的に指定することもできます。名称が変わっただけで挙動自体に変更はありませんが、「default」という言葉に慣れていたユーザーは戸惑う可能性があります。

もう一つの変更が `AskUserQuestion` ダイアログの挙動です。これまではユーザーが操作しないまま一定時間が経過すると、ダイアログが自動的に進行（自動継続）していましたが、v2.1.200からはこの自動継続が**デフォルトで廃止**されました。アイドルタイムアウトを使いたい場合は `/config` から明示的にオプトインする必要があります。ほかにも `.claude.json` の設定バリデーション強化、tmux上での描画ちらつき修正、スクリーンリーダー対応の強化が含まれます。

## 何が変わったか

- **権限モード名を「default」→「Manual」に統一**: CLI / `--help` / VS Code / JetBrains拡張すべてで表記変更
- **`--permission-mode manual`** も明示指定として使用可能に
- **`AskUserQuestion` の自動継続をデフォルト廃止**: 放置しても勝手に進まなくなった
- アイドルタイムアウトは `/config` からのオプトイン制に変更
- `.claude.json` の設定バリデーション強化
- tmux描画のちらつき修正、スクリーンリーダー対応強化

## 業務インパクト（一般企業向け）

社内向けにClaude Codeの操作手順書やオンボーディング資料を作っている組織は、「default」という表記を使っている箇所を「Manual」に更新する必要があります。特にスクリーンショットを使った手順書は、UI表記が変わったことで古い印象を与えてしまうため優先的に見直しておくとよいでしょう。

`AskUserQuestion` の自動継続廃止は、地味ながら実務上重要な変更です。これまでは離席中にダイアログが自動で進み、意図しない選択のまま処理が進んでしまうリスクがありましたが、今回のデフォルト変更でその事故が起きにくくなりました。逆に、タイムアウトで自動的に進めたい運用（無人実行のバッチ処理など）をしていたチームは、`/config` からオプトインし直す必要があります。

## 副業・個人活用視点

個人でClaude Codeを使っている場合も、離席中に確認ダイアログが勝手に進んで意図しない変更が加わる心配が減ります。逆に、夜間にバッチ的にタスクを流しておきたい人は、`/config` でアイドルタイムアウトを有効化しておくことを忘れないようにしましょう。権限モードの表記変更は挙動自体には影響しないため、既存の運用をそのまま続けて問題ありません。
