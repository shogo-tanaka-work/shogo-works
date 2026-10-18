---
title: "Claude Max / Team に月次 API クレジットが付く。Max 20x は月 $200、Team は席単位で上限 $500、繰り越しなし"
tool: "claude"
toolLabel: "Claude"
date: 2026-10-07
sourceUrl: "https://support.claude.com/en/articles/17154008"
summary: "Claude の Max プランと Team プランに、Claude Platform で自分のアプリやエージェントを動かすための月次 API クレジットが付くようになった。金額は Max 5x が月 $100、Max 20x が月 $200、Team は Standard 席が1席 $20、Premium 席が1席 $100 で、組織の1つの残高にプールされ月 $500 が上限。繰り越しはなく、未使用分は請求サイクル末に失効する。受け取りには Claude Console 組織を1つリンクする必要があり、リンク先は後から自分では変更できない。対象プランに7日間在籍していることが条件で、Free / Pro / Enterprise は対象外。適用範囲は Messages API・Batches API・Playground・Managed Agents・Agent SDK に限られ、対話的な Claude Code の利用や Bedrock / Vertex AI / Foundry 経由はカバーしない。"
description: "リンクする Console 組織は自分では変更できない。どの組織に紐づけるかを決めてから「Link organization」を押す必要がある。"
impact: "Max や Team を契約している組織は、別途 API 課金を立てずに月 $20〜$500 の範囲で Claude Platform を試せるようになる。ただし繰り越しがないため「毎月使い切る前提の検証予算」として扱う必要があり、組織の API キー保有者全員が同じ残高を共有する点は配分ルールを決めておかないとトラブルになる。Claude Code の対話利用はカバーされないため、サブスクリプションの置き換えにはならない。"
tags: ["claude", "料金", "max-plan", "team-plan", "api", "企業導入"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude/claude-max-plan"
draft: false
---

## 要約

Anthropic が2026年10月7日、Claude の **Max プランと Team プランに月次 API クレジット**を付けると発表しました。Claude Platform で自分のアプリやエージェントを動かすための枠で、数日かけて順次ロールアウトされます。

**金額は明示されています。**

| プラン | 月次クレジット |
| --- | --- |
| Max 5x | $100 |
| Max 20x | $200 |
| Team Standard | 1席あたり $20 |
| Team Premium | 1席あたり $100 |

Team は**席ごとの金額が組織の1つの残高にプールされ、月 $500 が上限**です。Standard 25席でちょうど上限、Premium 5席でも上限に届きます。Nonprofit / Scientists 向けの割引 Team プランも、席単位の金額は同じです。

**繰り越しはありません。** 未使用分は請求サイクルの末日で失効します。また、**月次クレジットは購入済みクレジットより先に消費される**ため、自分で買った分が先に減ることはありません。

**受け取りには Claude Console 組織を1つリンクする操作が必要です。** Max は claude.ai の Settings > Billing、Team は Organization settings > Billing の API credits セクションで「Link organization」を選びます。**ここがいちばん注意すべき点です。リンクした先は後から自分で変更できません。** Max は契約者本人が、Team は Primary Owner または Owner が操作し、Console 側では Owner / Admin / Billing のいずれかのロールが必要です。さらに**対象プランに7日間在籍していること**が条件になっています。

**適用範囲は Claude Platform に限られます。** 使えるのは Messages API、Batches API、Playground、Managed Agents、Agent SDK。**対話的な Claude Code の利用、追加利用枠、そして Bedrock / Vertex AI / Foundry 経由の利用はカバーされません。** Free / Pro / Enterprise プランは対象外です。

**組織単位の制約も複数あります。** 1つの Console 組織が受け取れるのは1プラン分のみで、**その組織の API キーを持つ全員が同じ残高を共有します。** クレジットはプランの利用上限（claude.ai 側のレート制限）を変えません。そしてクレジットが尽きた場合、購入クレジットや auto-reload がない限り **API リクエストは停止**します。**Claude プラン側へ課金が流れることはありません。** 解約・対象外プランへのダウングレード・返金を受けた場合は新規付与が止まりますが、既存クレジットは失効日まで使えます。

## 何が変わったか

- **Max 5x に月 $100、Max 20x に月 $200 の API クレジット**を付与
- **Team は Standard 席 $20 / Premium 席 $100 を組織で1つの残高にプール**、月 $500 が上限
- 割引 Team プラン（Nonprofit / Scientists）も席単位の金額は同額
- **繰り越しなし。** 未使用分は請求サイクル末で失効。月次クレジットが購入クレジットより先に消費される
- 受け取りには **Claude Console 組織を1つリンク**する。Max は Settings > Billing、Team は Organization settings > Billing
- **リンク先は利用者側では変更できない**
- 操作権限は Max が契約者本人、Team が Primary Owner / Owner。Console 側は Owner / Admin / Billing ロール
- **対象プランに7日間在籍していることが条件**
- 適用範囲は **Messages API / Batches API / Playground / Managed Agents / Agent SDK**
- **対象外**: 対話的な Claude Code の利用、追加利用枠、Bedrock / Vertex AI / Foundry 経由
- **プラン対象外**: Free / Pro / Enterprise
- 1つの Console 組織が受け取れるのは1プラン分のみ。**組織内の API キー保有者全員で残高を共有**
- クレジットはプランの利用上限を変更しない
- クレジットが尽きると API リクエストは停止。**Claude プラン側へは課金されない**
- 数日かけて順次ロールアウト

## 業務インパクト（一般企業向け）

**まず「リンク先を決めてから押す」ことを運用ルールにしてください。** リンクした Console 組織は後から自分では変更できません。検証用の組織と本番用の組織を分けている会社だと、**うっかり検証組織に紐づけると本番側でクレジットが使えません。** Team の場合は Primary Owner / Owner しか操作できないので、情シスか管理者が「どの組織に紐づけるか」を決めてから実行する手順にしておくべきです。ロールアウトが数日かけて進むため、画面に出た人が先に押してしまう事故が起きやすい局面です。

**「繰り越しなし」は予算の性質を決めます。** 月 $20〜$500 が毎月リセットされる枠なので、**ためて大きな検証に使うことができません。** 逆に言えば「毎月少しずつ試す」用途には合っています。四半期に一度まとまった PoC を回す予定なら、この枠は当てにせず別途クレジットを購入する前提で計画してください。月次クレジットが購入分より先に消費される仕様なので、両方ある場合の消費順は心配しなくて大丈夫です。

**残高の共有は配分ルールの話になります。** 組織内で API キーを持つ全員が同じ残高を見ます。Team Premium 5席で $500 あっても、1人が大きなバッチ処理を回せば月半ばで尽きます。**誰がどの用途で使うか、尽きたらどうするかを決めておかないと「今日 API が止まった」という問い合わせが情シスに来ます。** クレジットが尽きると API リクエストは停止しますが、**Claude プラン側に課金が流れないのは安心できる設計**です。想定外の請求は発生しません。

**Claude Code のサブスクリプション代わりにはなりません。** 対話的な Claude Code の利用は明示的に対象外です。ここを誤解すると「Max を契約したから Claude Code の API 利用も無料になる」という期待が社内に広まります。カバーされるのは Claude Platform 側、つまり**自分でコードを書いて API を叩く用途**です。Bedrock / Vertex AI / Foundry 経由も対象外なので、クラウド経由で Claude を使っている組織にはこの枠の恩恵がありません。

**7日間の在籍条件は、導入計画のスケジュールに影響します。** 契約してすぐ受け取れるわけではないので、PoC の開始日から逆算して契約日を決めてください。

## 副業・個人活用視点

**Max 20x 契約者にとっては、月 $200 の実験枠が実質無料で付いたことになります。** これは個人開発の観点ではかなり大きい額です。前日公開された Claude Haiku 5.5 は10万トークン以下なら入力 $0.10 / 出力 $0.50（per MTok）なので、**$200 あれば Haiku 5.5 で入力20億トークン相当**です。分類や抽出のような量で殴る処理を試すには十分すぎる枠です。Opus 5.5（$4 / $20）でも入力5000万トークン分あります。

**「毎月使い切る前提」で小さな自動化を積む使い方が合っています。** 繰り越しがないので、ためる意味がありません。月初に「今月はこれを作る」と決めて、Playground で試して Messages API で動かす、というサイクルを回すのに向いた枠です。Managed Agents と Agent SDK もカバー範囲なので、エージェント構成の実験もここで回せます。

**受託や副業案件の提案材料としても使えます。** クライアントに「まず Max を1つ契約して、付いてくる月 $200 の枠で PoC を回しましょう」と提案できます。**別途 API 契約を立てる稟議を避けられる**ので、小規模な検証の立ち上がりが速くなります。ただし Bedrock / Vertex AI 経由は対象外なので、クラウド経由を前提にしている先には使えません。

**注意点は、Claude Code を仕事道具にしている人への誤解です。** Max を契約している理由が Claude Code の利用枠である人は多いはずですが、**この API クレジットは Claude Code の対話利用には使えません。** あくまで「自分で API を叩く分」の枠です。別物として扱ってください。

## 関連リンク

- [API credits for Max and Team plans（公式サポート記事）](https://support.claude.com/en/articles/17154008)
- [Claude release notes（公式）](https://support.claude.com/en/articles/12138966-release-notes)
- [API credits for subscribers（公式ドキュメント）](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers)
