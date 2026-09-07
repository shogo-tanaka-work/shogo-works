---
date: 2026-08-31
title: "GitHub Copilot — 6モデルを廃止（2026-09-01 発効）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-31-selected-github-copilot-models-deprecated
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-08-31
date_precision: date-only
category: incident
---

# 2026-08-31 GitHub Copilot 選定モデルの廃止

## 公式内容の日本語要約

**告知の翌日 2026-09-01 付で6モデルが廃止された**（公式表記は "As of today, September 1, 2026"）。予告期間はほぼ無い。廃止対象と公式が示す代替は次のとおり。

| 廃止モデル | 公式が示す代替 |
| --- | --- |
| Gemini 3.1 Pro | Gemini 3.7 Flash |
| Claude Opus 4.5 | Claude Opus 4.7 / 4.8 / 5 |
| Claude Opus 4.6 | Claude Opus 4.7 / 4.8 / 5 |
| Claude Sonnet 4.5 | Claude Sonnet 5 |
| Claude Sonnet 4.6 | Claude Sonnet 5 |
| Raptor Mini | MAI-Code-1.1-Flash |

利用者はワークフローと連携先を対応モデルへ更新する必要がある。Enterprise 管理者は Copilot settings のポリシーで代替モデルへのアクセスを有効化し、モデルセレクタに出ることを確認する作業が発生する。**廃止済みモデルを消す作業自体は不要**と明記されている。

## できるようになったこと

- （廃止告知。新機能なし）

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者全般。**モデル名を固定して API / CI から呼んでいる環境**
- 対象プラン: 全プラン。ポリシー操作は Business / Enterprise 管理者
- API / UI / 管理者機能: モデルセレクタ、Copilot settings のモデルポリシー

## 教材化メモ

- **告知日と発効日が実質同日**である点が実務上いちばん重い。「予告 → 猶予 → 廃止」という段取りを前提に運用設計していると間に合わない。**モデル名をハードコードした自動化は、ベンダー都合の廃止でその日に壊れる**という具体例として使える。
- Claude Opus 4.5 / 4.6 と Sonnet 4.5 / 4.6 が同時に消えており、**1世代前をまとめて刈る**運用に見える。モデル選定の教材では「最新の1つ前で止める」戦略にも寿命があることを示せる。
- 週次確認ソースであるため、**この告知を検知したのは発効から6日後**である。日次で見ないと決めた以上、期限付き告知は事後検知になりうる——巡回頻度の設計そのものが持つトレードオフの実例。

## 原文確認

- 公式見出し: Selected GitHub Copilot models deprecated
- 公式URL: https://github.blog/changelog/2026-08-31-selected-github-copilot-models-deprecated
- 原文全文は公式ページで確認してください。
