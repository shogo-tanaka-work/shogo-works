---
date: 2026-08-18
title: "ChatGPT for Teens — 13〜17歳の既定体験化、Study Hours / Quiet Hours、保護者通知の拡大"
service: "OpenAI"
source: https://openai.com/index/introducing-chatgpt-for-teens/
fetched_at: 2026-08-19T10:10:00+09:00
published_at: 2026-08-18
date_precision: date-only
---

# 2026-08-18 ChatGPT for Teens

## 公式内容の日本語要約

13〜17歳向けの ChatGPT 体験を独立させ、該当年齢と判定されたユーザーの**既定の体験**にする発表。新規アカウント作成や設定変更は不要で、自己申告または OpenAI 側の年齢推定（クエリ傾向などに基づく age assurance）で18歳未満と判定された時点で切り替わる。13歳未満は引き続き利用不可。

**学習**と**安全**の2本柱で構成される。学習側では既存の Study Mode を軸に、指定した時間帯に Study Mode を既定にする **Study Hours** を追加した。設定は本人でも、リンク済みの保護者アカウントからでも行える。Study Hours が無効でも、宿題を丸投げしようとする入力を検知して Study Mode へ誘導する。スターター プロンプトも学習寄りの内容に固定される。設計には Stanford University が関わっている。

安全側では、自傷・自殺、暴力、摂食障害、危険行為、性的・過激な描写に対する既定の保護を強化した。加えて**擬人化の抑制**が明示されており、モデルが自らを friend と呼ぶ、個人的な感情を持つと示唆する、意識があると示唆する、といった表現を制限する。ChatGPT を家族・友人・教師より重要だと位置づける表現も制限対象である。休憩リマインダーの頻度を上げ、利用を止める **Quiet Hours** も設定できる。

**保護者通知の対象が摂食障害へ拡大**された。従来は暴力的な脅迫に関するポリシー違反での通知が中心だったが、深刻な自傷の懸念を示す会話も対象になる。通知は SMS・アプリ内・メールで送られ、**送信前に OpenAI のフルタイム従業員が内容を確認**し、プロンプトから1時間以内の通知を目標としている。保護者管理機能の利用には本人と保護者の双方の同意が必要だが、OpenAI は保護者管理を使わない場合でも安全であることを設計目標としている。

ロールアウトは 2026-08-18 に全世界で開始し、**約2週間で完了予定**と説明されている。

## できるようになったこと

- 13〜17歳と判定されたユーザーの既定体験が ChatGPT for Teens に切り替わる（新規アカウント不要）
- Study Hours（指定時間帯に Study Mode を既定化）と Quiet Hours（利用停止時間帯）の設定
- 宿題の丸投げを検知して Study Mode へ誘導
- 保護者への安全通知が摂食障害を含む深刻な自傷懸念へ拡大（人手レビュー後、1時間以内目標）
- 擬人化・関係性を示唆する応答の制限

## 影響範囲

- 対象ユーザー: 13〜17歳の ChatGPT 利用者と、その保護者。教育機関
- 対象プラン: 記載なし（年齢判定ベースで既定適用）
- API / UI / 管理者機能: UI と既定挙動の変更。API への言及なし

教材化メモ: src/content/ai-news-notes/chatgpt-openai/chatgpt-for-teens.mdx

## 原文確認

- 公式見出し: Introducing ChatGPT for Teens
- 公式URL: https://openai.com/index/introducing-chatgpt-for-teens/
- **公式ページ本文は取得できていない。**WebFetch は HTTP 403、Exa の web_fetch は livecrawl タイムアウトで失敗した。`https://openai.com/news/` 一覧で公式ポストの存在（Product、Aug 18, 2026）と日付は確認済み。
- 本要約は次の報道を突き合わせて作成した: AP通信、BBC、ABC News、Engadget、Fox Business。いずれも OpenAI の Head of Youth and Families（Lauren Jonas）または公式ブログの記述を引用している。
- 原文全文は公式ページで確認してください。
