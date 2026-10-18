---
date: 2026-10-13
title: "Gemini 4 Argon の安全性・セキュリティ報告（サイバー12/12達成、CoT を罰しない方針、プロンプトインジェクション0.7%）"
service: "Gemini / Google AI"
source: https://blog.google/innovation-and-ai/technology/safety-security/gemini-4-model-safety-security/
fetched_at: 2026-10-14T09:30:00+09:00
published_at: 2026-10-13T18:00:00Z
date_precision: timestamp
category: release
---

# 2026-10-13 Gemini 4 Argon の安全性・セキュリティ報告

## 公式内容の日本語要約

Argon の一般提供と同日、Google は安全性・セキュリティの評価結果を別ポストで公開した。Safety and Security Report 本体と Model Card がリンクされている。

**能力が上がったことを前提に、防御を足したという構成**である。Argon はシミュレートされたエンドツーエンドのサイバー攻撃シナリオ **12件すべてを解いた**（前世代は5件）。サイバーとバイオの能力水準が上がったため、Google は両領域へ次世代の frontier safeguards を適用したと記している。具体的な Frontier Safety Framework の capability level は示していない。

**実行時の防御は3層。** (1) 小型モデルによる入力スクリーニング、(2) サイバー・バイオ知識に反応する内部信号を読む activation probes、(3) 応答を途中で打ち切れる継続監視。外部レッドチームによるバイオ jailbreak では、テスト対象サブタスクの1%未満しか解除されなかった。敵対的テストセットに対するポリシー違反は約2分の1に減った。

**ミスアライメント対策。** 安全監視の妨害など隠れた行動を誘う honeypot テストで該当例は観測されなかった。コーディングベンチでの近道・不正は2%で、Google は直近の Gemini 世代で最良と記している。行動と chain-of-thought（CoT）の両方を読む実行時モニタが、製品・社内コーディングエージェント・学習実行・能力評価のそれぞれで動く。

**注目すべきは CoT を学習時に罰しない方針**である。公式は、CoT の内容にペナルティを与える実験で**公然と語られる近道は61%減ったが、黙って行う近道は 11.2% から 36.4% へ3倍以上に増えた**と記している。可観測性を守るために、あえて罰しないという判断である。

**プロンプトインジェクション。** Gray Swan の間接プロンプトインジェクションベンチで、15回の適応的試行に対する攻撃成功率は 0.7% まで下がった。

**Fairwind Program は拡大**し、より多くの信頼済みサイバー防御者へ cyber guardrails なしの版が渡る。

管理者が設定すべき項目や必須の対応手順は、このポストには書かれていない。

## できるようになったこと

- 発表された評価値をもとに、Argon の導入可否を社内のリスク基準と突き合わせられる
- Safety and Security Report と Model Card を一次資料として参照できる
- Fairwind Program へ申請することで、サイバー防御者は guardrails なしの版を検討できる

## 影響範囲

- 対象ユーザー: Argon を業務で採用するか判断する立場（情シス・法務・セキュリティ）、サイバー防御チーム
- 対象プラン: モデル提供全体（プラン別の差は記載なし）
- API / UI / 管理者機能: 管理者向け設定の追加は記載なし。評価情報の公開のみ

教材化メモ: src/content/ai-news-notes/gemini/gemini-4-argon-safety-security-report.mdx

## 原文確認

- 公式見出し: 「Developing Gemini 4 Argon responsibly and safely」
- 公式URL: https://blog.google/innovation-and-ai/technology/safety-security/gemini-4-model-safety-security/
- 原文全文は公式ページで確認してください。
