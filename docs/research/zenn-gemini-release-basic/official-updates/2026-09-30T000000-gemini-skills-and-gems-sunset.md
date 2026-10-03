---
date: 2026-09-30
title: "Gemini アプリと Workspace に skills を導入、Gems は 2027-03-01 に利用停止へ"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
fetched_at: 2026-10-01T09:20:00+09:00
published_at: 2026-09-30T00:00:00Z
date_precision: date-only
rollout_date: 2026-10-05
category: policy
---

# 2026-09-30 Gemini の skills 導入と Gems の廃止計画

## 公式内容の日本語要約

Google は **skills** を Gemini アプリと Workspace アプリへ導入すると発表した。公式の定義は「skills は再利用可能なカスタム指示であり、Gemini へプロンプトを出すときにいつでも使える」。**Gems との違いは、skills がインラインで機能し、1つのプロンプトの中で複数の指示セットを重ねられる（stack できる）点**にある。

**対象エディション。** Workspace の skills は Business Starter / Standard / Plus、Enterprise Starter / Standard / Plus、教育向けアドオン（Google AI Pro for Education）、AI Expanded Access。Gemini アプリの skills は**全 Workspace 顧客と個人の Google アカウント**で利用できる。ただし **Workspace 側は18歳以上のユーザー限定**で、Gemini アプリ側は全年齢。

**ロールアウト日程。** Workspace の skills は Rapid Release が **2026-10-05〜10-12**、Scheduled Release が **2026-10-19〜11月中旬**。Gemini アプリの skills は両ドメインとも **2026-10-13〜11月中旬**。

**Gems の移行期限（本発表の核心）。**

- **2026-11-17** — Gems が設定パネルへ移動。作成・利用は引き続き可能
- **2027-03-01**（business / enterprise） — **Gems の作成・編集・利用が不可**になり、**skills の下書きへの自動移行が開始**
- **2027-06-01**（education） — 同じ制限が教育向けにも適用

**管理者設定。** 管理コンソールの「Allow people to use skills in Studio and Gemini in Workspace」で制御する。公式は、管理者に skills への移行を促し、利用者へ移行日程を周知するよう求めている。

## できるようになったこと

- 再利用可能なカスタム指示（skills）をプロンプト内でインラインに、かつ複数重ねて利用できる
- Gemini アプリと Workspace アプリで共通の skills を使える

## 影響範囲

- 対象ユーザー: Workspace 全エディション（上記）および個人 Google アカウント。Workspace 側は18歳以上
- 対象プラン: 上記のとおり
- API / UI / 管理者機能: 管理コンソールで skills の利用可否を制御
- **期限: 2026-11-17 / 2027-03-01（business・enterprise）/ 2027-06-01（education）**

教材化メモ: src/content/ai-news-notes/gemini/gemini-skills-and-gems-sunset.mdx

## 原文確認

- 公式見出し: Introducing skills in the Gemini app and Workspace, plus what's next for Gems
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
- 原文全文は公式ページで確認してください。
