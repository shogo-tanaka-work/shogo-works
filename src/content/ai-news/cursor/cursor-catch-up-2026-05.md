---
title: "Cursor 2026-05：Composer 2.5・Jira連携・/loop Skill"
tool: "cursor"
toolLabel: "Cursor"
date: 2026-05-20
sourceUrl: "https://cursor.com/changelog"
summary: "Cursor は 2026 年 5 月に **Composer 2.5（2026-05-18）**、**Cursor in Jira（2026-05-19）**、**v3.5 リリース（2026-05-20、Shared Canvases と `/loop` Skill、および Cursor Automations の Agents Window 統合）** と、立て続けに「Agents Window 中心の運用」を進化させる更新を出した。本記事は当サイトにとって Cursor 初回のキャッチアップ記事として、これら直近の流れを 1 本に集約する。**Composer 2.5** は持続的なタスク（長時間続く agent 実行）でのパフォーマンスを上げた次世代モデルで、Cursor の中核となる agentic ワークフローの土台。**Cursor in Jira** は Jira の work item を **Cursor agent にアサイン**できる統合で、課題管理ツールから直接 agent を呼び出す導線を作る。**v3.5** では、agent ワークスペースに対する **Shared Canvases**（canvas のライブスナップショットへのリンクをチームで共有）と、agent に対してプロンプトを **ローカルスケジュールで繰り返し実行できる** `/loop` Skill が追加された。あわせて、**Cursor Automations** は cursor.com/automations だけでなく **Agents Window 上でも** 作成・管理できるようになり、1 つの automation に **複数 repo を attach** したり、**repo を attach しない automation** を作ったりもできるようになった（新規 automation 実行に 7 日間 50% 割引）。Cursor 自体は 2026-05-26〜2026-05-28 の窓内には新規アップデートを出していないため、本記事は 5 月中の更新群をまとめた **初回キャッチアップ** という位置付けとなる。"
description: "Cursor 2026年5月の主要アップデートを1本で把握できる。Composer 2.5の持続タスク強化・Jiraから直接agentにアサインできる統合・/loop Skillでのローカルスケジュール繰り返し実行・Shared Canvasesによるチーム共有など、Agents Window中心の業務統合機能をまとめて解説。"
impact: "Cursor の 2026-05 アップデート群は、いずれも **Agents Window を中心とした業務統合** を進めるベクトルで一致している。**Cursor in Jira** によって課題管理ツールから直接 agent を呼べる導線が整い、**Cursor Automations の Agents Window 統合 + 複数 repo / repo なし対応** で「automation = agent ワークスペース上で組み立てる継続ワークフロー」という設計が定着しつつある。**Shared Canvases** はチームで agent の作業面を共有する具体的な方法で、レビュー文化のあるチームに即時に効く。**`/loop` Skill** はローカルスケジュールでプロンプトを繰り返せるため、定常タスク（ログチェック、release 監視、定型レポート）を agent に張り付けやすい。**Composer 2.5** はこれらの土台を持続タスク性能で支える。これまで「Cursor は IDE / 補完中心」のイメージで導入を見送っていた組織は、現状の Cursor が **Jira 連携 + agent ワークスペース + automation + 共有 canvas + ローカル loop** のセットを抱える **agentic 統合ツール** に近づいていることを踏まえて再評価する価値がある。"
tags: ["cursor", "composer", "agents-window", "jira", "automations", "shared-canvases", "loop", "catch-up"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cursor は 2026 年 5 月に Agents Window を中心とした業務統合を加速する更新群を立て続けに公開しました。本記事は当サイトにとって Cursor 初回のキャッチアップ記事です。直近の窓（2026-05-26〜2026-05-28）には新規アップデートが出ていないため、ここでは **5 月中の主要アップデート群** を 1 本にまとめて整理します。

### Composer 2.5（2026-05-18）

Cursor の **持続的なタスク（長時間続く agent 実行）でのパフォーマンス**を向上させた次世代モデルです。Cursor の中核を担う agentic ワークフローの土台で、後述する `/loop` や Cursor Automations の効きを支えます。

公式: https://cursor.com/changelog/composer-2-5

### Cursor in Jira（2026-05-19）

Jira の work item を **Cursor agent にアサイン**できる Jira 統合です。課題管理ツールから直接 agent を呼び出す導線ができ、「チケットを開く → agent に作業を投げる」という流れが Jira 起点で完結します。

公式: https://cursor.com/changelog/05-19-26

### v3.5: Shared Canvases と `/loop` Skill（2026-05-20）

Cursor の Agents Window を **チーム協業の基盤**として強化する 2 つの追加が入りました。

- **Shared Canvases**: agent ワークスペース上の canvas に対し、**ライブスナップショットへのリンク**を共有できます。チームで agent の作業面を共有してレビューする運用がそのまま回せます。
- **`/loop` Skill**: agent にプロンプトを **ローカルスケジュールで繰り返し実行** させられます。release 監視・ログチェック・定型レポートのような **継続タスク** を agent に張り付けやすくなります。

公式: https://cursor.com/changelog/shared-canvases

### v3.5: Cursor Automations の Agents Window 統合（2026-05-20）

これまで `cursor.com/automations` 専用だった **Cursor Automations** が、Agents Window でも作成・管理可能になりました。あわせて自動化の柔軟性が拡張されています。

- 1 つの automation に **複数 repo を attach** でき、agent が複数 repo を横断して context を推論し、必要な箇所すべてで配信・テスト・検証を実行できるように。
- **repo を attach しない automation** も作れるようになり、コードベース外の繰り返しタスク（外部 API 監視、定型通知など）にも適用できる。
- 新規 automation の実行に **7 日間 50% 割引** が適用される。

公式: https://cursor.com/changelog/05-20-26

### 窓内アップデートの状況（2026-05-26〜2026-05-28）

当サイトの今回の調査窓（2026-05-26 から 2026-05-28）には Cursor の新規アップデートはなく、最新が 2026-05-20 の v3.5 群でした。Cursor を当サイトの AIニュース対象に **初収載** したのが本リサーチサイクルのため、本記事は **初回キャッチアップ**として 5 月中の主要アップデートを整理しています。次回以降の窓では、Cursor の単発アップデート単位で記事化していく方針です。

## 何が変わったか

- **Composer 2.5（2026-05-18）**: 持続タスクのパフォーマンス改善。
- **Cursor in Jira（2026-05-19）**: Jira work item を Cursor agent にアサイン可能に。
- **v3.5（2026-05-20）**:
  - **Shared Canvases**: agent ワークスペース上の canvas をライブスナップショットのリンクで共有。
  - **`/loop` Skill**: agent にプロンプトをローカルスケジュールで繰り返し実行させる。
  - **Cursor Automations の Agents Window 統合**: cursor.com/automations と同じ機能を Agents Window で操作可能に。
  - **複数 repo を attach** できる automation。
  - **repo なし automation** が作成可能。
  - 新規 automation 実行に **7 日間 50% 割引**。

## 業務インパクト（一般企業向け）

2026-05 の Cursor アップデート群は **Agents Window を中心にした業務統合** という単一のベクトルでまとまっています。これまで Cursor を「IDE / 補完中心のツール」として位置付けて導入を見送っていた組織にとっては、現状の Cursor が **Jira 連携 + agent ワークスペース + automation + 共有 canvas + ローカル loop** のセットを抱える **agentic 統合ツール** に近づいていることを踏まえて、再評価する価値があります。

特に、**Cursor in Jira** は課題管理ツール起点での agent 呼び出しを実現するため、開発チームの「チケット→着手」フローを Cursor 経由に統一できる組織にとっては導入インパクトが大きい更新です。**Cursor Automations の複数 repo / repo なし対応** は、microservices 構成や、コードベース外の繰り返しタスクを持つチームに直接効きます。

**Shared Canvases** はレビュー文化のあるチームに即時に刺さります。agent の作業面（canvas）を **静的に共有する**のではなく **ライブスナップショットへのリンクで共有する**形なので、レビューワがそのまま続きを触れる体験につながります。

**`/loop` Skill** は定常監視タスクとの相性が良く、release 通知・ログ確認・定型レポートを agent に張り付けて回す運用が現実的になります。Composer 2.5 の持続タスクパフォーマンス改善とセットで考えると、長時間続く agent 実行の安定運用に踏み込めるタイミングです。

導入判断の論点としては、

- Jira を使っているか（in Jira 統合の効きどころ）
- 複数 repo を横断する作業が多いか（automation の複数 repo attach の効きどころ）
- agent の作業面をチームで共有する慣習があるか（Shared Canvases の効きどころ）
- 継続タスクを agent に張り付ける意思があるか（`/loop` Skill の効きどころ）

の 4 点を中心に評価するのが整理しやすいです。

## 副業・個人活用視点

個人開発・副業の視点では、**`/loop` Skill** が一番手軽に効きます。ローカルスケジュールで agent にプロンプトを繰り返し実行させられるため、release watch、競合 changelog 監視、日次の自己レポート生成、SNS 用の定型ドラフトなどを agent に張り付けやすくなります。**Composer 2.5** が持続タスクのパフォーマンスを上げているので、長時間 loop でも体感品質が落ちにくいです。

**Cursor Automations の repo なし対応** は、副業として 1 人で複数の小タスクを回す人にとって、コードベースに紐付かない繰り返し作業（外部 API 監視、定型通知、メール下書きなど）を Cursor 上に置ける選択肢を増やします。新規 automation 実行の 7 日間 50% 割引と組み合わせれば、低コストで実験して効くものだけ残す試行錯誤がやりやすくなります。

**Shared Canvases** は、コーチングや教材レビュー、ペアプロ案件など、**作業面を他人と共有する仕事** をしている副業者にとって、画面共有や Zoom 録画を補完する手段になります。canvas のライブスナップショットをそのまま渡せるため、非同期レビュー型の副業案件と相性が良い機能です。

Cursor を「IDE / 補完」としてのみ捉えていた人は、**Agents Window 中心の使い方** に一度寄せて試してみる価値がある時期です。本記事は当サイトの Cursor 初回キャッチアップなので、次回以降はリリース単位での速報になります。
