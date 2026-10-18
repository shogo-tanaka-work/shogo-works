---
date: 2026-09-22
title: "GitHub Copilot に GPT-6 Sol と GPT-6 Luna を追加。Sol は Pro+ 以上、Luna は Pro 以上"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-22-openais-gpt-6-sol-and-gpt-6-luna-now-available
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-22
date_precision: date-only
category: release
---

# 2026-09-22 GitHub Copilot に GPT-6 Sol / Luna

## 公式内容の日本語要約

OpenAI の **GPT-6 Sol** と **GPT-6 Luna** が GitHub Copilot のモデル選択に追加された。09-25 の週次リリースまとめによると、**提供対象は GPT-6 Sol が Pro+ 以上、GPT-6 Luna が Pro 以上**である。

2つのモデルは位置づけが異なる。Codex CLI 側の記録（`../openai-codex/official-updates/2026-09-23T024100-codex-0-156-1.md`）では、**Sol が上位・Luna が低価格帯**で、Codex はレート制限に達したときのプロンプトから Luna を推奨する形にしている。Copilot でも**プラン境界が Sol と Luna で分かれている**点は同じ設計思想と読める。

**前週までに記録済みの廃止スケジュールと直結する。** 10-19 廃止対象には **GPT-5.5 / GPT-5.4 / GPT-5.4 mini / GPT-5 mini** が含まれ、代替として GPT-5.6 Sol / GPT-5.6 Luna が案内されていた。**今週その1世代上の GPT-6 系が入った**ため、移行先の選択肢が告知から1週間で変わっている。

## できるようになったこと

- Copilot のモデルピッカーから GPT-6 Sol（Pro+ 以上）と GPT-6 Luna（Pro 以上）を選べる

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者
- 対象プラン: Sol は Pro+ / Max / Business / Enterprise 相当、Luna は Pro 以上
- API / UI / 管理者機能: Business / Enterprise はモデルポリシーの設定に従う

## 教材化メモ

- **「推奨代替が1週間で1世代古くなる」実例。** 09-18 の廃止告知では GPT-5.6 系が代替として案内されたが、09-22 に GPT-6 系が入った。**モデル名を手順書やコードへ直書きする運用の負債性**を示す具体例として、前週の記録とセットで使える。

## 原文確認

- 公式見出し: OpenAI's GPT-6 Sol and GPT-6 Luna now available
- 公式URL: https://github.blog/changelog/2026-09-22-openais-gpt-6-sol-and-gpt-6-luna-now-available
- 併記: https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21
- 原文全文は公式ページで確認してください。
