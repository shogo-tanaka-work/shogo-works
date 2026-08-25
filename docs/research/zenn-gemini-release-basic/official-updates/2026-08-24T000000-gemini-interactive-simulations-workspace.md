---
date: 2026-08-24
title: "Gemini アプリのインタラクティブシミュレーション生成が Workspace 全顧客へ展開（既定ON）"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html
fetched_at: 2026-08-25T09:05:00+09:00
published_at: 2026-08-24
date_precision: date-only
rollout_date: 2026-08-24
category: rollout
---

# 2026-08-24 Gemini アプリのインタラクティブシミュレーションが Workspace へ

## 公式内容の日本語要約

Google Workspace Updates が 2026-08-24、**Gemini アプリのチャット内でインタラクティブな可視化（シミュレーション・3Dモデル・表・グリッド）を生成する機能を Workspace 顧客へ提供開始**したと告知した。従来の回答は「テキスト＋静的な図」が中心だったが、質問に合わせて機能する（操作できる）シミュレーションが返るようになる。公式が挙げる例は「DNA の仕組みを3Dで見せて」で、生成された3D構造を回転・ズームできる。振り子のエネルギー交換の観察、キャッシュバーンレートのインタラクティブな表なども例示されている。

**この機能自体の初出は 2026-04-09 の blog.google 記事**（`blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/`）で、当時は一般の Gemini アプリ利用者向けにグローバル展開され、記事末尾に **「Education と Workspace アカウントではまだ利用できない」** と明記されていた。今回の告知は、その除外が解かれ Workspace 側へ展開されたという**ロールアウト**である。8月19日の学生向け発表（`student-offer-google-ai`）でも「インタラクティブな可視化を全 Gemini アプリ利用者へ展開」と触れられていた流れの、Workspace 面での着地にあたる。

提供条件は次のとおり。**管理者向けには「Gemini が有効な全組織で既定ON」**で、Workspace 管理コンソールの Generative AI 設定による既存の制御下に入る。エンドユーザー側の個別設定は無い。ロールアウトは **Rapid Release / Scheduled Release の両ドメインで「Available now」**、対象は全 Google Workspace 顧客・Workspace Individual 契約者、および最低年齢要件を満たす利用者で、利用上限（usage limits）が適用される。

## できるようになったこと

- Gemini アプリのチャット内で、質問に応じた操作可能な3Dモデル・シミュレーション・表・グリッドが生成される
- 対象が Workspace 顧客・Workspace Individual へ拡大（4月時点では Education / Workspace は対象外だった）
- 管理者: Gemini 有効組織では**既定ON**。Generative AI 設定の既存制御に従う
- ユーザー: 個別設定なし。「見せて」「可視化して」と依頼して利用する
- ロールアウト: Rapid / Scheduled 両系統で提供済み。利用上限あり

## 影響範囲

- 対象ユーザー: 全 Google Workspace 顧客、Workspace Individual 契約者、年齢要件を満たす利用者
- 対象プラン: Gemini が有効な全組織（プラン単位の除外は記載なし）
- API / UI / 管理者機能: Gemini アプリの UI 変更。管理者は Generative AI 設定でのみ制御でき、機能単独のトグルは無い

教材化メモ: `src/content/ai-news-notes/gemini/gemini-interactive-simulations-workspace.mdx`

## 原文確認

- 公式見出し: Generate interactive simulations and models in the Gemini app（August 24, 2026）
- 公式URL: https://workspaceupdates.googleblog.com/2026/08/generate-interactive-simulations-and-models-in-the-Gemini-app.html
- 併記（初出・一般向け、2026-04-09）: https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/
- 原文全文は公式ページで確認してください。
