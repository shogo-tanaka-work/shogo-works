---
date: 2026-08-21
title: "ChatGPT プラグイン推薦順の見直し、ローカル時刻の考慮、長い会話の分割読み込みほか6件"
service: "ChatGPT"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
official_url: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-08-23T09:05:00+09:00
published_at: 2026-08-21
date_precision: date-only
category: enhancement
---

# 2026-08-21 ChatGPT の Web / モバイル更新

## 公式内容の日本語要約

ChatGPT Release Notes に `August 21, 2026` の見出しが追加された。6項目からなり、いずれも Web / モバイルの利用体験に関わる変更である。

**プラグイン推薦順の見直し**が実務的には最も大きい。公式は「インストール後も使われ続けているプラグインを推薦順で優先する」と説明している。導入直後の勢いやインストール数ではなく、継続利用が並び順の根拠になった。対象は Web と モバイルで、**デスクトップアプリはこの更新に含まれない**。表示されるプラグインはプラン・地域・ワークスペース設定に依存する。

**ローカル時刻の考慮**は、会話中のユーザーのローカル時刻をより正確に扱えるようになったというもの。時刻に依存する質問（「今日の」「今週中に」など）の回答精度に関わる。

Web 側では**長い会話の分割読み込み**（会話全体を一度に取得せず小分けにロード）と、**インタラクティブコンテンツの逐次表示**（生成完了を待たず生成中から表示され始める）が入った。いずれも体感速度に効く変更である。

モバイルは iOS で `+` ボタンの長押しによる直近写真へのアクセスと接続状態表示の明確化、Android で生成画像の全幅表示と直近会話8件までのサイドバー表示（バージョン 1.2026.216 以降）が入った。

なお、開発者向けの `learn.chatgpt.com/docs/changelog` 側には本日時点で 2026-08-21 のエントリが無く、最新は 2026-08-20 のままである。

## できるようになったこと

- プラグイン推薦順が「継続利用されているか」を優先（Web / モバイル。デスクトップは対象外）
- 時刻依存の質問でローカル時刻がより正確に考慮される
- Web で長い会話が分割読み込みされ、開くまでの待ち時間が短くなる
- Web でインタラクティブコンテンツが生成中から表示され始める
- iOS: `+` 長押しで直近写真を添付、接続待ち状態が明示される
- Android: 生成画像が会話幅いっぱいに表示、サイドバーに直近8件の会話

## 影響範囲

- 対象ユーザー: ChatGPT の Web / モバイル利用者全般（プラグイン推薦順はプラン・地域・ワークスペース設定に依存）
- 対象プラン: 明示なし。プラグインの表示可否はプラン依存
- API / UI / 管理者機能: UI / クライアント側の変更。API 変更は含まない

教材化メモ: src/content/ai-news-notes/chatgpt-openai/plugin-discovery-ranking-and-app-updates.mdx

## 原文確認

- 公式見出し: August 21, 2026 — Improved plugin discovery on web and mobile / More time-aware answers / Faster long conversations on the web / Interactive content appears sooner on the web / Updates to ChatGPT on iOS / Updates to ChatGPT on Android
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 原文全文は公式ページで確認してください。
