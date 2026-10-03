---
date: 2026-09-30
title: "AI Gateway に Auto Router — `cloudflare/auto` 指定でタスクごとに最安モデルへ振り分け"
service: "AI Gateway"
product: "AI Gateway"
source: https://blog.cloudflare.com/auto-router/
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T13:00:00Z
date_precision: timestamp
category: release
---

# 2026-09-30 AI Gateway Auto Router

## 公式内容の日本語要約

Cloudflare は AI Gateway に **Auto Router** をパブリックベータで追加した。モデル指定を **`cloudflare/auto`** にすると、リクエストごとに「そのタスクを十分にこなせる最も安いモデル」へ自動で振り分ける。

判定は2段構えである。**(1) タスク分類** — エッジに配置したマルチヘッド分類器が、リクエストを **14種のタスク型**に分類し、**複雑さ / 曖昧さ / 失敗時の重大さ / 文脈依存度の4軸を1〜5で評点**する。**(2) スコアリングと選択** — これらのシグナルとモデルのベンチマークデータを組み合わせた評点行列で適合度を推定し、**`utility = 期待品質 − 適応的なコストペナルティ`** という式で品質とトークン単価を均衡させる。長いセッションではキャッシュの読み書きコストとモデル切り替えのペナルティも考慮する。

公式の内部計測では、一般知識タスクで **成功率 86.6%、成功1回あたり 0.0084 ドル**。これは **GPT-6 Sol の約80%、Claude Opus の約35%のコスト**にあたると説明されている。

今後の予定として、対応モデルの拡大、ゼロデータ保持（ZDR）によるフィルタリング、プロバイダー側の空き容量の考慮、リクエストごとの reasoning 強度の最適化、構造化された意思決定モデルの検討が挙げられている。

## できるようになったこと

- `cloudflare/auto` を指定するだけでモデル選択を委譲できる
- 14種のタスク型 × 4軸（複雑さ / 曖昧さ / 重大さ / 文脈依存度）での自動分類
- キャッシュコストとモデル切り替えコストを織り込んだ長時間セッション向けの最適化

## 影響範囲

- 対象ユーザー: AI Gateway 利用者
- 対象プラン: **パブリックベータ期間中は追加料金なし**
- API / UI / 管理者機能: モデル名に `cloudflare/auto` を指定するだけ

教材化メモ: src/content/ai-news-notes/cloudflare/ai-gateway-auto-router.mdx

## 原文確認

- 公式見出し: Cut your AI spend with AI Gateway's Auto Router
- 公式URL: https://blog.cloudflare.com/auto-router/
- 原文全文は公式ページで確認してください。
