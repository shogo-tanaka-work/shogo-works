---
date: 2026-08-24
title: "Durable Objects と D1 が香港・シンガポールで一時的に劣化（Minor / Resolved）"
service: "Cloudflare"
product: "Durable Objects, D1"
source: https://www.cloudflarestatus.com/incidents
fetched_at: 2026-08-25T09:05:00+09:00
published_at: 2026-08-24T08:28:00Z
date_precision: timestamp
category: incident
---

# 2026-08-24 Durable Objects / D1 の地域劣化

## 公式内容の日本語要約

Cloudflare Status に 2026-08-24 08:28 UTC 付で **「DO and D1 are degraded in Hong Kong and Singapore」** が Minor として掲示され、Resolved 済みとなっている。**Durable Objects と D1 は本 Skill の対象製品**（開発者プラットフォーム）にあたるため記録する。

影響は香港およびシンガポールのリージョンに限定されており、全球的な障害ではない。Resolved のため継続的な対応は不要である。

同日の Cloudflare Status には他に2件の記載があるが、いずれも本 Skill の対象外として扱う。

- **Increased HTTP 5xx Errors in Chicago**（08-24 06:53 UTC、Minor / Resolved）— 地域ネットワーク単体の事象
- **Increased Latency**（08-24 20:38 UTC 発生、22:24 UTC 時点で `identified`）— 影響コンポーネントは `Cloudflare Sites and Services - CDN/Cache` のみで、Workers / Workers AI / Durable Objects 系ではない。取得時点（2026-08-25 09:05 JST / 00:05 UTC）で未解決

短時間 incident のため AI ニュース記事化はしない。日次サマリーと本詳細メモに留める。

## できるようになったこと

- （該当なし。障害記録）

## 影響範囲

- 対象ユーザー: 香港・シンガポールのリージョンで Durable Objects / D1 を利用しているアプリケーション
- 対象プラン: 記載なし
- API / UI / 管理者機能: 該当なし

## 教材化メモ

- **エージェント基盤の可用性は「地域単位で落ちる」**という当たり前の事実を、具体例として持っておく価値がある。Durable Objects はエージェントの状態を保持する用途で使われることが多く、そこが地域単位で劣化するとエージェント側は「壊れた」ではなく「応答が遅い／一部だけ失敗する」という形で観測される。障害設計を教える際、全断より部分劣化のほうが扱いが難しい実例になる。
- **ステータスページの読み方**の教材にできる。同日に3件並んでいても、影響コンポーネント（CDN/Cache なのか Durable Objects なのか）を見なければ自分に関係があるか判断できない。件数ではなくコンポーネントで絞る、という手順は、そのまま運用手順書に落とせる。

## 原文確認

- 公式見出し: DO and D1 are degraded in Hong Kong and Singapore（Minor / Resolved）
- 公式URL: https://www.cloudflarestatus.com/incidents
- 併記（未解決 incident の詳細）: https://www.cloudflarestatus.com/api/v2/incidents/unresolved.json
- 原文全文は公式ページで確認してください。
