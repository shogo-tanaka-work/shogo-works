---
title: "Gemini in Workspace が MCP で外部7サービスへ接続 — 既定で有効、管理者が止める側に回る"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-09-15
sourceUrl: "https://workspaceupdates.googleblog.com/2026/09/connect-to-more-tools-with-gemini-in-Google-Workspace.html"
summary: "Google が 2026-09-15、Workspace の Gemini から外部業務ツールへ直接接続できるようにしたと発表した。接続方式として Model Context Protocol（MCP）を明示している。対象は Asana / Atlassian Rovo / HubSpot / Intuit Mailchimp / Intuit QuickBooks / Monday / Salesforce の7サービス。Docs / Sheets / Slides / Chat の Gemini サイドパネルから利用する。管理者はドメイン / 組織部門 / グループ単位で制御できるが、対象ユーザーには既定で有効であり、無効化する側に回る。Rapid / Scheduled 両ドメインで即日利用可能。"
description: "MCP が、開発者向けの規格から一般利用者の業務画面へ降りてきた。"
impact: "既定で有効なため、管理者が何もしなければ社内の Gemini から外部 SaaS への接続が開く。Workspace 管理者は即日の確認対象。"
tags: ["gemini", "google-workspace", "mcp", "コネクタ", "管理者", "ガバナンス", "salesforce"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/gemini/overview"
draft: false
---

## 要約

Google は 2026-09-15、Workspace 内の Gemini から外部業務ツールへ直接接続できるようにしたと発表しました。**接続方式として Model Context Protocol（MCP）連携であることを明示しています。**

対象は7サービスです。**Asana、Atlassian Rovo、HubSpot、Intuit Mailchimp、Intuit QuickBooks、Monday、Salesforce。** 利用者は Sheets / Gmail / Drive / Docs / Chat など Workspace の各アプリの中から、**アプリを切り替えたり手作業でデータを移したりせずに**これらのデータを扱えます。エンドユーザーの入口は **Docs / Sheets / Slides / Google Chat の Gemini サイドパネル**です。

**この発表の重要度は、7サービスという数ではありません。MCP が一般利用者の業務画面に降りてきたことです。**

MCP は元々、AI と外部データを繋ぐための規格として、開発者やエージェント開発の文脈で語られてきました。**それが今回、Workspace という「全社員が毎日開く画面」の標準機能として提供されます。** 繋ぐ人と使う人が分離し、**MCP を知らない利用者が MCP 経由でデータを扱う**構図になります。

**管理面で最も注意すべき点があります。既定の状態です。**

管理者は管理コンソールから**ドメイン / 組織部門（OU）/ グループ単位でコネクタを管理**できます。**ただし、対象ユーザーに対しては既定で有効です。** つまり **管理者は「有効にする側」ではなく「無効にする側」に回ります。** 何もしなければ接続は開きます。

ロールアウトは **Rapid Release / Scheduled Release の両ドメインで即日利用可能**です。段階展開ではありません。

対象エディションは Business（Business / Standard / Plus）、Enterprise（Enterprise / Standard / Plus）、Enterprise Essentials Plus、消費者向けの Google AI Pro / Ultra、教育向けアドオン（Google AI Pro for Education、Teaching and Learning、Endpoint Education）です。

## 何が変わったか

- Workspace の Gemini が **MCP 連携**で外部7サービスへ直接接続できるようになった
- **対象7サービス**: Asana、Atlassian Rovo、HubSpot、Intuit Mailchimp、Intuit QuickBooks、Monday、Salesforce
- 利用面: Sheets / Gmail / Drive / Docs / Chat から、アプリ切り替えやデータの手作業移動なしに参照できる
- エンドユーザーの入口: **Docs / Sheets / Slides / Google Chat の Gemini サイドパネル**
- 管理面: 管理コンソールから**ドメイン / 組織部門（OU）/ グループ単位**で管理できる
- **対象ユーザーには既定で有効。管理者が無効化する形**
- **Rapid Release / Scheduled Release の両ドメインで即日利用可能**（段階展開ではない）
- 対象: Business / Enterprise 各エディション、Enterprise Essentials Plus、Google AI Pro / Ultra、教育向けアドオン

## 業務インパクト（一般企業向け）

**Workspace を使っている組織の管理者にとって、これは即日の確認対象です。理由は「既定で有効」かつ「即日展開」という2つが重なっているためです。**

通常の Workspace の新機能は、Rapid Release から段階的に降りてきます。**気づいてから対応するまでに数日から2週間の猶予がありました。** 今回はそれがありません。**両ドメイン即日、かつ既定で有効。** 発表を見ていなければ、**社内の Gemini から Salesforce や QuickBooks への接続が、誰の判断も経ずに開いている**状態になります。

**最初に確認すべきは1点です。「対象7サービスのうち、自社が契約しているものはどれか」。**

契約していないサービスについては、コネクタが有効でも接続できません。実質的なリスクはありません。**契約しているサービスがある場合だけ、次の検討に進みます。** 特に **QuickBooks（会計）と Salesforce（顧客データ）は、扱うデータの性質から優先度が高い**組み合わせです。

**次に、権限の伝播を確認してください。**

MCP コネクタ経由でデータを取得するとき、**誰の権限で取得されるのか。** 公式発表はこの点を詳述していません。**Workspace 管理者としては、対象サービス側の権限設計と、Gemini 経由のアクセスが一致するかを確認する必要があります。** 一致していない場合、**本来その利用者が見られないデータが Gemini 経由で見える**可能性が残ります。**確認できるまでは、該当コネクタを OU 単位で無効にしておくのが安全側の判断です。**

**3点目、記録の観点です。**

Gemini サイドパネルからの操作が、対象サービス側の監査ログにどう残るか。**規制業種や、顧客データの取り扱いに説明責任がある組織では、ここが導入可否を決めます。** 「便利だから使ってよい」ではなく、「使った記録が残るか」を先に確認する順序を守ってください。

**運用としての推奨はこうです。** (1) 対象7サービスのうち自社契約分を洗い出す、(2) 該当があれば、まず OU 単位で無効化して時間を確保する、(3) 権限伝播と監査ログを確認する、(4) 確認できた OU から段階的に有効化する。**既定で有効だからといって、そのまま使い始める必要はありません。**

**なお、MCP という規格名が Google の公式発表に出てきたこと自体、記録に値します。** Anthropic 発の規格が、Google の Workspace という別ベンダーの主力製品の公式説明で使われている。**AI とデータを繋ぐ方式の標準化が、実際に進んでいることの証拠です。**

## 副業・個人活用視点

**個人での利用という観点では、Google AI Pro / Ultra が対象に含まれているため、個人契約でも使えます。**

**ただし、対象7サービスは法人向けの業務ツールが中心です。** Asana、Monday、HubSpot、Salesforce、QuickBooks、Mailchimp、Atlassian Rovo。**個人事業主で該当するとすれば、HubSpot（無料枠がある CRM）、Mailchimp（メール配信）、Asana か Monday（タスク管理）あたりです。** これらを使っているなら、Docs や Sheets の作業中にそのままデータを参照できるようになります。

**支援・受託の立場では、ここには「止める側の仕事」があります。**

**多くの AI 関連の支援は「導入する」仕事です。今回のような既定で有効な機能に対しては、逆の仕事が発生します。** 「何が勝手に有効になっているかを洗い出し、止めるべきものを止める」。**これは地味ですが、確実に需要があります。**

理由は、**Workspace 管理者が社内に1人しかいない、あるいは兼任である中小企業が多いから**です。Workspace Updates を毎日追える管理者は稀です。**既定で有効・即日展開という組み合わせは、こうした組織では確実に見落とされます。**

**提案の形としては、単発の「AI 設定棚卸し」が成立します。** 対象サービスの契約状況を確認し、OU 単位の設定を整理し、権限伝播と監査ログの確認項目を渡す。**数時間の作業で、顧客側のリスクは実際に下がります。**

**さらに継続的な形にするなら、Workspace Updates と各ベンダーの管理者向け告知を定期的に確認し、「既定で有効になる変更」だけを抜き出して報告する**という仕事が作れます。**AI 機能の既定値が有効側に倒れる傾向は、今回に限りません。** 継続的に見る必要があるものは、継続的な契約になります。

**注意点を1つ。管理コンソールの設定変更は、影響範囲が全社に及びます。** 顧客環境で作業する場合、**必ず OU 単位で段階的に行い、変更前の状態を記録してください。** 「全社で Gemini のコネクタが使えなくなった」という事故は、復旧はできても信用は戻りません。
