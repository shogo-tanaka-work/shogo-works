---
date: 2026-10-08
title: "Anthropic Cyber Mission 発足（CIDP と OSS Scanner）"
service: "Anthropic（セキュリティプログラム）"
source: https://www.anthropic.com/news/anthropic-cyber-mission
fetched_at: 2026-10-09T09:20:00+09:00
published_at: 2026-10-08
date_precision: date-only
category: policy
---

# 2026-10-08 Anthropic Cyber Mission 発足

## 公式内容の日本語要約

Anthropic が **Anthropic Cyber Mission** を発足させた。防御側に道具・研究・資源を届ける長期の取り組みとして位置づけられ、**重要インフラ**と**オープンソース**の2領域から始める。

**重要インフラ**側の実体は **Critical Infrastructure Defense Program（CIDP）** である。電力・水道・交通の OT と政府システムを対象に、OT 事業者へサービスを提供する信頼されたセキュリティプロバイダーへ、フロンティアの Claude モデル・常駐エンジニア・脅威リサーチを提供する。初期パートナーに Accenture / Booz Allen / CrowdStrike / Deloitte / Dragos / Hitachi / Insane Cyber / Nozomi Networks / Palo Alto Networks / PwC / Rockwell Automation が並ぶ。少数のコホートで開始し、今後数か月でパートナーと対象セクターを広げる。関心の登録は受け付けている。

**オープンソース**側の実体は **OSS Scanner** である。opt-in したプロジェクトに対し、Anthropic の最上位モデルによる定期スキャンを**無料**で提供する。重要な注意として、**レポートはモデル生成であり人手レビューを経ずに送られる**ため、誤りが混じり得ると公式が明記している。Anthropic は true-positive 率を 90% 超と見込み、改善を続けるとしている。報告に対応しきれないプロジェクトには、引き続き人手で検証した開示を行う。

関連する展開として、規模を問わずセキュリティチームが拡張版 Cyber Verification Program へ応募できること、メンテナが Claude for Open Source（無料の Claude Max）へ応募できることが挙げられている。前史として 6月の州・地方・部族政府向けプログラム、同週の Project Glasswing の Cyber Verification Program への統合、8月の Defender Advantage Fund（0xDAF）がある。

Anthropic は「高性能モデルは攻撃側にも広く行き渡っており、防御側の道具が十分な数の防御者に届いていない」と現状を説明し、**2年以内に AI は防御側に有利に働くと見込むが、短期はより厳しくなる**（脆弱性の悪用が安価になった一方、修正の速度は上がっていない）と述べている。

## 影響範囲

- 対象ユーザー: CIDP はパートナー企業経由の重要インフラ事業者、OSS Scanner は OSS のコアメンテナ
- 対象プラン: CIDP はパートナー限定、OSS Scanner は opt-in で無料
- API / UI / 管理者機能: 一般提供の製品ではない。OSS Scanner のみ今すぐ申し込める

教材化メモ: src/content/ai-news-notes/claude/anthropic-cyber-mission.mdx

## 原文確認

- 公式見出し: Introducing the Anthropic Cyber Mission
- 公式URL: https://www.anthropic.com/news/anthropic-cyber-mission
- 原文全文は公式ページで確認してください。
