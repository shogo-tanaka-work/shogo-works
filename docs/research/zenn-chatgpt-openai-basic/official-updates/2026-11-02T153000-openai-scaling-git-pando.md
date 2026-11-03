---
date: 2026-11-02
title: "Scaling Git at OpenAI（Pando）"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/scaling-git-at-openai
fetched_at: 2026-11-03T09:10:00+09:00
published_at: 2026-11-02T15:30:00Z
date_precision: timestamp
category: enhancement
---

# 2026-11-02 Scaling Git at OpenAI（Pando）

## 公式内容の日本語要約

OpenAI が自社モノレポ向けの Git バックエンド Pando を解説。Codex による並行作業の増加で、フェッチ・プッシュの遅延やマージ失敗が起き、信頼性が一時90%を下回ったため構築した。Git プロトコル互換のまま、ブランチ単位で更新を調整し並列プッシュとフェッチを両立する。本番でプッシュ遅延の中央値を約5分の1にし、1日あたり約1ペタバイトの Git データを配信している。Git 本体への upstream 貢献も継続する。製品更新ではなく社内基盤の技術解説。

## 影響範囲

- 対象: 一般利用者への直接影響なし

教材化メモ: 見送り（スコア4）のため作成しない。

## 原文確認

- 公式URL: https://openai.com/index/scaling-git-at-openai
- 取得経路: Exa（web_fetch_exa）。原文全文は公式ページで確認してください。
