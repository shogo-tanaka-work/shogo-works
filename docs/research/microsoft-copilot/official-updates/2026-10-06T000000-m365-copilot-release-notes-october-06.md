---
date: 2026-10-06
title: "Microsoft 365 Copilot release notes（09-22〜10-06 の2週間分）— PowerPoint のカスタムスキル、Copilot connectors の統制、Cowork の採用分析"
service: "Microsoft Copilot"
source: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
fetched_at: 2026-10-12T09:55:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: release
---

# 2026-10-06 Microsoft 365 Copilot release notes

## 公式内容の日本語要約

`learn.microsoft.com` の release notes に **2026-10-06 の見出し**が追加された。対象期間は本文冒頭に「**Updates released between September 22, 2026, and October 06, 2026**」と記載されている。**隔週公開の構造どおりで、前回見出しは 2026-09-23 である。**

掲載された更新は製品区分ごとに次のとおり。**個別の公開日は示されず、見出しの日付のみ**である。

- **Microsoft 365 Copilot**: 検索とチャットのシームレスな統合（Seamless Search and Chat Integration）、別の回答を得るための応答の再生成（Regenerate response）
- **Microsoft 365 Copilot extensibility**: **Copilot connectors のクエリ文字列と利用者 ID のマッピング規則を編集できる**
- **Microsoft 365 SharePoint**: 管理センターで「Everyone except external user」権限の詳細レポート
- **PowerPoint**: **Copilot in PowerPoint でカスタムスキルを作成できる**、プレゼンテーション作成時に **SharePoint ライブラリと OneDrive フォルダ内のファイルを参照できる**
- **Viva Insights**: **Copilot Analytics で Cowork の採用状況と効果**を見られる

**プラン・ライセンス区分の明示は本ページには無い。**

## できるようになったこと

- Copilot in PowerPoint でカスタムスキルを作れる
- Copilot connectors のクエリ文字列と ID マッピングを編集できる
- Copilot Analytics で Cowork の採用と効果を測れる
- SharePoint 管理センターで外部ユーザー除外権限の詳細レポートを取れる

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot 利用者と、テナント管理者
- 対象プラン: ページに明示なし
- API / UI / 管理者機能: Copilot connectors の設定、SharePoint 管理センター、Viva Insights（Copilot Analytics）

## 教材化メモ

- **`Copilot connectors` のクエリ文字列と利用者 ID マッピングの編集**は、前週に記録した「統制の対象を6種類（plugin package / agent / skill or MCP server / connector package / connector connection / external service）に分けた」統制ドキュメントの、**実装側の続きである。** connector の接続条件を後から変えられるということは、**台帳に「どの connector がどの ID で何を引くか」の行が必要**になる。
- **Copilot Analytics の Cowork 採用分析**は、前週に記録した **Copilot Credits の従量課金（Q4 CY2026 展開）**と対で読む必要がある。**採用状況が見えるようになるのは、課金が従量へ移る直前である。** 使用量を測る手段が課金の変更とセットで出てくるのは、コスト管理の準備としては筋が通っている。
- **PowerPoint のカスタムスキルは、業務側がスキルを自作する入口である。** 情シスの統制対象が「アプリ」から「アプリ内で業務部門が作ったスキル」へ降りてくる。
- **release notes が隔週・2週間分まとめという構造は、本 Skill が週次で巡回する前提そのものの根拠である。** 日次で見ても大半の日が「更新なし」になる。

## 原文確認

- 公式見出し: October 06, 2026（Updates released between September 22, 2026, and October 06, 2026）
- 公式URL: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
- 原文全文は公式ページで確認してください。
