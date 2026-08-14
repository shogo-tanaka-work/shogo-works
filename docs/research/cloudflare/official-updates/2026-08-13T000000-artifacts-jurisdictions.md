---
date: 2026-08-13
title: "Artifacts がデータローカライゼーションに対応（EU / US の管轄指定）"
service: "Cloudflare"
product: "Artifacts"
source: https://developers.cloudflare.com/changelog/post/2026-08-13-artifacts-jurisdictions/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-13-artifacts-jurisdictions/
fetched_at: 2026-08-14T08:56:00+09:00
published_at: 2026-08-13
date_precision: date-only
category: enhancement
---

# 2026-08-13 Cloudflare Artifacts の管轄指定

## 公式内容の日本語要約

Cloudflare Artifacts（リポジトリデータの保存・処理を担う開発者プラットフォーム製品）が、データローカライゼーションに対応した。リポジトリデータを保存・処理する場所として、**EU または US を排他的に指定**できる。

管轄の指定は**ネームスペース作成時に行い、後から変更できない**。作成 API で jurisdiction パラメータを渡す形で、省略した場合は制限なしのネームスペースになる。ネームスペース配下の各リポジトリは、その管轄設定を自動的に継承する。

規制対応やデータ主権の要件があるデプロイを想定した機能である。

## できるようになったこと

- Artifacts のネームスペース単位で保存・処理先を EU または US に限定できる
- ネームスペース配下のリポジトリが管轄設定を継承する

## 影響範囲

- 対象ユーザー: Cloudflare Artifacts の利用者、特に EU / US のデータ所在要件がある組織
- 対象プラン: 記載なし
- API / UI / 管理者機能: ネームスペース作成 API（jurisdiction パラメータ）

## 教材化メモ

- **「後から変えられない設定」を扱う教材の実例**として使える。管轄はネームスペース作成時にしか指定できず、変更不可である。データ所在の要件は導入後に判明することが多いため、この種の不可逆な初期設定は、設計フェーズのチェックリストに載せるべき項目の典型になる。
- 省略時が「制限なし」である点も重要。**明示しない限り制約がかからない既定値**は、コンプライアンス要件のある組織では事故のもとになる。安全側に倒す設計と、既定値の読み方を教える題材にできる。
- Cloudflare の AI・エージェント系教材で直接使う場面は少ないが、Workers / R2 など他製品にも同種の jurisdiction 設定があるため、データローカライゼーションを横断的に説明する節を作るなら材料の一つになる。

## 原文確認

- 公式見出し: Artifacts - Data localization support for Artifacts
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-13-artifacts-jurisdictions/
- 原文全文は公式ページで確認してください。
