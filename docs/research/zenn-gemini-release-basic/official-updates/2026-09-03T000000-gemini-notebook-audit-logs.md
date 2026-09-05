---
date: 2026-09-03
title: "Gemini Notebook の包括的な監査ログを Workspace 管理コンソールへ追加"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/08/introducing-comprehensive-audit-logs-for-Gemini-Notebook-in-the-Workspace-Admin-console.html
fetched_at: 2026-09-04T09:20:00+09:00
published_at: 2026-09-03T00:00:00Z
date_precision: date-only
rollout_date: 2026-09-03
category: enhancement
---

# 2026-09-03 Gemini Notebook の監査ログ

## 公式内容の日本語要約

Google Workspace の管理コンソールで、**Gemini Notebook の包括的な監査ログ**が利用できるようになった。**セキュリティ調査ツール（security investigation tool）**と**監査・調査ツール（audit and investigation tool）**の両方から参照する。

記録される範囲は、公式表現で「**複数カテゴリにまたがる広範なユーザー操作**」で、**ノートブックの公開範囲（notebook visibility）、ユーザー識別情報、IP アドレス、リソースのコンテキスト**が挙げられている。個別のイベント種別は当該ポストで列挙されていない。

**対象は「セキュリティ調査ツールおよび監査・調査ツールを利用できるすべての Google Workspace 顧客」**で、これ以外のエディション制限は明示されていない。

**ロールアウトは Rapid Release / Scheduled Release の両ドメインで 2026-09-03 開始**、**段階的展開（機能の可視化まで最大15日）**である。

**管理者の作業が発生する点が1つある。** 監査ログ自体は既定で表示されるが、**BigQuery へのエクスポートは管理者が明示的に有効化するまで無効**である。公式は「turned on するまで disabled のまま」と書いている。長期保管や横断分析をエクスポート前提で設計している組織は、この設定を確認する必要がある。

これは、Gemini Notebook 側の機能追加ではなく **統制・可観測性側の追補**にあたる。Gemini Notebook については、**2026-09-02 に柔軟な利用上限のロールアウト開始**を記録しており（`2026-08-28T170000-gemini-notebook-flexible-usage-limits.md`）、そちらとは別の更新である。

## できるようになったこと

- Gemini Notebook のユーザー操作を、セキュリティ調査ツール / 監査・調査ツールから追跡できる
- ノートブックの公開範囲、ユーザー識別情報、IP アドレス、リソースコンテキストを記録
- BigQuery へのエクスポート（**管理者が有効化した場合のみ**）

## 影響範囲

- 対象ユーザー: Workspace 管理者（情シス・セキュリティ・監査担当）
- 対象プラン: セキュリティ調査ツールおよび監査・調査ツールを利用できるすべての Workspace 顧客
- API / UI / 管理者機能: 管理コンソールの調査ツール。**BigQuery エクスポートは既定オフで、管理者操作が必要**

教材化メモ: src/content/ai-news-notes/gemini/gemini-notebook-audit-logs.mdx

## 原文確認

- 公式見出し: `Introducing comprehensive audit logs for Gemini Notebook in the Workspace Admin console`
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/introducing-comprehensive-audit-logs-for-Gemini-Notebook-in-the-Workspace-Admin-console.html
- 補足: **URL のパスは `/2026/08/` だが、掲載日は 2026-09-03 である**（Workspace Updates ではドラフト作成月がパスに残ることがある）。日付は本文の掲載日を採用した。
- 原文全文は公式ページで確認してください。
