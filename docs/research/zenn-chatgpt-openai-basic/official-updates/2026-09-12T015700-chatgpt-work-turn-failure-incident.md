---
date: 2026-09-12
title: "ChatGPT Work の既存スレッドで約1%のターンが失敗（復旧済み）"
service: "ChatGPT Work"
source: https://status.openai.com/history
fetched_at: 2026-09-13T09:18:00+09:00
published_at: 2026-09-12T01:57:00Z
date_precision: timestamp
category: incident
---

# 2026-09-12 ChatGPT Work の既存スレッドで約1%のターンが失敗

## 公式内容の日本語要約

OpenAI Status に **「1% of ChatGPT Work (mobile/web) turns are failing for existing threads」** として 2026-09-12T01:57Z 頃に掲載されたインシデント。**既存スレッドに対するターンの約1%が失敗**する事象で、mobile と web の両方が対象。ステータスは `fully recovered` となっている。

影響率が約1%と低く、**新規スレッドではなく既存スレッドの継続だけが対象**という限定的な事象である。復旧済みで、恒久的な仕様変更は伴わない。

窓内（2026-09-12T00:02Z → 2026-09-13T00:02Z）の OpenAI 系 incident は本件のみ。窓の直前には 09-11T11:21Z の GPT-5.6 Sol の API エラー増、09-11T10:16Z の欧州 ChatGPT エラー増があるが、いずれも前窓（PR #416 の担当範囲）に属し、かつ復旧済みである。

**なお ChatGPT Work は直近2日で障害の掲載が続いている**（09-10T21:30Z の ChatGPT Work エラー増、本件、いずれも復旧済み）。09-10〜09-11 に Data プラグイン・Deep Research・Library 共有が Work へ一斉投入された時期と重なっており、**機能追加直後の不安定化という構図**として記録しておく。因果関係は公式に示されていないため、推測の域を出ない。

## できるようになったこと

- 該当なし（障害と復旧）

## 影響範囲

- 対象ユーザー: ChatGPT Work を mobile / web で使い、既存スレッドを継続していた利用者の約1%
- 対象プラン: Work アクセスを持つプラン
- API / UI / 管理者機能: UI 側のみ。API の障害告知は本件に含まれない

## 教材化メモ

- **記事化しないため、ここに残す。** 短時間 incident のため速報価値はないが、**「失敗率1%」という水準の障害は体感で検知しにくい**点が教材素材になる。全断なら即座に気づくが、1%は「たまたま失敗した」と処理されて報告が上がらない。
- 業務利用の教材では、**リトライで通ってしまう障害こそステータスページを見る**という手順に繋げられる。ChatGPT を業務フローへ組み込んでいる組織では、ステータスページの購読先を決めておく話とセットで扱う。
- **新機能投入直後の期間は障害告知が増えやすい**という観測も、導入タイミングの判断材料として使える。09-10〜09-11 に Work へ機能が一斉投入され、その前後で Work 関連の incident が2件出ている。因果は不明だが、**大型投入の直後に本番クリティカルな業務を載せない**という判断の根拠になる。

## 原文確認

- 公式見出し: 1% of ChatGPT Work (mobile/web) turns are failing for existing threads
- 公式URL: https://status.openai.com/history
- 原文全文は公式ページで確認してください。
