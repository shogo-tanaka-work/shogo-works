---
title: "Gemini 4 Hydrogen が全ユーザー向けに公開：入力$1.50・出力$7.50、日常のコーディングとエージェント作業向け"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-11-12
sourceUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
summary: "Google が Gemini 4 の3つ目のモデル Gemini 4 Hydrogen を公開した。Carbon・Argon が深い推論向けなのに対し、Hydrogen は日常のコーディングとエージェント作業を速く回すためのモデル。API 価格は100万トークンあたり入力$1.50・出力$7.50で、1Mトークンの文脈全体で一律。AI Studio の全ティア、Gemini API、Gemini for business、Gemini アプリ、Google 検索（AI Mode の既定）に展開される。"
description: "Hydrogen の位置づけ、価格、思考レベル（xhigh を追加）、提供面、旧 Flash からの移行時の注意点を整理。"
impact: "Gemini API の日常用途の既定モデルが入れ替わる。価格は旧 Flash の導入価格の2倍で、出力に思考トークンを含むため、移行前にコスト試算が要る。"
tags: ["gemini", "gemini-4", "hydrogen", "gemini-api", "antigravity", "pricing"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Google は2026年11月12日、Gemini 4 Hydrogen を公開しました。Gemini 4 は先に公開された Carbon と Argon が深く長い推論を担い、Hydrogen は「速く実行する」役割です。公式は日常のコーディングとエージェント作業向けの主力として位置づけています。

公式の説明では、既定の high 思考レベルで Artificial Analysis Intelligence Index が 51 で、Argon の 50 を上回ります。最上位の xhigh では 54 です。同クラスのモデルより速く完了することが多いとしています。API の価格は100万トークンあたり入力$1.50・出力$7.50で、1Mトークンの文脈全体で一律です。

## 何が変わったか

- **モデル ID**: `gemini-4-hydrogen`。入力はテキスト・画像・音声・動画・PDF、出力はテキスト
- **文脈と出力**: 文脈は入力・思考・出力を合わせて 1,048,576 トークン。1回の同期呼び出しの出力は最大 65,536 トークンで、それ以上は長尺デコード（背景実行など）で最大 1,048,576 まで
- **思考レベル**: low / medium / high（既定）/ xhigh の4段階。Carbon・Argon は low / medium（既定）/ high
- **価格**: 入力$1.50、出力$7.50（思考トークンを含む）、キャッシュ入力は$0.075（いずれも100万トークンあたり）。暗黙キャッシュは4,096トークンから。明示的キャッシュは非対応
- **提供面**: Google AI Studio の全ティアと Gemini API、Android Studio（有料ティア）、Gemini for business（API とモデル選択メニュー）、Gemini アプリ、Google 検索、Gemini in Google Sheets（対象の業務契約。個人は Pro / Ultra から）、Antigravity（Pro / Ultra 加入者）
- **Gemini アプリ**: 無料ユーザーは、プロンプトに合う場合に自動モデル選択で Hydrogen が使われる
- **Google 検索**: AI Mode の新しい既定モデルになり、AI Overviews の難しい質問にも使われる（Search Engine Watch の報道）
- **Antigravity**: 新機能 Orchestrator が Carbon と Hydrogen を同一セッションで切り替える。公式の Terminal Bench 4.0 の測定では、Carbon に近い成功率で平均クレジット消費が24%減り、完了が19%速くなったとされる

## 業務インパクト（一般企業向け）

Gemini API を使う社内ツールでは、日常用途の既定モデルを Hydrogen に切り替える検討が必要です。ただし価格は、旧 Flash の導入価格（2026年12月31日まで）の2倍にあたると報じられており、2027年1月1日以降の標準価格とは同水準です。出力に思考トークンが含まれ、既定の思考レベルが high なので、移行前に実トラフィックでコストを測ってください。

移行時の技術面の注意は3点です。入力と出力が1つの文脈枠を共有すること、1回の同期出力が 65,536 トークンまでであること、明示的キャッシュが使えないことです。API を呼ぶコードに `max_output_tokens` や caching を明示している場合は、動作の確認が必要です。

利用者側では、Gemini アプリと検索の挙動が変わります。検索の AI Mode の既定が入れ替わるため、社内で AI Mode の回答を調査に使っている場合は、回答の傾向が変わる可能性があります。

## 副業・個人活用視点

無料ティアが AI Studio にあるため、個人でも試せます。コーディングの反復や、エージェントの実行役として使う場合、深い推論が要る部分だけ Carbon や Argon に回す分担が、コストを抑えやすい構成です。公式は、Antigravity の Orchestrator でこの分担を自動化できると説明しています。案件に組み込む場合は、モデルごとの価格差と、思考レベルによるトークン消費の違いを見積もりに入れてください。
