---
title: "Claude Opus 5発表：Fable 5に迫る性能を半額で、Effort設定でコストと知性を調整"
tool: "claude"
toolLabel: "Claude"
date: 2026-07-24
sourceUrl: "https://www.anthropic.com/news/claude-opus-5"
summary: "Anthropicが新フラッグシップモデル「Claude Opus 5」を発表した。Fable 5のフロンティア級知能に迫りながら価格は半分と位置付けられ、価格はOpus 4.8と同じ入力$5/出力$25（百万トークン）を維持。ソフトウェアエンジニアリング・未知の問題解決・業務自動化・ライフサイエンス・可視化生成でベンチマーク上位を記録。Claude.ai、Claude Code、Claude Cowork、Claude APIで即日利用可能。"
description: "Frontier-Bench・CursorBenchで最高水準、ARC-AGI 3で競合の3倍スコア、Zapier AutomationBenchで1.5倍のパス率。Effort設定（低/中/高）で知性とコストを調整可能。API識別子はclaude-opus-5。"
impact: "既存Opus利用者にとって、性能向上とコスト据え置きの組み合わせはモデル切り替えの判断材料になる。GitHub Copilotなど主要開発者プラットフォームにも即日展開。"
tags: ["claude", "opus-5", "model-release", "pricing", "release"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude/overview"
draft: false
---

## 要約

Anthropicが新しいフラッグシップモデル「**Claude Opus 5**」を発表しました。公式は「Fable 5のフロンティア級知能に迫りながら価格は半分」と位置付けています。価格はOpus 4.8と同じ入力$5／出力$25（百万トークンあたり）を維持し、Fast modeは基本価格の2倍で約2.5倍高速に処理できます。Claude.ai、Claude Code、Claude Cowork、Claude API（モデルID`claude-opus-5`）で即日利用可能です。

ベンチマークでは、ソフトウェアエンジニアリング領域のFrontier-Bench・CursorBenchで最高水準の性能を記録し、未知の問題解決を測るARC-AGI 3では競合モデルの3倍のスコアを達成しています。業務自動化を測るZapier AutomationBenchでは他モデル比1.5倍のパス率、ライフサイエンス領域では有機化学・タンパク質関連研究タスクの性能が向上し、技術図解・インタラクティブなイラスト生成能力も強化されました。Effort設定（低・中・高）で知性とコストのバランスを調整できる点、そしてAnthropicが「最もアラインされたOpusモデル」「誤用に対して最も耐性がある」と説明している点も特徴です。

同日、Claude Codeがv2.1.219でOpus 5を新しいデフォルトOpusモデルとして即座に統合したほか、GitHub Copilotでも同日中に利用可能になるなど、主要開発者プラットフォームへの展開スピードも速いのが今回の特徴です。

## 何が変わったか

- Claude Opus 5をClaude.ai（Max/Pro）、Claude Code、Claude Cowork、Claude APIで即日提供開始
- 価格はOpus 4.8と同じ入力$5／出力$25（百万トークン）、Fast modeは基本価格の2倍で約2.5倍高速
- Frontier-Bench・CursorBenchで最高水準、ARC-AGI 3で競合の3倍スコア、Zapier AutomationBenchで1.5倍のパス率
- Effort設定（低/中/高）で知性とコストのバランスを調整可能
- API識別子は`claude-opus-5`。GitHub Copilotなど主要開発者プラットフォームにも同日展開

## 業務インパクト（一般企業向け）

Opus 4.8からの性能向上を、価格据え置きのまま得られる点は、既存Opusユーザーにとって移行コストの低いアップグレードです。特にソフトウェアエンジニアリングと業務自動化のベンチマーク向上は、コード生成・レビューやZapierのようなノーコード自動化ツールとの連携タスクを本格運用している組織にとって、直接的な生産性向上につながります。Effort設定による知性とコストの調整は、タスクの重要度に応じてコストを最適化する運用ルールを整備する際の実装手段として活用できます。

社内のモデル既定をOpus 5に切り替える際は、Claude Code側の大型アップデート（v2.1.219、sandbox・フック・subagent機能拡張）も同時に発表されているため、あわせて確認しておくと移行の全体像を把握しやすくなります。

## 副業・個人活用視点

フリーランス・個人開発者にとって、価格を据え置いたまま性能が向上したOpus 5は、コストを増やさずに複雑なタスクの精度を上げられる好機です。特にARC-AGI 3（未知の問題解決）やZapier連携タスクでの性能向上は、定型作業を超えた案件（新規性の高い調査・分析、複数ツールを組み合わせた自動化構築）を受注する際の武器になります。Effort設定を使い分けることで、下書き段階は低Effortで素早く、最終成果物は高Effortで丁寧に、といったコスト管理もしやすくなります。
