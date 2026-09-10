---
title: "Claude Code リモート制御に「Trusted Devices」認証レイヤーを追加 — Team/Enterprise 管理者向け"
tool: "claude"
toolLabel: "Claude"
date: 2026-06-25
sourceUrl: "https://support.claude.com/en/articles/12138966-release-notes"
summary: "Team/Enterprise プランの管理者が、メンバーのローカル Claude Code セッションへのリモートアクセスを「信頼済みデバイス」に限定できるようになった。認証済みデバイスからのみリモート閲覧・操作が可能になり、組織デプロイ環境でのセキュリティが強化される。"
description: "管理者がポリシーとして Trusted Devices を有効化すると、メンバーはローカルで動作する Claude Code セッションをリモートから見たり操作したりする前にデバイス認証が必要になる。Team および Enterprise プランのみ対象。"
impact: "Claude Code のリモートセッション制御を組織の IT ポリシーに組み込める。意図しないリモートアクセスを防止し、機密プロジェクトを扱う環境での運用安全性が高まる。"
tags: ["claude", "claude-code", "remote-control", "security", "enterprise", "team"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## アップデート概要

Anthropic が 2026-06-25、Claude の Team および Enterprise プラン向けに「Trusted Devices for Remote Control」機能を追加した。ローカルで動作している Claude Code セッションをリモートから閲覧・操作する際に、事前のデバイス認証を必須化できる管理者向け機能だ。

## 何が変わったか

### リモートセッション制御に認証レイヤーが追加

Claude Code にはローカルで動作しているセッションを別のデバイスからリモートで閲覧・操作できる機能がある。今回の変更で、管理者はこのリモートアクセスの前提として「デバイス認証」を必須化できるようになった。

認証済みデバイス（Trusted Device）として登録されていないデバイスからはリモートセッションに接続できなくなる。

### 対象プランは Team / Enterprise のみ

この機能は Team プランおよび Enterprise プランのみが対象。管理者コンソールからポリシーとして有効化する。Free プランや Pro プランには適用されない。

## 業務インパクト（一般企業向け）

Claude Code を組織展開している企業では、「誰でもリモートからセッションを見られる・操作できる」状態が潜在的なリスクだった。今回の Trusted Devices 機能で、リモートアクセスを会社支給端末に限定するといったポリシー運用が可能になる。

機密情報を扱うプロジェクトで Claude Code を使っている場合や、開発環境のアクセス管理を IT 部門が統制したい場合に有効な選択肢になる。

## 副業・個人活用視点

個人の Pro プランや Free プランは対象外のため、直接の影響はない。ただし「Claude Code のリモート操作を組織が管理できるようになった」という事実は、Claude Code が企業のセキュリティポリシーに準拠しやすいツールになってきていることを示している。Claude Code を業務利用する際の判断材料として把握しておきたい変更だ。
