---
date: 2026-09-25
title: "Copilot for Slack / Microsoft Teams の更新。会話途中でのモデル切替、重複 issue の事前検出、利用は cloud agent の予算を消費"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: enhancement
---

# 2026-09-25 Copilot for Slack / Teams の更新

## 公式内容の日本語要約

Slack と Microsoft Teams 向け Copilot 連携が3方向で更新された。

**文脈の取得範囲が広がった。** Slack ではファイル・添付・メッセージリンクを、Teames ではインライン画像・転送メッセージ・チャンネル履歴を参照する。**issue 作成前に重複 issue を検出**し、作成した issue と元の会話の間に双方向リンクを張る。

**利用者側の制御が増えた。** **会話の途中でモデルを切り替えられ、その選択が維持される。** Slack では既定のリポジトリオーナーとリポジトリを指定できる。

**信頼性の修正**は Slack（実装プランの復旧、リポジトリピッカーの安定化、リポジトリ切替の安全化）、Teams（チャンネルスレッド履歴の保持、重複応答の解消、画像処理、大規模チャンネル対応）、両方（アイドル再接続、中断されたタスクの扱い、エラーメッセージの明確化）に入った。

**管理・課金面の条件が明記されている。** Slack では **Copilot cloud agent ポリシーの有効化**が、Teams では **cloud sandbox の有効化**が必要である。利用者は GitHub アカウントの紐付けが必要で、**利用は既存の Copilot Business / Enterprise の権限を消費し、組織の cloud agent 予算に計上される。**

## できるようになったこと

- 会話途中でのモデル切替（選択の維持）
- issue 作成前の重複検出と、issue と会話の双方向リンク
- Slack で既定のリポジトリオーナー / リポジトリを指定
- Slack はファイル・添付・メッセージリンク、Teams はインライン画像・転送メッセージ・チャンネル履歴を文脈に利用

## 影響範囲

- 対象ユーザー: Slack / Teams から Copilot を使う組織
- 対象プラン: Copilot Business / Copilot Enterprise の権限を消費
- API / UI / 管理者機能: Slack は Copilot cloud agent ポリシー、Teams は cloud sandbox の有効化が前提。**利用は組織の cloud agent 予算に計上される**

## 教材化メモ

- **チャットツールからの利用が cloud agent 予算を消費する**点が実務の要点。**Slack から気軽に呼べる導線ができると、予算の消費経路が「開発者のIDE」から「全社のチャンネル」へ広がる。** 導線を開ける前に予算アラートを設定しておく、という順序で教える。
- **文脈にチャンネル履歴を含める**という変更は、情報の流れとして見ると重い。**チャンネルにいる全員の発言が、issue 生成の材料になりうる。** 機微な話をするチャンネルに連携を入れるかどうかは、機能の便益とは別に判断する。

## 原文確認

- 公式見出し: Updates to GitHub Copilot for Slack and Microsoft Teams
- 公式URL: https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams
- 原文全文は公式ページで確認してください。
