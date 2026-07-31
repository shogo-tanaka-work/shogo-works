---
date: 2026-07-30
title: "Gemini Spark が Chrome と統合、ログイン済みアカウントと保存パスワードを使った代行操作に対応"
service: "Gemini"
source: https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/
fetched_at: 2026-07-31T11:55:00+09:00
published_at: 2026-07-30
date_precision: date-only
category: release
---

# 2026-07-30 Gemini Spark × Chrome 統合

## 公式内容の日本語要約

Google の常時稼働型エージェント Gemini Spark が Chrome と直接統合された。ユーザーの許可のもと、デバイス上のデスクトップ Chrome を使い、ログイン済みのアカウントと保存されたパスワードを利用して Web 上の作業を代行する。公式が挙げている例は、保存済みの物件の内見予約、航空券の選択肢の調査といった「面倒な Web の用事」。Spark は今年前半に Gemini in Chrome 向けに導入された auto browse 機能を利用する。

安全面では、プロンプトインジェクション攻撃に対する保護が組み込まれている。加えて決済のような機微な操作についてはユーザーの確認を必要とし、必要なときには制御をユーザーへ戻す設計になっている。

提供はまず米国から開始し、その後の拡大が予定されている。あわせて Google AI Pro の加入者向けに、160を超える国と地域で Gemini Spark が利用可能になった。

## できるようになったこと

- Gemini Spark がデスクトップ Chrome を操作し、ログイン済みアカウントと保存パスワードを使って Web 作業を代行できる
- auto browse による自動的なページ遷移・操作
- 決済など機微な操作ではユーザー確認を挟む
- プロンプトインジェクション対策が組み込まれている
- Google AI Pro 加入者向けに160超の国と地域で Gemini Spark が利用可能に

## 影響範囲

- 対象ユーザー: Gemini Spark 利用者（Chrome 統合は米国先行）
- 対象プラン: Google AI Pro（提供国拡大の対象）、Ultra
- API / UI / 管理者機能: Chrome ブラウザ連携。デバイス上の Chrome プロファイルを利用

## 教材化メモ

- 「ログイン済みセッションと保存パスワードを AI に使わせる」構成は、エージェントの権限設計として最も踏み込んだ部類。何が委譲されているのかを説明する教材素材として強い
- プロンプトインジェクション保護が明示されている点は、Web を自動操作するエージェントの主要な攻撃面がどこかを説明する導入に使える
- 「機微な操作ではユーザーへ制御を戻す」は human-in-the-loop の実装例。fully autonomous ではない設計の実例として参照できる
- 業務端末の Chrome プロファイルで動く前提なので、企業利用では業務アカウントのセッションが代行操作の対象になる点が論点になる

## 原文確認

- 公式見出し: Gemini Spark: new Chrome browsing integration
- 公式URL: https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/
- 原文全文は公式ページで確認してください。
