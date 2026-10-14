---
date: 2026-10-13
title: "Gemini 4 Argon が有料 API・Gemini アプリ・Antigravity へ一般提供（9月30日の限定公開から拡大）"
service: "Gemini / Google AI"
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/
fetched_at: 2026-10-14T09:30:00+09:00
published_at: 2026-10-13T16:00:00Z
date_precision: timestamp
category: release
---

# 2026-10-13 Gemini 4 Argon の一般提供

## 公式内容の日本語要約

Google は 2026-10-13、**Gemini 4 Argon を有料 API・Gemini アプリ・Google Antigravity へ提供開始**した。Argon は Gemini 4 ファミリーの第1弾で、公式は「Gemini 4 Argon is just the beginning」と記し、後続モデルの登場を示している。

**本発表は 2026-09-30 の初回発表の続報にあたる。** 9月30日時点では、Fairwind Program 経由の信頼済みサイバー防御者への限定提供が中心で、一般提供の時期は示されていなかった。今回、提供経路が確定した。

**提供経路**は4つ。(1) 開発者・企業は AI Studio と Gemini platform 経由で API からグローバルに利用可能、(2) Google AI Ultra 加入者は Google Antigravity で利用可能、(3) Google AI Ultra と Pro 加入者は Gemini アプリと Search の AI Mode で利用可能、(4) サイバー防御者は Fairwind Program へ申請することで cyber guardrails なしの版を利用可能。加えて、科学者は Antigravity 最上位枠の6か月無償利用へ申請できる（選考あり）。

**料金は導入価格が設定されている。** 入力 $2 / 100万トークン、出力 $10 / 100万トークン、キャッシュ入力は95%引き。**2026-11-30 を過ぎると一般公開モデルの標準価格（入力 $4、出力 $20）へ移行する。**

**公称性能。** Vals Index で finance / coding / legal / tax 横断1位、ERQA（身体性推論）87%、RareBench（希少疾患診断支援、Gamow Labs の私的評価）57%、LabBench 52.2%、Gray Swan の間接プロンプトインジェクションベンチで15回の適応的試行に対する攻撃成功率0.7%、コーディングベンチでのエージェントの近道（shortcut）2%。9月30日の初回発表では DeepSWE v1.1 77.9%、LVBench 91.7%、CWE-bench v1 68%（同率1位）も示されている。出力トークン上限は64K から 1M へ引き上げられた。

**Gemini アプリ側の変更**も同日。Antigravity のエージェント型コーディング UI が **Gemini macOS アプリ**へ入り、チャットからタスクへ切り替えるトグル（離席中も作業を継続）と、Instacart / OpenTable / Adobe / Shopify を含む **40以上のアプリ連携**が加わった。

## できるようになったこと

- 有料 API から Argon をグローバルに呼べる（AI Studio / Gemini platform、Android Studio からも）
- Google AI Pro / Ultra の Gemini アプリと Search AI Mode で Argon を選べる
- Google AI Ultra 加入者が Antigravity で Argon を使える
- Gemini macOS アプリでエージェント型コーディングが使える
- 導入価格の期間中（2026-11-30 まで）は標準価格の半額で試せる

## 影響範囲

- 対象ユーザー: 有料 API 利用者、Google AI Pro / Ultra 加入者、Antigravity 利用者、Fairwind 参加者
- 対象プラン: 有料 API（従量）、Google AI Pro、Google AI Ultra、AI Expanded Access 系
- API / UI / 管理者機能: API（モデル追加・課金）、Gemini アプリ UI、Antigravity、Search AI Mode

## 取得できなかった情報

- **モデル ID 文字列は公式ドキュメントで確認できていない。** 執筆環境から `ai.google.dev` が DNS 解決できず、Gemini API の models / pricing / changelog ページへ到達できなかった。WebSearch では二次情報が互換性のない値を挙げていたため採用していない。**スラッグは推測していない。**
- **コンテキストウィンドウ（入力側）の公式値は未確認。** 公式ブログは「industry-leading 1M unified input-output token limit via the Gemini API」と書き、9月30日の発表は「出力上限が64K → 1M」と書いている。**入力と出力を合わせた枠なのか、入力枠が別にあるのかは一次情報から確定できない。**
- Vertex AI 側の提供状況は公式に確認できていない。

教材化メモ: src/content/ai-news-notes/gemini/gemini-4-argon-general-availability.mdx

## 原文確認

- 公式見出し: 「Gemini 4 Argon: Built to solve your hardest problems」「Gemini 4 Argon comes to the Gemini app.」「Gemini 4 Argon is now available for developers.」「Gemini 4 Argon: our next era of frontier intelligence」（2026-09-30、初回発表）
- 公式URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/ 、 https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/ 、 https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/ 、 https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
- 原文全文は公式ページで確認してください。
