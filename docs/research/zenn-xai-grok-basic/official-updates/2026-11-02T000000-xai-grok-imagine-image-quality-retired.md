---
date: 2026-11-02
title: "grok-imagine-image-quality / -pro が退役、grok-imagine-image-2.0-low へ振り替え"
service: "xAI / Grok"
source: https://docs.x.ai/docs/release-notes
fetched_at: 2026-11-09T10:00:00+09:00
published_at: 2026-11-02
date_precision: date-only
category: incident
---

# 2026-11-02 xAI: grok-imagine-image-quality の退役が発効

## 公式内容の日本語要約

2026-09 に予告されていた退役が **2026-11-02 に発効**した。`grok-imagine-image-quality` と `grok-imagine-image-pro` 宛てのリクエストは、**`grok-imagine-image-2.0-low`（`grok-imagine-image-2.0` の `quality` を `low` にしたもの）で処理される**ようになった。

公式は「**リクエスト側の変更は不要**」としている。リクエストとレスポンスの形は変わらず、`grok-imagine-image`（1.0）は影響を受けない。

**1画像あたりの価格は下がり**、各レスポンスの `usage.cost_in_usd_ticks` が新しい価格を反映する。xAI SDK からの gRPC レスポンスでは、`model` が `grok-imagine-image-2.0-low` として報告される。移行ガイドが該当エントリからリンクされている。

## できるようになったこと

- （退役のため該当なし。価格は下がる）

## 影響範囲

- 対象ユーザー: `grok-imagine-image-quality` / `grok-imagine-image-pro` を使っていた API 利用者
- 対象プラン: xAI API 利用者
- API / UI / 管理者機能: **リクエストは通り続けるが、返ってくる画像の品質設定が `low` に変わる。** 名前が `quality` / `pro` だったモデルが `low` 相当へ振り替えられるため、**エラーにならずに出力の質が変わる**。レスポンスの `model` フィールドでモデル名を検証している実装は、値が変わる点に注意が要る

## 教材化メモ

- **「リクエスト側の変更は不要」と「出力が変わらない」は別である。** これは退役告知の読み方として重要な型である。API は通り続け、エラーも出ない。しかし `quality` / `pro` という名前のモデルが **`low` 設定へ振り替えられる**ため、画像の品質は変わりうる。**静かに劣化する変更**で、監視していなければ気づけない。
- **同じ週に出た2つの退役が、正反対の型になっている。** Claude Code の Opus 4.8 fast mode（2026-11-30 削除）は**エラーになって止まる**。GitHub Copilot の 2026-11-16 廃止は**代替モデルが自動で有効になる**。そして本件は**自動で代替へ流れるが設定が下位へ変わる**。退役告知を読むときは、**「止まるか / 自動で流れるか / 流れた先が同等か」の3段で確認する**という読み方を教える教材にできる。本件は3段目で落ちる例である。
- **レスポンスの `model` フィールドを等価比較している実装は壊れる。** 退役の影響が「リクエスト」ではなく「レスポンスの検証ロジック」に出る例で、見落としやすい。

## 原文確認

- 公式見出し: November セクション（grok-imagine-image-quality retirement、発効日 2026-11-02 は 9月の予告エントリに記載）
- 公式URL: https://docs.x.ai/docs/release-notes
- 原文全文は公式ページで確認してください。
