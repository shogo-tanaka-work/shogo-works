---
title: "Claude Opus 4.8：コード欠陥1/4・Fast mode3倍安価・dynamic workflows"
tool: "claude"
toolLabel: "Claude"
date: 2026-05-28
sourceUrl: "https://www.anthropic.com/news/claude-opus-4-8"
description: "Claude Opus 4.8はコード欠陥見逃しを4分の1に削減し、Fast modeが前世代比3倍安価・2.5倍速に。dynamic workflows・Effort Control・Messages APIのシステムエントリ拡張も同時発表。モデル切替やFast mode移行の判断材料を整理します。"
summary: "Anthropic は 2026-05-28 に Claude **Opus 4.8** を公開した。前世代 Opus 4.7 との差分は **コーディング・エージェント能力・推論・実務知識作業の全面向上** に加え、**誠実性（honesty）面の強化** が中心で、公式は「不確実性をフラグ立てし、根拠のない主張を避ける傾向が強まり、コード欠陥を見過ごす確率が 4 分の 1 に低減」と説明している。ベンチマークでは **Terminal-Bench 2.1 で首位**、**法務エージェント評価で業界初の 10% 超**、**OSWorld-Verified 82.3%** を記録。料金は **入力 $5 / 出力 $25 / 100 万トークンと 4.7 同等**で、**Fast mode は入力 $10 / 出力 $50 / 100 万トークン**となり、前世代比 **3 倍安価 + 2.5 倍速**。同時に **Claude Code の dynamic workflows**（数十〜数百のサブエージェントを並列オーケストレート、Enterprise/Team/Max）、**Effort Control**（claude.ai / Cowork で品質と速度のトレードオフをユーザー選択、全プラン）、**Messages API のシステムエントリ拡張**（メッセージ配列内にシステムエントリを置けるようになり、プロンプトキャッシュ維持のままタスク途中で指示更新が可能）も発表された。API モデル識別子は `claude-opus-4-8`、Claude API / Amazon Bedrock / Google Vertex AI / Microsoft Foundry で即時利用可能。同日 **GitHub Copilot Pro+ / Business / Enterprise でも GA**（別記事）。"
impact: "**Opus 4.7 → 4.8 の差分** は単なる性能向上ではなく、4.7 までで指摘されていた「不確実性を明示しない」「コード欠陥を見過ごす」という具体的な弱点に対して **コード欠陥見逃し 1/4** という定量的な改善が公式に提示された点が大きい。組織で Claude を運用しているチームは、**社内ガイドのモデル既定を Opus 4.8 に切り替える** 判断材料が揃った。**Fast mode の 3 倍安価 + 2.5 倍速** は実務インパクトが大きく、これまで「Fast mode は速いがコストが理由で使いにくい」だった反復ワークフロー（PR レビュー、コード生成、長尺会話）に Fast を入れる判断が現実的になる。**Messages API のシステムエントリ拡張** はプロンプトキャッシュを切らずにシステム指示を差し替えられるため、エージェント実装の **「途中で振る舞いを変える」** パターンが書きやすくなる。**dynamic workflows / Effort Control** は同じ日に発表された連動機能で、Opus 4.8 と組み合わせることで「`/effort xhigh` で `/workflows` を回す」運用が成立する。Claude Code 上での dynamic workflows は別記事で詳細を扱う。**Opus 4.6 の Fast mode override（`CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE`）は 2026-06-01 に削除予告** が出ているため、4.6 Fast を使い続けている組織は `/model claude-opus-4-6[1m]` + `/fast on` への移行手順を週内に整理する必要がある。"
tags: ["claude", "opus-4-8", "model-release", "fast-mode", "messages-api", "claude-code", "dynamic-workflows", "effort-control", "pricing"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude/models"
  - "/knowledge/ai-tools/claude/pricing"
draft: false
---

## 要約

Anthropic は 2026 年 5 月 28 日に Claude **Opus 4.8** を公開しました。前世代 Opus 4.7 との差分は、コーディング・エージェント能力・推論・実務知識作業の全面向上に加え、**誠実性（honesty）面の強化** が中心です。公式は「不確実性をフラグ立てし、根拠のない主張を避ける傾向が強まり、**コード欠陥を見過ごす確率が 4 分の 1 に低減** した」と明示しています。

### ベンチマーク

- **Terminal-Bench 2.1**: 競合モデルを上回り首位
- **法務エージェント評価**: 業界初の 10% 超
- **OSWorld-Verified**: 82.3%

### 料金体系

- **通常**: 入力 $5 / 100 万トークン、出力 $25 / 100 万トークン（**4.7 と同一**）
- **Fast Mode**: 入力 $10 / 100 万トークン、出力 $50 / 100 万トークン（**前世代比 3 倍安価 + 2.5 倍速**）

### 同時発表された連動機能

- **Claude Code の dynamic workflows**: 数十〜数百のサブエージェントを並列オーケストレート（Enterprise / Team / Max、API / Bedrock / Vertex / Foundry）
- **Effort Control**: claude.ai / Cowork で応答品質と速度のトレードオフをユーザー選択（全プラン）
- **Messages API のシステムエントリ拡張**: メッセージ配列内にシステムエントリを置けるようになり、プロンプトキャッシュを切らずにタスク途中で指示更新が可能

### 提供形態

- API モデル識別子: **`claude-opus-4-8`**
- 即時利用可能: **Claude API、Amazon Bedrock、Google Vertex AI、Microsoft Foundry**
- 同日 **GitHub Copilot Pro+ / Business / Enterprise でも GA**（別記事）

## 何が変わったか

- Claude Opus 4.8 が公開（API 識別子 `claude-opus-4-8`）。
- コーディング・エージェント能力・推論・実務知識作業の全面向上。
- **誠実性の強化**: 不確実性のフラグ立て、根拠のない主張回避、コード欠陥見逃し確率を 4 分の 1 に。
- Terminal-Bench 2.1 首位、法務エージェント評価 10% 超、OSWorld-Verified 82.3%。
- 料金は 4.7 同等（入力 $5 / 出力 $25 / 100 万トークン）、Fast mode は前世代比 3 倍安価 + 2.5 倍速（$10 / $50）。
- Claude Code の **dynamic workflows**（`/workflows`、Max / Team / Enterprise）を同時発表。
- claude.ai / Cowork で **Effort Control**（全プラン）。
- Messages API でシステムエントリを配列内に置けるように → プロンプトキャッシュ維持のまま途中指示更新。
- Claude API / Bedrock / Vertex / Foundry で即時利用可能。
- GitHub Copilot Pro+ / Business / Enterprise でも GA。

## 業務インパクト（一般企業向け）

組織で Claude を使っているチームは、社内ガイドの **既定モデル** を Opus 4.7 から 4.8 に切り替える判断材料がそろいました。「誠実性の改善」は社内コード品質ガイドにとって意味が大きく、コードレビュー / PR 自動化のフローに Opus 4.8 を入れることでレビュー漏れの抑制効果が期待できます。

**Fast Mode の 3 倍安価 + 2.5 倍速** は、これまで「Fast は速いがコストでフルには使えない」と運用していた反復ワークフロー（PR レビュー、テスト書き、ドキュメント生成、長尺会話）に Fast を入れる判断を現実的にします。コスト試算をやり直す価値があります。

**Messages API のシステムエントリ拡張** は、エージェント実装にとって重要な変化です。これまで「途中で指示を差し替えるとプロンプトキャッシュが切れる」のがネックでしたが、配列内に system エントリを置けるため、長時間タスクの中でロールやガードレールを切り替えるパターンが書きやすくなります。

**dynamic workflows** は別記事で扱いますが、本記事の文脈で押さえるべきは「Opus 4.8 と `/effort xhigh` を組み合わせて `/workflows` を回す」という運用パターンが現実的になった点です。Enterprise / Team / Max の管理者は、有効化判断とトークン消費の見積もりを並行で進める必要があります。

**Opus 4.6 の Fast mode override** (`CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE`) は **2026-06-01 に削除予告** が出ています。4.6 Fast を業務で使い続けているチームは、`/model claude-opus-4-6[1m]` + `/fast on` への移行手順を週内に整理しないと事故ります。

## 副業・個人活用視点

個人開発で最も効くのは **Fast mode のコストダウン**です。これまで「Fast は予算的にメインにできない」だった人も、3 倍安価なら通常運用に組み込めます。コード生成・レビュー・長文ドラフトのループを Fast に寄せると、月額のコスパが体感で変わります。

**誠実性の改善** は副業のクライアント案件で効きます。「Claude が断言した内容を事実確認したら違っていた」という事故が減るため、リサーチ系・ドキュメント系の案件で **Opus 4.8 を指名する** 営業ポジションが取れます。

**Messages API のシステムエントリ拡張** は、自作エージェントを売りにしている人にとって設計の自由度が広がるアップデートです。「途中でロールを変えるエージェント」「ユーザーの状態に応じてガードレールを切り替えるエージェント」を書きやすくなります。

**Effort Control** は claude.ai / Cowork で全プラン対応のため、無料ユーザーも含めて応答速度と品質のトレードオフを使い分けられます。「軽く下書き → Smarter で仕上げ」の流れを実務化できます。
