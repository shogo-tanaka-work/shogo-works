---
date: 2026-10-13
title: "Workers の subrequest が BYOIP 宛でも Workers コンテキストを保持（誤 403 と Bot スコア誤判定の是正）"
service: "Workers"
product: "Workers, BYOIP, Bots"
source: https://developers.cloudflare.com/changelog/post/2026-10-13-byoip-workers-subrequest-context/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-13-byoip-workers-subrequest-context/
fetched_at: 2026-10-14T09:30:00+09:00
published_date: 2026-10-13
date_precision: date-only
category: enhancement
---

# 2026-10-13 Workers subrequest の BYOIP コンテキスト保持

## 公式内容の日本語要約

Workers の subrequest が **BYOIP を使う Cloudflare プロキシ配下のホスト名**を叩いたとき、Cloudflare が **Workers のコンテキストを保持し、その通信を「Cloudflare 間の内部トラフィック」として扱う**ようになった。以前は外部インターネットからの通信として扱われていた。

**具体的に増えたもの。** BYOIP 宛の subrequest にも **`CF-Worker` ヘッダ**と **`cf.worker.upstream_zone` フィールド**が付く。これにより、セキュリティルールが同一 zone と cross-zone の通信を**一貫して評価する**。

**修正前に起きていたこと。** 該当する subrequest の一部で Workers のコンテキストと**元のクライアントのシグナルが失われていた**。その結果、(1) セキュリティルールが想定外の挙動をする、(2) Bot Management が実際の訪問者ではなく **Cloudflare の内部接続をスコアリングしてしまう**、(3) **誤った 403 応答**が出る、という3つの症状が出ていた。

**修正後。** 該当する通信について、宛先 zone 側の Bot Management フィールドが**元のエンドユーザー接続を反映する**ようになった。bot score、verified bot status、JA3 / JA4 フィンガープリントが対象である。

**適用は自動で、設定変更は不要**である。

## できるようになったこと

- BYOIP 宛の subrequest でも Bot Management が実際の訪問者を評価する
- `CF-Worker` と `cf.worker.upstream_zone` を前提にしたセキュリティルールが BYOIP 宛でも効く
- 原因不明だった誤 403 の説明がつく

## 影響範囲

- 対象ユーザー: Cloudflare 上で BYOIP 配下のホスト名を Workers から呼んでいる組織
- 対象プラン: 記載なし（BYOIP は上位プラン・Enterprise 相当の機能）
- API / UI / 管理者機能: Workers のランタイム挙動、セキュリティルール評価、Bot Management のフィールド値

## 教材化メモ

- **「エージェント・AI 文脈ではないが、Workers を本番で使う側には効く」更新として扱う。** 本件は Bot Management と BYOIP が絡むため、一見すると当サイトの対象範囲外に見える。**変わっているのは Workers の subrequest の扱いそのもの**であり、判定の軸は「どの製品の挙動が変わったか」に置く。
- **「設定を変えていないのに直る」類の更新の典型例として使える。** 公式は自動適用・設定不要と明記している。**利用者側の作業は発生しないが、観測される挙動は変わる。** 障害調査の履歴を持つチームには、過去の誤 403 の原因が後から判明するという形で効く。
- **教材化の価値は「内部トラフィックと外部トラフィックの境界」の説明にある。** Workers からの subrequest が Cloudflare 内部で完結しているのか、外に出て戻ってきているのかは、**セキュリティルールの評価対象が変わる**という形で実務に出る。BYOIP はその境界が曖昧になる構成で、今回はそれを内部側へ寄せた修正である。
- **Bot Management のスコアが「誰を見ているか」を疑う視点を教える題材になる。** 修正前は Cloudflare の内部接続をスコアリングしていた。**bot score を信頼して自動ブロックを組んでいる場合、スコアの対象が想定と違う可能性がある**という一般論へ展開できる。
