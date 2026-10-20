---
date: 2026-10-12
title: "GitHub Copilot のテレメトリに個人・端末の帰属を付けられる設定が追加（既定オフ）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture
fetched_at: 2026-10-19T09:40:00+09:00
published_at: 2026-10-12
date_precision: date-only
category: enhancement
---

# 2026-10-12 Copilot クライアントテレメトリの帰属と取得範囲の設定

## 公式内容の日本語要約

**enterprise 管理者が、managed settings の `telemetry` で Copilot の活動を個人へ紐付けられるようになった。** `telemetry.capture.identity` を有効にすると、OpenTelemetry データへ **Copilot アカウント名（現状は GitHub ログイン）・ローカル OS アカウント・ローカルマシン名**の3属性が付く。**既定は無効**で、既存の擬似匿名ユーザー識別子とは別扱いである。

**取得クラスが5つに分かれ、個別に制御できる。** プロンプト、レスポンス、ツール引数、ツール出力、ポリシー詳細の5種で、**すべて既定オフ**。managed settings の明示値は、ローカル設定・SDK 設定・環境変数を**上書きする**。旧 `captureContent` は5つの内容クラスの一括指定として機能するが、**identity は決して有効にしない**。

**公式は「監査用途に必要なクラスだけを有効にする」よう明記している。** 内容クラスを有効にするとソースコード、ファイル内容、コマンド、ツール結果、ワークスペース・ユーザープロファイルのパスが送られうるため、**送信先は承認済みのコレクションエンドポイントに限る**よう案内している。

対象クライアントは Copilot CLI、GitHub Copilot app、Agent Host を使う VS Code セッションである。発効日は示されておらず、告知日（2026-10-12）から利用できる。

## できるようになったこと

- Copilot の活動を個人名・端末名へ紐付けて OpenTelemetry へ出力できる（既定オフ）
- プロンプト / レスポンス / ツール引数 / ツール出力 / ポリシー詳細を個別に取得制御できる
- managed settings 側の値でローカル設定・環境変数を上書きできる

## 影響範囲

- 対象ユーザー: Copilot CLI / Copilot app / Agent Host 利用の VS Code セッション
- 対象プラン: 記載なし（enterprise managed settings 前提）
- API / UI / 管理者機能: 管理者機能（managed settings）、OpenTelemetry 出力

## 教材化メモ

- **「監視の粒度を上げる機能は、同時に個人情報の取り扱い判断を発生させる」**典型例。identity を入れると**誰がいつ何をしたかが個人名と端末名で残る**ため、労務・プライバシーの検討が必要になる。技術設定の前に社内合意が要る、という順序を教えられる。
- **既定オフ・上書き優先という設計**は、ガバナンス機能の作り方として参考になる。ローカルで緩められないことが統制の前提である。
- 同週（10-13）の `forceRemoteSettingsRefresh` と合わせると、**「managed settings の値を確実に効かせる」方向の整備が2件同時に出ている**ことが見える。

## 原文確認

- 公式見出し: Client telemetry user attribution and configurable capture
- 公式URL: https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture
- 原文全文は公式ページで確認してください。
