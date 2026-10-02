---
date: 2026-10-01
title: "Workers が ML-KEM / ML-DSA に対応（互換フラグ付き）"
service: "Workers"
product: "Workers"
source: https://blog.cloudflare.com/workers-ml-kem-ml-dsa-support/
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: enhancement
---

# 2026-10-01 Workers の耐量子暗号対応

## 公式内容の日本語要約

Workers の Web Crypto に耐量子（post-quantum）アルゴリズムが追加された。**鍵カプセル化は ML-KEM-768 / ML-KEM-1024**、**署名は ML-DSA-44 / ML-DSA-65 / ML-DSA-87**。

追加 API は `encapsulateBits()` / `decapsulateBits()` / `encapsulateKey()` / `decapsulateKey()`、補助の `getPublicKey()`、実行時の対応確認用の `SubtleCrypto.supports()`、および JWK の import / export。

**利用には互換フラグ `webcrypto_modern_algorithms` が必要**で、`wrangler.jsonc` でのオプトインになる。公式は**仕様がまだドラフト段階**であり、WICG の提案に今後アルゴリズムが追加される可能性があると注記している。

## できるようになったこと

- Workers 内で ML-KEM / ML-DSA を Web Crypto API として利用
- `SubtleCrypto.supports()` による実行時のアルゴリズム対応確認

## 影響範囲

- 対象ユーザー: Workers 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: `webcrypto_modern_algorithms` 互換フラグのオプトイン

## 教材化メモ

- **ドラフト仕様を互換フラグ越しに先行提供する**という出し方。本番で使うかの判断は「仕様が固まる前の API に依存してよいか」に帰着する。**互換フラグは「使ってよいが保証しない」の意思表示**として読む。
- **耐量子移行は暗号の差し替えで終わらない**。鍵サイズと署名サイズが増えるため、保存領域・帯域・レイテンシに影響が出る。移行計画では**アルゴリズム対応の可否よりサイズ増加の波及**が論点になりやすい。
- AI / エージェント文脈からは距離があるが、**Workers 上で動くエージェントが扱う通信の長期的な機密性**（今日の暗号文を将来復号される「収穫して後で復号」攻撃）という観点では無関係ではない。

## 原文確認

- 公式見出し: Support for modern cryptographic algorithms in Workers
- 公式URL: https://blog.cloudflare.com/workers-ml-kem-ml-dsa-support/
- 原文全文は公式ページで確認してください。
