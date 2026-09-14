---
date: 2026-09-11
title: "Google Workspace のセットアップ時に Microsoft のユーザーとデータを取り込み可能に"
service: "Gemini / Workspace"
source: https://workspaceupdates.googleblog.com/2026/09/seamlessly-import-your-team-and-data-from-Microsoft-to-Google-Workspace-during-setup.html
fetched_at: 2026-09-12T09:20:00+09:00
published_date: 2026-09-11
date_precision: date-only
rollout_date: 2026-09-11
category: enhancement
---

# 2026-09-11 Workspace セットアップ時の Microsoft データ取り込み

## 公式内容の日本語要約

Google は、Google Workspace の **初期セットアップ時に Microsoft からユーザーと業務データを取り込む機能** を一般提供しました。

取り込めるのは、Microsoft のユーザーアカウントと、それに紐づく **メール、OneDrive のファイル、カレンダーの予定、連絡先、タスク** です。グローバル管理者の資格情報で接続する **2ステップ** で完了します。

対象は Microsoft から移行する中小企業・教育機関で、影響を受けるのは **管理者のみ**（エンドユーザー側の操作はありません）。Rapid Release / Scheduled Release の両ドメインで即日利用できます。

### 制限

**自動で取り込めるのは最大10ユーザー分** です。Flexible Plan の顧客は10ユーザーまで自動で取り込め、Annual / Fixed-Term Plan の顧客は事前にライセンスを追加する必要があります。10ユーザーを超える移行はヘルプセンターの別手段を使います。

## できるようになったこと

- セットアップ時に、グローバル管理者の資格情報で Microsoft テナントへ接続
- ユーザーとメール / OneDrive ファイル / カレンダー / 連絡先 / タスクの一括取り込み（最大10ユーザー）

## 影響範囲

- 対象ユーザー: 管理者のみ（エンドユーザーへの影響なし）
- 対象プラン: すべての Google Workspace 顧客。Flexible Plan は10ユーザーまで自動、Annual / Fixed-Term はライセンス追加が前提
- API / UI / 管理者機能: 管理者機能（セットアップフロー）

## 教材化メモ

- **AI 機能ではなく移行支援機能である。** Workspace Updates は Gemini の補助ソースだが、流れてくる更新のすべてが AI 関連ではない。「ソースの守備範囲」と「記事の守備範囲」を分けて判断する例として使える。
- 10ユーザーという上限は、**セルフサービス移行とプロフェッショナルサービス移行の境界線** をベンダーがどこに引いているかの実例。SaaS の移行支援機能を評価するときに見るべき数字のパターンとして扱える。
- 「管理者のみ影響、エンドユーザーは影響なし」という Workspace Updates 特有の影響範囲表記は、**社内アナウンスの要否を判断する定型項目** として運用教材に転用できる。

## 原文確認

- 公式見出し: Seamlessly import your team and data from Microsoft to Google Workspace during setup
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/seamlessly-import-your-team-and-data-from-Microsoft-to-Google-Workspace-during-setup.html
- 原文全文は公式ページで確認してください。
