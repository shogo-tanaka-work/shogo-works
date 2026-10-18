---
date: 2026-10-01
title: "Cloudflare OS のマネージド版が発表、ウェイトリスト受付開始"
service: "Cloudflare OS"
product: "Cloudflare OS, Workers, AI Gateway"
source: https://blog.cloudflare.com/managed-cloudflare-os/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: release
---

# 2026-10-01 Cloudflare OS マネージド版

## 公式内容の日本語要約

2026-08-05 に OSS として公開された **Cloudflare OS**（社内業務向けのエージェントワークスペース）に、**Cloudflare が運用まで引き受けるマネージド版**が発表された。

「マネージド」の範囲は、**デプロイ・運用・保守**である。組織側が決めるのは**アクセス制御、有効にする組織のスキル・コンテキスト、エージェントが到達できるシステム**で、技術基盤は Cloudflare が持つ。ダッシュボードから**独自ドメイン、アクセスポリシー、AI Gateway を選んで数クリックで起動**できるとしている。

機能面では、**Git リポジトリ連携**（コードベースの探索、バグ修正、PR 作成）、**Google Workspace 連携**（Gmail / Drive / Sheets / Calendar）、**エクスポート**（Excel / CSV / PDF / Markdown / HTML。Word と PowerPoint は近日）、**エージェント実行と手動実行を切り替えられるカスタムツール**が挙げられている。

**提供状態は「OSS は自己デプロイで利用可能、マネージド版はウェイトリスト」**である。価格と提供開始日は本発表では示されていない。

## できるようになったこと

- マネージド版のウェイトリストへの登録（利用開始はまだできない）
- （OSS 版として）Git / Google Workspace 連携とエクスポートの利用

## 影響範囲

- 対象ユーザー: 社内業務の自動化を検討する組織
- 対象プラン: **未定（ウェイトリスト）**
- API / UI / 管理者機能: ダッシュボードからの起動、アクセスポリシー、AI Gateway 選択

## 教材化メモ

- **OSS を先に出し、運用負担を引き受けるマネージド版を後から出す**という順序。2026-08-05 の OSS 公開から約2か月での発表であり、**「自己デプロイで評価 → マネージドで本番」という導線**が設計されている。自社プロダクトの提供形態を考える際の型として使える。
- **ウェイトリスト段階の製品を評価する作法。** 価格も提供日も無い段階では意思決定材料にならないため、**登録だけして判断は保留する**のが合理的。この区別（「情報として知る」と「導入を検討する」）を混同すると、検討の工数が無駄になる。
- **マネージド化で手放すもの**は運用だが、同時に**どのデータがどこを通るかの可視性**も下がる。自己デプロイとマネージドの選択は、運用コストとデータ統制のトレードオフとして整理できる。

## 原文確認

- 公式見出し: Cloudflare OS: your company's agent workspace, managed for you
- 公式URL: https://blog.cloudflare.com/managed-cloudflare-os/
- 既報: 2026-08-05 の OSS 公開（`src/content/ai-news/cloudflare/cloudflare-os.md`）
- 原文全文は公式ページで確認してください。
