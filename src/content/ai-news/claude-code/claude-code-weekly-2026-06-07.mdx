---
title: "Claude Code 週次まとめ（6/1〜6/7） — 組織がバージョンを強制できるようになり、deny ルールが glob に対応した"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-06-07
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-06-01 から 06-07 の Claude Code（v2.1.162 / 163 / 165 / 166 / 167）をまとめる。統制まわりの追加が続いた週で、managed settings に `requiredMinimumVersion` / `requiredMaximumVersion` が入り、許可範囲外のバージョンでは起動を拒否できるようになった。deny ルールはツール名位置で glob を使えるようになり、`\"*\"` で全ツール拒否を書ける。`fallbackModel` で過負荷時に試す代替モデルを最大3つ指定できる。権限ルールの取りこぼし修正も多く、WebFetch のプリ承認ドメイン、Windows のパス表記差、`$HOME` 経由参照の deny が順に直っている。"
description: "2026-06-01〜06-07 の Claude Code のパッチをまとめて振り返る。バージョン強制、deny ルールの glob 対応、fallbackModel、権限ルールの取りこぼし修正が中心。"
impact: "検証済みバージョン帯を組織で強制したい情シスは `requiredMinimumVersion` を使えるようになった。権限ルールを敷いている組織は、これまで意図どおりに効いていなかった経路（WebFetch のプリ承認ドメイン、Windows のパス表記、$HOME 経由の Bash 参照）が修正されたため、既存ルールの効き方を再確認する価値がある。"
tags: ["claude-code", "weekly-rollup", "権限管理", "ai-governance", "モデル選択"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**権限ルールを敷いている組織は、既存ルールの効き方を確認してください。** この週は「書いたつもりのルールが効いていなかった」種類の修正が集中しました。WebFetch の権限ルールがプリ承認ドメインに適用されない、Windows でバックスラッシュ表記や大文字小文字の差でマッチしない、ホームディレクトリ配下の deny ルール（`Read(~/Desktop/**)` など）が `$HOME` 経由で参照する Bash をブロックしない、起動中に管理設定を取得し終えたときに組織の権限ルールがセッション全体へ適用されない——いずれも**設定は書けていたのに守られていなかった**ケースです (2.1.162, 2.1.163)。

**バージョンを揃えたい組織には `requiredMinimumVersion` / `requiredMaximumVersion` が入りました** (2.1.163)。managed settings で許可範囲を決め、範囲外では起動を拒否して承認済みバージョンへ誘導できます。

## 変更一覧

**統制** — バージョン強制 (2.1.163)。deny ルールがツール名位置で glob を受け付け、`"*"` で全ツール拒否を書けるようになりました。allow ルールは非 MCP の glob を拒否し、deny の未知ツール名は起動時に警告します (2.1.166)。無効なエントリを含む managed settings が、残りの有効なポリシーまで黙って無効化していた問題も直りました。

**モデル** — `fallbackModel` で過負荷・利用不可時に順次試す代替モデルを最大3つ設定でき、`--fallback-model` が対話セッションにも適用されます。想定外の非リトライ可能エラーではフォールバックモデルで1回だけ再試行します（認証・レート制限・リクエストサイズ・トランスポートエラーは即座に表面化）(2.1.166)。`MAX_THINKING_TOKENS=0` や `--thinking disabled` が、既定で thinking するモデルに対しても効くようになりました。

**セッション間メッセージ** — `SendMessage` で中継されたメッセージはユーザー権限を持ちません。受信側は中継された権限要求を拒否し、auto モードではブロックします (2.1.166)。複数セッションを連携させる構成で、中継経由の権限昇格を防ぐための前提です。

**hooks と skills** — Stop / SubagentStop hooks が `hookSpecificOutput.additionalContext` を返してターンを継続できるようになりました（hook エラー扱いになりません）(2.1.163)。skills のコマンド本文では `\$` エスケープが使えます。

**表示と CLI** — スラッシュコマンドのクリックが「即実行」から「プロンプト挿入」に変わりました (2.1.162)。Remote Control は起動メッセージではなく永続フッターのピル表示になり、`/plugin list` と `/btw` のコピー操作が追加されています (2.1.163)。

## 拾わなかったもの

`claude -p` の永久ハング、CI 環境での Bedrock / Vertex / Foundry の認証エラー、JetBrains IDE のちらつき、macOS の `--bg-pty-host` 暴走など、環境依存の修正が多数あります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
