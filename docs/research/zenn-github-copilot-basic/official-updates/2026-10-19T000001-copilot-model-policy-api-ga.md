---
date: 2026-10-19
title: "Copilot model policy API が GA（enterprise / org / team / agent apps）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams
fetched_at: 2026-10-26T09:40:00+09:00
published_at: 2026-10-19
date_precision: date-only
category: release
---

# 2026-10-19 Copilot model policy API が GA

## 公式内容の日本語要約

**Copilot のモデルポリシーを読み書きする REST API の GET / PATCH エンドポイントが一般提供になった。** どのモデルを使えるかを、UI ではなく API から4つの階層で設定できる。

- Enterprise: `/enterprises/{enterprise}/copilot/model-policies`
- Enterprise teams: `/enterprises/{enterprise}/teams/{team_slug}/copilot/model-policies`
- Agent apps: `/enterprises/{enterprise}/copilot/apps/model-policies`
- Organization: `/orgs/{org}/copilot/model-policies`

Enterprise のポリシーは、モデル制御を organization へ委譲する（organization モード）か、team と agent apps へ委譲する（enterprise teams モード）かを選べる。**必要な OAuth スコープ・トークン権限とロールは告知本文に無く、REST API ドキュメント側の記載である。**

対象プランの明記はない。利用者側に必須の作業はなく、**モデル可用性を規模をもって管理している場合に、UI 作業を API へ置き換えられる**という位置付けである。

## できるようになったこと

- enterprise / enterprise team / organization / agent apps の4階層で、モデル可用性を API から取得・更新できる
- モデル制御の委譲先（organization モード / enterprise teams モード）を含めてスクリプト化できる

## 影響範囲

- 対象ユーザー: Copilot のモデル可用性を管理する enterprise / organization 管理者
- 対象プラン: 明記なし
- API / UI / 管理者機能: REST API（AI controls）

## 教材化メモ

- **同日に発効した6モデル廃止と対で読む告知である。** 廃止の方は「代替モデルを管理者が model policies で有効化する」ことを求めており、**その有効化を API でまとめて実行できるようになったのがこの GA** である。モデル退役のたびに UI を手で触る運用から抜けられる。
- **agent apps が独立した階層として切られている**点が設計として興味深い。人間のユーザーと、エージェントとして動くアプリで、使えるモデルを別に決められる。エージェント運用のガバナンス論の具体例になる。
- 「必要なスコープが告知本文に書かれていない」のは一次情報の読み方の例になる。**changelog は変更の存在を知らせるもので、実装条件は API リファレンス側にある。**

## 原文確認

- 公式見出し: Copilot model policy API for enterprise, orgs, and teams
- 公式URL: https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams
- 原文全文は公式ページで確認してください。
