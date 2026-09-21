---
date: 2026-09-14
title: "GitHub Copilot の auto モデル選択に Efficiency / Balance / Intelligence の3ティア"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-14T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-14 Copilot auto モデル選択のティア設定

## 公式内容の日本語要約

Copilot の **auto モデル選択に、コストと品質の重み付けを選ぶ3ティア**が入った。**Efficiency はコストを最優先**、**Balance はコスト・品質・レイテンシを総合**、**Intelligence は品質を最優先**する。選んだティアの範囲内で、**プロンプトごとに個別評価して**モデルが決まる。

対象は **VS Code / Copilot CLI / GitHub Copilot アプリ**の有料契約者で、**オプトイン**である。課金は auto が実際に選んだモデルに応じて発生し、**有料契約者の auto 利用は引き続き 10% 割引**が適用される。

**モデル名を固定する運用から離れる導線**にあたる。同じ週に 10-19 の6モデル廃止が告知されており、**モデル名の直書きを続ける限り退役のたびに棚卸しが発生する**構図と対になっている。

## できるようになったこと

- auto 選択の方針を Efficiency / Balance / Intelligence から選ぶ
- ティア内でプロンプト単位に最適なモデルが選ばれる
- モデル名を固定せずにコスト方針だけを宣言する

## 影響範囲

- 対象ユーザー: 有料契約者（VS Code / CLI / Copilot アプリ）
- 対象プラン: 有料プラン全般。既定はオプトイン
- API / UI / 管理者機能: モデル選択 UI、課金

## 教材化メモ

**AI コスト統制の設計パターンとして、Claude Code の `maxEffortLevel`（2.1.267）と同型である。** 管理者・利用者が**具体的なモデル名ではなく方針（上限・重み）を宣言し、実際の割り当ては実行側が決める**という形。**禁止でも放任でもない中間形**で、ベンダー側のモデル入れ替えが起きても宣言は壊れない。

**教材では「モデル名は揮発する識別子である」という点を軸にする。** 同週の 10-19 廃止告知と並べると、**固定 = 棚卸しコスト、宣言 = 挙動の不確定性**というトレードオフが具体例で示せる。auto の 10% 割引は、ベンダーが宣言側へ誘導したい意図の表れとして読める。

## 原文確認

- 公式見出し: Configure cost and quality in Copilot auto model selection
- 公式URL: https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/
- 原文全文は公式ページで確認してください。
