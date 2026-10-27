---
date: 2026-10-19
title: "GitHub Copilot の6モデルが 2026-10-19 付で廃止（発効）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026
fetched_at: 2026-10-26T09:40:00+09:00
published_at: 2026-10-19
date_precision: date-only
category: incident
---

# 2026-10-19 GitHub Copilot の6モデル廃止が発効

## 公式内容の日本語要約

**2026-09-18 に予告されていた6モデルの廃止が、2026-10-19 付で発効した。** 対象は Gemini 3.7 Flash、GPT-5.5、GPT-5.4、GPT-5.4 mini、GPT-5 mini、Grok 4.5 の6つ。代替は Gemini 3.7 Flash → Gemini 3.8 Flash、GPT-5.5 / GPT-5.4 → GPT-6.1 Sol、GPT-5.4 mini / GPT-5 mini → GPT-6 Luna、Grok 4.5 → Grok 4.7 である。

**適用範囲は「ほとんどの GitHub Copilot 体験」**で、Copilot Chat、inline edits、ask / agent モード、コード補完を含む。

**利用者側は、廃止モデルを指定しているワークフローや連携を supported なモデルへ書き換える必要がある。** 廃止モデルの削除自体に利用者の操作は不要である。**Enterprise 管理者は、代替モデルへのアクセスを Copilot 設定の model policies で有効化する必要がある。** モデルごとにポリシーが有効になっているかを個別に確認する必要があり、有効化後に VS Code と github.com の Copilot Chat のモデルセレクタへ現れる。

対象プランの明記はなく、本文は Copilot Enterprise 管理者と GitHub Enterprise 顧客に向けた記述のみである。

## できるようになったこと

- （廃止告知のため該当なし）

## 影響範囲

- 対象ユーザー: 廃止された6モデルを指定していた利用者・連携・自動化
- 対象プラン: 明記なし（Enterprise 管理者向けの記述あり）
- API / UI / 管理者機能: model policies（管理者機能）、Copilot Chat のモデルセレクタ（UI）

## 教材化メモ

- **「代替モデルは自動では使えない」**のがこの告知の肝である。廃止モデルは消えるが、**代替モデルは管理者が model policies で個別に有効化しないとセレクタに出ない。** 「廃止されたら勝手に後継へ移る」という思い込みが、そのまま利用不能として現れる構造になっている。
- 予告（2026-09-18）から発効（2026-10-19）まで約1か月。**週次巡回では、発効済みの告知と未発効の告知を混ぜずに扱う**必要がある。同じ `label/copilot/` 一覧に 2026-11-16 発効の別告知（Claude Opus 4.8 / Claude Opus 5 / GPT-5.6 Terra）が並んでいる。
- 教材側では、**モデル名を本文へ直書きした手順書が最も早く古くなる**例として使える。GPT-5.4 / GPT-5.5 は約1年前のフラッグシップであり、それが1年で退役している。

## 原文確認

- 公式見出し: GitHub Copilot models deprecated on October 19, 2026
- 公式URL: https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026
- 原文全文は公式ページで確認してください。
