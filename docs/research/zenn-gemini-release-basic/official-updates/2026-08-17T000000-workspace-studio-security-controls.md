---
date: 2026-08-17
title: "Workspace Studio に企業向けセキュリティ制御を追加、ユーザーをまたぐ自動化が可能に"
service: "Google Workspace / Workspace Studio"
source: https://workspaceupdates.googleblog.com/2026/08/new-enterprise-security-controls-for-Workspace-Studio-enable-expanded-collaboration-use-cases.html
fetched_at: 2026-08-18T08:15:00+09:00
published_at: 2026-08-17
date_precision: date-only
rollout_date: 2026-08-20
category: release
---

# 2026-08-17 Workspace Studio の企業向けセキュリティ制御

## 公式内容の日本語要約

Workspace Studio が**ユーザーをまたぐ協調（cross-user collaboration）に対応**した。これまで下書きの作成までだったフローが、**メール送信のような実際のアクションを自律実行**できるようになる。それに伴い、企業が制御するための機構が6系統まとめて入った。

1. **エージェント ID**: フローは最小権限で実行され、監査可能な固有 ID を持つ。
2. **ID 帰属（beta）**: アクションをフローの ID で見せるか、オーナーの ID で見せるかを管理者が選べる。
3. **監査・可観測性**: 設定変更と実行イベントが、フローの文脈付きで監査ログに残る。
4. **エージェントアクセス管理**: 管理者ダッシュボードからフローを停止したり、特定の OAuth スコープを取り消したりできる。セキュリティ調査ツールと連携する。
5. **管理設定と human-in-the-loop**: ステップ種別・Gemini アクセス・webhook 連携を個別に無効化できる。外部へのデータ共有にユーザー確認を必須化できる。
6. **ランタイム保護**: Gemini アクセスと Studio フローの両方に、内容条件とラベルに基づく DLP を適用できる。

**管理者側の作業が発生する更新**である。アクセス管理ダッシュボードの設定、ID 帰属の方針決め、機微なステップへの承認必須化、DLP ポリシーの適用が必要になる。

## できるようになったこと

- Workspace Studio のフローがユーザーをまたいでアクションを自律実行
- フロー単位の最小権限実行と監査可能な固有 ID
- 管理者によるフロー停止・OAuth スコープ取り消し
- ステップ種別 / Gemini アクセス / webhook の個別無効化、外部共有への確認必須化
- Gemini アクセスと Studio フローへの DLP 適用

## 影響範囲

- 対象ユーザー: 管理者（設定）とエンドユーザー（フロー実行）
- 対象プラン: Business Starter / Standard / Plus、Enterprise Starter / Standard / Plus、Education Fundamentals / Standard / Plus、Google AI Pro for Education、Google AI Ultra for Business。**DLP 機能は Frontline / Enterprise Standard 以上と Education 系に限定**
- ロールアウト: 管理コンソール設定は 2026-08-17 から（最大3日）。エンドユーザー機能は **Rapid 2026-08-20（3日）/ Scheduled 2026-09-01（15日）**。ID 帰属は Rapid 2026-08-17 / Scheduled 2026-08-24 から（7〜15日）

教材化メモ: src/content/ai-news-notes/gemini/workspace-studio-enterprise-security-controls.mdx

## 原文確認

- 公式見出し: New enterprise security controls for Workspace Studio enable expanded collaboration use cases
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/new-enterprise-security-controls-for-Workspace-Studio-enable-expanded-collaboration-use-cases.html
- 原文全文は公式ページで確認してください。
