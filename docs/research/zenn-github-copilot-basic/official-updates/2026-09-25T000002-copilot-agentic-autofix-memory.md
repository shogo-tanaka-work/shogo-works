---
date: 2026-09-25
title: "agentic autofix が修正パターンを Copilot Memory へ保存し、code review や cloud agent へ波及させる（public preview）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: enhancement
---

# 2026-09-25 agentic autofix と Copilot Memory の連携

## 公式内容の日本語要約

**agentic autofix が Copilot Memory と連携**するようになった。autofix が修正を作ると、**その修正パターンを memory として保存**し、以後の別のセキュリティアラートの解決に使う。加えて、**保存された memory は code review や cloud agent といった他の Copilot 機能へも、そのリポジトリ固有の安全な実装パターンとして共有される。**

**両機能とも public preview** であり、公式告知は **「有効にしている顧客向け」**と述べている。

**公式告知に書かれていないことを明記する。** 既定で有効かどうか、対象プラン・対象製品（Code Security との関係）、プライバシーや管理者側の制御については、**この告知では触れられていない。** 詳細は Copilot Memory のドキュメントへ誘導されている。

## できるようになったこと

- agentic autofix の修正パターンが Copilot Memory へ保存され、以後のアラート解決に再利用される
- 保存された memory が code review や cloud agent へも共有される

## 影響範囲

- 対象ユーザー: agentic autofix と Copilot Memory を有効にしている組織
- 対象プラン: 公式告知に明記なし
- API / UI / 管理者機能: 公式告知に管理者制御の記載なし（Copilot Memory 側のドキュメント参照）

## 教材化メモ

- **「1機能で保存されたものが他機能へ波及する」構造**が要点。autofix の memory が code review にも効く。便益は分かりやすいが、**誤った修正パターンを保存すると、それも横断的に波及する。** memory の中身を棚卸しできるかが導入判断の分かれ目になる。
- **セキュリティ修正のパターンを蓄積する対象がリポジトリ単位**である点。組織横断の知見にはならない代わりに、**そのリポジトリの事情に合った修正が出やすい**というトレードオフとして説明できる。
- **告知に管理者制御の記載が無い**ことを、そのまま確認事項として残す。**public preview の機能を評価するときは、書かれていない項目を列挙するところから始める。**

## 原文確認

- 公式見出し: Agentic autofix now uses Copilot Memory
- 公式URL: https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory
- 原文全文は公式ページで確認してください。
