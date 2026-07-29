---
date: 2026-07-28
title: "Grok 4.5 が GitHub Copilot で利用可能に"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-28-grok-4-5-is-now-available-in-github-copilot
fetched_at: 2026-07-29T08:55:00+09:00
published_at: 2026-07-28
date_precision: date-only
category: enhancement
---

# 2026-07-28 Grok 4.5 が GitHub Copilot で利用可能に

## 公式内容の日本語要約

xAI（SpaceXAI）の推論モデル `Grok 4.5` が GitHub Copilot のモデル選択肢に追加された。Grok 4.5 自体は 2026-07-16 に xAI が発表したモデルで、今回は Copilot 側での提供開始にあたる。

- 位置づけ: 高速なエージェント的コーディングと、複雑なマルチステップワークフロー向けに設計された xAI の最新推論モデル
- コンテキストウィンドウ: 最大 50 万トークン
- 入力: テキストと画像
- 推論努力レベル: low / medium / high を設定可能
- 対象プラン: Copilot Pro、Pro+、Max、Business、Enterprise
- 対象クライアント: Visual Studio Code、Visual Studio、Copilot CLI、GitHub Copilot cloud agent、GitHub Copilot app、JetBrains、Xcode、Eclipse
- 管理者操作: Copilot Enterprise / Business の管理者は、Copilot 設定で Grok 4.5 ポリシーを有効化する必要がある。**このポリシーはデフォルトでオフ**

## できるようになったこと

- Copilot の各クライアントでモデルとして Grok 4.5 を選択できる
- 50万トークンのコンテキストで大規模リポジトリ／長い作業文脈を扱える
- 推論努力レベルを切り替えて速度と精度のバランスを調整できる

## 影響範囲

- 対象ユーザー: Copilot Pro / Pro+ / Max / Business / Enterprise の利用者
- 対象プラン: 上記5プラン
- API / UI / 管理者機能: Copilot のモデルピッカー、Copilot 設定のモデルポリシー（Business / Enterprise 管理者）

## 教材化メモ

- GitHub Copilot 教材の「利用可能モデル」節は、Claude Opus 5（2026-07-24）、Gemini 3.6 Flash（2026-07-21）に続く追加であり、モデル一覧の更新頻度が高い。個別モデル名の列挙より「モデルは管理者ポリシーで制御される」という構造の説明を主にした方が陳腐化しにくい。
- 「新モデルはデフォルトでオフ」という運用パターンは、企業導入の教材で繰り返し使える論点。

## 原文確認

- 公式見出し: Grok 4.5 is now available in GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-07-28-grok-4-5-is-now-available-in-github-copilot
- モデル元発表: https://x.ai/news/grok-4-5
- 原文全文は公式ページで確認してください。
