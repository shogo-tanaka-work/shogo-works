---
title: "Google Vault が Gemini in Workspace の会話を絞り込んでエクスポート可能に — 対象者と期間で指定、保持ルールと訴訟ホールドは今後"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-10-22
sourceUrl: "http://workspaceupdates.googleblog.com/2026/10/google-vault-now-supports-filtered-exports-for-Gemini-in-Workspace.html"
summary: "Google Workspace Updates が 2026-10-22、Google Vault の eDiscovery で Gemini in Workspace の会話を絞り込んでエクスポートできるようになったと告知した。管理者は Vault の検索タブでサービスに Gemini in Workspace を選び、対象者（ユーザー、または最大5,000人の組織部門）と期間をタイムゾーン付きで指定して書き出す。形式は JSON で、利用者のプロンプト、AI の応答、生成された画像などの添付、参照した Workspace ファイルへのリンク、引用が含まれる。対象アプリは Gmail、Drive、Docs、Sheets、Slides、Meet で、会話履歴がオンの間に作られた会話が対象になる。Gemini in Workspace の保持ルールと訴訟ホールドは今後のリリースで追加され、Vault API は UI の提供から14日以内に対応する予定。"
description: "Vault で Gemini in Workspace の会話を対象者と期間で絞って JSON エクスポート。保持ルールと訴訟ホールドは今後。"
impact: "AI の利用ログを監査や調査で提出する必要がある組織が、Vault から取り出せるようになる。ただし保持ルールと訴訟ホールドは未対応のため、現時点では保全の運用に穴が残る。"
tags: ["gemini", "google-vault", "eDiscovery", "監査", "管理者"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Google Workspace Updates は 2026-10-22、**Google Vault** の eDiscovery で、**Gemini in Workspace の会話を絞り込んでエクスポート**できるようになったと告知しました。Rapid Release と Scheduled Release のドメインで、すでに利用できます。

## 何が変わったか

- **手順**: Vault の検索タブで、サービスのドロップダウンから「Gemini in Workspace」を選び、フィルタを入力して「Export」
- **絞り込み**: 対象者（ユーザー、または最大5,000人の組織部門）と、期間（タイムゾーン選択あり）
- **形式と内容**: JSON。メタデータは Gemini アプリの会話形式に揃う。プロンプト、AI の応答、生成された画像などの添付、参照した Workspace ファイルへのリンク、引用を含む
- **対象アプリ**: Gmail、Drive、Docs、Sheets、Slides、Meet。会話履歴がオンの間に作られた会話が対象
- **今後**: 保持ルールと訴訟ホールドは今後のリリース。Vault API は UI の提供から14日以内
- **対象エディション**: Business Plus、Frontline Standard / Plus、Enterprise Essentials Plus、Enterprise Standard / Plus、Education Fundamentals / Standard / Plus。その他は Vault アドオン
- **保存の制御**: 組織部門単位の会話履歴と削除の設定で、手動削除の禁止や、無操作後の自動削除を決められる。利用者向けの設定はない

## 業務インパクト（一般企業向け）

**AI の利用についての調査や監査の依頼に、答えられる手段が増えます。** 「誰が、いつ、何を Gemini に入力したか」を、特定の担当者や部門、期間で取り出せます。内部統制や情報漏えいの調査で使えます。

ただし**保持ルールと訴訟ホールドが未対応**です。会話履歴の削除設定が緩いと、必要になった時点で記録が残っていない可能性があります。法務部門と相談し、組織部門ごとの履歴と削除の設定を先に見直してください。

## 副業・個人活用視点

**Workspace の管理を請け負う場合の、設定見直しの提案材料になります。** クライアントの Gemini 利用が増えているなら、会話履歴の削除設定と Vault の対象エディションを確認し、監査に備えた構成を提案できます。

個人のアカウントでは Vault は使いません。この更新は管理者向けの機能です。

## 情報源の制約

本記事は Workspace Updates Blog の個別ポストを根拠にしています。Vault API の仕様、保持ルールと訴訟ホールドの提供時期は確認できていません。
