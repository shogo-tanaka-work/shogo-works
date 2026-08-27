---
title: "Claude Code 週次まとめ（5/18〜5/24） — `/simplify` が `/code-review` になり、PR にインラインコメントを返すツールへ"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-05-24
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-05-18 から 05-24 の Claude Code（v2.1.144 / 145 / 146 / 147 / 148 / 149）をまとめる。この週の主題は `/simplify` から `/code-review` への改名と、その中身の入れ替えである。改名だけで終わらず、effort level を指定して correctness バグを報告し、`--comment` で GitHub PR のインラインコメントとして投稿するコマンドになった。旧来の整理・修正挙動は削除されている。セキュリティ修正として、Bash の裸変数代入で権限プロンプトを回避できる経路が塞がれた。`/usage` はコスト内訳を出せるようになり、Enterprise では MCP サーバーの一括許可が入った。"
description: "2026-05-18〜05-24 の Claude Code のパッチをまとめて振り返る。/code-review への改名と実体化、権限プロンプトのバイパス修正、/usage の内訳表示が中心。"
impact: "社内ドキュメントや教材で `/simplify` を案内している組織は表記の更新が必要になる。権限プロンプトのバイパス修正を含むため更新推奨。`/usage` の内訳化で、どのスキル・サブエージェント・MCP がトークンを使っているかを見ながら削減できる。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "コスト管理", "code-review"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**社内資料を持っているなら、この週の変更は書き換えが要ります。** `/simplify` が `/code-review` に改名されました (2.1.146)。名前だけの話ではなく、翌版で中身が入れ替わっています。`/code-review high` のように effort level を指定して correctness バグを報告し、`--comment` を付けると GitHub PR のインラインコメントとして投稿します。**旧来の cleanup-and-fix（整理・修正）挙動は削除**されました (2.1.147)。

**セキュリティ修正が含まれるため更新を推奨します。** Bash の裸変数代入で権限プロンプトを回避できる経路が塞がれました (2.1.145)。

なお 2.1.147 には Bash ツールが毎回 exit code 127 を返すリグレッションが混入し、2.1.148 で修正されています。この週のものを入れるなら 2.1.148 以降にしてください。

## 変更一覧

**コードレビュー** — `/code-review` への改名 (2.1.146)、effort level 指定・`--comment` 投稿・旧挙動の削除 (2.1.147)。

**権限とセキュリティ** — Bash 裸変数代入での権限プロンプトバイパス修正 (2.1.145)。Auto Mode が `AskUserQuestion` 必須のスキルやユーザー指定に対して確認を抑制しなくなりました (2.1.146)。バックグラウンド化したセッションが、既に付与済みの権限を再度プロンプトしなくなっています (2.1.146)。Enterprise では MCP サーバーを一括許可できるようになりました (2.1.149)。

**コスト管理** — `/usage` がスキル・サブエージェント・MCP サーバー単位の内訳を出せるようになりました (2.1.149)。`/extra-usage` は `/usage-credits` へ改名（旧名も動作）(2.1.144)。

**エージェントと可観測性** — `/resume` がバックグラウンドセッションも対象になり `bg` 表示で再開できます (2.1.144)。`claude agents --json` でライブセッションを JSON 出力でき、OTEL スパンに `agent_id` / `parent_agent_id` が付きます (2.1.145)。ピン留めしたバックグラウンドセッションはアイドル時も常駐し、メモリ逼迫時は非ピン留めより後に解放されます (2.1.147)。

**修正** — `api.anthropic.com` へ到達できないときの最大75秒の起動ハングが15秒タイムアウトに、MCP のページネーション対応 `tools/list` が1ページ目しか返さない問題、Bedrock / Vertex で「Opus (1M context)」を選べないリグレッションが 2.1.144。Read tool がトークン上限超過でハードエラーにせず "PARTIAL view" 注記付きで返すようになったのは 2.1.145 です。

## 拾わなかったもの

`/model` の挙動変更（この週はセッション限定、翌週に既定保存へ再変更）、ターミナル表示崩れ、Windows / PowerShell 関連、フック条件の一致不具合など、多数の個別修正があります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
