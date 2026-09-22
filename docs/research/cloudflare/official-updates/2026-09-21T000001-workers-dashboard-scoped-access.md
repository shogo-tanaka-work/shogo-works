---
date: 2026-09-21
title: "Workers 単位のアクセス権をダッシュボードから直接付与できるようになった"
service: "Cloudflare Workers"
product: "Workers"
source: https://developers.cloudflare.com/changelog/rss/workers.xml
fetched_at: 2026-09-22T09:02:00+09:00
published_at: 2026-09-21T00:00:00Z
date_precision: date-only
category: enhancement
---

# 2026-09-21 Workers 単位のアクセス権をダッシュボードから付与

## 公式内容の日本語要約

Cloudflare は 2026-09-21、**個別の Worker に対するアクセス権を、その Worker の概要ページから直接招待して付与できる**ようにした。付与できるロールは 2026-09-15 に発表された4種類（Metadata Read-Only / Content Read-Only / Editor / Admin）と同じである。

**これは新機能ではなく、既発表機能の導線追加である。** 権限モデル本体は 2026-09-15 の「Grant teammates and agents access to specific Workers」で入っており（詳細メモ `2026-09-15T000001-granular-worker-permissions.md`）、本エントリは**その権限を管理する場所がダッシュボードの Worker 概要ページになった**という変更にあたる。公式の表現も「directly from the dashboard」で、能力そのものの拡張ではない。

ロールの内容は 09-15 時点から変わらない。Metadata Read-Only は設定・メトリクス・ログ・トレースの閲覧のみでコードは見えない。Content Read-Only はコードと設定の読み取りまで。Editor はデプロイまで可能で削除不可。Admin は削除を含む全権である。

## できるようになったこと

- Worker の概要ページから、その Worker に限定したアクセス権を持つメンバーを直接招待できる
- アカウント設定の権限画面へ移動せずに、対象 Worker の文脈のままロールを選べる

## 影響範囲

- 対象ユーザー: Cloudflare Workers を複数人・複数エージェントで運用しているチーム
- 対象プラン: 09-15 の発表時点で「all customers」と明記されている
- API / UI / 管理者機能: ダッシュボード UI の導線変更

## 教材化メモ

- **「機能の発表」と「その機能に触れる場所の追加」は別の更新である**という例として使える。09-15 の権限モデル発表と本エントリは同じ能力を指しているが、実際に運用へ乗るかどうかは後者で決まることが多い。管理画面の導線が遠い権限機能は使われない。
- 権限設計を教えるとき、**ロールの粒度（4段階）より「どこで設定するか」のほうが定着率を左右する**という現場的な指摘へつなげられる。
- 単独記事にはしない。読者が取る行動が「09-15 の権限機能をまだ設定していないなら設定する」に集約され、本エントリ固有の判断がないため。

## 原文確認

- 公式見出し: Workers - Give teammates access to specific Workers directly from the dashboard
- 公式URL: https://developers.cloudflare.com/changelog/（RSS: https://developers.cloudflare.com/changelog/rss/workers.xml）
- 原文全文は公式ページで確認してください。
