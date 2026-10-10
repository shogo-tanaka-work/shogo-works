---
date: 2026-10-09
title: "Deno チームが Cloudflare に参加 — workerd と celld を統合し、Workers / Durable Objects の self-host を一級サポートへ"
service: "Workers"
product: "Workers, Durable Objects, workerd"
source: https://blog.cloudflare.com/deno-joins-cloudflare/
fetched_at: 2026-10-10T09:25:00+09:00
published_date: 2026-10-09
date_precision: date-only
category: release
---

# 2026-10-09 Deno チームが Cloudflare に参加

## 公式内容の日本語要約

Cloudflare 公式ブログが、**Deno チームの Cloudflare 参加**を発表した。Node.js の作者 **Ryan Dahl** と共同創業者 **Bert Belder** を含むチームが加わる。投稿は Kenton Varda と Ryan Dahl の共同署名である。Dahl の言葉として「**workerd と celld をマージする**」が引用されている。

目的は **workerd の self-host を一級サポートの選択肢にすること**である。Cloudflare の OSS ランタイム `workerd` は Durable Objects を単一インスタンスとしてしか実装しておらず、公式はこれを「スケールに適さない」と認めている。Deno チームが2026年8月に公開した **celld**（外部依存がオブジェクトストレージだけの単一 Rust バイナリ）のコードと設計を workerd へ取り込むことで、同じプリミティブを Cloudflare 以外の場所でも使えるようにする。

**Cloudflare 公式投稿には退役日程・移行要件・価格の記載が無い。** 「今後数か月でさらに発表する」とだけ書かれている。self-host は celld / workerd いずれも現時点で可能である。

**Deno 側製品の今後について、公式ブログは一切触れていない。** 報道ベースでは、Deno ランタイムは1年間の保守・セキュリティ更新を経て公式開発を終了（OSS のままコミュニティへ）、**Deno Deploy は6か月後に停止**（有料顧客は Cloudflare Workers への移行を支援）、**JSR はインフラを Cloudflare へ移して継続**とされる。ただし **一次情報である `deno.com` のブログは本調査環境から DNS 解決できず、日程を一次確認できていない。**

## できるようになったこと

- celld / workerd の self-host は現時点で可能（新機能の提供ではなく、方針の表明）
- 今後、workerd 側で Durable Objects のマルチインスタンス実装が入る見込み

## 影響範囲

- 対象ユーザー: Workers / Durable Objects 利用者、Deno ランタイム・Deno Deploy・JSR 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: 現時点では変更なし。将来の workerd（OSS）が対象
- 取得できなかった点: Deno ランタイム・Deno Deploy・JSR の退役日程の一次確認（`deno.com` 到達不能）

教材化メモ: src/content/ai-news-notes/cloudflare/deno-joins-cloudflare.mdx

## 原文確認

- 公式見出し: Deno is joining Cloudflare（Cloudflare Blog, 2026-10-09）
- 公式URL: https://blog.cloudflare.com/deno-joins-cloudflare/
- 著者ページ: https://blog.cloudflare.com/author/ryan-dahl/
- 原文全文は公式ページで確認してください。
