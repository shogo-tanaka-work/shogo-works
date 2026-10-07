---
date: 2026-10-06
title: "Google Vids に point-in-time editing — キャンバスがタイムラインの現在位置と同期"
service: "Google Workspace / Vids"
source: https://workspaceupdates.googleblog.com/2026/10/point-in-time-editing-now-available-in-Google-Vids.html
fetched_at: 2026-10-07T09:35:00+09:00
published_at: 2026-10-06
date_precision: date-only
rollout_date: 2026-09-29
category: enhancement
---

# 2026-10-06 Google Vids の point-in-time editing

## 公式内容の日本語要約

Google Vids に **point-in-time editing** が入った。**編集キャンバスがタイムラインの再生位置と同期し、その時点で実際に表示されている要素だけが見える。** 従来はシーン全体の要素がすべて重なって表示されていた。タイムラインをスクラブするとキャンバスが追従し、オブジェクトのトラックを直接クリックすると再生ヘッドがその位置へ移動する。**字幕・ローワーサード・オーバーレイのような多層コンテンツを扱うのに、シーンを分割する必要がなくなった。**

対象エディションは広く、Business（Starter / Standard / Plus / Base）、Enterprise（Starter / Standard / Plus）、Education（Fundamentals / Standard / Plus）、消費者向け Google AI Plus / Ultra、Frontline / Essentials / Nonprofits と一部アドオンである。

ロールアウトは **Rapid Release ドメインが 2026-09-29 開始（最大15日間の段階展開）**、**Scheduled Release ドメインが 2026-10-13 開始（1〜3日）**である。**管理者の操作は不要**で、既定で有効、管理者向け設定もエンドユーザー設定もない。

## できるようになったこと

- タイムラインの現在位置に対応した要素だけがキャンバスに出る（WYSIWYG）
- オブジェクトトラックのクリックで再生ヘッドが移動する
- 多層コンテンツの編集でシーン分割が不要になった

## 影響範囲

- 対象ユーザー: Google Vids を使うほぼ全エディションの利用者
- 対象プラン: Business / Enterprise / Education / Google AI Plus・Ultra / Frontline / Essentials / Nonprofits
- API / UI / 管理者機能: UI のみ（管理者操作不要、無効化手段なし）

## 教材化メモ

- **AIニュース記事化は見送った（スコア5）。AI / エージェント要素がゼロ**で、動画編集 UI の改善である。本サイトの読者層（AI 活用・業務導入）への影響が薄い。
- **ただし「Scheduled Release ドメインは 2026-10-13 から」という点は棚卸し対象に残す。** 既定で有効・無効化手段なしのため、**社内で Vids の操作手順書を作っている組織は、10-13 以降にキャンバスの見え方が変わる。** 手順書のスクリーンショットが合わなくなるタイプの変更である。
- **教材としては「管理者が止められない UI 変更」の例に使える。** 管理者設定が無い更新は、情シスが止める判断を持てない。**利用者への事前周知しか打ち手がない**という前提を、Workspace 運用の教材で扱う価値がある。

## 原文確認

- 公式見出し: 「Point-in-time editing now available in Google Vids」
- 公式URL: https://workspaceupdates.googleblog.com/2026/10/point-in-time-editing-now-available-in-Google-Vids.html
- 原文全文は公式ページで確認してください。
