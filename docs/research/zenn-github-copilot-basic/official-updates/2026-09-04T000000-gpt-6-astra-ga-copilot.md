---
date: 2026-09-04
title: "GitHub Copilot — GPT-6 Astra が一般提供（新モデルは既定で自動有効）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-04-gpt-6-astra-is-generally-available-in-github-copilot
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-09-04
date_precision: date-only
category: release
---

# 2026-09-04 GPT-6 Astra が GitHub Copilot で GA

## 公式内容の日本語要約

**GPT-6 Astra** が GitHub Copilot で一般提供になった。モデルピッカーから選べる対象は **Copilot Pro+ / Max / Business / Enterprise**。

公式は Astra を「**長時間・自律のコーディングおよびエージェント的タスク向け**」と位置づけ、社内評価で「**進めながら計画と検証を行う**」ことで性能が改善したとしている。

**課金は usage-based billing のもとで provider list pricing** に従う。本告知に premium request の倍率の記載はない。

**有効化の既定に注意が要る。** 公式は "new models are enabled automatically unless an administrator has turned off the global default or explicitly disables this model" と述べており、**新モデルは自動で有効になる。** Business / Enterprise 管理者は Copilot settings のモデルポリシーで無効化できる。

## できるようになったこと

- Copilot Pro+ / Max / Business / Enterprise でモデルピッカーから GPT-6 Astra を選ぶ

## 影響範囲

- 対象ユーザー: Copilot Pro+ / Max / Business / Enterprise の利用者
- 対象プラン: 上記。Pro は対象外
- API / UI / 管理者機能: モデルピッカー、Copilot settings のモデルポリシー、usage-based billing

## 教材化メモ

- **新モデルが自動で有効になる**という既定は、コスト統制の観点で重要である。**管理者が何もしなければ、provider list pricing の新モデルが選択肢に加わる。** 使用量課金と組み合わさると、**誰も承認していない支出が発生しうる**。前週に記録した「グローバルモデルポリシーの GA」（2026-08-26）は、まさにこの既定を止めるための仕組みであり、**両者はセットで理解する必要がある。**
- 同週の Codex `0.153.4` では **Astra がバンドル既定モデルになった**。GitHub Copilot と Codex で、同じモデルが同じ週に別々の経路から既定側へ入っている。**モデル移行はツールごとに別々に降ってくる**という実務感覚は、この並びで説明できる。
- 「長時間・自律のタスク向け」「進めながら計画と検証を行う」という位置づけは、**モデル選定を用途で切り分ける**話に使える。全タスクを最上位モデルで回す必要はない。

## 原文確認

- 公式見出し: GPT-6 Astra is generally available in GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-09-04-gpt-6-astra-is-generally-available-in-github-copilot
- 原文全文は公式ページで確認してください。
