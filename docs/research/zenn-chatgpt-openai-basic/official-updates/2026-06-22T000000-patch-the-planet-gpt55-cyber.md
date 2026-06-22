---
date: 2026-06-22
title: "OpenAI GPT-5.5-Cyber リリース・Patch the Planet — OSS 脆弱性を AI で自動修正"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/patch-the-planet/
fetched_at: 2026-06-23T07:44:10+09:00
published_at: 2026-06-22T00:00:00Z
date_precision: date-only
category: release
---

# 2026-06-22 OpenAI GPT-5.5-Cyber + Patch the Planet

## 公式内容の日本語要約

防衛的セキュリティ特化モデル「GPT-5.5-Cyber」を正式リリース。同日に Trail of Bits・HackerOne と共同で OSS の脆弱性を AI 支援で発見・修正する「Patch the Planet」イニシアチブを発表。Codex Security プラグインもリリースされた。

## できるようになったこと

- GPT-5.5-Cyber: CyberGym 85.6%・ExploitGym 39.5%・SEC-bench Pro 69.8% を達成（単一モデル最高スコア）
- Codex Security プラグイン: 脆弱性検出とパッチ検証を Codex インターフェースに統合
- Patch the Planet プログラム: cURL・Go・Python・Sigstore ほか 30 以上の OSS プロジェクトを対象に AI が発見した脆弱性を Trail of Bits エンジニアが人手レビューのうえ PR 提出
- 第1週実績: PR 64件・Issue 51件（うち 19件修正済み）・マージ済みパッチ 37件

## 影響範囲

- 対象ユーザー: セキュリティ研究者・OSS メンテナー（参加申請制）
- 対象プラン: プログラム参加者に ChatGPT Pro・Codex Security・API クレジットを提供
- API / UI / 管理者機能: Codex Security プラグイン（Codex インターフェース統合）

## 教材化メモ

「AI がセキュリティ研究で使えるツール」の文脈で重要。GPT-5.5-Cyber はモデルの用途特化（general → security specialist）の具体例。Patch the Planet の「AI 発見 + 人間レビュー」パターンは「AI で代替できる部分と人間が担う部分の分担」を教える事例になる。OSS セキュリティへの AI 活用という社会的インパクトも教材化可能。

## 原文確認

- 公式見出し: Patch the Planet: a Daybreak initiative
- 公式URL: https://openai.com/index/patch-the-planet/
- 原文全文は公式ページで確認してください。
