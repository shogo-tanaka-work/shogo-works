---
title: "Gemini の Connected Apps に14サービス追加。Linear も monday.com も Webflow も会話から叩けるようになった"
tool: "gemini"
toolLabel: "Gemini / Google Workspace"
date: 2026-09-23
sourceUrl: "https://blog.google/innovation-and-ai/products/gemini-app/new-connected-apps-gemini/"
summary: "Google は 2026-09-23、Gemini アプリの Connected Apps に新しい一群のサービスを追加し、同日からロールアウトを開始した。Productivity は Airtable / Linear / monday.com / PandaDoc / Wispr AI / Zoho、Creativity は Adobe / Picsart / Squarespace / Webflow、Lifestyle は apartments.com / Experian / Peloton / SeatGeek。設定から接続するか、チャット内で @ メンションするか、直接依頼するかで使える。同じ週に Workspace 側でも MCP 経由の外部 SaaS 連携が発表されており、個人向けと業務向けの両面で「会話から外部サービスを叩く」導線が広がっている。"
description: "Gemini の Connected Apps が14サービス拡大。Linear、monday.com、Adobe、Webflow などを @ メンションで会話に持ち込めるようになりました。"
impact: "AI アシスタントの価値が「答えの質」から「どこにつながっているか」へ移りつつあることを示す更新。特に Linear / monday.com / Airtable の追加は、プロジェクト管理の日常操作を会話に寄せられることを意味する。ツール選定の基準に「AI から叩けるか」が入ってくる。"
tags: ["gemini", "connected-apps", "mcp", "業務効率化", "ツール選定"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/gemini/workspace-features"
draft: false
---

## 要約

Google は 2026-09-23、**Gemini アプリの Connected Apps に新しい一群のサービスを追加**し、同日からロールアウトを開始しました。位置づけは明快で、「タブを行き来せずに、プロジェクト管理、クリエイティブ制作、生活まわりの手続きを Gemini の会話の中で扱えるようにする」というものです。

追加されたサービスは3カテゴリに分かれます。

**Productivity** は Airtable、Linear、monday.com、PandaDoc、Wispr AI、Zoho。プロジェクトの管理、データベースの整理、音声でのメモ取りなどが対象です。**Creativity** は Adobe、Picsart、Squarespace、Webflow。ビジュアルアセットの制作やサイト構築を会話から扱えます。**Lifestyle** は apartments.com（物件検索）、Experian（信用情報の確認）、Peloton（ワークアウト計画）、SeatGeek（イベントチケット）。

使い方は3通りで、Gemini の設定から対象アプリを接続するか、チャット内で `@` メンションするか、直接依頼するかです。

**この拡大は単独の動きではありません。** 同じ週の 2026-09-18、Workspace Updates 側で **Gemini in Google Workspace の MCP 連携**が発表されています。こちらは Asana、Atlassian Rovo、HubSpot、Intuit Mailchimp、Intuit QuickBooks、Monday、Salesforce が対象で、Sheets、Gmail、Drive、Docs、Chat といった Workspace アプリの中から直接これらの情報にアクセスできます。**個人向けの Gemini アプリと、業務向けの Workspace の両方で、外部 SaaS を会話から直接叩く導線が同時に広がっている**というのが、今週の Google の動きです。

## 何が変わったか

- **Productivity**: Airtable、Linear、monday.com、PandaDoc、Wispr AI、Zoho
- **Creativity**: Adobe、Picsart、Squarespace、Webflow
- **Lifestyle**: apartments.com、Experian、Peloton、SeatGeek
- 接続方法は Gemini の設定画面から、またはチャット内の `@` メンション、または直接依頼
- 2026-09-23 からロールアウト開始
- 公式ポストにプラン別の提供範囲の記載はない
- 関連: 2026-09-18 の Workspace Updates で、Gemini in Workspace が MCP 経由で Asana / Atlassian Rovo / HubSpot / Intuit Mailchimp / Intuit QuickBooks / Monday / Salesforce に接続することが発表済み

## 業務インパクト（一般企業向け）

**ツール選定の基準が1つ増えます。** これまで SaaS を選ぶとき、機能、価格、既存システムとの連携、サポート体制あたりを見ていました。ここに「**AI アシスタントから叩けるか**」が加わります。同じ機能の2製品があって、片方は Gemini や ChatGPT の会話から操作でき、もう片方はできない。この差は、日常の操作回数が多いツールほど効いてきます。

**特に効くのは、Linear / monday.com / Airtable のようなプロジェクト管理系です。** これらのツールは「開いて、探して、更新して、閉じる」という操作が1日に何度も発生します。この往復が会話から済むなら、**ツールを開かない日が増えます。** 逆に言えば、AI から叩けないツールは「開かないと何も起きない」ため、相対的に使われなくなる可能性があります。**ツールの定着率が AI 連携の有無で変わる**という現象は、これから起きてくるはずです。

**情シス側では、接続の棚卸しが必要になります。** 個人の Gemini アカウントから業務用の SaaS に接続できてしまう構成は、データの流れが見えなくなる典型です。従業員が個人 Google アカウントの Gemini に業務の Airtable を接続した場合、そのデータがどう扱われるかは組織の管理範囲外になります。**「業務データは Workspace 側の Gemini から、MCP 連携経由で扱う」というルールを先に決めておく**べきです。今週 Workspace 側でも MCP 連携が出ているのは、この使い分けを想定した動きとも読めます。

**Creativity カテゴリの Squarespace / Webflow / Adobe は、制作フローに影響します。** サイト構築やビジュアル制作の指示を会話から出せるということは、専門ツールの操作を覚えていない人でも一次案を作れるということです。**制作の入口が広がる一方で、出てきたものの品質判断ができる人が社内に必要になります。** 作れる人が減っていいわけではありません。

## 副業・個人活用視点

**Linear、monday.com、Airtable、PandaDoc あたりは、フリーランスの実務ツールそのものです。** 案件のタスク管理を Linear や monday.com で、顧客データを Airtable で、契約書を PandaDoc で扱っている人は多いはずです。これらが `@` メンションで会話に入るということは、**「今週の未完了タスクを整理して、優先順位をつけて」といった指示を1つの会話で完結できる**ということです。ツールをまたいだ状況把握は、個人事業ほど時間を食う作業なので、効果が出やすい部分です。

**Squarespace と Webflow の追加は、Web 制作を副業にしている人に直接効きます。** 会話からサイトを組み立てられるなら、**クライアントとの打ち合わせ中に一次案を出す**といった動きが可能になります。提案の場で形が見えるかどうかは、受注率に直結します。一方で、**同じことが誰にでもできるようになる**ということでもあります。ツールを操作できることが価値だった部分は、確実に削られていきます。

**Wispr AI（音声でのメモ取り）の追加は見落としやすいですが、使い方次第で効きます。** 移動中や作業中に音声でメモを取り、それが Gemini の会話にそのまま持ち込める。**入力の手間が減ると、記録の量が増えます。** 記録が増えると、後から振り返って使える情報が増えます。地味ですが、個人の生産性には一番効くタイプの変化です。

**注意点として、業務データの接続先は分けてください。** クライアントの案件情報を個人の Gemini アカウントに接続すると、**データの取り扱いについて自分が説明責任を負います。** 秘密保持契約を結んでいる案件では特に、どのアカウントのどの AI に何を接続しているかを把握しておく必要があります。「便利だから全部つないだ」は、事故が起きたときに一番説明しづらい状態です。
