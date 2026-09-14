---
date: 2026-09-09
title: "エージェント操作の企業管理権限が一般提供（シェル・ファイル・ネットワークを deny / ask / allow で統制）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations
fetched_at: 2026-09-14T09:50:00+09:00
published_at: 2026-09-09T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-09 GitHub Copilot のエージェント操作に企業管理権限

## 公式内容の日本語要約

**GitHub Copilot Business / Enterprise の管理者が、エージェントの操作を中央から統制できるようになった（GA）。** 特定の操作を **ブロック / 承認必須 / 許可** のいずれかに設定できる。

統制の対象は **シェルコマンド、ファイルの読み取りと編集、ネットワークドメイン**である。

重要なのは強制力の設計で、**この統制はユーザー設定・ワークスペース設定・保存済みの承認のいずれによっても回避できない。** 組織は企業内のチームごとに別のポリシーを作成できる。

適用面は **GitHub Copilot アプリ、GitHub Copilot CLI、Agent Host を使う Visual Studio Code セッション**で、2026-09-09 時点で一般提供である。

管理者は企業管理設定のドキュメント（deny / ask / allow の設定）を確認し、自組織のセキュリティ要件に応じたポリシー適用を検討するよう案内されている。

## できるようになったこと

- シェルコマンド / ファイル読み書き / ネットワークドメインを deny / ask / allow で中央管理できる
- ユーザー設定・ワークスペース設定・保存済み承認による回避を禁止できる
- 企業内のチーム単位で別ポリシーを適用できる

## 影響範囲

- 対象ユーザー: GitHub Copilot Business / Enterprise の管理者
- 対象プラン: Business / Enterprise
- API / UI / 管理者機能: 企業管理設定（Copilot アプリ / CLI / VS Code の Agent Host セッション）

## 教材化メモ

- **「ユーザー設定で上書きできない」ことが機能の本体である。** 権限統制は、抜け道があるかどうかで価値がほぼ決まる。保存済み承認（一度 allow したものが残る経路）まで明示的に潰している点は、統制設計として真面目である。
- **同じ週に Claude Code 2.1.268 がシンボリックリンク配下での権限ルール不適用を修正している。** 権限統制は「設定できること」と「抜け道が無いこと」の2段階があり、**両社とも今まさに2段階目を詰めている段階**である、という整理ができる。ハーネスエンジニアリング教材の「ガードレール層」の現在地として使える。
- **対象が shell / file / network の3軸である**点は、エージェントの権限設計を教える際の分類としてそのまま使える。この3つが揃えば、エージェントが外へ及ぼす影響はほぼ覆える。
- 記事化はしない（週次確認ソースの更新）。ただし**管理者の作業が発生する**ため、週次サマリーで明示する。

## 原文確認

- 公式見出し: Enterprise managed permissions for GitHub Copilot agent operations
- 公式URL: https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations
- 原文全文は公式ページで確認してください。
