---
title: "Claude Enterprise：コネクタアクセスをcustom rolesで部門別制御"
tool: "claude"
toolLabel: "Claude"
date: 2026-05-28
sourceUrl: "https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans"
summary: "Anthropic は 2026-05-28 の Release Notes で **Enterprise プランの custom roles にコネクタアクセス制御を統合** したと発表した。これまで custom roles では chat / Claude Code / Cowork / web search / skills / Claude for Chrome などの機能可用性を制御していたが、ここに **コネクタ（Slack / Google Drive など接続済みサービス）の利用権限** が組み込まれた。設定単位は **connector 単位** と **connector tool 単位** の 2 階層で、各単位に **Always allowed（常に許可）/ Needs approval（都度承認）/ Blocked（不可）** の 3 状態を割り当てられる。全 connector に対する一括設定と、connector / tool ごとのカスタム設定の両方が可能。権限は **加算的（additive）合成**：いずれかのロールが特定機能を許可していればメンバーはアクセス可。組織レベルのトグルが一次的な制御で、custom roles はその下のセカンダリスイッチ。最終的には **プラットフォーム override → 組織 → ロール → ユーザー設定** の 4 階層で **最も制限の強い設定が勝つ** 形。Enterprise 限定機能（custom roles 自体が Enterprise）。同日の Opus 4.8 / dynamic workflows / Series H の大型発表に隠れがちだが、Enterprise 管理者にとっては運用設計の実務影響が最も大きいリリース。"
description: "Claude EnterpriseのカスタムロールにSlack・Google Driveなどのコネクタ権限が統合。Always allow/Needs approval/Blockedをconnector単位・tool単位で設定でき、部門ごとの利用ポリシーを1つのロール表で一元管理できるようになった変更点を解説します。"
impact: "Claude Enterprise を導入している組織にとって、これまで「コネクタは組織レベルでオン / オフのみ」だった運用を **部門別 / 業務別の差別化** に進化させられる。例: 営業ロールには Slack コネクタを Always allow、Salesforce ツールだけ Needs approval、データチームには Google Drive を Always allow、Slack を Blocked、など。**機能（chat / Claude Code / Cowork など）の可用性とコネクタの可用性を、同じ role 定義の中で一気通貫に管理** できるようになるため、社内の「Claude 利用ポリシー」を 1 つのロール表に集約できる。**加算的合成（いずれかのロールが許可なら可）** と **最終的に最も制限の強い設定が勝つ階層構造** という 2 つの合成則を理解しておかないと、想定外の許可漏れや過剰制限が発生する。管理者は **`プラットフォーム override → 組織 → ロール → ユーザー設定`** の 4 階層の判断順序を社内ドキュメント化する必要がある。SOC 2 / ISO 27001 などの監査対応で「誰がどの connector の何のツールを使えるか」を聞かれる場面でも、ロール単位の表で示せるようになった点は監査対応のコストを下げる。同日の Series H・Opus 4.8 のニュースに目を奪われがちだが、**Enterprise 管理者は今週中に role 表の見直し** を始めるべき。"
tags: ["claude", "enterprise", "connectors", "custom-roles", "rbac", "governance", "permissions"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude/enterprise"
  - "/knowledge/ai-tools/claude/connectors"
draft: false
---

## 要約

Anthropic は 2026 年 5 月 28 日の Release Notes で **Enterprise プランの custom roles にコネクタアクセス制御を統合** したと発表しました。これまで custom roles で扱えていたのは chat / Claude Code / Cowork / web search / skills / Claude for Chrome などの **機能可用性** でしたが、ここに **コネクタ（Slack / Google Drive など接続済みサービス）の利用権限** が組み込まれます。

### 設定できること

- **connector 単位** と **connector tool 単位** の 2 階層で、それぞれ次のいずれかを割り当て:
  - **Always allowed**（常に許可）
  - **Needs approval**（都度承認）
  - **Blocked**（不可）
- 全 connector に対する一括設定と、connector / tool ごとのカスタム設定の両方が可能。

### 権限の合成則

- **加算的（additive）合成**: いずれかのロールが特定機能を許可していれば、メンバーはアクセス可。
- 組織レベルのトグルが一次的な制御、custom roles はその下のセカンダリスイッチ。
- 最終判定は **プラットフォーム override → 組織 → ロール → ユーザー設定** の 4 階層で、**最も制限の強い設定が勝つ**。

### 対応プラン

- **Enterprise のみ**（custom roles 自体が Enterprise 機能）。

### 同日の他の発表との関係

同日に Anthropic は Opus 4.8、Claude Code dynamic workflows、Series H を発表しており、目を奪われがちですが、Enterprise 管理者にとっては **本リリースが運用設計に最も実務影響を与える** 内容です。

## 何が変わったか

- custom roles の制御範囲に **コネクタアクセス権限** が加わった。
- connector 単位 / connector tool 単位の 2 階層で、Always allowed / Needs approval / Blocked を設定可能。
- 全 connector 一括設定 + 個別カスタム設定の両方をサポート。
- 加算的合成 + 4 階層（プラットフォーム → 組織 → ロール → ユーザー）の合成則で最終判定。

## 業務インパクト（一般企業向け）

Claude Enterprise を導入している組織にとって、これまで「コネクタは組織レベルでオン / オフのみ」だった運用を **部門別 / 業務別の差別化** に進化させられます。

具体例:

- **営業ロール**: Slack を Always allow、Salesforce コネクタの一部ツールだけ Needs approval。
- **データチーム**: Google Drive を Always allow、Slack を Blocked。
- **法務チーム**: 全 connector を Needs approval、Claude Code を Blocked。

**機能（chat / Claude Code / Cowork など）の可用性とコネクタの可用性を、同じ role 定義の中で一気通貫に管理** できるため、社内の「Claude 利用ポリシー」を 1 つのロール表に集約できます。

### 合成則の理解

**加算的合成（いずれかのロールが許可なら可）** と **最終的に最も制限の強い設定が勝つ階層構造** という 2 つの合成則を理解しておかないと、想定外の許可漏れや過剰制限が発生します。管理者は次の順序を社内ドキュメントに明記する価値があります:

1. **プラットフォーム override**（Anthropic 側の制約 / 法的要件）
2. **組織レベル**（最上位の Enterprise 設定）
3. **ロール**（custom roles 単位の許可 / 制限、加算的合成）
4. **ユーザー設定**（個人の preference）

合成順序を踏まえると、「組織トグルでオフにしたコネクタは、custom roles でいくら Always allow にしても使えない」「ロールで Blocked にしているコネクタは、他のロールが Always allow なら使える（加算的合成）」といった挙動が予測可能になります。

### 監査対応

SOC 2 / ISO 27001 などの監査対応で「**誰がどの connector の何のツールを使えるか**」を聞かれる場面で、ロール単位の表で示せるようになりました。監査対応のコストが実務的に下がります。

### 推奨アクション

同日の Opus 4.8 / Series H / dynamic workflows のニュースに目を奪われがちですが、**Enterprise 管理者は今週中に role 表の見直し** を始めるのが推奨です。特に「これまでコネクタを組織レベルで広めに開けていた」組織は、ロール単位の Needs approval / Blocked 化を検討する好機です。

## 副業・個人活用視点

副業として **Claude Enterprise を導入したクライアント** に管理者として関わる人にとって、本機能は提供価値を 1 段引き上げる材料です。「Claude Enterprise の権限設計が**コネクタ単位まで降りた**ので、御社の組織体系に合わせた role 表を作り直すコンサルが可能になります」という営業ポジションが取れます。

custom roles を設計するスキルは Enterprise 案件で時給を引き上げる根拠になります。**加算的合成と 4 階層の合成則** を説明できるフリーランス（特に SOC 2 / ISO 27001 監査経験者）は、Claude Enterprise を新規導入する組織にとって貴重なポジションです。

個人利用には影響しません（Enterprise 限定機能）。
