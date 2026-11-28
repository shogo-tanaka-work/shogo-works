---
date: 2026-11-17
title: "Microsoft 365 Copilot - リリースノート（2026-11-03〜11-17）: 組織カスタム属性の共有、Confluence の CQL フィルタ、Tableau コネクタ"
service: "Microsoft Copilot"
source: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
fetched_at: 2026-11-23T09:35:00+09:00
published_at: 2026-11-17
date_precision: date-only
category: enhancement
---

# Microsoft 365 Copilot - リリースノート 2026-11-17

## 公式内容の日本語要約

隔週公開の release notes が 2026-11-17 に出た。対象期間は 2026-11-03〜2026-11-17。GA（Microsoft 365 アプリの Current Channel）分で、テナント内の一部ユーザーから段階展開される。

**Microsoft 365 管理センター: 組織のカスタム属性を people experiences へ共有できるようになった（Web）**。Microsoft 365 Organizational Data Service に、選んだカスタム組織属性を Microsoft 365 people store へ共有する設定が入った。**共有したカスタム属性はテナント内の全ユーザーとゲストから見える。** 既定オフで、有効化には管理者の作業が必要。設定時に属性ごとの可視性を構成する。公式は有効化前に、社内のプライバシー・ガバナンス・データ共有要件を確認し、その属性を全ユーザーとゲストへ共有して差し支えないかを確かめるよう案内している。Organizational Data Service を使っていない、またはこの機能を有効にしない組織には変化がない。

**Copilot 拡張性: Confluence Cloud コネクタのクエリフィルタ（Roadmap ID 503571）**。既定では全ブログ・全ページを索引していたのを、スペース単位の include / exclude と、**CQL（Confluence Query Language）文字列による条件指定**で絞れるようになった（例: `lastModified >= "2024/12/31"`）。管理センターのコネクタ設定から行い、Preview results でサンプル値を確認できる。古い・対象外のコンテンツを Copilot の検索結果から外す用途。

**Copilot 拡張性: Tableau コネクタ**。Copilot コネクタ経由で Tableau のダッシュボードと可視化を探索・解釈できるようになった。**接続済みコンテンツへのアクセスは元システムが強制する権限に従う。** 管理センターでコネクタを構成し、Copilot へ自然言語で問い合わせる。

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot 利用者。管理者作業が前提の項目が中心
- 対象プラン: Microsoft 365 Copilot（Current Channel / Web）
- API / UI / 管理者機能: いずれも管理センター側の設定。カスタム属性共有は既定オフで、有効化するとゲストにも見える

## 教材化メモ

単独記事化はしない（週次ソースのため）。ガバナンスの題材として「カスタム属性の共有先にゲストが含まれる」点は重要で、属性の棚卸しを先に行う前提を添える。

## 原文確認

- 公式見出し: "Release Notes for Microsoft 365 Copilot" — November 17, 2026（Updates released between November 03, 2026, and November 17, 2026）
- 公式URL: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
- 原文全文は公式ページで確認してください。
