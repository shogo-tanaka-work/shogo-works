---
title: "Codex 週次まとめ（10/5〜10/9） — 既定モデルが GPT-6.1 Sol へ、Bedrock Mantle が GovCloud 対応"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-10-12
sourceUrl: "https://github.com/openai/codex/releases"
summary: "2026-10-05 から 10-09 の Codex CLI stable 4版（0.160.1 / 0.161.0 / 0.162.0 / 0.162.1）をまとめる。対応が必要なものは3つ。0.161.0 にファイルシステムの権限エスカレーションの修正が入っており、同じ版で bundled カタログと Amazon Bedrock カタログの両方の既定モデルが GPT-6.1 Sol へ切り替わった。0.162.1 は、稼働中のバックグラウンドサーバーの feature 設定が CLI の既定と違うと起動に失敗する経路を塞いだもので、サーバーを残したまま CLI だけ日次更新する運用では当たりやすい。エンタープライズ側では Bedrock Mantle が AWS GovCloud リージョンを受け付けるようになり、multi-agent V2 と Ultra reasoning にも対応した。0.162.0 では managed Git worktree ツールとカスタムプロバイダーの capability 設定が入っている。"
description: "2026-10-05〜10-09 の Codex CLI stable 4版をまとめて振り返る。権限エスカレーション修正、既定モデルの GPT-6.1 Sol 化、Bedrock の GovCloud 対応、worktree ツールが中心。"
impact: "0.160 系を使っている環境は 0.162.1 へ更新してください。0.161.0 にファイルシステムの権限エスカレーションの修正が含まれます。同じ 0.161.0 で既定モデルが GPT-6.1 Sol へ変わるため、モデルを明示指定していない構成はコストと挙動の前提が変わります。バックグラウンドサーバーを常駐させている構成は、0.162.0 で起動に失敗する経路があり 0.162.1 で修正されています。Bedrock 経由で使う組織は GovCloud リージョンと Ultra reasoning が 0.161.0 から使えます。Windows 混在チームは 0.162.0 の apply_patch の CRLF 保持が効きます。"
tags: ["codex", "weekly-rollup", "権限管理", "既定モデル", "bedrock", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**0.162.1 へ更新してください。対応が必要なものが3つあります。**

**0.161.0 に権限まわりの修正があります。** 公式の修正一覧に**ファイルシステムの権限エスカレーション**が挙がっています（ほかに Windows サンドボックス起動、ターミナル再接続）。

**同じ 0.161.0 で既定モデルが変わりました。** **bundled カタログと Amazon Bedrock カタログの両方で GPT-6.1 Sol が既定**になりました。**モデルを明示指定していない構成は、何もしなくてもコストと挙動の前提が変わります。**

**バックグラウンドサーバーを常駐させている構成は注意が要ります。** 0.162.0 では**稼働中のサーバーの feature 設定が CLI の既定と違うと起動に失敗**しました。0.162.1 が**互換性チェックを、明示指定した feature override だけに絞る**ことで塞いでいます。CLI を日次で上げる運用では当たりやすい形です。

## 変更一覧

**権限と起動** — ファイルシステムの権限エスカレーション、Windows サンドボックス起動 (0.161.0)。サンドボックス起動と Windows インストーラのチェックサム (0.162.0)。設定不一致による起動失敗と、複数行の非同期質問での TUI クラッシュ (0.162.1)。

**既定モデル** — **GPT-6.1 Sol が bundled / Bedrock 両カタログの既定へ** (0.161.0)。

**エンタープライズと Bedrock** — multi-agent V2 と Ultra reasoning に対応し、**Bedrock Mantle が AWS GovCloud リージョン**を受け付ける。`codex exec` と TypeScript SDK が**ターンごとに Cyber access program を選べる** (0.161.0)。**カスタムプロバイダーの capability 設定** (0.162.0)。

**並行作業** — **managed Git worktree ツール**と Command Center のタスク固定 (0.162.0)。

**MCP** — **`/mcp login <name>`** でターミナルから MCP サーバーへサインインできる (0.161.0)。Windows のリモート stdio MCP 起動時に **`SYSTEMROOT` / `TEMP` / `TMP` を保持** (0.160.1)。

**その他** — 音声会話の入出力チャンネル選択、Daybreak のオプトイン (0.161.0)。Code Mode のランク付きツール検索と **`apply_patch` の CRLF 保持** (0.162.0)。

## 拾わなかったもの

alpha（0.162.0 / 0.163.0 系）は件数のみの扱いです。**0.161.0 はリリース本文が1行だけで公開され、内容は翌日 changelog 側に掲載されました。**

- [openai/codex releases](https://github.com/openai/codex/releases)
