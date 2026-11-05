---
date: 2026-10-27
title: "Microsoft 365 Copilot release notes（2026-10-13〜10-27 分）"
service: "Microsoft Copilot"
source: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
fetched_at: 2026-11-02T09:45:00+09:00
published_at: 2026-10-27T00:00:00Z
date_precision: date-only
category: release
---

# 2026-10-27 Microsoft 365 Copilot release notes（2026-10-13〜10-27 分）

## 公式内容の日本語要約

隔週の release notes が **2026-10-27 付で公開**された（対象期間 2026-10-13〜10-27）。**3週連続で更新が無い状態から回復した**（前回見出しは 2026-10-06、対象期間 09-22〜10-06）。GA（Current Channel）扱いの14件が、Microsoft 365 Copilot / Copilot app / extensibility / OneNote / Outlook / PowerPoint / Teams に分かれて載っている。

**管理・統制に関わるもの**

- **カスタム MCP コネクタの作成と全社展開**（Web、Roadmap ID 501585）。管理者が **Microsoft 365 管理センターでカスタム MCP コネクタを作成し、Microsoft 365 全体へ展開できる。** 自社固有のデータを Copilot へ出す経路を、中央統制のまま追加できるようになった。
- **Work IQ API の usage-based billing**（Roadmap ID 559017）。**事前割当ライセンス無しでエージェントと各種機能を呼び出せるようになり、リクエストごとに呼び出したエージェント・モデルに基づいて課金される。** 従来は使用量にかかわらず割当ライセンスが必要だった。
- **Work IQ エンドポイントの Declarative Agent Access**（Roadmap ID 559019）。first-party とテナント定義の宣言的エージェントへ**プログラムからアクセス**でき、アプリから特定領域向けエージェントを広いワークフローの中で起動できる。
- **Copilot の新しい利用状況メトリクス**（Web、Roadmap ID 557981）。Copilot app / Edge / OneNote の操作と、Outlook / Word / Excel / PowerPoint の suggested reply、translate、coach、clean data などを Copilot Dashboard と Viva Insights の Advanced Analysis で追える。
- **コネクタの検索結果でのリッチなエンティティ表示**（Roadmap ID 502533）。プレーンテキストのリンクではなくエンティティカードになり、**データソースを明示することで誤クリックを減らす**ことを公式は security 上の改善として挙げている。
- **classic Outlook for Windows 内の Copilot 設定**（Roadmap ID 561491）。File メニューから設定でき、Outlook クライアント設定に紐づく既存のセキュリティポリシーを尊重する。

**機能追加**

- Learning Agent（Windows、Roadmap ID 490154）。個別最適化されたマイクロラーニングと構造化された学習パスを Copilot 内で提供する。
- Copilot Notebooks の Web リンク参照、Copilot app（iOS）の Notebooks 新デザイン、Notebooks のマルチモーダルキャプチャ。
- Researcher での Canva コネクタ利用。
- PowerPoint: 添付したデッキのスタイルを参照して新規プレゼンを作成、画像を添付・参照してプレゼンを作成。
- Teams: Queues アプリで通話後に Copilot Chat を利用。

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot（GA / Current Channel、プラットフォーム別）
- 管理者: MCP コネクタの作成・展開が管理センターの機能として入る。Work IQ はライセンス前提からの課金モデル変更
- 展開: safe deployment model により、テナント内の一部から段階的に広がる

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**MCP コネクタを管理センターの機能として提供した**点が重要で、GitHub Copilot の「GitHub 検証済み MCP サーバー」（10-28）と同じ週に、別ベンダーが「MCP の接続を中央で用意する」方向へ揃った。**Work IQ の usage-based billing は「ライセンスを割り当てる」から「使った分を払う」への転換**で、GitHub Enterprise への Copilot 同梱（AI クレジット無し・最初のリクエストから予算消費）と構図が同じ。両社が同じ週に同じ方向の課金変更を出しており、エージェント課金の見積もりモデルを作り直す必要がある。

## 原文確認

- 公式見出し: Microsoft 365 Copilot release notes — October 27, 2026（Updates released between October 13, 2026, and October 27, 2026）
- 公式URL: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
- 原文全文は公式ページで確認してください。
