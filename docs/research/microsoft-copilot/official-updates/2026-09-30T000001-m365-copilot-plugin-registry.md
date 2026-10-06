---
date: 2026-09-30
title: "Microsoft Copilot に plugin registry（プラグインの発見と統制を1か所へ）"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-the-plugin-registry---one-place-to-discover-and-govern-plugins-for-m/4559682
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-09-30T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-30 Microsoft Copilot の plugin registry

## 公式内容の日本語要約

Microsoft 365 Copilot Blog に「**Introducing the plugin registry — one place to discover and govern plugins for Microsoft Copilot**」が掲載された（2026-09-30）。**タイトルから、プラグインの発見と統制を1か所に集約する管理面が導入されたことが確認できる。**

**本文は取得できていない**（`techcommunity.microsoft.com` は WebFetch でタイトルのみ返却）。提供段階（preview / GA）、管理ロール、具体的な統制操作（許可 / ブロック / 承認 / データアクセス審査）、既存プラグインの既定の扱い、管理者の期限付き作業の有無は**本文未確認のため不明**である。

**同日に更新された一次ドキュメントが1本ある。** `learn.microsoft.com` の「Govern access, tools, and connections for plugins and agents」（`/microsoft-365/copilot/extensibility/manage`）が **2026-09-30T11:54Z に更新**されている。このページは「plugin registry」という名称は使っていないが、統制の対象を **plugin package / agent / skill or MCP server / connector package / connector connection / external service** の6種類に分け、それぞれの管理面を対応づける構成になっている。要点は次の2つである。

- **パッケージ単位の制御は、構成要素・接続・外部サービスまで自動では及ばない。** パッケージをブロックしても、外部アカウント・資格情報・consent の付与は取り消されない。
- **agent 用のツール（plugin / skill / MCP server / connector）は、それを参照する agent とは独立に制御できる**（Manage tools for agents）。

ページ末尾には、ロールアウト中は管理画面のラベルが変わりうる旨の注記がある。

## できるようになったこと

- プラグインの発見と統制を1か所で行う（詳細は本文未確認）

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot の管理者
- 対象プラン: 不明（本文未取得）
- API / UI / 管理者機能: Microsoft 365 admin center 系。**同日更新の learn ドキュメントで、ツールを agent と独立に制御できることと、パッケージ単位制御の及ばない範囲が明文化されている**

## 教材化メモ

- **「ブロックしても consent は残る」という境界が公式に明記された**点が、そのまま統制のチェックリストになる。AI ツールを止めるとき、(1) パッケージの可用性、(2) 構成要素（MCP server / connector）、(3) 接続と同期、(4) 外部サービスの consent と資格情報——の4層を別々に処理する必要がある。**1か所切れば止まる、という思い込みが最も危険**である。
- **MCP server が「agent と独立に制御する対象」として管理面に組み込まれた。** 同じ週に GitHub Copilot 側では MCP servers ポリシーが 2026-10-22 の既定有効化対象に入っており、**MCP の統制がベンダー横断で管理機能として実装されつつある**。社内の AI 統制台帳に MCP サーバーの行が必要になる。
- plugin registry 自体は**ドキュメント側に名称が現れていない**（窓終端時点）。同週のモデル追加と同じく、**blog が先、ドキュメントが後**という順序で、管理者が設計判断に使える情報が遅れて来る構造である。

## 原文確認

- 公式見出し: Introducing the plugin registry - one place to discover and govern plugins for Microsoft Copilot
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/introducing-the-plugin-registry---one-place-to-discover-and-govern-plugins-for-m/4559682
- 補助確認（同日更新の一次ドキュメント）: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/manage （2026-09-30T11:54Z 更新）
- **blog 本文は取得できていない**。原文は公式ページで確認してください。
