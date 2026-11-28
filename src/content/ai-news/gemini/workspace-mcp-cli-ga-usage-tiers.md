---
title: "Google Workspace の MCP サーバーと CLI が一般提供に：API の利用枠が Standard / Scaled の2階層になり、2027-02-01 から AI エージェントは MCP 必須"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-11-24
sourceUrl: "http://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html"
summary: "Google が、Workspace の MCP サーバーと公式 CLI を一般提供（GA）にし、あわせて API の利用枠の標準化、Workspace AI Tools Addendum、エージェント向けの管理者機能を発表した。MCP サーバーは Gmail、Drive、Docs、Sheets、Slides、Calendar、Chat、Tasks に対応する。利用枠は無償の Standard と、より高い枠を使う Scaled の2階層で、Scaled の従量課金は 2027-04-01 に始まる。2027-02-01 からは AI エージェントが REST API を直接呼ぶことを技術的に制限し、MCP の利用を必須にする。展開は Rapid Release と Scheduled Release のドメインで2週間以内。"
description: "Workspace MCP サーバーと CLI の GA、2階層の利用枠、2027年に迫る期限（2/1 と 4/1）、管理者・開発者の対応を整理する。"
impact: "Workspace のデータを使う自作エージェントや連携ツールは、REST API 直叩きから MCP へ移行する必要が出る。期限が明記されているため、棚卸しと切り替え計画が要る。"
tags: ["gemini", "google-workspace", "mcp", "cli", "管理者機能", "料金", "期限あり"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Google は 2026-11-24（Workspace Updates ブログ）、**Workspace の MCP サーバーと公式 CLI を一般提供（GA）**にしました。あわせて、API の利用枠の標準化、新しい **Workspace AI Tools Addendum**、エージェント向けの管理者機能を発表しています。

- **MCP サーバー**: Google がホストし、Gmail、Drive、Docs、Sheets、Slides、Calendar、Chat、Tasks の既製ツールを、クラウドやウェブ上のエージェントから呼べます（Keep は後日）。
- **CLI**: 開発者の端末、仮想マシン、コンテナのサンドボックスなど、ローカル環境向け。エージェント用スキルの同梱、コマンドの動的探索、範囲を絞ったサインインを備えます。

Google は、MCP は要約した結果を返し、CLI はコマンドをつなげられるため、REST API よりトークン費用と遅延を抑えられると説明しています。

## 何が変わったか

**利用枠は2階層になります。** 5月に予告されていたもので、まず Gmail、Drive、Calendar から適用されます。

- **Standard**: 無償。公開された利用上限があります。Google は、アクティブな開発者の99%超がこの枠内だとしています。
- **Scaled**: より高い上限が必要なプロジェクト向け。**2027-04-01 から、1日あたりの無償分を超えた利用分だけを課金**します。何も操作しないプロジェクトは Standard の上限に制限されうるとされています。

**期限が3つあります。**

- **2週間以内**（Rapid Release / Scheduled Release のドメイン）: MCP サーバーと CLI の GA、管理者によるエージェントのアクセス管理、人の確認（HITL）と監査ログの制御、使用量ダッシュボード、Scaled の選択。
- **2027-02-01**: AI エージェントが REST API を直接呼ぶことを技術的に制限し始め、**MCP の利用が必須**になります。
- **2027-04-01**: Gmail、Calendar、Drive の API と MCP サーバーで Scaled の課金が始まり、Scaled にも内部利用にもしなかったプロジェクトは Standard の上限に移ります。

## 業務インパクト（一般企業向け）

**管理者**: 管理コンソールの「セキュリティ > API コントロール」で、外部 AI ツール、MCP サーバー、CLI、API のアクセスを管理できます。外部エージェントは OAuth でエージェントとして名乗り、MCP サーバー経由で接続する必要があり、他のアプリと同様に管理できます。既存のユーザー単位の DLP ルールはエージェントの利用にも自動で適用され、監査ログにはエージェントの操作と利用者の確認が記録されます。外部ファイルの読み取りや共有など、機微な操作には利用者の確認を必須にできます。

**開発者・社内システム担当**:

- エージェントから Workspace を使う処理は、REST API から MCP サーバーへ移す。
- エージェント用の OAuth クライアントでは「AI を使ったエージェントのために使う」を選び、従来機能用のクライアントとは分ける。
- 新しい使用量ダッシュボードで、プロジェクトごとの利用を Standard の上限と見比べる。
- 上限を超える場合は、社内専用のプロジェクトなら管理者が「内部」にし、それ以外は請求先管理者が請求アカウントを紐づけて Scaled に切り替える。**既存の高い上限を持つプロジェクトも、この手続きが必要**です。

**契約面**: Addendum は、API 由来のデータの長期保存や、エージェントによる Workspace API のスクレイピングなどを禁止します。Google Cloud サポートの顧客は、少なくとも 2027年12月まで Workspace API をサポート変動料の計算から除外されます。

## 副業・個人活用視点

Apps Script や自作スクリプトから Gmail や Drive を操作する自動化は、エージェントが API を直接呼ぶ形でなければ直ちには影響しない見込みですが、AI エージェントと組み合わせて使っているものは 2027-02-01 までに MCP 経由へ移す対象になりえます。まず自分の自動化の一覧を作り、「エージェントが呼んでいるもの」を洗い出してください。

個人や小規模の利用は、多くが無償の Standard に収まる見込みです。受託案件で顧客の Workspace にエージェントをつなぐ場合は、顧客側の管理者設定（API コントロール、確認の必須化）が必要になるため、提案時に前提として伝えておくと手戻りを避けられます。

## 関連リンク

- [Workspace Updates ブログの該当記事（公式）](http://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html)
