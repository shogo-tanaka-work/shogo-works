---
date: 2026-09-09
title: "Microsoft 365 Copilot の Domain Exclusion が復活（Web グラウンディングの管理者制御）"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog
fetched_at: 2026-09-14T09:55:00+09:00
published_at: 2026-09-09T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-09 Microsoft 365 Copilot の Domain Exclusion 更新

## 公式内容の日本語要約

Microsoft 365 Copilot Blog に **「Update: Domain Exclusion for Microsoft 365 Copilot」**（著者 Suhel_Parekh）が掲載された。**Domain Exclusion 機能が復活し、管理者が Web グラウンディング（Copilot が Web を参照して回答を組み立てる動作）をより細かく制御できる**という内容である。

**本記事は一覧ページ上の見出し・日付・著者・要約までを確認した。個別ポストの本文は、本実行環境から取得できなかった**（`techcommunity.microsoft.com` の個別記事 URL が JavaScript ローダーのみを返す）。除外ドメインの指定方法、既定値、適用範囲（Chat / Cowork / Copilot in apps のどこに効くか）、ロールアウト日程といった詳細は**未確認**である。

Domain Exclusion は、Copilot が回答生成時に参照する外部ドメインを管理者が除外する機能で、情報統制・コンプライアンス側の要求に対応するもの。「Update」「restoration」という表現から、**一度提供が止まっていたものが戻った**という位置づけと読める。

## できるようになったこと

- 管理者が Web グラウンディングの参照先ドメインを除外設定で制御できる（詳細は未確認）

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot のテナント管理者
- 対象プラン: 未確認（本文未取得）
- API / UI / 管理者機能: 管理者設定（Web グラウンディング制御）

## 教材化メモ

- **「復活した機能」は、導入判断の履歴を狂わせる。** 一度消えた統制機能を前提に運用設計を組み直した組織は、戻ってきたことに気づかないまま代替策を使い続ける。**統制機能の可用性そのものを台帳で追う**必要があるという実例。
- 本文未取得のため、記事化の判断材料が足りない。**次週の巡回で `learn.microsoft.com` の release notes 側に反映されるかを確認する。** release notes は隔週公開で、直近の掲載は 08-25（対象期間 08-11〜08-25）である。
- 記事化はしない（週次確認ソースの更新、かつ公式本文未取得）。

## 原文確認

- 公式見出し: Update: Domain Exclusion for Microsoft 365 Copilot
- 公式URL: https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog （一覧。個別ポスト本文は未取得）
- 原文全文は公式ページで確認してください。
