---
date: 2026-09-01
title: "Enterprise Frontier Safeguards（EFS）— 顧客管理のクラウドへ活動データを保存する方式"
service: "Claude"
source: https://www.anthropic.com/news/enterprise-frontier-safeguards
fetched_at: 2026-09-02T09:05:00+09:00
published_at: 2026-09-01T18:05:11Z
date_precision: timestamp
category: policy
---

# 2026-09-01 Enterprise Frontier Safeguards

教材化メモ: src/content/ai-news-notes/claude/enterprise-frontier-safeguards.mdx

## 公式内容の日本語要約

Anthropic が **Enterprise Frontier Safeguards（EFS）** を発表した。**ゼロデータ保持（ZDR）と同等のプライバシーを保ちながら、悪用検知のための監視を成立させる**ための仕組みである。実現方法は単純で、**監視に使う活動データを Anthropic ではなく顧客が管理するクラウドインフラに保存する。**

背景は 2026-06 のデータ保持ポリシーである。Fable 5 / Mythos 5 の公開に合わせて、Anthropic は**これらのモデルの全トラフィックに30日間のデータ保持を要求**した。サイバー攻撃への悪用を検知するためだが、規制産業の顧客を中心に「保持されるなら使えない」という反発が出ていた。EFS はその再設計にあたる。

Anthropic は、金融・ヘルスケア・製造・通信・法務・小売・公共の**100社超の顧客**と、AWS / Google Cloud / Microsoft Azure のクラウドパートナーと共同で設計したとしている。参加組織には米大手銀行の CISO が集まる ARC（Analysis and Resilience Center for Systemic Risk）や、Comcast、KPMG、Mastercard、Salesforce、Visa が含まれる。

EFS は3つの制御からなり、**それぞれが個別のオプトイン**である。(1) 顧客所有ストレージ — 活動データを Amazon S3 / Azure Blob Storage / Google Cloud Storage の顧客アカウントへ保存。(2) 顧客管理の暗号鍵（CMEK）。(3) 完全自動レビュー — Anthropic の人間によるレビューを介さない監視。検知した signal は顧客側へ送られ、**顧客自身のスタッフがレビューする。**

**いずれもモデルの挙動、API 価格、レート制限を変えない。** Anthropic は EFS 自体には課金しない。顧客が自社クラウドへ保存する場合、ストレージ・読み書き・エグレスの費用はクラウド事業者から顧客へ請求される。

提供は段階的で、**この秋（fall 2026）の広範提供を目標**とする。EFS が使えるようになるまでの間、対象顧客は Fable 5 / Fable 5.1 でゼロデータ保持を受けられる。対応面は Claude Code、Claude Enterprise、Claude Platform、Amazon Bedrock、Claude Platform on AWS、Google の Agent Platform、Microsoft Foundry。

**なお、非エンタープライズの購読者が Mythos クラスのモデルを使う場合、2026-06 のデータ保持ポリシーは引き続き適用される。**

## できるようになったこと

- 活動データの保存先を、顧客自身のクラウドアカウントに指定できる（EFS 提供後）
- 顧客管理の暗号鍵と、顧客側のアクセスポリシー・監査ログを適用できる
- Anthropic 側の人間によるレビューを介さない、完全自動の安全監視を選べる
- 直接契約でもクラウド経由でも同等の制御が受けられる
- EFS 提供までの間、対象顧客は Fable 5 / 5.1 でゼロデータ保持を受けられる

## 影響範囲

- 対象ユーザー: エンタープライズ顧客（対象要件あり。申請フォーム経由）
- 対象プラン: Claude Code / Claude Enterprise / Claude Platform / Bedrock / Claude Platform on AWS / Google Agent Platform / Microsoft Foundry
- API / UI / 管理者機能: 管理者側の設定。モデル挙動・価格・レート制限には影響しない
- **非エンタープライズ購読者の Mythos クラス利用は 2026-06 ポリシーのまま**

## 原文確認

- 公式見出し: Developing Enterprise Frontier Safeguards with our customers
- 公式URL: https://www.anthropic.com/news/enterprise-frontier-safeguards
- 補助: https://claude.com/form/enterprise-frontier-safeguards
- 原文全文は公式ページで確認してください。
