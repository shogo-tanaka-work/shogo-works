---
date: 2026-11-03
title: "GitHub Copilot が JetBrains Air と Xcode のコーディングアシスタントへ対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air
fetched_at: 2026-11-09T09:40:00+09:00
published_at: 2026-11-03
date_precision: date-only
category: release
---

# 2026-11-03 GitHub Copilot が JetBrains Air と Xcode へ対応

## 公式内容の日本語要約

Copilot の実行先が、IDE ベンダー側のアシスタント枠へ2件広がった。どちらも既存の Copilot サブスクリプションをそのまま使い、IDE ベンダーのクレジットは消費しない。

**JetBrains Air**（2026-11-03）。Agent Client Protocol（ACP）経由の統合で、Air のエージェントピッカーから GitHub Copilot を選ぶ。ローカル実行に加え、Air Teams 有効の business 組織では隔離されたクラウド環境でタスクを走らせられる。クラウドタスクは新しい VM 上の Docker コンテナで動き、通信はプロキシを通り、タスク間で状態は持ち越されない。既存の GitHub Copilot プラグインとは併存する。

**Xcode**（2026-11-04）。Xcode 内蔵のコーディングアシスタントで Copilot が public preview になった。Xcode 27.3 beta 以降、macOS Tahoe 26.6 以降が必要で、設定は Xcode Settings > Intelligence。全 Copilot プランが対象。従来の GitHub Copilot for Xcode 拡張も別経路として残る。

## できるようになったこと

- JetBrains Air から Copilot でローカル / クラウドのエージェントタスクを実行し、複数セッションを並行追跡できる
- Air のクラウドタスクを JetBrains AI クレジットではなく Copilot プランの枠で動かせる
- Xcode 内蔵アシスタントで Copilot を選べる（public preview）

## 影響範囲

- 対象ユーザー: JetBrains Air 利用者、Xcode 27.3 beta 以降の利用者
- 対象プラン: Xcode は全 Copilot プラン。Air のクラウドタスクは Air Teams 有効の business 組織が前提
- API / UI / 管理者機能: **管理統制に穴がある。** Air 側の governance / analytics に Copilot の利用実績は含まれず、Air 管理者は governance policy で Copilot を無効化できるが **Air 内で Copilot の支出上限は設定できない**。個々のタスクが個人プランと組織プランのどちらを使うかも利用者側では選べない

## 教材化メモ

- **「IDE ベンダーのアシスタント枠に自社のサブスクリプションを差す」形が増えている。** 課金は Copilot 側、実行と可視化は IDE ベンダー側に分かれるため、**利用統制の責任分界点が曖昧になる。** Air の例では利用実績が Air の analytics に出ず、支出上限も Air 側から掛けられない。「どちらの管理画面を見れば利用が分かるか」を導入時に確認させる教材になる。
- 併存する公式経路が2つある（Air 統合と従来プラグイン / Xcode 内蔵と Xcode 拡張）。**どちらを標準にするかを決めずに両方入れると、設定とポリシーの適用先が分かれる。**

## 原文確認

- 公式見出し: "GitHub Copilot is now available in JetBrains Air" / "GitHub Copilot is now available in Xcode's coding assistant"
- 公式URL: https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air 、 https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant
- 原文全文は公式ページで確認してください。
