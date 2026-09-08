---
date: 2026-09-01
title: "xAI — `grok-imagine-image-quality` を 2026-11-02 に退役（残り56日）"
service: "xAI / Grok"
source: https://docs.x.ai/docs/release-notes
fetched_at: 2026-09-07T09:55:00+09:00
published_at: 2026-09-01
date_precision: date-only
category: incident
---

# 2026-09 xAI `grok-imagine-image-quality` の退役予告

## 公式内容の日本語要約

xAI の API リリースノートに、**`grok-imagine-image-quality` を 2026-11-02 に退役する**という告知が「September」節の先頭項目として掲載された。本サマリー作成日（2026-09-07）時点で**残り56日**。

退役後、当該 slug へのリクエストは **`grok-imagine-image-2.0` が `quality` を `low` に設定した状態で処理される**。**リクエスト・レスポンスの形は変わらず、1枚あたりの単価は下がる。** `grok-imagine-image`（1.0）は影響を受けない。公式は移行ガイドを案内している。

**日付の精度に注意。** `docs.x.ai/docs/release-notes` は月単位の見出し（`## September`）で構成されており、**個々のエントリに公開日が入っていない。** 本件が窓内に掲載されたものかは確定できないが、前週サマリー作成時点（2026-08-31）では September 節自体が存在しなかったため、**窓内に追加されたものとして記録する。** `published_at` は月内の最初の日を便宜的に置いた `date-only` 値である。

## できるようになったこと

- （退役予告。新機能なし）

## 影響範囲

- 対象ユーザー: `grok-imagine-image-quality` を呼んでいる API 利用者
- 対象プラン: xAI API
- API / UI / 管理者機能: 画像生成エンドポイントのモデル slug

## 教材化メモ

- **退役後もリクエストが失敗しない**という設計が特徴的である。slug は生き続け、**中身が `grok-imagine-image-2.0` の `quality: low` に置き換わる。** エラーで気づく退役より親切に見えるが、**実務上はむしろ危ない**——**呼び出しは成功し続けるのに、出力の品質が静かに変わる。** 監視でエラー率を見ていても検知できない。
- **単価が下がる**点も、コスト監視での検知を難しくする。「安くなった」は普通アラートを上げない。**仕様変更が指標の悪化として現れない類の変更**であり、**期限を台帳で管理する以外に検知手段がない。**
- 対比として、同じ週の GitHub Copilot のモデル廃止は**選択肢から消える**形であり、こちらは気づける。**同じ「退役」でも、静かに置き換わるものと、明示的に消えるものがある**——この区別は、ベンダー告知を読むときの実用的な観点になる。

## 原文確認

- 公式見出し: grok-imagine-image-quality retirement on November 2
- 公式URL: https://docs.x.ai/docs/release-notes
- 取得制約: 当該リリースノートは月単位の見出しのみで、エントリ個別の日付が無い。日付精度は `date-only`
- 原文全文は公式ページで確認してください。
