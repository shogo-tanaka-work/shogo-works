---
date: 2026-10-22
title: "Copilot 使用状況メトリクスがカスタムスキル・エージェント・MCP サーバーの名前を表示"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-22-custom-skills-agents-and-mcp-servers-in-usage-metrics-api
fetched_at: 2026-10-26T09:40:00+09:00
published_at: 2026-10-22
date_precision: date-only
category: enhancement
---

# 2026-10-22 使用状況メトリクスにカスタムスキル・エージェント・MCP サーバー名が出る

## 公式内容の日本語要約

**Copilot の使用状況メトリクスが、組織のカスタムスキル・カスタムエージェント・MCP サーバー・スラッシュコマンド・プラグインを、設定された名前のまま表示するようになった。** これまで `other` や `custom` にまとめられていたものが名前付きで出る。**1レコードあたりの表示上限は5件から25件へ**増え、残りは末尾の `other` にまとめられる。2026-09 の agentic CLI カスタマイズメトリクスの拡張である。

新規フィールドの追加はなく、enterprise / organization レポートの既存配列（`totals_by_skill`、`totals_by_custom_agent`、`totals_by_mcp`、`totals_by_slash_cmd`、`totals_by_plugin`）が対象。`interaction_count` と `distinct_*_use_count` の計算方法は変わらない。

**アクセスには Copilot usage metrics ポリシーの有効化が必要**で、enterprise owner / billing manager / organization owner、または `View Copilot Metrics` 権限を持つカスタムロールが対象。

**名前が出るためにはクライアント更新が必要である。** prompt mode、GitHub Copilot app、ACP 連携は **Copilot CLI 1.0.97 以降**、Copilot SDK とその上で動く IDE は **v1.0.21 以降**。IDE 組み込みチャットのテレメトリからは名前が報告されない。過去日の名前は出ず、本リリース後に処理されたレポート日からのみ名前が付く。

**名前は設定されたまま（trim のうえ128文字まで）報告されるため、組織外へレポートを共有する前に名前を確認する必要がある。** パス形式の名前は `other` / `custom` にまとめられたままになる。データは trend レベルとして扱うべきで、古いクライアントやテレメトリのブロックにより少なく出ることがある。

## できるようになったこと

- カスタムスキル・エージェント・MCP サーバー・スラッシュコマンド・プラグインの利用実績を、名前単位で確認できる
- 1レコードあたり25件まで内訳が出る

## 影響範囲

- 対象ユーザー: Copilot のメトリクスを見る enterprise / organization 管理者
- 対象プラン: 明記なし（Copilot usage metrics ポリシーの有効化が前提）
- API / UI / 管理者機能: 使用状況メトリクス API（enterprise / organization レポート）

## 教材化メモ

- **「名前がそのまま外へ出る」という副作用が明記されている点が重要である。** 内部の命名（顧客名・プロジェクトコード・社内システム名を含みうる）がメトリクスのラベルになる。**メトリクスを組織外へ共有する運用があるなら、スキルやエージェントの命名規約を先に決める必要がある。** 可観測性の追加が情報の持ち出し経路を増やす例として扱える。
- **クライアント側のバージョン要件（CLI 1.0.97 / SDK v1.0.21）を満たさないと名前が出ない。** 「メトリクスに出ない＝使われていない」ではない。計測の空白をデータの不在と読み違える典型例になる。
- MCP サーバーの利用実績が名前付きで出ることは、**同じ週の「グローバル既定ポリシーの対象に MCP servers in Copilot が入る」告知と直結する。** どのサーバーが実際に使われているかを確認してから、ポリシーを明示設定するという順序が取れる。

## 原文確認

- 公式見出し: Custom skills, agents, and MCP servers in usage metrics API
- 公式URL: https://github.blog/changelog/2026-10-22-custom-skills-agents-and-mcp-servers-in-usage-metrics-api
- 原文全文は公式ページで確認してください。
