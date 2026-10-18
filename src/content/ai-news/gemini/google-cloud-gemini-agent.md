---
title: "Google Cloud が Gemini agent を発表 — モデル選択に Claude を含め、Agent Sandbox と Agent Gateway で統制。提供状況と価格は未公表"
tool: "gemini"
toolLabel: "Gemini / Google Cloud"
date: 2026-10-08
sourceUrl: "https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/"
summary: "Google Cloud が 2026-10-08 の Gemini at Work 2026 で Gemini agent を発表した。1つのプロンプトボックスと1つの API から、質問への回答・ナレッジワーク・メディア生成・コードの記述と実行を扱う単一の汎用エージェントとして位置づけられている。Web / iOS / Android / Windows / Mac / CLI / Google Workspace / Microsoft 365 / Slack で動き、サードパーティアプリへ headless agent として組み込める。モデル選択では Gemini と Anthropic の Claude モデルへジョブを振り分ける。統制面はエージェント単位の暗号的 identity、ロールベースの細粒度認可、OAuth 伝播、全アクションの監査ログ、Agent Sandbox、Agent Gateway。接続先に任意の MCP サーバーを含む。ただし提供状況・価格・必要エディション・ロールアウト日は公式に未記載で、業界特化版のみ Financial Services と Legal が preview、Government / Healthcare / Retail が coming soon と明示されている。"
description: "設計の情報量は多いが、提供条件が1つも書かれていない。評価は構想として読む段階。"
impact: "Workspace と Microsoft 365 の両方で動くという前提は、どちらかに寄せていた組織の選定前提を変える可能性がある。ただし価格・エディション・提供時期が未公表のため、現時点では予算化も導入計画も立てられない。MCP サーバーへの接続と Agent Gateway は、自社のエージェント統制要件を整理する参照モデルとして使える。"
tags: ["gemini", "Google Cloud", "エージェント", "MCP", "企業導入", "統制", "Gemini at Work"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/gemini/workspace-features"
  - "/knowledge/ai-tools/gemini/overview"
draft: false
---

## 要約

Google Cloud が **Gemini agent** を発表しました（Gemini at Work 2026 の Thomas Kurian 基調講演に基づく）。位置づけは**「仕事のための単一の汎用エージェント」**です。

**最初に書いておくべきことがあります。この発表には、提供状況・価格・必要エディション・ロールアウト日のいずれも記載がありません。**

設計の説明は非常に厚いのに、**いつ誰がいくらで使えるのかが1つも書かれていません。** 明記されているのは業界特化版の段階だけで、**Financial Services と Legal が preview、Government / Healthcare / Retail が coming soon** です。**本記事は「構想として読む」段階のものとして扱ってください。**

そのうえで、設計の中身は検討に値します。

**基本の形**は、質問への回答・ナレッジワーク・画像やメディアの生成・コードの記述と実行を、**1つのプロンプトボックスと1つの API** から扱うことです。利用者は手順ではなく**目的**を与え、エージェントが計画し、スキルとツールを使い、社内システムへ接続し、**普段使っているアプリの中へ完成物を返します。**

公式が挙げる柱は次のとおりです。

**単一エージェント**: チャット・自律的なタスク実行・コード生成を1つの UI に統合。**スケジュール実行とイベント起動**に対応。

**どこからでも使える**: Web / iOS / Android / Windows / Mac / CLI / **Google Workspace / Microsoft 365 / Slack**。サードパーティアプリへ **headless agent** として組み込みも可能。

**実行の永続化**: クラウドで動き、記憶とパーソナライズは1セットを共有。**長時間の作業は PC を閉じても続く。**

**マルチエージェント編成**: 独自の identity を持つ一時的なサブエージェントを並列・逐次で作る。**`@agents.company.com` のメールアドレスと自前のストレージを持つ常設の coworker agent** も作れる。

**モデル選択**: 現時点で **Gemini と Anthropic の Claude モデル**へジョブを振り分け、他の private / open モデルも予定。

記憶は **session / semantic / procedural（自分でスキルを書く）/ episodic** の4種類とされています。

**注目すべき点は2つあります。**

**1つは、Microsoft 365 と Slack で動くと明記されていることです。** Google Cloud のエージェントが**Microsoft 365 の中で動く**という前提は、「Google か Microsoft か」で寄せてきた組織の選定の前提を変えます。**どちらを使っているかが、エージェントの選定理由にならなくなる方向です。**

**もう1つは、モデル選択に Anthropic の Claude が入っていることです。** Google 自身のエージェントが、**Gemini と Claude の両方へジョブを振り分ける**と公式に書いています。**モデルの囲い込みではなく振り分けを前提にした設計**を、プラットフォーム側が明示した例です。

**統制面**は、企業向けとして項目が揃っています。エージェントごとに**暗号的に裏付けられた identity と最小権限**、セキュリティ管理者が承認する**ロールベースの細粒度認可**、外部システムへの **OAuth 伝播**、**全アクションのエージェント単位の監査ログ**、独立したネットワーク境界を持つ **Agent Sandbox**、組織全体のポリシーをリアルタイム適用する **Agent Gateway**。

**コスト面**では、複数モデルの振り分けと Smart Routing に加え、**Cloud Billing Console でのプロジェクト単位のリアルタイム上限**があります。**上限に到達するとそのプロジェクトのエージェントが停止し、再開操作が必要**という挙動です。

**接続先**は Workspace（Gmail / Drive / Docs / Slides / Sheets / Chat / Calendar）、Confluence / Microsoft Office / Teams / Slack、Git / Jira、Salesforce / ServiceNow、BigQuery / Databricks / Postgres / Snowflake、S3 / Azure Data Lake / SAP / Workday、Iceberg テーブル、ローカルファイル、そして**任意の MCP サーバー**（社内ネットワークの内外とも）。

## 何が変わったか

- **Google Cloud が Gemini agent を発表**（2026-10-08、Gemini at Work 2026）
- 1つのプロンプトボックスと **1つの API** から、回答・ナレッジワーク・メディア生成・コード実行を扱う
- **Web / iOS / Android / Windows / Mac / CLI / Google Workspace / Microsoft 365 / Slack** で動作。**headless agent** として他アプリへ組み込み可能
- **スケジュール実行とイベント起動**に対応。クラウドで動き**長時間の作業は PC を閉じても続く**
- **一時的なサブエージェント**（独自 identity、並列・逐次）と、**`@agents.company.com` のメールと自前ストレージを持つ常設 coworker agent**
- **モデル選択は Gemini と Anthropic の Claude モデル**。他の private / open モデルも予定
- 記憶は **session / semantic / procedural / episodic** の4種
- 統制: **エージェント単位の暗号的 identity と最小権限**、ロールベースの細粒度認可、**OAuth 伝播**、**全アクションの監査ログ**、**Agent Sandbox**、**Agent Gateway**
- コスト: Smart Routing と、**Cloud Billing Console のプロジェクト単位リアルタイム上限**（到達でエージェント停止、再開操作が必要）
- 接続先に **任意の MCP サーバー**（社内ネットワークの内外とも）を含む
- **提供状況・価格・必要エディション・ロールアウト日は公式未記載。** 業界特化版のみ **Financial Services / Legal が preview、Government / Healthcare / Retail が coming soon**

## 業務インパクト（一般企業向け）

**今できることは、予算化や導入計画ではありません。要件の整理です。**

**価格もエディションも提供時期も分からない以上、計画は立てられません。** ここを無理に進めると、**使えない前提で工数を使うことになります。** 待つのが正解です。

**一方で、要件の整理には今すぐ使えます。** 本発表は**エージェント統制の項目が一通り並んだリスト**として優秀です。自社で AI エージェントを評価する立場なら、**この項目を評価軸として流用できます。**

**具体的には次の5項目です。** (1) **エージェントごとに identity があるか。** 人のアカウントを借りて動くエージェントは、監査で「誰がやったか」が追えません。(2) **権限は最小権限で、セキュリティ管理者が承認するか。** (3) **外部システムへの認可はどう伝播するか。** OAuth の伝播がないと、エージェントに認証情報を持たせることになります。(4) **全アクションがエージェント単位で監査ログに残るか。** (5) **実行環境は隔離されているか。**

**この5項目は、どのベンダーのエージェントを評価するときにも効きます。** Gemini agent を導入するかとは独立に、**社内の評価シートへ入れる価値があります。**

**`@agents.company.com` のメールアドレスを持つ常設エージェントは、運用面の論点を増やします。**

**エージェントがメールアドレスを持つと、組織図の中の扱いを決める必要が出ます。** 誰が所有者か。退職したらどうなるか。**監査でそのアドレスからの送信をどう説明するか。** そしてストレージを持つなら、**そのストレージの中身は誰の管理下にあるか。** これは技術の問題ではなく、**情報管理の規程に行の追加が必要になる話**です。先行して検討する価値があります。

**プロジェクト単位のリアルタイム上限は、評価すべき仕様です。**

**エージェントのコストが読めないという問題に、正面から対処しています。** 自律的に動くエージェントは、**何回モデルを呼ぶかが事前に分かりません。** 上限に到達したら停止する、という挙動は**予算超過より停止を選ぶ**という設計判断です。**業務が止まるという副作用はありますが、請求書で気づくより健全です。** 自社でエージェントを作る場合も、**同じ仕組みを入れるべき**です。

**Microsoft 365 で動くという点は、選定の前提を変える可能性があります。** ただし**これも提供条件が未公表**なので、今は「そういう方向が示された」までです。**Microsoft 365 を標準にしている組織が Google Cloud のエージェントを検討する理由ができた**という程度に留めてください。

## 副業・個人活用視点

**個人や小規模事業にとって、現時点の実用性はほぼありません。**

**Google Cloud の企業向けエージェントで、価格もエディションも未公表です。** 個人が今から準備することはありません。**ここを正直に書いておきます。**

**ただし2つの点は、受託や学習で効きます。**

**1つは MCP サーバーへの接続が前提に入っていることです。** 接続先の一覧に**「任意の MCP サーバー（社内ネットワークの内外とも）」**が入っています。**Google Cloud の主力エージェントが MCP を前提にした**という事実は、**MCP を学ぶ投資の回収可能性を上げます。** Claude Code、Codex、Cursor に続いて Google Cloud も MCP を入れるなら、**MCP サーバーを書ける技能は、特定のツールに紐づかない資産**になります。中小企業向けに社内システムを AI から触れるようにする仕事を考えているなら、**MCP サーバーを書く練習の優先度は上がりました。**

**もう1つは、モデル振り分けが標準になりつつあることです。** Google 自身が **Gemini と Claude を振り分ける**と書いています。**「1つのモデルに最適化する」という設計は、プラットフォーム側が否定し始めています。** 受託でシステムを作るとき、**特定のモデルに依存した実装は将来の負債になる**という説明が、これで公式の例を引いて言えます。**モデルを差し替えられる構造にしておく**という提案の根拠として使ってください。

**学習の題材としては、「情報が足りない発表の読み方」の練習になります。**

**本発表は設計の説明が非常に厚く、提供条件が1つもありません。** こういう発表を読んだときにやるべきことは、**厚い部分に引きずられずに「決められる判断があるか」を確認する**ことです。本件では**決められる判断はありません。** だから評価は「構想として読む」で止める。

**この見極めができないと、イベント発表のたびに検討工数を使うことになります。** 判断材料として足りているかを確認する習慣は、**提供条件が明記された発表と、されていない発表を見分ける**ところから始まります。本件は後者の典型例として覚えておいてください。

## 関連リンク

- [Google Cloud introduces the Gemini agent（公式）](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-at-work/)
- [Welcome to Gemini at Work 2026（Google Cloud 公式）](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026)
