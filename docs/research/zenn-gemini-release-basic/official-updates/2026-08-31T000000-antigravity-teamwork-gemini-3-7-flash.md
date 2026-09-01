---
date: 2026-08-31
title: "Google Antigravity の Teamwork と Gemini 3.7 Flash で、数学の未解決問題と工学課題を多エージェントで解く"
service: "Gemini / Google"
source: https://blog.google/innovation-and-ai/technology/developers-tools/antigravity-teamwork-multi-agent/
fetched_at: 2026-09-01T09:20:00+09:00
published_at: 2026-08-31
date_precision: date-only
category: enhancement
---

# 2026-08-31 Antigravity Teamwork × Gemini 3.7 Flash の多エージェント成果

## 公式内容の日本語要約

Google が `blog.google` で、**Antigravity 内のフレームワーク「Teamwork」**に関する成果を公開した。Teamwork は、**自律的な AI エージェントのチームが、数時間から数日にわたって協働し、批評し合い、反復しながら、長期の複雑な課題を解く**ことを可能にする枠組みである。

**Gemini 3.7 Flash** と多エージェントのオーケストレーションを組み合わせた結果として、次の成果が挙げられている。

**数学**: トップレベルの発表先にまたがる**7つの未解決問題**を解いた。うち Knuth's Cycles Conjecture は **Lean で検証された40ページ超の証明**を伴う。

**工学**: RISC-V CPU シミュレータを構築し、**サイクル整合の誤差 0.71%** を達成した。

**オープンソース**: Eigen や ParlayHash といったライブラリへ性能改善を貢献した。

**本ポストは新機能の発表や提供範囲の拡大ではなく、既存ツールの能力を示す成果報告・研究パートナーシップの紹介**に力点がある。詳細は Antigravity 側のブログへ誘導されている。

## できるようになったこと

- （本ポスト時点で、新機能の提供開始や提供範囲の変更の明示なし）

## 影響範囲

- 対象ユーザー: Antigravity 利用者、多エージェント構成に関心のある開発者
- 対象プラン: 明示なし
- API / UI / 管理者機能: 変更の明示なし

## 教材化メモ

- **AIニュース記事化は見送り（スコア不足・合計4点）。** 重要度1 / 持続性1 / 実務影響1 / 既存教材影響0 / 公式情報の十分性1。**成果報告であって提供物の変更ではない**ため、読者の「今どう使うか」が変わらない。公式情報も本文が薄く、詳細は別ブログへの誘導で完結していない。
- ただし**多エージェント設計の教材素材としては価値がある**。「協働・批評・反復を数時間〜数日回す」という構成は、単発のプロンプトやワンショットのエージェントとは設計が異なる。**批評役を分離すること、時間軸を長く取ること、途中結果を検証可能な形式（ここでは Lean）に落とすこと**——この3点は、実務のエージェント設計にそのまま移せる原則である。
- **「検証可能な出力形式を選ぶ」点が特に重要。** 40ページ超の証明を Lean で検証したという事実は、長時間動く自律エージェントの成果を**人間がレビューしきれない規模になったときの品質保証手段**を示している。形式検証まで行かずとも、テスト・型・スキーマといった機械検証可能な受け皿を先に用意する、という設計判断へ一般化できる。
- Antigravity 側のブログに続報や機能提供の告知が出た場合は、そこで改めて記事化を検討する。**今回は「成果」であって「提供」ではない**という線引きを維持する。

## 原文確認

- 公式見出し: 「Pairing Google Antigravity with Gemini 3.7 Flash solves notable multi-agent math and engineering problems.」（Monday, August 31, 2026）
- 公式URL: https://blog.google/innovation-and-ai/technology/developers-tools/antigravity-teamwork-multi-agent/
- RSS: https://blog.google/rss/
- 原文全文は公式ページで確認してください。
