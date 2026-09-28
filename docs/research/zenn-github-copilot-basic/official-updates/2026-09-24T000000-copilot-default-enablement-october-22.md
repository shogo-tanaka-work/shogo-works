---
date: 2026-09-24
title: "Copilot Business / Enterprise で、GA 済み機能が 2026-10-22 から既定で有効化。28日の設定期間あり"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-24
date_precision: date-only
category: policy
---

# 2026-09-24 Business / Enterprise の機能既定有効化（2026-10-22 発効）

## 公式内容の日本語要約

**Copilot Business と Copilot Enterprise の組織で、一般提供（GA）済みの Copilot 機能とクライアント機能が既定で有効になる。** 対象には **Copilot Code Review ポリシーと MCP servers in Copilot ポリシー**が含まれる。

**発効日は 2026-10-22 で、告知時点から28日の設定期間が設けられている。**

**管理者側の制御は残る。** エンタープライズ側で**全体の既定ポリシー**を3択で設定できる。

- **Enabled** — 新機能を既定で利用可能にする
- **Disabled** — 承認がない限り利用不可にする
- **Let organizations decide** — 組織管理者へ委譲する

設定場所は **Copilot 配下の「AI Controls」ページの「Default policy for new features」**である。

**明示的な決定は保持される。** 公式告知は「機能を明示的に有効化または無効化している場合、その選択を上書きしない」と述べている。**preview 機能は opt-in のまま**で、のちに GA になっても上書きされない。

**期限までの残日数は 2026-09-28 時点で24日。**

## できるようになったこと

- エンタープライズ側で新機能の既定ポリシーを Enabled / Disabled / Let organizations decide の3択で設定

## 影響範囲

- 対象ユーザー: Copilot Business / Copilot Enterprise の組織管理者
- 対象プラン: Copilot Business、Copilot Enterprise
- API / UI / 管理者機能: AI Controls ページの「Default policy for new features」。Copilot Code Review ポリシーと MCP servers in Copilot ポリシーが対象に含まれる

## 教材化メモ

- **「何も決めていない」が「有効」に倒れる変更**である。これまで未設定のまま運用していた組織は、**10-22 に自組織の Copilot の利用可能範囲が広がる。** 統制の観点では、**未設定は中立ではない**という実例として最も分かりやすい。
- **MCP servers in Copilot ポリシーが対象に含まれる**点は見落としやすい。MCP は外部ツールへの接続口であり、**既定で有効になる対象に接続系のポリシーが入っている**ことは、10-22 までに決めるべき事項として明示的に扱う。
- **28日の予告期間が付いている**のは、9月前半の廃止告知（予告実質1日、予告ゼロ）と対照的である。**告知の出し方に一貫性がない**という事実そのものを、外部ベンダー依存のリスクとして記録する価値がある。

## 原文確認

- 公式見出し: Default Enablement of Copilot features for Copilot Business and Enterprise
- 公式URL: https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise
- 原文全文は公式ページで確認してください。
