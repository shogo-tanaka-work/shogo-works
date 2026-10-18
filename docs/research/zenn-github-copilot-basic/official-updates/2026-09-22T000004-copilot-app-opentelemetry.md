---
date: 2026-09-22
title: "GitHub Copilot app の OpenTelemetry 出力を managed-settings.json で集中設定。プロンプト・応答は既定で除外"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-22
date_precision: date-only
category: release
---

# 2026-09-22 Copilot app の OpenTelemetry

## 公式内容の日本語要約

GitHub Copilot app のエージェント活動を **OpenTelemetry で外部へ出力**できるようになった。出力対象は **AI モデルへのリクエストと、エージェントが使ったツール**で、セッションの流れとエージェントの実行ステップを追跡できる。

**設定は企業の `managed-settings.json` の `telemetry` プロパティで行う。** 出力の有効化と受信エンドポイントを管理者側で指定する形であり、**開発者ごとの設定ではなく集中管理**である。

**プロンプトと応答の内容は既定で除外される。** 公式告知は、有効化前に組織の content-capture 設定を確認するよう促している。**つまり内容を含める設定も存在しうる**という読み方になる。

## できるようになったこと

- エージェントのモデルリクエストとツール利用を OpenTelemetry で外部エンドポイントへ出力
- 企業の `managed-settings.json` で出力先と有効化を集中設定

## 影響範囲

- 対象ユーザー: GitHub Copilot app の利用者と、その組織の管理者
- 対象プラン: enterprise-managed settings を使える構成。公式告知はプラン範囲を明記していない
- API / UI / 管理者機能: `managed-settings.json` の `telemetry` プロパティ

## 教材化メモ

- **「プロンプト・応答は既定で除外」という既定値の置き方**が要点。監査のためにテレメトリを入れる動機と、入力内容を外へ出さない要請は衝突する。**既定を安全側に置き、含める場合は明示的な設定を要る形にした**設計として説明できる。
- **集中設定であること**が情シスにとっての実質的な価値。開発者に依頼して回る運用では抜けが出る。**managed settings で配る／検証する**という一連の運用（09-25 の設定バリデータとセット）で扱いたい。

## 原文確認

- 公式見出し: OpenTelemetry in the GitHub Copilot app
- 公式URL: https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app
- 原文全文は公式ページで確認してください。
