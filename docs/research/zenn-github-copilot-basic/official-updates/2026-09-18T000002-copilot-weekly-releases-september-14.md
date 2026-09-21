---
date: 2026-09-18
title: "GitHub Copilot 週次リリース（9月14日ぶん） — Sentry canvas、VS Code エージェントの Dev Container 対応、Agent Host からの PR 作成"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14/
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-18T00:00:02Z
date_precision: date-only
category: release
---

# 2026-09-18 Copilot 週次リリース（9月14日ぶん）

## 公式内容の日本語要約

週次リリースのまとめである。個別 changelog として出ているもの（auto モデル選択のティア、予算増額リクエスト GA、カスタムプロパティ提案、code review の刷新、10-19 の6モデル廃止）を再掲しつつ、**個別記事になっていない項目**が含まれる。

**Copilot アプリに Sentry canvas** が入り、クラッシュレポートから原因調査・修正・PR 準備までを1つの画面で進められる（"move from crash report to code fix"）。

**VS Code のエージェント面**が3点。**ローカル Dev Container 上でのエージェント実行**、**非アクティブセッションの自動クリーンアップ**（オプトインのプレビュー）、**Agent Host から直接 PR を作成**する機能。

**code review 側**は、自動解決・コミットメッセージ提案に加えて、**検証のためにシェルツールを使う**ようになった点が挙げられている。

管理者向けとしては、**VS Code Agents ウィンドウの利用状況メトリクスが GA**（エディタのメトリクスとは別枠で日次アクティブユーザー・セッション数・メッセージ数を取る）である。

## できるようになったこと

- Sentry のクラッシュレポートから修正 PR までを Copilot アプリ内で進める
- ローカル Dev Container 内でエージェントを走らせる
- Agent Host から PR を作る
- VS Code Agents の利用状況を管理者が別枠で見る

## 影響範囲

- 対象ユーザー: VS Code 利用者、Copilot アプリ利用者、enterprise / organization 管理者
- 対象プラン: 項目により異なる（メトリクスは Business / Enterprise、自動クリーンアップはオプトインのプレビュー）
- API / UI / 管理者機能: VS Code 拡張、Copilot アプリ、code review、メトリクス

## 教材化メモ

**「code review がシェルツールを使って検証する」が、この週次で最も踏み込んだ項目である。** レビューが**読むだけから、動かして確かめるへ変わる**ということで、**レビュー環境に実行権限が要る**という話に直結する。同じ週に Claude Code 側がサンドボックスの除外 glob の穴を塞いでいる（2.1.277）ことと合わせると、**「エージェントに実行させる」機能が増えるほど、実行境界の正しさが効いてくる**という構図が見える。

**ローカル Dev Container 対応は、実務で刺さりやすい。** エージェントの実行環境をプロジェクトの Dev Container に揃えられると、**「自分の端末では動くがエージェントでは動かない」が減る。** 再現性の話として教材化しやすい。

## 原文確認

- 公式見出し: GitHub Copilot weekly releases — September 14
- 公式URL: https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14/
- 原文全文は公式ページで確認してください。
