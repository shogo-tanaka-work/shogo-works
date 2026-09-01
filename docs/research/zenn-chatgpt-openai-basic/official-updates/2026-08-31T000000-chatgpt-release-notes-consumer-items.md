---
date: 2026-08-31
title: "ChatGPT 2026-08-31 リリースノートのコンシューマー向け3項目（ステッカー / Live voice ロック画面 / 発音）"
service: "ChatGPT / OpenAI"
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
fetched_at: 2026-09-01T09:20:00+09:00
published_at: 2026-08-31
date_precision: date-only
category: release
---

# 2026-08-31 ChatGPT リリースノートのコンシューマー向け3項目

同日の Release Notes には、業務利用への影響が薄いコンシューマー向け項目が3つ含まれる。記事化はせず、追跡のためここに記録する。

## 公式内容の日本語要約

**1. パーソナライズしたステッカーパックの作成・共有**。プロンプトまたは写真から、メッセージで使えるステッカーのセットを生成できる。ホーム画面または Images からテンプレートを選ぶ経路もある。作成したパックはダウンロードするか、対応端末で iMessage / WhatsApp に追加できる。**モバイルの全 ChatGPT ユーザーに全世界提供**で、アプリの更新が必要。

**2. Live voice の内容がロック画面に表示**。Live voice 会話の内容が iPhone のロック画面に、Dynamic Island 搭載機では Dynamic Island に表示されるようになった。Live Activities により、別アプリ使用中や画面ロック中でも会話内容を追える。アプリ外で音声会話を継続するには、設定 → 音声 で Background conversations を有効にする。

**3. 発音ヘルプの改善**。単語やフレーズの発音を尋ねたとき、タップして音声を聞けるようになり、あわせて音素の分解表示も見られるようになった。

## できるようになったこと

- ステッカーパックの生成と iMessage / WhatsApp への追加（モバイル全ユーザー・全世界）
- Live voice 会話内容のロック画面 / Dynamic Island 表示（iPhone）
- 発音の音声再生と音素分解表示

## 影響範囲

- 対象ユーザー: 主にモバイル・個人利用者。iPhone 固有の項目を含む
- 対象プラン: ステッカーは全ユーザー。他はプランの明示なし
- API / UI / 管理者機能: モバイルアプリ UI のみ。管理者機能・API への影響なし

## 教材化メモ

- **3項目とも業務フロー・ガバナンス・API のいずれにも影響しない**ため、AIニュース記事化を見送った（スコア 3〜4 点）。教材への反映も不要。
- ただし Live Activities 対応は、**「AI との音声会話がアプリ内で完結しなくなる」方向の一例**として押さえておく価値はある。音声インターフェースが OS レベルの常駐機能に統合されていく流れは、将来の業務利用（移動中の口述、ハンズフリー作業）に効いてくる可能性がある。単独では教材化しないが、音声 UI をまとめて扱う回があれば材料になる。
- ステッカー生成は**画像生成機能の消費者向け出口**であり、生成物の権利・商用利用の扱いを聞かれやすい領域。質問が来たときに公式の利用規約へ誘導できるよう、機能の存在だけ認識しておく。

## 原文確認

- 公式見出し: 「Create and share personalized sticker packs」「See Live voice content on your Lock Screen」「Improved pronunciation help in ChatGPT」（いずれも August 31, 2026）
- 公式URL: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- 取得制約: `help.openai.com` は WebFetch が HTTP 403 を返すため、Exa 経由で公式本文を取得して確認した。
- 原文全文は公式ページで確認してください。
