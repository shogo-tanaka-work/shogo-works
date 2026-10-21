---
title: "Think エージェントが @cloudflare/computer の workspace へ — @cloudflare/shell は非推奨、既存データは自動移行されない"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-20
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-20-think-computer-workspace/"
summary: "Cloudflare changelog の 2026-10-20 エントリで、Think と Agent Skills が、ファイルシステムツールに加えて @cloudflare/computer のワークスペースを使うようになったと告知された。JavaScript 実行環境は JavaScriptWorkerBackend を追加して構成する。@cloudflare/shell と Think の createExecuteTool は非推奨となり、本日以降は開発もサポートもされない。公式は破壊的変更と明記しており、@cloudflare/computer は @cloudflare/shell と別のテーブルにファイルを保存し、自動のデータ移行はない。既存のワークスペースを保つには公式のスクリプトでコピーする必要があり、そうしないとエージェントは空のワークスペースで始まる。元のデータは既存のテーブルに残る。"
description: "Think を使う開発者向けの破壊的変更。更新するとワークスペースが空になるため、移行手順を先に確認する。"
impact: "Think を本番で動かしている場合、依存を更新するだけでエージェントの作業ファイルが見えなくなる。移行スクリプトの実行と、非推奨になった @cloudflare/shell・createExecuteTool からの置き換えが必要になる。"
tags: ["cloudflare", "agents", "think", "破壊的変更", "非推奨"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-10-20、**Think と Agent Skills** が `@cloudflare/computer` の**ワークスペース**を使うようになったと告知しました。従来のファイルシステムツールに加えて使います。JavaScript の実行環境は、`JavaScriptWorkerBackend` を追加して構成します。

同時に、**`@cloudflare/shell` と Think の `createExecuteTool` は非推奨**になりました。公式は、**本日以降は開発もサポートもされない**としています。

**これは破壊的変更です。** `@cloudflare/computer` は `@cloudflare/shell` と**別のテーブル**にファイルを保存し、**自動のデータ移行はありません**。既存のワークスペースを保つには、公式の移行ガイドにあるスクリプトでファイルをコピーする必要があります。何もしなければ、エージェントは**空のワークスペース**で始まります。ただし元のデータは既存のテーブルに残ります。

## 何が変わったか

- Think と Agent Skills が `@cloudflare/computer` の**ワークスペース**を使う（ファイルシステムツールとも併用）
- JavaScript 実行環境は `JavaScriptWorkerBackend` を追加して構成する
- **`@cloudflare/shell`** と Think の **`createExecuteTool`** は**非推奨**。今後の開発・サポートなし
- **ファイルは別テーブルに保存**され、**自動移行はない**。公式スクリプトでのコピーが必要
- 移行しなかった場合は空のワークスペースで開始。元のデータは既存テーブルに残る
- 移行手順の詳細は公式の「Migrating from `@cloudflare/shell` to `@cloudflare/computer`」に記載（本記事では未取得）

## 業務インパクト（一般企業向け）

**Think でエージェントを本番運用している場合、更新前に移行計画が必要です。** 依存を更新しただけで、エージェントが以前の作業ファイルを参照できなくなります。ユーザーの作業内容に基づくエージェントでは、**データが消えたように見える**事故になります。

進め方は次のとおりです。先にステージング環境で更新し、移行スクリプトでファイルを複製します。内容を確認してから本番を切り替えます。元のデータは既存テーブルに残るため、**戻せる余地はあります**が、新旧の差分が出ないよう切り替えのタイミングを決めてください。

## 副業・個人活用視点

**Think で作ったエージェントを顧客に納品している場合は、保守対応が発生します。** 依存を自動更新する設定のままだと、ある日突然ワークスペースが空になり得ます。更新の前に、バージョンを固定しておくと安全です。

これから作る案件では、非推奨になった `@cloudflare/shell` を避け、最初から `@cloudflare/computer` を前提に設計すれば、移行作業を省けます。
