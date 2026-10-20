---
date: 2026-10-15
title: "Slack / Teams の @GitHub が複数リポジトリを1会話で扱えるように"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates
fetched_at: 2026-10-19T09:40:00+09:00
published_at: 2026-10-15
date_precision: date-only
category: enhancement
---

# 2026-10-15 Slack / Teams の @GitHub が multi-repository 対応

## 公式内容の日本語要約

**Slack と Microsoft Teams の @GitHub が、1つの会話の中で複数リポジトリを横断して動けるようになった。** 会話を切り替えずに、スレッドの文脈を使って特定リポジトリへ issue を作る、名前を指定したリポジトリへコード変更を入れて pull request を開く、**複数リポジトリにまたがる自分の open PR を一覧しレビュー待ちを示す**、複数リポジトリのコードを使って不具合を調べる、といった操作ができる。

**会話体験の改善も4点挙げられている。** メッセージの**先頭以外でも @GitHub をメンションできる**、会話中のリポジトリ切り替えが容易になった、**共有された Slack メッセージやスレッドを文脈として使える**、エラーが減り、タスク開始が速くなり、中断からの復帰が滑らかになった。

**タイトルに "model ... updates" とあるが、本文に Slack / Teams 向けのモデル変更の記述は無い。** 同日付の別告知（モデル廃止予告、2026-11-16 発効）があるが、公式ページはこの統合機能と結び付けていない。

対象プランと管理者作業は記載がない。フィードバックは GitHub Community の discussion で受け付けている。

## できるようになったこと

- 1つの Slack / Teams 会話で複数リポジトリへ issue 作成・コード変更・PR 作成ができる
- 複数リポジトリの open PR を一覧し、レビュー待ちを識別できる
- 共有された Slack メッセージ・スレッドを文脈に使える

## 影響範囲

- 対象ユーザー: Slack / Microsoft Teams で @GitHub を使う利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Slack / Teams 連携（UI）

## 教材化メモ

- **チャットツールが開発作業の入口になる流れ**の具体例。**同じ週に Claude Code 側も Slack Connect チャンネル対応（v2.1.300）を入れている。** 「エージェントへの指示の入口が IDE の外へ出ていく」という横断的な見方が取れる。
- **共有スレッドを文脈に使える**点は、情報の持ち出し範囲の論点を生む。Slack の会話内容がリポジトリ操作の入力になるため、**どのチャンネルで @GitHub を使わせるかは統制の対象**になる。本告知には管理者作業の記載が無いことも含めて注意点として扱える。
- タイトルに書かれたモデル更新が本文に無い点は、**「告知のタイトルと本文が合わないことがある」**という一次情報の読み方の例になる。

## 原文確認

- 公式見出し: Multi-repository support and other improvements for GitHub in Slack and Teams
- 公式URL: https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates
- 原文全文は公式ページで確認してください。
