---
date: 2026-07-31
title: "GitHub Copilot で Gemini 2.5 Pro と Gemini 3 Flash が廃止"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated
fetched_at: 2026-08-01T15:10:00+09:00
published_at: 2026-07-31
date_precision: date-only
category: policy
---

# 2026-07-31 Copilot の Gemini 2.5 Pro / Gemini 3 Flash 廃止

## 公式内容の日本語要約

GitHub Copilot で提供していた Google の Gemini 2.5 Pro と Gemini 3 Flash が廃止された（即時適用）。移行先として次が案内されている。

- Gemini 2.5 Pro → Gemini 3.1 Pro（Preview）
- Gemini 3 Flash → Gemini 3.6 Flash

影響範囲は Copilot のすべての体験に及ぶ。Copilot Chat、インライン編集、ask / agent モード、コード補完が対象。

必要な対応は立場によって異なる。エンタープライズ管理者は、ワークフローと連携を対応モデルへ更新し、Copilot 設定のポリシーで代替モデルへのアクセスを有効化し、モデルセレクタ（VS Code および github.com）で提供状況を確認する必要がある。一般ユーザーについては、廃止モデルを取り除くための即時対応は不要だが、旧モデルを使っているカスタム構成は更新する必要がある。エンタープライズ顧客は、疑問がある場合はアカウントマネージャーへ問い合わせるよう案内されている。

## できるようになったこと

- （機能追加ではなくモデル廃止）

## 影響範囲

- 対象ユーザー: Copilot 利用者全般。特に旧モデルを明示指定していた管理者・開発者
- 対象プラン: Copilot 全体験（Chat、インライン編集、ask / agent モード、コード補完）
- API / UI / 管理者機能: Copilot 設定のモデルポリシー、モデルセレクタ

## 教材化メモ

- モデル廃止は Copilot 教材で繰り返し発生する事象。個別モデル名の列挙ではなく「モデルは入れ替わる前提でポリシーを設計する」という構造の説明に寄せる根拠が増えた
- 2026-07-29 のデフォルトモデル有効化ポリシー（2026-08-26 発効）と同時期に廃止が来ている点は、追加と廃止の両方が同じ頻度で起きることを示す例
- 「一般ユーザーは即時対応不要だがカスタム構成は要更新」という切り分けは、影響範囲の伝え方の実例として使える

## 原文確認

- 公式見出し: Gemini 2.5 Pro and Gemini 3 Flash deprecated
- 公式URL: https://github.blog/changelog/2026-07-31-gemini-2-5-pro-and-gemini-3-flash-deprecated
- 原文全文は公式ページで確認してください。
