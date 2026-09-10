---
title: "GitHub Copilot for JetBrains に企業向け中央管理設定。MCP サーバーの allowlist / denylist に対応"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-08-18
sourceUrl: "https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains/"
summary: "JetBrains 系 IDE 向けの GitHub Copilot が、管理者による中央管理設定に対応した。対象はプラグインの統制、MCP サーバーの allowlist / denylist、OpenTelemetry の設定、権限モードの4領域。管理者はプラグインの必須化・無効化や承認済みソースへの限定ができ、開発者がアクセスできる MCP サーバーを中央で制御できる。Bypass Approvals と Autopilot の無効化も可能。対象は Copilot Enterprise。"
description: "エージェント利用の統制点が IDE 側にも入った。MCP 経由の外部接続を IT 側で握れるようになり、承認を省略する動作と自律実行を組織単位で止められる。"
impact: "JetBrains を標準 IDE としている組織では、これまで VS Code 側に比べて統制手段が限られていた。MCP の allowlist / denylist が中央管理できるようになったことで、エージェントの外部接続範囲をポリシーとして固定できる。"
tags: ["github-copilot", "jetbrains", "mcp", "エンタープライズ", "ガバナンス"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub Copilot の JetBrains 向けプラグインが、**管理者による中央管理設定（Enterprise managed settings）**に対応しました。2026-08-18 の changelog で公開され、対象は **Copilot Enterprise** プランです。管理できるのは次の4領域です。

**プラグインの統制**では、特定のプラグインを必須化または無効化し、追加のマーケットプレイスを承認するか、承認済みソースだけに限定するかを決められます。開発者が任意にプラグインを追加できる状態を、組織のポリシー側から閉じられます。

**MCP サーバーの制御**が明示的に含まれます。開発者がアクセスできる Model Context Protocol サーバーを、**allowlist と denylist で中央管理**します。MCP は外部システムへの接続口になるため、ここを IT 側で握れるかどうかは、エージェント利用を許可するかの判断に直結します。

**OpenTelemetry の設定**も中央管理の対象です。collector のエンドポイントと resource attribute を指定して、テレメトリのルーティングを組織で揃えられます。

**権限モード**では、管理者が「**Bypass Approvals**」と「**Autopilot**」を無効化できます。承認ステップを省略する動作と自律実行を、組織単位で止められるということです。

## 何が変わったか

- JetBrains 版 Copilot のプラグインを**必須化・無効化**、または承認済みソースへ限定できる
- 追加マーケットプレイスの承認可否を管理者が決められる
- **MCP サーバーの allowlist / denylist を中央管理**できる
- OpenTelemetry の collector エンドポイントと resource attribute を中央管理できる
- **「Bypass Approvals」と「Autopilot」を管理者が無効化**できる
- 対象は Copilot Enterprise プラン

## 業務インパクト（一般企業向け）

**JetBrains を標準 IDE としている組織にとっては、導入判断の材料が変わる更新です**。Java / Kotlin / PHP / Python など JetBrains 系の IDE を主力にしている開発現場は多くありますが、Copilot の統制機能は VS Code 側が先行しがちでした。今回、プラグイン・MCP・テレメトリ・権限モードの4領域が管理者側から制御できるようになったことで、「統制できないから JetBrains では許可しない」という判断を見直せます。

**最も影響が大きいのは MCP の allowlist / denylist です**。MCP サーバーは社内システムや外部 SaaS への接続口になるため、開発者が自由に追加できる状態は、実質的にデータの出口を各自の判断に委ねていることになります。中央管理できるようになったことで、「接続を許可するサーバーを情報システム部門が定義し、それ以外は使えない」という運用が成立します。エージェント利用のセキュリティレビューで論点になりやすい部分が、設定で押さえられるようになりました。

**「Bypass Approvals」と「Autopilot」の無効化は、責任分界の話です**。自律実行を許すかどうかは、コード変更の承認プロセスをどこまでエージェントに任せるかの判断であり、開発者個人の設定に委ねるべきものではありません。組織単位で止められることで、既存のレビュー・承認フローとエージェントの動作を整合させられます。

**OpenTelemetry の中央管理は、利用状況の可視化に効きます**。collector のエンドポイントを揃えられるため、Copilot の利用データを組織の既存の可観測性基盤へ集約できます。導入効果の測定や、想定外の使われ方の検知につながります。

これらは設定を入れて初めて効くものなので、**すでに JetBrains で Copilot を配布している組織は、現状が「管理されていない状態」であることを確認するところから始めるのが現実的**です。

## 副業・個人活用視点

個人利用や小規模の副業では Copilot Enterprise を契約しないことが多く、**この更新が直接効く場面は限られます**。ただし、押さえておく価値のある観点が2つあります。

1つ目は、**クライアント企業の環境で作業する場合の前提**です。常駐や業務委託で企業の開発環境に入るとき、JetBrains 版 Copilot にこうした制限がかかっている可能性があります。自分の環境では使えていた MCP サーバーが接続できない、Autopilot が有効にできない、といった状況は仕様であって不具合ではありません。事前に「どこまで許可されているか」を確認しておくと、作業計画のずれを防げます。

2つ目は、**個人の環境でも同じ論点は存在する**ということです。MCP サーバーを気軽に追加していくと、どのツールがどこへデータを送っているか把握できなくなります。中央管理の仕組みがない分、自分で接続先を棚卸しする習慣が要ります。企業向け機能の内容は、そのまま「個人で気をつけるべきことのチェックリスト」として読めます。

副業で企業の AI 導入支援を行っている場合は、**JetBrains 環境の統制手段が揃ったこと自体が提案材料**になります。IDE の選択を理由に Copilot 導入を見送っていた組織へ、再検討を持ちかける根拠として使えます。
