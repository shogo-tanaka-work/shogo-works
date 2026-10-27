---
date: 2026-10-22
title: "Microsoft 365 Insights Agent V2（Frontier）でエージェントのフィードバックを会話で分析"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/explore-user-feedback-with-microsoft-365-insights-agent/4565981
fetched_at: 2026-10-26T09:45:00+09:00
published_at: 2026-10-22
date_precision: date-only
category: enhancement
---

# 2026-10-22 Insights Agent V2（Frontier）のフィードバック分析

## 公式内容の日本語要約

**Microsoft 365 Insights Agent が、利用者から送られたフィードバックを Microsoft 365 Copilot Chat の会話へ持ち込めるようになった。** エージェントのオーナーが、評価（thumbs up / down）と自由記述（verbatim）について質問し、繰り返し現れるテーマを探れる。**本機能は Insights Agent V2（Frontier）の early-access プレビュー**で、既存の利用状況分析のリリースとは別物である。Frontier 機能は変更されることがあり、利用可否は組織の構成と機能の要件に依存する。

**管理者がフィードバック共有を有効化しないと、作成者はフィードバックを見られない。** Microsoft 365 admin center の **Agents > Settings > Agent feedback sharing** で、All agents / Selected agents / No agents を選ぶ。Selected agents を選んだ場合は対象エージェントを個別に選択して Save する。

利用側は、プレビューへのアクセスがあり管理者が自分の所有エージェントの共有を有効化していれば、Copilot Chat のエージェントピッカーで `Insights Agent V2 (Frontier)` を検索して Add する。自由記述の確認（`Show me recent verbatim comments for [Agent Name]`）、期間を指定した評価数（`How many thumbs up and thumbs down did [Agent Name] get this week?`）、テーマの要約（`Summarize the feedback themes for [Agent Name]`）が質問できる。Insights Agent は応答件数と対象期間を併せて返す。**公式は、テーマ要約は AI による統合であって自由記述を読む代わりにはならないと明記している。**

利用状況分析側では、週次の利用上位エージェント、週次アクティブユーザーの推移、エージェント間の比較、DAU/MAU の stickiness などを質問できる。**公式は、利用状況だけを品質やビジネス価値の指標として扱わないよう注記している。**

## できるようになったこと

- 自分が所有するエージェントの評価・自由記述・テーマ要約を Copilot Chat の会話で確認できる
- 利用状況（DAU / WAU / MAU、採用の伸び、エージェント間比較、stickiness）を質問できる

## 影響範囲

- 対象ユーザー: エージェントのオーナー・作成者（Frontier プレビュー対象かつ管理者が共有を有効化した場合）
- 対象プラン: 記載なし（Microsoft Frontier プログラムの要件に依存）
- API / UI / 管理者機能: Copilot Chat（UI）、Microsoft 365 admin center > Agents > Settings > Agent feedback sharing（管理者）

## 教材化メモ

- **管理者の有効化が前提になっている点が、この機能の設計の要である。** 利用者のフィードバックは「エージェントの作成者が自動で見られるもの」ではなく、**組織が共有を許可した範囲でだけ作成者へ渡る。** 自由記述には業務情報や個人の意見が入るため、共有範囲を admin center で絞れるようにしてある。社内でエージェントを量産する運用を始めるときに、先に決めておく設定として扱える。
- **公式自身が「テーマ要約は自由記述を読む代わりにならない」「利用状況だけを品質の指標にしない」と2か所で注記している。** ベンダーが自社機能の限界を明記している珍しい例で、**AI による要約を意思決定の根拠にするときの注意書きの書き方**としてそのまま教材に使える。
- フィードバックと利用状況を**別の信号として並べて読む**という枠組み（フィードバック＝利用者が選んで共有したもの、利用状況＝採用の広がり）は、社内AI活用の効果測定の設計に流用できる。
- 同じ週の GitHub Copilot 側（impact dashboard の業界比較、カスタムスキル／MCP の名前付き集計）と合わせると、**2大ベンダーが同時期に「エージェントの採用度と効果をどう測るか」を製品機能として出してきている。** 週次でまとめて見ることで初めて見える並行性である。

## 原文確認

- 公式見出し: Explore user feedback with Microsoft 365 Insights Agent
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/explore-user-feedback-with-microsoft-365-insights-agent/4565981
- 原文全文は公式ページで確認してください。
