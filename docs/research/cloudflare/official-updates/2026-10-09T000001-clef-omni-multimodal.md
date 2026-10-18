---
date: 2026-10-09
title: "Workers AI: Clef-omni が音声・動画入力に対応、Clef-flash は $0.090 → $0.038 へ値下げ（窓 64K → 24K）、Clef は最大2倍高速化"
service: "Workers AI"
product: "Workers AI"
source: https://blog.cloudflare.com/clef-faster-cheaper-multimodal/
fetched_at: 2026-10-10T09:28:00+09:00
published_date: 2026-10-09
date_precision: date-only
category: policy
---

# 2026-10-09 Workers AI: Clef-omni / Clef-flash 値下げ / Clef 高速化

## 公式内容の日本語要約

Cloudflare が decision model 群 **Clef** について3件をまとめて発表した。

**(1) Clef-omni の新規提供。** モデル ID は `@cf/cloudflare/clef-omni`（`model` セレクタは `clef-omni`）。**テキスト・画像・音声（WAV / MP3）・動画（MP4 / WebM）を1リクエストで同時に読む。** 文字起こし→テキストモデルという多段構成が不要になる。30B パラメータの MoE でアクティブ 3B。他の Clef と同様、テキストを生成せず**許可された回答候補にスコアを付ける**方式である。レイテンシはテキスト約20ms、画像・音声100ms未満、音声付き21秒の動画で約300ms。**$0.150 / 100万入力トークン**、コンテキスト窓 64K。メディアは `images` / `audio` / `videos` フィールドへ base64 data URL で渡す。

**(2) Clef-flash の値下げと窓の縮小。** **$0.090 → $0.038 / 100万入力トークン**（Jev より安価になった）。ただし**ホスト版のコンテキスト窓は 64K → 24K へ縮小**した。公式は「24K を超えるリクエストは 0.24%」とし、64K が必要なら Clef を使うよう案内している。**Hugging Face の self-host 用ウェイトは変更なしで最大 256K まで対応**する。

**(3) Clef の高速化。** ウェイトは変更せず、**最大2倍**の高速化。中央値レイテンシは約800トークンで 262ms → 152ms（1.7倍）、約3,400トークンで 616ms → 305ms（2.0倍）、約16,000トークンで 2,721ms → 1,635ms（1.7倍）。配信基盤を **SGLang** へ移した。SGLang 0.5.22 で Clef サポートが入る予定。Clef の価格は $0.240 / 100万入力トークン、窓 64K。

## できるようになったこと

- 音声・動画をそのまま decision model へ渡し、1リクエストで判定できる
- Clef-flash を従来の約42%の単価で使える
- Clef の判定レイテンシが約1.7〜2.0倍速くなる

## 影響範囲

- 対象ユーザー: Workers AI で Clef 系を使っている実装
- 対象プラン: Workers AI（従量）
- API / UI / 管理者機能: API。モデル ID と入力フィールドの追加、単価とコンテキスト窓の変更
- **注意すべき破壊的変更**: Clef-flash のホスト版コンテキスト窓が 64K → 24K。24K を超える入力を投げている実装は失敗しうる

教材化メモ: src/content/ai-news-notes/cloudflare/clef-omni-multimodal-and-pricing.mdx

## 原文確認

- 公式見出し: Introducing Clef-omni with full multimodality, plus a faster Clef and a cheaper Clef-flash（Cloudflare Blog, 2026-10-09）
- 公式URL: https://blog.cloudflare.com/clef-faster-cheaper-multimodal/
- changelog: https://developers.cloudflare.com/changelog/post/2026-10-09-clef-omni-workers-ai/
- 原文全文は公式ページで確認してください。
