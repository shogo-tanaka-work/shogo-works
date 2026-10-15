---
date: 2026-10-14
title: "Managed Agents の scheduled deployments が Claude Platform on AWS でも利用可能に"
service: "Claude Managed Agents"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-10-15T09:20:00+09:00
published_date: 2026-10-14
date_precision: date-only
category: rollout
---

# 2026-10-14 Managed Agents: scheduled deployments が Claude Platform on AWS へ

## 公式内容の日本語要約

Claude Platform の API release notes に、**Managed Agents の scheduled deployments が Claude Platform on AWS で利用可能になった**と1行で記載された。

scheduled deployments 自体は既出の機能である。**cron スケジュールで Managed Agent を走らせ、実行ごとに新しいセッションを開始する**仕組みで、Deployments API から pause / resume / archive と手動実行ができる。エージェントを archive すると deployment も archive され、セッション作成エラーの一部では deployment が自動的に pause する。

**今回の変更は提供面の拡大だけである。** Claude Platform on AWS は AWS アカウント内で動く提供形態で、IAM 認証・CloudTrail 監査ログ・AWS 一括請求が使える。**「新機能とベータはネイティブの Claude API と同日に AWS 側でも使える」**という方針が公式に示されており、今回の記載はその実例にあたる。

**release notes の記載は1行で、AWS 側固有の制約・上限・前提条件は示されていない。** 本日の OpenTelemetry エクスポートの記載（同じ 10-14 の release notes）とは情報量の差が大きい。

## できるようになったこと

- Claude Platform on AWS 上の Managed Agents を cron スケジュールで定期実行できる
- AWS アカウント内で動く構成のまま、定期実行の管理（pause / resume / archive / 手動実行）を Deployments API から行える

## 影響範囲

- 対象ユーザー: Claude Platform on AWS で Managed Agents を使う組織（Managed Agents はベータ）
- 対象プラン: Claude Platform on AWS
- API / UI / 管理者機能: Deployments API
- AWS 側固有の上限・料金・リージョン制約は release notes に記載がない

## 教材化メモ

- **記事化は見送った（スコア5点）。** 既出機能の提供面拡大で、公式情報が release notes の1行しかない。**同じ日の OpenTelemetry エクスポートと並べると、公式情報の厚みの差がそのままスコア差になる**という良い対比例である。
- **教材で使うなら「同日提供」という方針そのものを扱う。** Claude Platform on AWS は「新機能とベータがネイティブ API と同日に来る」と公式が明言している提供形態である。**クラウド提供版が本家に遅れるのが普通だった前提が崩れている**点は、調達・アーキテクチャ選定の判断材料になる。機能単体より方針のほうが寿命が長い。
- **cron で動くエージェントは、監視とセットで設計する必要がある。** 本日同時に OpenTelemetry エクスポートが来たのは偶然だが、**「定期実行するなら、誰も見ていない時間の挙動をトレースで残す」**という組み合わせは実務でそのまま効く。2つを別々の更新として扱わず、1つの設計論として教えると価値が出る。

## 原文確認

- 公式見出し: October 14, 2026 — Managed Agents scheduled deployments are now available on Claude Platform on AWS
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 機能仕様: https://platform.claude.com/docs/en/managed-agents/scheduled-deployments
- 原文全文は公式ページで確認してください。
