---
date: 2026-08-28
title: "Google Drive の Gemini ベースのデータ分類がオープンベータへ"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/08/gemini-based-data-classification-in-Google-Drive-is-now-available-in-open-beta.html
fetched_at: 2026-08-30T09:10:00+09:00
published_at: 2026-08-28
date_precision: date-only
rollout_date: 2026-09-30
category: release
---

# 2026-08-28 Drive の Gemini データ分類がオープンベータ

## 公式内容の日本語要約

Google Workspace Updates は 2026-08-28、**Gemini モデルを使った Google Drive のデータ分類（AI classification）がオープンベータになった**と発表した。2025-11 にベータ申込を開始していた機能が、申込制からオープンベータへ移行した形である。

**従来の分類は、管理者が手作業で学習用ファイルを集めてモデルを訓練する必要があった。** 今回の方式では、その工程が不要になる。管理者は **ラベルを選び、Gemini へ指示（instructions）を与え、評価対象ファイルの範囲（audience）を指定する**だけでよい。

Gemini がラベルを付けたファイルについては、**適切なラベル権限を持つ編集者・オーナーが、自動付与されたラベルをレビューして受け入れるか、修正するか**を選べる。ラベル付与とユーザーによる変更は**監査ログに記録**される。

Google が挙げる用途は、**きめ細かい DLP ポリシーの大規模適用、保持ルールの設定、監査調査でのラベルメタデータ活用**である。加えて、**エージェント時代のセキュリティ姿勢**として、エージェント的ワークフローが機密データへ自律的にアクセスし操作することを防ぐ点が重要になる、と明記している。

設定場所は管理コンソールの **Security > Access and data control > Data classification**。対象エディションは **Enterprise Plus / Google AI Pro for Education / Frontline Plus**。Rapid Release と Scheduled Release の両ドメインへ段階展開で、**2026-09-30 までの完了を目標**としている。

## できるようになったこと

- 手動の学習データ準備なしに、Gemini への指示だけで Drive のファイルへ分類ラベルを自動付与できる
- 自動付与されたラベルを、ファイルの編集者・オーナーがレビュー／修正できる
- ラベル付与と変更が監査ログに残る

## 影響範囲

- 対象ユーザー: Workspace 管理者、および対象範囲に含まれるファイルの編集者・オーナー
- 対象プラン: Enterprise Plus / Google AI Pro for Education / Frontline Plus
- API / UI / 管理者機能: 管理コンソール（Security > Access and data control > Data classification）。DLP・保持・監査と連動

教材化メモ: src/content/ai-news-notes/gemini/drive-gemini-data-classification-open-beta.mdx

## 原文確認

- 公式見出し: Gemini-based data classification in Google Drive is now available in open beta
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/gemini-based-data-classification-in-Google-Drive-is-now-available-in-open-beta.html
- 原文全文は公式ページで確認してください。
