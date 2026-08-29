---
date: 2026-08-28
title: "Google Drive の Gemini によるデータ分類がオープンベータへ — 学習データではなく文章の指示でラベル付け"
service: "Gemini / Google Workspace"
source: http://workspaceupdates.googleblog.com/2026/08/gemini-based-data-classification-in-Google-Drive-is-now-available-in-open-beta.html
official_url: http://workspaceupdates.googleblog.com/2026/08/gemini-based-data-classification-in-Google-Drive-is-now-available-in-open-beta.html
fetched_at: 2026-08-29T09:05:00+09:00
published_date: 2026-08-28
date_precision: date-only
category: enhancement
---

# 2026-08-28 Drive の Gemini データ分類（オープンベータ）

## 公式内容の日本語要約

Google Workspace が、**Gemini による Google Drive のファイル自動分類**をオープンベータで提供開始した。ファイルの識別とラベル付けを自動化し、**DLP（情報漏洩対策）ポリシーの適用、保持ルールの設定、監査調査**に使える。

最大の変更は、**分類のために学習データを用意する必要がなくなった**ことである。従来は分類器を学習させるためのサンプルが必要だったが、今回は**管理者が文章で分類の指示を書く**と、Gemini がその指示を解釈してファイルを評価し、適切なラベルを適用する。

管理者は管理コンソールで、**使うラベルの選択、Gemini への分類指示、対象範囲（audience）の指定**を行う。自動付与されたラベルは、**ファイルの編集者・オーナーが確認して受け入れるか修正できる**。ラベル付与の操作と利用者による修正は、いずれも**ログに記録**される。

対象エディションは **Enterprise Plus / Google AI Pro for Education / Frontline Plus**。Rapid Release と Scheduled Release の両ドメインへ段階的に展開し、**9月30日までに完了**予定。

## できるようになったこと

- **学習データなしで**、文章による指示だけで Drive のファイル分類ルールを定義できる
- Gemini が自動でラベルを付与し、**DLP・保持・監査**の各ポリシーへ連携できる
- 付与されたラベルを**編集者・オーナーが確認・修正**でき、その履歴がログに残る

## 影響範囲

- 対象ユーザー: Workspace 管理者、および対象ドライブのファイル編集者・オーナー
- 対象プラン: **Enterprise Plus / Google AI Pro for Education / Frontline Plus**
- API / UI / 管理者機能: 管理コンソール（ラベル、分類指示、対象範囲の設定）
- ロールアウト: Rapid / Scheduled 両ドメインへ段階展開、**2026-09-30 完了予定**

## 原文確認

- 公式見出し: Gemini-based data classification in Google Drive is now available in open beta
- 公式URL: http://workspaceupdates.googleblog.com/2026/08/gemini-based-data-classification-in-Google-Drive-is-now-available-in-open-beta.html
- 教材化メモ: src/content/ai-news-notes/gemini/drive-gemini-data-classification-open-beta.mdx
- 原文全文は公式ページで確認してください。
