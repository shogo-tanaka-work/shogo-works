---
date: 2026-09-01
title: "ChatGPT for Healthcare に Epic EHR 連携と Healthcare Public Data プラグイン"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources/
fetched_at: 2026-09-02T09:05:00+09:00
published_at: 2026-09-01T17:02:43Z
date_precision: timestamp
category: release
---

# 2026-09-01 ChatGPT の医療データ連携

教材化メモ: src/content/ai-news-notes/chatgpt-openai/chatgpt-healthcare-epic-public-data.mdx

## 公式内容の日本語要約

OpenAI が **ChatGPT for Healthcare 向けに2つの連携**を発表した。**Epic の電子カルテ（EHR）連携**と、**Healthcare Public Data プラグイン**である。

Epic 連携は、**権限のある患者情報を Epic 環境から ChatGPT へ持ち込む**もの。臨床医は診察記録・検査結果・処方・専門医のドキュメントを個別に探さず、患者履歴の把握、変化の特定、診察準備を ChatGPT 上で行える。対応環境では **ChatGPT を EHR のレイアウト内へ直接組み込む**こともでき、患者チャートを離れずに AI 支援ワークフローを回せる。公式は「既存の EHR ワークフローを補完する設計」と説明している。

Healthcare Public Data プラグインは、**9つの公式な公開医療データソースへの構造化アクセス**を1つのプラグインにまとめたもの。ClinicalTrials.gov、CMS Coverage、RxNorm、DailyMed、PubMed などが含まれる。レコード・フィールド・識別子・バージョン単位で扱えるため、治験の適格基準、医薬品識別子、保険適用ポリシーのバージョン、医療提供者レコードといった**精密な情報の比較・検証**が、ソースごとに検索し直さずに行える。

同日の ChatGPT Release Notes（`# September 1, 2026`）にも **Healthcare Public Data in ChatGPT for Clinicians** として掲載された。こちらは**米国の対象 ChatGPT for Clinicians ユーザー向け**で、Plugin directory からインストールして使う。**これらのアプリは read-only で患者チャートにはアクセスしない。公開ソースへ送る検索に保護対象保健情報（PHI）を含めないこと**、と明記されている。

ChatGPT for Healthcare 自体は、ロールベースアクセス制御・SSO・監査ログを備えたガバナンス付きワークスペースとして提供される。BAA（Business Associate Agreement）を締結した顧客は、同一ワークスペース内で ChatGPT Work、Codex、アプリ、プラグインを HIPAA 準拠ワークフローに使える。

## できるようになったこと

- Epic 環境を ChatGPT へ接続し、権限のある患者情報を参照できる（read-only）
- 対応デプロイでは EHR のレイアウト内に ChatGPT を埋め込める
- 9つの公開医療データソースへ、1プラグインで構造化アクセスできる
- 米国の対象 ChatGPT for Clinicians ユーザーは Plugin directory から個人でも導入可能

## 影響範囲

- 対象ユーザー: ChatGPT for Healthcare 顧客、ChatGPT Enterprise 顧客（要件確認）、米国の対象 ChatGPT for Clinicians ユーザー
- 対象プラン: **EHR 連携は個人アカウントでは利用不可。** Healthcare Public Data プラグインのみ個人臨床医が利用可
- API / UI / 管理者機能: **ワークスペース管理者による有効化が必要。** Enterprise は Regulated Workspace の構成確認が必要

## 原文確認

- 公式見出し: Healthcare organizations can now connect EHR and additional industry data to ChatGPT
- 公式URL: https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources/
- 補助: https://help.openai.com/en/articles/6825453-chatgpt-release-notes （`# September 1, 2026`）
- 取得制約: `openai.com` と `help.openai.com` は WebFetch が HTTP 403 を返すため、Exa 経由で公式本文を取得した
- 原文全文は公式ページで確認してください。
