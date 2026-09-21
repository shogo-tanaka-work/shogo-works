---
date: 2026-09-18
title: "Grok Voice Transcribe 2.0 が公開。精度2倍・価格据え置きで、1.0 は「数週間のうちに」非推奨・既定も切り替わる"
service: "xAI / Grok"
source: https://x.ai/news/grok-voice-transcribe-2
official_url: https://docs.x.ai/docs/release-notes
fetched_at: 2026-09-21T10:15:00+09:00
published_at: 2026-09-18T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-18 Grok Voice Transcribe 2.0

## 公式内容の日本語要約

xAI が **speech-to-text モデル `grok-voice-transcribe-2.0`** を公開した。公式は **「1.0 の2倍の精度、同じ価格」**とし、Artificial Analysis の streaming 系ボードで**32モデル中1位**と述べている。改善が大きいのは**電話音声（カスタマーサポート）、会話音声、口頭での資格情報（口座番号・電話番号・メールアドレス）、多言語**である。

**価格は据え置き**で、バッチが音声1時間あたり $0.10、ストリーミングが $0.20。**diarization（話者分離）、タイムスタンプ、key terms はこの価格に含まれる。**

機能は、バッチ / ストリーミング両対応、**単語単位のタイムスタンプと信頼度**、話者分離、**最大8チャンネルのマルチチャンネル**、**1リクエスト100語までの key term バイアス**、数値・連絡先の整形、フィラー除去、音声エージェント向けの turn detection。

**利用者側の対応が必要な点はここである。** 公式は **「Grok Voice Transcribe 2.0 は近くSpeech-to-Text API の既定になり、Grok Voice Transcribe 1.0 は数週間のうちに非推奨になる」**と述べ、**移行期間中も 1.0 を使い続けたい場合は `grok-voice-transcribe-1.0` を明示指定（pin）するよう案内**している。**具体的な日付は示されていない。**

## できるようになったこと

- `grok-voice-transcribe-2.0` をバッチ / ストリーミング双方で指定して使う
- 価格を上げずに精度・多言語・電話音声の認識を改善する

## 影響範囲

- 対象ユーザー: xAI Speech-to-Text API の利用者、音声エージェント実装者
- 対象プラン: API 利用者（価格は 1.0 と同額）
- API / UI / 管理者機能: STT の REST / WebSocket エンドポイント、既定モデル

## 教材化メモ

**「モデルを指定していない実装は、ある日勝手に切り替わる」の教材として、今週いちばん分かりやすい。** model パラメータを省略している既存実装は、**xAI が既定を切り替えた瞬間に 2.0 へ移る。** 精度は上がるが、**レイテンシ特性（partial transcript のタイミング）が変わる**ため、音声エージェントのように途中経過に依存する実装は挙動が変わりうる。**先に pin して、自分の音声で A/B してから移る**という手順に落とせる。

**同じ週に GitHub Copilot が6モデルの廃止を予告し、auto モデル選択のティアを出している。** 「モデル名を固定する / 宣言に寄せる」のトレードオフが、**今週は3社（xAI・GitHub・Anthropic）で同時に表面化している。** まとめて扱うと読者に効く。

**なお公式は退役日を示していないため、残日数は書けない。** 「数週間のうちに」という表現のまま記録する。

## 原文確認

- 公式見出し: Introducing Grok Voice Transcribe 2.0
- 公式URL: https://x.ai/news/grok-voice-transcribe-2
- release notes（September 節に掲載）: https://docs.x.ai/docs/release-notes
- 原文全文は公式ページで確認してください。
