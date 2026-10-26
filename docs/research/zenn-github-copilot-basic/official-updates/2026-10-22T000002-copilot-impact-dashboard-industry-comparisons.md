---
date: 2026-10-22
title: "Copilot impact dashboard に業界比較（opt-in・データは集計へ提供）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard
fetched_at: 2026-10-26T09:40:00+09:00
published_at: 2026-10-22
date_precision: date-only
category: enhancement
---

# 2026-10-22 Copilot impact dashboard の業界比較

## 公式内容の日本語要約

**Copilot impact dashboard に「Industry comparison」節が追加された。** 自組織の agentic 採用度と leverage を、参加している他社の集計データと比較できる。表示されるのは agent-first / multi-agent な利用者の割合と、**agentic な利用者が非 agentic な利用者より高い率で pull request をマージしているか**である。スコアは28日間で peer median と top decile に対して順位付けされ、十分な数の企業が参加して初めて表示される。企業規模帯と10業種から選べる。peer group が小さすぎる場合は同じ規模帯の全業種へ広がり、ダッシュボードはどの group を使ったかを表示する。

**既定はオフで、opt-in が必要である。** opt-in と peer group の選択ができるのは **enterprise owner と、enterprise に属さない organization の owner のみ**。比較結果の閲覧は impact dashboard にアクセスできる人全員ができる。

**opt-in すると自組織のデータが集計ベンチマークへ入り、他の参加企業が見る。** 公式は、ベンチマークに識別情報は含まれず30日後に削除されると書いている。業界比較は使用状況メトリクス API、NDJSON エクスポート、ダウンロードには出ない。地域データは分離される。

Enterprise Cloud with data residency は同一リージョンの参加者とのみ比較される。enterprise 配下の organization はその enterprise を通じて参加する。**Copilot Business のシートを割り当てるためだけに存在する enterprise は参加できない。** Copilot usage metrics ポリシーの有効化が前提である。opt-out は即時に比較を止め、次回の日次更新から自組織のデータを除く。

## できるようになったこと

- 自組織の agentic 採用度・leverage を、同規模・同業種の参加企業の median / top decile と比較できる
- 比較の peer group（規模帯・業種）を選べる

## 影響範囲

- 対象ユーザー: enterprise owner / enterprise 非所属の organization owner（opt-in）、impact dashboard 閲覧者（結果の閲覧）
- 対象プラン: 明記なし（Copilot usage metrics ポリシーが前提。Copilot Business シート割当専用 enterprise は対象外）
- API / UI / 管理者機能: impact dashboard（UI）、enterprise / organization の Copilot ポリシー

## 教材化メモ

- **「ベンチマークを見るために自社データを差し出す」構造が明示されている。** 公式は識別情報なし・30日で削除と書いているが、**opt-in の判断は情報開示の判断である。** 技術的な安全性の説明と、組織としての開示可否の判断は別のレイヤーにある、という整理の教材になる。
- 指標が **「agentic な利用者が非 agentic な利用者より高い率で PR をマージしているか」** である点が示唆的である。ベンダー側が「エージェント利用の効果」をこの形で定義しに来ている。**自社でAI活用の効果測定をするときに、何を成果指標に置くかの参考例**として扱える（同時に、マージ率を成果とみなすことの限界も論点になる）。
- 「十分な数の企業が参加するまで表示されない」「peer group が小さいと全業種へ広がる」という挙動は、**k-匿名性に近い設計**の具体例になる。

## 原文確認

- 公式見出し: Industry comparisons in the Copilot impact dashboard
- 公式URL: https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard
- 原文全文は公式ページで確認してください。
