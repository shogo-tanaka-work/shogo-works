---
date: 2026-10-06
title: "Cyber Verification Program の拡張 — Project Glasswing と統合し3段階のアクセス階層へ"
service: "Claude"
source: https://www.anthropic.com/news/cyber-verification-program
fetched_at: 2026-10-07T09:25:00+09:00
published_at: 2026-10-06
date_precision: date-only
category: policy
---

# 2026-10-06 Cyber Verification Program の拡張

## 公式内容の日本語要約

Anthropic が **Cyber Verification Program（CVP）** を拡張した。従来別枠だった **Project Glasswing と CVP を1つのプログラムへ統合**し、**3段階のアクセス階層**を設けた。防御側のセキュリティ組織に対して、サイバー関連の高度な能力を広く開放する狙いである。

対象モデルは **Claude Opus 5.5 / Claude Sonnet 5.5 / Claude Mythos 5.1、および今後の新モデル**である。一般提供のモデルには保守的なセーフガードが掛かっており、サイバー関連の作業は大半がブロックされる。**CVP の各階層では、階層に応じてブロック用の分類器が緩和される。**

階層は次の3つである。**Defense Access**: 企業・非営利・大学・政府機関・重要インフラ事業者・小規模セキュリティ企業・OSS メンテナー、および脆弱性報告の実績がある個人研究者。**Red Team Access**: 社内レッドチーム、政府レッドチーム、authorized な敵対的テストを行うペネトレーションテスト企業。**組織のみが対象で、個人は対象外。** **Specialized Access**: 飛行制御 OS、電力系統、通信網などの safety-critical なシステムのテストを認められた限定数の検証済み組織。現時点では**米国政府との協働で審査**している。

申請は CVP のポータルから行う。**Defense Access は数日で回答**、**Red Team Access は審査に数週間**、Specialized Access は政府との詳細な協働が入る。

**ブロック緩和の度合いは階層で異なる。** Defense Access でも攻撃的シナリオには依然として強いブロックが残る。Red Team Access では authorized なペネトレーションテストに対するブロックが外れる。Specialized Access が**最もブロックの少ない状態**である。

## できるようになったこと

- 防御側組織が、**検証を受けることで dual-use なサイバー能力へ段階的にアクセス**できる
- **Opus 5.5 / Sonnet 5.5 / Mythos 5.1 を対象に含む**（従来の Mythos 限定から拡大）
- **OSS メンテナーと個人研究者も Defense Access の対象**に入る

## 影響範囲

- 対象ユーザー: 防御側のセキュリティ組織、レッドチーム、OSS メンテナー、脆弱性報告実績のある個人研究者
- 対象プラン: CVP の審査を通った組織・個人（プラン依存ではなくプログラム審査）
- API / UI / 管理者機能: 利用ポリシー・安全性分類器の適用範囲

教材化メモ: src/content/ai-news-notes/claude/cyber-verification-program-expansion.mdx

## 原文確認

- 公式見出し: 「Expanding the Cyber Verification Program」
- 公式URL: https://www.anthropic.com/news/cyber-verification-program
- 原文全文は公式ページで確認してください。
