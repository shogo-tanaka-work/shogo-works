---
date: 2026-09-25
title: "GitHub Copilot 週次リリース（9月21日ぶん）。4モデルのプラン境界、VS Code 1.139 のリモートエージェント実行"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: release
---

# 2026-09-25 Copilot 週次リリース（9月21日ぶん）

## 公式内容の日本語要約

GitHub Copilot の週次リリースまとめ。今週の個別告知を横断して整理したもので、**プラン境界がここで初めて明示されている。**

**モデル（4件）** — **Claude Opus 5.5 と GPT-6 Sol は Pro+ 以上、GPT-6 Luna と Grok 4.7 は Pro 以上。**

**Copilot app** — ローカルサンドボックス（public preview、エージェントのファイル・ネットワーク・資格情報へのアクセスを制限）、OpenTelemetry 連携（enterprise settings から設定）。いずれも個別告知あり。

**Slack / Teams** — 会話途中のモデル切替とスレッド維持、重複 issue の事前検出、ファイル共有と文脈の強化。

**JetBrains** — assisted approvals（public preview、低リスク操作の自動承認）、メッセージ編集による会話とファイル変更の巻き戻し、組織・エンタープライズのスキルがローカル / エージェント両セッションで動作。

**VS Code 1.139** — **リモートエージェント実行に対応（Dev Containers / SSH / Tunnel / WSL）。** セッション管理の改善（コンパクト表示、絞り込み、リネーム）。チャットレイアウトの選択（別タブ / 単一ビュー）。

## できるようになったこと

- 4モデルの提供プランが明示（Opus 5.5 / GPT-6 Sol は Pro+ 以上、GPT-6 Luna / Grok 4.7 は Pro 以上）
- VS Code 1.139 で Dev Containers / SSH / Tunnel / WSL 上のリモートエージェント実行

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者全般
- 対象プラン: モデルごとに Pro 以上 / Pro+ 以上で分岐
- API / UI / 管理者機能: enterprise-managed settings が監視（OpenTelemetry）とセキュリティ設定を各連携へ横断適用

## 教材化メモ

- **週次まとめだけがプラン境界を書いている**という構造が実務上重要である。個別のモデル追加告知には提供プランが書かれていないことがある。**「使えるか」を確認するには週次まとめ側を見る**、というソースの使い分けとして教えられる。
- **VS Code のリモートエージェント実行（Dev Containers / SSH / Tunnel / WSL）**は、エージェントの実行環境が開発者のローカルから離れていく流れの一部。**同週の Claude Code cloud sessions GA、Codex の background server 自動起動と同じ方向**であり、横に並べると業界の動きとして説明しやすい。

## 原文確認

- 公式見出し: GitHub Copilot weekly releases — September 21
- 公式URL: https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21
- 原文全文は公式ページで確認してください。
