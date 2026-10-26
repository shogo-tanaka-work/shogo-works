---
date: 2026-10-21
title: "Cowork のプラグイン拡張と役割別プラグイン（Sales / Service / Education / Legal）"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%E2%80%99s-new-in-cowork-expanded-plugins-and-role-based-skills/4566221
fetched_at: 2026-10-26T09:45:00+09:00
published_at: 2026-10-21
date_precision: date-only
category: release
official_url_secondary: https://learn.microsoft.com/en-us/copilot/cowork/cowork-available-plugins
---

# 2026-10-21 Cowork の役割別プラグインと接続拡張

## 公式内容の日本語要約

**Cowork が扱えるプラグイン・スキル・コネクタの範囲が広がり、役割別プラグインが追加された。** 2026-09 に導入された plugin registry の運用（発見と統制の一元化）は変わらず、選べる対象が増えた形である。

- **Power Platform コネクタ**: 組織が Power Platform で既に接続している業務アプリ・サービスを Cowork から扱える。**今後数週間で順次展開。**
- **Federated Copilot コネクタ**: Model Context Protocol（MCP）で外部システムのライブデータを Cowork へ持ち込む。**利用者自身のそのシステムでの権限を使う。**
- **役割別プラグイン**: **Sales / Service / Education / Legal の4つが提供開始（本日時点で利用可）。** プラグインライブラリの新しい **Roles & Industry** 節（Customize ページ）にある。

**どのプラグインとコネクタを利用可能にするかは管理者が決める**（Microsoft 365 admin center の Agents > Tools）。

役割別プラグインは、各職種が毎週繰り返す業務（次の顧客会議の準備、ケースキューの処理、新学期のコース準備、承認済みプレイブックに対する契約レビュー）をスキルとしてパッケージ化したもので、白紙のプロンプトではなく事前構築済みワークフローから始められる。Sales の例では post-meeting follow-up、pipeline prioritization、deal catch-up、competitive strategy、business case composer、engagement risk insights といったスキルが挙げられている。メール・会議・ファイルを根拠に使い、CRM データは任意。Dynamics 365 Sales 利用者は Dynamics 365 Sales プラグインも追加できる（**Sales for Cowork と Dynamics 365 Sales プラグインは別物**）。

**タスクカタログの更新は 2026-10 末までに展開。** Customer Service / Executives / Finance / Marketing / Sales 向けのタスク案が入る。

**イベント駆動タスクの対象が広がった。** これまでメールや Teams メッセージの到着で起動できたものが、プラグインと Power Platform コネクタ経由で**業務システム側の変化（新しいケース、商談のステージ移動など）でも起動**できる。自然言語で監視対象と起動したいタスクを説明すると、Cowork がイベント・実行内容・必要な権限を示したカードで自動化を提案する。承認すると以降は自動実行され、Automations ページで一時停止・編集・実行履歴を確認できる。**イベント駆動タスクは利用者の権限で動き、利用者が見られるものしか見えない。外部システムへメッセージを送る・レコードを変更する操作は、Cowork が用意して利用者の承認を待つ。** 対応トリガーはパートナーが定義し、各プラグイン／コネクタのドキュメントに記載される。

## できるようになったこと

- Sales / Service / Education / Legal の役割別プラグインを Customize > Roles & Industry から追加できる
- MCP 経由の federated コネクタで外部システムのライブデータを利用者権限で参照できる
- 業務システム側のイベント（新規ケース、商談ステージ移動など）で Cowork のタスクを起動できる

## 影響範囲

- 対象ユーザー: Cowork 利用者（役割別プラグインは Sales / Service / Education / Legal）
- 対象プラン: 記載なし（Copilot Cowork）
- API / UI / 管理者機能: Customize ページ（UI）、Automations（UI）、Microsoft 365 admin center > Agents > Tools（管理者）

## 教材化メモ

- **「エージェントを呼ぶ」から「エージェントが起きる」への移行の実例である。** イベント駆動タスクが業務システムの状態変化で起動するようになり、人間が開始しない処理が増える。**書き込み操作は承認待ちになる設計**（メッセージ送信・レコード変更は承認を待つ）が入っており、どこまで自動で進めてどこで人を挟むかの線引きの具体例として使える。
- **MCP が「federated コネクタ」という名前で企業向け機能の実装手段になっている。** 同じ週に GitHub Copilot 側でも MCP サーバーのポリシー統制の話が出ており、**MCP は実験的な接続方式から、管理者が統制する対象へ移った**と整理できる。利用者自身の権限を使う点（権限の肩代わりをしない）は設計として押さえるべき。
- 役割別プラグインの中身は、**AI研修で「自分の職種の繰り返し業務を洗い出す」演習をするときの素材になる。** Microsoft が職種ごとに何を繰り返し業務と定義したか（Sales なら会議後フォローアップ・パイプライン優先順位付け・商談の差分確認）が公式に列挙されている。
- **本文の取得に注意が必要だった。** techcommunity の記事本文は WebFetch と Exa の直接取得の両方でタイトルのみが返り、内容は Microsoft Learn の公式ドキュメント（`learn.microsoft.com/en-us/copilot/cowork/cowork-available-plugins`）と検索結果のハイライトから確認した。一次ソースの本文が取得できないときに、同じベンダーの公式ドキュメントへ逆引きする手順の実例になる。

## 原文確認

- 公式見出し: What's New in Cowork: Expanded plugins and role-based skills
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%E2%80%99s-new-in-cowork-expanded-plugins-and-role-based-skills/4566221
- 補助の公式ドキュメント: https://learn.microsoft.com/en-us/copilot/cowork/cowork-available-plugins
- 原文全文は公式ページで確認してください。
