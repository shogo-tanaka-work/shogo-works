---
date: 2026-10-21
title: "Copilot Code（Frontier プログラムで展開開始）"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/copilot-code-make-the-power-of-coding-accessible-to-everyone/4562358
fetched_at: 2026-10-26T09:45:00+09:00
published_at: 2026-10-21
date_precision: date-only
category: release
---

# 2026-10-21 Copilot Code

## 公式内容の日本語要約

**Microsoft Copilot に、自然言語でアプリを作る Copilot Code が加わった。** 必要なものを自然言語で説明すると、業務文脈を使って動くアプリケーションを組み立てる。会話でアプリを編集し、コードを直接触り、ローカルで実行し、**Microsoft 管理のクラウドへ公開**できる。規模が大きくなったプロジェクトは GitHub リポジトリへ移し、draft pull request から始められる。

**展開は Frontier プログラム経由で開始**（2026-10-21 時点）。一般提供日の記載はない。必要なプラン・ライセンスの記載もない。管理者が有効化する必要があるかどうかも本文に明記はないが、**共有されたアプリは Copilot Managed Runtime 上で動き、組織が既に構成しているガバナンス・セキュリティ・管理の統制を継承する**と書かれている。

ガバナンス面で押さえるべき点は3つ。**Work IQ が、最初のプロンプトに書かれていなくてもメール・会議・ドキュメント・チャット・接続済みデータソースから要件を集める。** 共有アプリは「元データへの権限を持つ組織内の誰でも」利用でき、**既存のデータ権限が利用可否を決める。** ローカルに留めたプロジェクトは利用者の端末に残り、公開したアプリは Microsoft 管理のクラウド環境で動く。公式は「組織は何が作られるかを制御できる」と書いているが、具体的なデータ取り扱い・保持ポリシーは本文に無い。

## できるようになったこと

- 自然言語の説明から、業務文脈を使った動くアプリを生成・会話で編集できる
- ローカル実行、Microsoft 管理クラウドへの公開、GitHub リポジトリへの移行（draft PR）ができる

## 影響範囲

- 対象ユーザー: Frontier プログラム対象の Microsoft Copilot 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: Copilot（UI）、Copilot Managed Runtime、Work IQ

## 教材化メモ

- **「プロンプトに書いていない情報が要件収集に使われる」**点が最大の論点である。Work IQ がメール・会議・チャット・接続済みデータソースを読んで要件を補う。**利用者が意図して渡していない情報が生成物へ入りうる**ため、「何を入力したか」でデータ経路を説明できなくなる。社内のAI利用ルールを「入力してはいけない情報」の形で書いている組織は、この前提が崩れる。
- **権限がアプリの可用性を決める設計**（共有アプリは元データへの権限を持つ人だけが使える）は、市民開発のガバナンスとして筋が通っている。一方で**権限設計が雑な組織では、雑さがそのままアプリの共有範囲として露出する。** SharePoint の「Everyone except external users」棚卸し（10-06 の release notes）と同じ問題が別の面から出てくる。
- Frontier プログラム経由の early-access である点は、**「公式に出ているが自社では使えない」**類の告知として扱う必要がある。GA 日が無いため、教材では機能の存在ではなく論点（要件収集の範囲、権限と共有、ローカル／クラウドの実行場所）を残すのが妥当である。

## 原文確認

- 公式見出し: Copilot Code: Make the power of coding accessible to everyone
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/copilot-code-make-the-power-of-coding-accessible-to-everyone/4562358
- 原文全文は公式ページで確認してください。
