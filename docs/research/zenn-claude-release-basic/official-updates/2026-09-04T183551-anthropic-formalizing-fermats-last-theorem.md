---
date: 2026-09-04
title: "Claude がフェルマーの最終定理の完全な計算機検証済み証明を11日で作成"
service: "Claude"
source: https://www.anthropic.com/research/formalizing-fermats-last-theorem
fetched_at: 2026-09-06T09:20:00+09:00
published_at: 2026-09-04T18:35:51Z
date_precision: timestamp
category: release
---

# 2026-09-04 Claude がフェルマーの最終定理の完全な計算機検証済み証明を11日で作成

> 本エントリは **2026-09-06 実行時の追補**である。公開日は 2026-09-04T18:35Z（JST 09-05 03:35）で、**前日実行（未マージ PR #394）の窓内だったが拾われていなかった**。原因は Claude の巡回先が `support.claude.com` / `anthropic.com/news` / `claude.com/blog` に限られ、**`anthropic.com/research` が `source-catalog.md` に載っていない**ことである。

## 公式内容の日本語要約

Anthropic は、**フェルマーの最終定理（FLT）の、初となる end-to-end で計算機検証済みの証明**を公開した。Claude が **11日間ほぼ自律的に稼働**し、証明支援系 Lean のコードとして書き上げたものである。

規模は Lean **1,300万行**、途中で証明した補助定理は **29,500件**（生成分を含めると 30,300件）。Lean の主要コミュニティライブラリ Mathlib の **5倍超**の分量にあたり、Lean 史上最大の証明とされる。Wiles の 1995 年の証明（129ページ）を Darmon–Diamond–Taylor による簡略版に沿って形式化したもので、人間からの介入は「Jacobian をスキームとして扱うのを優先」といった**優先順位の助言程度**に限られたという。

技術的な鍵は2つある。1つは Columbia 大学の Tianyi Peng（Anthropic 研究者）らが作った形式化プラットフォーム **Prove2Me**。定理文の有向非巡回グラフ（DAG）を維持することで、**多数のエージェントが記憶劣化を起こさずに並行作業**できるようにした。もう1つは **Claude Code ベースのマルチエージェント・ハーネス**で、数十体の Claude エージェントが協調した。消費は**出力トークンで約60億**、モデルは Claude Fable 5.1 相当の社内研究モデルである。Prove2Me 導入前の初期試行は失敗しており（エージェントが状態を見失って協調が崩れた）、その失敗分も最終証明の非定型部分の約7%として残っている。

検証は多重に行われた。Lean の標準3公理のみに依存し `sorry`（未証明の穴）なしでビルドが通ること、Mathlib 側の FLT の主張と一致することを comparator が確認、さらに Rust による独立実装カーネル **nanoda** も全宣言を受理した。Imperial College London で FLT 形式化プロジェクトを率いる Kevin Buzzard は「数学の公理以外に前提を置かずに証明されている」と評価し、**現代数学文献の自動形式化に向けた大きな一歩**だとコメントしている。証明全文と解説は GitHub で公開されている。

教材化メモ: src/content/ai-news-notes/claude/formalizing-fermats-last-theorem.mdx

## できるようになったこと

- 数か月〜数年かかるとされた大規模証明の形式化を、エージェント群で2週間弱に短縮できることが実証された
- Prove2Me の DAG 構造により、長時間タスクで多数エージェントを協調させる具体的な設計例が公開された
- 証明全文と Claude の思考過程の抜粋が GitHub / PDF で追試可能な形で公開された

## 影響範囲

- 対象ユーザー: 数学・形式手法の研究者、長時間マルチエージェント運用を検討する開発者・企業
- 対象プラン: 直接の製品変更なし（社内研究モデルによる成果発表）
- API / UI / 管理者機能: 該当なし。設計手法（Claude Code ベースのハーネス、外部の共有状態）の参照事例

## 原文確認

- 公式見出し: Formalizing Fermat's Last Theorem
- 公式URL:
  - https://www.anthropic.com/research/formalizing-fermats-last-theorem
  - https://github.com/anthropics/fermats-last-theorem
- 原文全文は公式ページで確認してください。
