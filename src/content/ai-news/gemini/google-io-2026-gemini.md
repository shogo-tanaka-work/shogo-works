---
title: "Google I/O 2026：Gemini 3.5 Flash・Spark・動画生成API発表"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-05-28
sourceUrl: "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/"
description: "Google I/O 2026で発表されたGemini最新情報を解説。半額・4倍速のGemini 3.5 Flash、24/7エージェントのGemini Spark、動画生成APIのOmni Flashを活用してWorkspace業務を自動化する具体的な方法がわかります。"
summary: "Google は 2026-05-28 の I/O 2026 で、Gemini を中心とした **エージェント時代への移行** を打ち出した。モデル面では **Gemini 3.5 Flash**（フロンティア級性能を半額以下 + 競合比 4 倍速）と **Gemini Omni Flash**（任意の入力から動画生成、Google AI Plus/Pro/Ultra 向け、YouTube Shorts / Create app に無償で今週展開、開発者・エンタープライズ API は数週間以内、SynthID 透かし埋め込み）が発表された。アプリ面では **Gemini Spark**（24/7 のパーソナルエージェント、Gmail / Docs / Slides など Workspace でタスク自動化、デバイスロック中も実行、今週 trusted tester → 来週 Ultra ベータ）、**Daily Brief**（メール・カレンダー・接続アプリから朝の自動ダイジェスト、米国 subscribers から rollout）、**Neural Expressive**（Web / Android / iOS の全面 UI 再設計、本日グローバル展開）が公開。会話機能では **Ask YouTube**（質問関連の動画セグメントを検索）と **Voice-powered Docs Live**（音声で口述・編集）、Search では **information agents** が背景で関連コンテンツを探索。インフラ面では **Custom TPU 8 世代**（TPU 8t 訓練 + TPU 8i 推論の dual-chip 構成）、コンテンツ透明性では **SynthID 透かしを 1000 億画像超に拡張、OpenAI / Eleven Labs が SynthID 標準を採用**。規模指標は **Gemini app 900M MAU（前年 400M から倍増、230 か国）**、**Google 全体で月間 3.2 quadrillion tokens 処理（年比 7 倍）**。"
impact: "Gemini は **「アプリの中に入って操作する AI」から「ユーザーの代わりに動くエージェント」** へ製品定義が動いた。Workspace を業務基盤としている組織にとって最も実務影響が大きいのは **Gemini Spark**（Gmail / Docs / Slides でタスク自動化、ロック中も実行）で、**管理者は有効化判断と監査ログ運用** を今から準備する必要がある。**Daily Brief** は社内コミュニケーションの「朝の状況把握」を AI に置き換える流れを作るため、社内ナレッジ運用と接続する設計余地が大きい。**Gemini 3.5 Flash の半額・4 倍速** は API でフロンティアレベルを使うコスト構造を変えるため、これまで「Flash は試作向け」だった社内ガイドを書き換える材料になる。**Gemini Omni Flash の動画生成 API**（数週間以内に開発者公開）は動画制作・教材・マーケティング系の業務フローを変えうる。**SynthID が OpenAI / Eleven Labs に採用された** ことは AI コンテンツ来歴標準の業界収束を示す動きで、コンプライアンス / 法務側の前提として 1 行記録しておく価値がある。**TPU 8 世代の dual-chip 構成（8t 訓練 / 8i 推論）** は Google Cloud で Vertex AI を使う組織にとって、将来の性能 / コスト改善を示唆する材料。Workspace 管理者は同日発表の **Gemini Drive 共有**（2026-05-28 admin / 2026-06-03 end-user）の設定見直しもセットで進める必要がある。"
tags: ["gemini", "google-io-2026", "gemini-3-5-flash", "gemini-omni", "gemini-spark", "daily-brief", "neural-expressive", "tpu-8", "synthid", "agentic"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/gemini/models"
  - "/knowledge/ai-tools/gemini/workspace"
draft: false
---

## 要約

Google は 2026 年 5 月 28 日の I/O 2026 で、Gemini を中心とした **「エージェント時代」への移行** を打ち出しました。基調講演（Sundar Pichai）と各製品 blog でモデル・アプリ・インフラ・コンテンツ透明性にまたがる発表が出ています。

### モデル

- **Gemini 3.5 Flash**: フロンティア級の性能を **半額以下** で提供、競合比 **4 倍速** の出力。
- **Gemini Omni Flash**: **任意の入力（テキスト / 画像 / 音声 / 動画）から動画生成**。
  - 対応: Google AI **Plus / Pro / Ultra** 加入者（Gemini app + Google Flow）
  - YouTube Shorts / YouTube Create app に **無償で今週展開**
  - **開発者 / エンタープライズ API** は数週間以内に rollout
  - 全生成動画に **SynthID 透かし** を埋め込み

### アプリ / アシスタント

- **Gemini Spark**: 24/7 のパーソナルエージェント。Gmail / Docs / Slides など Workspace でタスク自動化、**デバイスロック中も実行**。今週 trusted tester、来週 Ultra ベータ。
- **Daily Brief**: メール・カレンダー・接続アプリのデータをまとめた **朝の自動ダイジェスト**。米国 subscribers から rollout。
- **Neural Expressive**: Gemini アプリの全面 UI 再設計（fluid animations / vibrant colors / new typography / haptic feedback）。Web / Android / iOS で **本日グローバル展開**。
- **macOS アプリ更新** は **今夏**。

### 新しい会話機能

- **Ask YouTube**: 質問に関連する動画セグメントを検索。
- **Voice-powered Docs Live**: Docs を音声で口述・編集。
- Search 内の **information agent** が背景で関連コンテンツを探索。

### インフラ / コンテンツ透明性

- **Custom TPU 8 世代**: **TPU 8t**（訓練）+ **TPU 8i**（推論）の dual-chip 構成。速度・エネルギー効率改善。
- **SynthID 透かし** を 1000 億画像超に拡張。**OpenAI / Eleven Labs が SynthID 標準を採用**。

### 規模指標

- Gemini app: **900M MAU**（前年 400M から倍増、230 か国）
- Google 全体: **月間 3.2 quadrillion tokens 処理**（年比 7 倍）

## 何が変わったか

- Gemini 3.5 Flash（半額・4 倍速）、Gemini Omni Flash（動画生成、Plus/Pro/Ultra + YouTube 系）。
- Gemini Spark（24/7 パーソナルエージェント、ロック中実行、Ultra ベータ）。
- Daily Brief（朝の自動ダイジェスト、米国 subscribers）。
- Neural Expressive UI（全面再設計、本日グローバル展開）。
- Ask YouTube、Voice-powered Docs Live、Search の information agent。
- Custom TPU 8 世代（8t 訓練 + 8i 推論の dual-chip）。
- SynthID 透かしを 1000 億画像超に拡張、OpenAI / Eleven Labs が採用。
- Gemini app 900M MAU、Google 全体で月間 3.2 quadrillion tokens 処理。

## 業務インパクト（一般企業向け）

Gemini は **「アプリの中に入って操作する AI」から「ユーザーの代わりに動くエージェント」** へ製品定義が動きました。Workspace を業務基盤としている組織は、3 つの実務論点を週内に整理する必要があります。

**1. Gemini Spark の管理者運用**: Gmail / Docs / Slides でタスクを自動化し、デバイスロック中も実行するエージェントが Ultra ベータで展開されます。**有効化判断、利用範囲、監査ログ要件** を管理者側で先に整える必要があります。社外秘の取り扱いとロックスクリーン実行の組み合わせは、情シス・法務の前提を変えるポイントです。

**2. Daily Brief の社内コミュニケーション影響**: メール・カレンダー・接続アプリから朝の自動ダイジェストが届く運用は、社内の「朝の状況把握」が AI 経由に置き換わる流れを作ります。社内ナレッジ管理（Notion、Confluence、Slack 等）との接続設計を見直すタイミングです。

**3. Gemini 3.5 Flash のコスト構造**: 半額以下・4 倍速のフロンティア級モデルが API で使えるため、これまで「Flash は試作向け」だった社内ガイドを書き換える材料になります。本番利用での Flash 採用判断を社内で再評価する価値があります。

**Gemini Omni Flash の動画生成 API**（数週間以内に開発者公開）は、動画制作・教材・マーケティング系の業務フローを変える可能性があります。SynthID 透かしが全生成動画に入るため、コンプライアンス上「Google 生成と識別できる動画」を社内利用する方針を先に決めておくと運用がスムーズです。

**SynthID が OpenAI / Eleven Labs に採用された** ことは、AI コンテンツ来歴標準が業界収束に向かう動きとして、法務・コンプライアンス側の前提に 1 行記録する価値があります。「AI 生成コンテンツの開示」を契約に含めている組織は、SynthID 検証経路を業務手順に組み込めるか確認するタイミングです。

**TPU 8 世代（8t 訓練 / 8i 推論）** は Google Cloud で Vertex AI を使っている組織にとって、将来の性能 / コスト改善を示唆する材料です。Vertex AI を Claude / Gemini 両方の基盤として使っているチームは、来年以降の TCO 試算に参考データとして組み込めます。

なお、同日に **Gemini Drive 共有**（2026-05-28 admin / 2026-06-03 end-user）の rollout も始まっており、Workspace 管理者はセットで設定見直しを進める必要があります。

## 副業・個人活用視点

個人開発では **Gemini 3.5 Flash の半額・4 倍速** が直接効きます。Flash を試作以外の本番用途にも使える前提に変わったため、副業案件のコスト試算と提案資料を更新する材料になります。

**Gemini Omni Flash の YouTube Shorts / Create app 無償展開** は、動画クリエイター副業に直接刺さります。テキストや画像から動画を生成して Shorts に投稿する流れが Gemini 内で完結するため、コンテンツ運用の自動化余地が広がります。SynthID 透かしが入る点は、視聴者向けの開示として最初から組み込んでおくのが安全です。

**Gemini Spark（Ultra ベータ）** は、Ultra プランを契約する個人にとって、Gmail や Docs を「裏で動かす」運用が現実的になる機能です。副業案件で「メール対応の下書きを毎朝用意してもらう」「Docs 整形を任せる」といった委譲先として使えます。trusted tester から始めて Ultra ベータに乗る流れを追いたい人は、I/O 2026 のロードマップを定点観測するのが効率的です。

**Daily Brief** は副業として複数案件を回している人にとって、案件横断の朝の状況把握を AI に任せる運用パターンを作りやすくします。米国 subscribers からの rollout 状況を見ながら、自分の使い方を設計しておくと、本展開のタイミングで即適用できます。

**Neural Expressive UI** は本日全 Gemini ユーザーがグローバルで利用開始のため、Gemini を使ったチュートリアル教材を作っている人はスクリーンショットの差し替えが必要です。
