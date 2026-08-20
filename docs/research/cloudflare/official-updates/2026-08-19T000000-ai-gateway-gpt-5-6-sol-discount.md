---
date: 2026-08-19
title: "AI Gateway 経由の GPT-5.6 Sol が 2026-09-18 まで50%オフ（Unified Billing 限定）"
service: "Cloudflare AI Gateway"
product: "AI Gateway"
source: https://developers.cloudflare.com/changelog/post/2026-08-19-gpt-5-6-sol-discount/
official_url: https://developers.cloudflare.com/changelog/post/2026-08-19-gpt-5-6-sol-discount/
fetched_at: 2026-08-20T09:20:00+09:00
published_at: 2026-08-19
date_precision: date-only
category: policy
---

# 2026-08-19 AI Gateway — GPT-5.6 Sol 50% off

## 公式内容の日本語要約

Cloudflare AI Gateway 経由で `openai/gpt-5.6-sol` を呼び出す場合の料金が、期間限定で50%引きになりました。

割引後の単価は、入力トークンが 100万あたり $2.50（通常 $5）、出力トークンが 100万あたり $15（通常 $30）、キャッシュ読み取りが 100万あたり $0.25（通常 $0.50）です。**期間は 2026-09-18 まで**で、それ以降は通常価格へ戻ります。

適用対象は **Unified Billing の顧客に限定**されます。Bring Your Own Keys（自前の API キーを持ち込む構成）では割引を受けられません。プロモコードは不要で、AI Gateway にクレジットをロードして当該モデルへリクエストをルーティングすれば自動的に割引単価が適用されます。既存の AI Gateway 利用者はモデルを指すだけで適用され、新規利用者は先に Unified Billing の設定が必要です。

対象は `openai/gpt-5.6-sol` のみで、他のモデルは含まれません。

## できるようになったこと

- AI Gateway の Unified Billing 経由で GPT-5.6 Sol を通常の半額で利用（2026-09-18 まで）

## 影響範囲

- 対象ユーザー: Cloudflare AI Gateway の Unified Billing 利用者。BYOK 構成は対象外
- 対象プラン: AI Gateway の Unified Billing。クレジットのロードが前提
- API / UI / 管理者機能: エンドポイントや API の変更はなく、課金単価のみの変更

## 教材化メモ

- AI Gateway の Unified Billing と BYOK の違いが、そのまま「割引を受けられるか」の分岐になっている。ゲートウェイ製品を教材で扱うとき、「キーを誰が持つか」が可観測性・課金・料金交渉力の3点に効くことを示す具体例として使える。
- 期間限定の値引きは記事の賞味期限が短い一方、モデル選定の演習素材としては使いやすい。「同じモデルでも経由するゲートウェイで単価が変わる」ことを、教材の料金比較節で1行触れておくと、読者が単価表を鵜呑みにしなくなる。
- 2026-09-18 という終了日が明示されているため、期限を過ぎた後にこのメモを引用する場合は通常価格（入力 $5 / 出力 $30 / キャッシュ読み取り $0.50 per 1M）へ読み替える必要がある。

## 原文確認

- 公式見出し: Get 50% off GPT-5.6 Sol through AI Gateway
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-19-gpt-5-6-sol-discount/
- 原文全文は公式ページで確認してください。
