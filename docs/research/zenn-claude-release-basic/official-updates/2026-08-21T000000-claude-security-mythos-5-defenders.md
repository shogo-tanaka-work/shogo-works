---
date: 2026-08-21
title: "Claude Mythos 5 のサイバーセキュリティ能力を防御側へ開放 — Claude Security が Mythos 5 で稼働、$35M の Defender Advantage Fund、Cyber Verification Program の拡大"
service: "Claude"
source: https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders
fetched_at: 2026-08-22T09:05:00+09:00
published_at: 2026-08-21
date_precision: date-only
category: release
---

# 2026-08-21 Claude Mythos 5 のサイバーセキュリティ能力を防御側へ開放

## 公式内容の日本語要約

Anthropic は 2026-08-21、Claude Mythos 5 のサイバーセキュリティ能力を防御側へ届けるための施策を4本まとめて発表した。Mythos 5 そのものへの自由なアクセスを開くのではなく、**用途を限定した出口（パッチ・アラート等の具体的な出力）だけを配る**という設計が全体を貫いている。

**Claude Security が Mythos 5 で稼働するようになった。** Claude Enterprise 契約者向けの public beta で、コードベースを走査して脆弱性を検出し、修正パッチを提案する。Enterprise 管理者が管理コンソールで有効化し、利用者は `claude.ai/security` からアクセスする。検出結果には CWE 分類、確信度、深刻度、修正案が付き、利用者は Claude Code 上で内容を確認する。**パッチの適用前に人間のレビューと承認を必須**とする設計になっている。課金は既存プランのトークン利用として計上され、別建てのアドオン料金は発生しない。

**パートナー製品への組み込みが始まる。** サイバーセキュリティ製品・サービスのベンダーと組み、Mythos 5 を既存ツールへ統合する。利用者はモデルへ直接触れるのではなく、脆弱性のパッチやセキュリティアラートといった具体的な出力を受け取る。公式は「この取り組みは初期段階で、今後拡大する見込み」と述べており、個別のパートナー名は挙げていない。関心のある事業者向けの登録フォームが案内されている。

**Defender Advantage Fund（0xDAF）として $35M 相当の Claude クレジットを拠出する。** オープンソースセキュリティが対象で、(1) 広く使われている OSS の脆弱性修正、(2) 走査とパッチ適用の自動化、(3) 攻撃クラス全体への耐性を獲得するための実験的アプローチ、の3領域を重点に置く。初回の交付先は数週間内に発表予定。

**Cyber Verification Program が拡大された。** 審査を通った防御側の組織に対し、Opus / Sonnet モデルでセーフガードを緩めた利用を認める。今後は Opus / Sonnet のデュアルユース能力の範囲を広げ、続いて Mythos クラスへのアクセスも提供する予定である。既存メンバーには個別に案内される。

## できるようになったこと

- Claude Enterprise 契約者が `claude.ai/security` から Mythos 5 ベースの脆弱性走査を利用（public beta、管理コンソールで有効化）
- 走査結果に CWE 分類・確信度・深刻度・修正案が付き、Claude Code 上でレビューできる
- 走査費用は既存プランのトークン利用として計上（別建てアドオンなし）
- 審査済み防御組織が Cyber Verification Program でセーフガード緩和された Opus / Sonnet を利用（Mythos クラスは今後）
- OSS セキュリティ向けに $35M 相当の Claude クレジット（0xDAF）へ応募可能

## 影響範囲

- 対象ユーザー: Claude Enterprise 契約者、サイバーセキュリティ製品ベンダー、審査を通った防御側組織、OSS メンテナ
- 対象プラン: Claude Security は Enterprise のみ（public beta）。パートナー統合と 0xDAF は対象外
- API / UI / 管理者機能: 管理コンソールでの有効化、`claude.ai/security` の UI、Claude Code 上でのレビュー導線

教材化メモ: src/content/ai-news-notes/claude/claude-security-mythos-5-defenders.mdx

## 原文確認

- 公式見出し: Bringing the cybersecurity capabilities of Claude Mythos 5 to more defenders
- 公式URL: https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders
- 原文全文は公式ページで確認してください。
