---
date: 2026-10-15
title: "code scanning の agentic autofix が GA。無償の Generate Fix が Assign to Copilot に置き換わる"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability
fetched_at: 2026-10-19T09:40:00+09:00
published_at: 2026-10-15
date_precision: date-only
category: release
---

# 2026-10-15 agentic autofix が GA

## 公式内容の日本語要約

**code scanning アラートの agentic autofix が一般提供になった。** 動作は、関連ファイルを横断して調べ、修正を提案し、**CodeQL を再実行してアラートが閉じることを確認し**、レビュー用の draft pull request を開く、という流れである。

**既存の無償機能が置き換わる点が実務上いちばん効く。** 有効化すると、**個別アラートの無償の「Generate Fix」が「Assign to Copilot」に置き換わる。** Copilot へ割り当てると**最大25件のアラートを1つの pull request でまとめて修正**でき、REST API からも割り当てられる。

**対象は限定されている。** GitHub Enterprise Cloud（data residency を含む）の **GitHub Code Security / GitHub Advanced Security 顧客**のみ。さらに**リポジトリの既定ブランチ上のアラートだけ**が割り当て可能で、pull request や他ブランチにしか出ていないアラートは割り当てられない。

**課金は AI Credits と Actions 分を消費する。** Code Security 予算の AI Credits と GitHub Actions の実行分を使い、AI Credit の消費は enterprise の billing and licensing の「AI usage」配下、「Advanced Security」製品として表示される。**Code Security AI credits には SKU レベルの予算を設定できる。**

有効化は3段階で、(1) enterprise 管理者が Advanced Security ポリシーで「Agentic autofix」を有効化、(2) organization / repository 管理者が Code Security 設定で有効化、(3) Copilot の支払い方法が定義済みであること、が必要である。既定の有効・無効は明記されていないが、上記の明示的な有効化なしでは動かない。

## できるようになったこと

- アラートを Copilot へ割り当て、CodeQL の再実行まで含めた修正 PR を自動で得られる
- 最大25件のアラートを1 PR でまとめて修正できる
- REST API からアラートを Copilot へ割り当てられる

## 影響範囲

- 対象ユーザー: GitHub Enterprise Cloud の Code Security / Advanced Security 顧客
- 対象プラン: Code Security / GitHub Advanced Security（**既定ブランチのアラートのみ**）
- API / UI / 管理者機能: REST API、Advanced Security ポリシー（enterprise）、Code Security 設定（org / repo）

## 教材化メモ

- **「無償機能が有償機能に置き換わる」形の変更**で、有効化の判断が課金の判断と一体になる。**Generate Fix を日常的に使っているチームは、有効化前に消費見込みを見る必要がある。** SKU レベル予算があるのは、その前提での設計である。
- **CodeQL を再実行して閉じることを確認する**という設計が重要。提案で終わらず、**検証まで同じループに入れている**。自作の自動修正でも「修正したと言うだけで検証していない」状態を避けるべき、という一般論へつながる。
- **既定ブランチのみ**という制約は、「PR 上で見つけた問題を自動で直す」という最も欲しい使い方ができないことを意味する。機能の宣伝と実際の適用範囲を読み分ける練習になる。

## 原文確認

- 公式見出し: Agentic autofix for code scanning alerts general availability
- 公式URL: https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability
- 原文全文は公式ページで確認してください。
