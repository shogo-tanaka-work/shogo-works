---
date: 2026-10-23
title: "Teams の GitHub アプリが通知と Copilot を統合（旧アプリは 2026-11-16 退役）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-23-turn-notifications-into-code-with-github-copilot-in-teams
fetched_at: 2026-10-26T09:40:00+09:00
published_at: 2026-10-23
date_precision: date-only
category: incident
---

# 2026-10-23 Teams の GitHub アプリ統合と旧アプリの退役（2026-11-16）

## 公式内容の日本語要約

**Microsoft Teams の GitHub アプリが、通知と Copilot を1つにまとめた。** 従来「GitHub notifications」と呼ばれていたアプリが統合版になり、チャネル・グループチャット・個人チャットで GitHub の通知を受け取り、そのまま `@GitHub` をメンションして対応できる。公式の例では、Teams に届いた不具合報告に対して `@GitHub` が調査し、修正し、チームがレビュー・テスト・マージするための pull request を開く。既存の通知機能は引き続き動く。

**旧アプリ（legacy app）は「GitHub (deprecated)」へ改名され、2026-11-16 に退役する。** 旧アプリを使っている場合は統合版へ切り替える必要がある。

必要な手順は、Teams で統合版 GitHub アプリをインストールまたは更新し、旧アプリ利用者は統合版へ移行し、Teams で `@GitHub` をメンションして GitHub アカウント接続とリポジトリ選択を行うこと。対象プラン・価格・利用条件の記載はなく、管理者設定の記述もない。

## できるようになったこと

- Teams の1つのアプリで GitHub 通知の受信と `@GitHub` へのタスク依頼（調査・修正・PR 作成）ができる
- チャネル / グループチャット / 個人チャットで利用できる

## 影響範囲

- 対象ユーザー: Microsoft Teams で GitHub 通知または `@GitHub` を使う利用者
- 対象プラン: 明記なし
- API / UI / 管理者機能: Teams 連携（UI）。旧アプリの退役は 2026-11-16

## 教材化メモ

- **期限付きの退役告知である（2026-11-16、本記録時点で残21日）。** 通知アプリという「入れたら忘れる」類の連携が対象なので、退役に気付かないまま通知が止まる組織が出やすい。**Teams / Slack 連携の棚卸しを促す具体的なトリガーとして使える。**
- 前週の GitHub Copilot 告知（Slack / Teams の `@GitHub` が複数リポジトリ対応）と合わせると、**チャットツールを開発作業の入口にする方向が2週連続で進んでいる。** 通知アプリと作業アプリを統合したのは、その流れの帰結と読める。
- 管理者設定の記述が無い一方で、**チャットから PR が作られる経路が増える。** どのチャネルでアプリを使わせるか、誰の GitHub アカウントに紐づくかは、告知に書かれていなくても組織側で決める必要がある論点である。

## 原文確認

- 公式見出し: Turn notifications into code with GitHub Copilot in Teams
- 公式URL: https://github.blog/changelog/2026-10-23-turn-notifications-into-code-with-github-copilot-in-teams
- 原文全文は公式ページで確認してください。
