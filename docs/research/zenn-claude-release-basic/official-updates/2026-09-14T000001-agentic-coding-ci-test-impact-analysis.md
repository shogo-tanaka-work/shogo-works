---
date: 2026-09-14
title: "Anthropic、エージェントコーディングで CI ジョブが半年で25倍になった経緯と test impact analysis の再設計を公開"
service: "Claude Code / Claude Enterprise"
source: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
fetched_at: 2026-09-15T09:05:00+09:00
published_at: 2026-09-14T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-14 Anthropic の CI スケーリング（test impact analysis の再設計）

## 公式内容の日本語要約

Anthropic は 2026-09-14、社内の **test impact analysis（テスト選択）サービスを再設計した経緯**を公開した。著者は Sachin Malhotra。**バージョンリリースではなく、エンジニアリング実践の公開である。**

前提として示された数字が大きい。**Anthropic のエンジニアは 2021〜2025 年比で四半期あたり8倍のコードを出荷しており、そのうち80%を Claude が書いている。** PR のレビューと承認にも Claude が大きく関与する。**テスト総数は10倍に増え、結果として CI ジョブは半年で25倍**になった。公式の言い方では「コードを書くことはもうボトルネックではなく、PR レビューが速くなると次に CI が圧迫される」。

同社のテスト選択サービスは2つの決定論的なコンポーネントで構成される。**listener が全 CI 実行のテスト結果を記録し、selector がその履歴と依存関係から「どの PR でどのテストを走らせるか」を決める。** 毎秒複数の CI ジョブが走る状況では listener が PR キューに追いつかなくなり、**20分の遅延が数万件のテスト更新の未反映につながる。** 単一プロセス構成（テストごとの履歴を1つの writer が書く設計）のため水平分割ができなかった。

対処は3度の応急処置とその失敗である。**(1) コア数を倍にする → 70日もった。(2) パッケージ単位のシャーディング → 29日もった。(3) 日次再起動 → 1日もたなかった。** 最終的に、**listener をステートレス化して in-memory データストアへジャーナル追記する形へ再設計**し、別プロセスが数秒ごとにテスト単位の履歴へ畳み込む構成にした。分散構成は運用コストが上がるが、水平スケールとメモリプロファイリングが容易になる。

**記事の結論は「指数関数を前提に設計せよ」である。** 個々のスケーリング手法（大きいマシン、並列化、再起動）は一般的なもので、そこが要点ではない。**要点は、同じ手法で買える時間が1年前の数分の一になっている一方、サービス全体の作り直しに必要な時間も数分の一になっている**という非対称性である。公式は「2四半期後に25倍の負荷が来ると仮定し、初期設計では体感スケールの10〜20倍を見込め」と書いている。

なお、**パッチ2の期間中に、著者は社内版 Claude Tag で監視用の長時間セッションを走らせていた。** listener の遅延が5万ジョブを超えると Claude が通知して会話を再開する運用で、文脈を毎回説明し直さずに済んだと述べている。

## できるようになったこと

- （製品機能の追加ではない）**エージェント前提の SDLC で CI がどう壊れるか**について、実測値付きの一次情報が参照できるようになった

## 影響範囲

- 対象ユーザー: エージェントコーディングを本格導入している開発組織、CI / プラットフォームチーム
- 対象プラン: 該当なし（自社事例の公開）
- API / UI / 管理者機能: 該当なし。CI アーキテクチャの設計判断に影響する

教材化メモ: src/content/ai-news-notes/claude-code/scaling-test-impact-analysis.mdx

## 原文確認

- 公式見出し: Agentic coding is straining CI. Here's how we scaled test impact analysis at Anthropic
- 公式URL: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
- 原文全文は公式ページで確認してください。
