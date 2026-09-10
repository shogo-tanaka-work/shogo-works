---
title: "Patch the Planet：OpenAI の AI が OSS 30 以上のプロジェクトの脆弱性を修正する取り組み"
tool: "chatgpt-openai"
toolLabel: "ChatGPT / OpenAI"
date: 2026-06-22
sourceUrl: "https://openai.com/index/patch-the-planet/"
summary: "OpenAI が Trail of Bits・HackerOne と共同で立ち上げた OSS 脆弱性修正プログラム「Patch the Planet」の導入事例。GPT-5.5-Cyber を活用して cURL・Go・Python など 30 以上のプロジェクトを対象に自動診断と PR 提出を実施。第1週でマージ済みパッチ 37 件を達成。"
description: "AI（GPT-5.5-Cyber）が OSS の脆弱性を発見し、Trail of Bits のエンジニアが人手レビューのうえ各プロジェクトに PR を提出するという「AI 発見 + 人間レビュー」のワークフローを実運用した事例。Codex Security プラグインを活用して脆弱性検出と修正検証を実施している。"
impact: "AI を使った防衛的セキュリティ研究が実際の OSS コミュニティで成果を出した初の大規模事例。OSS メンテナーは参加申請で AI 支援を無償で受けられる。「AI がやること・人間がやること」の分担モデルが実証された。"
tags: ["chatgpt-openai", "security", "gpt-5-5-cyber", "codex", "oss"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 導入事例の概要

OpenAI は Trail of Bits・HackerOne と共同で「Patch the Planet」プログラムを立ち上げ、広く使われている OSS プロジェクトの脆弱性を AI が診断して修正 PR を提出する取り組みを開始した。

## プログラムの仕組み

セキュリティ特化の GPT-5.5-Cyber が対象 OSS リポジトリをスキャンして脆弱性の候補を洗い出す。Trail of Bits のセキュリティエンジニアがその結果を人手でレビューし、問題があると判断した箇所について各プロジェクトに PR を提出する。

**対象プロジェクト**（主要）: cURL・Go・Python・Sigstore ほか計 30 以上

「AI が発見し、人間がレビューしてコミュニティに提出する」というワークフローにより、AI の網羅的なスキャン能力と人間の判断を組み合わせている。

## 第1週の実績

- PR 64 件・Issue 51 件（うち 19 件修正済み）
- マージ済みパッチ 37 件

## GPT-5.5-Cyber の性能

本プログラムで活用されているセキュリティ特化モデルの主要ベンチマークスコア。

- **CyberGym**: 85.6%
- **ExploitGym**: 39.5%
- **SEC-bench Pro**: 69.8%

防衛的セキュリティ（脆弱性発見・パッチ提案）に重点を置いており、攻撃的な用途には制限がかかっている。

## Codex Security プラグイン

Patch the Planet の実施基盤として、Codex に脆弱性検出とパッチ検証を行う「Codex Security プラグイン」も利用されている。プログラム参加プロジェクト以外でも利用可能。

## Patch the Planet への参加

OSS メンテナーは参加申請することで、GPT-5.5-Cyber による脆弱性診断・Codex Security プラグイン・API クレジットの無償提供を受けられる。
