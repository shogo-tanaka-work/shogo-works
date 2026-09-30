---
date: 2026-09-29
title: "Cloudflare が自社 WAF をフロンティアAIモデルでテストした結果を公開"
service: "Cloudflare"
product: "WAF, Application Security"
source: https://blog.cloudflare.com/adaptive-ai-waf-testing/
fetched_at: 2026-09-30T09:40:00+09:00
published_at: 2026-09-29T13:00:00Z
date_precision: timestamp
category: enhancement
---

# 2026-09-29 フロンティアAIモデルによる自社 WAF のテスト

## 公式内容の日本語要約

Cloudflare が**自社の WAF に対してフロンティアAIモデルを攻撃側として当て、その結果**を公式ブログで公開した。同日公開の「AI 時代の適応型アプリケーションセキュリティ」フレームワーク記事と対になる内容である。

本 skill のスコープ判定としては、**製品としては WAF（ネットワーク・セキュリティ製品）だが、AI モデルを攻撃・検証の主体として使う話**であるため、`source-catalog.md` の「ネットワーク・セキュリティ製品でも MCP や AI が絡む更新は対象」に該当する。ただし**新機能のリリースではなく検証レポートの性格**が強い。

**本文は未取得**（RSS のタイトル・リンク・pubDate のみ確認）。詳細な数値・手法は公式ブログ本文で確認が必要である。

## できるようになったこと

- （新機能ではない。検証結果の公開）

## 影響範囲

- 対象ユーザー: WAF 運用者、アプリケーションセキュリティ担当
- 対象プラン: 該当なし
- API / UI / 管理者機能: 該当なし

## 教材化メモ

- **「AI を攻撃側に立たせて自社防御を試す」**という検証の型は、セキュリティ研修の題材として汎用性がある。ベンダーが自社製品に対してそれを行い公開した、という事実自体が引用価値を持つ。
- 同日の「AI 時代の適応型アプリケーションセキュリティ」（https://blog.cloudflare.com/ai-era-framework/）と合わせて、**防御側が AI 前提へ組み替えている流れ**として1本にまとめられる。単独ではニュース価値が薄いため、セキュリティ回の背景資料として保持する。
- **本文未取得のため、記事化する場合は先に一次情報の取得が必要。**

## 原文確認

- 公式見出し: We tested our own WAF with frontier AI models. Here's what we found
- 公式URL: https://blog.cloudflare.com/adaptive-ai-waf-testing/
- 併記: https://blog.cloudflare.com/ai-era-framework/（Adaptive application security for the AI era）
