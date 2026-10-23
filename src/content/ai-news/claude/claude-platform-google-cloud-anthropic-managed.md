---
title: "Claude Platform の全機能が Google Cloud で一般提供に — Anthropic managed 版は IAM・請求・コミット充当に対応、新機能は当日から"
tool: "claude"
toolLabel: "Claude"
date: 2026-10-22
sourceUrl: "https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed"
summary: "Anthropic が 2026-10-22、Claude Models on Google Cloud (Anthropic managed) を一般提供とした。Google Cloud の IAM 認証情報、単一の請求書、既存のコミットメント充当のまま、Claude Platform の全機能を使える。Managed Agents、コード実行、computer use、Agent Skills、MCP コネクタ、プロンプトキャッシュ、バッチ処理などが含まれ、新機能やベータはネイティブの Claude Platform と同日に届く。エンドポイントは米国とグローバル。Claude Opus 5.5 の Fast mode も一般提供となり、出力速度は最大2.5倍で、入力・出力は100万トークンあたり8ドル・40ドル。Google が処理者となる従来の Google managed 版も残り、両者は用途で使い分ける。"
description: "Google Cloud 経由でも Claude Platform の全機能を同日利用できる Anthropic managed 版が GA。Google managed 版との使い分けがある。"
impact: "Google Cloud の契約を主に使う企業が、機能の遅れなく Claude を使えるようになる。ただしデータ処理者が Anthropic になるため、契約と法務の確認が先に要る。"
tags: ["claude", "google-cloud", "claude-platform", "managed-agents", "fast-mode"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic は 2026-10-22、**Claude Models on Google Cloud (Anthropic managed)** を一般提供としました。Google Cloud の IAM 認証情報と請求を使いながら、**Claude Platform の全機能**を利用できる提供形態です。

Claude には Google Cloud 上の入口が2つあります。今回の **Anthropic managed 版**と、従来からの **Google managed 版**で、データ処理者が異なります。

## 何が変わったか

- **機能の同時提供**: 新機能やベータが、ネイティブの Claude Platform と同日に届く
- **含まれる機能**: Managed Agents（ベータ）、コード実行、computer use、Agent Skills、アドバイザー戦略（ベータ）、Files API、Citations、Web 検索と Web fetch、MCP コネクタ（ベータ）、プロンプトキャッシュ、バッチ処理
- **認証・請求**: 既存の Google Cloud IAM 認証情報。請求は Google Cloud の1枚の請求書で、利用分は既存のコミットメントから差し引かれる
- **エンドポイント**: 米国とグローバル
- **Claude Console**: プロンプト作成、エージェント設定、利用状況の監視、ワークスペース単位のアクセス管理が使える
- **モデル**: Claude Fable 5.1、Opus 5.5、Sonnet 5.5、Haiku 5.5。新モデルも発売に合わせて追加される
- **Fast mode**: Opus 5.5 で一般提供。出力トークンの生成が最大2.5倍速く、入力は100万トークンあたり8ドル、出力は40ドル
- **使い分け**: Anthropic managed は全機能の当日利用向きで、Anthropic が処理者。Google managed は、Google を処理者にしたい、厳しい地域データ要件がある、Model Armor や Agent Engine を使いたい場合に向く

## 業務インパクト（一般企業向け）

**Google Cloud を調達の窓口にしている企業は、機能の遅れと別契約の負担なく Claude を使えます。** 利用額が既存コミットに充当されるため、新規に予算枠を取らなくても試せる可能性があります。

選ぶときの分かれ目は**データ処理者**です。Anthropic managed では Anthropic が処理者になります。個人情報や機密を扱う場合、法務と情報セキュリティに先に確認してください。厳しい地域要件があるなら、公式も Google managed 版を勧めています。

既存の割引がある場合、公式は開始前に営業担当へ連絡するよう求めています。割引は遡って適用できません。

## 副業・個人活用視点

**クライアントが Google Cloud 契約を持っているなら、Claude を使う開発案件の提案がしやすくなります。** クライアントの請求とアクセス管理の中で完結するため、「別のベンダー契約を増やさずに」という説明ができます。

個人が自分の API キーで試す用途では、ネイティブの Claude Platform で足ります。この発表は、組織の調達経路の話です。

## 情報源の制約

本記事は Anthropic 公式の発表ページを根拠にしています。日本を含む地域別エンドポイント、Anthropic managed 版の追加料金、Google Cloud 側の対応リージョンは確認できていません。
