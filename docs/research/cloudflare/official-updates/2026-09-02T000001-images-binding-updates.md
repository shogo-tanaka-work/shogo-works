---
date: 2026-09-02
title: "Images バインディングにテキストのラスタライズと署名付き URL 生成を追加"
service: "Cloudflare Images"
product: "Cloudflare Images, Workers"
source: https://developers.cloudflare.com/changelog/post/2026-09-02-images-binding-updates/
fetched_at: 2026-09-03T09:36:00+09:00
published_at: 2026-09-02
date_precision: date-only
category: enhancement
---

# 2026-09-02 Images バインディングの更新

## 公式内容の日本語要約

Cloudflare Images の Workers バインディングに、複数のメソッドが追加された。Workers から画像を扱う際の API 面の拡張である。

**テキストのラスタライズ**: `.text()` メソッドが追加され、テキストを単独の画像として出力するか、既存の画像に重ねられる。フォント、サイズ、色を指定できる。

**メタデータでの絞り込み**: `.list()` が `filter.metadata` を受け取れるようになり、カスタムメタデータで画像を検索できる。`priority: { gte: 2, lte: 5 }` のように2つの演算子を組み合わせた範囲指定に対応する。

**サーバー側での署名**: `.signedUrl()` により、**API トークンをクライアントへ渡すことなく**非公開画像の署名付き URL を生成できる。

**ダイレクトアップロード**: `.createDirectUpload()` により、クライアントが API へ直接アクセスせずにストレージへ画像をアップロードできる共有リンクを作れる。

**レスポンスヘッダー**: `.response()` が `headers` を受け取れるようになった。Content-Type は最適化後の画像から決まり上書きできない。Cache-Control は Workers Cache と組み合わせてエッジキャッシュに使える。

## できるようになったこと

- `.text()` によるテキストのラスタライズと画像への重ね合わせ
- `.list()` の `filter.metadata` によるメタデータ検索（範囲指定対応）
- `.signedUrl()` による**トークンをクライアントに出さない**署名付き URL 生成
- `.createDirectUpload()` によるクライアント直アップロード
- `.response()` での `headers` 指定

## 影響範囲

- 対象ユーザー: Workers から Cloudflare Images を使う開発者
- 対象プラン: Cloudflare Images の利用者
- API / UI / 管理者機能: バインディング API の追加のみ。既存の挙動変更はなし

## 教材化メモ

- **`.signedUrl()` は「クライアントにトークンを出さない」という定石の実装例**として使える。非公開ファイルへのアクセスを、トークン配布ではなく**サーバー側で期限付き URL を発行する**形に寄せる設計は、Images に限らず S3 / R2 / GCS で共通する型である。
- **画像へのテキスト合成をエッジで行う**という選択肢。OGP 画像の動的生成のような用途で、ブラウザレンダリングや外部サービスを挟まずに済むケースがある。ただし今回の `.text()` はフォント・サイズ・色の指定にとどまるため、複雑なレイアウトには向かない。
- 単体では記事化しない小粒の API 追加だが、**「Workers 側の API が少しずつ増え、外部サービスへ出さずに完結する範囲が広がっている」**という流れの一例として、Cloudflare のプラットフォーム戦略を説明する材料になる。

## 原文確認

- 公式見出し: Cloudflare Images - New in Images: text rasterization and updates to the binding
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-02-images-binding-updates/
- 原文全文は公式ページで確認してください。
