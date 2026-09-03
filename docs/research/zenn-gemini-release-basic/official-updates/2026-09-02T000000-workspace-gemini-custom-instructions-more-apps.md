---
date: 2026-09-02
title: "Workspace のカスタム指示が Drive / Chat / Slides / Sheets / Gmail へ拡大"
service: "Gemini / Workspace"
source: https://workspaceupdates.googleblog.com/2026/09/custom-instructions-for-gemini-in-Workspace-now-available-in-more-apps.html
fetched_at: 2026-09-03T09:25:00+09:00
published_at: 2026-09-02
date_precision: date-only
rollout_date: 2026-09-02
category: rollout
---

# 2026-09-02 Workspace のカスタム指示が対応アプリを拡大

## 公式内容の日本語要約

Google が、Gemini のカスタム指示（custom instructions）の対応範囲を Google ドキュメント以外へ広げた。カスタム指示は、**やりとりを個別化するための継続的な設定**で、毎回の会話で同じ指示を繰り返す必要をなくすものである。ドキュメント向けには 2026-05-04 に提供されていた機能で、今回はその適用先の拡大にあたる。

新たに対応するのは、**Drive の Ask Gemini、Chat の Ask Gemini、そして Slides / Sheets / Gmail の Gemini サイドパネル**である。設定はアプリをまたいで持続するため、同じ書き方・トーン・出力形式の指示を各アプリで書き直す必要がなくなる。

ロールアウトは **2026-09-02 から段階的**で、Rapid Release ドメイン・Scheduled Release ドメインとも、機能が見えるまで最大15日かかるとしている。

対象は「Ask Gemini in Drive、Ask Gemini in Chat、対象アプリの Gemini サイドパネルにアクセスできるすべての Google Workspace 顧客」である。**管理者向けの制御は存在せず、エンドユーザー単位でのみ動作する**。設定はサイドパネルや Ask Gemini のツールから、または `設定 > パーソナライズ` から管理する。

## できるようになったこと

- カスタム指示が **Drive / Chat の Ask Gemini、Slides / Sheets / Gmail のサイドパネル**でも有効になった
- 一度設定した指示が**アプリをまたいで持続**する
- `設定 > パーソナライズ` から保存済みの指示を一覧・編集できる

## 影響範囲

- 対象ユーザー: 対象機能にアクセスできるすべての Workspace 顧客
- 対象プラン: 上記機能へのアクセス権があること（個別エディションの列挙はなし）
- API / UI / 管理者機能: **管理者制御なし**。エンドユーザー設定のみ

教材化メモ: src/content/ai-news-notes/gemini/workspace-gemini-custom-instructions-more-apps.mdx

## 原文確認

- 公式見出し: Custom instructions for Gemini in Workspace now available in more apps
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/custom-instructions-for-gemini-in-Workspace-now-available-in-more-apps.html
- 原文全文は公式ページで確認してください。
