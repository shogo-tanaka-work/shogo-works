---
date: 2026-09-23
title: "Cursor に Rollouts と Security Review を追加。Teams / Enterprise 向け、automations タブから有効化"
service: "Cursor"
source: https://cursor.com/changelog/rollouts-and-security-reviewer
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-23
date_precision: date-only
category: release
---

# 2026-09-23 Cursor の Rollouts / Security Review

## 公式内容の日本語要約

Cursor が **Rollouts** と **Security Review** という2つの自動化ボットを公開した。**Teams と Enterprise プランで本日から利用可能**で、**automations タブから有効化**する。

**Rollouts はデプロイ後の健全性を追う。** PR に紐づき、リスクと計測の欠落を洗い出した監視プランを生成する。**その変更のコミットに対する deploy イベントで起動し、ログ・メトリクス・トレースに対してプランを実行する。** 結果は環境ごとに **verified healthy / regression detected / inconclusive** の3値で報告される。regression を検出すると作成者へ通知し、**revert PR を作るか、cloud agent へ修正をエスカレーション**できる。

**Security Review は PR ごとに脆弱性を探す。** **PR に1つのレビューコメントを投稿**し、**悪用可能なバグ**を報告する。検出対象は **インジェクション（SQL / コマンド / テンプレート）、認証・認可のバイパス、ソース内のシークレット、SSRF、未検証のリダイレクト、安全でないデシリアライゼーション、依存ライブラリの脆弱性**である。各指摘には**深刻度、攻撃経路、修正案**が付く。

**公開から10日間、Teams に約50、Enterprise に約500の無償クレジット**が付与される。

## できるようになったこと

- Rollouts でデプロイ後の健全性を環境ごとに判定し、regression 時に revert PR を作成 / cloud agent へエスカレーション
- Security Review で PR ごとに悪用可能な脆弱性を検出（深刻度・攻撃経路・修正案つき）

## 影響範囲

- 対象ユーザー: Cursor の Teams / Enterprise 利用者
- 対象プラン: Teams / Enterprise
- API / UI / 管理者機能: automations タブでの有効化。Rollouts はログ・メトリクス・トレースへの接続が前提

## 教材化メモ

- **「悪用可能なバグ」に絞る**という設計方針が要点。静的解析は指摘の量で信頼を失いやすい。**exploitable かどうかで絞り、攻撃経路を添える**のは、**指摘を読んでもらうための設計**である。自社でレビュー自動化を入れるときの基準として転用できる。
- **Rollouts が「inconclusive」を返す**点が実務的に誠実である。判定できないときに healthy と言わない。**3値にすることで、計測が足りない領域が可視化される。** 監視の穴を見つける道具としても働く。
- **同週に GitHub Copilot も agentic autofix × Copilot Memory（09-25）を出しており、「PR にAIがレビューを付ける」領域の競合が同時に動いている。** 選定の観点は検出精度だけでなく、**既存の CI / 権限・予算の統制へどう載るか**になる。

## 原文確認

- 公式見出し: Rollouts and Security Review
- 公式URL: https://cursor.com/changelog/rollouts-and-security-reviewer
- 原文全文は公式ページで確認してください。
