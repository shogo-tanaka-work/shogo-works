---
title: "Claude Fable 5.2 と Mythos 5.2 公開 — 価格は 5.1 から2割下がり、Claude Code の既定 Fable も切り替わった"
tool: "claude"
toolLabel: "Claude"
date: 2026-11-09
sourceUrl: "https://www.anthropic.com/claude-fable-and-mythos-5-2"
summary: "Anthropic が Claude Fable 5.2 と Mythos 5.2 を公開した。両者は同一の基盤モデルで、強いサイバー・生物のセーフガードを付けた Fable が全ユーザー向け、Mythos は検証プログラム参加組織向けである。出力は 5.1 比で最大30%高速になり、価格は入力 $8 / 出力 $40 per MTok と 5.1 の $10 / $50 から下がった。最大2.5倍速の fast mode は $16 / $80 で、Claude Code でも使える。API ID は claude-fable-5-2。Claude Code 2.1.321 は同日、これを既定の Fable モデルにした。"
description: "Fable 5.2 は入力 $8 / 出力 $40 に値下げ。fast mode は最大2.5倍速。日常業務の既定は引き続き Opus 5.5 を推奨。"
impact: "5.1 を使っている組織は、モデル ID を切り替えるだけで単価が約2割下がる。一方で Anthropic 自身が日常用途の既定に Opus 5.5 を推奨しており、Fable は最も難しい仕事に絞って使うのが前提になる。"
tags: ["claude", "fable-5-2", "mythos-5-2", "モデル選定", "料金", "fast-mode"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic が2026年11月9日、**Claude Fable 5.2** と **Claude Mythos 5.2** を公開しました。9月1日の 5.1 に続く更新です。

**Fable と Mythos は同じ基盤モデルです。** 違いはセーフガードで、Fable はサイバーセキュリティと生物分野に強い防御を付けて全ユーザーに提供し、Mythos はサイバー防御やライフサイエンス研究で正当な用途を持つ組織が、Cyber / Life Sciences Verification Program を通じて利用します。

**価格は下がりました。** Fable 5.2 は入力 $8 / 出力 $40 per MTok で、5.1 の $10 / $50 から約2割安くなっています。キャッシュ読み出しは $0.20 per MTok。出力は 5.1 比で最大30%高速とされ、品質面ではコーディング・推論・視覚の改善が挙げられています。

**fast mode** も用意されています。生成が最大2.5倍速くなり、価格は入力 $16 / 出力 $80 per MTok です。Claude Code、Claude Platform、Google Cloud 上の Claude、Microsoft Foundry で使えます。Mythos の fast mode は検証プログラム参加組織に限られます。米国内で推論を完結させる場合は 1.1 倍の価格です。

**提供範囲** は、Pro / Max / Ultra / Team / Enterprise の各プランと、Claude Platform（`claude-fable-5-2`）、Amazon Web Services、Google Cloud、Microsoft Foundry です。今週は、Fable を含むプランに利用枠のリセットが1〜3回付与されます。

## 何が変わったか

- **Fable 5.2 / Mythos 5.2 を公開**（API ID: `claude-fable-5-2`）
- **価格は入力 $8 / 出力 $40 per MTok**（5.1 は $10 / $50）。キャッシュ読み出し $0.20
- **出力が 5.1 比で最大30%高速**
- **fast mode**: 最大2.5倍速、入力 $16 / 出力 $80 per MTok。Mythos の fast mode は審査済み組織のみ
- 米国内推論は 1.1 倍価格
- **Claude Code 2.1.321 が同日、既定の Fable モデルを 5.2 に変更**
- 公式の使い分け: 日常の多くの仕事は **Opus 5.5** から始め、必要に応じて Fable / Mythos へ上げる、または Sonnet 5.5 / Haiku 5.5 へ下げる
- Fable 5.2 は、Haiku / Sonnet / Opus が相談する **Advisor**、または小さいモデルに仕事を割り振る **Orchestrator** としても使える

## 業務インパクト（一般企業向け）

**Fable を使っている組織にとっては、実質的な値下げです。** 5.1 から 5.2 へ ID を切り替えるだけで、入力・出力とも単価が約2割下がります。出力が速くなる点も、長時間のエージェント処理では待ち時間とコストの両方に効きます。

**ただし、Anthropic 自身が Fable を日常の既定にしていません。** 公式の推奨は「まず Opus 5.5 から始め、仕事の範囲と難度に応じて上下させる」です。Fable は「最も野心的で、答えの決まっていない技術的な仕事」向けの位置づけで、**全員の既定モデルを Fable にするとコストが膨らむ**構図は変わりません。部署ごとに、Fable を使う場面（大規模な移行、複数リポジトリにまたがる設計判断など）を明示するのが現実的です。

**サイバー分野の線引きに注意が必要です。** Fable 5.2 のセーフガードはサイバーセキュリティ関連の作業の多くをブロックします。脆弱性調査などを業務にする部署は、Mythos 5.2 が必要になり、**Cyber Verification Program への申請**という手続きが前提になります。これは契約や利用審査を含むため、すぐには使えません。

**Claude Code の利用者は、既定モデルが変わっている点を把握してください。** 2.1.321 に更新すると、既定の Fable が 5.2 になります。コストの見え方が変わるため、利用量の予算を持つ組織は、更新タイミングを管理者側で揃えておくと数字が追いやすくなります。

## 副業・個人活用視点

**大きな案件ほど費用対効果を測り直す価値があります。** 値下げと高速化で、長時間のエージェント運用（大規模なリファクタリング、複数リポジトリの調査）の1回あたりのコストが下がります。受託で「難しい部分だけ Fable に任せる」構成を組んでいるなら、見積もりの前提が変わります。

**fast mode は、待ち時間が成果物の質に直結する場面で使います。** 単価は標準の2倍ですが、対話しながら進める作業では速度のほうが効く場面があります。常用せず、必要な局面で切り替える運用が向いています。

**Pro / Max の個人利用者は、今週の利用枠リセットが追い風です。** 発売記念で Fable 利用枠が増えるため、普段は使い切れない上位モデルを試すには良いタイミングです。自分の仕事で Opus 5.5 と並べて結果を比べ、差が出る作業だけ Fable に回すと、月額の中で無駄が出にくくなります。
