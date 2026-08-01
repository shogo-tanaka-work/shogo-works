---
date: 2026-07-31
title: "Copilot のモデルポリシーをエンタープライズチーム単位で割り当てられる（public preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-31-enterprise-teams-model-policy-targeting-in-public-preview
fetched_at: 2026-08-01T15:10:00+09:00
published_at: 2026-07-31
date_precision: date-only
category: enhancement
rollout_date: 2026-08-03
---

# 2026-07-31 Copilot のエンタープライズチーム単位モデルポリシー

## 公式内容の日本語要約

GitHub Enterprise の管理者（Copilot Business / Copilot Enterprise ライセンス保有）が、AI モデルのアクセスポリシーを組織単位ではなくチーム単位で設定できるようになった。公式は「役割、習熟度、機能といった実際の働き方に沿った、よりきめ細かいユーザー単位の制御」と説明している。

エンタープライズレベルでのモデル設定は3種類。

- **Enabled**: エンタープライズの全メンバーが利用できる
- **Disabled**: 誰も利用できない
- **Optional**: 特定のエンタープライズチームに割り当てられる

判定は least-restrictive（最も制限の緩いものを採用）方式で、いずれかのチームでモデルが割り当てられていれば、そのユーザーはどこでもそのモデルを使える。

有効化は Copilot Models 設定ページの「Enterprise teams mode」をトグルする。preview 期間中は、エンタープライズチームを作成して Optional モデルを割り当てる準備を、完全に切り替える前に進められる。以前の構成へ戻すロールバックも可能。

ロールアウトは 2026-08-03 までに大半の顧客へ提供される。

## できるようになったこと

- モデルのアクセスポリシーをチーム単位で割り当てられる
- Enabled / Disabled / Optional の3設定でエンタープライズレベルの方針を決められる
- Optional モデルを特定のエンタープライズチームへ割り当てられる
- 「Enterprise teams mode」のトグルで有効化し、以前の構成へロールバックできる

## 影響範囲

- 対象ユーザー: GitHub Enterprise の管理者（Copilot Business / Copilot Enterprise ライセンス）
- 対象プラン: Copilot Business、Copilot Enterprise
- API / UI / 管理者機能: Copilot Models 設定ページ
- ロールアウト: 2026-08-03 までに大半の顧客へ

## 教材化メモ

- 2026-07-29 のデフォルトモデル有効化ポリシー（2026-08-26 発効）と組み合わせると、「全体の既定値をどうするか」＋「チーム単位で誰に何を許すか」の2軸で設計できるようになる。管理者教材はこの2軸で整理する
- least-restrictive 方式は、複数チームに所属するユーザーの権限がどう決まるかという典型的な設計課題の実例。「厳しい方を採るか緩い方を採るか」の選択として説明できる
- Optional という中間状態の存在は、Enabled / Disabled の二値では実運用に合わないという認識の表れ。ポリシー設計の粒度の話に使える
- 役割・習熟度・機能でモデルを分けるという発想は、AI ツールの配布設計の教材でそのまま使える

## 原文確認

- 公式見出し: Enterprise teams model policy targeting in public preview
- 公式URL: https://github.blog/changelog/2026-07-31-enterprise-teams-model-policy-targeting-in-public-preview
- 原文全文は公式ページで確認してください。
