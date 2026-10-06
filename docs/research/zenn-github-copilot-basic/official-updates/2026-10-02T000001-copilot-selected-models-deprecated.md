---
date: 2026-10-02
title: "GitHub Copilot の4モデルが廃止（2026-10-02 発効。Gemini 3.5 / 3.6 Flash、Kimi K2.7 Code、Claude Opus 4.7）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-10-02T00:00:00Z
date_precision: date-only
category: incident
---

# 2026-10-02 GitHub Copilot の4モデル廃止（発効済み）

## 公式内容の日本語要約

**2026-10-02 付で4モデルが廃止された。** 2026-09-03 に予告されていた廃止が、予定どおりこの日に発効した形である。

| 廃止モデル | 公式が示す代替 |
| --- | --- |
| Gemini 3.5 Flash | Gemini 3.8 Flash |
| Gemini 3.6 Flash | Gemini 3.8 Flash |
| Kimi K2.7 Code | Kimi K3 |
| Claude Opus 4.7 | Claude Opus 5.5 |

適用範囲は「**Copilot Chat、インライン編集、ask / agent モード、コード補完を含む全 GitHub Copilot 体験**」である。

**利用者側の対応**: 廃止モデルを一覧から消すための操作は不要。ただしワークフローや連携設定は対応モデルへ更新する必要がある。

**Enterprise 管理者の対応**: **Copilot settings の model policy で代替モデルへのアクセスを有効化する必要がある場合がある。**

Enterprise 顧客は不明点をアカウントマネージャーへ問い合わせるよう案内されている。

## できるようになったこと

- （廃止のため該当なし）

## 影響範囲

- 対象ユーザー: 廃止4モデルを指定していた全利用者、Enterprise 管理者
- 対象プラン: 全プラン（全 Copilot 体験）
- API / UI / 管理者機能: **model policy で代替モデルの有効化が必要な場合がある**

## 教材化メモ

- **予告（09-03）から発効（10-02）まで29日。** 9月前半にあった「予告実質1日」「予告ゼロ」の廃止と比べると十分な予告期間だが、**同じベンダーの中で予告期間が1日〜29日まで幅がある**という事実そのものが、外部ベンダー依存のリスクとして記録に値する。
- **Opus 4.7 の代替案内が、告知の時期で変わった。** 09-03 の予告時点では Opus 5、前週時点では Opus 5 と 5.5 の2択、本告知では **Opus 5.5 のみ**が示されている。**推奨代替は告知のたびに書き換わる**ため、予告を読んだ時点の代替名をそのまま実装へ焼き込むと、発効時にはもう1世代古い。
- **「一覧から消す操作は不要」だが「ワークフローと連携設定は更新が必要」**という二段構えが実務の要点。UI から消えるのは自動だが、**モデル名を文字列で持っている箇所は自動では直らない**。モデル名の直書き箇所を棚卸しできる状態にしておくこと、という運用ルールの根拠になる。

## 原文確認

- 公式見出し: Selected models in GitHub Copilot deprecated
- 公式URL: https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated
- 原文全文は公式ページで確認してください。
