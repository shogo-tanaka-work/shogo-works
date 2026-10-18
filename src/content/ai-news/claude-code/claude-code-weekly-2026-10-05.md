---
title: "Claude Code 週次まとめ（9/28〜10/3） — 資格情報がログに残る経路が5つ、効いていなかった権限ルールが8件塞がれた"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-10-05
sourceUrl: "https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md"
summary: "2026-09-28 から 10-03 の Claude Code（2.1.284 / 285 / 286 / 287 / 288 / 289）をまとめる。今週の中心は2つで、どちらも更新しないと塞がらない。1つは資格情報がログとトランスクリプトに残る経路の修正5件（2.1.286）。MCP エラーメッセージでの露出、Bearer トークンの部分マスク、不可視文字を含む秘匿値、URL パスワードの特殊文字と IPv6、伏せ字後の不正 JSON である。もう1つは、書いてある deny / ask ルールが効いていなかった抜け穴の修正8件（2.1.284 で4件、2.1.289 で4件）。複合シェルコマンドの入れ子部分、環境変数を前置したコマンド、裸の変数代入、シンボリックリンク経由の IDE 参照、managed settings 下でのプラグイン自己承認などが含まれる。あわせて 2.1.284 で auto mode が全プラン・全プロバイダーで既定になり、既定 Sonnet が Sonnet 5.5 へ変わった。2.1.287 は OpenTelemetry の user_prompt イベントに prompt の複製である prompt_text を追加しており、prompt をマスクしている組織は追加対応が必要になる。"
description: "2026-09-28〜10-03 の Claude Code のパッチをまとめて振り返る。資格情報のログ露出5件、効いていなかった権限ルール8件、既定値の変更、テレメトリのマスキング漏れが中心。"
impact: "2.1.285 以前を使っている環境は 2.1.286 以降へ更新してください。それ以前は MCP のエラーメッセージやログ、フィードバック用トランスクリプトに資格情報が残る経路が5つありました。ログを外部へ転送している場合は、その範囲の確認も必要です。deny / ask ルールを運用している組織は 2.1.289 以降へ更新してください。複合シェルコマンドの入れ子部分、環境変数を前置したコマンド、裸の変数代入、シンボリックリンク経由の IDE 参照でルールが素通りしていました。OpenTelemetry で prompt をマスクしている組織は、2.1.287 で追加された prompt_text も同じ扱いにしてください。2.1.284 からは auto mode が全プラン・全プロバイダーで既定になり、既定 Sonnet も Sonnet 5.5 へ変わるため、前提が違う場合は permissions.defaultMode とモデルを明示設定してください。"
tags: ["claude-code", "weekly-rollup", "権限管理", "資格情報", "テレメトリ", "harness-engineering"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**更新してください。資格情報の露出と権限ルールの抜け穴で、合わせて13件の修正が入っています。**

**資格情報がログとトランスクリプトに残っていました** (2.1.286)。MCP のエラーメッセージが値を露出していた、パーセントエンコードされた Bearer トークンが部分的にしかマスクされていなかった、**不可視文字を含む秘匿値がマスク済みログに現れていた**、URL のパスワード伏せ字が特殊文字と IPv6 アドレスで失敗していた、伏せ字処理後にフィードバック用トランスクリプトへ不正な JSON 行が入っていた。**5件すべて「ログ側に残る」型です。** 更新すれば塞がりますが、**ログを外部へ転送している場合は、それまでの範囲の確認も必要です。**

**書いてある権限ルールが効いていませんでした** (2.1.284, 2.1.289)。**複合シェルコマンドの入れ子部分**、**環境変数を前置した破壊的コマンド**（公式例は `TZ="$HOME"` 付きのビルド成果物削除）、**裸の変数代入がコマンドの前に来る形**で deny / ask が素通りしていました。`Read` の deny ルールが**シンボリックリンク経由で IDE から参照・変更されたファイル**に効いていませんでした（以上 2.1.289）。さらに **managed settings の `allowManagedPermissionRulesOnly` 下で、プラグインが `allowed-tools` により自分のツールを自己承認できていた**、**プロジェクト外から `.claude/rules` へリンクされたルールが承認プロンプトなしにスキップされていた**（以上 2.1.284）。**ルールを書いた時点では、まだ安全だと言えません。**

**OpenTelemetry で `prompt` をマスクしている組織は追加対応が必要です** (2.1.287)。`user_prompt` イベントに **`prompt` の複製である `prompt_text` が増えました**。マスキングをキー名の列挙で実装している場合、**更新で静かに穴が開きます。**

**何もしなくても変わるものが2つあります** (2.1.284)。**auto mode が全プラン・全プロバイダーで既定**になり（`permissions.defaultMode` は従来どおり優先）、**既定 Sonnet が Sonnet 5.5** へ移りました。

## 変更一覧

**資格情報とログ** — MCP エラーメッセージでの資格情報露出、Bearer トークンの部分マスク、不可視文字を含む秘匿値、URL パスワードの特殊文字と IPv6、伏せ字後の不正 JSON 行の5件を修正 (2.1.286)。

**権限ルールとサンドボックス** — 複合コマンドの入れ子部分・環境変数の前置・裸の変数代入での deny / ask 素通り、`Read` deny ルールのシンボリックリンク経由の取りこぼし (2.1.289)。managed settings 下でのプラグイン自己承認、`.claude/rules` へのシンボリックリンク経由のルール読み込み、`ANTHROPIC_FOUNDRY_RESOURCE` の未検証補間、`MEMORY.md` と recall メモの不可視文字・擬似マークアップの無害化 (2.1.284)。

**既定値の変更** — **auto mode を全プラン・全プロバイダーで既定化**、**既定 Sonnet を Sonnet 5.5 へ**。auto mode のプロンプトに「Yes, but ask again next time」を追加 (2.1.284)。

**組織統制** — **`CLAUDE_CODE_DISABLE_WEB_FETCH`** による WebFetch の無効化 (2.1.285)。**ユーザーがインストールした plugin が、組織管理下の MCP サーバーのサインインツールの説明文を書き換えられる問題**を修正 (2.1.289)。プラグインのインストールが git / folder 由来の npm ソースを拒否 (2.1.286)。

**テレメトリ** — `user_prompt` イベントへ **`prompt_text`**（`prompt` の複製）を追加 (2.1.287)。

**可用性** — 既定モデルが利用不可のとき全ターンが失敗していた問題を修正し、**1つ前のティアで再試行**。フォールバック通知にコンテキストウィンドウの縮小を表示。API リトライをモデル呼び出しごとの上限へ変更 (2.1.286)。

**課金の可視化** — `/usage` とステータスラインに Claude apps gateway の**支出上限を金額で表示**（`rate_limits.spend_limit` に `used_usd` / `limit_usd` / `period`）(2.1.284)。

**mods とプラグイン** — **mods を導入**（公式ブログの独立発表として単独記事で扱ったため、ここでは版数の対応だけ記す）と組み込み mod `You should know` (2.1.287)。mods へ `$.ui.selection()` を追加 (2.1.288)。`agent.spawn`、plugin hook をまたぐ一貫した agent id、`$.agent.list()` の idle / waiting 状態 (2.1.289)。**plugin / mod の不具合がセッション全体を落とす経路を個別に封鎖**（描画例外、高さゼロ領域、非同期例外、未知の枠線スタイル）(2.1.289)。

**MCP** — `/mcp reconnect all` (2.1.284)。**URL プロンプト対応**（2025-11-25 プロトコル。**接続できなくなったサーバーには `"bareElicitationCapability": true` を追加**）(2.1.287)。追加の OAuth スコープ要求時の再認証プロンプト (2.1.288)。

**運用と操作** — 権限プロンプトに「2 of 5」の件数表示 (2.1.286)。`claude --desktop` (2.1.285)。クラウドセッションへ組み込みの `gh api`、`/code-review` の `--max-findings <n>|all`、Ctrl+C で消したプロンプトの復元 (2.1.288)。agents ビューの `n:<text>` フィルタ (2.1.287)。

## 拾わなかったもの

VS Code 拡張のブックマークと question card、サブエージェントの表示まわりの修正、`--bare` の挙動変更、`plugin list` / `plugin eval` / `plugin update` の古いコピー表示など、表示と内部改善の修正が多数あります。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
