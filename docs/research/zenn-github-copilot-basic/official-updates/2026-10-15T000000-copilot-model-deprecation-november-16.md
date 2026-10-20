---
date: 2026-10-15
title: "GitHub Copilot が Claude Opus 4.8 / Opus 5 / GPT-5.6 Terra を 2026-11-16 に廃止"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november
fetched_at: 2026-10-19T09:40:00+09:00
published_at: 2026-10-15
date_precision: date-only
category: incident
---

# 2026-10-15 GitHub Copilot のモデル廃止予告（発効 2026-11-16）

## 公式内容の日本語要約

**2026-11-16 に、GitHub Copilot の全体験で3モデルを廃止する。** 対象は **Claude Opus 4.8**、**Claude Opus 5**、**GPT-5.6 Terra** である。影響する面は Copilot Chat、インライン編集、ask / agent モード、コード補完で、**事実上すべての利用面**にかかる。

**代替は公式に指定されている。** Claude Opus 4.8 と Claude Opus 5 は **Claude Opus 5.5** へ、GPT-5.6 Terra は **GPT-6.1 Sol または GPT-6 Luna** へ移す。**年額プランの個人契約者は Claude Opus 4.8 のアクセスを維持する**（この廃止の対象外）。

**管理者の作業は「default model enablement を切っているか」で変わる。** 既定有効化が有効なままなら、代替モデルは Enterprise / Business で**自動的に有効**になる。一方、**グローバル既定を切っている組織、または当該モデルを明示的に無効化している組織では自動で入らない**ため、Copilot 設定のモデルポリシーから代替モデルを手動で有効化する必要がある。廃止後に旧モデルを外す作業は不要である。

**残日数は本サマリー作成時点（2026-10-19）で28日。** 2026-09-18 告知の6モデル廃止（発効 2026-10-19）が本日発効するのに続く、2か月連続のモデル棚卸しである。

## できるようになったこと

- 該当なし（廃止予告）

## 影響範囲

- 対象ユーザー: Copilot Chat / インライン編集 / ask・agent モード / コード補完の利用者全般
- 対象プラン: 全プラン。ただし**年額個人プランは Claude Opus 4.8 を維持**
- API / UI / 管理者機能: モデルポリシー（管理者）、モデルセレクター（利用者）

## 教材化メモ

- **「代替は自動で入るが、統制を強めている組織ほど手作業が増える」という構造**がそのまま教材になる。既定有効化を切ってガバナンスを固めた組織は、**廃止のたびに個別の有効化作業が発生する。** 統制と運用コストのトレードオフの具体例である。
- **モデル名を直接書いたワークフロー・スクリプト・プラグイン設定の棚卸し**が実作業。11-16 までに grep して洗い出す手順を演習にできる。
- 2026-10-19 と 2026-11-16 の2回連続で廃止が走るため、**モデル名のハードコードを避ける設計**（エイリアス参照・設定ファイル化）の動機づけに使える。

## 原文確認

- 公式見出し: Upcoming deprecation of selected GitHub Copilot models in mid-November
- 公式URL: https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november
- 原文全文は公式ページで確認してください。
