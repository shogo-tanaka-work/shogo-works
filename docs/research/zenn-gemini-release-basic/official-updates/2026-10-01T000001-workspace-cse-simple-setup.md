---
date: 2026-10-01
title: "Workspace のクライアントサイド暗号化（CSE）に簡易セットアップ。Cloud HSM + Google Identity で数クリック"
service: "Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/10/simple-setup-option-for-workspace-client-side-encryption.html
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: enhancement
---

# 2026-10-01 Workspace CSE の簡易セットアップ

## 公式内容の日本語要約

Google Workspace の**クライアントサイド暗号化（CSE）**に、初期設定を大幅に簡略化する**簡易セットアップ**が追加された。**Cloud HSM の鍵と Google Identity を組み合わせる**ことで、従来は手作業で時間を要した構成を「数クリック」で完了できるとしている。

**対象は Enterprise Plus のうち、Assured Controls または Assured Controls Plus のアドオンを契約している顧客**に限られる。

**2026-10-01 から「Available now」**で、Rapid Release / Scheduled Release の両ドメインに提供。**エンドユーザー側の作業は不要**。

**既存の方式を置き換えるものではない。** サードパーティの鍵サービスを使うカスタム構成が必要な管理者向けには、従来の CSE セットアップも引き続き利用できる。

## できるようになったこと

- Cloud HSM + Google Identity による CSE の短時間セットアップ
- 従来のサードパーティ鍵サービス構成との併存

## 影響範囲

- 対象ユーザー: Enterprise Plus + Assured Controls / Assured Controls Plus
- 対象プラン: 上記アドオン契約が前提
- API / UI / 管理者機能: 管理コンソールからのセットアップ。エンドユーザー作業なし

## 教材化メモ

- **「導入のハードルは機能ではなく初期設定にある」**という例。CSE は以前から提供されていたが、鍵管理の構成が重くて使われなかった。**既存機能の採用率を上げる手段として、機能追加ではなくセットアップ簡略化を選ぶ**という判断。
- **簡易化のために前提を固定する**（Cloud HSM + Google Identity に限定）設計。柔軟性と導入容易性のトレードオフで、**カスタム経路を残したうえで既定を簡単にする**のが定石。
- 対象が Enterprise Plus + 特定アドオンに限られるため、読者の大半には直接影響しない。本日はスコア不足で記事化を見送った。

## 原文確認

- 公式見出し: Simple setup option for Workspace Client-side encryption
- 公式URL: https://workspaceupdates.googleblog.com/2026/10/simple-setup-option-for-workspace-client-side-encryption.html
- 原文全文は公式ページで確認してください。
