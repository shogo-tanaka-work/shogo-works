---
title: "GitHub Copilot：Cost centerがAIクレジットの月間利用上限に対応"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-02
sourceUrl: "https://github.blog/changelog/2026-07-02-cost-centers-now-support-included-usage-caps"
summary: "Cost center単位でAIクレジットの月間利用上限をREST API経由で設定できるようになった（UI管理は近日対応予定）。上限はCopilot Business/Enterpriseライセンス割当数に基づき自動算出され、あるグループが共有クレジットプールを使い尽くすのを防ぐ。"
description: "Cost center単位でAIクレジットの月間上限をREST APIで設定可能に。共有クレジットプールの偏った消費を防ぎ、部門別コスト統制を強化する。UI管理は近日対応予定。"
impact: "大規模組織でCopilotの利用が特定部門に偏り、共有クレジットが枯渇するリスクを事前に抑えられるようになった。現時点ではREST API経由の設定のみでUIは未対応。"
tags: ["github-copilot", "enterprise", "cost-management", "cost-center"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHubは2026-07-02、**Cost center単位でAIクレジットの月間利用上限を設定できる機能**を追加しました。これまでCost centerは予算管理や従量課金の単位としては使えましたが、AIクレジットの共有プールに対する上限設定はできませんでした。

新機能では、Cost centerに割り当てられたCopilot Business/Enterpriseのライセンス数に基づいて上限が自動算出され、REST API経由で設定できます。ある部門・チームが共有のAIクレジットプールを使い尽くし、他部門が使えなくなるという事態を未然に防ぐのが狙いです。既存のCost center予算・従量課金の仕組みと併用できます。なお、現時点ではUIからの管理には対応しておらず、**近日対応予定**とされています。

## 何が変わったか

- **Cost center単位でAIクレジットの月間利用上限**を設定可能に
- 上限は**Copilot Business/Enterpriseライセンス割当数**に基づき自動算出
- 設定は**REST API経由**（UI管理は近日対応予定）
- 既存のCost center予算・従量課金の仕組みと併用可能

## 業務インパクト（一般企業向け）

複数の部門・チームでAIクレジットの共有プールを使っている組織にとって、特定部門による過剰消費を防ぐ仕組みが整ったことは大きな意味を持ちます。これまでは「気づいたら開発部門がクレジットを使い尽くしていて他部門が使えなくなった」という事態が起こり得ましたが、Cost center単位の上限設定でそれを事前に防げます。

現時点ではREST API経由の設定のみのため、社内でスクリプトを書くか、GitHub Appを通じて設定を自動化する必要があります。UI対応を待ってから本格導入する組織も多いと思われますが、大規模組織で緊急に部門別上限を設けたい場合はAPI経由での先行導入を検討する価値があります。

## 副業・個人活用視点

この機能は組織のコスト管理者向けであり、個人利用者への直接的な影響はありません。企業向けにCopilot導入・運用のコンサルティングを行っている方は、「部門別のAIクレジット上限をAPIで設定できるようになった」という点を、コスト管理に不安を持つ顧客への提案材料として押さえておくとよいでしょう。
