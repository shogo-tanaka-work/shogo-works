---
title: "Anthropic が Enterprise Frontier Safeguards を公開ベータに：データを保持せずに最上位モデルを使うため、顧客自身のストレージで不正利用を監視する"
tool: "claude"
toolLabel: "Claude"
date: 2026-11-23
sourceUrl: "https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards"
summary: "Anthropic が、Zero Data Retention（ZDR）と不正利用の自動監視を両立させる Enterprise Frontier Safeguards（EFS）を公開ベータにした。入出力は顧客が用意した自社ストレージ（Amazon S3 または Google Cloud Storage）に暗号化して保存され、Anthropic もクラウド事業者もデータを保持せず、運営側の人間によるレビューも行わない。監視で異常が見つかると、入出力を含まない Safety Case が作られ、顧客側のチームが確認する。Claude Platform、Claude Platform on AWS、Amazon Bedrock、Claude on Google Cloud で利用でき、Microsoft Foundry は近日対応予定。Anthropic は EFS 自体に追加料金を取らない。"
description: "EFS の仕組み、3つの保証、Safety Case の扱い、提供範囲と対象外のデータ、導入前に確認すべき点を整理する。"
impact: "30日保持が必須の最上位モデル（Covered Models）を、データ保持なしで使う道が公式に用意された。引き換えに、自社のストレージ運用と Safety Case への対応が必要になり、7日以内の回答を逃すとアクセス停止の可能性がある。"
tags: ["claude", "zero-data-retention", "enterprise-frontier-safeguards", "セキュリティ", "ガバナンス", "ベータ", "claude-platform"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic は 2026-11-23、**Enterprise Frontier Safeguards（EFS）** を公開ベータにしました。EFS は、Zero Data Retention（ZDR、データを保持しない契約形態）と、不正利用の検知を両立させるための仕組みです。9月に発表され、100社以上の顧客と開発が進められてきました。

背景には、最上位モデル（公式は「Covered Models」と呼び、Claude Fable 5.2、Mythos 5.2 など）に **30日間のデータ保持が必須**という条件があることがあります。複数のリクエストにまたがる攻撃は、1件ずつ見ると無害に見えるため、パターンを検知するための記録が必要だというのが Anthropic の説明です。EFS はその記録を、**Anthropic ではなく顧客が持つストレージ**に置くことで、保持要件とデータ非保持を両立させます。

## 何が変わったか

公式が示す保証は3つです。

- **Zero data retention**: 顧客が用意したストレージに入出力が書き込まれたあとは、Anthropic もクラウド事業者も保持しません。アクセスポリシー、監査ログ、暗号鍵は顧客が管理します。
- **運営側の人間によるレビューなし**: Anthropic やクラウド事業者の担当者は入出力にアクセスしません。見るのは自動の安全監視システムだけです。
- **学習に使わない**: 入出力は安全監視のみに使い、モデルや分類器の学習には使いません。

監視で危険が見つかると **Safety Case** が作られます。Safety Case には入出力は含まれず、顧客のクラウドストレージまたは API から読み取れ、SIEM（セキュリティ情報イベント管理）とも連携できます。報道によると、顧客のセキュリティチームは7暦日以内に確認結果を回答する必要があり、無回答だとアクセスが停止される可能性があります。通知や Webhook は自動では届かないため、ストレージの監視または Safety Cases API のポーリングが要ります。

## 業務インパクト（一般企業向け）

**提供範囲**: Claude Platform、Claude Platform on AWS、Amazon Bedrock、Claude on Google Cloud で使えます。Microsoft Foundry は近日対応予定です。ストレージは Amazon S3 または Google Cloud Storage で、料金はクラウド事業者から通常どおり請求されます（読み書き、鍵操作、ネットワーク転送を含む）。Anthropic は EFS に料金を課さず、モデルの挙動、API 価格、レート制限も変わりません。

**確認すべき制限**（公式ドキュメントより）:

- 対象は、条件を満たす組織の**社内利用**です。HIPAA 対応を有効にしている組織は取得できません。
- Claude Platform では、EFS は**ワークスペース単位**で効き、そのワークスペースのすべてのモデルのリクエストに及びます。一部のトラフィックだけに適用したい場合は、ワークスペースを分けます。
- Messages API が対象で、コード実行コンテナ、Files API のアップロード、Batch API の結果、Claude Managed Agents のセッションなど、**機能側が自前で保存するデータは対象外**です。
- 設定には Organization Admin と顧客所有のストレージが必要で、顧客管理の暗号鍵は任意です。自社のチームも、保存された Sealed Safety Data（暗号化された入出力）は読めない仕様です。

つまり、「データを Anthropic に預けたくない」要件は満たせますが、**運用の責任が顧客側に移る**ことに注意が必要です。ストレージの管理、Safety Case の確認体制、期限内の回答フローを、導入前に決めておく必要があります。

## 副業・個人活用視点

EFS は企業の契約と管理者設定が前提で、個人や小規模事業者が直接使う機会は少ない機能です。ただし、受託案件で「顧客データを外部に保持させたくない」と求められたとき、**最上位モデルを使う場合は 30日保持が必須で、ZDR をそのまま使えないことがある**という点は、提案前に確認しておく価値があります。

使うモデルがデータ保持の対象かどうかを、提案段階で公式ドキュメントの「API and data retention」で確認し、必要なら EFS（顧客側での運用が前提）か、保持要件のないモデルかを選ぶ、という整理で案件の設計ができます。

## 関連リンク

- [Zero data retention with Enterprise Frontier Safeguards is now in beta（公式）](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards)
- [Enterprise Frontier Safeguards（公式ドキュメント）](https://platform.claude.com/docs/en/manage-claude/enterprise-frontier-safeguards/overview)
- [API and data retention（公式ドキュメント）](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)
