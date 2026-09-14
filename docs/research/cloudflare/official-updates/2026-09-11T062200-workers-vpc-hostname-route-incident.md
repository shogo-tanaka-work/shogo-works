---
date: 2026-09-11
title: "Workers VPC のホスト名ルート解決障害（解決済み）"
service: "Cloudflare Workers VPC"
product: "Workers"
source: https://www.cloudflarestatus.com/
fetched_at: 2026-09-12T09:20:00+09:00
published_at: 2026-09-11T06:22:00Z
date_precision: timestamp
category: incident
---

# 2026-09-11 Workers VPC ホスト名ルート解決障害

## 公式内容の日本語要約

Cloudflare Status に **Workers VPC のホスト名ルート解決に関する障害** が記録されました。発生は **2026-09-11T06:22Z**、解決は **09:38Z** で、継続時間は約3時間16分です。現在は Resolved です。

影響を受けたアカウントで、**Workers VPC がホスト名ルートを正しく解決できない** 状態が発生しました。接続失敗やルーティングエラーが起こりえた時間帯です。

**影響はホスト名ルートの解決に限定** されており、直接 IP を指定したルーティングと通常の Workers は影響を受けていません。

なお、別件の **Workers Cron Triggers の劣化**（2026-09-09T19:17Z 開始、Impact: Minor）は `Identified`（修正実装中）のまま **3日目** に入っています。

## 影響範囲

- 対象ユーザー: Workers VPC でホスト名ルートを使っている一部アカウント
- 対象プラン: 記載なし
- API / UI / 管理者機能: Workers VPC のルーティング

## 教材化メモ

- **短時間 incident のため記事化しない**（SKILL 規約）。ただし詳細メモには残し、追跡精度を落とさない。
- 「ホスト名ルートは壊れたが直接 IP ルーティングは無事」という **影響範囲の非対称性** は、可用性設計の教材材料になる。名前解決の層を挟むと障害点が1つ増える、という一般則の具体例。
- Cron Triggers の劣化が3日続いている件は、**`Identified` のまま長引くステータスをどう読むか** の例。ステータスページの状態遷移（Investigating / Identified / Monitoring / Resolved）と実際の復旧タイミングは一致しない、という運用上の注意点に接続できる。

## 原文確認

- 公式見出し: Workers VPC Hostname Route Resolution（Resolved）
- 公式URL: https://www.cloudflarestatus.com/
- 原文全文は公式ページで確認してください。
