---
date: 2026-08-27
title: "Cursor: リポジトリ無しで Cloud Agent を始められる — Origin リポジトリと Vercel 公開"
service: "Cursor"
source: https://cursor.com/changelog/start-from-scratch
fetched_at: 2026-08-31T09:45:00+09:00
published_at: 2026-08-27T00:00:00Z
date_precision: date-only
category: release
---

# 2026-08-27 Cursor: Start from scratch, without a repo

## 公式内容の日本語要約

Cloud Agents を使うのに、**GitHub や他のバージョン管理サービスの接続が不要**になった。公式の表現は「最初からプロンプトを書き始め、あとから Cursor Origin リポジトリへ保存する」。

**Cursor Origin リポジトリ**は Cursor 自身が持つリポジトリである。Cloud Agent のプロジェクトが望む状態になった時点で、**名前と公開範囲（private / internal）を指定して、完全にスキャフォールドされた Origin リポジトリへ変換**できる。共有もそのまま続けての開発もできる。

あわせて、**ブラウザ内でのライブプレビュー**と、**Vercel 連携による公開**に対応した。Vercel アカウントを接続すると、完成したプロジェクトのライブ URL が発行される。Vercel アカウントが必要なのは公開機能だけで、プロジェクトの開発自体には不要である。

窓内（2026-08-24〜08-31）の Cursor changelog はこの1件のみ。

## できるようになったこと

- SCM を接続せずに Cloud Agent でプロジェクトを開始できる
- 作業を Cursor Origin リポジトリへ変換できる（private / internal）
- ブラウザ内でライブプレビューし、Vercel 経由で公開できる

## 影響範囲

- 対象ユーザー: Cursor の Cloud Agents 利用者。特に既存コードベースの無い新規プロジェクト
- 対象プラン: Cloud Agents が使えるプラン
- API / UI / 管理者機能: Cloud Agents の UI + Vercel 連携

## 教材化メモ

- **「リポジトリを持たない状態から始められる」ことの裏側**として、成果物が一時的にベンダー側のストレージにしか無い期間が生まれる。個人の試作なら軽いが、**業務で使うなら Origin へ変換するまでがバックアップの空白期間**である。教材では「どこに保存されているか」を必ず問う癖として扱える。
- **private / internal という公開範囲の選択**は、社内共有の既定値をどう置くかの実例。「internal（組織内公開）」が既定になっているツールでは、意図せず社内全体へ出る事故が起きうる。
- 記事化はしない（週次確認ソースの通常更新）。なお、2026-08-30 の日次で扱った **OpenAI から Cursor へのモデル提供契約終了（シャットオフ提案日 2026-11-12）**について、**窓内に Cursor 側の公式発表は確認できなかった**。

## 原文確認

- 公式見出し: Start from scratch, without a repo（2026-08-27）
- 公式URL: https://cursor.com/changelog/start-from-scratch
- 一覧: https://cursor.com/changelog
- 原文全文は公式ページで確認してください。
