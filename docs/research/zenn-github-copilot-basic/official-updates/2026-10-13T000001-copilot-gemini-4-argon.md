---
date: 2026-10-13
title: "GitHub Copilot に Gemini 4 Argon が GA（Pro+ / Max / Business / Enterprise）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot
fetched_at: 2026-10-19T09:40:00+09:00
published_at: 2026-10-13
date_precision: date-only
category: release
---

# 2026-10-13 Gemini 4 Argon が GitHub Copilot で GA

## 公式内容の日本語要約

**Google の最新フロンティアモデル Gemini 4 Argon が、GitHub Copilot で一般提供になった。** 想定用途は複雑なコーディング、エージェント的タスク、推論タスクである。

**対象プランは Copilot Pro+ / Max / Business / Enterprise。** Pro は含まれない。クライアントは **VS Code、Visual Studio、Copilot CLI、GitHub Copilot coding agent、GitHub Copilot app、JetBrains IDE、Xcode、Eclipse** と広く、モデルピッカーから選ぶ。**段階ロールアウト**のため、すぐ見えないアカウントがある。

**premium request の乗数は示されていない。** 公式は「usage-based billing のもとでプロバイダーのリスト価格で課金する」とし、モデルと価格のドキュメントを参照するよう案内している。

**既定有効化の扱いは従来どおりである。** default model enablement のもとでは、**管理者がグローバル既定を切っているか、当該モデルを明示的に無効化していない限り、新モデルは自動的に有効になる。** 管理者は Copilot 設定のモデルポリシーで制御する。

## できるようになったこと

- 8クライアントのモデルピッカーから Gemini 4 Argon を選べる（Pro+ 以上）

## 影響範囲

- 対象ユーザー: Copilot Pro+ / Max / Business / Enterprise の利用者
- 対象プラン: Pro+ / Max / Business / Enterprise（**Pro は対象外**）
- API / UI / 管理者機能: モデルピッカー（利用者）、モデルポリシー（管理者）

## 教材化メモ

- **「新モデルは既定で有効」という方針が3週連続で確認できる**（10-07 の Claude Haiku 5.5、10-13 の Gemini 4 Argon）。モデル単位で後追い無効化する運用は、**追加から無効化までの期間が必ず開く**という論点をくり返し使える。
- **乗数が示されず「プロバイダーのリスト価格」と書かれた**点は、課金の見積りが難しくなる方向の変化である。premium request の本数で見積る前提が崩れるため、**利用実績ベースで測る必要がある**。
- 同じ週に Opus 4.8 / Opus 5 / GPT-5.6 Terra の廃止（11-16）が出ており、**モデルの追加と廃止が同時に動く**ことを示す素材になる。

## 原文確認

- 公式見出し: Gemini 4 Argon in GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot
- 原文全文は公式ページで確認してください。
