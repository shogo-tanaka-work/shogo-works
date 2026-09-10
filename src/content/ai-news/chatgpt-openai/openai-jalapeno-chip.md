---
title: "OpenAI、Broadcom と共同開発した初のカスタム AI 推論チップ「Jalapeño」を発表"
tool: "chatgpt-openai"
toolLabel: "ChatGPT / OpenAI"
date: 2026-06-24
sourceUrl: "https://openai.com/index/openai-broadcom-jalapeno-inference-chip/"
summary: "OpenAI が Broadcom と共同開発した初の独自 AI 推論チップ「Jalapeño」を発表。LLM 推論専用 ASIC で、テープアウトまでの開発期間はわずか 9 ヶ月。Microsoft が初期生産の約 40% を購入予定。2026年末から展開開始。"
description: "9ヶ月の設計スピードで仕上げた LLM 推論専用チップ。ボード・ラック統合は Celestica が担当し、ギガワットスケールのデータセンターを想定。OpenAI 自身の AI モデルを設計プロセスに活用した。"
impact: "NVIDIA GPU 依存からの脱却に向けた大きな一歩。インフラを自社設計することで長期的な推論コスト低減とキャパシティ確保が狙い。エンドユーザーへの影響は 2026年末以降の展開次第だが、AI サービスの価格競争力に影響する。"
tags: ["openai", "chip", "hardware", "inference", "broadcom"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## アップデート概要

OpenAI が 2026-06-24、Broadcom と共同開発した初の独自 AI チップ「Jalapeño」を発表した。LLM の推論（Inference）処理に特化した ASIC（特定用途向け集積回路）で、開発着手からテープアウトまでわずか 9 ヶ月という高速設計を実現した。ボード・ラック・システム統合は Celestica が担当。Microsoft が初期生産の約 40% を購入する見込みで、2026年末の展開開始を目指す。

## 主な内容

### OpenAI 初の「自社設計チップ」

これまで OpenAI は NVIDIA の GPU に強く依存してきた。Jalapeño はその依存を段階的に減らす「フルスタック自社設計」戦略の核となるチップだ。

OpenAI President の Greg Brockman は「スタックをより多く自社設計することで、より効率的に多くの知能を提供し、AI の広範なアクセスへの推進を続けられる」とコメントしている。

### 9 ヶ月の高速設計 — AI で AI チップを作った

テープアウトまでの設計期間はわずか 9 ヶ月。OpenAI は「高性能半導体では最速」と主張する。設計プロセス自体に OpenAI の AI モデルを活用しており、「AI が AI チップを設計する」という実証例でもある。

詳細スペック（プロセスノード・HBM 構成・メモリ帯域など）は現時点で未公開で、技術レポートは別途公開予定とされている。

### ギガワットスケールを想定した設計

Jalapeño はデータセンター規模の展開を前提に設計されており、「その後数年でギガワットスケールへ拡大」と OpenAI は明言している。Microsoft が初期生産の 40% を購入する見込みで、Azure での推論インフラ拡張に使われると見られる。

## 業務インパクト（一般企業向け）

エンドユーザーへの直接影響は 2026年末以降だが、OpenAI が推論インフラを自社設計・量産することで長期的に API 利用コストの低減が期待できる。ChatGPT や OpenAI API への依存が高い企業にとって、「OpenAI のコスト構造が変わる可能性」として中長期の調達計画に影響する話だ。

## 副業・個人活用視点

個人開発者・副業での OpenAI API 利用者への直接影響は当面少ない。ただし「API 料金が中長期で下がる可能性がある」という文脈として把握しておく価値はある。Apple Silicon への移行が Mac の電力効率と長期価格競争力を変えたように、チップの自社設計は基盤的なコスト構造を変える。
