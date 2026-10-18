---
date: 2026-10-07
title: "漏洩シークレット検出の専用モデル。既存の AI 検出は自動切替、push protection は管理者が有効化・AI Credits 課金"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection
fetched_at: 2026-10-12T09:50:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: release
---

# 2026-10-07 漏洩シークレット検出の専用モデル

## 公式内容の日本語要約

シークレット検出に特化してファインチューニングされたモデルが投入された。**シークレットの周辺コードを読んで「資格情報らしさ」を判定する**ため、**トークン形式を持たない平文パスワードも拾える**。コードや文章の生成は行わない。

適用先は **secret scanning のアラート、push protection、そして Copilot CLI / Copilot app の `/security-review` コマンド**である。提供状況は3段に分かれる。**AI 検出の Password アラートを使っていた顧客は、新モデルへ自動的に切り替わった（2026-10-07 開始）。** **push protection の AI 検出は private preview。** **`/security-review` の AI シークレットチェックは private preview で近日提供。**

プランは機能ごとに異なる。**AI 検出アラート**は GitHub Secret Protection（GHSP）/ GitHub Advanced Security（GHAS）に追加費用なしで含まれ、**GHES 3.23 でも public preview として提供予定**。**AI push protection** は GHEC と GitHub Teams の GHSP / GHAS 有償顧客向け（GHES には含まれない）。**`/security-review` のチェック**は個人 Copilot プラン（Pro / Pro+ / Max / Free / Student）に GHSP / GHAS ライセンス無しで提供され、Business / Enterprise も対象（データレジデンシー付き GHEC を含む）。

**課金と既定状態に注意が要る。** 既存の AI 検出スキャンの切替は自動だが、**新しくクレジットを消費するチェックは既定で無効**で、`/security-review` を実行しただけでは有効にならない。**push protection の AI 検出は管理者が明示的に有効化する必要がある。** **AI Credits の課金は「数週間のうちに」開始**とされ、具体日は示されていない。課金は organization が public preview へオプトインして機能を有効化した時点から始まる。

管理者の作業は、**Billing and licensing > Budgets and alerts** で Advanced Security および Secret Protection AI Credits SKU に SKU 単位の予算を置き、**「Stop usage when budget limit is reached」を有効化**して上限を硬くすることである。**予算アラートだけでは使用は止まらない。**

## できるようになったこと

- トークン形式を持たない平文パスワードも検出対象になる
- `/security-review` に AI シークレットチェックが（近日、private preview で）入る

## 影響範囲

- 対象ユーザー: GHSP / GHAS 利用組織、Copilot 個人プラン利用者、GHES 3.23 利用組織
- 対象プラン: 機能ごとに異なる（本文参照）
- API / UI / 管理者機能: secret scanning、push protection、`/security-review`、Budgets and alerts

## 教材化メモ

- **「自動で切り替わるもの」と「管理者が有効化するもの」と「課金が後から始まるもの」が1本の告知に同居している。** 読み分けを誤ると、**気づかないうちに AI Credits を消費する**か、**有効化し忘れて検出が効いていない**かのどちらかに倒れる。**告知を読むときに「既定値はどちらか」を必ず書き出す**という手順の教材になる。
- **「予算アラートだけでは止まらない」は、従量課金 AI 機能の点検項目としてそのまま使える。** 停止条項（hard cap）があるか、どこで設定するかを、ツール採用時のチェックリストへ入れる。
- **検出モデルが「周辺コードを読む」点は、プライバシー観点の論点になる。** シークレット検出のためにコード文脈がモデルへ渡る構造であり、データレジデンシー要件のある組織は適用範囲を確認する必要がある。

## 原文確認

- 公式見出し: A purpose-built model for leaked secret detection
- 公式URL: https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection
- 原文全文は公式ページで確認してください。
