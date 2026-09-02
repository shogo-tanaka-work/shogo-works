---
date: 2026-09-01
title: "Path to Astra — Preparedness Framework の Critical サイバー閾値に初到達"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/path-to-astra/
fetched_at: 2026-09-02T09:05:00+09:00
published_at: 2026-09-01
date_precision: date-only
category: policy
---

# 2026-09-01 Path to Astra

教材化メモ: src/content/ai-news-notes/chatgpt-openai/path-to-astra-critical-cyber.mdx

## 公式内容の日本語要約

OpenAI が、開発中のモデル **Astra が Preparedness Framework の「Critical」サイバーセキュリティ能力閾値に達した**と結論づけたことを公表した。**同社がこの水準を指定した最初のモデル**である。

Critical 閾値の条件は2つで、どちらかを満たせば該当する。(1) 堅牢化された実世界の重要システムの多くに対し、人の介入なしに全深刻度のゼロデイエクスポイトを特定・開発できる。(2) 高レベルの目標だけを与えられて、堅牢化された標的への新規のサイバー攻撃戦略をエンドツーエンドで立案・実行できる。**2026-08-07 の時点では「Critical を排除できない」という段階だったが、追加評価を経て「該当する」という判断に変わった。**

**この判断を受けて、OpenAI は Astra の開発とリリースの一部を数週間遅らせた。** OpenAI-Hugging Face インシデントの後、フロンティア学習の一部を2週間停止して学習インフラの隔離・ネットワーク制御・監視を強化しており、**停止していた大規模な強化学習ランは 2026-08-28 に再開**した。一部の小規模な実験的学習ランは引き続き保留中である。

セーフガードは2経路をカバーする設計になっている。**悪意ある利用者による濫用**と、**モデル自身が権限外の不整合な行動を取ること**である。後者は外部提供だけでなく社内開発にも適用される。

具体的な数値として、サイバー系の jailbreak 評価で **Astra は 91.5% のリクエストを拒否**した（GPT-5.6 Sol は 59%）。高リスクと評価されたアカウントには、より保守的な挙動境界を適用する。加えて、**思考連鎖（chain-of-thought）の監視を本番運用に入れ、権限外の挙動を検知したら自動的に停止する。**

**運用上の副作用が明記されている点が重要である。** 「リリース時点では、意図する以上の摩擦が生じると見込んでいる」と公式が認めており、**誤検知によって正当な作業（防御目的のセキュリティ作業を含む）が遅延・一時停止・中断されうる。** 監視が処理を止めた場合、**ChatGPT や Codex では利用者に確認が求められ、API など他の面ではタスクがそのまま停止する。**

提供は「まもなく」だが、**高度なサイバー能力へのアクセスは限定される。** 当初はアルファテスターの小集団に限られ、その後 Daybreak Blue 経由で防御用途向けに拡大する予定。

## できるようになったこと

- （提供前の告知のため、機能提供は未開始）
- Astra は「まもなく」一般提供予定。ただし高度サイバー能力は限定提供

## 影響範囲

- 対象ユーザー: Astra を今後利用する全ユーザー。特に**セキュリティ関連の作業を API 経由で自動化している利用者**
- 対象プラン: 未定（高度サイバー機能は alpha → Daybreak Blue の順で段階提供）
- API / UI / 管理者機能: **API 面では監視による停止時にタスクが中断される。** ChatGPT / Codex では確認プロンプトが出る

## 原文確認

- 公式見出し: Path to Astra: critical capabilities and frontier safeguards
- 公式URL: https://openai.com/index/path-to-astra/
- 関連: https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/ （2026-08-07、Critical を排除できないと発表した回）
- 取得制約: `openai.com` は WebFetch が HTTP 403 を返すため、Exa 経由で公式本文を取得した
- 原文全文は公式ページで確認してください。
