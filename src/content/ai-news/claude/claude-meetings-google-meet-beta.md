---
title: "Claude Meetings がベータ開始：Google Meet に Claude が参加し、会議中に docs や whiteboard を作る"
tool: "claude"
toolLabel: "Claude"
date: 2026-11-12
sourceUrl: "https://claude.com/de/resources/articles/claude-meetings"
summary: "Anthropic が Claude Meetings のベータを開始した。Claude が Google Meet の通話に可視の参加者として入り、質問への回答、ノートとアクションアイテムの作成、docs や whiteboard の共同作成を行う。Team と Enterprise プランが対象で、ノートと文字起こしはベータ中無料。"
description: "Claude Meetings の仕組み、対象プラン、管理者設定、料金、対象外の組織（ZDR・HIPAA-ready・CMEK）を整理。"
impact: "議事録作成を AI に任せられる一方、通話の文字起こしを取るため、参加者への周知と管理者設定が導入前の必須確認事項になる。"
tags: ["claude", "meetings", "google-meet", "team", "enterprise", "beta"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic は2026年11月12日、Claude Meetings のベータ提供を始めました。Claude が Google Meet の通話に、見える参加者として入ります。会議の流れを追い、会話しながら作業に着手します。

通話中は「Claude」と呼びかけるか、Meet のチャットに入力すれば質問できます。回答は既定で文章としてチャットに出ます。接続済みのツールは、各自の許可を得て使えます。たとえば「この計画の doc を作って」と頼むと、Claude がそこまでの発言をまとめた doc を作り、招待された参加者が会議中に編集できます。whiteboard やその他の成果物も同様です。終了後はノートとアクションアイテムが、claude.ai の会議ページに残ります。

## 何が変わったか

- **参加方法**: claude.ai の Meetings で Google カレンダーを連携し、会議を選んで「Add Claude」。自動参加（auto-join）も設定できる。全会議、または1対1を除く全会議が選べる
- **対応プラットフォーム**: 現時点は Google Meet。ほかのビデオ会議サービスは今後対応予定
- **保存されるもの**: 文字起こし、要約、画面の説明。音声は保存しない。参加時に Claude が通話チャットへ通知を投稿する
- **ツール利用**: 各参加者の接続済みツールを、その人の許可で使う。口頭で依頼された場合は、話者を確認するため当面は毎回承認を求める
- **滞在時間**: 最長8時間。退出は依頼するか、会議ページの「Remove Claude」
- **対象プラン**: Team と Enterprise（Claude と Claude Desktop）。Team は既定で利用可能で管理者が無効化できる。Enterprise は管理者が全体または一部の組織で有効化する
- **対象外**: ベータ中は、ZDR、HIPAA-ready 構成、顧客管理の暗号鍵（CMEK）を使う組織などでは利用できない
- **料金**: ノートと文字起こしはベータ中無料。通話中の回答も、接続ツールを使う場合を除き無料。接続ツールを使う回答は利用枠を消費する。通話中に作る docs や whiteboard は2027年2月10日まで無料

## 業務インパクト（一般企業向け）

議事録とアクションアイテムの作成を会議体の標準機能にできます。会議後の振り返りも、会議ページから Claude に質問できます。

最大の論点は録音・文字起こしの扱いです。公式も、Claude を追加する前に全参加者が文字起こしに同意しているか確認するよう求めています。社外の参加者がいる会議では特に、事前の周知と社内ルールが必要です。Enterprise では管理者が有効化の範囲を決めるため、まず部門を絞った試行が現実的です。ZDR や CMEK を採用している組織は、現時点では対象外です。会議ページの共有は組織内に限られますが、Claude が Meet チャットへ投稿した内容は社外の参加者にも見えます。

## 副業・個人活用視点

Team プランを使う小規模チームやフリーランスの共同体なら、クライアントとの打ち合わせで議事録と次のアクションを自動で残せます。提案書のたたき台や、スケジュールの whiteboard をその場で作る使い方もできます。ただしクライアントを招く通話では、文字起こしの同意を最初に取ってください。個人向けの Pro や Max は対象外で、Team か Enterprise が前提です。
