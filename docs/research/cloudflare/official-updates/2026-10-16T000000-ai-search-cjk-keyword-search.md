---
date: 2026-10-16
title: "AI Search のキーワード検索が日本語・中国語・韓国語に対応（trigram tokenizer）"
service: "AI Search"
product: "AI Search"
source: https://developers.cloudflare.com/changelog/post/2026-10-16-cjk-keyword-search/
official_url: https://developers.cloudflare.com/changelog/post/2026-10-16-cjk-keyword-search/
fetched_at: 2026-10-17T09:15:00+09:00
published_date: 2026-10-16
date_precision: date-only
category: enhancement
---

# 2026-10-16 AI Search のキーワード検索が CJK に対応

## 公式内容の日本語要約

Cloudflare は AI Search のキーワード検索で、**`trigram` tokenizer を指定すると日本語・中国語・韓国語のクエリにマッチするようになった**と告知した。自然文の質問もそのまま通る。公式が挙げている例は日本語の「経費精算の締め日はいつですか？」である。

**従来の問題は、語の区切りに空白が入らない言語で、クエリ全体が1つの完全一致フレーズとして扱われていたことである。** その結果、キーワード検索側は**ほぼ何も返さなかった。** 既定の `porter` tokenizer は英語向けの語幹処理を行うため、これらの言語では機能しない。

**設定は `keyword_tokenizer` を `trigram` にするだけである。** ただし **tokenizer を変更すると全件の再インデックスが走る**点が明記されている。既存のインデックスを持つ環境では、切り替えのタイミングを選ぶ必要がある。

AI Search は、ベクトル検索とキーワード検索を組み合わせたハイブリッド検索を提供する。**ベクトル検索側は従来から多言語で動いていたため、今回欠けていたのはキーワード側の語の切り出しである。** 固有名詞・型番・社内用語のように、意味が近い文書ではなく文字列そのものを当てたい検索が、日本語でも効くようになる。

教材化メモ: src/content/ai-news-notes/cloudflare/ai-search-cjk-keyword-search.mdx

## できるようになったこと

- `keyword_tokenizer: trigram` で、日本語・中国語・韓国語のキーワード検索がマッチするようになった
- 空白で区切られない自然文の質問をそのままキーワード検索に通せる
- ハイブリッド検索のキーワード側が CJK で機能するようになり、固有名詞や型番の完全一致に近い検索が効く

## 影響範囲

- 対象ユーザー: AI Search で日本語・中国語・韓国語のコンテンツを扱う利用者
- 対象プラン: changelog にプラン条件の記載なし
- API / UI / 管理者機能: `keyword_tokenizer` 設定（`trigram` / `porter`）。**変更時は全件再インデックスが発生する**

## 原文確認

- 公式見出し: `AI Search - AI Search keyword search supports Japanese, Chinese, and Korean queries`
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-16-cjk-keyword-search/
- 原文全文は公式ページで確認してください。
