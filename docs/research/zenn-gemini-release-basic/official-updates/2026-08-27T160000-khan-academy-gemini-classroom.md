---
date: 2026-08-27
title: "Khan Academy の Khanmigo に Gemini 製の対話型図解と教師検証つき練習問題"
service: "Gemini / Google Education"
source: https://blog.google/products-and-platforms/products/education/khan-academy-back-to-school/
fetched_at: 2026-08-28T09:05:00+09:00
published_at: 2026-08-27T16:00:00Z
date_precision: timestamp
category: release
---

# 2026-08-27 Google × Khan Academy の教室向け AI ツール

## 公式内容の日本語要約

Google と Khan Academy が、Gemini を使った教室向け機能を試験導入から本番へ移した。2026年の新学期に合わせた提供である。

**対話型の図解（Interactive Diagrams）**: Khanmigo が **Gemini の推論能力**を使って、視覚的な補助教材と図を生成する。生徒が頂点や線分をドラッグすると図がリアルタイムに変形し、数学・理科の概念を操作しながら理解できる。

**練習問題ツール（Practice My Knowledge の拡張）**: 教師が、生徒に配る前に練習問題を**立案・作成・検証**できる。自分の教材をアップロードして Gemini に参照させることができ、**配布前にすべての問題を教師が確認する**運用が前提になっている。

すでに Khanmigo を導入している学区は、これらの新機能を即座に利用できる。開発には Google.org のフェローシップ経由で **Google のエンジニア6名が2026年3月から6か月**参加した。Khan Academy は非営利で、パートナーシップには Google.org の助成が含まれる。価格・受給条件は公式ページに明記されていない。

## できるようになったこと

- Khanmigo での対話操作できる図解の自動生成（数学・理科）
- 教師が配布前に検証できる練習問題の生成（自前教材の参照込み）

## 影響範囲

- 対象ユーザー: Khanmigo を導入している学区の教師・生徒（主に米国 K–12）
- 対象プラン: 公式に価格の明記なし（Khan Academy は非営利、Google.org 助成あり）
- API / UI / 管理者機能: Khanmigo の UI

## 教材化メモ

- **「教師が配布前に全問検証する」という運用設計**が要点。AI の生成物をそのまま流さず、人のレビューを工程として仕様に埋め込んでいる。企業で AI 生成物を業務に流すときの**Human-in-the-loop をどこに置くか**の実例として使える。
- **対話操作できる図解**は「AI の出力＝テキスト」という前提を崩す例。生成 AI の出力形態を広げると、教材や説明資料の作り方そのものが変わる。研修コンテンツ設計の話に接続できる。
- 記事化は見送った（本数上限・スコア5）。米国 K–12 向けで、日本の読者の実務判断に直結しない。

## 原文確認

- 公式見出し: Partnering with Khan Academy on building AI tools for classrooms
- 公式URL: https://blog.google/products-and-platforms/products/education/khan-academy-back-to-school/
- 原文全文は公式ページで確認してください。
