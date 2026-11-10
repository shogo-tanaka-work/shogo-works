---
date: 2026-11-06
title: "Copilot impact dashboard が Chat と VS Code agent の利用を追加、コホート名も変更"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-11-06-copilot-impact-dashboard-adds-chat-and-vs-code-agent-usage
fetched_at: 2026-11-09T09:40:00+09:00
published_at: 2026-11-06T22:17:28Z
date_precision: timestamp
category: enhancement
---

# 2026-11-06 Copilot impact dashboard の追加計測

## 公式内容の日本語要約

Agent adoption チャートの計測対象に Copilot Chat と VS Code の Agents ウィンドウが加わり、追跡される機能は計9個になった。

コホート名が変わり、「Passive users」は **「Chat-first users」** になった。これは Copilot では活動しているが、adoption phase の機能しきい値を満たさない利用者を指す。28日単位の enterprise / organization 利用レポートの `totals_by_feature` 配下には `chat` と `vscode_agent` が追加された。

adoption phase の定義とコホートの規模は変わらない。**新しい機能は、この変更より後の期間のレポートにしか出ない。**

## できるようになったこと

- Chat と VS Code Agents ウィンドウの利用を adoption の指標に含められる
- `totals_by_feature` から `chat` / `vscode_agent` の内訳を取れる

## 影響範囲

- 対象ユーザー: Copilot の定着状況をダッシュボードで追う組織の管理者
- 対象プラン: enterprise / organization レポートが対象
- API / UI / 管理者機能: **過去期間には遡及しない。** 変更前後で時系列を単純に並べると、計測対象が増えたぶんが「伸び」に見える

## 教材化メモ

- **「Passive users」→「Chat-first users」の改称は、言葉の持つ評価を外した変更である。** 同じ集団を指しているが、**passive（受動的）は「使っていない人」という読み方を誘う**。実際は Chat で使っているが所定の機能しきい値に届いていない人を指す。社内レポートの指標名が人の評価に直結する例として扱える。
- **計測対象の追加は時系列を壊す**。遡及しない以上、**変更日を注記しないグラフは誤読を生む。** 本件は「定着率が上がった」ではなく「分母・分子の定義が変わった」。社内の AI 利用レポートを作る側に直接効く注意点で、Copilot usage API の `null` 扱いの注意と同じ系列である。

## 原文確認

- 公式見出し: "Copilot impact dashboard adds chat and VS Code agent usage"
- 公式URL: https://github.blog/changelog/2026-11-06-copilot-impact-dashboard-adds-chat-and-vs-code-agent-usage
- 原文全文は公式ページで確認してください。
