---
date: 2026-09-15
title: "Salesforce in Claude（ベータ）— 営業担当者向け37スキルと Salesforce / Slack の2コネクタ"
service: "Claude"
source: https://claude.com/blog/salesforce-in-claude
fetched_at: 2026-09-16T09:02:00+09:00
published_at: 2026-09-15
date_precision: date-only
category: release
---

# 2026-09-15 Salesforce in Claude（ベータ）

## 公式内容の日本語要約

Anthropic は 2026-09-15、**Salesforce in Claude** をベータとして公開した。Salesforce のデータを Claude から直接扱えるプラグインで、`support.claude.com` の Release Notes にも同日付で掲載されている。

中身は **営業担当者（AE）向けの37スキル**と**2つのコネクタ**である。スキルは、アカウント調査、商談前準備、パイプラインレビューと予測、商談スコアリングとクローズ計画、面談後フォローと CRM 更新をカバーする。コネクタは、Salesforce コネクタ（データ読み取りと、アカウント要約・商談更新・通話記録などのアクション実行）と、Slack コネクタ（商談チャネルの要約、アカウントチームのスレッド読み書き）の2つ。

**管理者は AgentExchange 経由で組織全体の Salesforce 接続を一度だけ行い**、どのグループへ配布するかを選ぶ。利用者は自分の Salesforce 資格情報でサインインし、**Claude は既存の権限レベルをそのまま尊重する**。Salesforce 側が引き続き system of record であり、**既定では変更を加える前に営業担当者の承認を求める**。Team / Enterprise プランでは既定で組織データをモデル学習に使わない。

提供対象は**すべての有料プラン（Team / Enterprise）**。Salesforce MCP はマーケットプレイス経由で提供される。個別価格の開示はない。

## できるようになったこと

- Salesforce のアカウント・商談・パイプラインを Claude から直接参照し、更新まで行える
- 37スキルで、商談前準備からクローズ計画・CRM 更新までの定型作業を手順として呼び出せる
- Slack の商談チャネルとアカウントチームのスレッドを併せて読み書きできる
- 管理者が AgentExchange で組織単位に一度接続し、グループ単位で配布できる

## 影響範囲

- 対象ユーザー: 営業担当者（AE）、営業管理者、Salesforce 管理者
- 対象プラン: すべての有料プラン（Team / Enterprise）。ベータ
- API / UI / 管理者機能: プラグイン（UI）、AgentExchange 経由の組織接続（管理者）、Salesforce MCP（マーケットプレイス）

教材化メモ: src/content/ai-news-notes/claude/salesforce-in-claude.mdx

## 原文確認

- 公式見出し: Bringing Salesforce into Claude
- 公式URL: https://claude.com/blog/salesforce-in-claude
- 併載: https://support.claude.com/en/articles/12138966-release-notes （September 15, 2026）
- 原文全文は公式ページで確認してください。
