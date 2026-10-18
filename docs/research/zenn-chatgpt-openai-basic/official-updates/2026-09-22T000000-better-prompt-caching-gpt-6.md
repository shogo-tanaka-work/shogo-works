---
date: 2026-09-22
title: "Better prompt caching for GPT-6 — ヒット率の既定改善、30分の再利用窓、明示ブレークポイント、プリウォーム"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/better-prompt-caching-for-gpt-6/
fetched_at: 2026-09-24T09:40:00+09:00
published_date: 2026-09-22
date_precision: date-only
category: enhancement
---

# 2026-09-22 GPT-6 世代のプロンプトキャッシュ強化

## 公式内容の日本語要約

OpenAI は GPT-6 ファミリーの公開に合わせて、プロンプトキャッシュの仕組みを一段作り直した。**既定でキャッシュヒット率が上がり、再利用可能な共通プレフィックスは30分の窓内であれば割引対象**になる。キャッシュ入力トークンの割引は最大90%。長時間動き続けるエージェントが同じ指示・ツール定義・履歴を何度も送り直す構造にそのまま効く。

運用側の道具も3つ増えた。**Prompt Caching Dashboard** はアプリケーションの入力のうちどれだけがキャッシュから供給されたかをヒット率の時系列と入力構成チャートで見せる。**prompt caching diagnostics** はキャッシュミスの理由（`tools_changed` など）と影響トークン数を `prompt_cache_diagnostics` フィールドで返す。**明示的なキャッシュブレークポイント**で、プロンプトのどのプレフィックスを再利用対象にするかを開発者が選べる。

GPT-6 系ではさらに、**レスポンス間で reasoning effort を変えてもキャッシュが壊れない**。`configuration_update` を追記する形でリクエストレベルの effort を据え置いたまま、難しいタスクでは上げ、定型的な追撃では下げられる。ツール構成が変わる場合も、定義を削除せず `allowed_tools` で呼び出し可能なツールを絞る／`tool_choice: none` にする、新しい指示は末尾の developer message で上書きする、といった「既存プレフィックスを壊さない」運用が公式ガイダンスとして示された。加えて **prewarming** により、起動時に共有指示やツール定義を先に処理しておき、ユーザーの待ち時間から処理を外せる。

GitHub Copilot は「数か月で新規処理が必要なプロンプトトークンの割合を50%以上削減した」、Manus は「明示ブレークポイントと自動キャッシュの併用でキャッシュ設計を詰めた」とコメントを寄せている。

なお本件は公開日が 2026-09-22 で、前日（2026-09-23 実行）の窓開始の直前に位置していたため取りこぼしていた。2026-09-24 の追補として記録する。2026-09-08 に記事化した Prompt Cache Diagnostics GA の続きに当たる。

## できるようになったこと

- 共通プレフィックスの再利用窓が30分。キャッシュ入力トークンは最大90%割引
- Prompt Caching Dashboard でヒット率と入力構成（キャッシュ済み / 未キャッシュ）を追跡
- 診断ツールでキャッシュミスの原因（モデル / ツール / 設定 / 入力の変化）と影響トークン数を特定
- 明示ブレークポイントでキャッシュ対象のプレフィックス範囲を指定
- GPT-6 系は reasoning effort をレスポンス間で変更してもキャッシュを維持
- prewarming で既知コンテキストを事前処理し、初回応答までの待ち時間を短縮

## 影響範囲

- 対象ユーザー: GPT-6 API 利用の開発者。改善は GPT-6 API / ChatGPT Work / Codex に及ぶ
- 対象プラン: API 利用全般（キャッシュ読み取り価格は各モデルの価格表に従う）
- API / UI / 管理者機能: ダッシュボードと診断は Platform 側の新規UI。`configuration_update`、`allowed_tools`、明示ブレークポイントは API の実装に影響

教材化メモ: src/content/ai-news-notes/chatgpt-openai/gpt-6-prompt-caching.mdx

## 原文確認

- 公式見出し: Better prompt caching for GPT-6
- 公式URL: https://openai.com/index/better-prompt-caching-for-gpt-6/
- 原文全文は公式ページで確認すること。
