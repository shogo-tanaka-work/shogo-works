---
title: "Claude Code 週次まとめ（6/22〜6/28） — `!` コマンドの出力を Claude が自動で受け取るようになり、サンドボックスが資格情報を遮断できるように"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-06-28
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-06-22 から 06-28 の Claude Code（v2.1.186 / 187 / 191 / 193 / 195）をまとめる。既定の挙動が変わったのは `!` プレフィックスで実行した Bash コマンドで、出力を Claude が自動的に受け取って応答するようになった（`respondToBashCommands: false` で従来動作に戻せる）。`sandbox.credentials` を有効にすると、サンドボックス内のコマンドが資格情報ファイルや秘密環境変数を読めなくなる。組織のモデル制限が model picker・`--model`・`/model`・`ANTHROPIC_MODEL` のすべてに適用されるようになり、日本語・韓国語・中国語のペースト文字化けも直った。`/rewind` で `/clear` の前に巻き戻せる。"
description: "2026-06-22〜06-28 の Claude Code のパッチをまとめて振り返る。! コマンドの自動応答、sandbox.credentials、組織モデル制限の全経路適用、CJK ペースト修正が中心。"
impact: "日本語ユーザーはペースト文字化けが直るため更新の価値が高い。CI や共有環境で使っている組織は `sandbox.credentials` で `.env` や `~/.aws/credentials` の読み取りを遮断できる。hook matcher を使っている場合は、部分一致の修正で既存設定の効き方が変わる可能性がある。"
tags: ["claude-code", "weekly-rollup", "セキュリティ", "権限管理", "hooks"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**日本語を扱うなら更新してください。** CJK テキストのペースト文字化けが修正されました (2.1.187)。日本語音声入力の auto-submit が正常に動くようになったのも同じ週です (2.1.195)。

**既定の挙動が2つ変わりました。** ひとつは `!` プレフィックスで実行した Bash コマンドで、**出力を Claude が自動的に受け取って応答する**ようになりました (2.1.186)。「実行 → 出力を確認 → 依頼」が一続きになります。従来どおり手動で渡したい場合は `"respondToBashCommands": false` を設定します。もうひとつは hook matcher で、意図しない部分一致が止まりました (2.1.195)。**matcher を使っている場合、これまで動いていた設定が動かなくなる可能性があります。**

**共有環境で使っているなら `sandbox.credentials` を検討してください** (2.1.187)。サンドボックス内のコマンドが資格情報ファイルや秘密環境変数を読み取れなくなります。

## 変更一覧

**セキュリティと統制** — `sandbox.credentials` による資格情報の遮断、組織のモデル制限が model picker・`--model`・`/model`・`ANTHROPIC_MODEL` のすべてに適用（制限されたモデルを選ぶと "restricted by your organization's settings" と表示）(2.1.187)。全シェルコマンドが auto-mode の判定対象になったのは 2.1.193 です。

**MCP** — `claude mcp login <name>` / `claude mcp logout <name>` が追加され、対話メニューを介さず認証できるようになりました。`--no-browser` を付ければ、ブラウザのない SSH 環境でも stdin への URL 貼り付けで完了します (2.1.186)。ネットワークが不安定なときの接続信頼性も向上しています (2.1.191)。

**セッション操作** — `/rewind` で `/clear` の前の状態へ巻き戻せます (2.1.191)。同版では CPU 使用率が 37% 削減されました。bash モードの補完が改善され、`!` コマンドの操作性が上がっています (2.1.193)。

**可観測性** — OTel に応答ログを流せるようになりました (2.1.193)。組織展開で応答内容を監査パイプラインへ載せる用途に対応します。

**ワークフローとプラグイン** — `/workflows` のエージェント詳細ビューで `f` キーによるステータスフィルタ、`/plugin` の Installed タブへの Skills セクション追加 (2.1.186)。`agent({schema})` の検証が失敗し続けたときの無限ループは、5回失敗で中断するよう修正されました。

**AWS** — `/login` に「Claude Platform on AWS - refresh credentials」が追加され、長期セッションでの資格情報リフレッシュができます (2.1.186)。

## 拾わなかったもの

スリープ復帰後のストリーミング失敗、取り消し線の表示、バックグラウンドエージェントの安定性など、多数の個別修正があります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
