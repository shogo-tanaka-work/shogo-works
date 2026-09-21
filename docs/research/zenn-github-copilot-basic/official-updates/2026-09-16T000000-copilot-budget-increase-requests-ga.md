---
date: 2026-09-16
title: "GitHub Copilot の予算増額リクエストが GA。AI クレジット枯渇時に利用者から申請できる"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available/
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-16T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-16 Copilot 予算増額リクエストの GA

## 公式内容の日本語要約

**AI クレジットを使い切ったメンバーが、Copilot の機能を止められたままにならず、追加クレジットを申請できる**ようになった。管理者は設定画面の **「Requests from members」** で承認・金額調整・却下を行い、**承認すると即座に AI クレジットへのアクセスが回復する。** リクエストは適切な請求アカウント階層へ自動でルーティングされる。

対象は **usage-based billing を使う Copilot Business / Enterprise の組織・Enterprise** で、**managed users を使う Enterprise は対象外**である。承認を扱うのは billing manager、organization owner、enterprise owner。

**「枯渇したら止まる」から「枯渇したら申請が飛ぶ」への変更**であり、管理者側に**定常的な承認業務が1つ増える。**

## できるようになったこと

- 利用者がクレジット枯渇時に増額を申請する
- 管理者が設定画面で承認・調整・却下する（承認は即時反映）

## 影響範囲

- 対象ユーザー: billing manager / organization owner / enterprise owner、usage-based billing 配下の利用者
- 対象プラン: Copilot Business / Enterprise（usage-based billing）。managed users の Enterprise は対象外
- API / UI / 管理者機能: 請求設定、承認フロー

## 教材化メモ

**AI コスト統制の3つ目の形として整理できる。** 今週だけで、(1) 上限を宣言する（auto モデル選択のティア、Claude Code の `maxEffortLevel`）、(2) 使用実態を測る（impact dashboard、usage metrics API）、(3) **上限に当たったときの例外処理を用意する**（本件）、が揃った。**統制設計は「止める」だけでは回らず、例外の受け口をセットで設計しないと現場が迂回路を探す**という一般則の実例になる。

**運用面の注意は、承認業務のオーナー不在である。** 承認者が billing manager / owner に限られるため、**組織が大きいほど承認待ちが滞留する。** 導入時に「誰がいつまでに見るか」を決めないと、止まる時間が長くなるだけで改善しない。

## 原文確認

- 公式見出し: Copilot budget increase requests are generally available
- 公式URL: https://github.blog/changelog/2026-09-16-copilot-budget-increase-requests-are-generally-available/
- 原文全文は公式ページで確認してください。
