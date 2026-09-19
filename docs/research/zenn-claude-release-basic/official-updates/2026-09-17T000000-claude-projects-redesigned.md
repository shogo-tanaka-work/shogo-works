---
date: 2026-09-17
title: "Claude Projects が「フォルダ」から「会話」へ再設計。Claude が並列スレッドを統括するオーケストレーターに"
service: "Claude"
source: https://claude.com/blog/projects-redesigned
fetched_at: 2026-09-18T09:02:00+09:00
published_date: 2026-09-17
date_precision: date-only
category: release
---

# 2026-09-17 Claude Projects の再設計

教材化メモ: src/content/ai-news-notes/claude/claude-projects-redesigned.mdx

## 公式内容の日本語要約

Anthropic は 2026-09-17、Claude Projects を再設計したと発表した。従来の Projects は「関連する会話とファイルをまとめておくフォルダ」だったが、新しい Projects は**会話そのものが作業の起点**になる。ユーザーが依頼を書くと、**Claude が要求を分解し、作業を委譲し、並列スレッドを調整し、出力をレビューし、最終成果物へ組み立てる**。

各スレッドは**独立した Claude Code のクラウドセッション**で、それぞれが自分のブランチとリポジトリのコピーを持つ。コーディネーター側が作業配分を決め、スレッド側が実行する。スレッド内でさらにサブエージェント・ループ・ワークフローを動かせる。

提供はベータ。**初期対象は、既存の project を持たず Claude Code のクラウドセッションを使っている一部の Claude Pro / Max 加入者**。公式は「今週のうちに Pro / Max の Claude Code ユーザーへ拡大」し、その後に **Team / Enterprise の chat と Cowork へ展開**するとしている。

**既存の project は Pro / Max では従来どおり動作する。** chat と Cowork への展開に合わせてアップグレードされる。

コーディネーターのチャットとワーカースレッドで、**モデルと effort level をそれぞれ選べる**。project 単位の使用量モニタリングも提供される。ローカル実行は "coming very soon"。

## できるようになったこと

- 1つの依頼から、Claude が複数の並列スレッドを自動で立てて実行・レビュー・統合する
- 各スレッドが独立した Claude Code クラウドセッション（専用ブランチ・リポジトリコピー）
- コーディネーターとワーカーでモデル・effort level を個別指定
- project 単位の使用量モニタリング

## 影響範囲

- 対象ユーザー: 初期は Claude Code のクラウドセッション利用者のうち project 未作成の Pro / Max 加入者
- 対象プラン: Pro / Max（ベータ）→ 1週間かけて Pro / Max の Claude Code ユーザーへ拡大 → Team / Enterprise の chat / Cowork
- API / UI / 管理者機能: UI の構造変更。**並列スレッドは使用量上限の消費を早める**点が公式に明記されている

## 原文確認

- 公式見出し: Projects redesigned: from folder to conversation
- 公式URL: https://claude.com/blog/projects-redesigned
- 原文全文は公式ページで確認してください。
