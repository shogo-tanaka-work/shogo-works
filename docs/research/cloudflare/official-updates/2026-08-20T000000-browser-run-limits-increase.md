---
date: 2026-08-20
title: "Browser Run の既定上限を引き上げ（同時ブラウザ 120→200、起動レート 1→3/秒、Quick Actions 10→30/秒）"
service: "Cloudflare Browser Run"
product: "Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-08-20-limits-increase/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-20-limits-increase/
fetched_at: 2026-08-21T09:20:00+09:00
published_at: 2026-08-20
date_precision: date-only
category: enhancement
---

# 2026-08-20 Browser Run の既定上限引き上げ

## 公式内容の日本語要約

Cloudflare は Workers Paid プランにおける Browser Run の既定上限を引き上げた。

- 同時実行ブラウザ数: 120 → **200**
- 新規ブラウザ起動レート: 1/秒 → **3/秒**
- Quick Actions リクエスト: 10/秒 → **30/秒**

公式は「数百のブラウザセッションを並列実行し、より速く新しいブラウザを起動し、Quick Actions を3倍のレートで処理できる」と説明している。これらは絶対上限ではなく既定値であり、より高い容量が必要な場合はフォームから申請できる。

ヘッドレスブラウザを使うスクレイピング、レンダリング、E2E テスト、エージェントによる Web 操作のワークロードが対象になる。特に**エージェントに Web 画面を操作させる構成**では、同時実行数と起動レートがそのままスループットの上限になるため、上限緩和は設計の前提を変えうる。

## できるようになったこと

- 同時実行ブラウザ 200 まで（Workers Paid の既定値）
- ブラウザ起動レート 3/秒
- Quick Actions 30/秒
- 上限超過が必要な場合はフォームから増枠申請

## 影響範囲

- 対象ユーザー: Cloudflare Browser Run（Browser Rendering）利用者
- 対象プラン: Workers Paid
- API / UI / 管理者機能: プラットフォームの既定クォータ

## 教材化メモ

- 「エージェントのスループットは、モデルの速度ではなく実行基盤のクォータで決まる」という論点の具体例。ブラウザ操作エージェントの設計教材で、同時実行数・起動レート・アクション毎秒のどれが先に頭打ちになるかを見積もる演習に使える。
- 既定値と絶対上限が別物である、という点は運用教材の定番論点。「既定で足りないなら申請する」という選択肢を知っているかどうかで、アーキテクチャを作り変えるか設定を変えるかの判断が変わる。
- 同日に GA した Claude Platform の browser use ツールと並べると、「ブラウザ操作エージェント」がモデル側・実行基盤側の両方から同時に整備されている状況を示せる。教材では両者を組み合わせた構成例として扱うのが自然である。
- 記事化は見送った（スコア5）。恒久的な仕様変更ではあるが、対象が Browser Run 利用者に限られ、既存教材への影響もない。上限値そのものは今後さらに変わりうるため、速報より教材側で「クォータを確認する習慣」として扱うほうが持続性が高い。

## 原文確認

- 公式見出し: Browser Run - Run more headless browsers concurrently with Browser Run
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-20-limits-increase/
- 原文全文は公式ページで確認してください。
