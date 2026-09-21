---
date: 2026-09-18
title: "GitHub Copilot、6モデルを 2026-10-19 に廃止。GPT-5.5 / GPT-5.4 / GPT-5.4 mini / GPT-5 mini / Gemini 3.7 Flash / Grok 4.5 が対象"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october/
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-18T00:00:00Z
date_precision: date-only
category: incident
---

# 2026-09-18 GitHub Copilot 6モデルの廃止予告（発効 2026-10-19）

## 公式内容の日本語要約

**全 Copilot 体験から6モデルを 2026-10-19 に廃止する**という予告である。公式文は "We will deprecate the following models across all GitHub Copilot experiences ... on October 19th, 2026" とし、**その日までにワークフローと連携の指定モデルを更新するよう求めている。**

| 廃止 | 推奨代替 |
| --- | --- |
| GPT-5.5 | GPT-5.6 Sol |
| GPT-5.4 | GPT-5.6 Sol |
| GPT-5.4 mini | GPT-5.6 Luna |
| GPT-5 mini | GPT-5.6 Luna |
| Gemini 3.7 Flash | Gemini 3.8 Flash |
| Grok 4.5 | Grok 4.6 |

**Enterprise / Business では、管理者が明示的に無効化していない限り、推奨代替が自動で有効になる。** 逆に言えば、**モデルポリシーで代替を無効にしている組織は、廃止日に利用できるモデルが無くなりうる。**

**今回は予告期間が約31日ある。** 直近2週は予告期間が実質ゼロの廃止（08-31告知・09-01発効の6モデル、09-10 告知・同日発効の `MAI-Code-1-Flash`）が続いていたため、**告知の出し方が通常の形へ戻った週**である。

## 影響範囲

- 対象ユーザー: 廃止対象モデルを明示指定している利用者、CI / スクリプトでモデル名を固定している組織
- 対象プラン: 全 Copilot プラン。自動代替の挙動は Enterprise / Business のモデルポリシーに依存
- API / UI / 管理者機能: モデル選択、モデルポリシー、外部連携のモデル指定

## 教材化メモ

**「代替の連鎖」を今週も更新する必要がある。** 09-03 告知で 10-02 廃止となった Claude Opus 4.7 に続き、今回は GPT-5.4 / GPT-5.5 が 10-19 に落ちる。**3週のあいだに GPT 系と Claude 系の両方で「昨日の推奨代替が今日の廃止対象」**が起きている。**モデル名をコードや CI に直書きする運用そのものが負債**であり、エイリアス（auto 選択やモデルポリシー）へ寄せる設計が要る、という一般則の裏づけになる。

**もう1点は「自動代替はデフォルトで働くが、統制を効かせている組織ほど働かない」という逆説。** モデルポリシーで代替を絞っている組織は、**統制した結果として廃止日に穴が開く。** 統制設定は入れた時点ではなく、**外部の退役スケジュールに合わせて棚卸しする対象**である。

## 原文確認

- 公式見出し: Upcoming deprecation of selected GitHub Copilot models in mid-October
- 公式URL: https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october/
- 原文全文は公式ページで確認してください。
