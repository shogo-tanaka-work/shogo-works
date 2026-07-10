---
date: 2026-07-02
title: "Copilotエージェントセッションのストリーミングがパブリックプレビュー"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-02-copilot-agent-session-streaming-is-now-in-public-preview
fetched_at: 2026-07-05T16:43:00+09:00
published_at: 2026-07-02
date_precision: date-only
category: rollout
---

# 2026-07-02 Copilotエージェントセッションのストリーミングがパブリックプレビュー

## 公式内容の日本語要約

GitHub Enterprise Cloud（EMU）顧客向けに、Copilotのエージェントセッションデータ（プロンプト・応答・ツール呼び出し）をストリーミングエンドポイントまたはREST API経由で取得できる機能がパブリックプレビューとして提供開始された。CLI・VS Code・Visual Studio・パートナーIDEを含む全クライアントのセッションが対象となる。

## できるようになったこと

- Copilotのエージェントセッションデータ（プロンプト・応答・ツール呼び出し）をストリーミングエンドポイントで取得
- `GET /enterprises/{enterprise}/copilot/usage-records` で直近48時間分をオンデマンド取得
- SIEMツールやMicrosoft Purviewとの連携が可能に
- CLI・VS Code・Visual Studio・パートナーIDEなど全クライアントが対象

## 影響範囲

- 対象ユーザー: Enterprise管理者（EMU顧客）
- 対象プラン: GitHub Enterprise Cloud
- API / UI / 管理者機能: ストリーミングAPI、REST API、AI Controls配下の「Enable everywhere」設定

## 教材化メモ

- Copilot利用ログの外部SIEM連携という、企業のガバナンス・監査ニーズに応える機能。エンタープライズ管理者向け教材で「AI利用の可視化・監査」の実例として使える。

## 原文確認

- 公式見出し: "Copilot agent session streaming is now in public preview"
- 公式URL: https://github.blog/changelog/2026-07-02-copilot-agent-session-streaming-is-now-in-public-preview
- 原文全文は公式ページで確認してください。
