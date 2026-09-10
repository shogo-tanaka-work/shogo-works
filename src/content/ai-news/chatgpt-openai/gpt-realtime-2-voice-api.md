---
title: "GPT-Realtime-2 API公開：推論・翻訳・文字起こし対応"
tool: "chatgpt-openai"
toolLabel: "ChatGPT / OpenAI"
date: 2026-05-07
sourceUrl: "https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/"
summary: "OpenAIがRealtime API向けにGPT-Realtime-2、GPT-Realtime-Translate、GPT-Realtime-Whisperを公開。音声対話で推論、ツール実行、翻訳、逐次文字起こしを扱いやすくなった。"
description: "OpenAIのRealtime APIにGPT-Realtime-2・翻訳・Whisperの3モデルが追加。音声対話中にツール実行や多言語翻訳をリアルタイムで組み込め、電話対応AIや会議文字起こしの実装が現実的になった変更点を解説。"
impact: "電話対応、接客、通訳、会議文字起こし、移動中の業務支援など、音声インターフェース型AIエージェントの実装範囲が広がる。"
tags: ["openai", "realtime-api", "gpt-realtime-2", "voice-agent", "speech-to-speech", "translation", "transcription"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/chatgpt/overview"
draft: false
---

## 要約

OpenAIは2026年5月7日、Realtime API向けの新しい音声モデル群を公開しました。中心は **GPT-Realtime-2** です。従来のリアルタイム音声AIが「自然に会話できる」ことを主眼にしていたのに対し、今回の更新では、会話中に推論し、ツールを呼び、途中で訂正されても流れを保つ「音声エージェント」寄りの性能が強調されています。

同時に、ライブ音声翻訳向けの **GPT-Realtime-Translate** と、低遅延のストリーミング文字起こし向けの **GPT-Realtime-Whisper** も公開されました。つまり、OpenAIの音声APIは、会話、翻訳、文字起こしをリアルタイム業務の部品として組み込む段階に入っています。

## 何が変わったか

- GPT-Realtime-2をRealtime APIで利用可能に
- 音声対話中の推論、ツール呼び出し、割り込み、訂正への対応を強化
- context windowが32Kから128Kへ拡大
- reasoning effortを `minimal` / `low` / `medium` / `high` / `xhigh` から選択可能
- 複数ツールの並列呼び出し、ツール実行中の音声説明、失敗時の復帰挙動を改善
- 専門用語、固有名詞、医療用語などの保持を改善
- GPT-Realtime-Translateで70以上の入力言語から13出力言語へのライブ翻訳に対応
- GPT-Realtime-Whisperで話している最中の逐次文字起こしに対応

価格は、GPT-Realtime-2の音声入力が100万音声トークンあたり32ドル、音声出力が64ドルです。テキスト入力は100万トークンあたり4ドル、テキスト出力は24ドル。GPT-Realtime-Translateは1分あたり0.034ドル、GPT-Realtime-Whisperは1分あたり0.017ドルです。

## 業務インパクト

今回の本質は、音声AIが「会話UI」から「業務実行UI」へ近づいたことです。

たとえばコールセンターでは、ユーザーの発話を聞きながら顧客情報を検索し、予約状況を確認し、必要に応じて手続きを進めるような流れが作りやすくなります。従来は音声認識、LLM、読み上げ、業務システム連携を別々に組み合わせる必要がありましたが、Realtime APIでは会話の流れを保ったまま、ツール実行を挟めます。

特に影響が大きそうなのは次の領域です。

- 電話受付、予約変更、問い合わせ対応
- 店舗やイベントでの多言語案内
- 移動中の営業支援、日程調整、CRM更新
- 会議、面談、授業、ウェビナーのリアルタイム文字起こし
- 医療、金融、不動産など、専門用語と本人確認が多い対話業務

OpenAIは発表内で、Zillow、Priceline、Deutsche Telekom、Vimeoなどのユースケースにも触れています。特に不動産、旅行、通信、動画配信のように、会話の途中で条件が変わり、外部システム確認が必要になる業務との相性が良い更新です。

## 副業・個人開発視点

個人開発や小規模事業でも、音声UIを使ったプロダクトの現実味が上がります。

たとえば、店舗向けの電話予約AI、セミナーのリアルタイム字幕、英語ミーティングの同時通訳、営業ロープレ、面接練習、子ども向け音声学習アプリなどは、GPT-Realtime-2 / Translate / Whisperを組み合わせることで試作しやすくなります。

ただし、音声エージェントはテキストチャットよりも事故が起きやすい領域です。ユーザーは発話中に訂正したり、感情的になったり、曖昧なまま依頼したりします。実装では、ツール実行前の確認、録音やAI利用の明示、個人情報の扱い、会話ログ保存、緊急時の人間への引き継ぎを最初から設計しておく必要があります。

## 教材化視点

AI教材では、「音声AIの作り方」を単なるWebRTC接続の話で終わらせず、業務フロー設計まで含めて扱うと価値が出ます。

教材テーマとしては、次の切り口が使いやすそうです。

- Realtime APIで作る音声エージェント入門
- 電話対応AIに必要なツール呼び出し設計
- GPT-Realtime-Translateで作るライブ通訳ワークフロー
- GPT-Realtime-Whisperで作るリアルタイム議事録
- 音声AIの安全設計と人間へのエスカレーション

速報記事としては、GPT-Realtime-2単体の性能向上だけでなく、「OpenAIが音声を次のエージェントUIとして本格化している」という流れで押さえるのがよさそうです。

## 参考

- [OpenAI: Advancing voice intelligence with new models in the API](https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/)
- [OpenAI API Docs: gpt-realtime-2](https://developers.openai.com/api/docs/models/gpt-realtime-2)
- [OpenAI API Pricing](https://openai.com/api/pricing/)
