---
date: 2026-06-03
title: "Anthropic AI対応サイバー脅威分析レポート（MITRE ATT&CK連携）"
service: "Claude / Anthropic"
source: https://www.anthropic.com/news/AI-enabled-cyber-threats-mitre-attack
fetched_at: 2026-06-04T11:20:00+09:00
published_date: 2026-06-03
date_precision: date-only
category: policy
---

# 2026-06-03 Anthropic AI対応サイバー脅威分析レポート（MITRE ATT&CK連携）

## 公式内容の日本語要約

Anthropic の Frontier Red Team が、2025年3月〜2026年3月の1年間に禁止した 832 のマルウェア関連アカウントを分析。脅威アクターによる AI 利用の高度化を示し、既存の MITRE ATT&CK フレームワークが AI 対応攻撃を十分に捉えられていないと指摘した調査レポート。

## できるようになったこと（=主要な発見）

- 分析対象: マルウェア関連の禁止アカウント 832件。
  - マルウェア開発での AI 利用: 67.3%（560アカウント）。
  - 横展開（ラテラルムーブメント）での利用: 6.5%（54アカウント）。
- 脅威レベルの上昇: 中程度以上リスク判定が前半期 33% → 後半期 56%（約1.7倍）。
- AI 利用の段階シフト: 侵害後のアカウント発見 +8.9%、初期アクセス（フィッシング）-8.6%。攻撃サイクルの後期で AI を使う傾向。
- 主要結論:
  1. 攻撃の高度化（後期段階での AI 活用）。
  2. 自動化の進展により「低スキル=低リスク」判別が無効化。
  3. MITRE ATT&CK が AI による自律オーケストレーション・リアルタイム意思決定・段階連鎖を完全には捉えていない。
- 防御側: Project Glasswing を15か国以上・約150の新規組織へ拡大予定。MITRE と協力して ATT&CK の進化を検討。

## 影響範囲

- 対象ユーザー: 企業のセキュリティ担当・情シス・CISO。
- 対象プラン: 該当なし（調査レポート）。
- API / UI / 管理者機能: 該当なし。

## 教材化メモ

セキュリティ系教材に「AI 時代の脅威評価」観点を追加。使用技術数やツール種別だけでは脅威レベルを測れず、攻撃チェーン全体を自動化する scaffolding 構築者が真の高リスク、という論点を1セクションで整理。既存の `anthropic-project-glasswing-update` と接続。

## 原文確認

- 公式見出し: What we learned mapping a year's worth of AI-enabled cyber threats
- 公式URL: https://www.anthropic.com/news/AI-enabled-cyber-threats-mitre-attack
- 原文全文は公式ページで確認してください。
