---
date: 2026-09-10
title: "Workers Paid の新規 Workflows は既定の保持期間が7日へ短縮"
service: "Workflows"
product: "Workflows"
service_scope: "開発者プラットフォーム"
source: https://developers.cloudflare.com/changelog/post/2026-09-10-paid-retention-default/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-10-paid-retention-default/
fetched_at: 2026-09-11T09:02:00+09:00
published_at: 2026-09-10T12:00:00Z
date_precision: timestamp
category: policy
---

# 2026-09-10 Workflows の既定保持期間が7日へ

## 公式内容の日本語要約

**2026-09-10 以降に Workers Paid プランで作成される Workflows** は、完了・エラー状態のインスタンスの保持期間が**既定で7日**になった（従来は30日）。理由は**既定のストレージコスト削減**である。

**境界が2つある。** 1つ目は**作成日**で、**既存の Workflows の保持期間は変更されない。** 2つ目は**プラン**で、Workers Free は従来どおり既定・上限ともに3日である。**上限（最大30日）は変わっていない**ため、必要なら明示的に指定して伸ばせる。

指定は `create()` の `retention` で行い、`successRetention` と `errorRetention` を別々に設定できる。

```js
const instance = await env.MY_WORKFLOW.create({
	retention: {
		successRetention: "2 days",
		errorRetention: "30 days",
	},
});
```

成功と失敗で保持期間を分けられる点が実用上重要である。**成功インスタンスは短く、エラーインスタンスは長く**という設定は、調査に必要な情報を残しつつコストを抑える組み方になる。Cloudflare ダッシュボードからは Workflow 単位・インスタンス単位でも設定できる。

教材化メモ: src/content/ai-news-notes/cloudflare/workflows-default-retention-seven-days.mdx

## できるようになったこと

- （変更である）Workers Paid の新規 Workflows は既定7日保持になった
- `successRetention` / `errorRetention` で成功・失敗を分けて指定できる
- ダッシュボードから Workflow 単位・インスタンス単位でも設定できる

## 影響範囲

- 対象ユーザー: Workers Paid で Workflows を新規作成する開発者
- 対象プラン: Workers Paid（Free は3日のまま、既存 Workflow は変更なし）
- API / UI / 管理者機能: API / ダッシュボード

## 原文確認

- 公式見出し: Default instance retention for new Workflows on Workers Paid is seven days
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-10-paid-retention-default/
- 原文全文は公式ページで確認してください。
