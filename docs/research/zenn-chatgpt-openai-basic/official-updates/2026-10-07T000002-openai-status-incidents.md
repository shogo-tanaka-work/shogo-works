---
date: 2026-10-07
title: "OpenAI の障害が窓内に5件（Codex / Work mode / FedRAMP の GPT-5.6 Instant など）"
service: "OpenAI Status"
source: https://status.openai.com/history
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: incident
---

# 2026-10-07〜08 OpenAI の障害5件

## 公式内容の日本語要約

窓内（2026-10-07T09:10 JST → 2026-10-08T09:10 JST）に OpenAI Status で5件の障害が記録された。ステータスページは時刻をタイムゾーン表記なしで出すため、以下は掲載どおりの時刻である。

| 開始 | 事象 | 状態 |
| --- | --- | --- |
| Oct 8, 12:03 AM | FedRAMP ワークスペースで GPT-5.6 Instant のエラー増加 | 復旧済み |
| Oct 7, 6:23 PM | Codex と Work mode の性能劣化（Dot のターン失敗、応答遅延、proactivity 低下） | 復旧済み |
| Oct 7, 6:06 PM | Codex で Dot が新規スレッドを作成できない | 復旧済み |
| Oct 7, 11:53 AM | デスクトップアプリ最新版で ChatGPT Work の新規スレッドを作成できない | Linux / macOS / Windows に修正をリリース。利用者は最新版へ更新が必要 |
| Oct 7, 3:00 AM | Workspace Agents の劣化と Responses への影響 | 復旧済み |

**4件は復旧済みだが、デスクトップアプリの1件は利用者側のアップデートが必要**な形で終わっている。「修正をリリースした」と「利用者の手元が直った」の間に差があるケースである。

**Codex 関連が2件連続している**（6:06 PM と 6:23 PM）点と、**前日 2026-10-06 も OpenAI 側の障害が1日9件**だった点を合わせると、この時期の Codex Cloud / Work mode 周辺は不安定な状態が続いている。

## できるようになったこと

- （障害のため該当なし）

## 影響範囲

- 対象ユーザー: Codex、ChatGPT Work、Workspace Agents、FedRAMP ワークスペースの利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Codex、Work mode、Responses、デスクトップアプリ

## 教材化メモ

- **「修正リリース済み」と「利用者が復旧」のズレを扱う教材に使える。** デスクトップアプリの障害は、ベンダー側が直しても**利用者がアップデートしない限り直らない。** 社内に配布したアプリの更新経路を押さえていない組織は、この差分をそのまま障害時間として被る。MDM やアプリ更新ポリシーの必要性を、具体例として説明できる。
- **障害の連続性を記録する意味。** 前日9件、本日5件という水準は、単発の incident より「この期間は Codex Cloud に業務クリティカルな処理を寄せない」という判断材料になる。日次で件数を残しておくと、こうした傾向判断ができる。
- 記事化は見送った（判定 D）。いずれも短時間 incident で、SKILL ルールどおり日次サマリーと詳細メモに留める。

## 原文確認

- 公式見出し: 各 incident のタイトル（上表）
- 公式URL: https://status.openai.com/history
- 原文全文は公式ページで確認してください。
