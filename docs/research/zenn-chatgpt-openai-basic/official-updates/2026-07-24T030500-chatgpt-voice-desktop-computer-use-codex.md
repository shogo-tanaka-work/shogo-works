---
date: 2026-07-24
title: "ChatGPT Voiceがデスクトップアプリに追加 — 音声でコンピュータ操作・Codexマルチエージェント指示"
service: "ChatGPT / OpenAI"
source: https://community.openai.com/t/chatgpt-voice-is-now-in-the-desktop-app/1388031
fetched_at: 2026-07-25T12:20:00+09:00
published_at: 2026-07-24T03:05:00Z
date_precision: observed
category: enhancement
---

# 2026-07-24 ChatGPT Voice デスクトップアプリ対応

## 公式内容の日本語要約

OpenAIはChatGPT DesktopアプリケーションにChatGPT Voice（GPT-Live搭載）を追加した。ユーザーは音声だけでコンピュータを操作したり、ChatGPT WorkやCodexで動く複数のエージェントに指示できるようになった。GPT-Liveにより会話しながら（話す・聞く）同時にタスクを調整できる。macOS/Windowsでグローバルにロールアウト（Plus/Pro/Business/Edu/Enterprise対象）。Mac版ではAppshots機能により前面ウィンドウ・ローカルファイル・コードベース構造・有効なプラグインを画面コンテキストとして解析できる。バックグラウンドでは既定でGPT-5.5を使用。

## できるようになったこと

- デスクトップアプリで音声によるコンピュータ操作（Computer Use）が可能に
- ChatGPT WorkやCodexで動く複数エージェントを音声で指示・調整可能
- macOSではAppshots機能で画面コンテキスト（前面ウィンドウ・ローカルファイル・コードベース構造）を認識
- iOS版でもリモートアクセスとペアリングしてCodexでのVoice利用が可能（Android対応は今後）

## 影響範囲

- 対象ユーザー: ChatGPT Plus / Pro / Business / Edu / Enterprise（デスクトップアプリ利用者）
- 対象プラン: 上記プラン、macOS/Windows対応
- API / UI / 管理者機能: デスクトップアプリのUI機能。段階的ロールアウトのためアカウントによって反映が1日以上遅れる場合がある

## 教材化メモ

- 「音声でエージェントを指揮する」というUXは、コーディング作業のハンズフリー化事例として実務者向け教材の切り口になる。
- Claude CodeやGitHub Copilotとの比較文脈で、音声インターフェースの実務適用範囲を議論する題材に使える。

## 原文確認

- 公式見出し: ChatGPT Voice is now in the desktop app
- 公式URL: https://community.openai.com/t/chatgpt-voice-is-now-in-the-desktop-app/1388031（OpenAI公式コミュニティ、OpenAIチーム投稿）
- 補足: OpenAI公式X（@OpenAI）投稿でも同内容を告知（https://x.com/OpenAI/status/2080378182469857576 、投稿表示は「2026-07-23」だが、コミュニティ投稿のタイムスタンプ「2026-07-23 20:05（推定太平洋時間）」を協定世界時に換算すると2026-07-24T03:05Z前後となり窓開始（2026-07-24T01:02:21Z）以降と判断）。`help.openai.com`本体・`openai.com/index/`個別ポストは直接フェッチが403のため、コミュニティ投稿と複数の二次報道（TechCrunch、9to5Mac、Fortune）でクロスチェックした。
- 原文全文は公式ページで確認してください。
