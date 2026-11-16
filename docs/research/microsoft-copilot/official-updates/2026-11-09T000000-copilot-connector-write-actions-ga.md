---
date: 2026-11-09
title: "Copilot connectors の書き込みアクションが GA（Copilot Chat / Cowork で作成・更新・削除）"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/turn-copilot-insights-into-action-with-connector-write-capabilities/4571160
fetched_at: 2026-11-16T09:55:00+09:00
published_at: 2026-11-09
date_precision: date-only
category: release
---

# 2026-11-09 Copilot connectors の書き込みアクション GA

## 公式内容の日本語要約

Copilot connectors の**書き込みアクションが Copilot Chat と Cowork で一般提供**になった。自然言語の指示で、接続先アプリの情報を**作成・更新・削除**できる。Copilot が提案したアクションを利用者が確認して承認すると実行される。Office アプリ内の Copilot への展開は「coming soon」。

公式が挙げる例: Teams の会議トランスクリプトから CRM の活動履歴とフォローアップタスクを作る、Outlook のエスカレーションを要約・ラベル付きの製品課題にする、ドラフト文書から Canva のグラフィックを作る、Excel の承認済み行から会計システムのレコードを作る。コネクタ別の例として Atlassian Rovo（Jira work item の作成・更新、Confluence ページ作成）、Notion（ページ・データベースの更新）、Canva、G2（キャンペーン作成）、iManage（SOW ドラフト作成）、BioRender が示されている。

## 利用者側の対応（統制が本体）

- **既定では、作成・更新・削除の前に Copilot が許可を求める。** 「Copilot wants to use [tool name] from [connector]」と送信内容を示す確認カードが出る。
- ツール単位で **Allow once / Allow for conversation / Always allow** を選べる。**読み取りツールは既定 "Always allow"、新しい書き込みツールは既定 "Needs approval"。** 設定は chat Settings → Sources → Tools で変更できる。選択はコネクタ全体ではなく個別ツールに効く。
- **Microsoft 365 管理センターで、管理者は MCP ベースの各 Copilot connector を開き、組織に提供されているツールと、そのうちどれがデータの作成・更新・削除を行えるかを確認できる。**
- フェデレーテッドコネクタは、利用者側に Microsoft 365 Copilot ライセンスが必要で、管理者がコネクタを有効化してアクセス設定に含める必要がある。書き込みは利用者自身の接続先での権限で実行される。Researcher はフェデレーテッドコネクタに対して読み取り専用のまま。
- 書き込みツールはコネクタに同梱され、個別に有効化する設計ではない。

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot ライセンス保有者（Copilot Chat / Cowork）
- 対象プラン: Microsoft 365 Copilot。フェデレーテッドコネクタは管理者の有効化が前提
- API / UI / 管理者機能: 管理センターでコネクタごとの書き込みツール棚卸しが必要になる

## 教材化メモ

記事化しない（本Skillの記事化対象は Claude Code / Codex のロールアップのみ）。**「読み取り専用のコネクタ」から「書き込めるコネクタ」への変化は、ガバナンス上の段差が大きい。** 質問に答えるために Jira を読むのと、Jira を書き換えるのは別の話である。同じ週の Claude Code 2.1.325 で「サンドボックス内 Bash が既定で通常の権限フローに従う」「スケジュールタスクが skill の実行前に確認を求める」という逆方向（既定を厳しくする）の変更が入っている。**既定値をどちらに倒すかはベンダーの設計判断であり、利用側は毎回確認する必要がある**という教材に使える。

## 原文確認

- 公式見出し: Turn Copilot insights into action with connector write capabilities
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/turn-copilot-insights-into-action-with-connector-write-capabilities/4571160
- 原文全文は公式ページで確認してください。
