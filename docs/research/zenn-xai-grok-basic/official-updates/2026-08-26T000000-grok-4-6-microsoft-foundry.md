---
date: 2026-08-26
title: "Grok 4.6 が Microsoft Foundry で利用可能に"
service: "xAI / Grok"
source: https://x.ai/news/grok-4-6-microsoft-foundry
fetched_at: 2026-08-31T09:50:00+09:00
published_at: 2026-08-26T00:00:00Z
date_precision: date-only
category: rollout
---

# 2026-08-26 Grok 4.6 が Microsoft Foundry で利用可能に

## 公式内容の日本語要約

**Grok 4.6 が Microsoft Foundry で利用可能**になった。公式は「フラッグシップモデルで、長時間動作するエージェントと野心的な対話・視覚的作業のために作られた」と説明する。**500K のコンテキストウィンドウ**と、**low / medium / high / xhigh の4段階で設定可能な reasoning effort** を持つ。

コーディングエージェント、エンジニアリング copilot、リサーチアシスタント、企業向け自動化を作る場合は Foundry のモデルカタログから開始できる。

**8月に入ってからの配信先拡大は連続している**（本メモの窓外分を含む）。GitHub Copilot（08-14）、Amazon Bedrock（08-19）、Gemini Enterprise Agent Platform / Model Garden（08-21）、そして Microsoft Foundry（08-26）である。**主要クラウドの3社（AWS / Google / Microsoft）すべてに Grok 4.6 が載った**ことになる。

## できるようになったこと

- Microsoft Foundry のモデルカタログから Grok 4.6 をデプロイできる

## 影響範囲

- 対象ユーザー: Microsoft Foundry で AI アプリケーションを構築する開発者・企業
- 対象プラン: Foundry のモデルカタログ利用者
- API / UI / 管理者機能: モデルカタログ

## 教材化メモ

- **「どのモデルがどのクラウドで動くか」はもはや差別化要因になっていない**。8月だけで Grok 4.6 が AWS / Google / Microsoft の3社に載った。モデル選定の教材で「クラウドに縛られてモデルが選べない」という前提を使っていたら、更新が必要である。**選定の軸は可用性からコスト・レイテンシ・データ所在へ移っている。**
- **reasoning effort が4段階（low / medium / high / xhigh）**という構成は、Claude / Codex と同じ方向である。「effort をどう選ぶか」はモデル横断の共通スキルとして教えられる。
- 記事化はしない（週次確認ソースの通常更新。配信先拡大のロールアウト）。

## 原文確認

- 公式見出し: Grok 4.6 on Microsoft Foundry（Aug 26, 2026）
- 公式URL: https://x.ai/news/grok-4-6-microsoft-foundry
- 一覧: https://x.ai/news
- 取得手段の注記: `x.ai` は WebFetch が HTTP 403 を返すため、Exa 経由で公式ページ本文を取得して見出し・日付・本文を確認した。
- 原文全文は公式ページで確認してください。
