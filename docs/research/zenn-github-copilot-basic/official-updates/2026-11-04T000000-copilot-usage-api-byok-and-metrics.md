---
date: 2026-11-04
title: "Copilot 使用状況メトリクス API が BYOK・コードレビュー詳細・テレメトリ欠落フラグを追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api
fetched_at: 2026-11-09T09:40:00+09:00
published_at: 2026-11-04
date_precision: date-only
category: enhancement
---

# 2026-11-04 Copilot 使用状況メトリクス API の3件の拡張

## 公式内容の日本語要約

窓内に使用状況メトリクス API の拡張が3件出た。いずれも enterprise / organization レポートが対象で、`View Copilot Metrics` 権限と Copilot usage metrics ポリシーが必要である。

**BYOK と enterprise custom models の分離**（2026-11-03）。従来 BYOK の利用は Copilot ホスト分の合計に混ざっていた。ローカル BYOK（開発者がクライアント側で設定した自分のプロバイダーキーや Ollama / Foundry Local / LM Studio / llama-server などのローカルモデル）は `used_local_byok`、`totals_by_local_byok`、`daily_active_local_byok_users` 等で見える。管理者が GitHub 設定で構成し GitHub 経由でルーティングされる enterprise custom models は、`totals_by_client[].totals_by_model[]` の `is_custom_enterprise_model` で判別する。**既存の合計値は変わらない**（BYOK はもともと計上済みで、その内訳が増えただけ）。

**コードレビュー詳細と addressed rate**（2026-11-05）。リポジトリ単位レポートの `repos-1-day` 行に `copilot_code_review` オブジェクトが付き、評価されたコメント数と対応されたコメント数から対応率を計算できる。深刻度、レビュー階層、コメント種別、カスタマイズ元での内訳と、**Copilot のレビュー後に人間からの変更要求が無いままマージされた PR の件数**も取れる。コメントはマージ日で計上し、bot が作成した PR は通常評価対象外。

**テレメトリとバージョン欠落のフラグ**（2026-11-05）。ユーザー単位に、その日クライアントのテレメトリが届いたかの `client_telemetry_present` と、IDE / 拡張が最低サポートバージョンを満たすかの `usage_metrics_requirements` が付いた。該当ユーザーの日次件数も enterprise / organization レポートに入る。

## できるようになったこと

- 自前キー・ローカルモデル・enterprise custom model の利用を Copilot ホスト分と切り分けて把握できる
- Copilot のレビュー指摘がどれだけ実際に直されたか（対応率）を測れる
- 「数字が薄いユーザー」がテレメトリ無効なのか旧バージョンなのかを区別できる

## 影響範囲

- 対象ユーザー: enterprise owner / billing manager、organization owner、`View Copilot Metrics` 権限を持つロール
- 対象プラン: Copilot Business / Enterprise 系（usage metrics ポリシー有効が前提）
- API / UI / 管理者機能: **数字の読み方に注意が要る。** ローカル BYOK はクライアントテレメトリ依存のため**下限値**（テレメトリ無効で過少計上、トークン数も一部プロバイダーが報告せず過少）。enterprise custom models はサーバー側観測のためこの制約はない。`null` は false や 0 ではなく「データなし」を意味し、テレメトリ欠落と旧バージョンの2つのカウントは**重複しうるので足し算してはいけない**。遡及適用（backfill）はなく、リリース前の日付には新フィールドが入らない

## 教材化メモ

- **「AI 利用の可視化」が、合計値から内訳と信頼区間の話へ移っている。** 3件すべてが「数が増えた」ではなく「**その数がどこまで信用できるか**」を足す変更である。`client_telemetry_present` は観測の欠落を観測可能にする仕組みで、**テレメトリ無効のユーザーも active には数えるが詳細は欠ける**という非対称を明示している。ダッシュボード設計を教えるときに、**欠測を 0 と区別して持つ**実例として使える。
- **`null` を false や 0 と同一視しない、2つのカウントを足さない**は、公式が明文で警告している読み方である。社内の集計スクリプトを書く側に効く注意で、そのまま演習問題にできる。
- **addressed rate は「AI のレビューが役に立っているか」を測ろうとする指標**だが、分母が「評価されたコメント」である点に注意が要る。指摘を増やせば分母が増える。**指標が行動を歪める**例として扱える。

## 原文確認

- 公式見出し: "BYOK and enterprise custom models in the Copilot usage API" / "Usage metrics API adds code review details and addressed rate" / "Usage metrics API flags telemetry and version gaps"
- 公式URL: https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api 、 https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate 、 https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps
- 原文全文は公式ページで確認してください。
