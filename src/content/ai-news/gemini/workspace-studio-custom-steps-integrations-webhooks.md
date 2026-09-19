---
title: "Workspace Studio に custom starters / custom steps / 3P連携 / webhooks が追加。Jira・Salesforce・Slack など8サービスと接続でき、4機能とも既定 OFF"
tool: "gemini"
toolLabel: "Gemini / Google Workspace"
date: 2026-09-17
sourceUrl: "https://workspaceupdates.googleblog.com/2026/09/automate-workflows-with-custom-starters-and-steps-third-party-integrations-and-webhooks-in-Workspace-Studio.html"
summary: "Google が 2026-09-17、Workspace Studio の flows に4つの新機能を追加した。custom starters は他アプリのイベントで flow を起動するリアルタイムトリガーを自作・公開できる。custom steps は Apps Script などで独自ロジックを書いて flow へ組み込める。third-party integrations はベータで、Asana / Confluence / HubSpot / Jira / Mailchimp / QuickBooks / Salesforce / Slack の8サービスと双方向にデータを受け渡す。webhooks は外部エンドポイントへ HTTP リクエストを送り、外部側のアクションを起動する。4機能とも granular enterprise security controls で裏打ちされており、すべて既定 OFF で管理者が Admin Console から有効化する。人間の承認要件も管理者が設定し、custom steps と integrations はそれぞれ独自の承認設定を持ち、webhooks は Sensitive Steps の承認設定に従う。対応エディションでは webhook のアクセス先 URL 許可リストを設定できる。"
description: "Workspace Studio が「Google 内で完結する自動化」から「外部を含む業務自動化基盤」になった。"
impact: "既定 OFF のため、使うには管理者作業が必ず発生する。逆に、有効化した瞬間から社内の自動化が外部サービスへ到達できるようになるため、承認要件と URL 許可リストを先に設計しないと統制が後追いになる。"
tags: ["gemini", "google-workspace", "workspace-studio", "自動化", "webhook", "apps-script", "管理者設定"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/gemini/workspace-features"
  - "/knowledge/ai-tools/gemini/overview"
draft: false
---

## 要約

Google は 2026-09-17、**Workspace Studio の flows に4つの新機能**を追加しました。公式の位置づけは「Workspace Studio の能力を広げ、チームが強力なカスタム自動化を組めるようにする」ためのものです。

**追加されたのは次の4つです。**

- **Custom starters**: 他アプリのイベントで flow を起動する**リアルタイムトリガーを自作・公開**できる
- **Custom steps**: **Apps Script** などで独自ロジックを書き、高度な業務要件に合わせて flow を調整できる
- **Third-party integrations（ベータ）**: 外部サービスと**双方向にデータを受け渡す**
- **Webhooks**: 外部エンドポイントへ **HTTP リクエストを送り、外部側のアクションを起動**する

**3P連携の対応サービスは8つが明示されています。** Asana、Confluence、HubSpot、Jira、Mailchimp、QuickBooks、Salesforce、Slack。**プロジェクト管理（Asana / Jira）、ナレッジ（Confluence）、CRM / MA（HubSpot / Salesforce / Mailchimp）、会計（QuickBooks）、チャット（Slack）**と、業務系の主要カテゴリが一通り揃っています。

**この4機能を合わせると、Workspace Studio の性格が変わります。** これまでは「Google のサービス群の中で完結する自動化ツール」でした。custom steps で任意のロジックを書け、3P連携で主要 SaaS とつながり、webhooks で任意のエンドポイントを叩けるようになると、**「業務自動化基盤」の側に寄ります。**

**Google 側もそれを認識しています。** 公式は4機能すべてについて「**granular enterprise security controls に裏打ちされており、管理者が組織全体でエージェント機能を安全に有効化・採用できる**」と明記しました。**機能紹介と同じ段落に統制の話が置かれているのは、機能の性質を反映しています。**

**具体的な統制は3層あります。**

**第1層は有効化です。すべて既定 OFF** で、管理者が Admin Console の `Apps > Google Workspace > Workspace Studio` 配下で有効化します。設定項目は **Custom steps settings / Integration settings / Webhook settings** の3つです。

**第2層は承認要件です。** 管理者は `Apps > Google Workspace > Workspace Studio > Approvals` で**人間の承認要件を変更**できます。**Custom steps と Integration はそれぞれ独自の承認設定を持ち、Webhooks は Sensitive Steps の承認設定に従います。**

**第3層は宛先の制限です。** 対応エディションでは、管理者が **webhook のアクセス先 URL 許可リスト**を設定できます。

エンドユーザー側は、有効化された後に Workspace Studio から新機能を使います。ロールアウトは Admin console 設定が Rapid / Scheduled Release の両方へ提供されます。

## 何が変わったか

- **Custom starters**: 他アプリのイベントで flow を起動するリアルタイムトリガーを**自作・公開**できる
- **Custom steps**: **Apps Script** などで独自ロジックを書き、flow に組み込める
- **Third-party integrations（ベータ）**: **Asana / Confluence / HubSpot / Jira / Mailchimp / QuickBooks / Salesforce / Slack** の8サービスと接続
- **Webhooks**: 外部エンドポイントへ HTTP リクエストを送信し、外部のアクションを起動
- **4機能とも既定 OFF。** 管理者が Admin Console（`Apps > Google Workspace > Workspace Studio`）で有効化
- 有効化の設定は **Custom steps settings / Integration settings / Webhook settings** の3項目
- **人間の承認要件を管理者が設定可能**（`> Approvals`）。Custom steps と Integration は独自設定、**Webhooks は Sensitive Steps の設定に従う**
- 対応エディションで **webhook の URL 許可リスト**を設定可能
- ロールアウト: Admin console 設定は **Rapid / Scheduled Release の両方**

## 業務インパクト（一般企業向け）

**この更新で管理者に降ってくる仕事は、有効化の可否判断ではありません。承認要件と URL 許可リストの設計です。**

**有効化の判断自体は難しくありません。** 既定 OFF なので、放置すれば何も起きません。問題は、**現場から「Jira と連携したい」「Slack に通知したい」という要望が来たときに、何を条件に開けるか**です。ここを決めずに個別対応すると、**「要望があったから開けた」が積み上がって統制が消えます。**

**先に決めるべきは3点です。**

**(1) webhook の宛先。** URL 許可リストが対応エディションで使えるので、**リストを先に作ってから webhook を有効化する**順序にします。逆にすると、有効化直後の期間だけ宛先が無制限になります。

**(2) 承認が要るステップの線引き。** webhooks が Sensitive Steps の承認設定に従う、という構造は使いようがあります。**Sensitive Steps の定義を先に整理しておけば、webhook の承認要件は自動的にそこへ乗ります。** custom steps と integrations は別設定なので、こちらは個別に決めます。

**(3) custom steps を誰が書けるか。** Apps Script で任意のロジックを書けるということは、**flow の中で何が起きるかがコードを読まないと分からない**ということです。これまで Workspace Studio の flow は、画面上の構成を見れば挙動が追えました。custom steps が入ると追えません。**書ける人を絞るか、レビュー工程を置くか**の判断が要ります。

**3P連携のベータという位置づけも押さえておきます。** Salesforce や QuickBooks のような**基幹に近いシステムと接続する機能がベータ**である以上、**本番の業務プロセスを最初から全面的に載せるのは早すぎます。** 読み取り方向から始めて、書き込みは検証後、という段取りが妥当です。

**もう1つ、既存の自動化ツールとの重複が発生します。** n8n や Zapier のような外部ツールで Workspace と SaaS をつないでいる組織は、**同じ連携が Workspace Studio でも組めるようになりました。** どちらに寄せるかを決めないと、**同じ業務フローが2か所で動く**という最悪の状態になります。棚卸しのタイミングとしては適切です。

## 副業・個人活用視点

**業務自動化を請けている人にとって、これは案件の形が変わる更新です。**

これまで「Google Workspace と Jira をつなぎたい」という依頼が来たら、**外部の自動化ツールを挟む**のが定石でした。ツールの契約、アカウント管理、費用の説明が必要で、そこが提案のハードルになっていました。

**Workspace Studio で完結するなら、その説明が要りません。** 既に契約している Workspace の範囲内で組めるということは、**「新しいツールを増やさない提案」**ができるということです。**情シスが新規 SaaS の導入審査を嫌う組織では、これは強い差別化になります。**

**一方で、単純な連携設定の単価は下がります。** 画面上で組めるものに高い工数は請求できません。**価値の置きどころを移す必要があります。**

移し先は明確で、**統制の設計**です。承認要件をどう設計するか、webhook の許可リストに何を載せるか、custom steps を誰に書かせるか——**これは Admin Console を触れるだけでは決まりません。** 業務と権限を理解している人の判断が要ります。**「つなぐ作業」ではなく「つないでよい範囲を決める作業」に価格を置く**のが、この更新後の正しい立ち回りです。

**Apps Script が書けることの価値も上がります。** custom steps で Apps Script のロジックを flow へ組み込めるということは、**GAS の知識が「単体のスクリプト」ではなく「自動化基盤の部品」として売れる**ということです。GAS 案件を受けている人は、**Workspace Studio の flow に組み込む形での提案**を用意しておくと単価を守りやすくなります。

**教える立場では、「既定 OFF」という仕様そのものが教材です。** 機能が発表されても、**管理者が開けなければ社内では存在しません。** 「新機能が出た」と「自社で使える」の間に管理者の判断が挟まる、という構造を、具体的な設定パスつきで説明できます。

## 関連リンク

- 公式: [Automate workflows with custom starters and steps, third-party integrations, and webhooks in Workspace Studio](https://workspaceupdates.googleblog.com/2026/09/automate-workflows-with-custom-starters-and-steps-third-party-integrations-and-webhooks-in-Workspace-Studio.html)
- 調査メモ: `docs/research/zenn-gemini-release-basic/official-updates/2026-09-17T000000-workspace-studio-custom-steps-integrations-webhooks.md`
