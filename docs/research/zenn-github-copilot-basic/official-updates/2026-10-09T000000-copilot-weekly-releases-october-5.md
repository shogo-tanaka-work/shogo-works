---
date: 2026-10-09
title: "Copilot weekly releases（10/5 週）— ライセンスとリポジトリで別アカウント、VS Code 1.141 の agent 並列表示"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5
fetched_at: 2026-10-12T09:50:00+09:00
published_at: 2026-10-09
date_precision: date-only
category: enhancement
---

# 2026-10-09 Copilot weekly releases（10/5 週）

## 公式内容の日本語要約

10-05 の週をまとめた週次リリース告知である。個別告知と重複しない内容は次の3点である。

**Copilot app: ライセンス用とリポジトリ用で別の GitHub アカウントを使える。** 公式の例は「企業から支給されたライセンスを使いながら、リポジトリへは別アカウントでアクセスする」である。

**Copilot CLI: `/model` が稼働中のローカル Ollama インスタンスのモデルを発見する**（10-07 の個別告知と同内容）。

**VS Code 1.141: agent セッションの並列表示と worktree の掃除。** Agents ウィンドウで**複数の agent セッションをグリッドに並べて同時に見られる**ようになり、結果の比較や複数タスクの追跡ができる。チャットの **「Open worktree cleanup」** が、**非アクティブなセッションの worktree が使っているディスク容量を表示し、削除対象を選ばせる。**

このほか、Claude Haiku 5.5 の提供と local sandboxing の GA が再掲されている（いずれも個別告知済み）。関連リンクとして 10-02 の「Copilot code review の API 対応と既定 effort 変更」「選択モデルの廃止」が並ぶが、**どちらも前週（2026-10-05 の週次サマリー）で記録済みである。**

**廃止・EOL の新規告知は本エントリに含まれない。**

## できるようになったこと

- Copilot app でライセンスとリポジトリに別アカウントを使える
- VS Code 1.141 で agent セッションを並列表示できる
- 非アクティブ worktree のディスク使用量を見て掃除できる

## 影響範囲

- 対象ユーザー: Copilot app / CLI / VS Code の利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Copilot app のアカウント設定、VS Code 拡張

## 教材化メモ

- **「ライセンスとリポジトリでアカウントを分けられる」は、副業・複数案件の読者に直接効く。** 支給ライセンスで個人リポジトリを触る構成は、従来は切り替えが必要だった。**アカウント境界が課金とアクセスで別に引けるようになった**という整理で教えられる。
- **worktree のディスク容量表示は、「エージェントが作った作業ツリーが溜まる」という新しい運用コストが製品側に認知された証拠である。** 同じ週に Codex 0.162.0 が managed Git worktree ツールを入れており、**エージェントが worktree を量産する前提で、掃除の仕組みが後から要る**という構図が2ベンダーで同期している。
- agent セッションの並列表示は、**複数エージェントを同時に回す運用が既定の作業形態になりつつある**ことを示す UI 変化である。

## 原文確認

- 公式見出し: GitHub Copilot weekly releases — October 5
- 公式URL: https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5
- 原文全文は公式ページで確認してください。
