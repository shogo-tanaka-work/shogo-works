---
date: 2026-11-06
title: "@GitHub in Slack / Teams が GA、Teams では Canvas でのレビューに対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-11-06-github-copilot-in-slack-and-teams-is-generally-available
fetched_at: 2026-11-09T09:40:00+09:00
published_at: 2026-11-06T20:31:08Z
date_precision: timestamp
category: release
---

# 2026-11-06 @GitHub in Slack / Teams が GA

## 公式内容の日本語要約

Slack と Microsoft Teams の `@GitHub` が一般提供になった。会話の流れのまま、バグの調査、Issue の作成、変更の実装、PR の作成までを依頼できる。

Teams では Canvas が使え、計画・コード変更・プレビューを会話の横に並べてレビューできる。オンボーディングは簡素化され、**どのリポジトリが対象かをメッセージから判定する**ため、都度の指定が要らない。この経路で作られた Issue と PR には、発端となった会話への言及が残る。フォローアップの返信が無応答になりうる不具合も修正された。

## できるようになったこと

- チャットから Issue / PR を作り、実装まで依頼できる（GA のため本番運用の対象になる）
- Teams の Canvas で計画と差分を会話と並べて確認できる
- 作成物から元の会話をたどれる

## 影響範囲

- 対象ユーザー: Slack / Teams を主要な連絡手段にしている開発組織
- 対象プラン: 公式記載は GA の事実のみ。プラン別の記載なし
- API / UI / 管理者機能: チャットツール側のアプリ導入が前提。**チャットから本番リポジトリへ変更を加えられる経路**が GA になるため、導入可否は情シス・セキュリティの判断対象になる

## 教材化メモ

- **「リポジトリをメッセージから判定する」は便利さと取り違えの両方を生む。** 会話の文脈から対象を推測する設計なので、**複数リポジトリの話題が混ざるチャンネルでは意図しないリポジトリへ向く余地がある。** 便利機能として紹介するのではなく、「どこに向いたかを作成物側で必ず確認する」運用とセットで教えるべき箇所。
- **チャットは権限管理の盲点になりやすい。** GitHub 側の権限はアカウントに紐づくが、**チャンネルには普段リポジトリに触らない人も居る。** 誰の権限で実行されるのかを確認させる題材になる。
- 作成物に会話への言及が残る点は、**監査の導線として価値がある**（なぜこの PR が作られたかが追える）。一方で、社外を含むチャンネルの会話が GitHub 側に残ることでもあるため、情報の置き場所として意識させる。

## 原文確認

- 公式見出し: "@GitHub in Slack and Teams is generally available and more"
- 公式URL: https://github.blog/changelog/2026-11-06-github-copilot-in-slack-and-teams-is-generally-available
- 原文全文は公式ページで確認してください。
