---
title: "Codex 週次まとめ（7/6〜7/12） — 読み取りは通し書き込みだけ確認する「writes」承認モードが入った"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-07-12
sourceUrl: "https://github.com/openai/codex/releases"
summary: "2026-07-06 から 07-12 の OpenAI Codex（rust-v0.143.0 / 144.0 / 144.1）をまとめる。0.144.0 で「writes」承認モードが追加され、読み取りは自動許可して書き込みだけ確認する運用が選べるようになった。0.143.0 ではリモートプラグインが既定で有効になり、macOS / Windows のシステムプロキシ（PAC / WPAD）経由の認証・通信ルーティングに対応した。Amazon Bedrock には GPT-5.6 系（Sol / Terra / Luna）が追加され、`max` reasoning effort が正式サポートされた。MCP ツールは既定でツール検索を使う。"
description: "2026-07-06〜07-12 の OpenAI Codex のリリースをまとめて振り返る。writes 承認モード、リモートプラグインの既定有効化、システムプロキシ対応、Bedrock の GPT-5.6 追加が中心。"
impact: "承認の粒度が増えたことで、CI やエージェント連携で「全許可か全確認か」の二択を避けられるようになった。企業プロキシ配下のユーザーと Bedrock 利用者に直接影響する。リモートプラグインが既定で有効になるため、配布方針を決めていない組織は確認が要る。"
tags: ["codex", "weekly-rollup", "権限管理", "plugin", "モデル選択"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**承認の粒度が1つ増えました。** 「writes」承認モードが追加され、**読み取りは自動許可して書き込みだけ確認する**運用を選べます (0.144.0)。「全部許可」か「全部確認」の二択だった構成を、実務に合う位置へ寄せられます。

**リモートプラグインが既定で有効になりました** (0.143.0)。npm のマーケットプレイスソースにも対応しています。プラグインの配布方針を決めていない組織は、何が読み込まれうるかを確認しておく価値があります。

**企業プロキシ配下なら 0.143.0 です。** macOS / Windows のシステムプロキシ（PAC / WPAD）経由の認証と通信ルーティングに対応しました。

## 変更一覧

**承認と権限** — 「writes」承認モードの追加 (0.144.0)。MCP ツールは実験的な opt-in なしにインタラクティブ認証を要求できるようになりました。

**プラグインと MCP** — リモートプラグインの既定有効化、MCP ツールの既定ツール検索、ChatGPT ホスト型 MCP サーバーでのセッション認証利用 (0.143.0)。`hooks.json` のトップレベルメタデータ検証は緩和され、設定の自由度が上がりました。

**モデルと Bedrock** — Amazon Bedrock 向けに GPT-5.6 系（Sol / Terra / Luna）が追加され、`max` reasoning effort が正式サポートされました (0.143.0)。

**リモート実行** — `codex remote-control pair` で稼働中のデーモンからペアリングコードを生成できます (0.143.0)。app-server クライアントは環境情報の取得、子スレッドの一覧取得、任意ターンからの履歴フォークに対応しました。

**使用量** — usage-limit のリセットクレジットに種別と有効期限が表示され、選択できるようになりました。Ultra 推論や高並列実行時には使用量の急増を警告します (0.144.0)。

**修正** — Windows ConPTY、サンドボックスの資格情報再試行、TUI の安全確認プロンプトの残留など (0.143.0)。OpenSSL / Hono / fast-uri / quick-xml / crossbeam-epoch の更新（セキュリティ対応）も同版です。インストーラと macOS Code Mode の緊急修正は 0.144.1 で入りました。

## 拾わなかったもの

カタログ表示の強化、グローバル pnpm インストールの検出改善など、細かな改善があります。全件は公式リリースノートを参照してください。

- [openai/codex releases](https://github.com/openai/codex/releases)
