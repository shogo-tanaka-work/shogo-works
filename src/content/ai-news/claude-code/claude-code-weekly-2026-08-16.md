---
title: "Claude Code 週次まとめ（8/10〜8/16） — サブエージェントの fork が既定になり、翌日に一部が revert された週"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-08-16
sourceUrl: "https://github.com/anthropics/claude-code/releases"
summary: "2026-08-10 から 08-16 の Claude Code（v2.1.232 / 233）をまとめる。2.1.232 で `subagent_type: \"fork\"` が既定になり、サブエージェントが会話全体とプロンプトキャッシュを継承するようになった。対話セッションでの非 teammate エージェント起動も既定でバックグラウンド実行に変わっている。GitLab 対応が入り、トークンの秘匿と `glab` CLI 設定の保護が `gh` と同等になった。権限バイパス修正4件のうち、Cygwin symlink と入力リダイレクトの変更は翌日の 2.1.233 で revert されている。2.1.233 では新モデルで Todo ツールが無効化された。"
description: "2026-08-10〜08-16 の Claude Code のパッチをまとめて振り返る。fork の既定化、GitLab 対応、権限バイパス修正の一部 revert、Todo ツール無効化が中心。"
impact: "サブエージェントの起動方式とバックグラウンド実行が既定で変わるため、既存ワークフローの体感が変わる。権限修正の一部が巻き戻されたため、Cygwin symlink 経由の経路は現時点で塞がっていない。タスク管理をエージェントに任せていた運用は Todo ツール無効化の影響を受ける。"
tags: ["claude-code", "weekly-rollup", "権限管理", "harness-engineering", "セキュリティ"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 今週の要点

**設定を変えていなくても挙動が変わります。** `subagent_type: "fork"` が既定になり、サブエージェントが会話全体とプロンプトキャッシュを継承するようになりました (2.1.232)。あわせて、対話セッションでの非 teammate エージェント起動が既定でバックグラウンド実行になっています。**サブエージェントを使うワークフローは体感が変わります。**

**巻き戻しに注意してください。** 2.1.232 に入った権限バイパス修正4件のうち、**Cygwin symlink と入力リダイレクトの変更は翌日の 2.1.233 で revert** されました。Windows の Cygwin 経由の経路は、この時点では塞がっていません。

**Todo ツールが新モデルで無効化されました** (2.1.233)。設定なしで挙動が変わるため、タスク管理をエージェントに任せていた運用は「振る舞いが変わった」ように見えます。

## 変更一覧

**サブエージェントとセッション間連携** — fork の既定化とバックグラウンド実行の既定化 (2.1.232)。プロンプトの `@` で他の Claude セッションを名前指名でき、`SendMessage` で直接届きます。同一マシン上のセッション名は一意に保たれ、重複時は `name-word-word` の変種が割り当てられます。`/config` には「Dialog expiry」と「Messages from your other sessions」が追加されました。

**GitLab 対応** — GitLab のトークン群がシークレット秘匿の対象になり、`glab` CLI の設定が `gh` と同等の保護を受けます。プラグインマーケットプレイスは `gitlab.com` の URL（ネストしたサブグループを含む）をクローンできます (2.1.232)。

**権限** — バイパス修正4件（PowerShell、Windows の Cygwin symlink、ネストした git リポジトリの trust 継承、Gateway の不正な `email_domain`）。うち2件は 2.1.233 で revert (2.1.232, 2.1.233)。

**Gateway と Remote Control** — Gateway の `desktop:` オーバーレイが Desktop の全設定を受け付け、起動時に Desktop 側のスキーマで検証されます。ブリッジの transcript / 資格情報の継承、セッション再アタッチ、履歴復元まわりの修正が多数入りました。mTLS クライアント証明書のローテーションは再起動不要になっています (2.1.232)。

**その他** — `additionalMarketplaces` / `allowedMarketplaces` が既存設定の別名として使えます。Fable 5 が `/advisor` のアドバイザーとして再提供されました（Fable アクセスのある組織向け）(2.1.232)。

## 拾わなかったもの

Remote Control 周辺の細かな修正、表示調整などが含まれます。全件は公式 CHANGELOG を参照してください。

- [anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)
